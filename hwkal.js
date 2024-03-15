/*Buat Lu Yang Jual Sc Ini Yang Jujur Jangan Sampe Nipu Apalagi Lari Dari Tanggung Jawab

Base Ori : Hw Mods
Base Haikal Hw Mods : Copyan Dari Base Dika

• [ Recode Bye > ZetsuboXygen777]
   # AND↓
   THANKS TO >
  XygenGod777( Watashi / 私 )
  Hw Mods Wa / Haikal (Base)
  Adiwajshing (Baileys)
  whiskeysockets (Baileys)
  Thunder X7 (Inspirate)
  Pak Tzy (Inspirate)
  ♥️ ありがとう
                 >
*/
const fs = require('fs')
const chalk = require('chalk')

global.gr = 'https://chat.whatsapp.com/KD5RUV38F5NGI89uXmj0L6'
global.ig = 'Mwas' // ubah aja
global.email = 'mwas@gmail.com' //serah
global.region = 'kenya' // serah
//—————「 Set Nama Own & Bot 」—————//
global.ownername = '⸙𝐌𝐰𝐚𝐬⸙' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
global.owner = ['254795363396'] // ubah aja pake nomor lu
//==========================zetsuboclient=======================//
global.botname = '✇⚚ 𝑺𝑲𝒀𝑵𝑬𝑻_𝑴𝑫𝑽1 ⚚✇' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = '✇⚚ 𝑺𝑲𝒀𝑵𝑬𝑻_𝑴𝑫𝑽1 ⚚✇' // ubah aja ini nama sticker
global.author = '⸙𝐌𝐰𝐚𝐬⸙' // ubah aja ini nama sticker
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'Skynet' //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.wlcm = []
global.wlcmm = []
global.anticall = true
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 5
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
