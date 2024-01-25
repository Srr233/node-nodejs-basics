import { Worker } from "worker_threads";
import os from "os";

const pathToFile = process.cwd() + "\\src\\wt\\worker.js";

const performCalculations = async () => {
  const lengthOfCPUS = os.cpus().length;

  const arr = [];
  for (let i = 0; i < lengthOfCPUS; i++) {
    arr.push(
      new Promise((resolve, reject) => {
        const worker = new Worker(pathToFile, {
          workerData: 10 + i,
        });
        worker.on("message", resolve);
        worker.on("error", reject);
      })
        .then((dataN) => ({ status: "resolved", data: dataN }))
        .catch(() => ({ status: "error", data: "null" }))
    );
  }

  Promise.all(arr).then((data) => console.log(data));
};

await performCalculations();
