const logomaker = (prefix, botName, ownerName) => {
        return `
┏ *〈 ${botName} 〉*
╿
┷┯ *〈 BOT INFO 〉*
   ╽
   ┠≽ *Prefix* : 「  ${prefix}  」
   ┠≽ *Creator* : ${ownerName}
   ┠≽ *Version* : 「  2.4.9  」
   ╿
┯┷ *〈 ABOUT 〉*
╽
┠≽ *${prefix}info* (error)
┃ *Desc* : Show Bot Details
┠──────────────╼
┠≽ *${prefix}blocklist*
┃ *Desc* : Show Blocked User
┠──────────────╼
┠≽ *${prefix}chatlist* (error)
┃ *Desc* : Show All Chat User
┠──────────────╼
┠≽ *${prefix}ping*
┃ *Desc* : Show Connection Bot Speed
┠──────────────╼
┠≽ *${prefix}bugreport* <text>
┃ *Desc* : Report Bug To Owner Bot
╿
┷┯ *〈 LOGO MAKER 〉*
   ╽
   ┠≽ *${prefix}ninjalogo* <text|text>
   ┃ *Desc* : Make Ninja Logo
   ┠──────────────╼
   ┠≽ *${prefix}logowolf* <text|text>
   ┃ *Desc* : Make Wolf Logo
   ┠──────────────╼
   ┠≽ *${prefix}logowolf2* <text|text>
   ┃ *Desc* : Make Wolf Logo2
   ┠──────────────╼
   ┠≽ *${prefix}phlogo* <text|text>
   ┃ *Desc* : Make PornHub Logo
   ┠──────────────╼
   ┠≽ *${prefix}neonlogo* <text>
   ┃ *Desc* : Make Neon Logo
   ┠──────────────╼
   ┠≽ *${prefix}neonlogo2* <text>
   ┃ *Desc* : Make Neon Logo2
   ┠──────────────╼
   ┠≽ *${prefix}lionlogo* <text|text>
   ┃ *Desc* : Make Lion Logo
   ┠──────────────╼
   ┠≽ *${prefix}jokerlogo* <text>
   ┃ *Desc* : Make Joker Logo
   ┠──────────────╼
   ┠≽ *${prefix}pubglogo* <text|text>
   ┃ *Desc* : Make PUBG Logo
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.logomaker = logomaker
