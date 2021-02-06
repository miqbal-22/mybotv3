exports.noregis = () => {
        return `*「 BELUM REGISTER 」*\n\n*cara register ${prefix}register nama|umur* \n*Contoh: ${prefix}register Iqbal|666*`
}

exports.rediregis = () => {
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
        return`*「 DATA REGISTER 」*\n\nlu udah terdaftar dengan data \n\n◪ *DATA* \n  │ \n  ├─ ❏ Name : ${namaUser} \n  ├─ ❏ Number : wa.me/${sender.split("@")[0]} \n  ├─ ❏ Age : ${umurUser} \n  ├─ ❏ Register Time : ${time} \n  │ \n └─ ❏ NS : ${serialUser} \n\n ❏ NOTE : \n JANGAN SAMPAI LUPA NOMOR INI KARENA INI PENTING TOD:v`
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

exports.bugreport = () => {
	return`*Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi*`
}

