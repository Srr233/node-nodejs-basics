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

const copy = async () => {
  const existFilesFolder = await dirOrFileExist(pathToFiles + "files\\");
  const existFilesCopyFolder = await dirOrFileExist(pathToFiles + "files_copy");

  if (existFilesFolder && !existFilesCopyFolder) {
    const data = await fs.readdir(pathToFiles + "files_copy");
    await fs.mkdir(pathToFiles + "files_copy");

    for (const name of data) {
      await fs.copyFile(
        pathToFiles + "files\\" + name,
        pathToFiles + "files_copy\\" + name
      );
    }
  } else {
    throw new Error("FS operation failed");
  }
};

await copy();
