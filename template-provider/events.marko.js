function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      __renderer = __helpers.r,
      ___tags_ssi_renderer_js = __renderer(require("../tags/ssi/renderer")),
      __tag = __helpers.t;

  return function render(data, out) {
    out.w('<!doctype html> <html><head><head><link rel="stylesheet" type="text/css" href="http://ngp-dc.com/groceries/css/extlibs/foundation.css"><link rel="stylesheet" type="text/css" href="http://ngp-dc.com/groceries/css/intlibs/eventslayout.css"><link rel="stylesheet" type="text/css" href="http://ngp-dc.com/groceries/components/Stamp/StampsComponent.css"><link rel="stylesheet" type="text/css" href="http://ngp-dc.com/groceries/components/HeroBanner/HeroBannerComponent.css"><link rel="stylesheet" type="text/css" href="http://ngp-dc.com/groceries/components/Header/HeaderComponent.css"><link rel="stylesheet" type="text/css" href="http://ngp-dc.com/groceries/components/Footer/FooterComponent.css"><meta charset="utf-8"><title>Events Page</title><meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0"></head></head><body><div class="root-level-loader">');
    __tag(out,
      ___tags_ssi_renderer_js,
      {
        "dataComponentUrl": "./components/header",
        "dataContentModel": "http://localhost:3001/api/getheader",
        "isServer": "true"
      },
      function(out) {
      });
    __tag(out,
      ___tags_ssi_renderer_js,
      {
        "dataComponentUrl": "./components/hero_banner",
        "dataContentModel": "http://localhost:3001/api/getherobanner",
        "isServer": "true"
      },
      function(out) {
      });
    __tag(out,
      ___tags_ssi_renderer_js,
      {
        "dataComponentUrl": "./components/stamp",
        "dataContentModel": "http://localhost:3001/api/getsinglestamp",
        "isServer": "true"
      },
      function(out) {
      });
    __tag(out,
      ___tags_ssi_renderer_js,
      {
        "dataComponentUrl": "./components/footer",
        "dataContentModel": "http://localhost:3001/api/getfooter",
        "isServer": "true"
      },
      function(out) {
      });

    out.w('</div></body></html>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);