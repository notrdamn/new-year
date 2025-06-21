const { getDaysToNY } = require('../utils/dateCalculator');

module.exports = async (ctx) => {
  const daysLeft = getDaysToNY();
  await ctx.reply(
    `🎄 До Нового ${ctx.from.first_name ? ctx.from.first_name + ', ' : ''}осталось: ` + 
    `**${daysLeft} ${daysLeft === 1 ? 'день' : daysLeft < 5 ? 'дня' : 'дней'}!**\n\n` +
    `Скоро салюты, мандарины и подарки! 🎁`,
    { parse_mode: 'Markdown' }
  );
};