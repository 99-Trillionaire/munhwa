import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(':root',{
	color: {
		["mainRed"]: "#BC2C2C",
		["darkRed"]: "#9A0015",
		["mainGreen"]: "#73A526",
		["mainIvory"]: "#faf6ee",
		["test"]: "#737373",
		["test1"]: "#5c5c5c",
	}
});
