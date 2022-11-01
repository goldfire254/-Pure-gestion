const { readdirSync } = require('fs');

module.exports = (client) => {
    let count = 0;
    readdirSync("./src/events/Client/").forEach(file => {
        const event = require(`../events/Client/${file}`);
        client.on(event.name, (...args) => event.run(client, ...args));
        count++;
        console.log(`event ${file} chargé avec succès !`)
    });
}