export const inputs = {

  user_login: {
    name: "user_login",
    placeholder: "Почта пользователя",
    type: "text",
    validate: ['required', 'minLength', 'mailCheck'],
  },
  user_pass: {
    name: "user_pass",
    placeholder: "Пароль",
    type: "password",
    validate: ['required', 'minLengthPass'],
  },
} 