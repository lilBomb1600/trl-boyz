const sharp = require("sharp");

async function main() {
  const src = "public/images/textures/blood-drip.png";
  const img = sharp(src);
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  const out = Buffer.alloc(width * height * 4);

  for (let i = 0; i < width * height; i++) {
    const r = data[i * channels];
    const g = data[i * channels + 1];
    const b = data[i * channels + 2];
    const minC = Math.min(r, g, b);
    let alpha = 255 - minC; // near-white/gray -> transparent, saturated color -> opaque
    if (alpha < 18) alpha = 0; // drop faint JPEG-compression noise from the flattened checkerboard

    let outR = r, outG = g, outB = b;
    if (alpha > 4) {
      const a = alpha / 255;
      outR = Math.max(0, Math.min(255, Math.round((r - (1 - a) * 255) / a)));
      outG = Math.max(0, Math.min(255, Math.round((g - (1 - a) * 255) / a)));
      outB = Math.max(0, Math.min(255, Math.round((b - (1 - a) * 255) / a)));
    }

    out[i * 4] = outR;
    out[i * 4 + 1] = outG;
    out[i * 4 + 2] = outB;
    out[i * 4 + 3] = alpha;
  }

  await sharp(out, { raw: { width, height, channels: 4 } })
    .png()
    .toFile("public/images/textures/blood-drip-alpha.png");

  console.log("done", width, height);
}

main();
