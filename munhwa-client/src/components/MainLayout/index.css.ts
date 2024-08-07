import { style } from "@vanilla-extract/css";

export const containerStyle = style({});

export const NavStyle = style({
	display: "flex",
	alignItems: "center",
	padding: "0.5rem 1rem",
	borderBottom: "1px solid #BC2C2C",
	selectors: {}
});

export const logoStyle = style({
	flexGrow: "1",
	fontSize: "2rem",
	textDecoration: "none",
	color: "#faf6ee",
	textShadow: "-1px 0px #BC2C2C, 0px 1px #BC2C2C, 1px 0px #BC2C2C, 0px -1px #BC2C2C",

	selectors: {
		[`&:active`]: {
			color: "#faf6ee"
		},
		["&:hover"]: {
			textShadow: "-1px 0px #9A0015, 0px 1px #9A0015, 1px 0px #9A0015, 0px -1px #9A0015"
		}
	}

	// text-shadow: -1px 0px yellow, 0px 1px yellow, 1px 0px yellow, 0px -1px yellow;
});


