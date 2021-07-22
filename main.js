const Discord = require('discord.js')
const Canvas = require('canvas');
const imageapi = require('blueapi.js');
const client = new Discord.Client({partials:['MESSAGE','CHANNEL','REACTION']})
const config = require('./config.json')
const token = config.token
const image = "welcome.jpg"
const prefix = '/'
const fs = require('fs')

client.commands = new Discord.Collection()

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles){
    const command = require(`./commands/${file}`)
    client.commands.set(command.name,command)
}


client.once('ready',() => {
    console.log(`${client.user.username} is online!`)
})
client.on('message',message=> {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase()

    if(command ==='rules'){
        client.commands.get('rules').execute(message,args,client);
    }else if(command === 'reactionroles'){
        client.commands.get('reactionroles').execute(message,args,Discord,client);
    }else if(command === 'clearmessage'){
      client.commands.get('clear').execute(message,args);
    }else if(command === 'test'){
      client.emit("guildMemberAdd",message.member)
    }
})
const welcome = require("./commands/welcome");
welcome(client);
// client.handleWelcome = async function(member, channel) {
//     try {
//       if (!member || !channel || member.user.bot) return;
//       const joinedusername = member.user.username.length > 11 ? member.user.username.substring(0, 11) : member.user.username;
//       const canvas = Canvas.createCanvas(700, 250);
//       const context = canvas.getContext('2d');
//       context.font = '60px Rockwell Std';
//       const background = await Canvas.loadImage(image);
//       context.drawImage(background, 0, 0, canvas.width, canvas.height);
//       const avatar = await Canvas.loadImage(await imageapi.image.circle(member.user.displayAvatarURL({
//         format: 'jpg',
//         size: 128
//       })));
//       context.drawImage(avatar, 25, 25, 200, 200);
//       context.beginPath();
//       context.strokeStyle = "white";
//       context.lineWidth = 7;
//       context.arc(122, 125, 99, 0, Math.PI * 2, true);
//       context.stroke();
//       context.closePath();
//       context.beginPath();
//       context.arc(122, 125, 99, 0, Math.PI * 2, true);
//       context.closePath();
//       context.fillStyle = '#ffffff';
//       context.fillText(`Welcome`, canvas.width / 2.2, canvas.height / 2.7)
//       context.fillText(`${joinedusername}#${member.user.discriminator}`, canvas.width / 2.5, canvas.height / 1.4)
//       const attachment = new Discord.MessageAttachment(canvas.toBuffer(), `welcome_${member.user.id}.jpg`);
//       member.user.send(`**Welcome ${member} to \`${member.guild.name}\`**`, attachment).then(async msg => {
//         let link = msg.attachments.first().url;
//         const embed = new Discord.MessageEmbed()
//           .setImage(link)
//           .setColor("#A83E32" || 'RANDOM')
//           .setFooter(`You Are Member #${member.guild.memberCount}!`)
//         channel.send(`**Welcome ${member} to \`${member.guild.name}\`**`, embed)
//       })
//     } catch (err) {
//         console.log(err)
//     }
//   }
  
//   client.on('guildMemberAdd', async member => {
//     const channel_id=config.channel_id
//     if (member.guild.id != client.channels.cache.get(channel_id).guild.id) return;
//     client.handleWelcome(member, client.channels.cache.get(channel_id))
//   })

client.login(token)