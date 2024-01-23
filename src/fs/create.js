import fs from "fs/promises";

const pathToFiles = process.cwd() + "\\src\\fs\\files";
const create = async () => {
  await fs
    .access(pathToFiles + "\\fresh.txt")
    .then(() => {
      throw Error("FS operation failed");
    })
    .catch(async (err) => {
      if (err.message === "FS operation failed") throw err;
      await fs.writeFile(pathToFiles + "\\fresh.txt", "I am fresh and young");
    });
};

await create();
