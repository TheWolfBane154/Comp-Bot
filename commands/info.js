module.exports.run = (bot, message, args, Discord) => {
let name = bot.user
let ping = bot.ping

let em = new Discord.Client()
.setTitle("Bot info")
.setDescription("Did you read me?")
.addField("Name", name)
.addField("Ping", ping)

message.channel.send({embed: em})

}

module.exports.help = {
  "name": "info"
}
