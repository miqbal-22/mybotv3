const downloader = (prefix, botName, ownerName) => {
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
┷┯ *〈 DOWNLOADER 〉*
   ╽
   ┠≽ *${prefix}pinterest* <query>
   ┃ *Desc* : Download Image From Pinterest
   ┠──────────────╼
   ┠≽ *${prefix}ytmp3* <linkyt>
   ┃ *Desc* : Download Youtube Video to Mp3
   ┠──────────────╼
   ┠≽ *${prefix}ytmp4* <linkyt>
   ┃ *Desc* : Download Youtube Video
   ┠──────────────╼
   ┠≽ *${prefix}fb* <linkfb>
   ┃ *Desc* : Download Facebook Video
   ┠──────────────╼
   ┠≽ *${prefix}ig* <linkig>
   ┃ *Desc* : Download Instagram Video
   ┠──────────────╼
   ┠≽ *${prefix}igstory* <linkigstory>
   ┃ *Desc* : Download Instastory Video
   ┠──────────────╼
   ┠≽ *${prefix}happymod* <game>
   ┃ *Desc* : Download Game Mod
   ┠──────────────╼
   ┠≽ *${prefix}moddroid* <game>
   ┃ *Desc* : Download Game Mod
   ┠──────────────╼
   ┠≽ *${prefix}playstore* <query>
   ┃ *Desc* : Download Game By Playtore
   ┠──────────────╼
   ┠≽ *${prefix}tiktok* <linktiktok>
   ┃ *Desc* : Download TikTok Video
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.downloader = downloader
