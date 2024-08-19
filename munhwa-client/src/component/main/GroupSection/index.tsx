import dynamic from "next/dynamic";

import * as styles from "./index.css";
import { GroupType } from "@type/group";
// import Group from "@component/main/GroupSection/Group";

const Group = dynamic(() => import("./Group"));

interface Props {
	groups: GroupType[];
}

const GroupSection = ({ groups = [] }: Props) => {
	return (
		<section className={styles.groupContainerStyle}>
			{groups.map((group: GroupType) => (
				<Group key={group.id} {...group} />
			))}
		</section>
	);
};

export default GroupSection;
