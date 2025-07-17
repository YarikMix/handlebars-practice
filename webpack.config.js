import path from "path";
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from "html-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
    target: 'web',
    mode: "development",
    devServer: {
        watchFiles: path.resolve(__dirname, 'public/src'),
        static: path.resolve(__dirname, 'public'),
        port: 3000,
        compress: true,
        hot: true,
        historyApiFallback: true,
    },
    entry: {
        main :path.resolve(__dirname, 'public', 'index.js')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.hbs$/,
                loader: 'handlebars-loader',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
}

export default config;
