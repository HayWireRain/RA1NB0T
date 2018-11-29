//Commands Module for RA1NB0T

module.exports.load = (bot) => {
  commands.test = {
      "channel": null,
      "execute": async (message, args) => {
          message.channel.sendMessage('Hey! :wave:')
      },
  }
  commands.help = {
      "channel": null,
      "execute": async (message, args) => {
        message.channel.startTyping();
          const embed = {
              "title": "__Command List__",
              "description": "Visit the bot's page on my website [here](http://www.rainsoftware.tk/downloads/Bots/ra1nb0t/) ",
              "color": 3252442,
              "footer": {
                "icon_url": "http://rainsoftware.tk/images/homepage/rlogo2.png",
                "text": "Rain#4769"
              },
              "thumbnail": {
                "url": "http://rainsoftware.tk/images/rainbotassets/Avatar-opt1.png"
              },
              "author": {
                "name": "RA1NB0T",
                "url": "http://www.rainsoftware.tk/downloads/Bots/ra1nb0t/",
                "icon_url": "http://rainsoftware.tk/images/rainbotassets/Avatar-opt1.png"
              },
              "fields": [
                {
                  "name": "Help",
                  "value": "```help```"
                },
                {
                  "name": "Ping",
                  "value": "```ping``````pinguser <@user>```"
                },
                {
                  "name": "Say",
                  "value": "```say <message>```"
                },
                {
                  "name": "Hello",
                  "value": "```hello```"
                },
                {
                  "name": "Coin Flip",
                  "value": "```flip```"
                }
              ]
            };
            message.channel.send({ embed });
        message.channel.stopTyping();  
      },
  }
  commands.ping = {
      "channel": null,
      "execute": async (message, args) => {
        message.channel.startTyping();
          const embed = {
              "title": "__Ping__",
              "description": "Pong! :ping_pong: ",
              "color": 3252442,
              "thumbnail": {
                "url": "http://rainsoftware.tk/images/rainbotassets/Avatar-opt1.png"
              },
              "author": {
                "name": "RA1NB0T",
                "url": "http://www.rainsoftware.tk/downloads/Bots/ra1nb0t/",
                "icon_url": "http://rainsoftware.tk/images/rainbotassets/Avatar-opt1.png"
              }
            };
            message.channel.send({ embed });
        message.channel.stopTyping();
          //message.channel.sendMessage('Hey! :wave:')
          //message.reply('Pong! :ping_pong: ')
      },
  }
  commands.pinguser = {
    "channel": null,
    "execute": async (message, args) => {
      var user = message.mentions.users.first() || message.author
      message.channel.startTyping();

        message.channel.sendMessage(`${user}`)
      message.channel.stopTyping();
    },
    
}
  commands.say = {
      "channel": null,
      "execute": async (message, args) => {
        message.channel.startTyping();
          message.channel.sendMessage('this command is not yet implemented.')
        message.channel.stopTyping();
      },
  }
  commands.flip = {
      "channel": null,
      "execute": async (message, args) => {
        message.channel.startTyping();
          message.channel.sendMessage('this command is not yet implemented.')
        message.channel.stopTyping();
      },
  }
  commands.hello = {
      "channel": null,
      "execute": async (message, args) => {
        message.channel.startTyping();
          const embed = { 
              "title": "__Hello__",
              "description": "Hey! :smile: :wave:",
              "color": 3252442,
              "thumbnail": {
                "url": "http://rainsoftware.tk/images/rainbotassets/Avatar-opt1.png"
              },
              "author": {
                "name": "RA1NB0T",
                "url": "http://www.rainsoftware.tk/downloads/Bots/ra1nb0t/",
                "icon_url": "http://rainsoftware.tk/images/rainbotassets/Avatar-opt1.png"
              }
            };
            message.channel.send({ embed });
        message.channel.stopTyping();
      },
  }
  commands.apologize = {
    "channel": null,
    "execute": async (message, args) => {
        message.channel.sendMessage('I am really sorry. I hope that you can find it somewhere in your heart to forgive me. :cry:')
    },
  }
};