import classes from "./LoginPage.module.css";
import LoginForm from "./LoginForm";
import { validateEmail, validatePassword } from "../../utils/validate";
import Modal from "./Modal/Modal";
import ReactDOM from "react-dom";
import { useState } from "react";

function LoginPage() {
  const [visible, setVisible] = useState(false);
  const [loginInfo, setLoginInfo] = useState({
    loggedIn: false,
    email: "",
    password: "",
    rememberMe: false,
    loginError: "",
  });
  //intentar refactorizar
    const handlerVisibility = (loginData) => {
    if (
      loginData &&
      validateEmail(loginData.email) &&
      validatePassword(loginData.password)
    ) {
      setLoginInfo({
        loggedIn: true,
        email: loginData.email,
        password: loginData.password,
        rememberMe: loginData.rememberMe,
        loginHeader: "Login successfully",
        loginMessage: "You haver been logged succesfully",
      });
      console.log("Loging successfully");
    } else {
      setLoginInfo({
        loggedIn: false,
        email: loginData.email,
        password: loginData.password,
        rememberMe: loginData.rememberMe,
        loginHeader: "Login failed",
        loginMessage: "Wrong email or password",
      });
      console.log("Login failed");
    }
    setVisible(!visible)
  };

  return (
    <>
      {ReactDOM.createPortal(
        <Modal visible={visible} onLogin={handlerVisibility} data={loginInfo} />,
        document.querySelector("#modal")
      )}
      <div className={classes.container}>
        <div className={classes.bgForm}></div>
        <div className={classes.formContainer}>
          <div className={classes.formWrapper}>
            <h2>Get all stuffs done with Login engine</h2>
            <p>
              Acces to the most powerfull tool in the entire design and web
              galaxy.
            </p>
            <div className={classes["login-links"]}>
              <a href="#" className={classes.active}>
                Login
              </a>
              <a href="#">Register</a>
            </div>
            <LoginForm onLogin={handlerVisibility} />
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
