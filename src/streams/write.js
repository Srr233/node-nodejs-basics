import fs from "fs";

const pathToFile = process.cwd() + "\\src\\streams\\files\\fileToWrite.txt";

const write = async () => {
  const writeStream = fs.createWriteStream(pathToFile);
  process.stdin.pipe(writeStream);
};

await write();
