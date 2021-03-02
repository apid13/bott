// menu fitur bot
const help = (prefix, instagram, yt, name, pushname2, user, limitt, uptime, jam, tanggal) => { 
	return `

╭──────「 *REGULATION ${name}* 」
┴
┣⊱  \`\`\`NAMA USER:\`\`\` *${pushname2}*
┣⊱  \`\`\`VERIVICATION:\`\`\` ✅
┣⊱  \`\`\`LIMIT:\`\`\` *${limitt} perhari*
┣⊱  \`\`\`AKTIF:\`\`\` ${kyun(uptime)}
┣⊱  \`\`\`JAM:\`\`\` *${jam} WIB*
┣⊱  \`\`\`TANGGAL:\`\`\` *${tanggal}*
┣⊱  \`\`\`VERSION:\`\`\` *6.5.0*
┣⊱  \`\`\`USER TERDAFTAR:\`\`\` *${user.length} User*
┣⊱  ❌ *SPAM*
┣⊱  ❌ *CALL & VC*
┣⊱  \`\`\`Melanggar??\`\`\` *Banned + Out Group*
┬
╰────────────────────────

「 *ABOUT ${name}* 」
│➻ *${prefix}report lapor bug*
│➻ *${prefix}request fitur*
│➻ *${prefix}info*
│➻ *${prefix}donasi*
│➻ *${prefix}owner*
│➻ *${prefix}profile*
│➻ *${prefix}speed*
│➻ *${prefix}daftar*
│➻ *${prefix}limit*
│➻ *${prefix}totaluser*
│➻ *${prefix}blocklist*
│➻ *${prefix}banlist*
│➻ *${prefix}premiumlist*
│➻ *${prefix}bahasa*
│➻ *${prefix}lainnya*
╰────────────────────────
「 *MEDIA DOWNLOADER* 」
│➻ *${prefix}tiktokstalk username*
│➻ *${prefix}igstalk username*
│➻ *${prefix}instavid link valid*
│➻ *${prefix}instaimg link valid*
│➻ *${prefix}instastory username*
│➻ *${prefix}ssweb url*
│➻ *${prefix}url2img Url*
│➻ *${prefix}tiktok*
│➻ *${prefix}kbbi*
│➻ *${prefix}wait*
│➻ *${prefix}trendtwit*
│➻ *${prefix}google berita terkini*
╰────────────────────────
「 *CREATOR MENU* 」
│➻ *${prefix}quotemaker tx/wtrmk/tema*
│➻ *${prefix}nulis nama/kelas/text*
│➻ *${prefix}croman FIDS dan Friend*
│➻ *${prefix}slide FIDS BOT WA*
│➻ *${prefix}tp 1 - 162*
│➻ *${prefix}ep 1 - 216*
│➻ *${prefix}tahta*
│➻ *${prefix}cglass*
│➻ *${prefix}cstyle*
│➻ *${prefix}cgame*
│➻ *${prefix}clove*
│➻ *${prefix}cparty*
│➻ *${prefix}csky*
│➻ *${prefix}tts id Haii*
│➻ *${prefix}ttp*
│➻ *${prefix}cpaper*
│➻ *${prefix}stiker*
│➻ *${prefix}gifstiker*
│➻ *${prefix}toimg*
│➻ *${prefix}img2url*
│➻ *${prefix}tomp3*
│➻ *${prefix}ocr*
╰──────────────────────────
「 *ANIME MENU* 」
│➻ *${prefix}modeanime On/Off*
│➻ *${prefix}neonime naruto*
│➻ *${prefix}naruto*
│➻ *${prefix}minato*
│➻ *${prefix}boruto*
│➻ *${prefix}hinata*
│➻ *${prefix}sakura*
│➻ *${prefix}sasuke*
│➻ *${prefix}toukachan*
│➻ *${prefix}rize*
│➻ *${prefix}akira*
│➻ *${prefix}itori*
│➻ *${prefix}kurumi*
│➻ *${prefix}miku*
│➻ *${prefix}anime*
│➻ *${prefix}animecry*
│➻ *${prefix}animehug*
╰───────────────────────
「 *GROUP MENU* 」
│➻ *${prefix}simih On/Off*
│➻ *${prefix}bott on/off*
│➻ *${prefix}nsfw On/Off*
│➻ *${prefix}antilink On/Off*
│➻ *${prefix}welcome On/Off*
│➻ *${prefix}grup buka/tutup*
│➻ *${prefix}ownergrup*
│➻ *${prefix}setpp*
│➻ *${prefix}infogc*
│➻ *${prefix}add 628xxxxxxxxxx*
│➻ *${prefix}kick @mentioned*
│➻ *${prefix}kicktime @mentioned*
│➻ *${prefix}promote @mentioned*
│➻ *${prefix}demote @mentioned*
│➻ *${prefix}setname*
│➻ *${prefix}setdesc*
│➻ *${prefix}linkgrup*
│➻ *${prefix}tagme*
│➻ *${prefix}hidetag*
│➻ *${prefix}tagall*
│➻ *${prefix}mentionall*
│➻ *${prefix}fitnah @mentioned/isi/balasan*
│➻ *${prefix}listadmin*
╰────────────────────────
「 *OTHERS FUN & GAME* 」
│➻ *${prefix}anjing*
│➻ *${prefix}kucing*
│➻ *${prefix}testime*
│➻ *${prefix}hilih*
│➻ *${prefix}apakah*
│➻ *${prefix}kapankah*
│➻ *${prefix}bisakah*
│➻ *${prefix}rate*
│➻ *${prefix}watak*
│➻ *${prefix}hobby*
│➻ *${prefix}randomkpop*
│➻ *${prefix}infogempa*
│➻ *${prefix}infonomor*
│➻ *${prefix}quotes*
│➻ *${prefix}truth*
│➻ *${prefix}dare*
│➻ *${prefix}tebakgambar*
│➻ *${prefix}caklontong*
│➻ *${prefix}family100*
│➻ *${prefix}memeindo*
│➻ *${prefix}katabijak*
│➻ *${prefix}fakta*
│➻ *${prefix}darkjokes*
│➻ *${prefix}bucin*
│➻ *${prefix}pantun*
│➻ *${prefix}katacinta*
│➻ *${prefix}jadwaltvnow*
│➻ *${prefix}hekerbucin*
│➻ *${prefix}katailham*
│➻ *${prefix}jarak Banyuwangi/Surabaya*
│➻ *${prefix}translate en/Apa kabar?*
│➻ *${prefix}pasangan Aku/Kamu*
│➻ *${prefix}gantengcek*
│➻ *${prefix}cantikcek*
│➻ *${prefix}artinama*
│➻ *${prefix}persengay*
│➻ *${prefix}pbucin*
│➻ *${prefix}bpfont*
│➻ *${prefix}textstyle*
│➻ *${prefix}jadwaltv antv*
│➻ *${prefix}lirik melukis senja*
│➻ *${prefix}chord Melukis senja*
│➻ *${prefix}wiki Adolf Hitler*
│➻ *${prefix}brainly pertanyaan*
│➻ *${prefix}resepmasakan rawon*
│➻ *${prefix}map Banyuwangi*
│➻ *${prefix}film Fast and Farious*
│➻ *${prefix}pinterest gambar kucing*
│➻ *${prefix}infocuaca Banyuwangi*
│➻ *${prefix}jamdunia Banyuwangi*
│➻ *${prefix}mimpi Ular*
│➻ *${prefix}infoalamat jalan Banyuwangi*
│➻ *${prefix}playstore WhatsApp*
│➻ *${prefix}readmore*
│➻ *${prefix}puisiimg*
│➻ *${prefix}kalkulator 13*12*
│➻ *${prefix}moddroid lightroom*
│➻ *${prefix}happymod lightroom*
│➻ *${prefix}lainnya*
╰────────────────────────
「 *18+MENU* 」
│➻ *${prefix}asupan*
│➻ *${prefix}nsfwloli*
│➻ *${prefix}nsfwblowjob*
│➻ *${prefix}nsfwneko*
│➻ *${prefix}nsfwtrap*
│➻ *${prefix}animekiss*
│➻ *${prefix}hentai*
│➻ *${prefix}cersex*
│➻ *${prefix}randombokep*
│➻ *${prefix}pornhub stepMoms*
│➻ *${prefix}xvideos japan*
│➻ *${prefix}nekopoi oni chichi*
╰────────────────────────
「 *RELIGION MENU* 」
│➻ *${prefix}jadwalsholat Banyuwangi*
│➻ *${prefix}quran*
│➻ *${prefix}quranlist*
│➻ *${prefix}quransurah 1*
╰────────────────────────
「 *FIND ME SIR* 」
│➻ *${prefix}pastebin teks*
│➻ *${prefix}tinyurl link*
│➻ *${prefix}bitly link*
╰────────────────────────
「 *SPAM MENU* 」
│➻ *${prefix}spamcall 083xxxxxxxxx*
│➻ *${prefix}spamgmail contoh@gmail.com*
╰────────────────────────
「 *OWNER MENU* 」
│➻ *${prefix}addprem mentioned*
│➻ *${prefix}removeprem mention*
│➻ *${prefix}setmemlimit*
│➻ *${prefix}setlimit*
│➻ *${prefix}setreply*
│➻ *${prefix}setprefix*
│➻ *${prefix}setnamebot*
│➻ *${prefix}setppbot*
│➻ *${prefix}bc*
│➻ *${prefix}bcgc*
│➻ *${prefix}ban*
│➻ *${prefix}unban*
│➻ *${prefix}block*
│➻ *${prefix}unblock*
│➻ *${prefix}clearall*
│➻ *${prefix}delete*
│➻ *${prefix}clone*
│➻ *${prefix}getses*
│➻ *${prefix}leave*
╰────────────────────────
「 *PREMIUM ONLY* 」
│➻ *${prefix}playmp3 menepi*
│➻ *${prefix}fb link video*
│➻ *${prefix}snack link snack video*
│➻ *${prefix}ytmp3 link yt*
│➻ *${prefix}ytmp4 link yt*
│➻ *${prefix}joox Monolog Pamungkas*
│➻ *${prefix}smule Link Video Smule*
╰────────────────────────

「 *SUPPORT ${name}* 」
│➲ *O BOT*
│➲ *M. HADI FIRMANSYA*
│➲ *DELIA AULIA*
│➲ *ZAKI GANS*
│➲ *MY TEAM FXC7 BOT*
│➲ *CONTENT CREATOR BOT WHATSAPP*
╰────────────────────────`
}

