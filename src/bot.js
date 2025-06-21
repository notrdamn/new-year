const { Bot } = require('grammy');

// Токен прямо в коде (замените на свой!)
const bot = new Bot("8035886589:AAGlhvY5RoU-Apyi__UzOFbaBpiIQtFScGc"); 

// Расчет дней до НГ
function getDaysToNY() {
  const today = new Date();
  const nextYear = today.getFullYear() + 1;
  const newYear = new Date(nextYear, 0, 1); // 1 января
  const diff = newYear - today;
  return Math.floor(diff / (1000 * 60 * 60 * 24)); // Дни
}

// Команда /start
bot.command('start', async (ctx) => {
  await ctx.reply(
    '🎄 *Таймер до Нового Года*\n\n' +
    'Напиши /days чтобы узнать, сколько дней осталось до 1 января!',
    { parse_mode: 'Markdown' }
  );
});

// Команда /days
bot.command('days', async (ctx) => {
  const daysLeft = getDaysToNY();
  await ctx.reply(
    `⏳ До Нового года осталось: *${daysLeft} ${daysLeft === 1 ? 'день' : daysLeft < 5 ? 'дня' : 'дней'}!*\n` +
    'Готовь шампанское и ёлку! 🎁',
    { parse_mode: 'Markdown' }
  );
});

// Запуск бота
bot.start();
console.log('Бот запущен! Новогоднее настроение активировано! 🎅');