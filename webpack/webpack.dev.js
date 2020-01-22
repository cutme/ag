const path = require('path');
const loaders = require('./loaders');
const plugins = require('./plugins');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const webpack = require('webpack');

const minify = {
    collapseWhitespace: true,
    removeComments: true,
    minifyJS: true,
    minifyURLs: true,
    removeEmptyAttributes: true,
    removeScriptTypeAttributes: true,
}



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
    });
  })
};

                    
module.exports = {
    mode: 'development',

    entry: {
        app: "./src/app.js"
    },
    
    devServer: {
        contentBase: './dist',
        hot: true
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "js/[name].bundle.js",
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
        new webpack.ProvidePlugin({
            _: "underscore"
        }),

        plugins.MiniCssExtractPlugin,        
        plugins.css,
        plugins.js,
        plugins.HotModuleReplacementPlugin
    ]),
	
    optimization: {
        namedModules: true, // NamedModulesPlugin()
        /*
splitChunks: { // CommonsChunkPlugin()
            name: 'commons',
            minChunks: 2
        },
        noEmitOnErrors: true, // NoEmitOnErrorsPlugin
        concatenateModules: true //ModuleConcatenationPlugin
*/
    }
};



