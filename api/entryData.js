let fetch = require('node-fetch');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

let entryData = () => {
    fetch(process.env.GOTELL_SITE_URL).then((resp) => {
        return resp.text()
    }).then(data => {
        const { document } = (new JSDOM(data)).window;

        let created = document.querySelector("#go-tell").dataset.created;

        if (created.length == 0) console.log("No div tag with id gotell found")
        let entryData = {
            created_at: created
        }

        return entryData;
    }).catch(err => console.log(err));
}

module.exports = entryData;