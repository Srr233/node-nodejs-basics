import zlib from "zlib";
import fs from "fs";

const pathToFile = process.cwd() + "\\src\\zip\\files\\";

const decompress = async () => {
  const readStream = fs.createReadStream(pathToFile + "archive.gz");
  const writeStream = fs.createWriteStream(pathToFile + "fileToCompress.txt");

  readStream.pipe(zlib.createUnzip()).pipe(writeStream);
};

await decompress();
