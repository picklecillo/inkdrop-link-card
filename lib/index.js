"use strict";

var _inkdrop = require("inkdrop");

var _remarkAnchor = _interopRequireDefault(require("./remark-anchor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  origAComponent: null,
  config: {
    autolinks: {
      title: "Create link cards from standard URLs",
      type: "boolean",
      default: true
    }
  },

  activate() {
    if (_inkdrop.markdownRenderer) {
      const OrigA = _inkdrop.markdownRenderer.remarkReactComponents.a;
      const RemarkAnchor = (0, _remarkAnchor.default)(OrigA);
      _inkdrop.markdownRenderer.remarkReactComponents.a = RemarkAnchor;
      this.origAComponent = OrigA;
    }
  },

  deactivate() {
    if (_inkdrop.markdownRenderer) {
      _inkdrop.markdownRenderer.remarkReactComponents.a = this.origAComponent;
    }
  }

};