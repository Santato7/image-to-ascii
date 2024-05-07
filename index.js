const fs = require("fs");
const { createCanvas, loadImage } = require("canvas");

async function asciiConvert(imagePath, saveAs, scale) {
  scale = parseInt(scale);

  const img = await loadImage(imagePath);
  const canvas = createCanvas(img.width, img.height);
  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0, img.width, img.height);

  const resizedCanvas = createCanvas(img.width / scale, img.height / scale);
  const resizedCtx = resizedCanvas.getContext("2d");
  resizedCtx.drawImage(canvas, 0, 0, img.width / scale, img.height / scale);

  const imageData = resizedCtx.getImageData(
    0,
    0,
    resizedCanvas.width,
    resizedCanvas.height
  );
  const pix = imageData.data;

  const w = resizedCanvas.width;
  const h = resizedCanvas.height;

  const grid = new Array(h).fill(null).map(() => new Array(w).fill("X"));

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const offset = (y * w + x) * 4;
      const sum = pix[offset] + pix[offset + 1] + pix[offset + 2];

      if (sum === 0) {
        grid[y][x] = "#";
      } else if (sum >= 1 && sum < 100) {
        grid[y][x] = "X";
      } else if (sum >= 100 && sum < 200) {
        grid[y][x] = "%";
      } else if (sum >= 200 && sum < 300) {
        grid[y][x] = "&";
      } else if (sum >= 300 && sum < 400) {
        grid[y][x] = "*";
      } else if (sum >= 400 && sum < 500) {
        grid[y][x] = "+";
      } else if (sum >= 500 && sum < 600) {
        grid[y][x] = "/";
      } else if (sum >= 600 && sum < 700) {
        grid[y][x] = "(";
      } else if (sum >= 700 && sum < 750) {
        grid[y][x] = "'";
      } else {
        grid[y][x] = " ";
      }
    }
  }

  const art = fs.createWriteStream(saveAs);

  for (const row of grid) {
    art.write(row.join("") + "\n");
  }

  art.close();
}

const imagePath = process.argv[2];
const scale = process.argv[3] ? process.argv[3] : 3;

asciiConvert(imagePath, "output.txt", scale);
