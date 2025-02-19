import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import styles from './Login.module.css';
import logo from '../../../public/greenworld.svg'

const Login: React.FC = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();

  const navigateToTypeRegister = () => {
    navigate("/TypeRegister");
  };

  const navigateToDashboard = () => {
    navigate("/Dashboard");
  };

  return (
    <div className={styles.containerLogin}>

     <div className={styles.background}></div>

      <form className={styles.containerForm}>

        <div className={styles.logo}>
          <img className={styles.logo} src={logo} alt="logo" />
        </div>

        <div className={styles.text}>
          <h3>Green World Login</h3>
        </div>

        <div className={styles.inputs}>
          <label htmlFor="email">Seu e-mail</label>
          <input
            type="email"
            autoComplete="on"
            required
            id="email"
          />
          <label htmlFor="senha">Sua senha</label>
          <input
            type={isShowPassword ? "text" : "password"}
            required
            id="senha"
          />
          <button
            type="button"
            className={styles.eyeButton}
            onClick={() => setIsShowPassword(!isShowPassword)}
          >
            {isShowPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
          
        <div className={styles.link}>
         <a href="#">Esqueci minha senha</a>
        </div>

        </div>

        <div className={styles.btn}>
          <button
            className={styles.buttonEntrar}
            type="button"
            onClick={navigateToDashboard}
          >
            Entrar
          </button>
        </div>

        <div className={styles.mini_footer}>

        <p>Ainda não tem uma conta?</p>

        <div className={styles.btn0}>
          <button
            className={styles.buttonCadastrar}
            type="button"
            onClick={navigateToTypeRegister}
          >
            Cadastrar-se
          </button>
        </div>

      </div>
        
      </form>

    </div>
  );
};
export default Login;
