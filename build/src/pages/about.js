"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.query = void 0;
const react_1 = __importDefault(require("react"));
const gatsby_1 = require("gatsby");
const layout_1 = __importDefault(require("../components/layout"));
function About({ data }) {
    return (react_1.default.createElement(layout_1.default, null,
        react_1.default.createElement("h1", null,
            "About ",
            data.site.siteMetadata.title),
        react_1.default.createElement("p", null, "We're the only site running on your computer dedicated to showing the best photos and videos of pandas eating lots of food.")));
}
exports.default = About;
exports.query = gatsby_1.graphql `
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
