"use client";

import Form from "@components/Form";
import InputMessage, { IMessage } from "@commonComponents/InputMessage";
import useInput from "@hooks/useInput";
import { FormEvent, useEffect, useState } from "react";
import { EMAIL_REG } from "@src/constants/reg";
import {
	btnRedStyle,
	formStyle,
	inputStyle,
	labelStyle,
	linkStyle,
	messageStyle,
	row
} from "./verify.css";
import { Link } from "@src/navigation";

export default function VerifyPage() {
	const [step, setStep] = useState<"init" | "wait" | "complete">("init");

	useEffect(() => {
		if (step === "wait") {
			// 인증 확인 api 발송하기 반복적으로
		}
	}, [step]);

	const messages: { [key: string]: IMessage } = {
		duplicated: {
			text: "중복된 이메일 입니다.",
			type: "warning"
		},
		invalid: {
			text: "올바른 이메일 형식이 아닙니다.",
			type: "warning"
		},
		verify: { text: "인증이 완료되었습니다.", type: "success" },
		sendComplete: {
			text: "* 인증 메일이 발송되었습니다. 메일 보관함을 확인해주세요.\n* 메일이 오지 않았을 경우 스팸메일함을 확인하거나 재발송 버튼을 눌러주세요.",
			type: "info"
		}
	};

	const [message, setMessage] = useState<IMessage>();

	const onValidateEmail = (value: string) =>
		EMAIL_REG.test(value) || value === "" ? setMessage(undefined) : setMessage(messages.invalid);

	const [email, onChangeEmail] = useInput("", onValidateEmail);

	const onClickSendEmail = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!!email && !message) {
			setStep("wait");
			setMessage(messages.sendComplete);
		}
		if (email === "test") {
			setStep("complete");
		}
	};

	return (
		<>
			<h1 className={"title"}>이메일 인증</h1>
			<Form onSubmit={onClickSendEmail} className={formStyle}>
				<label htmlFor={"email"} className={labelStyle}>
					이메일
				</label>
				<div className={row}>
					<input
						className={inputStyle}
						id={"email"}
						type={"email"}
						required={true}
						placeholder={"아이디로 사용될 이메일을 입력해주세요."}
						value={email}
						onChange={onChangeEmail}
					/>
					<button type={"submit"} disabled={step === "complete"} className={btnRedStyle}>
						{step === "init" ? "인증 메일 발송" : "재발송"}
					</button>
				</div>
				{!!message && <InputMessage className={messageStyle} {...message} />}
			</Form>

			{/*<button type={"button"}>이전 화면으로</button>*/}
			<Link href={"/sign-up/register"} aria-disabled={step === "complete"} className={linkStyle}>
				다음으로
			</Link>
		</>
	);
}
