module.exports = {
  apps: [
    {
      name: "transfer.sh",
      script: "go run main.go --provider=local --listener :9000 --temp-path=/tmp/ --basedir=/tmp/ --cors-domains * --purge-days 7",
      cwd: __dirname,
      instances: 1,
    },
  ],
};
