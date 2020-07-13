module.exports = {
  webpack: (config) => {
    config.node = {
      fs: 'empty'
    }

    config.module.rules.push(
      {
        test: /\.ya?ml$/,
        use: 'js-yaml-loader',
      },
    )
    
    return config
  }
};
