const Discord = require('discord.js')
const config = require('./bot-config/config.json')

module.exports = {
    name: "help",
    description: "Sends a embed of all the commands of Entity Bot",
    execute(message) {
        const helpembed = new Discord.MessageEmbed()
            .setColor(`RANDOM`)
            .setTitle(`Entity's Help Page!`)
            .setDescription(`Prefix: \`${config.prefix}\``)
            .addFields(
                { name: '**:tools: Utillty Commands**', value: "`ping` `staff`" },
            )
            .setFooter(`Asked by ${message.author.tag}`)
            .setTimestamp();
        message.channel.send({
            embeds: [helpembed]
        });
    }
}