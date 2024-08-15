import { NextIntlClientProvider } from "next-intl";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import { locales } from "@src/i18n";

import { Noto_Sans_KR } from "next/font/google";

import MainLayout from "@layout/MainLayout";

// const font = Noto_Sans_KR({subsets:["latin"]})

export default async function LocaleLayout({
	children,
	params: { locale }
}: {
	children: React.ReactNode;
	params: { locale: string };
}) {
	// Providing all messages to the client
	// side is the easiest way to get started
	unstable_setRequestLocale(locale);
	const messages = await getMessages();

	return (
		<html lang={locale}>
			{/*<body className={font.className}>*/}
			<body >
				<NextIntlClientProvider messages={messages}>
					<MainLayout locale={locale}>{children}</MainLayout>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}

export function generateStaticParams() {
	return locales.map((locale) => ({locale}));
}