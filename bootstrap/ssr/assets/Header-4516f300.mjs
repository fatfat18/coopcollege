import { computed, unref, mergeProps, withCtx, renderSlot, useSSRContext, ref, createTextVNode } from "vue";
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrRenderClass, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0 } from "./logo-0238775f.mjs";
import { Link } from "@inertiajs/vue3";
import AOS from "aos";
import "../app.mjs";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faPhoneFlip } from "@fortawesome/free-solid-svg-icons";
const _sfc_main$3 = {
  __name: "NavLink",
  __ssrInlineRender: true,
  props: ["href", "active"],
  setup(__props) {
    const props = __props;
    const classes = computed(
      () => props.active ? "inline-flex items-center px-8 pt-1 tracking-widest border-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]  border-b-4 border-theme1 rounded-md mb-2 font-medium leading-5 text-theme1 transition duration-350 ease-in-out" : "inline-flex items-center px-8 pt-1 border-b-2 border-transparent  font-medium leading-5  hover:text-theme1 hover:border-theme1 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Link), mergeProps({
        href: __props.href,
        class: unref(classes)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/NavLink.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "ResponsiveNavLink",
  __ssrInlineRender: true,
  props: ["href", "active"],
  setup(__props) {
    const props = __props;
    const classes = computed(
      () => props.active ? "block w-full pl-3 pr-4 py-2 border-l-4 border-theme1 text-center text-base font-medium text-theme1 bg-theme2 focus:outline-none focus:text-theme1 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out" : "block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-center text-base font-medium text-theme1 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Link), mergeProps({
        href: __props.href,
        class: unref(classes)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ResponsiveNavLink.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ResponsiveNavBar_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = {
  __name: "ResponsiveNavBar",
  __ssrInlineRender: true,
  setup(__props) {
    const showingNavigationDropdown = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white w-screen overflow-x-hidden" }, _attrs))}><nav class="w-screen border-gray-100 trans"><div class="flex xl:justify-center justify-end xl:pt-2"><div class="flex w-max justify-center h-14 xl:h-16"><div class="flex"><div class="hidden text-theme1 space-x-1 text-md sm:flex trans">`);
      _push(ssrRenderComponent(_sfc_main$3, {
        href: _ctx.route("Home"),
        active: _ctx.route().current("Home")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Home `);
          } else {
            return [
              createTextVNode(" Home ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        href: _ctx.route("News"),
        active: _ctx.route().current("News")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` News `);
          } else {
            return [
              createTextVNode(" News ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        href: _ctx.route("AboutUs"),
        active: _ctx.route().current("AboutUs")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` About Us `);
          } else {
            return [
              createTextVNode(" About Us ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        href: _ctx.route("LearnWithUs"),
        active: _ctx.route().current("LearnWithUs")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Learn With Us `);
          } else {
            return [
              createTextVNode(" Learn With Us ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        href: _ctx.route("Resources"),
        active: _ctx.route().current("Resources")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Resources `);
          } else {
            return [
              createTextVNode(" Resources ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        href: _ctx.route("Projects"),
        active: _ctx.route().current("Projects")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Projects `);
          } else {
            return [
              createTextVNode(" Projects ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="flex items-center sm:hidden trans"><button class="trans inline-flex items-center justify-center p-2 rounded-md text-theme1 bg-zinc-200 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-300 focus:text-theme1 transition duration-500 ease-in-out"><svg class="h-6 w-8" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path class="${ssrRenderClass({
        hidden: showingNavigationDropdown.value,
        "inline-flex": !showingNavigationDropdown.value
      })}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path><path class="${ssrRenderClass({
        hidden: !showingNavigationDropdown.value,
        "inline-flex": showingNavigationDropdown.value
      })}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div></div></div><div class="${ssrRenderClass([{ block: showingNavigationDropdown.value, hidden: !showingNavigationDropdown.value }, "sm:hidden"])}"><div class="pt-2 pb-3 space-y-1 transition duration-500">`);
      _push(ssrRenderComponent(_sfc_main$2, {
        href: _ctx.route("Home"),
        active: _ctx.route().current("Home")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Home `);
          } else {
            return [
              createTextVNode(" Home ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        href: _ctx.route("News"),
        active: _ctx.route().current("News")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` News `);
          } else {
            return [
              createTextVNode(" News ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        href: _ctx.route("AboutUs"),
        active: _ctx.route().current("AboutUs")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` About Us `);
          } else {
            return [
              createTextVNode(" About Us ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        href: _ctx.route("LearnWithUs"),
        active: _ctx.route().current("LearnWithUs")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Learn With Us `);
          } else {
            return [
              createTextVNode(" Learn With Us ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        href: _ctx.route("Resources"),
        active: _ctx.route().current("Resources")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Resources `);
          } else {
            return [
              createTextVNode(" Resources ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        href: _ctx.route("Projects"),
        active: _ctx.route().current("Projects")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Projects `);
          } else {
            return [
              createTextVNode(" Projects ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></nav></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ResponsiveNavBar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Header_vue_vue_type_style_index_0_lang = "";
AOS.init({
  startEvent: "load",
  once: "true,"
});
AOS.refresh();
const _sfc_main = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    library.add(faPhoneFlip);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "welcome",
        class: "xl:h-60 h-28 bg-theme1 w-screen text-white md:text-sm flex xl:flex-row justify-center items-center py-20 overflow-y-hidden welcome"
      }, _attrs))}><div class="flex xl:justify-center xl:items-center md:items-start md:justify-center"><a href="/"><img${ssrRenderAttr("src", _imports_0)} class="mx-2 xl:h-32 h-20 xl:mr-8 md:mr-4 min-w-fit shadow-2xl" data-aos="fade-right" data-aos-delay="300" data-aos-duration="800"></a> <p class="pt-2 overflow-y-hidden xl:text-3xl tracking-wider pl-2 xl:pl-0 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]" data-aos="fade-right" data-aos-delay="100" data-aos-duration="500">CO-OPERATIVE COLLEGE <br><span class="xl:text-xl text-xxs absolute">OF THE</span><span class="mx-6 xl:mx-10"></span>PHILIPPINES</p></div><div class="h-40 w-40 xl:ml-60 flex justify-center items-center" data-aos="fade" data-aos-delay="300" data-aos-duration="1000"><a href="#footer"><button class="xl:w-32 w-24 h-15 border text-xs xl:text-sm border-white rounded-md bg-theme1 text-theme2 transition duration-500 py-2 px-2 hover:bg-theme2 hover:text-theme1">Contact Us<br>`);
      _push(ssrRenderComponent(unref(FontAwesomeIcon), {
        icon: "fa-solid fa-phone-flip",
        class: ""
      }, null, _parent));
      _push(`</button></a></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Header.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _,
  _sfc_main$1 as a
};
