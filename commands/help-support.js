const Discord = require('discord.js');
const fs = require('fs');
module.exports = {
    name: 'help-support',
    execute(client, message, args) {
        const embed = new Discord.MessageEmbed()
            .setTitle("Help support")
            .setDescription([
            `**Name:** support`,
            `**Description:** Invites you to my server`,
            `**Command:** ${client.prefixes[message.guild.id].prefixes}support`
            ].join('\n\n'))
            .setFooter(`Made by SeekNExpose#4157`, `${client.users.cache.get('713290150750453832').avatarURL({
                format: 'png',
                dynamic: true,
                size: 256
                })}`);
        message.channel.send(embed)
    }
}