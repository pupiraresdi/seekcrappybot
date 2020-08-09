const Discord = require('discord.js');
const fs = require('fs');
module.exports = {
    name: 'other',
    execute(client, message, args) {
        const other = new Discord.MessageEmbed()
            .setTitle('Other Commands')
            .setDescription("`ping`- Show you your ping.")
            .setColor('RANDOM')
            .setFooter(`Made by SeekNExpose#4157`, `${client.users.cache.get('713290150750453832').avatarURL({
                format: 'png',
                dynamic: true,
                size: 256
                })}`);
        message.channel.send(other)
    }
}