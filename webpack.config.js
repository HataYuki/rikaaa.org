const dotenv = require('dotenv-webpack')

module.exports = {
    mode: 'development',
    entry: './prepare.ts',
    target: 'node',
    plugins: [
        new dotenv({systemvars: true})
    ],
    output: {
        path: `${__dirname}/`,
        filename: "prepare.js"
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: {
                    loader: "ts-loader",
                    options: {
                        transpileOnly: true,
                        configFile: 'webpack.tsconfig.json'
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: [
            '.ts', '.js'
        ]
    }
}