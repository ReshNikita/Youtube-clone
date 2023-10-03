import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Button, List, Stack, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { useAppSelector } from "../../redux/hooks";
import { Copyright, Loader, SavedRequest } from "..";

import styles from "../../styles/savedRequestsPage.module.less";

const buttonLogOutTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "21px",
          textTransform: "none",
          ":hover": {
            textDecoration: "underline",
            textUnderlineOffset: "4.5px",
          },
        },
      },
    },
  },
});

const SavedRequestsPage: FC = () => {
  const LOGO_URL = "https://i.ibb.co/s9Qys2j/logo.png";
  const navigate = useNavigate();

  const savedRequestsList = useAppSelector(state => state.savedRequests.value);
  const { loading } = useAppSelector(state => state.youtube);

  if (loading) {
    return <Loader />;
  }

  const searchListItems = savedRequestsList?.map((request, index: number) => (
    <SavedRequest
      savedRequest={request.search}
      newResult={request.results}
      newSort={request.sort}
      key={index}
    />
  ));

  const handleLogOut = (): void => {
    navigate("/Youtube-clone");
    sessionStorage.removeItem("token");
  };

  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-around"
        position="sticky"
        top={0}
        p={2}
        sx={{
          "@media (max-width: 460px)": {
            flexWrap: "wrap",
          },
        }}
      >
        <Link to="/Youtube-clone/home" className={styles.logo}>
          <img src={LOGO_URL} alt="logo" height={45} />

          <Typography
            component="h4"
            variant="h4"
            pl={2}
            pr={1}
            sx={{
              "@media (max-width: 670px)": {
                fontSize: "30px",
              },
              "@media (max-width: 525px)": {
                fontSize: "20px",
              },
            }}
          >
            YouTube
          </Typography>
        </Link>

        <Typography
          component="h3"
          variant="h3"
          sx={{
            "@media (max-width: 670px)": {
              fontSize: "30px",
            },
            "@media (max-width: 525px)": {
              fontSize: "20px",
            },
          }}
        >
          Saved requests
        </Typography>

        <ThemeProvider theme={buttonLogOutTheme}>
          <Button onClick={() => handleLogOut()} color="error">
            Log out
          </Button>
        </ThemeProvider>
      </Stack>

      <List sx={{ ml: "12px" }}>
        {searchListItems?.length ? (
          searchListItems
        ) : (
          <Typography
            component="h4"
            variant="h4"
            mt={35}
            fontStyle="italic"
            textAlign="center"
            letterSpacing={2}
            sx={{
              transition: "0.8s",
              ":hover": {
                textDecoration: "underline #ff0000",
                textUnderlineOffset: "8px",
              },
            }}
          >
            <Link to="/Youtube-clone/home">Add your first request</Link>
          </Typography>
        )}
      </List>
      <Copyright />
    </>
  );
};
export default SavedRequestsPage;
