import { FC, FormEvent, ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import {
  AppBar,
  FormLabel,
  IconButton,
  InputAdornment,
  Tooltip,
  FormControl,
  RadioGroup,
  Radio,
  Container,
  Typography,
  Box,
  Grid,
  FormControlLabel,
  TextField,
  Button,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import YouTubeIcon from "@mui/icons-material/YouTube";

import { Copyright } from "..";

import styles from "../../styles/registration.module.less";

const Registration: FC = () => {
  const [age, setAge] = useState<number | string>("");
  const [gender, setGender] = useState<string>("female");
  const [username, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isPasswordShown, setIsPasswordShown] = useState<boolean>(false);

  const url = "https://todo-redev.herokuapp.com/api/users/register";

  const navigate = useNavigate();

  const onChangeGender = (e: ChangeEvent<HTMLInputElement>): void =>
    setGender((e.target as HTMLInputElement).value);

  const onChangeAge = (e: ChangeEvent<HTMLInputElement>): void =>
    setAge(e.target.value === "" ? "" : Number(e.target.value));

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    try {
      const { status } = await axios.post(url, {
        username,
        password,
        email,
        gender,
        age,
      });

      navigate("/Youtube-clone");
      console.log(status);
    } catch (error) {
      alert("There is an error. Please, try again!");
    }
  };

  const handleBlur = (): void => {
    if (+age < 10) setAge(10);
    if (+age > 100) setAge(100);
  };

  return (
    <Container maxWidth="xs" className={styles.container}>
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
            className={styles.youtubeIcon}
            sx={{
              m: 1,
              pr: 1,
              fontSize: "45px",
              color: "#ff0000",
              opacity: 0.9,
            }}
          />
          <Typography component="h5" variant="h5" color="#000">
            YouTube-clone
          </Typography>
        </Box>

        <Typography component="h4" variant="h4" color="#000">
          Registration
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <FormControl sx={{ m: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  value={username}
                  onChange={e => setUserName(e.target.value)}
                  required={true}
                  label="Username"
                  id="username"
                  name="username"
                  autoFocus
                  fullWidth
                  color="error"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required={true}
                  label="Email Address"
                  id="email"
                  name="email"
                  autoComplete="email"
                  fullWidth
                  color="error"
                />
              </Grid>

              <Grid item xs={12}>
                <Tooltip
                  title="Password must be at least 8 characters long, with at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 symbol"
                  id="password"
                  placement="left-start"
                  arrow
                >
                  <TextField
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required={true}
                    type={isPasswordShown ? "text" : "password"}
                    label="Password"
                    id="password"
                    name="password"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => setIsPasswordShown(shown => !shown)}
                          >
                            {isPasswordShown ? (
                              <Visibility />
                            ) : (
                              <VisibilityOff />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    fullWidth
                    color="error"
                  />
                </Tooltip>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  value={age}
                  onChange={onChangeAge}
                  onBlur={handleBlur}
                  required={true}
                  label="Age"
                  id="age"
                  name="age"
                  type="number"
                  inputProps={{
                    inputMode: "numeric",
                    type: "number",
                    pattern: "[0-9]*",
                    min: 10,
                    max: 100,
                    "aria-labelledby": "age",
                  }}
                  fullWidth
                  color="error"
                />
              </Grid>

              <FormLabel
                aria-labelledby="gender"
                required={true}
                sx={{ m: 3 }}
                color="error"
              >
                Gender
              </FormLabel>
              <RadioGroup
                value={gender}
                onChange={onChangeGender}
                name="gender"
                row
              >
                <FormControlLabel
                  label="Female"
                  control={<Radio color="error" />}
                  value="female"
                  sx={{ color: "#000" }}
                />
                <FormControlLabel
                  label="Male"
                  control={<Radio color="error" />}
                  value="male"
                  sx={{ color: "#000" }}
                />
              </RadioGroup>
            </Grid>

            <Button
              type="submit"
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                border: "1.5px solid #000",
                borderRadius: "50px",
                bgcolor: "#aa0707",
                ":hover": {
                  bgcolor: " #fd0808",
                },
              }}
              fullWidth
            >
              Sign Up
            </Button>

            <Grid container justifyContent="center">
              <Grid item>
                <Link to="/Youtube-clone" className={styles.hasAccount}>
                  Already have an account? &nbsp;
                </Link>

                <Link to="/Youtube-clone" className={styles.signIn}>
                  Sign in
                </Link>
              </Grid>
            </Grid>
          </FormControl>
        </Box>
      </Box>

      <AppBar position="fixed">
        <Copyright />
      </AppBar>
    </Container>
  );
};

export default Registration;
