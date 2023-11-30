import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useTransition } from "react";
import { useTranslation } from "next-i18next";

export default function LocaleSwitcher() {
    const { i18n } = useTranslation();
    const router = useRouter();
    // const { t } = useTranslation();

    const { locales, locale: activeLocale } = router;
    // console.log(locales, "check locals")
    const otherLocales = locales?.filter(
        (locale) => locale !== activeLocale && locale !== "default"
    );
    // console.log("otherLocales", otherLocales)


    return (
        <span className="text-muted cursor-pointer">
            <select className="px-2 text-black"
                // onChange={(e)=> window.open(`/${e.target.value}`,"_self")}

                onChange={(e) =>
                    router.push(
                        {
                            pathname: router.pathname,
                            query: router.query,
                        },
                        null,
                        { locale: e.target.value }
                    )
                }
            >
                {otherLocales?.map((locale) => {
                    // const { pathname, query, asPath } = router;
                    {/* console.log(locale, "(locale") */ }
                    return (
                        <>
                            <option value={locale} key={"locale-" + locale}>{locale}</option>
                        </>
                    );
                })}
            </select>
        </span>
    );
}
