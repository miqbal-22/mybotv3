const islam = (prefix, botName, ownerName) => {
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
┷┯ *〈 ISLAM 〉*
   ╽
   ┠≽ *${prefix}quran*
   ┃ *Desc* : Sending Qur'anic Verses at Random
   ┠──────────────╼
   ┠≽ *${prefix}quransurah*
   ┃ *Desc* : Quran and Tafsir
   ┠──────────────╼
   ┠≽ *${prefix}tafsir* 
   ┃ *Desc* : Tafsit Ayat
   ┠──────────────╼
   ┠≽ *${prefix}jsholat* <area>
   ┃ *Desc* : Sending Prayer Schedule Information
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.islam = islam
