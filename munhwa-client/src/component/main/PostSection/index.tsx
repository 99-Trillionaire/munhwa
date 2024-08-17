"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@src/navigation";
import { assignInlineVars } from "@vanilla-extract/dynamic";

import * as styles from "./index.css";

import { CategoryType } from "@type/content";

import TEST_DATA from "@constant/testData";

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

	const onClickCategory = (category: CategoryType) => setSelectedCategory(category);

	return (
		<section className={styles.postContainerStyle}>
			<div className={styles.categoryContainerStyle}>
				{[DEFAULT_CATEGORY, ...categories]?.map(category =>
					category.key === selectedCategory?.key ? (
						<Link href={`/category/${category.key}`} key={category.key} className={styles.categoryStyle}>
							{category.key === DEFAULT_CATEGORY.key
								? t(category.label)
								: t("common.category.name", { value: category.label })}
						</Link>
					) : (
						<button
							key={category.key}
							className={styles.categoryStyle}
							style={assignInlineVars({ [styles.setCategoryColor]: category.color })}
							onClick={() => onClickCategory(category)}
						>
							{category.key === DEFAULT_CATEGORY.key
								? t(category.label)
								: t("common.category.name", { value: category.label })}
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
