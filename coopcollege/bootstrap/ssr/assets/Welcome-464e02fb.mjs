import AOS from "aos";
import "../app.mjs";
import "./Home-c2aaf405.mjs";
import { useSSRContext } from "vue";
import "axios";
import "swiper";
import "@inertiajs/vue3";
import "vue/server-renderer";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/vue-fontawesome";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/free-brands-svg-icons";
import "./Header-55ad523b.mjs";
import "./logo-0238775f.mjs";
import "./Footer-8dcc6d69.mjs";
import "./InputLabel-cd393c3d.mjs";
import "./baseurl-7f204550.mjs";
import "swiper/vue";
import "swiper/modules";
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
