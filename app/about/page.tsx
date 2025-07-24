import css from "./About.module.css";

const AboutPage = () => {
  return (
    <div className="container">
      <div className={css.card}>
        <h1 className={css.title}>About Us</h1>
        <p className={css.text}>
          This project is a simple demonstration of modern web development using
          Next.js, React, and TypeScript.
        </p>
        <p className={css.text}>
          Designed with clarity and usability in mind, it reflects our
          commitment to clean and minimalistic UI.
        </p>
        <p className={css.text}>Developed by Tomas Zingis.</p>
      </div>
    </div>
  );
};

export default AboutPage;
