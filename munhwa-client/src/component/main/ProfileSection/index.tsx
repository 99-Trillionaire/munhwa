"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Link } from "@src/navigation";
import * as style from "./index.css";

import ProfileIcon from "@icons/profile-image.png";
import EditIcon from "@icons/edit.svg";

import TEST_IMAGE from "public/assets/images/Grogu.jpeg";
import TEST_DATA from "@constant/testData";


interface Props {
	locale: string;
}

const ProfileSection = ({ locale }: Props) => {
	const t = useTranslations("");
	const [isAuthenticated, setIsAuthenticated] = useState(false); // 로그인 여부 판별

	return (
		<section className={style.profileSectionStyle}>


			{isAuthenticated ? (
				<>
					<Link href={"/setting/account"} className={style.profileEditButtonStyle}><EditIcon/></Link>
					<div className={style.profileImageContainerStyle}>
						<Image src={TEST_IMAGE || ProfileIcon} alt={"img_profile"} width={75} height={75} />
					</div>
					<div className={style.userInfoStyle}>
						{TEST_DATA.USER_INFO.nickname}
						&nbsp;
						{t("common.title.person")}
					</div>
					<button className={style.profileButtonStyle} onClick={() => setIsAuthenticated(false)}>
						{t("mainPage.logout")}
					</button>
				</>
			) : (
				<>
					<div className={style.profileImageContainerStyle}>
						<Image src={ProfileIcon} alt={"img_profile"} width={75} height={75} />
					</div>
					<button className={style.profileButtonStyle} onClick={() => setIsAuthenticated(true)}>
						{t("mainPage.login")}
					</button>
					<Link className={style.profileButtonStyle} href={"/sign-up/register"}>
						{t("mainPage.join")}
					</Link>
				</>
			)}
		</section>
	);
};

export default ProfileSection;
