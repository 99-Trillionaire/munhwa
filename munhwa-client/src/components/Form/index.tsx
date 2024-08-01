import { DetailedHTMLProps, FormHTMLAttributes, PropsWithChildren } from "react";

interface IProps extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {}

const Form = ({ children, ...rest }: IProps) => {
	return <form {...rest}>{children}</form>;
};

export default Form;
