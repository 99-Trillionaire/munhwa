/** @type {import("next").NextConfig} */
import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";
import createNextIntlPlugin from 'next-intl/plugin';

const withVanillaExtract = createVanillaExtractPlugin();
const withNextIntl = createNextIntlPlugin();

const nextConfig = {
	reactStrictMode: true,
	output: "standalone",
	images: {
		domains: ["localhost", "*"],
	}
};

export default withVanillaExtract(withNextIntl(nextConfig));
