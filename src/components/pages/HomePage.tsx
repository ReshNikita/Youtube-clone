import { ChangeEvent, FC, useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

import BookmarkIcon from "@mui/icons-material/Bookmark";
import SearchIcon from "@mui/icons-material/Search";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import {
  AppBar,
  Button,
  IconButton,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";

import { Copyright, Loader, Videos } from "..";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addItem } from "../../redux/savedRequestsSlice";
import { fetchYouTubeVideos } from "../../redux/fetchYouTubeVideos";

import styles from "../../styles/homePage.module.less";

const HomePage: FC = () => {
  const LOGO_URL = "https://i.ibb.co/s9Qys2j/logo.png";
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    search: "",
  });

  const { data, loading } = useAppSelector(state => state.youtube);
  const savedRequestsList = useAppSelector(state => state.savedRequests.value);

  if (loading) {
    return <Loader />;
  }

  const isBookmarkIconActive = (_str: string): boolean =>
    (formData.search ? false : true) ||
    savedRequestsList.some(
      item =>
        item.search.trim().toLowerCase() ===
        formData.search.trim().toLowerCase()
    );

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void =>
    setFormData(prevState => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });

  const handleBookmarkIconClick = () => dispatch(addItem(formData.search));

  const handleFormSubmit = (e: FormEvent): void => {
    e.preventDefault();
    dispatch(
      fetchYouTubeVideos({
        search: formData.search,
        results: 12,
        sort: "relevance",
      })
    );
  };

  const handleLogOut = (): void => {
    navigate("/");
    sessionStorage.removeItem("token");
  };

  return (
    <AppBar sx={{ bgcolor: "#000" }} position="static" elevation={1}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-around"
        position="relative"
        top={0}
        p={2}
      >
        <Link to="/home" className={styles.youtubeLogo}>
          <img src={LOGO_URL} alt="logo" height={45} />
          <Typography
            component="h4"
            variant="h4"
            pl={2}
            sx={{
              "@media (max-width: 500px)": {
                fontSize: "20px",
              },
              "@media (max-width: 385px)": {
                fontSize: "17px",
              },
            }}
          >
            YouTube
          </Typography>
        </Link>

        <Link to="/home/saved">
          <Button
            color="error"
            sx={{
              fontSize: "21px",
              textTransform: "none",
              letterSpacing: "2.5px",
              ":hover": {
                textDecoration: "underline",
                textUnderlineOffset: "4px",
              },

              "@media (max-width: 385px)": {
                fontSize: "17px",
              },
            }}
            startIcon={<BookmarkBorderIcon fontSize="large" />}
          >
            Saved
          </Button>
        </Link>

        <Button
          onClick={() => handleLogOut()}
          color="error"
          sx={{
            fontSize: "21px",
            textTransform: "none",
            ":hover": {
              textDecoration: "underline",
              textUnderlineOffset: "4px",
            },
            "@media (max-width: 385px)": {
              fontSize: "16px",
            },
          }}
        >
          Log out
        </Button>
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        alignContent="center"
        spacing={2}
        mt="10px"
        width="100%"
      >
        <form onSubmit={handleFormSubmit} className={styles.searchForm}>
          <TextField
            value={formData.search}
            onChange={handleInputChange}
            autoFocus={true}
            placeholder="Search..."
            variant="standard"
            type="search"
            name="search"
            color="error"
            sx={{
              width: "95%",
              bgcolor: "#fff",
            }}
            InputProps={{
              endAdornment: (
                <>
                  {formData.search && (
                    <Tooltip title="Save a request">
                      <IconButton
                        onClick={handleBookmarkIconClick}
                        aria-label="Bookmark Icon"
                        edge="end"
                        sx={{
                          ":hover": { color: "#ff0000" },
                        }}
                      >
                        {isBookmarkIconActive(formData.search) ? (
                          <BookmarkIcon sx={{ fill: "#ff0000" }} />
                        ) : (
                          <BookmarkIcon />
                        )}
                      </IconButton>
                    </Tooltip>
                  )}

                  <IconButton
                    aria-label="Search Icon"
                    type="submit"
                    sx={{ p: "10px", color: "#ff0000" }}
                  >
                    <SearchIcon />
                  </IconButton>
                </>
              ),
            }}
          />
        </form>
      </Stack>

      {data ? <Videos videos={data} formDataSearch={formData.search} /> : null}

      <Copyright />
    </AppBar>
  );
};
export default HomePage;
