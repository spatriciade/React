export const validateEmail = (mail) => {
  // esta expresion regular valida el formato del correo
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
};

// validar password que incluye entre 8 y 15 caracteres, al menos una mayuscula, una minuscula, un numeroy un caracter especial

export const validatePassword = (password) => {
  // validar minusculas
  if (/[a-z]/.test(password)) {
  }
  // validar mayusculas
  if (/[A-Z]/.test(password)) {
  }
  // validar numeros
  if (/[0-9]/.test(password)) {
  }
  // validar caracteres especiales
  if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
  }
  // if (/(!|"|#|[$]|%|&|'|[(]|[)]|[*]|[+]|'|-|.|[/])+/.test(password)) {
  if (
    /[a-z]/.test(password) &&
    /[A-Z]/.test(password) &&
    /[0-9]/.test(password) &&
    /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>?]/.test(password)
  ) {
    console.log("password is valid");
    return true;
  }
  console.log("password is invalid");
  return false;
};
//validar longitud del password entre 8 y 15 caracteres
const validatePasswordLength = (password) => {
  if (password.length >= 8 && password.length <= 15) {
    return false;
  }
  return true;
};