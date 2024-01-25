const parseArgs = () => {
  const data = process.argv;
  const args = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].includes("--"))
      args.push(`${data[i].slice(2)} is ${data[i + 1]}`);
  }

  process.stdout.write(args.join(" "));
};

parseArgs();
