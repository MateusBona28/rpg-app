import { useNavigate } from 'react-router-dom';
import './styles.css';
import { useLogin } from './hooks';

export default function LoginForm() {
  const navigate = useNavigate();
  const {
    username,
    setUsername,
    password,
    setPassword,
    handleLogin,
    loadingAuthRequest,
  } = useLogin();

  return (
    <div className='login-container'>
      <span className='styled-title'>Login</span>
      <div className='input-container'>
        <label className='styled-label'>Nome de usuário</label>
        <input className='styled-input' value={username} onChange={(e) => {setUsername(e.target.value)}} />
      </div>
      <div className='input-container'>
        <label className='styled-label'>Senha</label>
        <input 
          className='styled-input' 
          type='password'  
          value={password} 
          onChange={(e) => {setPassword(e.target.value)}} 
          onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
        />
      </div>
      <span className='link-redirect' onClick={()=> navigate("/register")}>Crie uma conta aqui</span>
      <div className='styled-btn-container'>
        {loadingAuthRequest ?
        <div className='c-loader'></div>
        :
        <button type='button' className='styled-btn' onClick={()=> handleLogin()}>Login</button>
        }
      </div>
    </div>
  );
};