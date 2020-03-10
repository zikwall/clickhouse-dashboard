module.exports =  {
    //do stuff with the webpack config...
    webpack: function(config, env) {
        return {...config, ...{
                module: {
                    rules: [
                        {
                            test: /\.jsx?$/,
                            exclude: /node_modules/,
                            query: {
                                cacheDirectory: true,
                                presets: ['@babel/env', '@babel/react']
                            },
                            loader: "babel-loader"
                        },
                        {
                            test: /\.js$/,
                            exclude: /node_modules/,
                            use: {
                                loader: "babel-loader"
                            },
                        },
                        {
                            test: /\.css$/,
                            use: [ 'style-loader', 'css-loader' ]
                        },
                        {
                            test: /\.(png|svg|jpg|gif|jpeg)$/,
                            use: ["file-loader"]
                        }
                    ]
                }
        }}
    }
};
