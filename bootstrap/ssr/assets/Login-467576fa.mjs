import { withCtx, unref, createTextVNode, createVNode, openBlock, createBlock, toDisplayString, createCommentVNode, withModifiers, withDirectives, vModelText, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import AOS from "aos";
import "../app.mjs";
import { _ as _sfc_main$1 } from "./GuestLayout-8a0ed185.mjs";
import { _ as _sfc_main$2 } from "./InputError-8978c575.mjs";
import "./InputLabel-cd393c3d.mjs";
import { _ as _sfc_main$3 } from "./PrimaryButton-4cb8de39.mjs";
import "./TextInput-f98eb51f.mjs";
import { useForm, Head } from "@inertiajs/vue3";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faLock, faKey } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import "axios";
import "./logo-0238775f.mjs";
import "./ApplicationLogo-93b063e1.mjs";
const Login_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "Login",
  __ssrInlineRender: true,
  props: {
    canResetPassword: Boolean,
    status: String
  },
  setup(__props) {
    library.add(faLock, faKey);
    const form = useForm({
      email: "",
      password: "",
      remember: false
    });
    const submit = () => {
      form.post(route("login"), {
        onFinish: () => form.reset("password")
      });
    };
    AOS.init();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Log in" }, null, _parent2, _scopeId));
            if (__props.status) {
              _push2(`<div class="mb-4 font-medium text-sm text-green-600"${_scopeId}>${ssrInterpolate(__props.status)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<form${_scopeId}><div class=""${_scopeId}><div class="flex justify-center items-center"${_scopeId}><div class="form-control"${_scopeId}><input class="" type="text" required autofocus${ssrRenderAttr("value", unref(form).email)}${_scopeId}><label${_scopeId}><i class="text-theme2 text-xl pr-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(FontAwesomeIcon), { icon: "fa-solid fa-lock" }, null, _parent2, _scopeId));
            _push2(`</i><span style="${ssrRenderStyle({ "transition-delay": "0ms" })}"${_scopeId}>E</span><span style="${ssrRenderStyle({ "transition-delay": "50ms" })}"${_scopeId}>m</span><span style="${ssrRenderStyle({ "transition-delay": "100ms" })}"${_scopeId}>a</span><span style="${ssrRenderStyle({ "transition-delay": "150ms" })}"${_scopeId}>i</span><span style="${ssrRenderStyle({ "transition-delay": "200ms" })}"${_scopeId}>l</span></label></div></div>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              class: "mt-2 text-center",
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><div class="mt-4 flex justify-center items-center"${_scopeId}><div class="form-control"${_scopeId}><input type="password" required autofocus${ssrRenderAttr("value", unref(form).password)}${_scopeId}><label${_scopeId}><i class="text-theme2 text-xl pr-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(FontAwesomeIcon), { icon: "fa-solid fa-key" }, null, _parent2, _scopeId));
            _push2(`</i><span style="${ssrRenderStyle({ "transition-delay": "0ms" })}"${_scopeId}>P</span><span style="${ssrRenderStyle({ "transition-delay": "50ms" })}"${_scopeId}>a</span><span style="${ssrRenderStyle({ "transition-delay": "100ms" })}"${_scopeId}>s</span><span style="${ssrRenderStyle({ "transition-delay": "150ms" })}"${_scopeId}>s</span><span style="${ssrRenderStyle({ "transition-delay": "200ms" })}"${_scopeId}>w</span><span style="${ssrRenderStyle({ "transition-delay": "250ms" })}"${_scopeId}>o</span><span style="${ssrRenderStyle({ "transition-delay": "300ms" })}"${_scopeId}>r</span><span style="${ssrRenderStyle({ "transition-delay": "350ms" })}"${_scopeId}>d</span></label></div></div>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              class: "mt-2 text-center",
              message: unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              class: ["login ml-4 text-l w-80 items-center justify-center h-16 bg-theme1 text-white text-sm", { "opacity-25": unref(form).processing }],
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` LOGIN `);
                } else {
                  return [
                    createTextVNode(" LOGIN ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode(unref(Head), { title: "Log in" }),
              __props.status ? (openBlock(), createBlock("div", {
                key: 0,
                class: "mb-4 font-medium text-sm text-green-600"
              }, toDisplayString(__props.status), 1)) : createCommentVNode("", true),
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createVNode("div", { class: "" }, [
                  createVNode("div", { class: "flex justify-center items-center" }, [
                    createVNode("div", { class: "form-control" }, [
                      withDirectives(createVNode("input", {
                        class: "",
                        type: "text",
                        required: "",
                        autofocus: "",
                        "onUpdate:modelValue": ($event) => unref(form).email = $event
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, unref(form).email]
                      ]),
                      createVNode("label", null, [
                        createVNode("i", { class: "text-theme2 text-xl pr-4" }, [
                          createVNode(unref(FontAwesomeIcon), { icon: "fa-solid fa-lock" })
                        ]),
                        createVNode("span", { style: { "transition-delay": "0ms" } }, "E"),
                        createVNode("span", { style: { "transition-delay": "50ms" } }, "m"),
                        createVNode("span", { style: { "transition-delay": "100ms" } }, "a"),
                        createVNode("span", { style: { "transition-delay": "150ms" } }, "i"),
                        createVNode("span", { style: { "transition-delay": "200ms" } }, "l")
                      ])
                    ])
                  ]),
                  createVNode(_sfc_main$2, {
                    class: "mt-2 text-center",
                    message: unref(form).errors.email
                  }, null, 8, ["message"])
                ]),
                createVNode("div", null, [
                  createVNode("div", { class: "mt-4 flex justify-center items-center" }, [
                    createVNode("div", { class: "form-control" }, [
                      withDirectives(createVNode("input", {
                        type: "password",
                        required: "",
                        autofocus: "",
                        "onUpdate:modelValue": ($event) => unref(form).password = $event
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, unref(form).password]
                      ]),
                      createVNode("label", null, [
                        createVNode("i", { class: "text-theme2 text-xl pr-4" }, [
                          createVNode(unref(FontAwesomeIcon), { icon: "fa-solid fa-key" })
                        ]),
                        createVNode("span", { style: { "transition-delay": "0ms" } }, "P"),
                        createVNode("span", { style: { "transition-delay": "50ms" } }, "a"),
                        createVNode("span", { style: { "transition-delay": "100ms" } }, "s"),
                        createVNode("span", { style: { "transition-delay": "150ms" } }, "s"),
                        createVNode("span", { style: { "transition-delay": "200ms" } }, "w"),
                        createVNode("span", { style: { "transition-delay": "250ms" } }, "o"),
                        createVNode("span", { style: { "transition-delay": "300ms" } }, "r"),
                        createVNode("span", { style: { "transition-delay": "350ms" } }, "d")
                      ])
                    ])
                  ]),
                  createVNode(_sfc_main$2, {
                    class: "mt-2 text-center",
                    message: unref(form).errors.password
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "flex items-center justify-center" }, [
                  createVNode(_sfc_main$3, {
                    class: ["login ml-4 text-l w-80 items-center justify-center h-16 bg-theme1 text-white text-sm", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" LOGIN ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ], 40, ["onSubmit"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
