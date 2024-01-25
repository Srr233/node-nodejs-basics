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

const rename = async () => {
  const existWrongFileName = await dirOrFileExist(
    pathToFiles + "files\\" + "wrongFilename.txt"
  );
  const existProperFileName = await dirOrFileExist(
    pathToFiles + "files\\" + "properFilename.md"
  );

  if (existWrongFileName && !existProperFileName) {
    fs.rename(
      pathToFiles + "files\\wrongFilename.txt",
      pathToFiles + "files\\properFilename.md"
    );
  } else {
    throw new Error("FS operation failed");
  }
};

await rename();
