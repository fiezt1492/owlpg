const User = require('../../Classes/User.js')

module.exports = {
  name: 'profile',
  aliases: ['p'],
  category: 'Player',
  utilisation: '{prefix}profile',
  async execute (bot, message, args) {
    
    const member = bot.getUserFromMention(args) || message.author
    const thisUser = new User(bot, member, message)
    const playerProfile = await thisUser.getInfo()
    const prefix = await bot.getPrefix(message)

    if (!message.author.equals(member) && thisUser.checkProfile(playerProfile, prefix, true)) return 
    if (thisUser.checkProfile(playerProfile, prefix)) return;
    
    thisUser.sendInfo(playerProfile)
  }
}