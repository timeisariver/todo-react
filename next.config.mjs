const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",

  basePath: isProd ? "/todo-react" : "",
  assetPrefix: isProd ? "/todo-react" : "",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
