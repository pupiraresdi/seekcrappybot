const Discord = require('discord.js');
const fs = require('fs');
module.exports = {
    name: 'help-invite',
    execute(client, message, args) {
        const embed = new Discord.MessageEmbed()
            .setTitle('Help Invite')
            .setDescription([
                `**Name:** Invite`,
                `**Description:** Add me to your server`,
                `**Command:** ${client.prefixes[message.guild.id].prefixes}invite`
            ].join('\n\n'))
            .setFooter(`Made by SeekNExpose#4157`, `${client.users.cache.get('713290150750453832').avatarURL({
                format: 'png',
                dynamic: true,
                size: 256
                })}`);
            message.channel.send(embed)
    }
}