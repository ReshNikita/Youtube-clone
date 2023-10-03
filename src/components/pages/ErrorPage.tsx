import { FC } from "react";
import { Link } from "react-router-dom";

import { Copyright } from "..";

import image from "../../assets/404.jpg";

import styles from "../../styles/errorPage.module.less";

const ErrorPage: FC = () => (
  <main className={styles.imageBlock}>
    <img src={image} alt="Error 404" />

    <Link to="/Youtube-clone/home" className={styles.homePageLink}>
      Back to home page
    </Link>

    <Copyright />
  </main>
);

export default ErrorPage;
