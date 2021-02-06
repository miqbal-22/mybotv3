const xp = (prefix, botName, ownerName) => {
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
┷┯ *〈 LEVEL 〉*
   ╽
   ┠≽ *${prefix}level*
   ┃ *Desc* : Check Your Level
   ┠──────────────╼
   ┠≽ *${prefix}leveling* <1/0>
   ┃ *Desc* : Enabling / Disabling Leveling Features
   ┠──────────────╼
   ┠≽ *${prefix}mining*
   ┃ *Desc* : Mining XP
   ┠──────────────╼
   ┠≽ *${prefix}event* <1/0>
   ┃ *Desc* : Enabling / Disabling Event Features
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}
--------------------------------
Note: Kamu bisa mengumpulkan xp dan menaikan levelmu dengan cara chat dengan siapapun di dalam grup yang telah di aktifkan fitur leveling.`
}
exports.xp = xp
