/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: "https", // or http
                hostname: "*", 
                port: "",
              pathname:"/**"
            },
          ],
        },
      
};

export default nextConfig;
