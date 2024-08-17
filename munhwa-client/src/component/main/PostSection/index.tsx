"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@src/navigation";

import * as styles from "./index.css";

import { CategoryType } from "@type/content";

import TEST_DATA from "@constant/testData";
import { assignInlineVars } from "@vanilla-extract/dynamic";

const DEFAULT_CATEGORY: CategoryType = {
	key: "all",
	label: "common.category.all",
	color: "#ffaf9d",
	icon: ""
};

interface Props {
	// selectedCategory?: CategoryType;
	categories?: CategoryType[];
}

const PostSection = ({ categories = [] }: Props) => {
	const t = useTranslations();
	const [selectedCategory, setSelectedCategory] = useState<CategoryType>(DEFAULT_CATEGORY);
	const [posts, setPosts] = useState(TEST_DATA.POSTS);

	// useEffect(() => {
	// 	setContents();
	// },[selectedCategory])

	return (
		<section className={styles.postContainerStyle}>
			<div className={styles.categoryContainerStyle}>
				{[DEFAULT_CATEGORY, ...categories]?.map(({ key, label, color }) =>
					key === selectedCategory?.key ? (
						<Link href={`/category/${key}`} key={key} className={styles.categoryStyle}>
							{key === "all" ? t(label) : t("common.category.name", { value: label })}
						</Link>
					) : (
						<button
							key={key}
							className={styles.categoryStyle}
							style={assignInlineVars({ [styles.setCategoryColor]: color })}
						>
							{key === "all" ? t(label) : t("common.category.name", { value: label })}
						</button>
					)
				)}
			</div>
			<ul className={styles.postsStyle}>
				{posts.map(({ id, content, visibility }) => (
					<li key={id} className={styles.postStyle}>
						<div className={styles.postContentStyle}>{content}</div>
					</li>
				))}
			</ul>
		</section>
	);
};

export default PostSection;
