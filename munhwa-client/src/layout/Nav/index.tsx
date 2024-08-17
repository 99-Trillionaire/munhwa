"use client";

import { useTranslations } from "next-intl";
// import { unstable_setRequestLocale } from "next-intl/server";

import * as styles from "./index.css";

import { locales } from "@src/i18n";
import Logo from "@commonComponent/Logo";
import SelectBox, { SelectOptionType } from "@commonComponent/SelectBox";
import { usePathname, useRouter } from "@src/navigation";

// import { useCallback } from "react";

interface Props {
	locale: string;
}

const Nav = ({ locale }: Props) => {
	// unstable_setRequestLocale(locale);
	const t = useTranslations("");
	const router = useRouter();
	const pathname = usePathname();
	const localeOptions = locales.map(locale => ({ key: locale, value: locale, label: t(`locale.${locale}`) }));

	const onSelectLocale = (selectedOption: SelectOptionType<string>) =>
		router.replace(pathname, { locale: selectedOption.value });

	return (
		<nav className={styles.navStyle}>
			<Logo />
			<SelectBox
				locale={locale}
				options={localeOptions}
				placeholder={t("locale.placeholder")}
				selectedOption={{ key: locale, value: locale, label: t(`locale.${locale}`) }}
				onSelect={onSelectLocale}
			/>
		</nav>
	);
};
export default Nav;
