
import { PropsWithChildren } from "react";
import Nav from "@src/layouts/MainLayout/Nav";
import { containerStyle } from "@src/layouts/MainLayout/index.css";

interface IProps extends PropsWithChildren {}

const MainLayout = ({ children }: IProps) => (
	<div className={containerStyle}>
		<Nav />
		{children}
	</div>
);

export default MainLayout;
