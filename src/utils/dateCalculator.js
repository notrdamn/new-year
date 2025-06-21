// Логика расчета дней до НГ
function getDaysToNY() {
  const today = new Date();
  const nextYear = today.getFullYear() + 1;
  const newYear = new Date(nextYear, 0, 1); // 1 января следующего года
  const diff = newYear - today; // Разница в миллисекундах
  return Math.floor(diff / (1000 * 60 * 60 * 24)); // Переводим в дни
}

module.exports = { getDaysToNY };