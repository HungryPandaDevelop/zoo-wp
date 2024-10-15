export const inputs = {
  status: {
    type: "select",
    name: "status",
    placeholder: "Статус объявления",
    options: [
      { label: "Активно", value: "selected" },
      { label: "Черновик", value: "draft" },
      { label: "Архив", value: "archive" },
    ],
  },
  title: {
    name: "title",
    placeholder: "Кличка*",
    type: "text",
    validate: ['required', 'minLength'],
  },
  genderPets: {
    type: "choiseBtn",
    name: "genderPets",
    placeholder: "Пол",
    options: [
      { label: "Девочка", value: "gerl" },
      { label: "Мальчик", value: "boy" },
    ]
  },
  birth: {
    name: "birth",
    placeholder: "Дата рождения",
    type: "date",
  },
  fotografia_pitomca: {
    name: "fotografia_pitomca",
    placeholder: "Загрузите фотографию родословной",
    type: "fileSingle",
  },

  content: {
    type: "textarea",
    name: "content",
    placeholder: "Полное описание",
    maxLength: 3000,
  },



  tituly: {
    name: "tituly",
    placeholder: "Перечислите титулы (через запятую)",
    type: "textarea",
  },
  sportivnoe_napravlenie: {
    name: "sportivnoe_napravlenie",
    placeholder: "Спортивное направление",
    type: "checkbox",
    options:
      [
        { label: "Аттестация прикладных собак", value: "Аттестация прикладных собак" },
        { label: "Розыскная служба", value: "Розыскная служба" },
        { label: "Общий курс дрессировки", value: "Общий курс дрессировки" },
        { label: "Служба связи и подноска легких грузов", value: "Служба связи и подноска легких грузов" },
        { label: "Защитно-караульная служба", value: "Защитно-караульная служба" },
        { label: "Поисково-спасательная служба", value: "Поисково-спасательная служба" },
        { label: "Караульная служба", value: "Караульная служба" },
        { label: "Русский ринг и Большой ринг", value: "Русский ринг и Большой ринг" },
      ]
  },
  rossijskie_vidy_sluzhb: {
    name: "rossijskie_vidy_sluzhb",
    placeholder: "Российские виды служб",
    type: "checkbox",
    options:
      [
        { label: "Конвойная служба", value: "Конвойная служба" },
        { label: "Разведка", value: "Разведка" },
        { label: "Патрульно-постовая, патрульно-дозорная служба", value: "Патрульно-постовая, патрульно-дозорная служба" },
        { label: "Рудорозыскная и газорозыскная служба", value: "Рудорозыскная и газорозыскная служба" },
        { label: "Сторожевая служба", value: "Сторожевая служба" },
        { label: "Поиск наркотиков", value: "Поиск наркотиков" },
        { label: "Минно-розыскная служба", value: "Минно-розыскная служба" },
        { label: "Пастушья служба", value: "Пастушья служба" },
      ]
  },
  socialnye_vidy_sluzhb: {
    name: "socialnye_vidy_sluzhb",
    placeholder: "Социальные виды служб",
    type: "checkbox",
    options:
      [
        { label: "Собака-поводырь", value: "Собака-поводырь" },
        { label: "Собаки-пожарные", value: "Собаки-пожарные" },
        { label: "Спасение на водах", value: "Спасение на водах" },
        { label: "Канис-терапия", value: "Канис-терапия" },
      ]
  },
  sportivnye_vidy_dressirovki: {
    name: "sportivnye_vidy_dressirovki",
    placeholder: "Спортивные виды дрессировки",
    type: "checkbox",
    options: [
      { label: "Аджилити", value: "Аджилити" },
      { label: "Фристаил(танцы с собаками)", value: "Фристаил(танцы с собаками)" },
      { label: "Гонки на собачьих упряжках", value: "Гонки на собачьих упряжках" },
      { label: "Флайбол", value: "Флайбол" },
      { label: "Вейтпуллинг (перетаскивание тяжестей)", value: "Вейтпуллинг (перетаскивание тяжестей)" },
      { label: "Фрисби", value: "Фрисби" },
      { label: "Фасттрек", value: "Фасттрек" },
      { label: "Рейсинг", value: "Рейсинг" },
      { label: "Хендлинг", value: "Хендлинг" },
      { label: "Пастушья служба", value: "Пастушья служба" },
      { label: "Дрессировка собак охотничьих пород", value: "Дрессировка собак охотничьих пород" },
      { label: "Курсинг", value: "Курсинг" },
    ]
  },
  foto_roditelya: {
    type: "file",
    name: "foto_roditelya",
    placeholder: "Фото родителя",
    maxLength: 3000,
  },
  animal: {
    name: "animal",
    placeholder: "Вид питомца",
    type: "animalSingle",
    num: 1
  },
  dokumenty_pitomca: {
    name: "dokumenty_pitomca",
    placeholder: "Документы питомца",
    type: "rulesFromAcf",
  },
}