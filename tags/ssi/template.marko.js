function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne;

  return function render(data, out) {
    out.w('<div class="generic-tag-loader">hello marko tag..!!</div>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);