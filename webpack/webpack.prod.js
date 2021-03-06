process.env.NODE_ENV = 'production';
const path = require('path');
const loaders = require('./loaders');
const plugins = require('./plugins');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const HappyPack = require('happypack');
const happyThreadPool = HappyPack.ThreadPool({ size: 5 });
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

console.log(process.env.NODE_ENV);

const templateFileMapper = [

    { template: "./src/actualites.ejs", file: "actualites.html" },
    { template: "./src/contact.ejs", file: "contact.html" },
    { template: "./src/index.ejs", file: "index.html" },
    { template: "./src/canditatures.ejs", file: "canditatures.html" },
    { template: "./src/edito.ejs", file: "edito.html" },
    { template: "./src/equipe.ejs", file: "equipe.html" },
    { template: "./src/groupe.ejs", file: "groupe.html" },
    { template: "./src/inscriptions.ejs", file: "inscriptions.html" },
    { template: "./src/pack.ejs", file: "pack.html" },
    { template: "./src/presse.ejs", file: "presse.html" },
    { template: "./src/service.ejs", file: "service.html" },
    { template: "./src/trouver.ejs", file: "trouver.html" },

]



const htmlPlugins = () => {
  return templateFileMapper.map(entry => {
    return new HtmlWebpackPlugin({
      template: entry.template,
      filename: entry.file,
      minify: {
        removeScriptTypeAttributes: true,
      }
    });
  })
};


module.exports = {
    mode: 'production',
    devtool: 'source-map',
    
    entry: {
        'app.js': [
          path.resolve(__dirname, '../src/app.js')
        ]
    },

    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: "js/[name]",
        publicPath: ''
    },

    module: {
    	rules: [
			loaders.css,
			loaders.scss,
            loaders.fonts,
            loaders.images,
            loaders.js,
            loaders.ejs
        ]
    },
    
    plugins: htmlPlugins().concat([
        new ProgressBarPlugin(),
        
        plugins.MiniCssExtractPlugin,

        createHappyPlugin('scss', ['css-loader?importLoaders:1!postcss-loader?sourceMap:1!sass-loader']),
        
        plugins.js,

    ]),
	
	optimization: {
	    minimizer: [
          new UglifyJsPlugin({
            uglifyOptions: {
              output: {
                comments: false
              }
            }
          })
        ],
	    minimize: false,
        namedModules: true, // NamedModulesPlugin()
        noEmitOnErrors: true, // NoEmitOnErrorsPlugin
        concatenateModules: true //ModuleConcatenationPlugin
    }
};


function createHappyPlugin(id, loaders) {
    return new HappyPack({
        id: id,
        loaders: loaders,
        threadPool: happyThreadPool,
        verbose: false,
    });
}

