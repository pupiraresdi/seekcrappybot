const Discord = require('discord.js');
module.exports = {
    name: 'invite',
    execute(client, message, args) {
const exampleEmbed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('Add me to your discord server')
.setURL('https://discord.com/oauth2/authorize?client_id=735646331703394345&scope=bot&permissions=2146958847')
.setFooter(`Made by SeekNExpose#4157`, `${client.users.cache.get('713290150750453832').avatarURL({
    format: 'png',
    dynamic: true,
    size: 256
    })}`);
message.channel.send(exampleEmbed);
    }
}