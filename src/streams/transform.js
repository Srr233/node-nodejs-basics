import { Transform } from "stream";

const transform = async () => {
  const transform = new Transform({
    transform(chunk, _, callback) {
      callback(
        null,
        Array.from(chunk.toString("utf-8")).reverse().join("") + "\n"
      );
    },
  });
  process.stdin.pipe(transform).pipe(process.stdout);
};

await transform();
