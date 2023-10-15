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
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { LoadingButton } from "@mui/lab";

import { Copyright } from "..";
import { CONSTANTS } from "../../constants";

import styles from "../../styles/login.module.less";

const Login: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isPasswordShown, setIsPasswordShown] = useState<boolean>(false);
  const navigate = useNavigate();

  const [isRequestSent, setIsRequestSent] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsRequestSent(true);

    try {
      const { data } = await axios.post(import.meta.env.VITE_APP_URL, {
        email,
        password,
      });

      sessionStorage.setItem("token", data.token);
      setIsRequestSent(false);
      navigate("/Youtube-clone/home");
    } catch (error) {
      setIsRequestSent(false);
      navigate("/error");
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
            {CONSTANTS.APP_NAME}
          </Typography>
        </Box>

        <Typography component="h4" variant="h4" color="#000">
          {CONSTANTS.LOGIN}
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <FormControl variant="outlined" sx={{ m: 1, width: "100%" }}>
            <InputLabel htmlFor="email" required color="error">
              {CONSTANTS.EMAIL_INPUT_LABEL}
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
              {CONSTANTS.PASSWORD_INPUT_LABEL}
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
                    onClick={() => setIsPasswordShown(!isPasswordShown)}
                  >
                    {isPasswordShown ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              color="error"
            />
          </FormControl>

          <FormControlLabel
            label={CONSTANTS.REMEMBER_ME}
            control={
              <Checkbox
                value={CONSTANTS.CHECBOX_REMEMBER_VALUE}
                color="error"
              />
            }
            className={styles.formControlLabel}
          />

          <LoadingButton
            loading={isRequestSent}
            disabled={isRequestSent}
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
            <span>{CONSTANTS.LOG_IN}</span>
          </LoadingButton>

          <Grid container sx={{ mb: 3, mt: 2 }}>
            <Grid item xs>
              <Link to="#" className={styles.forgotPassword}>
                {CONSTANTS.FORGOT_PASSWORD}
              </Link>
            </Grid>

            <Grid item>
              <Link to="/register" className={styles.noAccount}>
                {CONSTANTS.DONT_HAVE_AN_ACCOUNT} &nbsp;
              </Link>

              <Link to="/register" className={styles.signUp}>
                {CONSTANTS.SIGN_UP}
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
