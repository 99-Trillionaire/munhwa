import { style } from "@vanilla-extract/css";
import { vars } from "@styles/theme.css";
import { boxStyle } from "@app/[locale]/sign-up/signUp.css";

export const btnRedStyle = style({
	// gridArea: "button",
	fontSize: "14px",
	color: "white",
	backgroundColor: vars.color.mainRed,
	border: `1px solid ${vars.color.mainRed}`,
	padding: "0.5rem 1rem",
	borderRadius: 6
});

export const row = style({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	gap: "0.5rem",
	flexWrap: "wrap",
	flexGrow: "1"
});

export const labelStyle = style({
	flexGrow: 1
});

export const inputStyle = style({
	flexGrow: "1",
	fontSize: "14px",
	padding: "0.5rem",
	border: "1px solid #A8A8A8FF",
	borderRadius: 6,
	selectors: {
		[`&:focus`]: {
			outlineColor: "#737373FF"
		}
	}
});

export const messageStyle = style({
	wordBreak: "keep-all",
	whiteSpace: "break-spaces"
});

export const formStyle = style([
	boxStyle,
	{
		width: 450,
		display: "flex",
		flexDirection: "column",
		gap: "0.5rem"
		// justifyContent: "center"
		// gridTemplateAreas: `"label input input button" "empty message message message"`
	}
]);

export const linkStyle = style({
	// todo: link 디자인 + hover + disabled 디자인
	margin: "1rem 0 0",
	fontSize: "1rem",
	color: vars.color.mainRed,
	backgroundColor: "white",
	border: `2px solid ${vars.color.mainRed}`,
	minWidth: 450,
	display: "block",
	textAlign: "center",
	padding: "0.5rem 1rem",
	borderRadius: 6,
	selectors: {
		[`&:hover`]: {}
	}
});
