import fs from "fs/promises";

const pathToFiles = process.cwd() + "\\src\\fs\\";

async function dirOrFileExist(path) {
  try {
    await fs.access(path);
    return true;
  } catch (err) {
    return false;
  }
}

const read = async () => {
  const existFileToRead = await dirOrFileExist(
    pathToFiles + "files\\fileToRead.txt"
  );

  if (existFileToRead) {
    const data = await fs.readFile(
      pathToFiles + "files\\fileToRead.txt",
      "utf-8"
    );
    for (const name of data) {
      process.stdout.write(name);
    }
  } else {
    throw new Error("FS operation failed");
  }
};

await read();
