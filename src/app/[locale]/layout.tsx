import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";
import Header from "@/components/Header/Header";
import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { routing } from "@/src/i18n/routing";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
  display: "swap",
});

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

const BASE_URL =
  "https://mini-blog-test-task-ko6d9tx0a-tomas-zingis-projects.vercel.app";

export const metadata: Metadata = {
  title: "Mini Blog",
  description:
    "Mini Blog is a simple and efficient application designed for managing personal notes and posts.",
  openGraph: {
    title: "Mini Blog",
    description:
      "Mini Blog is a simple and efficient application designed for managing personal notes and posts.",
    url: BASE_URL,
    siteName: "Mini Blog",
    images: [
      {
        url: `${BASE_URL}/SeoImage.png`,
        width: 1200,
        height: 630,
        alt: "Mini Blog App image",
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

export default async function RootLayout({ children, params }: Props) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  setRequestLocale(locale);

  let messages;
  try {
    messages = await getMessages();
  } catch (error) {
    console.error(`Failed to load messages for locale ${locale}:`, error);

    messages = await (
      await import(
        `../../../messages/${routing.defaultLocale}/${routing.defaultLocale}.json`
      )
    ).default;
  }

  return (
    <html lang={locale}>
      <body className={roboto.variable}>
        <TanStackProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Header currentLocale={locale} />
            <main>{children}</main>
            <Footer />
          </NextIntlClientProvider>
        </TanStackProvider>
      </body>
    </html>
  );
}
