import { spawn } from "child_process";
const pathToFile = process.cwd() + "\\src\\cp\\files\\script.js";

const spawnChildProcess = async (args) => {
  const spawned = spawn(`node`, [pathToFile, ...args]);
  spawned.stdout.pipe(process.stdout);
  process.stdin.pipe(spawned.stdin);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["--arg", "wads"]);
