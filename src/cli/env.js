const parseEnv = () => {
  const envs = process.env;
  const arrOfRSSEnvs = [];

  for (const name in envs) {
    if (name.includes("RSS_")) arrOfRSSEnvs.push(name + "=" + envs[name]);
  }

  process.stdout.write(arrOfRSSEnvs.reduce((p, c) => p + " " + c));
};

parseEnv();
