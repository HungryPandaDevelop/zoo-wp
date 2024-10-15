

const useDate = (createdAt) => {
  const dateString = createdAt;
  const date = new Date(dateString);

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Месяцы начинаются с 0
  const year = date.getFullYear();

  const formattedDate = `${day}.${month}.${year}`;

  // Получаем часы, минуты и секунды
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  const formattedTime = `${hours}:${minutes}`;

  return [formattedDate, formattedTime];
}

export default useDate;