const lolcatjs = require('lolcatjs')
const figlet = require('figlet')

lolcatjs.options.seed = Math.round(Math.random() * 1000);
lolcatjs.options.colors = true;

lolcatjs.fromString('[INFO] KLO SCRIPT NYA EROR, KASIH TAU GW YAA TOD')
lolcatjs.fromString('[SYSTEM] SABAR YAA NGENTOD...')
console.log('------------------------------------------------')
let { spawn } = require('child_process')
let path = require('path')
const CFonts  = require('cfonts')
CFonts.say('WOY NGENTOD', {
  font: 'chrome',
  align: 'center',
  gradient: ['red', 'magenta']
})
CFonts.say('\'JINGAN BOT\' By @_miqbal.22', {
  font: 'console',
  align: 'center',
  gradient: ['red', 'magenta']
})
console.log('------------------------------------------------')

function start() {
  let args = [path.join(__dirname, 'iqbal.js'), ...process.argv.slice(2)]
  CFonts.say([process.argv[0], ...args].join(' '), {
    font: 'console',
    align: 'center',
    gradient: ['red', 'magenta']
  })
  let p = spawn(process.argv[0], args, {
    stdio: ['inherit', 'inherit', 'inherit', 'ipc']
  })
  .on('message', data => {
    if (data == 'reset') {
      console.log('RESET')
      p.kill()
      start()
      delete p
    }
  })
}

start()
console.log('------------------------------------------------')
lolcatjs.fromString('[DEV] Muhammad Iqbal')
