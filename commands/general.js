const Discord = require('discord.js');
const fs = require('fs');
module.exports = {
    name: 'general',
    execute(client, message, args) {
        if(args[0])
        return;
        const general = new Discord.MessageEmbed()
        .setTitle('General Commands')
        .addField("**support**", "`Show you a discord link to Legend World Support Server`")
        .addField("**invite**", "`Allows you to add me to your server`")
        .addField("**whois**", "`Show your discord information (Not private)`")
        .addField("**stats**", "`Show you the bot stats`")
        .setColor('RANDOM')
        .setDescription([`**${client.prefixes[message.guild.id].prefixes}help <command> 
        Example: ${client.prefixes[message.guild.id].prefixes}help-support **`
        ].join('\n\n'))
        .setFooter(`Made by SeekNExpose#4157`, `${client.users.cache.get('735646331703394345').avatarURL({
            format: 'png',
            dynamic: true,
            size: 256
        })}`);
        message.channel.send(general);
    }
}