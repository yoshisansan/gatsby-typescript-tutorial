"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.query = void 0;
const react_1 = __importDefault(require("react"));
const gatsby_1 = require("gatsby");
const react_2 = require("@emotion/react");
const typography_1 = require("../utils/typography");
const layout_1 = __importDefault(require("../components/layout"));
function Home({ data }) {
    return (react_1.default.createElement(layout_1.default, null,
        react_1.default.createElement("div", null,
            react_1.default.createElement("h1", { css: react_2.css `
            display: inline-block;
            border-bottom: 1px solid;
          ` }, "Amazing Pandas Eating Things"),
            react_1.default.createElement("h4", null,
                data.allMarkdownRemark.totalCount,
                " Posts"),
            data.allMarkdownRemark.edges.map(({ node }) => (react_1.default.createElement("div", { key: node.id },
                react_1.default.createElement(gatsby_1.Link, { to: node.fields.slug, css: react_2.css `
                text-decoration: none;
                color: inherit;
              ` },
                    react_1.default.createElement("h3", { css: react_2.css `
                margin-bottom: ${typography_1.rhythm(1 / 4)};
              ` },
                        node.frontmatter.title,
                        " ",
                        react_1.default.createElement("span", { css: react_2.css `
                  color: #bbb;
                ` },
                            "\u2014 ",
                            node.frontmatter.date)),
                    react_1.default.createElement("p", null, node.excerpt))))))));
}
exports.default = Home;
exports.query = gatsby_1.graphql `
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
