module.exports = async (ctx) => {
  await ctx.reply(
    `🕰️ *Таймер до Нового Года*\n\n` +
    `Я могу сказать, сколько дней осталось до 1 января!\n` +
    `Просто напиши /countdown`,
    { parse_mode: 'Markdown' }
  );
};