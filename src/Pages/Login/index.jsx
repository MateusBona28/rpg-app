import LoginForm from "../../Components/LoginForm";
import './styles.css';

export default function Login() {
  return (
    <div className="app-wrapper">
      <div className="app-header">
        <img src={'https://i.postimg.cc/j2FKhBZc/BU.jpg'} className="App-logo" alt="logo" />
      </div>
      <div className='app-content'>
        <LoginForm />
      </div>
    </div>
  );
}