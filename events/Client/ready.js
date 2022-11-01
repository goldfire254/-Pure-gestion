const config = require("../../config.json");
const prefix = config.prefix
const { Activity } = require("discord.js");

module.exports ={
name: "ready",
run: async (client) => {
    console.log(`connecter ${client.user.username} !`);
 }
}