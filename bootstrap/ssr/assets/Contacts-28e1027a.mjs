import { withCtx, createVNode, unref, withModifiers, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-5e65d435.mjs";
import "@inertiajs/vue3";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faPlus, faEnvelope, faPhone, faTty, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { _ as _sfc_main$2 } from "./TextInput-f98eb51f.mjs";
import AOS from "aos";
import "../app.mjs";
import { _ as _sfc_main$3 } from "./Modal-7cee2fea.mjs";
import { B as BASE_URL } from "./baseurl-7bfc5f79.mjs";
import axios from "axios";
import "./ApplicationLogo-93b063e1.mjs";
const Contacts_vue_vue_type_style_index_0_lang = "";
const __default__ = {
  data() {
    return {
      contactUs: [],
      idcontactUs: 1,
      showModal: false
    };
  },
  created() {
    axios.get(BASE_URL + "/displayContactUs").then((response) => {
      this.contactUs = response.data;
      console.log(response.data);
    }).catch((error) => {
      console.log(error);
    });
  },
  methods: {
    updateContactUs() {
      let updateUrl = "http://127.0.0.1:8000/contactUs/";
      let params = new URLSearchParams();
      let item = this.contactUs.find((item2) => item2.idcontactUs === this.idcontactUs);
      params.append("emailAdd", item.emailAdd);
      params.append("phoneNum", item.phoneNum);
      params.append("telNum", item.telNum);
      params.append("facebookLink", item.facebookLink);
      params.append("websiteLink", item.websiteLink);
      params.append("Status", 1);
      axios.put(updateUrl + "?" + params.toString()).then((response) => {
        console.log(response.data);
        this.showModal = true;
        async function redirectWithDelay() {
          await new Promise((resolve) => setTimeout(resolve, 1e3));
          window.location.href = route("Contacts");
        }
        redirectWithDelay();
      }).catch((error) => {
        console.log(error);
      });
    }
  }
};
AOS.init({
  startEvent: "load",
  once: "true,"
});
AOS.refresh();
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "Contacts",
  __ssrInlineRender: true,
  setup(__props) {
    library.add(faPlus, faFacebook, faEnvelope, faPhone, faTty, faGlobe);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-bold text-3xl leading-tight text-theme1"${_scopeId}>Manage Contacts</h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-bold text-3xl leading-tight text-theme1" }, "Manage Contacts")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-8 postcontainer overflow-y-hidden h-max min-h-screen"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8 overflow-y-auto space-y-1 h-max xl:flex xl:justify-center" data-aos="fade-up" data-aos-duration="1000"${_scopeId}><form${_scopeId}><!--[-->`);
            ssrRenderList(_ctx.contactUs, (item, index) => {
              _push2(`<div class="max-w-7xl bg-white xl:px-8 xl:py-4 py-4 rounded-lg flex flex-col gap-4 text-xs xl:text-l w-screen h-max"${_scopeId}><button class="border w-24 text-white py-4 px-4 bg-green-800 rounded-lg hover:bg-green-600 transition ease-in duration-100"${_scopeId}>Save</button><div class="xl:flex overflow-y-hidden justify-center"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(FontAwesomeIcon), {
                icon: "fa-solid fa-envelope",
                class: "transition ease-in duration-150 h-10 text-theme1 mx-4 overflow-y-hidden",
                "data-aos": "fade-right",
                "data-aos-duration": "1300"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$2, {
                id: "emailAdd",
                name: "emailAdd",
                type: "text",
                class: "px-2 xl:w-1/3 w:1/2 focus:ring-yellow-500 active:ring-yellow-500",
                required: "",
                placeholder: "Email",
                modelValue: item.emailAdd,
                "onUpdate:modelValue": ($event) => item.emailAdd = $event,
                "data-aos": "fade-up",
                "data-aos-duration": "1300"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="xl:flex overflow-y-hidden justify-center"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(FontAwesomeIcon), {
                icon: "fa-brands fa-facebook",
                class: "transition ease-in duration-150 h-10 text-theme1 mx-4 overflow-y-hidden",
                "data-aos": "fade-right",
                "data-aos-duration": "1300"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$2, {
                id: "facebookLink",
                name: "facebookLink",
                type: "text",
                class: "px-2 xl:w-1/3 w:1/2 focus:ring-yellow-500 active:ring-yellow-500",
                required: "",
                autocomplete: "current-facebook",
                placeholder: "Facebook",
                modelValue: item.facebookLink,
                "onUpdate:modelValue": ($event) => item.facebookLink = $event,
                "data-aos": "fade-up",
                "data-aos-duration": "1300"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="xl:flex overflow-y-hidden justify-center"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(FontAwesomeIcon), {
                icon: "fa-solid fa-phone",
                class: "transition ease-in duration-150 h-10 text-theme1 mx-4 overflow-y-hidden",
                "data-aos": "fade-right",
                "data-aos-duration": "1300"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$2, {
                id: "phoneNum",
                name: "phoneNum",
                type: "number",
                class: "px-2 xl:w-1/3 w:1/2 focus:ring-yellow-500 active:ring-yellow-500",
                required: "",
                autocomplete: "current-phonenum",
                placeholder: "Mobile Phone",
                modelValue: item.phoneNum,
                "onUpdate:modelValue": ($event) => item.phoneNum = $event,
                "data-aos": "fade-up",
                "data-aos-duration": "1300"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="xl:flex overflow-y-hidden justify-center"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(FontAwesomeIcon), {
                icon: "fa-solid fa-tty",
                class: "transition ease-in duration-150 h-10 text-theme1 mx-4 overflow-y-hidden",
                "data-aos": "fade-right",
                "data-aos-duration": "1300"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$2, {
                id: "telNum",
                name: "telNum",
                type: "number",
                class: "px-2 xl:w-1/3 w:1/2 focus:ring-yellow-500 active:ring-yellow-500",
                required: "",
                autocomplete: "current-telephone",
                placeholder: "Telephone",
                modelValue: item.telNum,
                "onUpdate:modelValue": ($event) => item.telNum = $event,
                "data-aos": "fade-up",
                "data-aos-duration": "1300"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="xl:flex overflow-y-hidden justify-center"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(FontAwesomeIcon), {
                icon: "fa-solid fa-globe",
                class: "transition ease-in duration-150 h-10 text-theme1 mx-4 overflow-y-hidden",
                "data-aos": "fade-right",
                "data-aos-duration": "1300"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$2, {
                id: "websiteLink",
                name: "websiteLink",
                type: "text",
                class: "px-2 xl:w-1/3 w:1/2 focus:ring-yellow-500 active:ring-yellow-500",
                required: "",
                autocomplete: "current-website",
                placeholder: "Website Link",
                modelValue: item.websiteLink,
                "onUpdate:modelValue": ($event) => item.websiteLink = $event,
                "data-aos": "fade-up",
                "data-aos-duration": "1300"
              }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
            });
            _push2(`<!--]--></form>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              show: _ctx.showModal,
              onClose: ($event) => _ctx.showModal = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h2 class="text-theme1 text-2xl"${_scopeId2}>Updated Contacts</h2><p class="text-theme2 text-4xl"${_scopeId2}>Success!</p>`);
                } else {
                  return [
                    createVNode("h2", { class: "text-theme1 text-2xl" }, "Updated Contacts"),
                    createVNode("p", { class: "text-theme2 text-4xl" }, "Success!")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-8 postcontainer overflow-y-hidden h-max min-h-screen" }, [
                createVNode("div", {
                  class: "max-w-7xl mx-auto sm:px-6 lg:px-8 overflow-y-auto space-y-1 h-max xl:flex xl:justify-center",
                  "data-aos": "fade-up",
                  "data-aos-duration": "1000"
                }, [
                  createVNode("form", {
                    onSubmit: withModifiers(_ctx.updateContactUs, ["prevent"])
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.contactUs, (item, index) => {
                      return openBlock(), createBlock("div", {
                        class: "max-w-7xl bg-white xl:px-8 xl:py-4 py-4 rounded-lg flex flex-col gap-4 text-xs xl:text-l w-screen h-max",
                        key: index
                      }, [
                        createVNode("button", {
                          onClick: ($event) => _ctx.updateContactUs(item.idcontactUs),
                          class: "border w-24 text-white py-4 px-4 bg-green-800 rounded-lg hover:bg-green-600 transition ease-in duration-100"
                        }, "Save", 8, ["onClick"]),
                        createVNode("div", { class: "xl:flex overflow-y-hidden justify-center" }, [
                          createVNode(unref(FontAwesomeIcon), {
                            icon: "fa-solid fa-envelope",
                            class: "transition ease-in duration-150 h-10 text-theme1 mx-4 overflow-y-hidden",
                            "data-aos": "fade-right",
                            "data-aos-duration": "1300"
                          }),
                          createVNode(_sfc_main$2, {
                            id: "emailAdd",
                            name: "emailAdd",
                            type: "text",
                            class: "px-2 xl:w-1/3 w:1/2 focus:ring-yellow-500 active:ring-yellow-500",
                            required: "",
                            placeholder: "Email",
                            modelValue: item.emailAdd,
                            "onUpdate:modelValue": ($event) => item.emailAdd = $event,
                            "data-aos": "fade-up",
                            "data-aos-duration": "1300"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "xl:flex overflow-y-hidden justify-center" }, [
                          createVNode(unref(FontAwesomeIcon), {
                            icon: "fa-brands fa-facebook",
                            class: "transition ease-in duration-150 h-10 text-theme1 mx-4 overflow-y-hidden",
                            "data-aos": "fade-right",
                            "data-aos-duration": "1300"
                          }),
                          createVNode(_sfc_main$2, {
                            id: "facebookLink",
                            name: "facebookLink",
                            type: "text",
                            class: "px-2 xl:w-1/3 w:1/2 focus:ring-yellow-500 active:ring-yellow-500",
                            required: "",
                            autocomplete: "current-facebook",
                            placeholder: "Facebook",
                            modelValue: item.facebookLink,
                            "onUpdate:modelValue": ($event) => item.facebookLink = $event,
                            "data-aos": "fade-up",
                            "data-aos-duration": "1300"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "xl:flex overflow-y-hidden justify-center" }, [
                          createVNode(unref(FontAwesomeIcon), {
                            icon: "fa-solid fa-phone",
                            class: "transition ease-in duration-150 h-10 text-theme1 mx-4 overflow-y-hidden",
                            "data-aos": "fade-right",
                            "data-aos-duration": "1300"
                          }),
                          createVNode(_sfc_main$2, {
                            id: "phoneNum",
                            name: "phoneNum",
                            type: "number",
                            class: "px-2 xl:w-1/3 w:1/2 focus:ring-yellow-500 active:ring-yellow-500",
                            required: "",
                            autocomplete: "current-phonenum",
                            placeholder: "Mobile Phone",
                            modelValue: item.phoneNum,
                            "onUpdate:modelValue": ($event) => item.phoneNum = $event,
                            "data-aos": "fade-up",
                            "data-aos-duration": "1300"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "xl:flex overflow-y-hidden justify-center" }, [
                          createVNode(unref(FontAwesomeIcon), {
                            icon: "fa-solid fa-tty",
                            class: "transition ease-in duration-150 h-10 text-theme1 mx-4 overflow-y-hidden",
                            "data-aos": "fade-right",
                            "data-aos-duration": "1300"
                          }),
                          createVNode(_sfc_main$2, {
                            id: "telNum",
                            name: "telNum",
                            type: "number",
                            class: "px-2 xl:w-1/3 w:1/2 focus:ring-yellow-500 active:ring-yellow-500",
                            required: "",
                            autocomplete: "current-telephone",
                            placeholder: "Telephone",
                            modelValue: item.telNum,
                            "onUpdate:modelValue": ($event) => item.telNum = $event,
                            "data-aos": "fade-up",
                            "data-aos-duration": "1300"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        createVNode("div", { class: "xl:flex overflow-y-hidden justify-center" }, [
                          createVNode(unref(FontAwesomeIcon), {
                            icon: "fa-solid fa-globe",
                            class: "transition ease-in duration-150 h-10 text-theme1 mx-4 overflow-y-hidden",
                            "data-aos": "fade-right",
                            "data-aos-duration": "1300"
                          }),
                          createVNode(_sfc_main$2, {
                            id: "websiteLink",
                            name: "websiteLink",
                            type: "text",
                            class: "px-2 xl:w-1/3 w:1/2 focus:ring-yellow-500 active:ring-yellow-500",
                            required: "",
                            autocomplete: "current-website",
                            placeholder: "Website Link",
                            modelValue: item.websiteLink,
                            "onUpdate:modelValue": ($event) => item.websiteLink = $event,
                            "data-aos": "fade-up",
                            "data-aos-duration": "1300"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ]);
                    }), 128))
                  ], 40, ["onSubmit"]),
                  createVNode(_sfc_main$3, {
                    show: _ctx.showModal,
                    onClose: ($event) => _ctx.showModal = false
                  }, {
                    default: withCtx(() => [
                      createVNode("h2", { class: "text-theme1 text-2xl" }, "Updated Contacts"),
                      createVNode("p", { class: "text-theme2 text-4xl" }, "Success!")
                    ]),
                    _: 1
                  }, 8, ["show", "onClose"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Contacts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
