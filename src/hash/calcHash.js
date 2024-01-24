import { createHash } from "crypto";
import fs from "fs";

const pathToFile =
  process.cwd() + "\\src\\hash\\files\\fileToCalculateHashFor.txt";

const calculateHash = async () => {
  const readStream = fs.createReadStream(pathToFile);
  const hash = createHash("sha256");
  hash.setEncoding("hex");

  readStream.pipe(hash).pipe(process.stdout);
};

await calculateHash();
