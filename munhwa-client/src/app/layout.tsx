import { Metadata } from "next";
import "@styles/reset.css";
import "@styles/theme.css";
import "@styles/globalStyle.css";
import type { AppProps } from "next/app";
import MainLayout from "src/layouts/MainLayout";

export const metadata: Metadata = {
	title: "Home",
	description: "Welcome to Next.js"
};

export default function RootLayout({
	// Layouts must accept a children prop.
	// This will be populated with nested layouts or pages
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ko">
			<body>
				<MainLayout>{children}</MainLayout>
			</body>
		</html>
	);
}
