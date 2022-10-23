const cssLoaders = (loader) => {
    const loaders = ["style-loader", "css-loader"];
  
    if (loader) loaders.push(loader);
  
    return loaders;
  };
  
  const pluginsHelper = () => {};
  
  module.exports = { cssLoaders };
  