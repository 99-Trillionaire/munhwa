import { style, styleVariants } from "@vanilla-extract/css";

const messagePalette = {
	info: "blue",
	success: "green",
	warning: "red"
};

const messageStyle = style({ fontSize:"0.8rem"});

export const messageStyleVariant = styleVariants(messagePalette, messageColor => [
	messageStyle,
	{ color: messageColor }
]);
