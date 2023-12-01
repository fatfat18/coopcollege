import { unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-5e65d435.mjs";
import _sfc_main$4 from "./DeleteUserForm-c6cc8733.mjs";
import _sfc_main$3 from "./UpdatePasswordForm-6c16437c.mjs";
import _sfc_main$2 from "./UpdateProfileInformationForm-88e737f3.mjs";
import { Head } from "@inertiajs/vue3";
import AOS from "aos";
import "../app.mjs";
import "./ApplicationLogo-93b063e1.mjs";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/vue-fontawesome";
import "@fortawesome/free-solid-svg-icons";
import "./InputError-8978c575.mjs";
import "./InputLabel-cd393c3d.mjs";
import "./Modal-7cee2fea.mjs";
import "./TextInput-f98eb51f.mjs";
import "./PrimaryButton-4cb8de39.mjs";
import "axios";
const Edit_vue_vue_type_style_index_0_lang = "";
AOS.init({
  once: "true"
});
AOS.refresh();
const _sfc_main = {
  __name: "Edit",
  __ssrInlineRender: true,
  props: {
    mustVerifyEmail: Boolean,
    status: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Profile" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-3xl text-theme1 leading-tight"${_scopeId}>Profile</h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-3xl text-theme1 leading-tight" }, "Profile")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12 postcontainer"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-8 overflow-y-hidden"${_scopeId}><div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg" data-aos="fade-right" data-aos-duration="1000"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              "must-verify-email": __props.mustVerifyEmail,
              status: __props.status,
              class: "max-w-xl"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg" data-aos="fade-left" data-aos-duration="1000"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, { class: "max-w-xl" }, null, _parent2, _scopeId));
            _push2(`</div><div class="p-4 sm:p-8 bg-white shadow sm:rounded-lg" data-aos="zoom-in" data-aos-duration="1000"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$4, { class: "max-w-xl" }, null, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12 postcontainer" }, [
                createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-8 overflow-y-hidden" }, [
                  createVNode("div", {
                    class: "p-4 sm:p-8 bg-white shadow sm:rounded-lg",
                    "data-aos": "fade-right",
                    "data-aos-duration": "1000"
                  }, [
                    createVNode(_sfc_main$2, {
                      "must-verify-email": __props.mustVerifyEmail,
                      status: __props.status,
                      class: "max-w-xl"
                    }, null, 8, ["must-verify-email", "status"])
                  ]),
                  createVNode("div", {
                    class: "p-4 sm:p-8 bg-white shadow sm:rounded-lg",
                    "data-aos": "fade-left",
                    "data-aos-duration": "1000"
                  }, [
                    createVNode(_sfc_main$3, { class: "max-w-xl" })
                  ]),
                  createVNode("div", {
                    class: "p-4 sm:p-8 bg-white shadow sm:rounded-lg",
                    "data-aos": "zoom-in",
                    "data-aos-duration": "1000"
                  }, [
                    createVNode(_sfc_main$4, { class: "max-w-xl" })
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};