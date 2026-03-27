const isProd = process.env.NODE_ENV === "production";

// Only use basePath for GitHub Pages, not for Amplify
const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const basePath = isProd && isGitHubPages ? "/geeky-nextjs" : "";

const nextConfig = {
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
