import AOS from "aos";
import "../app.mjs";
import "./Home-f5344118.mjs";
import { useSSRContext } from "vue";
import "axios";
import "@inertiajs/vue3";
import "vue/server-renderer";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/vue-fontawesome";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/free-brands-svg-icons";
import "./Header-4516f300.mjs";
import "./logo-0238775f.mjs";
import "./Footer-728a5db0.mjs";
import "./InputLabel-cd393c3d.mjs";
import "./baseurl-7bfc5f79.mjs";
AOS.init({
  startEvent: "load",
  once: "true,"
});
AOS.refresh();
const _sfc_main = {
  __name: "Welcome",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(` NOTHING HERE `);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Welcome.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
