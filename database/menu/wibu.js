const wibu = (prefix, botName, ownerName) => {
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
┷┯ *〈 WEEBOO 〉*
   ╽
   ┠≽ *${prefix}neonime*
   ┃ *Desc* : Search Neonime
   ┠──────────────╼
   ┠≽ *${prefix}pokemon*
   ┃ *Desc* : Random Pokemon Image
   ┠──────────────╼
   ┠≽ *${prefix}loli*
   ┃ *Desc* : Random Loli Image
   ┠──────────────╼
   ┠≽ *${prefix}waifu*
   ┃ *Desc* : Random Waifu Image
   ┠──────────────╼
   ┠≽ *${prefix}randomanime*
   ┃ *Desc* : Random Anime Image
   ┠──────────────╼
   ┠≽ *${prefix}husbu*
   ┃ *Desc* : Random Husbu Image
   ┠──────────────╼
   ┠≽ *${prefix}husbu2*
   ┃ *Desc* : Random Husbu2 Image
   ┠──────────────╼
   ┠≽ *${prefix}wait*
   ┃ *Desc* : Send Anime Name & Short Scene
   ┠──────────────╼
   ┠≽ *${prefix}nekonime*
   ┃ *Desc* : Random Nekonime Image
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.wibu = wibu
