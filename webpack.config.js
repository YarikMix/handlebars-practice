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
        main: path.resolve(__dirname, 'public', 'index.ts')
    },
    module: {
        rules: [
            {
                test: /\.m?(js|ts|jsx|tsx)?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-typescript']
                    }
                }
            },
            {
                test: /\.hbs$/,
                loader: 'handlebars-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
}

export default config;
