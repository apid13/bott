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
│➻ *${prefix}wame*
│➻ *${prefix}speed*
│➻ *${prefix}daftar*
│➻ *${prefix}limit*
│➻ *${prefix}totaluser*
│➻ *${prefix}blocklist*
│➻ *${prefix}banlist*
│➻ *${prefix}bahasa*
│➻ *${prefix}lainnya*
╰────────────────────────
「 *MEDIA MENU* 」
│➻ *${prefix}play melukis senja*
│➻ *${prefix}fb link video*
│➻ *${prefix}snack link snack video*
│➻ *${prefix}ytsearch*
│➻ *${prefix}ytmp3 link yt*
│➻ *${prefix}ytmp4 link yt*
│➻ *${prefix}joox Monolog Pamungkas*
│➻ *${prefix}smule Link Video Smule*
│➻ *${prefix}tiktok*
│➻ *${prefix}tiktoksearch*
│➻ *${prefix}profiletiktok*
│➻ *${prefix}tiktokstalk username*
│➻ *${prefix}igstalk username*
│➻ *${prefix}instavid link valid*
│➻ *${prefix}instaimg link valid*
│➻ *${prefix}instastory username*
│➻ *${prefix}pinterest*
│➻ *${prefix}wattpad*
│➻ *${prefix}ssweb url*
│➻ *${prefix}url2img Url*
│➻ *${prefix}kbbi*
│➻ *${prefix}wait*
│➻ *${prefix}trendtwit*
│➻ *${prefix}google*
╰────────────────────────
「 *CREATOR MENU* 」
│➻ *${prefix}quotemaker tx/wtrmk/tema*
│➻ *${prefix}nulis nama/kelas/text*
│➻ *${prefix}croman FIDS dan Friend*
│➻ *${prefix}slide FIDS BOT WA*
│➻ *${prefix}textpro 1 - 162*
│➻ *${prefix}ephoto 1 - 216*
│➻ *${prefix}tahta*
│➻ *${prefix}cpaper*
│➻ *${prefix}cglass*
│➻ *${prefix}cstyle*
│➻ *${prefix}cgame*
│➻ *${prefix}clove*
│➻ *${prefix}cparty*
│➻ *${prefix}csky*
│➻ *${prefix}croman*
│➻ *${prefix}cbpink*
│➻ *${prefix}cphlogo*
│➻ *${prefix}cwolf*
│➻ *${prefix}cglitch*
│➻ *${prefix}cballon*
│➻ *${prefix}fbgoldbutton*
│➻ *${prefix}tts id Haii*
│➻ *${prefix}ttp*
│➻ *${prefix}stiker*
│➻ *${prefix}gifstiker*
│➻ *${prefix}toimg*
│➻ *${prefix}img2url*
│➻ *${prefix}tomp3*
│➻ *${prefix}ocr*
│➻ *${prefix}vapor*
│➻ *${prefix}zalgo*
│➻ *${prefix}pitch*
│➻ *${prefix}trigger*
│➻ *${prefix}wasted*
│➻ *${prefix}rainbow*
│➻ *${prefix}sepia*
│➻ *${prefix}hijau*
│➻ *${prefix}biru*
│➻ *${prefix}glass*
│➻ *${prefix}moddroid lightroom*
│➻ *${prefix}happymod lightroom*
│➻ *${prefix}listephoto*
│➻ *${prefix}listtextpro*
│➻ *${prefix}emoji*
│➻ *${prefix}slow*
│➻ *${prefix}gemuk*
│➻ *${prefix}tupai*
│➻ *${prefix}toptt*
│➻ *${prefix}bass*
╰──────────────────────────
「 *ANIME MENU* 」
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
│➻ *${prefix}megumin*
│➻ *${prefix}miku*
│➻ *${prefix}anime*
│➻ *${prefix}animecry*
│➻ *${prefix}animehug*
│➻ *${prefix}neonime naruto*
╰───────────────────────
「 *GROUP MENU* 」
│➻ *${prefix}simi on/off*
│➻ *${prefix}bott on/off*
│➻ *${prefix}nsfw on/off*
│➻ *${prefix}antilink on/off*
│➻ *${prefix}antivirtex on/off*
│➻ *${prefix}antibadword on/off*
│➻ *${prefix}modeanime on/off*
│➻ *${prefix}welcome on/off*
│➻ *${prefix}grup buka/tutup*
│➻ *${prefix}ownergrup*
│➻ *${prefix}setpp*
│➻ *${prefix}infogc*
│➻ *${prefix}addbadword*
│➻ *${prefix}dellbadword*
│➻ *${prefix}listbadword*
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
│➻ *${prefix}quotes*
│➻ *${prefix}truth*
│➻ *${prefix}dare*
│➻ *${prefix}zodiak*
│➻ *${prefix}randomkpop*
│➻ *${prefix}exo*
│➻ *${prefix}blackpink*
│➻ *${prefix}bts*
│➻ *${prefix}tebakgambar*
│➻ *${prefix}caklontong*
│➻ *${prefix}family100*
│➻ *${prefix}meme*
│➻ *${prefix}memeindo*
│➻ *${prefix}katabijak*
│➻ *${prefix}fakta*
│➻ *${prefix}darkjokes*
│➻ *${prefix}addbucin*
│➻ *${prefix}bucin*
│➻ *${prefix}pantun*
│➻ *${prefix}tanggaljadian*
│➻ *${prefix}katacinta*
│➻ *${prefix}jadwaltvnow*
│➻ *${prefix}hekerbucin*
│➻ *${prefix}katadilan*
│➻ *${prefix}katailham*
│➻ *${prefix}jarak Banyuwangi/Surabaya*
│➻ *${prefix}translate en/Apa kabar?*
│➻ *${prefix}pasangan Aku/Kamu*
│➻ *${prefix}gantengcek*
│➻ *${prefix}cantikcek*
│➻ *${prefix}artinama*
│➻ *${prefix}persengay*
│➻ *${prefix}persenbucin*
│➻ *${prefix}bpfont*
│➻ *${prefix}textstyle*
│➻ *${prefix}jadwaltv*
│➻ *${prefix}jadwaltvnow*
│➻ *${prefix}lirik melukis senja*
│➻ *${prefix}chord melukis senja*
│➻ *${prefix}wiki Adolf Hitler*
│➻ *${prefix}brainly pertanyaan*
│➻ *${prefix}resepmasakan rawon*
│➻ *${prefix}map Banyuwangi*
│➻ *${prefix}film Fast and Farious*
│➻ *${prefix}jamdunia Banyuwangi*
│➻ *${prefix}mimpi Ular*
│➻ *${prefix}infogempa*
│➻ *${prefix}infonomor*
│➻ *${prefix}infocuaca Banyuwangi*
│➻ *${prefix}infoalamat jalan Banyuwangi*
│➻ *${prefix}playstore WhatsApp*
│➻ *${prefix}puisiimg*
│➻ *${prefix}kalkulator 13*12*
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
│➻ *${prefix}readmore*
│➻ *${prefix}mutualan*
│➻ *${prefix}next*
╰────────────────────────
「 *SPAM MENU* 」
│➻ *${prefix}spamcall 083xxxxxxxxx*
│➻ *${prefix}spamgmail contoh@gmail.com*
╰────────────────────────
「 *OWNER MENU* 」
│➻ *${prefix}addprem mentioned*
│➻ *${prefix}removeprem mention*
│➻ *${prefix}setmemlimit*
│➻ *${prefix}resetlimit*
│➻ *${prefix}setlimit*
│➻ *${prefix}setreply*
│➻ *${prefix}setprefix*
│➻ *${prefix}setnamebot*
│➻ *${prefix}setppbot*
│➻ *${prefix}addstatus*
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
「 *18+MENU* 」
│➻ *${prefix}asupan*
│➻ *${prefix}nsfwloli*
│➻ *${prefix}nsfwblowjob*
│➻ *${prefix}nsfwneko*
│➻ *${prefix}nsfwtrap*
│➻ *${prefix}nsfwsolo*
│➻ *${prefix}nsfweron*
│➻ *${prefix}nsfwlewd*
│➻ *${prefix}nsfwyuri*
│➻ *${prefix}nsfwecchi*
│➻ *${prefix}nsfwparadise*
│➻ *${prefix}nsfwbigtt*
│➻ *${prefix}nsfwclasic*
│➻ *${prefix}nsfwcum*
│➻ *${prefix}nsfwpussy*
│➻ *${prefix}animekiss*
│➻ *${prefix}hentai*
│➻ *${prefix}cersex*
│➻ *${prefix}randombokep*
│➻ *${prefix}pornhub stepMoms*
│➻ *${prefix}xvideos japan*
│➻ *${prefix}nekopoi oni chichi*
╰────────────────────────
「 *${name}* 」
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

