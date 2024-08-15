import { style } from "@vanilla-extract/css";
import { boxStyle } from "@app/[locale]/sign-up/signUp.css";

export const mainStyle = style({
	display: "grid",
	gap: "10px",
	// gridTemplateAreas: `"profile contents contents" "category contents contents"`
	gridTemplateColumns: "200px 1fr",
});



export const buttonStyle = style({
	borderRadius: "0.5rem",
	backgroundColor: "white",
	padding: "0.5rem 0.8rem",
	boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.3)",
	//0 30px 60px -20px rgba(0, 0, 0, 0.5)

	selectors:{
		[`&:hover`]:{
			boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
		}
	}
});


// category
export const categoryContainerStyle = style([
	boxStyle,
	{
		gridRow: "2 / 3",
		gridColumn: "1 / 2"
	}
]);

export const categoryLinkStyle = style({});





