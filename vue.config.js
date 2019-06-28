module.exports = {
    lintOnSave: false,
    pluginOptions: {
        i18n: {
            locale: 'zh',
            fallbackLocale: 'en',
            localeDir: 'lang',
            enableInSFC: true
        }
    },
    css:{
        loaderOptions:{
            sass:{
                data:`@import "@/assets/scss/_mixin.scss";`
            }
        }
    },
    devServer:{
        port:999,
    }
}
