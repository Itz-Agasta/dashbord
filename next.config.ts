import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			new URL("https://avatars.githubusercontent.com/u/142140947"),
		],
	},
};

export default nextConfig;
