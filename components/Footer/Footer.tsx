import { useTranslations } from "next-intl";
import css from "./Footer.module.css";

const Footer = () => {
  const year = new Date().getFullYear();
  const t = useTranslations("Footer");
  return (
    <footer className={css.footer}>
      <h2>
        © {year} {t("developedBy")}
      </h2>
    </footer>
  );
};

export default Footer;
