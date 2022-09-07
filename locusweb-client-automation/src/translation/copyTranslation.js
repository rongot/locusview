const fs = require('fs');

fs.copyFile('Localization/src/i18n/el.json', 'src/translation/i18n/el.json', (err) => {
    if (err) throw err;
    console.log('el.ts File was copied to destination');
})

fs.copyFile('Localization/src/i18n/en.json', 'src/translation/i18n/en.json', (err) => {
    if (err) throw err;
    console.log('en.ts File was copied to destination');
})