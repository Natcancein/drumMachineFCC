# Build a Drum Machine

This project was made without [Create React App](https://github.com/facebook/create-react-app).

I used:
- [Webpack 4](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)
- [Styled components](https://www.styled-components.com/)
- [File Loader](https://github.com/webpack-contrib/file-loader)
- [Image Webpack Loader](https://www.npmjs.com/package/image-webpack-loader)
- [Plugin for proposal Class Properties](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties)


[`Also Follow this post`](https://www.valentinog.com/blog/babel/)

## Steps to build the App

 0. Make Folder Structure:
- Project
  - src
     - components
     - styles

 1. **_npm init or npm init -y_** to skip all the questions

 2. **_npm install webpack webpack-cli --save-dev_** to install Webpack and inside package.json
 ```
 "scripts": {
  "build": "webpack --mode production"
}
 ```

 3. **_npm install react react-dom --save_** to install React

 4. **_npm install @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev_** to install babel-core, babel-loader, babel-preset-env, babel-preset-react as a dev dependency.

 * DONT FOTGET **CREATE .babelrc file** inside the project folder. With this:
```
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```
- **preset-env:** is used to transpile the ES6/ES7/ES8 code to ES5.
- **preset-react:** This preset is used to transpile JSX code to ES5.

 5. **Create a webpack.config.js** in root directory

```
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js"
  }
};
```
 7. Install css-loader and style-loader

- **babel-loader:** load JSX/JavaScript files and 
- **css-loader:** load and bundle all of the CSS files into one file
- **style-loader:** will add the styles inside the style tag of the document.

 8. **_npm install css-loader style-loader --save-dev_** install css-loader and style-loader as a dev-dependency.
```
mkdir -p src/js/components/{container,presentational}
```

 9. Create the structure for the React Project. (export default Container)
 
 10. webpack expects the entry point to be ./src/index.js. Create the file and
 ```
import Container from "./js/components/container/Container.jsx";

 ```

 11. **npm run build** and the bundle will create in **_./dist/main.js_**

 12. Install the html-webpack-plugin as a dev-dependency 
**_npm install html-webpack-plugin --save-dev_**
this plugin generates an HTML file==> injects the script inside the HTML file and ==> writes this file to dist/index.html.

 13. Configure the plugin inside the webpack.config.js file with this: 

```
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

```

14. Create an HTML file into ./src/index.html 

15. Finally change Container.jsx file with this at the end (delete export default Container):

```
let container = document.getElementById('root');
let component = <App />;

ReactDOM.render(component, container);
```

16. Run again **npm run build** (open ./dist/index.html in your browser)

17. Install webpack server: **npm i webpack-dev-server --save-dev** Set up Webpack dev server for run **npm start**
```
"scripts": {
  "start": "webpack-dev-server --open --mode development",
  "build": "webpack --mode production"
}
```
**Control + C to stop server**