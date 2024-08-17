import { StaticImageData } from "next/image";

// export type ContentType = "movie" | "drama" | "book" | "etc"

export interface CategoryType {
	key: string;
	label: string;
	icon: StaticImageData | string;
	color: string;
}