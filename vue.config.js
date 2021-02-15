module.exports = {
    pwa: {
        name: "NCN_portfolio",
        themeColor: "#674ada",
        msTileColor: "#674ada",
        manifestPath: "manifest.json",
        workboxPluginMode: "InjectManifest",
        workboxOptions: {
            swSrc: "./src/sw.js"
        },
        iconPaths: {
            favicon32: 'img/icons/32.png',
            favicon16: 'img/icons/16.png',
            appleTouchIcon: 'img/icons/152.png',
            maskIcon: 'img/icons/192.png',
            msTileImage: 'img/icons/144.png'
        }
    },
};