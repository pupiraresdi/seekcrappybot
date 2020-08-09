const Discord = require('discord.js');
const fs = require('fs');
module.exports = {
    name: 'help-whois',
    execute(client, message, args) {
        const embed = new Discord.MessageEmbed()
            .setTitle('Help Whois')
            .setDescription([
                `**Name:** whois`,
                `**Description:** Show you your discord information (Not private)`,
                `**Command:** ${client.prefixes[message.guild.id].prefixes}whois`,
                `**Command:** ${client.prefixes[message.guild.id].prefixes}whois (user)`,
            ].join('\n\n'))
            .setFooter(`Made by SeekNExpose#4157`, `${client.users.cache.get('713290150750453832').avatarURL({
                format: 'png',
                dynamic: true,
                size: 256
                })}`);
            message.channel.send(embed)
    }
}