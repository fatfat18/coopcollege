import { ssrRenderComponent } from "vue/server-renderer";
import "@inertiajs/vue3";
import AOS from "aos";
import "../app.mjs";
import { _ as _sfc_main$1, a as _sfc_main$2 } from "./Header-4516f300.mjs";
import { N as NoContents } from "./NoContents-26081d90.mjs";
import { _ as _sfc_main$3 } from "./Footer-728a5db0.mjs";
import { useSSRContext } from "vue";
import "axios";
import "./logo-0238775f.mjs";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/vue-fontawesome";
import "@fortawesome/free-solid-svg-icons";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "@fortawesome/free-brands-svg-icons";
import "./InputLabel-cd393c3d.mjs";
import "./baseurl-7bfc5f79.mjs";
AOS.init({
  dataAosDuration: "2000"
});
AOS.refresh();
const _sfc_main = {
  __name: "Resources",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`<div class="h-screen w-screen flex justify-center items-center">`);
      _push(ssrRenderComponent(NoContents, null, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/ViewersPage/Resources.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
