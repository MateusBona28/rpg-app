import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerFunctions } from "../../api/register";

export const useRegister = () => {
  const navigate = useNavigate();
  const [loadingRequest, setLoadingRequest] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    setLoadingRequest(true);
    const payload = {
      username,
      password,
      isAdmin: false,
    };
    const response = await registerFunctions.tryCreateNewUser(payload);
    setLoadingRequest(false);
    navigate('/login');

    console.log(response.data);
    return response.data;
  }

  return {
    username,
    setUsername,
    password,
    setPassword,
    handleRegister,
    loadingRequest,
  };
};