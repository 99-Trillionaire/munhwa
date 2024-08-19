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
		// config.module.rules.push({
		// 	test: /\.svg$/,
		// 	issuer: /\.[jt]sx?$/,
		// 	use: ["@svgr/webpack"]
		// });
		// return config;
		// Grab the existing rule that handles SVG imports
		const fileLoaderRule = config.module.rules.find((rule) =>
			rule.test?.test?.('.svg'),
		)

		config.module.rules.push(
			// Reapply the existing rule, but only for svg imports ending in ?url
			{
				...fileLoaderRule,
				test: /\.svg$/i,
				resourceQuery: /url/, // *.svg?url
			},
			// Convert all other *.svg imports to React components
			{
				test: /\.svg$/i,
				issuer: fileLoaderRule.issuer,
				resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
				use: ['@svgr/webpack'],
			},
		)

		// Modify the file loader rule to ignore *.svg, since we have it handled now.
		fileLoaderRule.exclude = /\.svg$/i

		return config
	}
};

export default withVanillaExtract(withNextIntl(nextConfig));
