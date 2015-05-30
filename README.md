# react-native-browser-polyfill
A collection of polyfills for the react-native JavaScript environment.

If polyfills are needed to make browser-targeted libraries, which use commonly available functions/variables, work in react-native, this is the place to put them. Issues/PRs welcome.

## Usage
`npm install react-native-browser-polyfill` the package and then `require('react-native-browser-polyfill')` it in your main entry file, before any libraries which require the polyfills.

## Polyfills available in this package

### `global.self`
Currently JavaScriptCore does not provide a `self` reference to the global object, which is utilized by browser libraries (i.e bluebird) to have a reliably reference to the global object which works in browsers and web-workers alike.
