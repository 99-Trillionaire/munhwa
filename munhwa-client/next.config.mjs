/** @type {import("next").NextConfig} */
import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {
	reactStrictMode: true,
	output: "standalone"
};

export default withVanillaExtract(nextConfig);
