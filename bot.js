const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./auth.json");
const Request = require("request");
const giphy = require("giphy-api")(config.giphyApiKey);

// Command files to import
const helpCmd = require("./commands/help.js");
const kenobi = require("./commands/hello.js");

client.on("ready", () => {
  console.log("Ready to rock and/or roll");
});

// Prefix for is pulled from auth.json
client.on("message", (message) => {

  // This stops the code to run if there is no prefix in the message or the author is a bot
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  // This makes the commands case insensitive
  var msg = message.content.toLowerCase();
  var reply = message.reply
  // Text commands for bot
  switch (command)
  {
    case "help":
    helpCmd.helpMe(message);
    break;
  }
});

client.login(config.token);
