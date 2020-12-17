"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.query = void 0;
const react_1 = __importDefault(require("react"));
const gatsby_1 = require("gatsby");
const layout_1 = __importDefault(require("../components/layout"));
function MyFiles({ data }) {
    console.log(data);
    return (react_1.default.createElement(layout_1.default, null,
        react_1.default.createElement("div", null,
            react_1.default.createElement("h1", null, "My Site's Files"),
            react_1.default.createElement("table", null,
                react_1.default.createElement("thead", null,
                    react_1.default.createElement("tr", null,
                        react_1.default.createElement("th", null, "relativePath"),
                        react_1.default.createElement("th", null, "prettySize"),
                        react_1.default.createElement("th", null, "extension"),
                        react_1.default.createElement("th", null, "birthTime"))),
                react_1.default.createElement("tbody", null, data.allFile.edges.map(({ node }, index) => (react_1.default.createElement("tr", { key: index },
                    react_1.default.createElement("td", null, node.relativePath),
                    react_1.default.createElement("td", null, node.prettySize),
                    react_1.default.createElement("td", null, node.extension),
                    react_1.default.createElement("td", null, node.birthTime)))))))));
}
exports.default = MyFiles;
exports.query = gatsby_1.graphql `
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`;
