const group = (prefix, botName, ownerName) => {
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
┷┯ *〈 GROUP 〉*
   ╽
   ┠≽ *${prefix}opengc*
   ┃ *Desc* : Opening Group
   ┠──────────────╼
   ┠≽ *${prefix}closegc*
   ┃ *Desc* : Closing the Group
   ┠──────────────╼
   ┠≽ *${prefix}hidetag*
   ┃ *Desc* : Hide Tag Message All Members
   ┠──────────────╼
   ┠≽ *${prefix}setname* <text>
   ┃ *Desc* : Change Name Grup
   ┠──────────────╼
   ┠≽ *${prefix}setdesc* <teks>
   ┃ *Desc* : Change Description Grup
   ┠──────────────╼
   ┠≽ *${prefix}promote* <@tag>
   ┃ *Desc* : Promote People to be Admins Group
   ┠──────────────╼
   ┠≽ *${prefix}demote* <@tag>
   ┃ *Desc* : Demote People to be Members Group
   ┠──────────────╼
   ┠≽ *${prefix}tagall*
   ┃ *Desc* : Mention All Members
   ┠──────────────╼
   ┠≽ *${prefix}tagall2*
   ┃ *Desc* : Mention All Members
   ┠──────────────╼
   ┠≽ *${prefix}tagall3*
   ┃ *Desc* : Mention All Members
   ┠──────────────╼
   ┠≽ *${prefix}tagall4*
   ┃ *Desc* : Mention All Members
   ┠──────────────╼
   ┠≽ *${prefix}tagall5*
   ┃ *Desc* : Mention All Members
   ┠──────────────╼
   ┠≽ *${prefix}add* <12542123926>
   ┃ *Desc* : Add Members
   ┠──────────────╼
   ┠≽ *${prefix}kick* <@tag>
   ┃ *Desc* : Kick Member Group
   ┠──────────────╼
   ┠≽ *${prefix}listadmins*
   ┃ *Desc* : Show List Group Admins
   ┠──────────────╼
   ┠≽ *${prefix}listgroup*
   ┃ *Desc* : Show List All Group Bot
   ┠──────────────╼
   ┠≽ *${prefix}linkgroup*
   ┃ *Desc* : Show Group Link
   ┠──────────────╼
   ┠≽ *${prefix}join* <linkgroup>
   ┃ *Desc* : Add Bot To Join Your Group
   ┠──────────────╼
   ┠≽ *${prefix}leave*
   ┃ *Desc* : Tell the Bot to Leave the Group
   ┠──────────────╼
   ┠≽ *${prefix}welcome* <1/0>
   ┃ *Desc* : Activating / Deactivating the Welcome Feature
   ┠──────────────╼
   ┠≽ *${prefix}antilink* <1/0>
   ┃ *Desc* : Activating / Deactivating the Antilink Feature
   ┠──────────────╼
   ┠≽ *${prefix}nsfw* <1/0>
   ┃ *Desc* : Activating / Deactivating the NSFW Feature
   ┠──────────────╼
   ┠≽ *${prefix}delete*
   ┃ *Desc* : Delete Bot Message
   ┠──────────────╼
   ┠≽ *${prefix}simih* <1/0>
   ┃ *Desc* : Activating / Deactivating the Simih Feature
   ┠──────────────╼
   ┠≽ *${prefix}leaderboard* 
   ┃ *Desc* : Masih Testing
   ┠──────────────╼
   ┠≽ *${prefix}tagme*
   ┃ *Desc* : Mention You
   ┠──────────────╼
   ┠≽ *${prefix}ownergroup*
   ┃ *Desc* : Shows who the Group Owner is
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.group = group
