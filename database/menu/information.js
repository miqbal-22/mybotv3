const information = (prefix, botName, ownerName) => {
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
┷┯ *〈 INFORMATION 〉*
   ╽
   ┠≽ *${prefix}bahasa*
   ┃ *Desc* : Submit Language Code
   ┠──────────────╼
   ┠≽ *${prefix}kodenegara*
   ┃ *Desc* : Send Country Code
   ┠──────────────╼
   ┠≽ *${prefix}kbbi* <question>
   ┃ *Desc* : Asking KBBI
   ┠──────────────╼
   ┠≽ *${prefix}fakta*
   ┃ *Desc* : Send a Random Fact
   ┠──────────────╼
   ┠≽ *${prefix}jadwaltv*
   ┃ *Desc* : Testing
   ┠──────────────╼
   ┠≽ *${prefix}katabijak*
   ┃ *Desc* : Random Quotes
   ┠──────────────╼
   ┠≽ *${prefix}faktaunik*
   ┃ *Desc* : Send a Random Fact
   ┠──────────────╼
   ┠≽ *${prefix}infocuaca* <area>
   ┃ *Desc* : Send Weather Information
   ┠──────────────╼
   ┠≽ *${prefix}infogempa*
   ┃ *Desc* : Sending Earthquake Information
   ┠──────────────╼
   ┠≽ *${prefix}covidcountry* <country>
   ┃ *Desc* : Sending Covid-19 Information
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.information = information
