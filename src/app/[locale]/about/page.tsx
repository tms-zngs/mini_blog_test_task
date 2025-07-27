// app/[locale]/about/page.tsx
// Не забудьте импортировать 'routing'
import { routing } from "@/src/i18n/routing"; // Убедитесь, что этот путь верен
import { getTranslations } from "next-intl/server";
import css from "./About.module.css"; // Импортируйте свои стили для About

// Добавьте generateStaticParams, как в Home
export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const AboutPage = async () => {
  // Загружаем переводы напрямую в Server Component
  const t = await getTranslations("AboutPage");

  return (
    <div className="container">
      <div className={css.card}>
        <h1 className={css.title}>{t("title")}</h1>
        <p className={css.text}>{t("paragraph1")}</p>
        <p className={css.text}>{t("paragraph2")}</p>
        <p className={css.text}>{t("paragraph3")}</p>
      </div>
    </div>
  );
};

export default AboutPage;
