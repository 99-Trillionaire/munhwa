import Form from "@components/Form";
import { formStyle, inputStyle, labelStyle, linkStyle, row } from "@app/[locale]/sign-up/verify/verify.css";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { Link } from "@src/navigation";

// TODO: 비밀번호 보이기
// TODO: 필수 내용 표기
// TODO: 비밀번호 확인

export default function RegisterPage({ params: { locale } }: { params: { locale: string } }) {
	unstable_setRequestLocale(locale);
	const t = useTranslations("SignUpPage");

	return (
		<>
			<h1 className={"title"}>{t("title.register")}</h1>
			<Form className={formStyle}>
				<div className={row}>
					<label htmlFor={"email"} className={labelStyle}>
						이메일
					</label>
					<input className={inputStyle} id={"email"} type={"email"} disabled />
				</div>
				<div className={row}>
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
