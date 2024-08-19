import { unstable_setRequestLocale } from "next-intl/server";

import * as style from "./page.css";

import ProfileSection from "@component/main/ProfileSection";
import GroupSection from "@component/main/GroupSection";
import PostSection from "@component/main/PostSection";

import TEST_DATA from "@constant/testData";

export default function MainPage({ params: { locale } }: { params: { locale: string } }) {
	unstable_setRequestLocale(locale);
	return (
		<div className={style.mainStyle}>
			<ProfileSection locale={locale} />
			<GroupSection groups={TEST_DATA.GROUPS} />
			<PostSection categories={TEST_DATA.CATEGORIES} />
		</div>
	);
}
