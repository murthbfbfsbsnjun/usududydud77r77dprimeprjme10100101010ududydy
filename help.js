const { MessageEmbed, Client } = require("discord.js");
const client = new Client()
module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Display all commands and descriptions",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
      .setTitle("NeutronPrime Help")
      .setDescription("List of all commands")
      .setColor("#F8AA2A");

    commands.forEach((cmd) => {
      helpEmbed.addField(
        `**${message.client.prefix}${cmd.name} ${cmd.aliases ? `(${cmd.aliases})` : ""}**`,
        `${cmd.description}`,
        true
      );
    });

    helpEmbed.setTimestamp();
helpEmbed.addField(`-invite`, "To get link invite bot ")
     message.author.send(helpEmbed).catch(error => {
      return message.reply(`:x: | Your dm's closed.`)
    });
    message.reply(`:white_check_mark: | Check your dm.`)
  }
};

    