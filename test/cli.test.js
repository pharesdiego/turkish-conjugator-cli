const { exec } = require("child_process");
const path = require("path");
const file = path.resolve(process.cwd(), "index.js");

test("CLI gitmek", (done) => {
  exec(file + " gitmek", (error, stdout) => {
    expect(stdout).toMatchSnapshot();
    done();
  });
});

test("CLI gitmek --aorist", (done) => {
  exec(file + " gitmek --aorist", (error, stdout) => {
    expect(stdout).toMatchSnapshot();
    done();
  });
});

test("CLI gitmek --gerund", (done) => {
  exec(file + " gitmek --gerund", (error, stdout) => {
    expect(stdout).toMatchSnapshot();
    done();
  });
});

test("CLI no valid verb", (done) => {
  exec(file + " gitmasdqwd", (error, stdout) => {
    expect(stdout).toMatchSnapshot();
    done();
  });
});

test("CLI ignore no valid options", (done) => {
  exec(file + " gitmek --hola --yes --aorist", (error, stdout) => {
    expect(stdout).toMatchSnapshot();
    done();
  });
});