exports.help = help

// penghitung aktif bot
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);
  return `*${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik*`
}

// info bot 
const bottt = (prefix) => {
return `
\`\`\`Untuk Sekarang Bot Hanya Bisa Digunakan Di Group Karna\`\`\` *KUOTA MAHAL*\n\n *Mohon Pengertiannya*
Sekali Lagi Maaf

Jika Bot Ini Ada Di Grup Anda Admin Grup Suruh Aktifkan Bot Dengan Cara ${prefix}bott aktif
`
}
exports.bottt = bottt
// donasi menu
const donasi = (name) => { 
	return `       
╭─────「 *DONASI FIDSBOT* 」
┴
│√ *PULSA*
│√ *SMARTFREN: 088223955883*
│√ *TELKOMSEL: 081319886742*
│
│\`\`\`*GRUP*\`\`\`
│ *10k Invite Bot Ke Grup selama 1 bulan*
│
│\`\`\`*PREMIUM*\`\`\`
│ *5k daftar premium Selama 1 Bulan*
┬
╰──────「 *BY ${name}* 」

Untuk Kelangsungan Hidup Bot Karna Kuota Mahal:'
`
}
exports.donasi = donasi

// bahasa list
const bahasa = (prefix) => {
return `
List Bahasa Untuk Command *${prefix}tts*

  af: Afrikaans
  sq: Albanian
  ar: Arabic
  hy: Armenian
  ca: Catalan
  zh: Chinese
  zh-cn: Chinese (Mandarin/China)
  zh-tw: Chinese (Mandarin/Taiwan)
  zh-yue: Chinese (Cantonese)
  hr: Croatian
  cs: Czech
  da: Danish
  nl: Dutch
  en: English
  en-au: English (Australia)
  en-uk: English (United Kingdom)
  en-us: English (United States)
  eo: Esperanto
  fi: Finnish
  fr: French
  de: German
  el: Greek
  ht: Haitian Creole
  hi: Hindi
  hu: Hungarian
  is: Icelandic
  id: Indonesian
  it: Italian
  ja: Japanese
  ko: Korean
  la: Latin
  lv: Latvian
  mk: Macedonian
  no: Norwegian
  pl: Polish
  pt: Portuguese
  pt-br: Portuguese (Brazil)
  ro: Romanian
  ru: Russian
  sr: Serbian
  sk: Slovak
  es: Spanish
  es-es: Spanish (Spain)
  es-us: Spanish (United States)
  sw: Swahili
  sv: Swedish
  ta: Tamil
  th: Thai
  tr: Turkish
  vi: Vietnamese
  cy: Welsh
`
}
exports.bahasa = bahasa

// Limit
const limitend = (pushname2) => {
        return`*maaf ${pushname2} limit hari ini habis*\n*limit di reset setiap jam 12:00 WIB TENGAH MALAM*`
}

const limitcount = (limitCounts) => {
        return`
Limit Kamu: ${limitCounts}
`
}

exports.limitend = limitend
exports.limitcount = limitcount
