import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderSlot } from "vue/server-renderer";
import { _ as _imports_0 } from "./logo-0238775f.mjs";
import "./ApplicationLogo-93b063e1.mjs";
import "@inertiajs/vue3";
const GuestLayout_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "GuestLayout",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex xl:flex-row flex-col sm:justify-center items-center xl:pt-6 sm:pt-0 bg-gray-100 justify-center postcontainer" }, _attrs))}><div class="bgtest sm:max-w-md w-screen xl:py-14 py-10 xl:w-96 rounded-l-md" data-aos="fade-left" data-aos-delay="500" data-aos-duration="1000"><div class="flex justify-center items-center max-w-screen"><a href="/"><img${ssrRenderAttr("src", _imports_0)} class="pt-5 h-60"></a></div><div class="text-center text-xl text-white font-semibold pt-5"> CO-OPERATIVE COLLEGE<br><span class="text-xs">OF THE</span> <br>PHILIPPINES </div></div><div class="logtest rounded-md w-full z-50 sm:max-w-md px-6 xl:py-32 py-20 xl:flex flex-col xl:justify-center xl:items-center bg-zinc-50 shadow-2xl overflow-hidden" data-aos="fade-right" data-aos-duration="1000">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/GuestLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
