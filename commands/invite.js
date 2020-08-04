const Discord = require('discord.js');
module.exports = {
    name: 'invite',
    execute(client, message, args) {
const exampleEmbed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('Add me to your discord server')
.setURL('https://discord.com/oauth2/authorize?client_id=735646331703394345&scope=bot&permissions=8')
.setFooter('Made by SeekNExpose#4157 | Helper - Meliodaf#1900')
message.channel.send(exampleEmbed);
    }
}