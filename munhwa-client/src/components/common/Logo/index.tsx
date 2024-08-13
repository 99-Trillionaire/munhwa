import { Link } from "@src/navigation";
import * as styles from "./index.css";

const Logo = () => (
	<Link href={"/"} className={styles.logoStyle}>
		문화기록소 .
	</Link>
);

export default Logo;
