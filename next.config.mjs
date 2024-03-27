/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
},


  env: {
    MYSQL_HOST: "127.0.0.1",
    MYSQL_DATABASE: "carhub",
    MYSQL_USER: "root",
    MYSQL_PASSWORD: "Webfarm2024",
    MYSQL_PORT: "3306",
  },
};

export default nextConfig;
