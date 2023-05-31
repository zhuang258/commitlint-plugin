module.exports = {
    rules: {
        'custom-rule': (parsed, when) => {
            const { header } = parsed
            return header.includes("Bug") | header.includes("feature")
        }
    },
    load: (config) => {
        config.rules['custom-rule'] = module.exports.rules['custom-rule']
    }
}