const MODULE_RESOLVER = ["module-resolver", {
    "root": ["./src"],
    "alias": {
        "@components": "./src/components",
        "@utils": "./src/utils",
        "@pages": "./src/pages",
        "@containers": "./src/containers"
    }
}];

console.log(MODULE_RESOLVER);

module.exports = {
    "presets": ["@babel/preset-env", "@babel/preset-react"],
    "plugins": [
        MODULE_RESOLVER, "@babel/plugin-proposal-class-properties", "@babel/plugin-transform-react-jsx"
    ]
};
