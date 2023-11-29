import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0 } from "./logo-0238775f.mjs";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "h-screen w-screen flex flex-col text-center justify-center items-center",
    "data-aos": "fade",
    "data-aos-duration": "1000",
    "data-aos-delay": "500"
  }, _attrs))}><h1 class="text-5xl my-20">More Contents Soon!</h1><img${ssrRenderAttr("src", _imports_0)} alt="" class="w-96"></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/NoContents.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const NoContents = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  NoContents as N
};
