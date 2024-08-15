import * as style from "./page.css";
import Image from "next/image";
import ContentsSection, { ICategory } from "@components/Contents/ContentsSection";
import TestImage from "@public/assets/images/test.png";
import { Link } from "@src/navigation";
import ProfileSection from "@components/main/ProfileSection";
import { unstable_setRequestLocale } from "next-intl/server";

const TEST_CATEGORIES: ICategory[] = [
	{ label: "🎥 test", key: "test", icon: TestImage, color: "" },
	{
		label: "🎥 test",
		key: "test1",
		icon: TestImage,
		color: ""
	}
];

export default function MainPage({ params: { locale } }: { params: { locale: string } }) {
	unstable_setRequestLocale(locale);
	return (
		<div className={style.mainStyle}>
			<ProfileSection locale={locale} />
			<section className={style.categoryContainerStyle}>
				<button></button>
				{TEST_CATEGORIES.map(({ key, label, icon }) => (
					<Link href={`/category/${key}`} key={key} className={style.categoryLinkStyle} locale={"ko"}>
						<Image src={icon} alt={key} width={30} height={30} />
						{label}
					</Link>
				))}
			</section>
			<ContentsSection categories={TEST_CATEGORIES} />
		</div>
	);
}
