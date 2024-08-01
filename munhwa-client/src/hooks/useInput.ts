import { ChangeEvent, useCallback, useState } from "react";

// const useInput = <T,>(initialValue: T) => {

const useInput = (initialValue: any, onValidate?: (value: any) => void) => {
	const [value, setValue] = useState<any>(initialValue);

	const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		const newValue = e.target.value;
		setValue(newValue);
		onValidate && onValidate(newValue);
	}, [onValidate]);

	return [value, onChange, setValue];
};

export default useInput;
