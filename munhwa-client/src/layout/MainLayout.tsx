import { ReactNode } from "react";
import * as styles from "./mainLayout.css";
import Nav from "@layout/Nav";

const MainLayout = ({ children,locale }: { children: ReactNode , locale:string}) => {
	return (
		<div className={styles.pageContainerStyle}>
			<Nav locale={locale}/>
			{children}
		</div>
	);
};

export default MainLayout;
