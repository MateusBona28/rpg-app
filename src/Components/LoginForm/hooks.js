import { useState } from "react";
import { loginRequests } from "../../api/login";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const navigate = useNavigate();
  const [loadingAuthRequest, setLoadingAuthRequest] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    setLoadingAuthRequest(true);
    const payload = { 
      username,
      password,
    };
    const response = await loginRequests.auth(payload);
    setLoadingAuthRequest(false);
    localStorage.setItem('Z_TABLE_TOP_RPG_TOKEN', response.data.token);
    navigate('/table-top');
  }

  return {
    username,
    setUsername,
    password,
    setPassword,
    handleLogin,
    loadingAuthRequest,
  };
};