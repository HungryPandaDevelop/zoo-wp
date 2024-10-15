export const inputs = {

  status: {
    type: "select",
    name: "status",
    placeholder: "Статус объявления",
    options: [
      { label: "Активно", value: "active" },
      { label: "Черновик", value: "draft" },
      { label: "Архив", value: "archive" },
    ],
  },
  title: {
    name: "title",
    placeholder: "Придумайте название*",
    type: "text",
    validate: ['required', 'minLength'],
  },
  target: {
    type: "targetSale",
    name: "target",
    placeholder: "Тип объявления",
    options: [
      { label: "Продажа", value: "sale" },
      { label: "Анонс помета", value: "anons" },
      { label: "Вязка", value: "knit" },
      { label: "В дар", value: "gift" },
    ]
  },
  content: {
    name: "content",
    placeholder: "Опишите подробности о питомце",
    type: "textarea",

  },
  company: {
    name: "company",
    placeholder: "Выбрать компанию",
    post: "companies",
    type: "choiseCompany",
  },
  birth: {
    name: "birth",
    placeholder: "дд.мм.гггг",
    type: "date",
  },
  gender: {
    type: "choiseBtn",
    name: "gender",
    placeholder: "Пол питомца",
    options: [
      { label: "Девочка", value: "gerl" },
      { label: "Мальчик", value: "boy" },
    ]
  },
  quantity: {
    type: "choiseBtn",
    name: "quantity",
    placeholder: "Количество питомцев",
    options: [
      { label: "Один", value: "single-quan" },
      { label: "Помет", value: "multy-quan" },
    ]
  },
  mather: {
    name: "mather",
    placeholder: "Выбрать маму",
    post: "pets",
    type: "choisePets",
    single: true,
    gender: 'gerl',
    popupVal: { label: "Девочка", value: "gerl" },
  },
  father: {
    name: "father",
    placeholder: "Выбрать папу",
    post: "pets",
    type: "choisePets",
    single: true,
    gender: 'boy',
    popupVal: { label: "Мальчик", value: "boy" },
  },
  nickname: {
    name: "nickname",
    placeholder: "Кличка питомца",
    type: "text",
  },
  // pet: {
  //   name: "pet",
  //   placeholder: "Выбрать питомца",
  //   post: "pets",
  //   type: "posts",
  // },
  // baer: {
  //   type: "radio",
  //   name: "baer",
  //   placeholder: "BAER-test",
  //   options: [
  //     { label: "+/+", value: "+/+" },
  //     { label: "-/+", value: "-/+" },
  //     { label: "+/-", value: "+/-" },
  //     { label: "-/-", value: "-/-" },
  //   ],
  // },
  // hd: {
  //   type: "switch",
  //   name: "hd",
  //   placeholder: "Сертификат на отсутствие дисплазии (HD)",
  //   options: [
  //     { name: '<div>Нет</div>', value: "off" },
  //     { name: '<div>Есть</div>', value: "on" },
  //   ],
  // },
  // pl: {
  //   type: "switch",
  //   name: "pl",
  //   placeholder: "Сертификат на отсутствие пателлы (PL)",
  //   options: [
  //     { name: '<div>Нет</div>', value: "off" },
  //     { name: '<div>Есть</div>', value: "on" },
  //   ],
  // },
  // vaccine: {
  //   type: "switch",
  //   name: "vaccine",
  //   placeholder: "Привит",
  //   options: [
  //     { name: '<div>Нет</div>', value: "off" },
  //     { name: '<div>Есть</div>', value: "on" },
  //   ],
  // },
  // childrens: {
  //   type: "radio",
  //   name: "childrens",
  //   placeholder: "Помет",
  //   options: [
  //     { label: "A", value: "A" },
  //     { label: "B", value: "B" },
  //     { label: "C", value: "C" },
  //     { label: "D", value: "D" },
  //     { label: "E", value: "E" },
  //     { label: "F", value: "F" },
  //     { label: "G", value: "G" },
  //     { label: "H", value: "H" },
  //     { label: "I", value: "I" },
  //     { label: "J", value: "J" },
  //     { label: "K", value: "K" },
  //     { label: "L", value: "L" },
  //     { label: "M", value: "M" },
  //     { label: "N", value: "N" },
  //     { label: "O", value: "O" },
  //   ],
  // },
  // brand: {
  //   type: "switch",
  //   name: "brand",
  //   placeholder: "Клеймение",
  //   options: [
  //     { name: '<div>Нет</div>', value: "off" },
  //     { name: '<div>Есть</div>', value: "on" },
  //   ],
  // },
  // chipping: {
  //   type: "switch",
  //   name: "chipping",
  //   placeholder: "Чипирование",
  //   options: [
  //     { name: '<div>Нет</div>', value: "off" },
  //     { name: '<div>Есть</div>', value: "on" },
  //   ],
  // },
  photo_parents: {
    type: "fileSingle",
    name: "photo_parents",
    placeholder: "Фото родителей",
    maxLength: 3000,
  },
  photos_sale: {
    type: "file",
    name: "photos_sale",
    placeholder: "Загрузите фото объявления",
    maxLength: 3000,
  },
  price: {
    name: "price",
    placeholder: "Стоимость за щенка/котенка",
    type: "price",
  },
  priceRange: {
    name: "priceRange",
    placeholder: "Стоимость за щенка/котенка от до",
    type: "multy",
  },
  month: {
    name: "month",
    placeholder: "Выберите месяц ожидаемого помета",
    type: "date",
    onlyMonth: true,
  },

  animal: {
    name: "animal",
    placeholder: "Вид питомца",
    type: "animalSingle",
    num: 3
  },
  dokumenty_pitomca: {
    name: "dokumenty_pitomca",
    placeholder: "Документы питомца",
    type: "rulesFromAcf",
  },
  osobennosti_pitomca: {
    name: "osobennosti_pitomca",
    placeholder: "Особенности питомца",
    type: "rulesFromAcf",
  },
  navyki_pitomca: {
    name: "navyki_pitomca",
    placeholder: "Навыки питомца",
    type: "rulesFromAcf",
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
  rodoslovnaya: {
    name: "rodoslovnaya",
    placeholder: "Загрузите фотографию родословной",
    type: "fileSingle",
  },
}