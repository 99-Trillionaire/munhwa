/** @type {import("next").NextConfig} */
import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";
import createNextIntlPlugin from "next-intl/plugin";

const withVanillaExtract = createVanillaExtractPlugin();
const withNextIntl = createNextIntlPlugin();

const nextConfig = {
	reactStrictMode: true,
	output: "standalone",
	images: {
		domains: ["localhost", "*"]
	},
	webpack: (config) => {
		config.module.rules.push({
			test: /\.svg$/,
			issuer: /\.[jt]sx?$/,
			use: ["@svgr/webpack"]
		});
		return config;
	}
};

export default withVanillaExtract(withNextIntl(nextConfig));
