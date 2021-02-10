exports.wait = () => {
        return `⌛ Sedang di Prosess, Sabar yaa Ngentod ⌛`
}

exports.timeEnd = () => {
        return `Waktu Habis Cuy`
}

exports.succsess = () => {
        return `✔️ Berhasil tod ✔️`
}

exports.levelon = () => {
        return `❬ ✔ ❭ *leveling diaktifkan*`
}

exports.levelnoton = () => {
        return `❬ X ❭  *leveling di nonaktifkan*`
}

exports.levelnol = () => {
        return `*NGENTOD LEVEL LU MASIH* 0 °-°`
}

exports.stick = () => {
        return `[❗] Gagal tod, terjadi kesalahan saat pengubahan gambar ke sticker ❌`
}

exports.Iv = () => {
        return `❌ Link nya gk valid ngentod ❌`
}

exports.group = () => {
        return `[❗] SUMPAH LU TOLOL BET ANJINK, INI KHUSUS DI GRUP ANJINK ❌`
}

exports.ownerG = () => {
        return `[❗] Lu bukan owner grup ngentod❌`
}

exports.ownerB = () => {
        return `[❗] ANJINK, Lu sapa ngentod❌`
}

exports.admin = () => {
        return `[❗] Ehh... Anjink, lu itu cuma member jadi jangan sok keras yaa Ngentod❌`
}

exports.Badmin = () => {
        return `[❗] Jadiin gw admin dulu lah ngentod ❌`
}

exports.daftarB = (prefix) => {
        return `──「 BELUM REGISTER 」──\nHalo Ngentoters !\nLu kan belum Register nih tod, mending lu register dulu dahh... \n\nCommand : ${prefix}register nama|umur\nContoh : ${prefix}register Iqbal|17`
}

exports.daftarD = () => {
        return `*「 SUDAH REGISTER 」*\n\n*Lu udahh register ngentod*`
}

exports.wrongf = () => {
        return`*format salah/text kosong danta lu kontol*`
}

exports.clears = () => {
        return`*clear all Success*`
}

exports.pc = () => {
        return`*「 REGISTRASI 」*\n\nuntuk mengetahui apakah lu udah terdaftar atau belum silahkah check message yang gw kirim \n\nNOTE:\n*Jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
        return`*「 DATA REGISTER 」*\n\nlu udah terdaftar dengan data \n\n◪ *DATA* \n  │ \n  ├─ ❏ Name : ${namaUser} \n  ├─ ❏ Number : wa.me/${sender.split("@")[0]} \n  ├─ ❏ Age : ${umurUser} \n  ├─ ❏ Register Time : ${time} \n  │ \n └─ ❏ NS : ${serialUser} \n\n ❏ NOTE : \n JANGAN SAMPAI LUPA NOMOR INI KARENA INI PENTING TOD`
}

exports.cmdnf = (prefix, command) => {
        return`command *${prefix}${command}* tidak di temukan tod\coba tulis *${prefix}menu* bego lu`
}

exports.owneresce = (pushname) => {
        return`*ngentod lu ${pushname} bukan owner script*`
}

exports.limitend = (pushname) => {
        return`*ngentod ${pushname} limit lu hari ini udah habis*\n*limit di reset setiap jam 24:00*`
}

exports.limitcount = (limitCounts) => {
        return`
*「 LIMIT COUNT 」*
sisa limit anda : ${limitCounts}

NOTE : untuk mendapatkan limit. bisa lewat naik level atau buylimit`
}

exports.satukos = () => {
        return`*Tambah parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
        return`◪ *ATM*\n  ❏ *Nama* : ${pushname}\n  ❏ *Nomer* : ${sender.split("@")[0]}\n  ❏ *Uang* : ${uangkau}`
}

