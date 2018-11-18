const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


    return message.channel.send("Hello >w</");

}

module.exports.help = {
    name: "hi"
}