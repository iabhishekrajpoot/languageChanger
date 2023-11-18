import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useTransition } from "react";
import { useTranslation } from "next-i18next";

export default function LocaleSwitcher() {
    const { i18n } = useTranslation();
    const router = useRouter();
    // const { t } = useTranslation();

    const { locales, locale: activeLocale } = router;
    console.log(locales, "check locals")
    const otherLocales = locales?.filter(
        (locale) => locale !== activeLocale && locale !== "default"
    );
    console.log("otherLocales",otherLocales)
    return (
        <span className="text-muted cursor-pointer">
            {

                console.log(otherLocales, "check other locals")
            }
            {otherLocales?.map((locale) => {
                // const { pathname, query, asPath } = router;
                console.log(locale,"(locale")
                return (
                    <span key={"locale-" + locale}>
                        <select onChange={(e) =>
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
                            <option value={locale}>{locale}</option>
                            {/* <option value='ar'>Arabic</option>
                            <option value='fr'>French</option>
                            <option value='sp'>Spanish</option>
                            <option value='pt'>Portage</option>
                            <option value='jp'>Japense</option> */}
                        </select>
                    </span>
                );
            })}
           
        </span>
    );
}
