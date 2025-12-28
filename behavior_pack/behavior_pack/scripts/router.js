import { commands } from "./commands/index.js";

export function runCommand(player, name, args = []) {
  const cmd = commands[name];
  if (!cmd) {
    player.sendMessage(`§cUnknown command: ${name}`);
    return;
  }
  cmd.execute(player, args);
}

export function handleChat(player, message) {
  const parts = message.slice(1).split(" ");
  const name = parts.shift().toLowerCase();
  runCommand(player, name, parts);
}
