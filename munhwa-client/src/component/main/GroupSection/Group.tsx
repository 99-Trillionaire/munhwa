import Image from "next/image";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { Link } from "@src/navigation";

import * as styles from "./index.css";

import { GroupType } from "@type/group";
import GroupIcon from "@icons/people.svg";


interface Props extends GroupType {}

const Group = ({ id, name, color, content_ids, member_ids, group_image_url }: Props) => {
	return (
		<Link href={`/group/${id}`} className={styles.groupStyle}>
			<div className={styles.groupIconStyle} style={assignInlineVars({ [styles.setGroupColor]: color })}>
				{group_image_url ? <Image src={group_image_url} alt={"" + id} width={50} height={50} /> : <GroupIcon />}
			</div>
			<h1 className={styles.groupNameStyle}>{name}</h1>
		</Link>
	);
};

export default Group;
