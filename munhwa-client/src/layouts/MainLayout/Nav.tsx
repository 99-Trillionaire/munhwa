import Link from "next/link";
import {  logoStyle, NavStyle } from "@src/layouts/MainLayout/index.css";


const Nav = () => {
	return (
		<div className={`${NavStyle}`}>
			<Link  href={"/"} className={logoStyle} >
				문화기록소 .
			</Link>

		</div>
	);
};
export default Nav;
