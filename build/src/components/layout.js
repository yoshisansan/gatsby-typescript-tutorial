"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@emotion/react");
const gatsby_1 = require("gatsby");
const typography_1 = require("../utils/typography");
function Layout({ children }) {
    const data = gatsby_1.useStaticQuery(gatsby_1.graphql `
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
    `);
    return (react_1.default.createElement("div", { css: react_2.css `
        margin: 0 auto;
        max-width: 700px;
        padding: ${typography_1.rhythm(2)};
        padding-top: ${typography_1.rhythm(1.5)};
      ` },
        react_1.default.createElement(gatsby_1.Link, { to: `/` },
            react_1.default.createElement("h3", { css: react_2.css `
            margin-bottom: ${typography_1.rhythm(2)};
            display: inline-block;
            font-style: normal;
          ` }, data.site.siteMetadata.title)),
        react_1.default.createElement(gatsby_1.Link, { to: `/about/`, css: react_2.css `
          float: right;
        ` }, "About"),
        children));
}
exports.default = Layout;
