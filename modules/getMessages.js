const { charm, chalk } = require('./requires').node_modules
let { limit, chat, memberColor, channel } = require('./variables').variables

function getMessages(Guild, ChannelsId, selected) {
    channel = Guild.channels.cache.get(ChannelsId[selected])
    theChannelName = channel.name
    chat = "";
    channel.messages.fetch({ limit: limit }).then(messages => {
        messages.forEach((message, i) => {
            message.guild.members.fetch(message.author.id).then(member => {
                memberColor[message.author.id] = { color: member.displayHexColor }
                if (memberColor[message.author.id].color == "#000000") memberColor[message.author.id] = { color: "#ffffff" }
            })
            setTimeout(() => {
                if (!message.content) leMessage = "[Discord attachement]"
                else leMessageFinal = message.content
                leMessage = leMessageFinal.replace(/\n/g,'\n\t\t\t')
                if (memberColor[message.author.id])
                    chat = "\t" + chalk.hex(memberColor[message.author.id].color)(message.author.username + ": \t") + chalk.hex("#ffffff")(leMessage + "\n") + chat
                else
                    chat = "\t[ERROR : RETRY TO LOAD THE CHANNEL] \n"
            }, 2000)
        })
        setTimeout(() => { console.clear(); charm.write(chat) }, 2050)
    })
    return { channel,theChannelName }
}

exports.getMessages = getMessages