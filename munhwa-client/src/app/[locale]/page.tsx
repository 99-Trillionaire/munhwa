import Image from "next/image";
import { unstable_setRequestLocale } from "next-intl/server";
import { Link } from "@src/navigation";

import * as style from "./page.css";

import ProfileSection from "@component/main/ProfileSection";
import PostSection from "src/component/main/PostSection";

import TEST_DATA from "@constant/testData";


export default function MainPage({ params: { locale } }: { params: { locale: string } }) {
	unstable_setRequestLocale(locale);
	return (
		<div className={style.mainStyle}>
			<ProfileSection locale={locale} />
			<section className={style.categoryContainerStyle}>
				<button></button>
				{TEST_DATA.CATEGORIES.map(({ key, label, icon }) => (
					<Link href={`/category/${key}`} key={key} className={style.categoryLinkStyle} locale={"ko"}>
						<Image src={icon} alt={key} width={30} height={30} />
						{label}
					</Link>
				))}
			</section>
			<PostSection categories={TEST_DATA.CATEGORIES}/>
		</div>
	);
}
