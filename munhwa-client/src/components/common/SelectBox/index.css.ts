import { style } from "@vanilla-extract/css";
import { vars } from "@styles/theme.css";

export const selectBoxContainerStyle = style({
	position: "relative"
});

export const valueStyle = style({
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	gap: "0.5rem",
	wordBreak: "keep-all",
	padding: "0.6rem",
	minWidth: "6rem",
	backgroundColor: "white",
	color: "black",
	// border: `2px solid ${vars.color.mainRed}`,
	border: "none",
	fontSize: "1rem",
	lineHeight: "1rem",
	borderRadius: 6,
	selectors: {
		[`.open &`]: {
			backgroundColor: "#BC2C2C66",
			color: "white"
		},
		[`&:hover`]: {
			backgroundColor: "#BC2C2C99",
			color: "white"
		}
	}
});

export const valueIconStyle = style({
	color: vars.color.mainRed,
	width: "auto",
	height: "1rem",
	transition: "0.3s",
	selectors: {
		[`.open &`]: {
			rotate: "180deg",
			color: "white"
		}
	}
});
export const optionContainerStyle = style({
	position: "absolute",
	margin: "0.2rem 0 0",
	width: "100%",
	overflow: "hidden",
	borderRadius: 6
});

export const scrollAreaStyle = style({
	display: "flex",
	flexDirection: "column",
	overflowY: "auto",
	maxHeight: "5rem"
});

export const optionStyle = style({
	textAlign: "left",
	padding: "0.6rem",
	border: "none",
	selectors: {
		[`&[class*="selected"]`]: {
			backgroundColor: "#BC2C2C99",
			color: "white"
		},
		[`&:hover`]: {
			backgroundColor: "#BC2C2C99",
			color: "white"
		}
	}
});
