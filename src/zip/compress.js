import zlib from "zlib";
import fs from "fs";

const pathToFile = process.cwd() + "\\src\\zip\\files\\";

const compress = async () => {
  const readStream = fs.createReadStream(pathToFile + "fileToCompress.txt");
  const writeStream = fs.createWriteStream(pathToFile + "archive.gz");

  readStream.pipe(zlib.createGzip()).pipe(writeStream);
};

await compress();
