const Discord = require('discord.js');
module.exports = {
    name: 'grole',
    description: 'Bruh command',
    category: 'general',
    usage: 'server',
    async execute(client, message, args) {
        if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply('You have no permission');
        let rMember = message.guild.member(message.mentions.users.first()) || message.guild.member.get(args[0]);
        if(!rMember) return message.reply("Couldn't Find The User.");
        let role = args[1];
        if(!role) return message.reply("Specify a role");
        let gRole = message.guild.roles.cache.find(rolez => rolez.name ===  role);
        if(!gRole) return message.reply("Couldn't Find That Role");
        if(message.member.roles.highest.position<gRole.position) return message.channel.send(`Sorry, you can't give a role higher than your highest role`)

        if(rMember.roles.cache.has(gRole.id)) return message.channel.send(`${rMember} already has the role you wish to add.`);
        await(rMember.roles.add(gRole.id));

        try{
            await rMember.send(`Congrats, you have been given the role ${gRole.name}`)
            await message.channel.send(`Congrats to ${rMember}, they have been given the role ${gRole.name}.`)

        }catch(e){
            await message.channel.send(`Congrats to ${rMember}, they have been given the role ${gRole.name}.`)

        }
    }
}