const Discord = require('discord.js')
const { QuickDB } = require('quick.db');
const db = new QuickDB();

module.exports = {

    name: "say",
    description: "renvoie un message de la part du bot",
    owner: false,
    options: [
        {
            name: 'message',
            description: 'Quel est le message a renvoyer ?',
            required: true,
            type: Discord.ApplicationCommandOptionType.String
        }
    ],

    /**
     * @param {Client} client
     * @param {CommandInteraction} interaction
     */

     run: async (client, interaction) => {
        if(!interaction.guild.members.me.permissions.has(Discord.PermissionsBitField.resolve("SendMessages"))) return interaction.reply({ content: `Je n'ai pas les bonnes permissions pour effectuer votre commande`})
        if(!interaction.member.permissions.has(Discord.PermissionsBitField.resolve("SendMessages"))) return interaction.reply({ content: `Vous n'avez pas les bonnes permissions pour effectuer cette commande`})

        try {

            const messages = interaction.options.getString('message')
            interaction.channel.send(messages)
        } catch (error) {
            console.log(`❌ une erreur s'est produite sur la commande say`, error)
            return interaction.reply({content: '❌ Une erreur s\'est produite produite', ephemeral: true})        
        }
    }
}