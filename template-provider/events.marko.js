function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      __renderer = __helpers.r,
      ___tags_ssi_renderer_js = __renderer(require("../tags/ssi/renderer")),
      __tag = __helpers.t;

  return function render(data, out) {
    out.w('<div class="root-level-loader">');
    __tag(out,
      ___tags_ssi_renderer_js,
      {
        "dataComponentUrl": "./components/stamp",
        "dataContentModel": "./data/single_stamp.json",
        "isServer": "true"
      },
      function(out) {
      });
    __tag(out,
      ___tags_ssi_renderer_js,
      {
        "dataComponentUrl": "./components/stamp",
        "dataContentModel": "./data/single_stamp.json",
        "isServer": "true"
      },
      function(out) {
      });
    __tag(out,
      ___tags_ssi_renderer_js,
      {
        "dataComponentUrl": "./components/stamp",
        "dataContentModel": "./data/single_stamp.json",
        "isServer": "true"
      },
      function(out) {
      });
    __tag(out,
      ___tags_ssi_renderer_js,
      {
        "dataComponentUrl": "./components/stamp",
        "dataContentModel": "./data/single_stamp.json",
        "isServer": "true"
      },
      function(out) {
      });

    out.w('</div>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);