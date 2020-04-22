const proxy_headers = {
	'X-Forwarded-For': ''
}
const path = require('path'); 
module.exports = {
	mode: 'development', 
  devtool: "source-map",

  resolve: {
		modules: ['./src', "./node_modules"],
    extensions: [".jsx",".js",".ts", ".tsx"]
  },
	
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },
	entry: './src/index.tsx',
	output: {
		filename: 'main.js',
		path: __dirname + '/dist'
	},
	devServer: {
		contentBase: './src',
		compress: true,
		port: 4000,
		hot: true,
		inline: true,
		host: "localhost",
		publicPath: '/dist',
		proxy: {
			'/send/**': {
				target: "https://api.gopax.co.kr",
				pathRewrite: {'^/send' : ''},
				secure: false, 
				changeOrigin: true
			},
		},
		historyApiFallback: true,
	},
	node: {
		fs: "empty"
	}
};