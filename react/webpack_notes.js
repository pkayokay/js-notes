
// WHY WEBPACK
// Code bundlers, transforms code, bundles it, and returns a new version of your code
// webpack.config.js file


// 1. Starting point of the application, the root JS file
// ENTRY
    // Property of 'entry' with a value
    // Points to the root JS file in the application

module.exports = {
    entry: './app/index.js'
}

// 2. Which transformations to make on your code.
// LOADERS
    // First install loader required
    // i.e. CoffeScrip into JS, we would load the Coffescript Loeader
        // 'npm install --save-dev coffee-loader'
    // which saves the coffee leader as a dev dependency in your package.json file.
    // noww we must configure webpack.config.js to be aware of this transform
    // add the module property, with a property of rules
    // fill with file type and loader to use

module.exports = {
    entry: './app/index.js',
    module: {
        rules: [
            { test: /\.coffee$/, use: "coffee-loader" }
        ]
    }
}

// 3. It needs to know where to save this new transformed code.
    // creates a file and places new file in directory.
    // _dirname refers to the name of the currently executing script resides in


module.exports = {
    entry: './app/index.js',
    module: {
        rules: [
            { test: /\.coffee$/, use: "coffee-loader" }
        ]
    },
    output: {
        path: path.resolve(_dirname, 'dist'),
        filename: 'index_bundle.js'
    }
}

// WEBPACK runs, code transforms then can be referenced in the path
// Now we need way for our HTMl to reference this file.

/app
  - components
  - utils
  index.js
  index.html
/dist
  index.html
  index_bundle.js
package.json
webpack.config.js
.gitignore

// common folder structure, what we're developing is found in the app folder
// our transformed code is in the dist folder
// We also need a way to output the html file in the /app folder
// Right now it will use the html file in the dist folder (where we toldl webpack to spit out the JS file)

// Option #1
// Manually copy/paste the file unto the /dist folder.
// Option #2
// Figure out a way that when webpack runs, our /app/index.html gets copied over to /dist/index.html

// There's a way!
// html-webpack-plugin
// npm install --save-dev html-webpack-plugin

module.exports = {
  entry: './app/index.js',
  module: {
    rules: [
      { test: /\.coffee$/, use: "coffee-loader" }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: 'app/index.html'
    })
  ]
}

// if we run webpack from the command line, we will now have two files on the /dist folder
// the .js and .html file.
// the index_bundle.js is the result of taking our entry code and running it rhough our loaders
// the index.html was created on the gly with the HTMLWebpackPluginConfig
// and is a copy of the original index.html in the /app folder, with a script tag referencing index_bundle.js


// newly created index.html file in /dist
// with script tag
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My App</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div id="app"></div>
  <script src="index_bundle.js"></script> // This line of code is added after HTML WebpackPlugin creates it
</body>
</html>

// HTMLWebpackConfig detects the output filename of the newly created file from Webpack(index_bundle.js)
// and automatically adds that as a script in the new index.html file!

// So how do we run webpack?
// Install it 'npm install webpack --save'
// 'webpack' or write a script "build": "webpack" so just do 'npm run build'

// Instead of running this command over and over, we can run 'webpack -w'. (so "build": "webpack -p")
// This will watch the files and re-execute webpack whenever any of the files Webpack is concerned about changes.

// For production, we can run 'webpack -p' that will run through transformations as well as minify the code.


