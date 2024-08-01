import Link from "next/link";
import { buttonStyle, logoStyle, NavStyle } from "@src/layouts/MainLayout/index.css";


const Nav = () => {
	return (
		<div className={`${NavStyle}`}>
			<Link  href={"/"} className={logoStyle} >
				문화기록소 .
			</Link>
			<Link href={"/sign-up/verify"} className={buttonStyle}>회원가입</Link>
		</div>
	);
};
export default Nav;
