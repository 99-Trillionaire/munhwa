"use client";

import { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import * as style from "./contents.css";

export interface ICategory {
	key: string;
	label: string;
	icon: StaticImageData | string;
	color: string;
}

interface IProps {
	selectedCategory?: ICategory;
	categories?: ICategory[];
}

const DEFAULT_CATEGORY: ICategory = {
	key: "all",
	label: "전체보기",
	color: "#ffaf9d",
	icon: ""
};

const ContentsSection = ({ selectedCategory = DEFAULT_CATEGORY, categories = [] }: IProps) => {
	const [category, setCategory] = useState<ICategory>(selectedCategory);

	useEffect(() => {
		setCategory(selectedCategory);
	}, [selectedCategory]);

	return (
		<section className={style.contentContainerStyle}>
			<div>
				{/*{TEST_CATEGORY.map(({ key, label, icon }) => (*/}
				{/*	<Link href={`category/${key}`} key={key} className={style.categoryLinkStyle}>*/}
				{/*		<Image src={icon} alt={key} width={30} height={30} />*/}
				{/*		{label}*/}
				{/*	</Link>*/}
				{/*))}*/}
			</div>
			<div className={"contentArea"}></div>
		</section>
	);
};
export default ContentsSection;
