export const inputs = {
  message: {
    name: "message",
    placeholder: "Сообщение",
    type: "text",
    validate: ['required', 'minLength'],
  },
  fileChat: {
    name: "fileChat",
    placeholder: "Загрузите фото",
    type: "fileSingle",
    options: "mini"
  },
  imgEmodsy: {
    name: "imgEmodsy",
    type: "emodsy",
  },
} 