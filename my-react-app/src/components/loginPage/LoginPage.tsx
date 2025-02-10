import { Box, Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const handleLogin = () => {
    // "email": "john@mail.com",
    //  "password": "changeme"

    const payload = {
      email: username,
      password: password,
    };
    if (!username || !password) {
      setError("Please enter both username and password.");
      return;
    }
    axios
      .post("https://api.escuelajs.co/api/v1/auth/login", payload)
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data.access_token));

        console.log(res.data.access_token);
        navigate("/PageHeading");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        padding: 2,
      }}
    >
      <TextField
        label="Username"
        variant="outlined"
        margin="normal"
        sx={{ width: "300px" }}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <TextField
        label="Password"
        variant="outlined"
        margin="normal"
        type="password"
        sx={{ width: "300px" }}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <Button
        variant="contained"
        sx={{ mt: 2, width: "300px" }}
        onClick={handleLogin}
      >
        LogIn
      </Button>
      <Box>{error}</Box>
    </Box>
  );
};

export default LoginPage;
