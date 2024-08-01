// import * as style from "sign"

import { IMessage } from "@components/InputMessage";

const MESSAGES: { [key: string]: IMessage } = {
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
		text: "인증 메일이 발송되었습니다. 메일 보관함을 확인해주세요. 메일이 오지 않았을 경우 스팸메일함을 확인하거나 재발송 버튼을 눌러주세요.",
		type: "info"
	}
};
