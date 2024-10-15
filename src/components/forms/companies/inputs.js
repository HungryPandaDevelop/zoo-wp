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
    placeholder: "Наименование*",
    type: "text",
    validate: ['required', 'minLength'],
  },
  type_company: {
    type: "radio",
    name: "type_company",
    placeholder: "Тип",
    options: [
      { label: "Питомник", value: 53 },
      // { label: "Клиника", value: "clinics" },
      // { label: "Салон", value: "salons" },
      { label: "Приют", value: 54 },
      // { label: "Разместить как частное лицо", value: "person" },
      // { label: "Магазин", value: "shop" },
      // { label: "Дистрибьютор", value: "distributor" },
    ]
  },

  logo: {
    name: "logo",
    placeholder: "Логотип",
    type: "fileSingle",
    placeholder: "Загрузите логотип",
  },
  excerpt: {
    type: "textarea",
    name: "excerpt",
    maxLength: 110
  },
  content: {
    type: "textarea",
    name: "content",
    maxLength: 3000,
  },
  photos_company: {
    type: "file",
    name: "photos_company",
    placeholder: "Фото компании",
    maxLength: 3000,
  },
  city: {
    name: "city",
    placeholder: "Город",
    type: "search",
  },
  address: {
    name: "address",
    placeholder: "Адрес",
    type: "suggest",
  },
  phone_company: {
    name: "phone_company",
    placeholder: "Телефон",
    type: "phone",
  },
  email_company: {
    name: "email_company",
    placeholder: "Email",
    type: "text",
    validate: ['required', 'minLength', 'mailCheck'],
  },
  site_company: {
    name: "site_company",
    placeholder: "Сайт компании",
    type: "text",
  },
  vk: {
    name: "vk",
    placeholder: "vk",
    type: "text",
  },
  ok: {
    name: "ok",
    placeholder: "ok",
    type: "text",
  },
  telegramm: {
    name: "telegramm",
    placeholder: "telegramm",
    type: "text",
  },
  certificates: {
    name: "certificates",
    placeholder: "certificates",
    type: "file",
  },
  tribesman: {
    name: "tribesman",
    placeholder: "certificates",
    post: "pets",
    type: "posts",
    choise: "false"
  },




  specialization: {
    name: "specialization",
    placeholder: "animals",
    type: "animals",
  },
  dopolnitelnye_uslugi: {
    name: "dopolnitelnye_uslugi",
    placeholder: "dopolnitelnye_uslugi",
    type: "rulesFromAcf",
  },


}