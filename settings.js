//═══════════════════════════════════════════════════════//
//
//                              ♥️DARK KING 𝓫𝔂 DARK BOY♥️
//𝙰𝙳𝙾𝙿𝚃𝙴𝙳 𝙵𝚁𝙾𝙼  𝚂Created by яανι∂ηυ ѕнєнαη😘✊ 
//
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['94752071090']
global.premium = ['94752071090']
global.ownernomer = '94752071090'
global.ownername = '❤️Ravindu🙂❤️'
global.botname = '❤️DARK KING_𝙱𝙾𝚃❤️'
global.footer = '©Sihilel.'
global.ig = 'https://github.com/Dark-Boy'
global.region = 'India, South India, Kerala'
global.sc = 'https://github.com/ravindushehan/Dark-Boy'
global.myweb = 'https://wa.me+94752071090?text=😘හායි+මgayකා💛✊'
global.packname = '❤️DARK KING❤️'
global.author = '❤️ᐇᑈᴴᴵᵀᴴᵁᵂᴬᴷᴷᴬᴿᴬ⃢ˍʾ✊k̷o̷l̷l̷a̷❤️⃠❤️'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'Done ✓',
    admin: '♥️яανιη∂υ♥️ ඇඩ්මින්ලට විතරයි මේක පුලුවන් ළමයෝ 🌝',
    botAdmin: '♥️яανιη∂υ♥️ ඇඩ්මින් දියන්කෝ මුලින් 😒',
    owner: '♥️яανιв∂υ♥ Owner ට විතරයි ළමයෝ ඕක පුලුවන් 🙏 ',
    group: '♥️яανιη∂υ♥️ group වල විතරයි ඕක😒',
    private: '♥️яανιη∂υ♥️ inbox විතරයි පුලුවන්🌝',
    bot: '♥️яανιη∂υ♥️ මේක මට විතරයි පුලුවන්😌👍 ඔයා පාඩුවේ ඉන්න 😒',
    wait: '♥️яανιη∂υ♥️ චුට්ටක් ඉන්න බබා 🌸🙏',
    error: 'Error! Maybe Api Key Is Expired🤔!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./GojoMedia/gojo.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
