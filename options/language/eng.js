exports.wait = () => {
        return `⌛ Being Processed ⌛`
}

exports.timeEnd = () => {
        return `Time has run out`
}

exports.succsess = () => {
        return `✔️ Succsess ✔️`
}

exports.levelon = () => {
        return `❬ ✔ ❭ *enable leveling*`
}

exports.levelnoton = () => {
        return `❬ X ❭  *disable leveling*`
}

exports.levelnol = () => {
        return `*YOUR LEVEL STILL* 0 °-°`
}

exports.stick = () => {
        return `[❗] Failed, an error occurred while converting the image to a sticker ❌`
}

exports.Iv = () => {
        return `❌ Invalid link ❌`
}

exports.group = () => {
        return `[❗] This command can only be used in groups! ❌`
}

exports.ownerG = () => {
        return `[❗] This command can only be used by the owner group! ❌`
}

exports.ownerB = () => {
        return `[❗] This command can only be used by the owner bot! ❌`
}

exports.admin = () => {
        return `[❗] This command can only be used by group admins! ❌`
}

exports.Badmin = () => {
        return `[❗] This command can only be used when the bot becomes admin! ❌`
}

exports.daftarB = (prefix) => {
        return `──「 NOT YET REGISTERED 」──\nHello Sis !\nYou haven't registered yet, let's register first... \n\nCommand : ${prefix}register nama|umur\nExample : ${prefix}register Nazwa|16`
}

exports.daftarD = () => {
        return `*「 ALREADY REGISTER 」*\n\n*you have registered in the bot database*`
}

exports.wrongf = () => {
        return`*Incorrect format / blank text*`
}

exports.clears = () => {
        return`*clear all Success*`
}

exports.pc = () => {
        return`*「 REGISTRATION 」*\n\nif you haven't got the message. means you haven't saved your bot number*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
        return`*「 REGISTER DATA 」*\n\nyou have registered with the data \n\n◪ *DATA* \n  │ \n  ├─ ❏ Name : ${namaUser} \n  ├─ ❏ Number : wa.me/${sender.split("@")[0]} \n  ├─ ❏ Age : ${umurUser} \n  ├─ ❏ Register Time : ${time} \n  │ \n └─ ❏ NS : ${serialUser} \n\n ❏ NOTE : DO NOT FORGET THIS NUMBER BECAUSE IT IS IMPORTANT :v`
}

exports.cmdnf = (prefix, command) => {
        return`command *${prefix}${command}* not found \ try to write *${prefix}menu*`
}

exports.owneresce = (pushname) => {
        return`*sorry but ${pushname} not the owner script*`
}

exports.limitend = (pushname) => {
        return`*sorry ${pushname} Today's limit is up*\n*The limit is reset every 00:00 hours*`
}

exports.limitcount = (limitCounts) => {
        return`
*「 LIMIT COUNT 」*
the rest of your limit : ${limitCounts}

NOTE : to get to the limit. can pass level up or buylimit`
}

exports.satukos = () => {
        return`*Add parameters 1 (enable) or 0 (disable)`
}

exports.uangkau = (pushname, sender, uangkau) => {
        return`◪ *BALANCE*\n  ❏ *Name* : ${pushname}\n  ❏ *Number* : ${sender.split("@")[0]}\n  ❏ *Money* : ${uangkau}`
}
