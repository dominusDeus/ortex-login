const path = require('path');
const Dotenv = require('dotenv-webpack');



module.exports = {
  reactStrictMode: true,
  webpack: config => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    config.plugins.push(new Dotenv({silent:true}));
    return config
  },
  env: {
    ROOT_URI: process.env.NEXT_PUBLIC_ROOT_URI,
    API_URI: process.env.NEXT_PUBLIC_API_URI
  }
}
