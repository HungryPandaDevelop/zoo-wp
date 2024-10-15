export const inputs = {

  user_login: {
    name: "user_login",
    placeholder: "Почта пользователя",
    type: "text",
    validate: ['required', 'minLength', 'mailCheck'],
  },

} 