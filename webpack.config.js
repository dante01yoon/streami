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
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
			"Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
		},
		proxy: {
			'/send': {
				target: "https://api.gopax.co.kr",
				changeOrigin: true,
			},
		},
		historyApiFallback: true,
	},
	node: {
		fs: "empty"
	}
};