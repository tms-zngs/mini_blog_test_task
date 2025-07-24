import css from "./Footer.module.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={css.footer}>
      <h2>© {year} Made by Tomas Zingis</h2>
    </footer>
  );
};

export default Footer;