const listephoto = () => {
return `
1 ~> Write text on wet glass online
2 ~> Multicolor 3D paper cut style text effect
3 ~> Free Glitter Text Effect Maker Online
4 ~> Create a watercolor text effect online
5 ~> Light text effect futuristic technology style
6 ~> Write text effect clouds in the sky online
7 ~> Create realistic vintage 3D light bulb online
8 ~> Create Blackpink logo online free
9 ~> Create funny warning sign
10 ~> Create 3D gradient text effect online
11 ~> Write in sand summer beach online free
12 ~> Create a luxury gold text effect online
13 ~> Create multicolored neon light signatures
14 ~> Write in Sand Summer Beach Online
15 ~> Create logo team, logo gaming assassin style
16 ~> Create PornHub style logos online free
17 ~> Free gaming logo maker for FPS game team
18 ~> Vibrant fireworks text effect
19 ~> Write text on wet glass online
20 ~> Multicolor 3D paper cut style text effect
21 ~> Free Glitter Text Effect Maker Online
22 ~> Create a watercolor text effect online
23 ~> Light text effect futuristic technology style
24 ~> Write text effect clouds in the sky online
25 ~> Create realistic vintage 3D light bulb online
26 ~> Create Blackpink logo online free
27 ~> Create funny warning sign
28 ~> Create 3D gradient text effect online
29 ~> Write in sand summer beach online free
30 ~> Create a luxury gold text effect online
31 ~> Create multicolored neon light signatures
32 ~> Write in Sand Summer Beach Online
33 ~> Create logo team, logo gaming assassin style
34 ~> Create PornHub style logos online free
35 ~> Free gaming logo maker for FPS game team
36 ~> Vibrant fireworks text effect
37 ~> Free retro neon text effect online
38 ~> Create galaxy wallpaper mobile online
39 ~> 1917 Style Text Effect
40 ~> Making Neon Light Text Effect with Galaxy Style
41 ~> Create blue neon logo online
42 ~> Metal Mascots Logo Maker
43 ~> Tik Tok Text Effects Online Generator
44 ~> Write Letters On Life Buoys
45 ~> Create a circle mascot team logo
46 ~> Create Free Company Logo Online
47 ~> Free Company Logo Maker
48 ~> Create gradient logo 3D online
49 ~> Text Logo Maker Online Free
50 ~> Royal Text Effect Online Free
51 ~> Create Double Exposure Inspired Text Effect Online Free
52 ~> Free Luxury Logo Maker - Create Logo Online
53 ~> Write Status, Quotes On Photo Online Free
54 ~> Create Typography, Status, Quotes Images Online For Free
55 ~> Print Name On Hollywood Walk of Fame Star
56 ~> Free Minimal Logo Maker Online
57 ~> Free Create a 3D Hologram Text Effect
58 ~> Create galaxy style free name logo
59 ~> Create Mascot Logo Astronaut Space Galaxy Online Free
60 ~> Make Team Logo Online Free
61 ~> Create Light Effects Green Neon Online
62 ~> Create logo 3D style Avengers online
63 ~> Create Artistic Typography For Your Photos Free Download
64 ~> Glossy Chrome Text Effect Online
65 ~> Create Marvel's Style Logo
66 ~> Green brush text effect, Typography Maker Online
67 ~> writing on the cakes
68 ~> Metal logo online
69 ~> Noel text effect online
70 ~> Glitter Gold
71 ~> Text cake
72 ~> Stars night online 1
73 ~> Advanced glow effects
74 ~> Road Paint Text Effect
75 ~> Wooden 3D text effect
76 ~> Create text by name effect
77 ~> Write galaxy online
78 ~> Write galaxy bat
79 ~> Christmas snow text effect online
80 ~> Create a snow 3D text effect free online
81 ~> Colorful birthday foil balloon text effects
82 ~> Create a cloud text effect in the sky
83 ~> Floral luxury logo collection for branding
84 ~> Create realistic cloud text effect
85 ~> Lovely floral ornamental banner online
86 ~> Create Circle Football Logo Online
87 ~> Create gun minimal logo gaming online
88 ~> Create wings logo online free
89 ~> Write names and messages on the sand online
90 ~> Realistic 3D sand text effect online
91 ~> Create a summery sand writing text effect
92 ~> Triangle mountain logo black & white
93 ~> Create a gaming mascot logo free
94 ~> Latest space 3D text effect online
95 ~> Create letter logos online for free
96 ~> Funny minion text effect online
97 ~> Create 3D Stone text effect online
98 ~> Writing your name on hot air balloon
99 ~> Create a Awesome logo SCI - FI Effects
100 ~> Free Zodiac Online Logo Maker
101 ~> Lovely cute 3D text effect with pig
102 ~> Green neon text effect
103 ~> Create Logo 3D metal online
104 ~> Create a black and white Mascot logo
105 ~> Create logo, avatar Wolf Galaxy online
106 ~> Create Avatar online style JOKER
107 ~> Create logo, avatar mascot style
108 ~> Create logo templates according to online icons
109 ~> Dark Green  Typography online
110 ~> Typography  online:  Leaf autumn
111 ~> Create typography, status online  with impressive leaves
112 ~> Text  FireWork Effect
113 ~> Nice metallic glass effect
114 ~> Chocolate text effect
115 ~> Dragon steel  text effect online
116 ~> Text light galaxy effectt
117 ~> Typography Maker Online 5
118 ~> Typography texture  online  nature theme
119 ~> Online hot metallic effect
120 ~> Typography Maker Facebook  Online
121 ~> Make typography text online
122 ~> Paul Scholes shirt foot ball
123 ~> Angel wing effect
124 ~> Create online black and white layer logo
125 ~> Create logo, avatar online style Polygon Logo
126 ~> Party Text Effcets
127 ~> Utility to create online class logo in style galaxy
128 ~> Dance Text Effects
129 ~> Angel wing photo frame
130 ~> Metallic text effect with impressive font
131 ~> Create your name in a mechanical style
132 ~> Metal text effect online - New
133 ~> Text Effect on Jean Fabric
134 ~> Create avatar gold online
135 ~> Create a Metal Avatar by your name
136 ~> Create Metallic cover online
137 ~> Create Water Effect Text Online
138 ~> Create metal border
139 ~> The effect of galaxy angel wings
140 ~> Text Galaxy Tree Effect
141 ~> Write gold letters online
142 ~> Gemstone Text effect
143 ~> 3D ruby ​​stone Text
144 ~> Write gold letters online
145 ~> Magic text effect
146 ~> Text metal  3D
147 ~> Snake  Text Effect
148 ~> Jewel Text Effect
149 ~> 3D Text Effects Style
150 ~> 3D silver text effect
151 ~> Gold Text Effect style
152 ~> Gold Text Effect pro
153 ~> Music equalizer text effect
154 ~> Galaxy Text Effect New
155 ~> Write letters on the leaves
156 ~> Fabric Text Effect
157 ~> Message  Coffee
158 ~> Text Light Effets
159 ~> Text effects incandescent bulbs
160 ~> Photo Effects cage letters
161 ~> Modern gold 5
162 ~> Modern gold 4
163 ~> Modern gold 3
164 ~> Modern Gold Silver
165 ~> Text Graffiti  3D
166 ~> Wings Galaxy
167 ~> Neon Text Effect Light
168 ~> Graffiti color
169 ~> Write text on chocolate
170 ~> Caper Cut Effect
171 ~> Modern Gold Red
172 ~> Cover Graffiti
173 ~> Graffiti Text 5
174 ~> Write graffiti letters on the wall art
175 ~> Graffiti Text -  Text effect online
176 ~> Wings Text Effect
177 ~> Modern Gold Purple
178 ~> Metal  Text Effect - Blue
179 ~> 3D Text Effect
180 ~> Neon Text Effect
181 ~> Color text effects
182 ~> Gold Text Effect - Online Text Effect Generators
183 ~> Modern Gold
184 ~> Logo Viettel
185 ~> Shadow text effects
186 ~> Matrix Text Effect
187 ~> Creating text effects night - lend for word effect
188 ~> Ligatures effects from leaves
189 ~> Zombie 3D Text Effect
190 ~> Create word green flares
191 ~> Cloud text effect
192 ~> Water 3d text effect online
193 ~> Beautiful gold text effect
194 ~> Blue neon text effect
195 ~> Galaxy text effect
196 ~> Gold text effect online
197 ~> Dragon Fire Text effect
198 ~> Metal text effect online
199 ~> Metal star text online
200 ~> Snow on text online
201 ~> Water text effects online
202 ~> 3D wooden text effects online
203 ~> Cake text effect online
204 ~> Milk cake text effects
205 ~> Purple text effect online
206 ~> Thunder text effect online
207 ~> Diamond Text
208 ~> Candy text effect
209 ~> Colorful text effects
210 ~> Chrome Text Effect
211 ~> 3D cubic text effect online
212 ~> Bokeh Text effect
213 ~> Stars night online
214 ~> Neon text effect online
215 ~> Foggy rainy text effect
216 ~> Underwater Text
`
}
exports.listephoto = listephoto

