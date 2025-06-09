const path = require('path');

module.exports = {
  mode: 'development', // Set the mode to development or production
  entry: './src/index.js', // Your main JS file (update if needed)
  output: {
    filename: 'bundle.js', // The output file name
    path: path.resolve(__dirname, 'dist'), // Output directory
    publicPath: '/', // Base path for the assets
  },
  resolve: {
    fallback: {
      // Polyfills for Node.js core modules
      "fs": false, // Not needed in browser environment
      "stream": require.resolve("stream-browserify"),
      "crypto": require.resolve("crypto-browserify"),
      "assert": require.resolve("assert/"),
      "http": require.resolve("stream-http"),
      "https": require.resolve("https-browserify"),
      "os": require.resolve("os-browserify/browser"),
      "buffer": require.resolve("buffer/"),
      "zlib": require.resolve("browserify-zlib"),
      "tty": require.resolve("tty-browserify"),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Apply Babel loader for JS/JSX files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Add presets for React and ES6+
          },
        },
      },
      {
        test: /\.css$/, // Load CSS files
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    historyApiFallback: true, // Allows for client-side routing
    static: {
      directory: path.join(__dirname, 'dist'), // Directory to serve static files from
    },
    port: 3000, // Change port if needed
  },
};
