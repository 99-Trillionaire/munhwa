import React from "react";
import { signUpStyle } from "./signUp.css";

export default function SignUpLayout({ children }: { children: React.ReactNode }) {
	return <section className={signUpStyle}>{children}</section>;
}
