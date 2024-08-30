
const fs = require('fs')
const { color } = require('./lib/myfunc')
const version = require("@whiskeysockets/baileys/package.json").version 

//owner
global.owner = '923192173398'
global.nomerowner = ["923192173398"]

//payment
global.nomordana = '081351692548'

//bot
global.botname = "𝒲𝒜𝒮𝐼 𝐵𝒪𝒯"
global.KyuuKuru = "https://telegra.ph/file/28282735848de7989301c.png"
global.baileysVersion = `Baileys version ${version}`
global.TypeBaileys = `whiskeysockets`
global.footer = `KyuuRzy 乂 𝐙͢𝐱𝐕 𝐂𝐋͢𝐢𝚵𝐍͢𝐓`
global.prefa = ['','!','.',',','🐤','🗿']

//watermark 
global.packname = '𝒲𝒜𝒮𝐼 𝐵𝒪𝒯'
global.author = 'XD'

//apikey
global.caliph = 'WASIBOTZ'
global.lolkey = 'aa287b0865449a8c9b530722'
global.cookie = '_U=1o0gOAFjeuOfJGlzAx7CV-wDu6tv3Q1pbvjc3KbaXLiDaGQnJYmz'

//database 
global.urldb = ''; // kosongin aja tapi kalo mau pake database mongo db isi url mongo

global.Kyuu = "`"
global.mess = {
    group: "Fitur Hanya Digunakan Untuk Grup!",
    Badmin: "Fitur dapat Digunakan Setelah Bot menjadi ADMIN!",
}
//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(color(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
