const limit = (prefix, botName, ownerName) => {
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
┷┯ *〈 LIMIT 〉*
   ╽
   ┠≽ *${prefix}limit*
   ┃ *Desc* : Check Your Limit
   ┠──────────────╼
   ┠≽ *${prefix}bal*
   ┃ Check Your Money
   ┠──────────────╼
   ┠≽ *${prefix}transfer* <tag |jumblah>
   ┃ Transfer Your Money
   ┠──────────────╼
   ┠≽ *${prefix}buylimit* <count>
   ┃ *Desc* : Buy Limit
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}
--------------------------------
Note: Lu bisa beli limit dengan cara ngumpulin uang terlebih dahulu. Cek uang lu dengan cara ketik perintah *${prefix}bal* , harga 1 limit = 1000 uang.
Note2: Lu bisa mengumpulkan uang dengan cara *YAA KERJA LAH TOLOL BEGO DONGO IDIOT KLO GK KERJA YAA LU YG PUNYA UANG KECUALI LU PENSIUNAN, JANGAN BEGO² BET NAPA ANJINK* atau bisa dengan naik level.`
}
exports.limit = limit
