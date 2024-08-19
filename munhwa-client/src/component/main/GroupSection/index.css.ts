import { createVar, style } from "@vanilla-extract/css";
import { boxStyle } from "@app/[locale]/sign-up/signUp.css";
import { vars } from "@style/theme.css";

export const groupContainerStyle = style([
	boxStyle,
	{
		gridRow: "2 / 3",
		gridColumn: "1 / 2",
		display: "flex",
		flexWrap: "wrap",
		gap: "1rem",
		alignItems: "center",
		justifyContent: "center"
	}
]);

export const setGroupColor = createVar();

export const groupStyle = style({});

export const groupIconStyle = style({
	vars: {
		[setGroupColor]: vars.color.mainIvory
	},
	border: `3px solid ${setGroupColor}`,
	width: 50,
	height: 50,
	borderRadius: "100%",
	boxShadow: "0 0 5px #9F9F9FFF",
	backgroundColor: "white"
});
export const groupNameStyle = style({
	marginTop: "0.5rem"
});
