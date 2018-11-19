const Discord = require("discord.js");
const config = require("./config.json");
const bot = new Discord.Client({disableEveryone: true});
const fs = require("fs");
bot.commands = new Discord.Collection();


fs.readdir("./commands/", (err, files) => {
  if (err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("沒有讀取到任何指令...")
    return;
  }

  jsfile.forEach((f, i) => {
    let props = require(`./commands/${f}`)
    console.log(`${f} 已載入!`)
    bot.commands.set(props.help.name, props);
  })
})

bot.on("ready", async () => {
    console.log(`${bot.user.username} 已上線!`)
     bot.user.setActivity("Princess Sweetness ♪", {type: "WATCHING"});
});

bot.on('message', async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;     

  let prefix = config.prefix;
  let messageArray = message.content.split(" ")
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length))
  if(commandfile) commandfile.run(bot, message,args);

})

bot.login(config.token);