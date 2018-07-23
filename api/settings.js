let fetch = require('node-fetch');

let lastLoad;
let settingsRefreshTime = 10 * 60000

let fresh = () => {
    return Date.now() - lastLoad < settingsRefreshTime
}

let getSettings = () => {

    fetch(`${process.env.GOTELL_SITE_URL}/gotell/settings.json`).then(resp => {
        return resp.json();
    }).then(data => {
        console.log(data);
        return data;
    }).catch(() => console.log("error getting settings"))

    lastLoad = Date.now();
}

module.exports = {
    fresh,
    getSettings
}