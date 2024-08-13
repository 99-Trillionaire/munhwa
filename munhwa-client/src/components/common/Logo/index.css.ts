import { style } from "@vanilla-extract/css";
import { vars } from "@styles/theme.css";

export const logoStyle = style({
	fontSize: "2rem",
	textDecoration: "none",
	color: vars.color.mainIvory,
	textShadow: `-1px 0px ${vars.color.mainRed}, 0px 1px ${vars.color.mainRed}, 1px 0px ${vars.color.mainRed}, 0px -1px ${vars.color.mainRed}`,
	selectors: {
		[`&:active`]: {
			color: vars.color.mainIvory
		},
		["&:hover"]: {
			textShadow: `-1px 0px ${vars.color.darkRed}, 0px 1px ${vars.color.darkRed}, 1px 0px ${vars.color.darkRed}, 0px -1px ${vars.color.darkRed}`
		}
	}
});
