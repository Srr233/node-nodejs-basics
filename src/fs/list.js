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

const list = async () => {
  const existFilesFolder = await dirOrFileExist(pathToFiles + "files");

  if (existFilesFolder) {
    const data = await fs.readdir(pathToFiles + "files");

    for (const name of data) {
      process.stdout.write(name + "\n");
    }
  } else {
    throw new Error("FS operation failed");
  }
};

await list();
