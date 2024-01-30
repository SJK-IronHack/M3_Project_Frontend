import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

import { Input } from '@mantine/core';


const AuthForm = ({ isLogin = false }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { saveToken } = useContext(AuthContext);

  const handleUsername = (event) => setUsername(event.target.value);
  const handleEmail = (event) => setEmail(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const reqBody = { username, email, password };

    try {
      const response = await fetch(
        // Do we need to add any url in the .env file ??????

        `${import.meta.env.VITE_API_URL}/auth/${isLogin ? "login" : "signup"}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(reqBody),
        }
      );

      console.log("Response status:", response.status);

      if (response.status === 201) {
        // The user was created successully
        navigate("/login");
      }
      if (response.status === 200) {
        // The user was logged in successully
        const parsed = await response.json();
        console.log(parsed);
        alert("User logged in successfully")
        navigate("/");

        saveToken(parsed.token);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {isLogin ? null : ( // Render the username field only for signup
        <label>
          Username
          <Input
            type="text"
            required
            value={username}
            onChange={handleUsername}
          />
        </label>
      )}
      <label>
        Email
        <Input 
        type="email" 
        required value={email} 
        onChange={handleEmail} />
      </label>
      <label>
        Password
        <Input
          type="password"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <button type="submit">{isLogin ? "Login" : "Signup"}</button>
    </form>
  );
};

export default AuthForm;
