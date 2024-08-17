import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "@style/theme.css";

export const signUpStyle = style({
	display: "flex",
	flexDirection: "column",
	alignItems: "stretch",
	padding: "2rem 0",
	margin:"0 auto",
	width: 450,
});

globalStyle(`${signUpStyle} .title`, {
	fontSize: "2rem",
	fontStyle: "italic",
	color: vars.color.mainRed,
	marginBottom: "0.5rem"
});

export const boxStyle = style({
	backgroundColor: "white",
	padding: "1.5rem",
	borderRadius: "0.75rem"
});

globalStyle(`${signUpStyle} > a`, {});
