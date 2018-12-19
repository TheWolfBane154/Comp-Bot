module.exports.run = (bot, message, args, Discord) => {

let em = new Discord.Client()
.setTitle("Bot info")
.setDescription("Did you read me?")
.addField("Name", "DOJRPBOT")
.addField("Ping", bot.ping)

message.channel.send({embed: em})

}

module.exports.help = {
  "name": "info"
}
