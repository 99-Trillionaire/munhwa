import { messageStyleVariant } from "@components/InputMessage/index.css";

type MessageType = "info" | "warning" | "success";

export interface IMessage {
	className?: string;
	type: MessageType;
	text: string;
}

// interface IProps {}

const InputMessage = ({ text, type, className }: IMessage) => <div className={`${className} ${messageStyleVariant[type]}`}>{text}</div>;

export default InputMessage;
