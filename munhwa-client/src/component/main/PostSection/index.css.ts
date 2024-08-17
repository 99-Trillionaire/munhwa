import { createVar, style } from "@vanilla-extract/css";
import { vars } from "@style/theme.css";

export const postContainerStyle = style({
	// gridArea: "contents"
	gridRow: "1 / 3",
	gridColumn: "2 / 3"
});

export const categoryContainerStyle = style({
	display: "flex",
	alignItems: "center",
	gap: 10
});

export const setCategoryColor = createVar();

export const categoryStyle = style({
	vars: {
		[setCategoryColor]: "#FFFFFF"
	},
	display: "block",
	padding: "0.5rem 0.7rem",
	border: "none",
	borderRadius: "5px 5px 0 0",
	backgroundColor: setCategoryColor,
	fontSize: "1rem",
	lineHeight: "1.2rem"
});

export const postsStyle = style({
	padding: "1rem",
	display: "flex",
	flexDirection: "column",
	gap: "1rem",
	backgroundColor: "#FFFFFF"
});

export const setGroupColor = createVar();

export const postStyle = style({
	vars: {
		[setGroupColor]: vars.color.mainGreen
	},
	display: "flex",
	alignItems: "stretch",
	borderRadius: 8,
	backgroundColor: "#FFFFFF",
	// backgroundColor: "#9f9f9f",
	overflow: "hidden",
	boxShadow: "0 0 10px #9F9F9FFF",
	"::before": {
		content: "",
		display: "inline-block",
		backgroundColor: setGroupColor,
		width: 10,
		// height: "10",
		flex: "0 0 auto"
	}
});

export const postContentStyle = style({
	flexShrink: 1,
	padding: "1rem"
});