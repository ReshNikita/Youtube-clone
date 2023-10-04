import { FC, FormEvent, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

import {
  AppBar,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Container,
  Typography,
  Box,
  Grid,
  Checkbox,
  FormControlLabel,
  Button,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import YouTubeIcon from "@mui/icons-material/YouTube";

import { Copyright } from "..";

import styles from "../../styles/login.module.less";

const Login: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isPasswordShown, setIsPasswordShown] = useState<boolean>(false);
  const navigate = useNavigate();
  const url = "https://todo-redev.herokuapp.com/api/auth/login";

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    try {
      const { data } = await axios.post(url, {
        email,
        password,
      });

      sessionStorage.setItem("token", data.token);

      navigate("/Youtube-clone/home");
    } catch (error) {
      alert("There is an error. Please, try again!");
    }
  };

  return (
    <Container component="main" maxWidth="xs" className={styles.container}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <YouTubeIcon
            sx={{ m: 1, fontSize: "45px", color: "#ff0000", opacity: 0.9 }}
          />

          <Typography component="h5" variant="h5" color="#000">
            YouTube-clone
          </Typography>
        </Box>

        <Typography component="h4" variant="h4" color="#000">
          Login
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <FormControl variant="outlined" sx={{ m: 1, width: "100%" }}>
            <InputLabel htmlFor="email" required color="error">
              Email
            </InputLabel>
            <Input
              value={email}
              onChange={e => setEmail(e.target.value)}
              id="email"
              type="text"
              required
              autoFocus
              color="error"
            />
          </FormControl>

          <FormControl sx={{ m: 1, width: "100%" }}>
            <InputLabel htmlFor="password" required color="error">
              Password
            </InputLabel>
            <Input
              value={password}
              onChange={e => setPassword(e.target.value)}
              type={isPasswordShown ? "text" : "password"}
              id="password"
              required
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setIsPasswordShown(shown => !shown)}
                  >
                    {isPasswordShown ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              color="error"
            />
          </FormControl>

          <FormControlLabel
            label="Remember me"
            control={<Checkbox value="remember" color="error" />}
            className={styles.formControlLabel}
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 3,
              mb: 2,
              border: "1.5px solid #000",
              borderRadius: "50px",
              bgcolor: " #aa0707",
              " &:hover": {
                bgcolor: "#fd0808",
              },
            }}
          >
            Log in
          </Button>
          <Grid container sx={{ mb: 3, mt: 2 }}>
            <Grid item xs>
              <Link to="#" className={styles.forgotPassword}>
                Forgot password?
              </Link>
            </Grid>

            <Grid item>
              <Link to="/register" className={styles.noAccount}>
                Don't have an account? &nbsp;
              </Link>

              <Link to="/register" className={styles.signUp}>
                Sign Up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <AppBar position="fixed">
        <Copyright />
      </AppBar>
    </Container>
  );
};

export default Login;
