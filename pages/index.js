import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Navigation from "../components/navigation";
// import Navigation from "@/components/navigation";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <Navigation />
      <div className="mt-5">
        <h1>{t("home.Home title")}</h1>
        <p>{t("home.Home description")}</p>
        <h1>{t("home.Home h1")}</h1>
          <p>{t("home.Home p1")}</p>
          <p>{t("home.Home p2")}</p>
      </div>
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
