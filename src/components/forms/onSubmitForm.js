export const onSubmitForm = (setCheckErrorSubmit, submitSuccess, invalid, reset) => {

  let idTimeCheck;

  if (invalid) {

    setCheckErrorSubmit(true);
    clearTimeout(idTimeCheck);

    idTimeCheck = setTimeout(() => {
      setCheckErrorSubmit(false);
    }, 5000);

  } else {
    setCheckErrorSubmit(false);
    submitSuccess();
    reset && reset();
  }
}
