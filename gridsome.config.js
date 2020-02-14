// This is where project configuration and installed plugin options are located.
// Learn more: https://gridsome.org/docs/config

const settings = require("./data/theme.json");

module.exports = {
  siteName: "Trismegistus Development",
  siteUrl: settings.siteUrl,  
  //pathPrefix: '/portfolio',
  host: "0.0.0.0",
  titleTemplate: "%s",
  htmlAttrs: {
    lang: 'en',
    amp: true,
  },
  siteDescription: "Esoteric development laboratory",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "projects/**/*.md",
        typeName: "ProjectPost",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "journal/**/*.md",
        typeName: "JournalPost",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
      }
    },
    {
      use: 'gridsome-plugin-yandex-metrika',
      options: {
        id: 55415419
      }
    }
  ],
  transformers: {
    remark: {
      plugins: ["@gridsome/remark-prismjs"],
      imageQuality: 100
    }
  }
};
