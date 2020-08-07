const Discord = require('discord.js');
module.exports = {
    name: 'rrole',
    description: 'Bruh command',
    category: 'general',
    usage: 'server',
    async execute(client, message, args) {
        if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply('You have no permission');
        let rMember = message.guild.member(message.mentions.users.first()) || message.guild.member.get(args[0]);
        if(!rMember) return message.reply("Couldn't Find The User.");
        let role = args[1];
        if(!role) return message.reply("Specify a role");
        console.log(role)
        let gRole = message.guild.roles.cache.find(rolez => rolez.name ===  role);
        if(!gRole) return message.reply("Couldn't Find That Role");
        if(message.member.roles.highest.position<gRole.position) return message.channel.send(`Sorry, you can't take a role higher than your highest role`)

        if(!rMember.roles.cache.has(gRole.id)) return message.channel.send(`${rMember} doesn't have the role you wish to remove.`);
        await(rMember.roles.remove(gRole.id));

        try{
            await rMember.send(`RIP, you just lost the ${gRole.name} role`)
            await message.channel.send(`RIP ${rMember}, You just lost the ${gRole.name} role.`)
        }catch(e){
            return ;
        }
    }
}