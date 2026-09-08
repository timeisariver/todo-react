const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",

  basePath: isProd ? "/react-todo" : "",
  assetPrefix: isProd ? "/react-todo" : "",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
