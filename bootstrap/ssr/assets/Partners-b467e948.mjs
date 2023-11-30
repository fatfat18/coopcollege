import { mergeProps, useSSRContext, withCtx, createVNode, unref, createTextVNode, toDisplayString, withModifiers, openBlock, createBlock, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderSlot, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./AuthenticatedLayout-5e65d435.mjs";
import "@inertiajs/vue3";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import AOS from "aos";
import "../app.mjs";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
import { _ as _sfc_main$3 } from "./DeleteModal-31171c4d.mjs";
import { _ as _sfc_main$4 } from "./Modal-7cee2fea.mjs";
import { B as BASE_URL } from "./baseurl-7bfc5f79.mjs";
import "./ApplicationLogo-93b063e1.mjs";
import "axios";
const PartnersTile_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = {
  props: {
    name: {
      type: String,
      required: true
    },
    image: {
      type: String
      //required: true,
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-24 xl:h-32 max-w-7xl bg-white xl:px-8 xl:py-4 rounded-lg grid grid-cols-5 xl:gap-2 max-h-30 xl:max-h-40 text-[12px] xl:text-md pr-4" }, _attrs))}><div class="flex justify-center text-center items-center"><img${ssrRenderAttr("src", $props.image)} alt="Image" class="xl:ml-0 ml-4 xl:h-16 xl:w-32 h-12 w-24 object-contain object-top"></div><div class="flex justify-center text-center items-center col-span-2">${ssrInterpolate($props.name)}</div>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/PartnersTile.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const PartnersTile = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const Partners_vue_vue_type_style_index_0_lang = "";
const __default__ = {
  data() {
    return {
      items: [],
      showModal: false,
      confirmdelmodal: false,
      confirmname: "",
      itemcv: ""
    };
  },
  mounted() {
    axios.get(BASE_URL + "/displayPartnerAdmin").then((response) => {
      this.items = response.data;
      console.log(this.items);
    }).catch((error) => {
      console.log(error);
    });
  },
  computed: {
    reversedItems() {
      return this.items.slice().reverse();
    }
  },
  methods: {
    navigateToUpdate(idPartner) {
      window.location.href = this.route("PartnersUpdate", { idPartner });
    },
    confirmdel(item) {
      this.showModal = true;
      this.confirmname = item.partnerName;
      this.itemid = item.idPartner;
    },
    navigatetoDelete() {
      this.showModal = false;
      this.confirmdelmodal = true;
      console.log(this.itemid);
      let params = new URLSearchParams();
      let num = parseInt(this.itemid);
      params.append("idPartner", num);
      axios.delete(BASE_URL + "/deletePartner?" + params.toString()).then((response) => {
        console.log(response.data);
        async function redirectWithDelay() {
          await new Promise((resolve) => setTimeout(resolve, 1e3));
          window.location.href = route("Partners");
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
  __name: "Partners",
  __ssrInlineRender: true,
  setup(__props) {
    library.add(faPlus);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$2, _attrs, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-bold text-3xl leading-tight text-theme1"${_scopeId}>Manage Partners</h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-bold text-3xl leading-tight text-theme1" }, "Manage Partners")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-8 postcontainer overflow-y-hidden h-max min-h-screen"${_scopeId}><a href="/PartnersEditor"${_scopeId}><button class="xl:ml-16 my-4 mx-8 px-6 py-2 rounded-md bg-theme1 transition duration-150 border border-black text-theme2 hover:scale-110 hover:-translate-y-1"${_scopeId}> Add Partner `);
            _push2(ssrRenderComponent(unref(FontAwesomeIcon), {
              icon: "fa-solid fa-plus",
              class: "pl-2 hover:text-white"
            }, null, _parent2, _scopeId));
            _push2(`</button></a><div class="max-w-7xl mx-auto sm:px-6 lg:px-8 overflow-y-hidden space-y-1 h-max" data-aos="fade-up" data-aos-duration="1000"${_scopeId}><div class="max-w-7xl bg-white xl:px-8 xl:py-4 py-4 rounded-sm grid grid-cols-5 gap-4 text-xs xl:text-md"${_scopeId}><div class="flex justify-center text-center items-center"${_scopeId}> IMAGE </div><div class="flex justify-center text-center items-center col-span-2"${_scopeId}> NAME </div><div class="flex justify-center text-center items-center"${_scopeId}></div></div><!--[-->`);
            ssrRenderList(_ctx.reversedItems, (item, index) => {
              _push2(`<!--[-->`);
              _push2(ssrRenderComponent(PartnersTile, {
                image: item.image.ImageUrl,
                name: item.partnerName,
                "data-aos": "fade-up",
                "data-aos-duration": "500"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex justify-center text-center items-center col-span-1"${_scopeId2}><button button class="py-2 xl:px-8 px-6 rounded-full bg-blue-400 xl:rounded-lg text-white text-xs xl:text-md transition duration-300 hover:text-blue-400 hover:bg-white border-2 border-blue-400"${_scopeId2}>Edit</button></div><div class="flex justify-center text-center items-center col-span-1"${_scopeId2}><button class="transition duration-300 hover:text-red-500 hover:bg-white py-2 xl:px-8 px-4 rounded-full bg-red-500 xl:rounded-lg text-white text-xs xl:text-md border-2 border-red-500"${_scopeId2}>Delete</button></div>`);
                    _push3(ssrRenderComponent(_sfc_main$3, {
                      show: _ctx.showModal,
                      onClose: ($event) => _ctx.showModal = false
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<h2 class="text-black text-l"${_scopeId3}>Are You Sure You Want to Remove <br${_scopeId3}> <span class="text-theme1"${_scopeId3}>${ssrInterpolate(this.confirmname)}</span> as Partners?</h2><br${_scopeId3}><button class="transition duration-300 rounded-lg hover:text-red-500 hover:bg-white border border-red-500 px-4 py-4 bg-red-500 text-white mx-2 text-sm"${_scopeId3}> CONFIRM</button><button class="transition duration-300 rounded-lg hover:text-black hover:bg-white border border-zinc-400 px-4 py-4 bg-zinc-400 text-white mx-2 text-sm"${_scopeId3}> CANCEL </button>`);
                        } else {
                          return [
                            createVNode("h2", { class: "text-black text-l" }, [
                              createTextVNode("Are You Sure You Want to Remove "),
                              createVNode("br"),
                              createTextVNode(),
                              createVNode("span", { class: "text-theme1" }, toDisplayString(this.confirmname), 1),
                              createTextVNode(" as Partners?")
                            ]),
                            createVNode("br"),
                            createVNode("button", {
                              onClick: withModifiers(($event) => _ctx.navigatetoDelete(), ["prevent"]),
                              class: "transition duration-300 rounded-lg hover:text-red-500 hover:bg-white border border-red-500 px-4 py-4 bg-red-500 text-white mx-2 text-sm"
                            }, " CONFIRM", 8, ["onClick"]),
                            createVNode("button", {
                              class: "transition duration-300 rounded-lg hover:text-black hover:bg-white border border-zinc-400 px-4 py-4 bg-zinc-400 text-white mx-2 text-sm",
                              onClick: ($event) => _ctx.showModal = false
                            }, " CANCEL ", 8, ["onClick"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode("div", { class: "flex justify-center text-center items-center col-span-1" }, [
                        createVNode("button", {
                          button: "",
                          onClick: ($event) => _ctx.navigateToUpdate(item.idPartner),
                          class: "py-2 xl:px-8 px-6 rounded-full bg-blue-400 xl:rounded-lg text-white text-xs xl:text-md transition duration-300 hover:text-blue-400 hover:bg-white border-2 border-blue-400"
                        }, "Edit", 8, ["onClick"])
                      ]),
                      createVNode("div", { class: "flex justify-center text-center items-center col-span-1" }, [
                        createVNode("button", {
                          onClick: withModifiers(($event) => _ctx.confirmdel(item), ["prevent"]),
                          class: "transition duration-300 hover:text-red-500 hover:bg-white py-2 xl:px-8 px-4 rounded-full bg-red-500 xl:rounded-lg text-white text-xs xl:text-md border-2 border-red-500"
                        }, "Delete", 8, ["onClick"])
                      ]),
                      createVNode(_sfc_main$3, {
                        show: _ctx.showModal,
                        onClose: ($event) => _ctx.showModal = false
                      }, {
                        default: withCtx(() => [
                          createVNode("h2", { class: "text-black text-l" }, [
                            createTextVNode("Are You Sure You Want to Remove "),
                            createVNode("br"),
                            createTextVNode(),
                            createVNode("span", { class: "text-theme1" }, toDisplayString(this.confirmname), 1),
                            createTextVNode(" as Partners?")
                          ]),
                          createVNode("br"),
                          createVNode("button", {
                            onClick: withModifiers(($event) => _ctx.navigatetoDelete(), ["prevent"]),
                            class: "transition duration-300 rounded-lg hover:text-red-500 hover:bg-white border border-red-500 px-4 py-4 bg-red-500 text-white mx-2 text-sm"
                          }, " CONFIRM", 8, ["onClick"]),
                          createVNode("button", {
                            class: "transition duration-300 rounded-lg hover:text-black hover:bg-white border border-zinc-400 px-4 py-4 bg-zinc-400 text-white mx-2 text-sm",
                            onClick: ($event) => _ctx.showModal = false
                          }, " CANCEL ", 8, ["onClick"])
                        ]),
                        _: 1
                      }, 8, ["show", "onClose"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$4, {
                show: _ctx.confirmdelmodal,
                onClose: ($event) => _ctx.confirmdelmodal = false
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<h2 class="text-red-500 text-2xl"${_scopeId2}>Delete Partner</h2><p class="text-theme2 text-4xl mb-5"${_scopeId2}>Success!</p>`);
                  } else {
                    return [
                      createVNode("h2", { class: "text-red-500 text-2xl" }, "Delete Partner"),
                      createVNode("p", { class: "text-theme2 text-4xl mb-5" }, "Success!")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`<!--]-->`);
            });
            _push2(`<!--]--></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-8 postcontainer overflow-y-hidden h-max min-h-screen" }, [
                createVNode("a", { href: "/PartnersEditor" }, [
                  createVNode("button", { class: "xl:ml-16 my-4 mx-8 px-6 py-2 rounded-md bg-theme1 transition duration-150 border border-black text-theme2 hover:scale-110 hover:-translate-y-1" }, [
                    createTextVNode(" Add Partner "),
                    createVNode(unref(FontAwesomeIcon), {
                      icon: "fa-solid fa-plus",
                      class: "pl-2 hover:text-white"
                    })
                  ])
                ]),
                createVNode("div", {
                  class: "max-w-7xl mx-auto sm:px-6 lg:px-8 overflow-y-hidden space-y-1 h-max",
                  "data-aos": "fade-up",
                  "data-aos-duration": "1000"
                }, [
                  createVNode("div", { class: "max-w-7xl bg-white xl:px-8 xl:py-4 py-4 rounded-sm grid grid-cols-5 gap-4 text-xs xl:text-md" }, [
                    createVNode("div", { class: "flex justify-center text-center items-center" }, " IMAGE "),
                    createVNode("div", { class: "flex justify-center text-center items-center col-span-2" }, " NAME "),
                    createVNode("div", { class: "flex justify-center text-center items-center" })
                  ]),
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.reversedItems, (item, index) => {
                    return openBlock(), createBlock(Fragment, {
                      key: item.idPartner
                    }, [
                      createVNode(PartnersTile, {
                        image: item.image.ImageUrl,
                        name: item.partnerName,
                        "data-aos": "fade-up",
                        "data-aos-duration": "500"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex justify-center text-center items-center col-span-1" }, [
                            createVNode("button", {
                              button: "",
                              onClick: ($event) => _ctx.navigateToUpdate(item.idPartner),
                              class: "py-2 xl:px-8 px-6 rounded-full bg-blue-400 xl:rounded-lg text-white text-xs xl:text-md transition duration-300 hover:text-blue-400 hover:bg-white border-2 border-blue-400"
                            }, "Edit", 8, ["onClick"])
                          ]),
                          createVNode("div", { class: "flex justify-center text-center items-center col-span-1" }, [
                            createVNode("button", {
                              onClick: withModifiers(($event) => _ctx.confirmdel(item), ["prevent"]),
                              class: "transition duration-300 hover:text-red-500 hover:bg-white py-2 xl:px-8 px-4 rounded-full bg-red-500 xl:rounded-lg text-white text-xs xl:text-md border-2 border-red-500"
                            }, "Delete", 8, ["onClick"])
                          ]),
                          createVNode(_sfc_main$3, {
                            show: _ctx.showModal,
                            onClose: ($event) => _ctx.showModal = false
                          }, {
                            default: withCtx(() => [
                              createVNode("h2", { class: "text-black text-l" }, [
                                createTextVNode("Are You Sure You Want to Remove "),
                                createVNode("br"),
                                createTextVNode(),
                                createVNode("span", { class: "text-theme1" }, toDisplayString(this.confirmname), 1),
                                createTextVNode(" as Partners?")
                              ]),
                              createVNode("br"),
                              createVNode("button", {
                                onClick: withModifiers(($event) => _ctx.navigatetoDelete(), ["prevent"]),
                                class: "transition duration-300 rounded-lg hover:text-red-500 hover:bg-white border border-red-500 px-4 py-4 bg-red-500 text-white mx-2 text-sm"
                              }, " CONFIRM", 8, ["onClick"]),
                              createVNode("button", {
                                class: "transition duration-300 rounded-lg hover:text-black hover:bg-white border border-zinc-400 px-4 py-4 bg-zinc-400 text-white mx-2 text-sm",
                                onClick: ($event) => _ctx.showModal = false
                              }, " CANCEL ", 8, ["onClick"])
                            ]),
                            _: 1
                          }, 8, ["show", "onClose"])
                        ]),
                        _: 2
                      }, 1032, ["image", "name"]),
                      createVNode(_sfc_main$4, {
                        show: _ctx.confirmdelmodal,
                        onClose: ($event) => _ctx.confirmdelmodal = false
                      }, {
                        default: withCtx(() => [
                          createVNode("h2", { class: "text-red-500 text-2xl" }, "Delete Partner"),
                          createVNode("p", { class: "text-theme2 text-4xl mb-5" }, "Success!")
                        ]),
                        _: 1
                      }, 8, ["show", "onClose"])
                    ], 64);
                  }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Partners.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
