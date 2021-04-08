let { Guild, ChannelsId } = require('./variables').variables

function getChannels(client, choices, guild) {
    Guild = client.guilds.cache.get(guild);
    let ChannelsToFilter = Guild.channels.cache.map(channel => channel);
    LeFiltre = ChannelsToFilter.filter(channel => channel.type == "text")
    choices = []
    for (j = 0; j < LeFiltre.length; j++) {
        ChannelsId[j] = LeFiltre[j].id
        let channel = Guild.channels.cache.get(ChannelsId[j])
        choices.push(channel.name);
    }
    return { choices, ChannelsId, Guild }
}

exports.getChannels = getChannels