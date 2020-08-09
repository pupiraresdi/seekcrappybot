const Discord = require('discord.js');
const fs = require('fs');
module.exports = {
    name: 'moderation',
    usage: 'server',
    execute(client, message, args) {
        const i = new Discord.MessageEmbed()
            .setTitle('Moderation Commands')
            .setDescription(`${client.prefixes[message.guild.id].prefixes}help [command]`)
            .addField("`prefix`", "Changes the bot prefix")
            .setColor('RANDOM')
            .setFooter(`Made by SeekNExpose#4157`, `${client.users.cache.get('713290150750453832').avatarURL({
                format: 'png',
                dynamic: true,
                size: 256
                })}`);
        message.channel.send(i)
    }
}
