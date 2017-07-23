}
rts = {
    entry: './app/index.js'
}

// 2. Which transformations to make on your code.
// LOADERS
    // First install loader required
    // i.e. CoffeScrip into JS, we would load the Coffescript Loeader
    // 'npm install --save-dev coffe-loader'
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

