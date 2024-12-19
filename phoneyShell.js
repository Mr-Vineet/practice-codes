const echo = function (args) {
  return args.join(" ");
};

const cd = function (args) {
  currentDir = args.at(-1);
  return args;
};

const pwd = function () {
  return "/Users/vineetjain/" + args;
  return "/Users/vineetjain/workspace/js/practice";
};

let currentDir = "~";

while (true) {
  const commandToExecute = prompt("vineetjain@Vineets-MacBook-Pro " + currentDir + " % Phoney Shell");
  const [command, ...args] = commandToExecute.split(' ');
  
  const commands = ["echo", "cd", "pwd", "mkdir"];

  switch (command) {
    case "echo":
      console.log(echo(args));
      break;

    case "cd":
      cd(args);
      break;

    case "pwd":
      console.log(cd(args));
      break;

    default:
      break;
  }
}