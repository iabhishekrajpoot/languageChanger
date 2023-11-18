const path = require("path");

module.exports = {
  i18n: {
    locales: ["default", "en", "ar", "sp", "fr", "pt", "jp", "ch", "in"],
    defaultLocale: "default",
    localeDetection: false,
    localePath: path.resolve("./public/locales"),
  },
};