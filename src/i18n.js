import Vue from 'vue'
import ElementUI from 'element-ui'
import VueI18n from 'vue-i18n'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

Vue.use(VueI18n)

function loadLocaleMessages () {
    const locales = require.context('./lang', true, /[A-Za-z0-9-_,\s]+\.json$/i)
    let messages = {}
    locales.keys().forEach(key => {
        const matched = key.match(/([A-Za-z0-9-_]+)\./i)
        if (matched && matched.length > 1) {
            const locale = matched[1]
            messages[locale] = locales(key)
        }
    })
    messages={
        en: Object.assign(messages.en, enLocale),
        zh: Object.assign(messages.zh, zhLocale)
    }
    console.log(messages)
    return messages
}

const i18n = new VueI18n({
    locale: process.env.VUE_APP_I18N_LOCALE || 'zh',
    fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'zh',
    messages: loadLocaleMessages()
})

Vue.use(ElementUI, {
    i18n: (key, value) => i18n.t(key, value)
})

export default i18n


