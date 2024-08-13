import * as styles from "./index.css";

import { locales } from "@src/i18n";
import Logo from "@commonComponents/Logo";
import SelectBox from "@commonComponents/SelectBox";
import { unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";

interface Props {
	locale: string;
}

const Nav = ({ locale }: Props) => {
	unstable_setRequestLocale(locale);
	const t = useTranslations("");
	const localeOptions = locales.map(locale => ({ key: locale, value: locale, label: t(`locale.${locale}`) }));

	return (
		<nav className={styles.navStyle}>
			<Logo />
			<SelectBox
				locale={locale}
				options={localeOptions}
				placeholder={t("locale.placeholder")}
				prevOption={{ key: locale, value: locale, label: t(`locale.${locale}`) }}
			/>
		</nav>
	);
};
export default Nav;
