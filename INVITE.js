const { MessageEmbed, Client } = require("discord.js");

const client = new Client()

module.exports = {

  name: "invite",

  aliases: ["inv","رابط","بوت","لانك","in","linvit"],

  execute(message) {

    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()

      .setTitle("NeutronPrime invite")

      .setColor("#F8AA2A");

    commands.forEach((cmd) => {

      
    
        
      

    
    });

    helpEmbed.setTimestamp();

helpEmbed.addField(`this link for invite bot `, "https://discord.com/api/oauth2/authorize?client_id=742046734783610900&permissions=3464256&scope=bot")

     message.author.send(helpEmbed).catch(error => {

      return message.reply(`:x: | Your dm s closed.`)

    });

    message.reply(`:white_check_mark: | Check your dm.`)

  }

};

