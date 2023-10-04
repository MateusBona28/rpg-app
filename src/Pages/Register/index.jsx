import { useNavigate } from "react-router-dom";
import "../../App.css"
import "../../Components/LoginForm/styles.css"
import { useRegister } from "./hooks";

export default function Register() {
  const navigate = useNavigate();
  const {
    username,
    setUsername,
    password,
    setPassword,
    handleRegister,
    loadingRequest,
  } = useRegister();

  return (
    <div className="app-wrapper">
      <div className="app-header">
        <img src={'https://i.postimg.cc/j2FKhBZc/BU.jpg'} className="App-logo" alt="logo" />
      </div>
      <div className='app-content'>
      <div className='register-container'>
      <span className='styled-title'>Cadastro</span>
      <div className='input-container'>
        <label className='styled-label'>Nome de usuário</label>
        <input className='styled-input' value={username} onChange={(e) => {setUsername(e.target.value)}} />
      </div>
      <div className='input-container'>
        <label className='styled-label'>Senha</label>
        <input className='styled-input' type='password' value={password} onChange={(e) => {setPassword(e.target.value)}} />
      </div>
      <span className='link-redirect' onClick={()=> navigate("/login")}>Ir para login</span>
      <div className='styled-btn-container'>
        {loadingRequest ?
        <div className='c-loader'></div>
        :
        <button type='button' className='styled-btn' onClick={()=> handleRegister()}>Cadastrar</button>
        }
      </div>
    </div>
      </div>
    </div>
  );
}