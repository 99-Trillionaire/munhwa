import * as style from "./page.css";
import Image from "next/image";
import ContentsSection, { ICategory } from "@components/Contents/ContentsSection";
import TestImage from "@public/assets/images/test.png";
import { Link } from "@src/navigation";

const TEST_CATEGORIES:ICategory[] = [
	{ label: "🎥 test", key: "test", icon: TestImage, color: "" },
	{
		label: "🎥 test",
		key: "test1",
		icon: TestImage,
		color: ""
	}
];

export default function MainPage() {
	return (
		<div className={style.mainStyle}>
			<section className={style.profileContainerStyle}>
				<Link href={"/sign-up/verify"} className={style.buttonStyle} locale={"ko"}>
					회원가입
				</Link>
			</section>
			<section className={style.categoryContainerStyle}>
				<button></button>
				{TEST_CATEGORIES.map(({ key, label, icon }) => (
					<Link href={`category/${key}`} key={key} className={style.categoryLinkStyle} locale={"ko"}>
						<Image src={icon} alt={key} width={30} height={30} />
						{label}
					</Link>
				))}
			</section>
			<ContentsSection categories={TEST_CATEGORIES}/>
		</div>
	);
}
