const fun = (prefix, botName, ownerName) => {
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
┷┯ *〈 FUN 〉*
   ╽
   ┠≽ *${prefix}alay* <text>
   ┃ *Desc* : Changing Words Into Alay
   ┠──────────────╼
   ┠≽ *${prefix}bucin*
   ┃ *Desc* : Send a Random Slave of Love
   ┠──────────────╼
   ┠≽ *${prefix}trust*
   ┃ *Desc* : Send a Random Truth
   ┠──────────────╼
   ┠≽ *${prefix}dare*
   ┃ *Desc* : Send a Random Dare
   ┠──────────────╼
   ┠≽ *${prefix}simi* <text>
   ┃ *Desc* : Talk to Simi
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.fun = fun
