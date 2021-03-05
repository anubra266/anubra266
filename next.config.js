var path = require("path");
module.exports = {
  env: {
    githubUrl: "https://github.com/anubra266",
    twitterUrl: "https://twitter.com/anubra266",
    linkedinUrl: "https://linkedin.com/in/anubra266",
    emailAddress: "anubra266@gmail.com",
    myName: "Abraham Anuoluwapo",
  },
  webpack: (config, options) => {
    const custom_alias = {
      "~": path.resolve("./"),
    };
    var aliases = config.resolve.alias;

    aliases = { ...aliases, custom_alias };

    return config;
  },
};
