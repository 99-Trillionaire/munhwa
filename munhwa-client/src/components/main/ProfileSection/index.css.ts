import { boxStyle } from "@app/[locale]/sign-up/signUp.css";
import { style } from "@vanilla-extract/css";
import { vars } from "@styles/theme.css";

export const profileSectionStyle = style([
	boxStyle,
	{
		// gridArea: "profile"
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		gap: "1rem"
	}
]);

export const profileImageContainerStyle = style({
	borderRadius: "100%",
	overflow: "hidden",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	// verticalAlign: "middle",
	// textAlign:"center",
	width: 75,
	height: 75,
	border: `3px solid #737373`
});

export const userInfoStyle = style({});

export const profileButtonStyle = style({
	color:"#5C5C5CFF",
	fontSize: 14,
	fontWeight: "lighter",
	backgroundColor: "white",
	padding: "0.5rem 1rem",
	border: `1px solid ${vars.color.mainRed}`,
	borderRadius: 18,
	transition: "0.3s",
	":hover": {
		backgroundColor: vars.color.mainIvory
	}
});
