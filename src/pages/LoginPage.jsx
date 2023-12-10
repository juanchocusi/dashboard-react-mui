import { FormControlLabel, FormGroup, Stack, TextField, circularProgressClasses, colors } from "@mui/material";
import React, { useState } from "react";
import { images } from "../assets";
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [onRequest, setOnRequest] = useState(false);
  const [loginProgress, setLoginProgress] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onSignin = (e) => {
    e.preventDefault()
    setOnRequest(true)
    const interval = setInterval(() => {
      setLoginProgress(prev => prev + 100 / 40)
    }, 50);
    setTimeout(() => {
      clearInterval (interval)
    }, 2000);
    setTimeout(() => {
      setIsLoggedIn(true)
    }, 2100);
    setTimeout(() => {
      navigate("/dashboard")
    }, 3300);
  }

  return (
    <Box
      position="relative"
      height="100vh"
      sx={{ "::-webkit-scrollbar": { display: "none" } }}
    >
      {/* background box */}
      <Box
        sx={{
          position: "absolute",
          right: 0,
          height: "100%",
          width: "70%",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${images.loginBg})`,
        }}
      />
      {/* background box */}
      {/* Login Forn */}
      <Box
        sx={{
          position: "relative",
          left: 0,
          height: "100%",
          width: isLoggedIn
            ? "100%"
            : { xl: "30%", lg: "100%", md: "50%", xs: "100%" },
          transition: "all 1s ease-in-out",
          bgcolor: colors.common.white,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            opacity: isLoggedIn ? 0 : 1,
            transition: "all 0.3s ease-in-out",
            height: "100%",
            "::-webkit-scrollbar": { display: "none" }
          }} >
          {/* logo */}
          <Box sx={{ textAlign: "center", p: 5 }}>
            <img src={images.logo} alt='logo' height={60}></img>
          </Box>
          {/* logo */}
          {/* form */}
          <Box sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "::-webkit-scrollbar": { display: "none" }
          }}>
            <Box component="form" maxWidth={400} width="100%" onSubmit={onSignin}>
              <Stack spacing={3}>
                <TextField label="username" fullWidth/>
                <TextField label="password" type="password" fullWidth/>
                <Button type="submit" size="large" variant="contained" color="success">
                  Ingresar
                </Button>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <FormGroup>
                  <FormControlLabel control={<Checkbox defaultChecked />} label="Recordar" />
                  </FormGroup>
                  <Typography color="error" fontWeight="bold">
                    <Link href="#">
                      Olvidaste tu Password?
                    </Link>
                 </Typography>
                </Stack>
              </Stack>
            </Box>
          </Box>
          {/* form */}
          {/* footer */}
          <Box sx={{textAlign:"center", p:5, zIndex:2 }}>
          <Typography display="inline" fontWeight="bold"
          sx={{ "& > a": {color: colors.red[900], ml: "5px" }}}>
            No Tengo cuenta - 
            <Link href="#">
              Regsitrate
            </Link>
          </Typography>
          </Box>
          {/* footer */}
          {/* loading Box */}
          {onRequest &&(
            <Stack alignItems="center" justifyContent="center"
            sx={{
              height:"100%",
              width: "100%",
              position: "absolute",
              top: 0, left: 0,
              bgcolor: colors.common.white,
              zIndex: 100
            }}
            >
              <Box position="relative">
                <CircularProgress
                  variant="determinate"
                  sx={{ color: colors.grey[200]}}
                  size={100}
                  value={100}
                />
                <CircularProgress
                  variant="determinate"
                  disableShrink
                  value={loginProgress}
                  size={100}
                  sx={{
                    [`& .${circularProgressClasses.circle}`]: {
                      strokeLinecap: "round"
                    },
                    position: "absolute",
                    left: 0,
                    color: colors.green[600]
                  }}
                 />
              </Box>
            </Stack>
          )}

        </Box>
      </Box>

      {/* Login Forn */}
    </Box>
  );
};

export default LoginPage;
