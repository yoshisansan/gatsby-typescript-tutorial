"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.query = void 0;
const react_1 = __importDefault(require("react"));
const gatsby_1 = require("gatsby");
const layout_1 = __importDefault(require("../components/layout"));
const seo_1 = __importDefault(require("../components/seo"));
function BlogPost({ data }) {
    const post = data.markdownRemark;
    return (react_1.default.createElement(layout_1.default, null,
        react_1.default.createElement(seo_1.default, { title: post.frontmatter.title, description: post.excerpt }),
        react_1.default.createElement("div", null,
            react_1.default.createElement("h1", null, post.frontmatter.title),
            react_1.default.createElement("div", { dangerouslySetInnerHTML: { __html: post.html } }))));
}
exports.default = BlogPost;
exports.query = gatsby_1.graphql `
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      excerpt
    }
  }
`;
