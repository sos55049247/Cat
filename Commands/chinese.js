const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


    return message.channel.send("那..那個 中文說的不太好 請不要介意><");

}

module.exports.help = {
    name: "chinese"
}