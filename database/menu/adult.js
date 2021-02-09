const adult = (prefix, botName, ownerName) => {
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
┠≽ *${prefix}info*
┃ *Desc* : Show Bot Details
┠──────────────╼
┠≽ *${prefix}blocklist*
┃ *Desc* : Show Blocked User
┠──────────────╼
┠≽ *${prefix}chatlist*
┃ *Desc* : Show All Chat User
┠──────────────╼
┠≽ *${prefix}ping*
┃ *Desc* : Show Connection Bot Speed
┠──────────────╼
┠≽ *${prefix}totaluser*
┃ *Desc* : Show All User Use Bot
┠──────────────╼
┠≽ *${prefix}request*
┃ *Desc* : Request Fiture To Owner Bot
┠──────────────╼
┠≽ *${prefix}bugreport* <text>
┃ *Desc* : Report Bug To Owner Bot
╿
┷┯ *〈 18+ 〉*
   ╽
   ┠≽ *${prefix}randomhentai*
   ┃ *Desc* : Sending Random Hentai Image
   ┠──────────────╼
   ┠≽ *${prefix}randombokep*
   ┃ *Desc* : Sending Random Bokep File
   ┠──────────────╼
   ┠≽ *${prefix}nsfwtrap*
   ┃ *Desc* : Sending Random NSFW Trap Image (nsfw needed)
   ┠──────────────╼
   ┠≽ *${prefix}nekopoi*
   ┃ *Desc* : Search NekoPoi.care
   ┠──────────────╼
   ┠≽ *${prefix}xvideos*
   ┃ *Desc* : Search Xvideos
   ┠──────────────╼
   ┠≽ *${prefix}pornhub*
   ┃ *Desc* : Search PornHub
   ┠──────────────╼
   ┠≽ *${prefix}nsfwneko*
   ┃ *Desc* : Sending Random NSFW Neko Image (nsfw needed)
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.adult = adult
