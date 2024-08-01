import { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from "react";
import { inputStyle,  } from "@components/FormInput/FormInput.css";
import {  messageStyleVariant } from "@components/InputMessage/index.css";
import { IMessage } from "@components/InputMessage";

interface IProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	label?: string;
	// messageList?: IMessage[];
	// onVerifyMessage?: (value:ChangeEvent<HTMLInputElement>) => IMessage;
	message?: IMessage;
}



const FormInput = ({ label, id, message, ...rest }: IProps) => {
	return (
		<div>
			{label && <label htmlFor={id}>{label}</label>}
			<input {...rest} id={id} className={`${inputStyle}`} />
			{message && <div className={`${messageStyleVariant[message.type]}`}>{message?.text}</div>}
		</div>
	);
};

export default FormInput;
