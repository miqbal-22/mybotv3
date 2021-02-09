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
┷┯ *〈 FUN 〉*
   ╽
   ┠≽ *${prefix}alay* <text>
   ┃ *Desc* : Changing Words Into Alay
   ┠──────────────╼
   ┠≽ *${prefix}tebakgambar* <text>
   ┃ *Desc* : Game
   ┠──────────────╼
   ┠≽ *${prefix}slap* <text>
   ┃ *Desc* : Toxic
   ┠──────────────╼
   ┠≽ *${prefix}persenbucin*
   ┃ *Desc* : Check Persentase Bucin
   ┠──────────────╼
   ┠≽ *${prefix}persengay*
   ┃ *Desc* : Check Persentase Your Gay
   ┠──────────────╼
   ┠≽ *${prefix}rate*
   ┃ *Desc* : Check Your Rate
   ┠──────────────╼
   ┠≽ *${prefix}gantengcek*
   ┃ *Desc* : How Handsome
   ┠──────────────╼
   ┠≽ *${prefix}cantikcek*
   ┃ *Desc* : How Beautiful
   ┠──────────────╼
   ┠≽ *${prefix}watak*
   ┃ *Desc* : Transmitting Characters at Random
   ┠──────────────╼
   ┠≽ *${prefix}hobby*
   ┃ *Desc* : Randomly Sending Hobbies
   ┠──────────────╼
   ┠≽ *${prefix}simi* <text>
   ┃ *Desc* : Talk to Simi
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.fun = fun
