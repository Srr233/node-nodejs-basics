import fs from "fs";

const pathToFile = process.cwd() + "\\src\\streams\\files\\fileToRead.txt";

const read = async () => {
  const readableStream = fs.createReadStream(pathToFile);
  readableStream.pipe(process.stdout);
};

await read();
