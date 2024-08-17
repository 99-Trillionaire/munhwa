"use client";

import { ReactNode, useState } from "react";

import * as styles from "./index.css";
import DownArrowIcon from "@icons/down-chevron.svg";

// TODO: icon 처리
// TODO: dynamic 적용

export interface SelectOptionType<T> {
	key: string;
	value: T;
	label: ReactNode;
}

export interface SelectBoxProps<T> {
	options: SelectOptionType<T>[];
	selectedOption?: SelectOptionType<T>;
	placeholder?: ReactNode;
	disabled?: boolean;
	locale: string; // 서버연동시에 삭제
	onSelect: (selectedOption: SelectOptionType<T>) => void;
}

const SelectBox = <T,>({
	options = [],
	onSelect,
	selectedOption,
	placeholder,
	disabled = false
}: SelectBoxProps<T>) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<div className={`${styles.selectBoxContainerStyle} ${isOpen ? "open" : "close"}`}>
			<button className={styles.valueStyle} onClick={() => setIsOpen(prev => !prev)} disabled={disabled}>
				{placeholder || selectedOption?.label}
				<DownArrowIcon className={styles.valueIconStyle} />
			</button>
			{isOpen && (
				<div className={styles.optionContainerStyle}>
					<div className={styles.scrollAreaStyle}>
						{options.map(option => (
							<button
								key={option.key}
								className={`${selectedOption?.key === option.key ? "selected" : ""} ${styles.optionStyle}`}
								onClick={() => onSelect(option)}
							>
								{option.label}
							</button>
						))}
					</div>
				</div>
			)}
		</div>
	);
};
export default SelectBox;
