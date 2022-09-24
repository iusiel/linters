const fs = require("fs");
const { exec } = require("child_process");

exec(
  'npx jscpd --reporters "json" --output reports/ resources/js',
  function (err, stdout, stderr) {
    if (stdout.indexOf("Clone found") !== -1) {
      process.exit(1);
    } else {
      process.exit(0);
    }
  }
);
