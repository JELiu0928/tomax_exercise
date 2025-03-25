const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	entry: "./src/index.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
        publicPath: "./",  // 這行很重要！確保相對路徑能在 GitHub Pages 正常運行
	},
	module: {
		rules: [
            {
                test: /\.css$/i,  // ✅ 新增 CSS 處理
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
			{
				test: /\.scss$/,
				// 新增 loader (第三步)
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
				generator: {
					filename: "assets/images/[name].[hash][ext]", // 圖片輸出目錄
				},
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "styles.css", // 讓 CSS 變成獨立檔案
		}),
		new HtmlWebpackPlugin({ template: "./src/index.html" }), // 生成 HTML
	],
	devServer: {
		static: "./dist",
		hot: true,
		liveReload: true, // 啟用頁面重載
		watchFiles: ["src/**/*.html"], // 監視所有 HTML 文件變更
        // watchOptions: {
        //     ignored: /node_modules/, // 忽略 node_modules，避免監聽過多檔案
        //     poll: 1000, // 每 1000ms 檢查變更，降低 CPU 負擔
        //   },
	},
	stats: {
		children: true, // 顯示子編譯的詳細信息
	},
};
