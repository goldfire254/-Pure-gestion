const { CommandInteraction, Client, InteractionType, PermissionFlagsBits, EmbedBuilder, ContextMenuCommandBuilder } = require("discord.js")
const Discord = require('discord.js')

module.exports = {
    name: "interactionCreate",
    /**
 * 
 * @param {Client} client 
 * @param {CommandInteraction} interaction 
 */
    run: async (client, interaction) => {
        let prefix = client.prefix;

        if (interaction.type === InteractionType.ApplicationCommand) {
            const SlashCommands = client.slashCommands.get(interaction.commandName);
            if (!SlashCommands) return;
            try {
                await SlashCommands.run(client, interaction, prefix);
            } catch (error) {
                if (interaction.replied) {
                    await interaction.editReply({content: `Une erreur inconnu viens de ce produire.`}).catch(() => { });
                } else {
                    await interaction.reply({ ephemeral: true, content: `Une erreur inconnu viens de ce produire.` }).catch(() => { });
                }
                console.log(error);
            }
        }

        if(interaction.isButton()) {
            // MODERATION ------------------------------------------------------------------------------------------------------------------------
            if(interaction.customId === "fleche droite acceuil" || interaction.customId === "gauche info") {
                    const mod_embed = new Discord.EmbedBuilder()
                        .setColor("Red")
                        .setTitle(`**__modération__**`)
                        .addFields({ name: `\`mute\``, value: `Rend muet un membre`})
                        .addFields({ name: `\`unmute\``, value: `Redonne la parole à un membre`})
                        .addFields({ name: `\`lock\``, value: `Permet de fermer un salon`})
                        .addFields({ name: `\`unlock\``, value: `Permet d'ouvrir un salon`})
                        .addFields({ name: `\`kick\``, value: `Expulse un membre du serveur`})
                        .addFields({ name: `\`ban\``, value: `Ban un membre du serveur`})
                        .addFields({ name: `\`clear\``, value: `Supprime 1 ou plusieurs messages`})
                        .addFields({ name: `\`renew\``, value: `Recréer un salon à l'identique`})
                        .addFields({ name: `\`unban\``, value: `Unban un membre du serveur`})
                        .addFields({ name: `\`hide\``, value: `Permet de chacher un salon`})
                        .addFields({ name: `\`unhide\``, value: `Permet de reveler un salon`})
                        .setFooter({ text: 'page 2/11'});
                    
                        const button = new Discord.ActionRowBuilder().addComponents(
                            new Discord.ButtonBuilder()
                            .setCustomId("gauche mod")
                            .setEmoji("👈")
                            .setStyle(Discord.ButtonStyle.Primary)
                            .setDisabled(true)
                        ).addComponents(
                            new Discord.ButtonBuilder()
                                .setCustomId("droite mod")
                                .setEmoji("👉")
                                .setStyle(Discord.ButtonStyle.Primary)
                        )
                            interaction.update({ embeds: [mod_embed], components: [button]})
                // INFORMATION --------------------------------------------------------------------------------------------------------------
                }else if(interaction.customId === "droite mod" || interaction.customId === "gauche util") {
                    const info_embed = new Discord.EmbedBuilder()
                        .setColor("Red")
                        .setTitle(`**__information__**`)
                        .addFields({ name: `\`pic\``, value: `Permet d'obtenir l'avatar d'un membre`})
                        .addFields({ name: `\`serverinfo\``, value: `Permet d'obtenir les informations du serveur`})
                        .addFields({ name: `\`roleinfo\``, value: `Donne les informations sur un role`})
                        .addFields({ name: `\`userinfo\``, value: `Donne des informations sur un membre`})
                        .addFields({ name: `\`botlist\``, value: `Donne la liste des bot du serveur`})
                        .addFields({ name: `\`boosterlist\``, value: `Donne la list des personne qui ont booster le serveur`})
                        .setFooter({ text: 'page 3/11'});
                
                         const button = new Discord.ActionRowBuilder().addComponents(
                            new Discord.ButtonBuilder()
                            .setCustomId("gauche info")
                            .setEmoji("👈")
                            .setStyle(Discord.ButtonStyle.Primary)
                        ).addComponents(
                            new Discord.ButtonBuilder()
                                .setCustomId("droite info")
                                .setEmoji("👉")
                                .setStyle(Discord.ButtonStyle.Primary)
                        )
                                interaction.update({ embeds: [info_embed], components: [button]}) 
            // UTILITAIRES --------------------------------------------------------------------------------------------------------------------------
            }else if(interaction.customId === "droite info" || interaction.customId === "gauche ant") {
                const util_embed = new Discord.EmbedBuilder()
                    .setColor("Red")
                    .setTitle(`**__utilitaires__**`)
                    .addFields({ name: `\`help\``, value: `Vous permet d'obtenir l'intégralité des commandes du bot et leurs informations`})
                    .addFields({ name: `\`panel\``, value: `Envoie la page d'aide du bot`})
                    .addFields({ name: `\`ping\``, value: `Permet d'afficher le ping du bot`})
                    .addFields({ name: `\`bump\``, value: `Bump votre serveur dans le support du bot`})
                    .addFields({ name: `\`support\``, value: `Donne le serveur du bot`})
                    .addFields({ name: `\`suggest\``, value: `Fait une suggestion sur le serveur`})
                    .setFooter({ text: 'page 4/11'});
            
                    const button = new Discord.ActionRowBuilder().addComponents(
                        new Discord.ButtonBuilder()
                        .setCustomId("gauche util")
                        .setEmoji("👈")
                        .setStyle(Discord.ButtonStyle.Primary)
                    ).addComponents(
                        new Discord.ButtonBuilder()
                            .setCustomId("droite util")
                            .setEmoji("👉")
                            .setStyle(Discord.ButtonStyle.Primary)
                    )
                            interaction.update({ embeds: [util_embed], components: [button]}) 
            // ANTIRAID ---------------------------------------------------------------------------------------------------------------
            }else if(interaction.customId === "droite util" || interaction.customId === "gauche fun") {
                const ant_embed = new Discord.EmbedBuilder()
                .setColor("Red")
                .setTitle(`**__antiraid__**`)
                .addFields({ name: `\`secur\``, value: `Affiche le niveau de l'antiraid`})
                .addFields({ name: `\`antilink\``, value: `Active l'antilink`})
                .addFields({ name: `\`antichannel\``, value: `Active l'antichannel `})
                .addFields({ name: `\`antirole\``, value: `Active l'antirole`})
                .addFields({ name: `\`antibot\``, value: `Active l'antibot`})
                .setFooter({ text: 'page 5/11'});
        
                const button = new Discord.ActionRowBuilder().addComponents(
                    new Discord.ButtonBuilder()
                    .setCustomId("gauche ant")
                    .setEmoji("👈")
                    .setStyle(Discord.ButtonStyle.Primary)
                ).addComponents(
                    new Discord.ButtonBuilder()
                        .setCustomId("droite ant")
                        .setEmoji("👉")
                        .setStyle(Discord.ButtonStyle.Primary)
                )
                        interaction.update({ embeds: [ant_embed], components: [button]}) 
            // FUN ---------------------------------------------------------------------------------------------------------------------
            }else if(interaction.customId === "droite ant" || interaction.customId === "gauche owner") {
                const fun_embed = new Discord.EmbedBuilder()
                .setColor("Red")
                .setTitle(`**__fun__**`)
                .addFields({ name: `\`8ball\``, value: `Répond à une question`})
                .addFields({ name: `\`dé\``, value: `Donne un nombre au hasard entre deux nombres`})
                .addFields({ name: `\`lovecalc\``, value: `Donne le pourcentage d'amour entre deux personnes`})
                .addFields({ name: `\`qi\``, value: `Donne le pourcentage de qi d'une personne`})
                .addFields({ name: `\`calin\``, value: `Fais un calin à une autres personnes`})
                .addFields({ name: `\`gay\``, value: `Dit à quelle pourcent la personne est gay`})
                .addFields({ name: `\`flags\``, value: `Affiche un drapeau`})
                .addFields({ name: `\`politique\``, value: `Dit pour qui vote la personne`})
                .addFields({ name: `\`taff\``, value: `Donne le metier d'une personne`})
                .addFields({ name: `\`fakenitro\``, value: `Donne un fake nitro`})
                .addFields({ name: `\`police\``, value: `renvoie un texte avec une autre police`})
                .addFields({ name: `\`say\``, value: `Envoie un message de la part du bot`})
                .addFields({ name: `\`pfc\``, value: `Lance une partie de pierre papier ciseaux contre le bot`})
                .setFooter({ text: 'page 6/11'});
        
                const button = new Discord.ActionRowBuilder().addComponents(
                    new Discord.ButtonBuilder()
                    .setCustomId("gauche fun")
                    .setEmoji("👈")
                    .setStyle(Discord.ButtonStyle.Primary)
                ).addComponents(
                    new Discord.ButtonBuilder()
                        .setCustomId("droite fun")
                        .setEmoji("👉")
                        .setStyle(Discord.ButtonStyle.Primary)
                )
                        interaction.update({ embeds: [fun_embed], components: [button]}) 
                //OWNER -----------------------------------------------------------------------------------------------------------------------
                }else if(interaction.customId === "droite fun" || interaction.customId === "gauche admin") {
                    const owner_embed = new Discord.EmbedBuilder()
                    .setColor("Red")
                    .setTitle(`**__owner__**`)
                    .addFields({ name: `\`bl\``, value: `Blacklist un membre`})
                    .addFields({ name: `\`unbl\``, value: `Unblacklist un membre`})
                    .addFields({ name: `\`wl\``, value: `Witheliste un membre`})
                    .addFields({ name: `\`unwl\``, value: `Unwitheliste un membre`})
                    .addFields({ name: `\`owner\``, value: `Ajoute un membre owner`})
                    .addFields({ name: `\`unowner\``, value: `Retire un owner`})
                    .addFields({ name: `\`status\``, value: `Parametre le status du bot`})
                    .addFields({ name: `\`serverlist\``, value: `Donne la liste des serveur ou est le bot`})
                    .setFooter({ text: 'page 7/11'});
            
                    const button = new Discord.ActionRowBuilder().addComponents(
                        new Discord.ButtonBuilder()
                        .setCustomId("gauche owner")
                        .setEmoji("👈")
                        .setStyle(Discord.ButtonStyle.Primary)
                    ).addComponents(
                        new Discord.ButtonBuilder()
                            .setCustomId("droite owner")
                            .setEmoji("👉")
                            .setStyle(Discord.ButtonStyle.Primary)
                    )
                            interaction.update({ embeds: [owner_embed], components: [button]}) 
                        }else if(interaction.customId === "droite owner" || interaction.customId === "gauche config") {
                            const admin_embed = new Discord.EmbedBuilder()
                            .setColor("Red")
                            .setTitle(`**__administration__**`)
                            .addFields({ name: `\`ticket\``, value: `Créer un ticket`})
                            .addFields({ name: `\`embed\``, value: `Créer un embed`})
                            .addFields({ name: `\`addrole\``, value: `Permet d'ajouter un role à un membre`})
                            .addFields({ name: `\`delrole\``, value: `Retire un role à un membre`})
                            .setFooter({ text: 'page 8/11'});
                    
                            const button = new Discord.ActionRowBuilder().addComponents(
                                new Discord.ButtonBuilder()
                                .setCustomId("gauche admin")
                                .setEmoji("👈")
                                .setStyle(Discord.ButtonStyle.Primary)
                            ).addComponents(
                                new Discord.ButtonBuilder()
                                    .setCustomId("droite admin")
                                    .setEmoji("👉")
                                    .setStyle(Discord.ButtonStyle.Primary)
                            )
                                    interaction.update({ embeds: [admin_embed], components: [button]}) 
                        // CONFIG ----------------------------------------------------------------------------------------------------------
                        }else if(interaction.customId === "droite admin" || interaction.customId === "gauche logs") {
                            const config_embed = new Discord.EmbedBuilder()
                                .setColor("Red")
                                .setTitle(`**__config__**`)
                                .addFields({ name: `\`set-suggest\``, value: `Defini le salon des suggestions`})
                                .addFields({ name: `\`join-channel\``, value: `Defini le salon d'arriver`})
                                .addFields({ name: `\`leave-channel\``, value: `Defini le salon des depart`})
                                .addFields({ name: `\`set-logs\``, value: `Defini le salon des logs`})
                                .addFields({ name: `\`set-bump\``, value: `Configure le bump`})
                                .addFields({ name: `\`join-message\``, value: `Active le message d'arriver`})
                                .addFields({ name: `\`leave-message\``, value: `Active le message des départ`})
                                .addFields({ name: `\`autorole\``, value: `Active l'autorole'`})
                                .setFooter({ text: 'page 9/11'});
                        
                                const button = new Discord.ActionRowBuilder().addComponents(
                                    new Discord.ButtonBuilder()
                                    .setCustomId("gauche config")
                                    .setEmoji("👈")
                                    .setStyle(Discord.ButtonStyle.Primary)
                                ).addComponents(
                                    new Discord.ButtonBuilder()
                                        .setCustomId("droite config")
                                        .setEmoji("👉")
                                        .setStyle(Discord.ButtonStyle.Primary)
                                )
                                        interaction.update({ embeds: [config_embed], components: [button]})
                        //LOGS --------------------------------------------------------------------------------------------------------------------
                        }else if(interaction.customId === "droite config" || interaction.customId === "gauche money") {
                            const logs_embed = new Discord.EmbedBuilder()
                                .setColor("Red")
                                .setTitle(`**__logs__**`)
                                .addFields({ name: `\`messagelogs\``, value: `Affiche tous les logs des messages supprimés ou édités`})
                                .addFields({ name: `\`channellogs\``, value: `Affiche tous les logs de salon`})
                                .addFields({ name: `\`rolelogs\``, value: `Affiche les logs de role`})
                                .addFields({ name: `\`setlogs\``, value: `Salon ou sera envoyer tous les suggestions du serveur`})
                                .setFooter({ text: 'page 10/11'});
                        
                                const button = new Discord.ActionRowBuilder().addComponents(
                                    new Discord.ButtonBuilder()
                                    .setCustomId("gauche logs")
                                    .setEmoji("👈")
                                    .setStyle(Discord.ButtonStyle.Primary)
                                ).addComponents(
                                    new Discord.ButtonBuilder()
                                        .setCustomId("droite logs")
                                        .setEmoji("👉")
                                        .setStyle(Discord.ButtonStyle.Primary)
                                )
                                interaction.update({ embeds: [logs_embed], components: [button]})
                                                        //LOGS --------------------------------------------------------------------------------------------------------------------
                        }else if(interaction.customId === "droite logs") {
                            const logs_embed = new Discord.EmbedBuilder()
                                .setColor("Red")
                                .setTitle(`**__economy__**`)
                                .addFields({ name: `\`addmoney\``, value: `Ajoute de l'argent a un membre`})
                                .addFields({ name: `\`removemoney\``, value: `Retire de l'argent a un membre`})
                                .addFields({ name: `\`bal\``, value: `Affiche tout votre argent`})
                                .addFields({ name: `\`bank\``, value: `Ajoute de l'argent a votre bank`})
                                .addFields({ name: `\`mybank\``, value: `Affiche de l'argent de votre bank`})
                                .addFields({ name: `\`game\``, value: `Lance une parti de roulette`})
                                .addFields({ name: `\`money\``, value: `Affiche votre argent`})
                                .addFields({ name: `\`take\``, value: `Retire de l'argent de votre bank`})
                                .addFields({ name: `\`daily\``, value: `Donne votre recompense quotidienne`})
                                .addFields({ name: `\`fish\``, value: `Gagne de l'argent en pechant`})
                                .setFooter({ text: 'page 11/11'});
                        
                                const button = new Discord.ActionRowBuilder().addComponents(
                                    new Discord.ButtonBuilder()
                                    .setCustomId("gauche money")
                                    .setEmoji("👈")
                                    .setStyle(Discord.ButtonStyle.Primary)
                                ).addComponents(
                                    new Discord.ButtonBuilder()
                                        .setCustomId("droite money")
                                        .setEmoji("👉")
                                        .setStyle(Discord.ButtonStyle.Primary)
                                        .setDisabled(true)
                                )
                                interaction.update({ embeds: [logs_embed], components: [button]})
                        }else if (interaction.customId === "close-ticket") {
                            const demmande_close_embed = new Discord.EmbedBuilder()
                                .setColor("Red")
                                .setDescription(`🧨 Etes vous sur de supprimer ce ticket`)
                            const yes_button = new Discord.ActionRowBuilder().addComponents(
                                new Discord.ButtonBuilder()
                                    .setCustomId("yes")
                                    .setEmoji("✅")
                                    .setStyle(Discord.ButtonStyle.Primary)
                            )
                
                            interaction.reply({ embeds: [demmande_close_embed], components: [yes_button]})
            }                
            else if (interaction.customId === "yes") {
                try{
                    const wait_embed = new Discord.EmbedBuilder()
                        .setColor("Red")
                        .setDescription(`⏳ Le ticket vas se supprimer dans 5 secondes !`)
                    interaction.reply({ embeds: [wait_embed]})
                    setTimeout( () => {
                        interaction.channel.delete().catch( e => { return; } )
                    }, 5000)
                } catch (e) {
                    return
                }
            }else if(interaction.customId === "nitro") {
                const embed = new Discord.EmbedBuilder()
                    .setColor("Red")
                    .setDescription("😂 Je t'ai eu")
                interaction.reply({ embeds: [embed]})
            }
        }
    }
}
