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

const remove = async () => {
  const existFileForDelete = await dirOrFileExist(
    pathToFiles + "files\\fileToRemove.txt"
  );

  if (existFileForDelete) {
    await fs.rm(pathToFiles + "files\\fileToRemove.txt");
  } else {
    throw new Error("FS operation failed");
  }
};

await remove();
