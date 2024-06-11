/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: ["mongoose"],
    },  
    swcMinify: true, // Utilisation de SWC pour la minification
    webpack(config) {
        config.experiments = { 
            ...config.experiments, 
            topLevelAwait: true,
        }
        return config;
    },
    
};

export default nextConfig;
