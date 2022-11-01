const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();

module.exports = {

    name: "ping",
    description: "montre la latence du bot",
    owner: false,
    /**
     * @param {Client} client
     * @param {CommandInteraction} interaction
     */

     run: async (client, interaction) => {
        if(!interaction.guild.members.me.permissions.has(Discord.PermissionsBitField.resolve("SendMessages"))) return interaction.reply({ content: `Je n'ai pas les bonnes permissions pour effectuer votre commande`})
        if(!interaction.member.permissions.has(Discord.PermissionsBitField.resolve("SendMessages"))) return interaction.reply({ content: `Vous n'avez pas les bonnes permissions pour effectuer cette commande`})

        try {

            const embed = new Discord.EmbedBuilder()
                .setColor("Red")
                .addFields({ name: 'BOT', value: `${Date.now() - interaction.createdTimestamp}ms.`, inline: true})
                .addFields({ name: "API", value: `${Date.now() - interaction.createdTimestamp}ms`, inline: true})

            await interaction.reply({ embeds: [embed]});
        } catch (error) {
            console.log(`❌ une erreur s'est produite sur la commande ping`, error)
            return interaction.reply({content: '❌ Une erreur s\'est produite produite', ephemeral: true})        
        }
    }
}