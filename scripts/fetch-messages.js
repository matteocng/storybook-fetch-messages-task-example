// @flow
const fetch = require("isomorphic-fetch");
const path = require("path");
const fs = require("fs");

// The path where we will store the `.json` i18n messages files.
const messagesPath = path.resolve(__dirname, "../static");
// Insert your i18n messages API url here.
const messagesApiUrl = "https://dog.ceo/api/breeds/list/all";

const i18nDataMock = {
  "en-GB": {
    "app.demo": "This is just a demo",
    "app.demo.two": "This is just another demo"
  },
  "it-IT": {
    "app.demo": "Questo è solo un demo",
    "app.demo.two": "Questo è solo un altro demo"
  }
};

const mapLocaleCodeToFileName = localeCode => {
  return path.join(messagesPath, path.sep, localeCode + ".json");
};

console.log("Fetch messages service started...");
console.log("Messages files path is:", messagesPath);

fetch(messagesApiUrl)
  .then(res => res.json())
  .then((/* apiData */) => {
    // Remove this line and uncomment `apiData` above.
    const apiData = i18nDataMock;
    let nLocalesSaved = 0;

    Object.keys(apiData).map(localeCode => {
      const localeObject = apiData[localeCode];
      //Remove `null` and `2` to produce a minified JSON.
      const jsonLocaleObject = JSON.stringify(localeObject, null, 2);
      const fileName = mapLocaleCodeToFileName(localeCode);

      try {
        fs.writeFileSync(fileName, jsonLocaleObject, "utf-8");
        nLocalesSaved++;
        console.log("Saved messages file:", localeCode + ".");
      } catch (err) {
        console.error("Fatal error writing file:", err);
      }
    });

    console.log(
      "All messages have been written to disk. Locale count: " +
        nLocalesSaved +
        "."
    );
  })
  .catch(err => console.error("Fatal error:", err));
