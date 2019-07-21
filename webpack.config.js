const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  stats: {
    children:false
  },
  module: {
    rules: [
         {
              test:/\.css$/,
              use: [
                { loader: "style-loader" },
                { loader: "css-loader" }
              ]
          },
          {
              test: /\.(png|jp(e*)g|svg)$/,  
              use: [{
                  loader: 'file-loader',
                  options: { 
                      limit: 8000, // Convert images < 8kb to base64 strings
                      name: 'images/[hash]-[name].[ext]'
                  } 
              }]
          },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
          
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};