const listtextpro = () => {
return `
1 ~> Create a christmas holiday snow text effect
2 ~> Create a futuristic technology neon light text effect
3 ~> Create snow text effects for winter holidays
4 ~> Create a cloud text effect on the sky online
5 ~> 3D luxury gold text effect online
6 ~> 3D gradient text effect online free
7 ~> Create Blackpink logo style online
8 ~> Create realistic vintage style light bulb
9 ~> Create realistic cloud text effect online free
10 ~> Create a cloud text effect in the sky online
11 ~> Write in Sand Summer Beach Free Online
12 ~> Sand Writing Text Effect Online
13 ~> Sand engraved 3d text effect
14 ~> Create a summery sand writing text effect
15 ~> Foil Balloon Text Effect For Birthday
16 ~> Create 3d glue text effect with realistic style
17 ~> Create space 3D text effect online
18 ~> Metal Dark Gold Text Effect
19 ~> Create a christmas holiday snow text effect
20 ~> Create a futuristic technology neon light text effect
21 ~> Create snow text effects for winter holidays
22 ~> Create a cloud text effect on the sky online
23 ~> 3D luxury gold text effect online
24 ~> 3D gradient text effect online free
25 ~> Create Blackpink logo style online
26 ~> Create realistic vintage style light bulb
27 ~> Create realistic cloud text effect online free
28 ~> Create a cloud text effect in the sky online
29 ~> Write in Sand Summer Beach Free Online
30 ~> Sand Writing Text Effect Online
31 ~> Sand engraved 3d text effect
32 ~> Create a summery sand writing text effect
33 ~> Foil Balloon Text Effect For Birthday
34 ~> Create 3d glue text effect with realistic style
35 ~> Create space 3D text effect online
36 ~> Metal Dark Gold Text Effect
37 ~> Create Glitch Text Effect Style Tik Tok
38 ~> Create a Stone Text Effect Online
39 ~> Neon Light Text Effect With Galaxy Style
40 ~> 1917 Style Text Effect Online
41 ~> 80's Retro Neon Text Effect Online
42 ~> Minion Text Effect 3D Online
43 ~> Pornhub Style Logo Online Generator Free
44 ~> Double Exposure Text Effect Black & White
45 ~> Holographic 3D Text Effect
46 ~> Create 3D Avengers logo online
47 ~> Metal Purple Dual Effect
48 ~> Create logo style Marvel studios Ver: metal
49 ~> Create logo style Marvel studios online
50 ~> Deluxe Silver Text Effect
51 ~> Color Full Luxury Metal Text Effect
52 ~> Glossy Blue Metal Text Effect
53 ~> Deluxe Gold Text Effect
54 ~> Glossy Carbon Text Effect
55 ~> Fabric Text Effect Online
56 ~> Neon Text Effect Online
57 ~> New Year Cards 3D By Name
58 ~> Happ new year card firework gif
59 ~> Fullcolor Balloon Text Effect
60 ~> Create Text Logo 3D Metal  Online
61 ~> Create avatar gold online
62 ~> Text Logo 3D Metal Silver
63 ~> Text Logo 3D Metal Rose Gold
64 ~> Text Logo 3D Metal Gold
65 ~> Text Logo 3D Metal Galaxy
66 ~> Xmas Cards 3D Online
67 ~> Blood Text On The Frosted Glass
68 ~> Halloween Fire Text Effect
69 ~> Metal Dark Gold Text Effect Online
70 ~> Create Lion Logo Mascot Online
71 ~> Create Wolf Logo Black & White
72 ~> Create Wolf Logo Galaxy Online
73 ~> Create Ninja Logo Online
74 ~> Create Logo Joker Online
75 ~> Wicker Text Effect Online
76 ~> Natural Leaves Text Effect
77 ~> Firework Sparkle Text Effect
78 ~> Skeleton Text Effect Online
79 ~> Red Foil Balloon Text Effect
80 ~> Purple Foil Balloon Text Effect
81 ~> Pink Foil Balloon Text Effect
82 ~> Green Foil Balloon Text Effect
83 ~> Cyan Foil Balloon Text Effect
84 ~> Blue Foil Balloon Text Effect
85 ~> Gold Foil Balloon Text Effect
86 ~> Steel Text Effect Online
87 ~> Ultra Gloss Text Effect Online
88 ~> Denim Text Effect Online
89 ~> Decorate Green Text Effect
90 ~> Decorate Purple Text Effect
91 ~> Peridot Stone Text Effect
92 ~> Rock Text Effect Online
93 ~> Lava Text Effect Online
94 ~> Yellow Glass Text Effect
95 ~> Purple Glass Text Effect
96 ~> Orange Glass Text Effect
97 ~> Green Glass Text Effect
98 ~> Cyan Glass Text Effect
99 ~> Blue Glass Text Effect
100 ~> Red Glass Text Effect
101 ~> Purple Shiny Glass Text Effect
102 ~> Captain America Text Effect
103 ~> Robot R2 D2 Text Effect
104 ~> Rainbow Equalizer Text Effect
105 ~> Toxic Text Effect Online
106 ~> Pink Sparkling Jewelry Text Effect
107 ~> Blue Sparkling Jewelry Text Effect
108 ~> Green Sparkling Jewelry Text Effect
109 ~> Purple Sparkling Jewelry Text Effect
110 ~> Gold Sparkling Jewelry Text Effect
111 ~> Red Sparkling Jewelry Text Effect
112 ~> Cyan Sparkling Jewelry Text Effect
113 ~> Purple Glass Text Effect Online
114 ~> Decorative Glass Text Effect
115 ~> Chocolate Cake Text Effect
116 ~> Strawberry Text Effect Online
117 ~> Koi Fish Text Effect Online
118 ~> Bread Text Effect Online
119 ~> Matrix Style Text Effect Online
120 ~> Horror Blood Text Effect Online
121 ~> Neon Light Text Effect Online
122 ~> Thunder Text Effect Online
123 ~> 3D Box Text Effect Online
124 ~> Neon Text Effect Online
125 ~> Road Warning Text Effect
126 ~> 3D Steel Text Effect
127 ~> Bokeh Text effect
128 ~> Green Neon Text Effect
129 ~> Advanced Glow Text Effect
130 ~> Dropwater Text Effect
131 ~> Break Wall Text Effect
132 ~> Chrismast Gift Text Effect
133 ~> Honey Text Effect
134 ~> Plastic Bag Drug Text Effect
135 ~> Horror Gift Text Effect
136 ~> Marble Slabs Text Effect
137 ~> Marble Text Effect
138 ~> Ice Cold Text Effect
139 ~> Fruit Juice Text Effect
140 ~> Rusty Metal Text Effect
141 ~> Abstra Gold Text Effect
142 ~> Biscuit Text Effect
143 ~> Bagel Text Effect
144 ~> Wood Text Effect
145 ~> SCI - Fi Text Effect
146 ~> Metal Rainbow Text Effect
147 ~> Purple Gem Text Effect
148 ~> Shiny Metal Text Effect
149 ~> Yellow Jewelry Text Effect
150 ~> Silver Jewelry Text Effect
151 ~> Red Jewelry Text Effect
152 ~> Purple Jewelry Text Effect
153 ~> Orange Jewelry Text Effect
154 ~> Green Jewelry Text Effect
155 ~> Cyan Jewelry Text Effect
156 ~> Blue Jewelry Text Effect
157 ~> Hot Metal Text Effect
158 ~> Hexa Golden Text Effect
159 ~> Blue Glitter Text Effect
160 ~> Purple Glitter Text Effect
161 ~> Pink Glitter Text Effect
162 ~> Green Glitter Text Effect
`
}
exports.listtextpro = listtextpro
