const kerang = (prefix, botName, ownerName) => {
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
┷┯ *〈 KERANG AJAIB 〉*
   ╽
   ┠≽ *${prefix}apakah* <optional>
   ┃ *Desc* : Asking Is
   ┠──────────────╼
   ┠≽ *${prefix}bolehkah* <optional>
   ┃ *Desc* : Ask Can
   ┠──────────────╼
   ┠≽ *${prefix}kapankah* <optional>
   ┃ *Desc* : Ask When
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.kerang = kerang
