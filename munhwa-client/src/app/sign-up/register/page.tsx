import { formStyle, inputStyle, labelStyle, linkStyle, row } from "@app/sign-up/verify/verify.css";
import Form from "@components/Form";
import Link from "next/link";

// TODO: 비밀번호 보이기
// TODO: 필수 내용 표기
// TODO: 비밀번호 확인

export default function Page() {
	return (
		<>
			<h1 className={"title"}>회원 정보 입력</h1>
			<Form className={formStyle}>
				<div className={row}>
					<label htmlFor={"email"} className={labelStyle}>
						이메일
					</label>
					<input className={inputStyle} id={"email"} type={"email"} disabled />
				</div><div className={row}>
					<label htmlFor={"email"} className={labelStyle}>
						닉네임
					</label>
					<input className={inputStyle} id={"email"} type={"email"} disabled />
				</div>
				<div className={row}>
					<label htmlFor={"email"} className={labelStyle}>
						비밀번호
					</label>
					<input className={inputStyle} id={"email"} type={"email"} disabled />
				</div>
				<div className={row}>
					<label htmlFor={"email"} className={labelStyle}>
						비밀번호 확인
					</label>
					<input className={inputStyle} id={"email"} type={"email"} disabled />
				</div>

			</Form>
			<Link href={"/"} className={linkStyle}>
				가입 완료하기
			</Link>
		</>
	);
}
