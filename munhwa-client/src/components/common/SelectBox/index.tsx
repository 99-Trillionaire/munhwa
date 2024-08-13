"use client";

import { ReactNode, useEffect, useState } from "react";

import * as styles from "./index.css";
import DownArrowIcon from "@public/assets/icons/down-chevron.svg";
import { scrollAreaStyle } from "./index.css";

// import SelectOption, { SelectOptionProp } from "@commonComponents/SelectBox/SelectOption";

export interface SelectOptionProp<T> {
	key: string;
	value: T;
	label: ReactNode;
}

export interface SelectBoxProps<T> {
	options: SelectOptionProp<T>[];
	// selectedOption: SelectOptionProp<T>;
	prevOption?: SelectOptionProp<T>;
	placeholder?: ReactNode;
	disabled?: boolean;
	locale: string; // 서버연동시에 삭제
}

const SelectBox = <T,>({ options = [], prevOption, placeholder, disabled = false }: SelectBoxProps<T>) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [selected, setSelected] = useState<SelectOptionProp<T> | undefined>();

	useEffect(() => {
		if (!!prevOption) {
			setSelected(prevOption);
		}
	}, [prevOption]);

	return (
		<div className={`${styles.selectBoxContainerStyle} ${isOpen ? "open" : "close"}`}>
			<button className={styles.valueStyle} onClick={() => setIsOpen(prev => !prev)}>
				{placeholder || selected?.label}
				<DownArrowIcon className={styles.valueIconStyle} />
			</button>
			{isOpen && (
				<div className={styles.optionContainerStyle}>
					<div className={styles.scrollAreaStyle}>
						{options.map(({ key, label }) => (
							<button key={key} className={`${selected?.key === key ? "selected" : ""} ${styles.optionStyle}`}>
								{label}
							</button>
						))}
					</div>
				</div>
			)}
		</div>
	);
};
export default SelectBox;
