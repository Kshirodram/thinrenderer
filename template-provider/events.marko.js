function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      __renderer = __helpers.r,
      ___tags_ssi_renderer_js = __renderer(require("../tags/ssi/renderer")),
      __tag = __helpers.t;

  return function render(data, out) {
    out.w('<!doctype html> <html><head><head><link rel="stylesheet" type="text/css" href="http://ngp-dc.com/groceries/css/extlibs/foundation.css"><link rel="stylesheet" type="text/css" href="http://ngp-dc.com/groceries/css/intlibs/eventslayout.css"><link rel="stylesheet" type="text/css" href="http://ngp-dc.com/groceries/components/Stamp/StampsComponent.css"><link rel="stylesheet" type="text/css" href="http://ngp-dc.com/groceries/components/HeroBanner/HeroBannerComponent.css"><link rel="stylesheet" type="text/css" href="http://ngp-dc.com/groceries/components/Header/HeaderComponent.css"><link rel="stylesheet" type="text/css" href="http://ngp-dc.com/groceries/components/Footer/FooterComponent.css"><meta charset="utf-8"><title>Events Page</title><meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0"></head></head><body><div class="root-level-loader"><div class="header-area">');
    __tag(out,
      ___tags_ssi_renderer_js,
      {
        "dataComponentUrl": "./components/header",
        "dataComponentName": "header",
        "dataContentModel": "http://localhost:3000/api/getheader",
        "dataRenderPath": "header",
        "isServer": "false"
      },
      function(out) {
      });

    out.w('</div><div class="row banner-area">');
    __tag(out,
      ___tags_ssi_renderer_js,
      {
        "dataComponentUrl": "./components/hero_banner",
        "dataComponentName": "hero_banner",
        "dataContentModel": "http://localhost:3000/api/getherobanner",
        "dataRenderPath": "hero_banner",
        "isServer": "true"
      },
      function(out) {
      });

    out.w('</div><div class="row content-header"><span class="content-header-text">Saving you more</span></div><div class="image-area"><div class="row"><div class="small-6 medium-6  columns">');
    __tag(out,
      ___tags_ssi_renderer_js,
      {
        "dataComponentUrl": "./components/stamp",
        "dataComponentName": "stamp",
        "dataContentModel": "http://localhost:3000/api/getsinglestamp",
        "dataRenderPath": "stamp1",
        "isServer": "false"
      },
      function(out) {
      });

    out.w('</div><div class="small-6 medium-3 columns">');
    __tag(out,
      ___tags_ssi_renderer_js,
      {
        "dataComponentUrl": "./components/stamp",
        "dataComponentName": "stamp",
        "dataContentModel": "http://localhost:3000/api/getsinglestamp",
        "dataRenderPath": "stamp2",
        "isServer": "false"
      },
      function(out) {
      });

    out.w('</div><div class="small-6 medium-3  columns">');
    __tag(out,
      ___tags_ssi_renderer_js,
      {
        "dataComponentUrl": "./components/stamp",
        "dataComponentName": "stamp",
        "dataContentModel": "http://localhost:3000/api/getsinglestamp",
        "dataRenderPath": "stamp3",
        "isServer": "false"
      },
      function(out) {
      });

    out.w('</div><div class="small-6 medium-3  columns">');
    __tag(out,
      ___tags_ssi_renderer_js,
      {
        "dataComponentUrl": "./components/stamp",
        "dataComponentName": "stamp",
        "dataContentModel": "http://localhost:3000/api/getsinglestamp",
        "dataRenderPath": "stamp4",
        "isServer": "false"
      },
      function(out) {
      });

    out.w('</div><div class="small-6 medium-3  columns">');
    __tag(out,
      ___tags_ssi_renderer_js,
      {
        "dataComponentUrl": "./components/stamp",
        "dataComponentName": "stamp",
        "dataContentModel": "http://localhost:3000/api/getsinglestamp",
        "dataRenderPath": "stamp5",
        "isServer": "false"
      },
      function(out) {
      });

    out.w('</div><div class="small-6 medium-6  columns">');
    __tag(out,
      ___tags_ssi_renderer_js,
      {
        "dataComponentUrl": "./components/stamp",
        "dataComponentName": "stamp",
        "dataContentModel": "http://localhost:3000/api/getdoublestamp",
        "dataRenderPath": "stamp6",
        "isServer": "false"
      },
      function(out) {
      });

    out.w('</div></div></div><div class="row content-header"><span class="content-header-text">Discover more</span></div><div class="image-area"><div class="row"><div class="small-6 medium-6  columns">');
    __tag(out,
      ___tags_ssi_renderer_js,
      {
        "dataComponentUrl": "./components/stamp",
        "dataComponentName": "stamp",
        "dataContentModel": "http://localhost:3000/api/getdoublestamp",
        "dataRenderPath": "stamp7",
        "isServer": "false"
      },
      function(out) {
      });

    out.w('</div><div class="small-6 medium-3  columns">');
    __tag(out,
      ___tags_ssi_renderer_js,
      {
        "dataComponentUrl": "./components/stamp",
        "dataComponentName": "stamp",
        "dataContentModel": "http://localhost:3000/api/getsinglestamp",
        "dataRenderPath": "stamp8",
        "isServer": "true"
      },
      function(out) {
      });

    out.w('</div><div class="small-6 medium-3  columns">');
    __tag(out,
      ___tags_ssi_renderer_js,
      {
        "dataComponentUrl": "./components/stamp",
        "dataComponentName": "stamp",
        "dataContentModel": "http://localhost:3000/api/getsinglestamp",
        "dataRenderPath": "stamp9",
        "isServer": "true"
      },
      function(out) {
      });

    out.w('</div></div></div><div class="footer-area">');
    __tag(out,
      ___tags_ssi_renderer_js,
      {
        "dataComponentUrl": "./components/footer",
        "dataComponentName": "footer",
        "dataContentModel": "http://localhost:3000/api/getfooter",
        "dataRenderPath": "footer",
        "isServer": "true"
      },
      function(out) {
      });

    out.w('</div></div><script type="text/javascript" src="main.js"></script></body></html>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);