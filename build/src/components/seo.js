"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const react_helmet_1 = require("react-helmet");
const gatsby_1 = require("gatsby");
function SEO({ description, lang, meta, title }) {
    const { site } = gatsby_1.useStaticQuery(gatsby_1.graphql `
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `);
    const metaDescription = description || site.siteMetadata.description;
    return (react_1.default.createElement(react_helmet_1.Helmet, { htmlAttributes: {
            lang,
        }, title: title, titleTemplate: `%s | ${site.siteMetadata.title}`, meta: [
            {
                name: `description`,
                content: metaDescription,
            },
            {
                property: `og:title`,
                content: title,
            },
            {
                property: `og:description`,
                content: metaDescription,
            },
            {
                property: `og:type`,
                content: `website`,
            },
            {
                name: `twitter:card`,
                content: `summary`,
            },
            {
                name: `twitter:creator`,
                content: site.siteMetadata.author,
            },
            {
                name: `twitter:title`,
                content: title,
            },
            {
                name: `twitter:description`,
                content: metaDescription,
            },
        ].concat(meta) }));
}
SEO.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
};
SEO.propTypes = {
    description: prop_types_1.default.string,
    lang: prop_types_1.default.string,
    meta: prop_types_1.default.arrayOf(prop_types_1.default.object),
    title: prop_types_1.default.string.isRequired,
};
exports.default = SEO;
