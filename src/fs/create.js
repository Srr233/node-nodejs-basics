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

const create = async () => {
  const existFreshFile = await dirOrFileExist(
    pathToFiles + "files\\" + "fresh.txt"
  );
  if (!existFreshFile) {
    await fs.writeFile(
      pathToFiles + "files" + "\\fresh.txt",
      "I am fresh and young"
    );
  } else {
    throw new Error("FS operation failed");
  }
};

await create();
