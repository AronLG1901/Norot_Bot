var mineflayer = require('mineflayer');
var AutoAuth = require('mineflayer-auto-auth')

const bot = mineflayer.createBot({
  host: "GangNations.aternos.me",
  port: 44578,
  username: "Norot_Afk",
  version: "1.17.1",
  plugins: [AutoAuth],
  AutoAuth: 'GangNationsServer_NorotAfk',
});

// * Log o razones de kickeo: * //
bot.on('kicked', console.log);
bot.on('error', console.log);
