const { EmbedBuilder } = require("discord.js");
const { post } = require("node-superfetch");

module.exports = {
    name: "test",
    category: "Owner",
    description: "Testing commande",
    owner: true,
    execute: async (message, args, client, prefix) => {
       
        message.reply({content: `Test effectuer avec succès !`})
    }
}