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
import { B as BASE_URL } from "./baseurl-7f204550.mjs";
import "./ApplicationLogo-93b063e1.mjs";
import "axios";
import "swiper";
const PostsTile_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    context: {
      type: String,
      required: true
    },
    date_created: {
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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-24 xl:h-32 max-w-7xl bg-white xl:px-8 xl:py-4 rounded-lg grid grid-cols-9 xl:gap-2 max-h-30 xl:max-h-40 text-[12px] xl:text-md pr-2 pl-2" }, _attrs))}><div class="flex justify-center text-center items-center col-span-1"><img${ssrRenderAttr("src", $props.image)} alt="Images" class="xl:h-16 xl:w-32 h-12 w-24 object-contain object-top"></div><div class="flex justify-center text-center items-center col-span-1">${ssrInterpolate($props.title)}</div><div class="flex justify-center text-center items-center col-span-1">${ssrInterpolate($props.description)}</div><div class="flex justify-center xl:text-xs text-center items-center col-span-3 overflow-y-hidden text-[8px]">${ssrInterpolate($props.context)}</div><div class="flex justify-center text-center items-center col-span-1">${ssrInterpolate($props.date_created)}</div>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/PostsTile.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const PostsTile = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const Posts_vue_vue_type_style_index_0_lang = "";
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
    axios.get(BASE_URL + "/displayPost").then((response) => {
      this.items = response.data;
      console.log(this.items);
    }).catch((error) => {
      console.log(error);
    });
  },
  methods: {
    sliceText(text, limit) {
      if (text.length > limit) {
        return text.slice(0, 150) + "......";
      } else {
        return text;
      }
    },
    navigateToUpdate(Postid) {
      window.location.href = this.route("PostsUpdate", {
        Postid
      });
    },
    confirmdel(item) {
      this.showModal = true;
      this.confirmname = item.newsTitle;
      this.itemid = item.Postid;
    },
    navigatetoDelete() {
      this.showModal = false;
      this.confirmdelmodal = true;
      console.log(this.Postid);
      let params = new URLSearchParams();
      let num = parseInt(this.itemid);
      params.append("Postid", num);
      axios.delete(BASE_URL + "/deleteCategory?" + params.toString()).then((response) => {
        console.log(response.data);
        async function redirectWithDelay() {
          await new Promise(
            (resolve) => setTimeout(resolve, 1e3)
          );
          window.location.href = route("Posts");
        }
        redirectWithDelay();
      }).catch((error) => {
        console.log(error);
      });
    }
  }
};
AOS.init({ startEvent: "load", once: "true," });
AOS.refresh();
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "Posts",
  __ssrInlineRender: true,
  setup(__props) {
    library.add(faPlus);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$2, _attrs, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-bold text-3xl leading-tight text-theme1"${_scopeId}> Manage Post </h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-bold text-3xl leading-tight text-theme1" }, " Manage Post ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-8 postcontainer overflow-y-hidden h-max min-h-screen"${_scopeId}><a href="/PostsEditor"${_scopeId}><button class="xl:ml-16 my-4 mx-8 px-6 py-2 rounded-md bg-theme1 transition duration-150 border border-black text-theme2 hover:scale-110 hover:-translate-y-1"${_scopeId}> Add Post `);
            _push2(ssrRenderComponent(unref(FontAwesomeIcon), {
              icon: "fa-solid fa-plus",
              class: "pl-2 hover:text-white"
            }, null, _parent2, _scopeId));
            _push2(`</button></a><div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-1 h-max overflow-y-hidden" data-aos="fade-up" data-aos-duration="1000"${_scopeId}><div class="max-w-7xl bg-white xl:px-8 xl:py-4 py-4 rounded-sm grid grid-cols-9 gap-4 xl:text-xs text-[10px] xl:text-md"${_scopeId}><div class="flex justify-center text-center items-center col-span-1"${_scopeId}> IMAGE </div><div class="flex justify-center text-center items-center col-span-1"${_scopeId}> TITLE </div><div class="flex justify-center text-center items-center col-span-1"${_scopeId}> DESCRIPTION </div><div class="flex justify-center text-center items-center col-span-3"${_scopeId}> CONTEXT </div><div class="flex justify-center text-center items-center col-span-1"${_scopeId}> DATE CREATED </div><div class="flex justify-center text-center items-center col-span-1"${_scopeId}></div><div class="flex justify-center text-center items-center col-span-1"${_scopeId}></div></div><!--[-->`);
            ssrRenderList(_ctx.items, (item, index) => {
              _push2(`<!--[-->`);
              _push2(ssrRenderComponent(PostsTile, {
                description: item.Description,
                image: item.avatar.ImageUrl,
                title: item.newsTitle,
                context: _ctx.sliceText(item.Context, 150),
                date_created: item.news_DateCreated,
                class: "xl:text-xs text-[9px]",
                "data-aos": "fade-up",
                "data-aos-duration": "500"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex justify-center text-center items-center col-span-1"${_scopeId2}><button button class="py-2 px-8 rounded-full bg-blue-400 xl:rounded-lg text-white text-[11px] xl:text-md transition duration-300 hover:text-blue-400 hover:bg-white border-2 border-blue-400"${_scopeId2}> Edit </button></div><div class="flex justify-center text-center items-center col-span-1"${_scopeId2}><button class="transition duration-300 hover:text-red-500 hover:bg-white py-2 px-6 rounded-full bg-red-500 xl:rounded-lg text-white text-[11px] xl:text-md border-2 border-red-500"${_scopeId2}> Delete </button></div>`);
                    _push3(ssrRenderComponent(_sfc_main$3, {
                      show: _ctx.showModal,
                      onClose: ($event) => _ctx.showModal = false
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<h2 class="text-black text-l"${_scopeId3}> Are You Sure You Want to Delete Post <br${_scopeId3}><span class="text-theme1"${_scopeId3}>${ssrInterpolate(_ctx.confirmname)}</span>? </h2><br${_scopeId3}><button class="transition duration-300 rounded-lg hover:text-red-500 hover:bg-white border border-red-500 px-4 py-4 bg-red-500 text-white mx-2 text-sm"${_scopeId3}> CONFIRM </button><button class="transition duration-300 rounded-lg hover:text-black hover:bg-white border border-zinc-400 px-4 py-4 bg-zinc-400 text-white mx-2 text-sm"${_scopeId3}> CANCEL </button>`);
                        } else {
                          return [
                            createVNode("h2", { class: "text-black text-l" }, [
                              createTextVNode(" Are You Sure You Want to Delete Post "),
                              createVNode("br"),
                              createVNode("span", { class: "text-theme1" }, toDisplayString(_ctx.confirmname), 1),
                              createTextVNode("? ")
                            ]),
                            createVNode("br"),
                            createVNode("button", {
                              onClick: withModifiers(($event) => _ctx.navigatetoDelete(), ["prevent"]),
                              class: "transition duration-300 rounded-lg hover:text-red-500 hover:bg-white border border-red-500 px-4 py-4 bg-red-500 text-white mx-2 text-sm"
                            }, " CONFIRM ", 8, ["onClick"]),
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
                          onClick: ($event) => _ctx.navigateToUpdate(item.Postid),
                          class: "py-2 px-8 rounded-full bg-blue-400 xl:rounded-lg text-white text-[11px] xl:text-md transition duration-300 hover:text-blue-400 hover:bg-white border-2 border-blue-400"
                        }, " Edit ", 8, ["onClick"])
                      ]),
                      createVNode("div", { class: "flex justify-center text-center items-center col-span-1" }, [
                        createVNode("button", {
                          onClick: withModifiers(($event) => _ctx.confirmdel(item), ["prevent"]),
                          class: "transition duration-300 hover:text-red-500 hover:bg-white py-2 px-6 rounded-full bg-red-500 xl:rounded-lg text-white text-[11px] xl:text-md border-2 border-red-500"
                        }, " Delete ", 8, ["onClick"])
                      ]),
                      createVNode(_sfc_main$3, {
                        show: _ctx.showModal,
                        onClose: ($event) => _ctx.showModal = false
                      }, {
                        default: withCtx(() => [
                          createVNode("h2", { class: "text-black text-l" }, [
                            createTextVNode(" Are You Sure You Want to Delete Post "),
                            createVNode("br"),
                            createVNode("span", { class: "text-theme1" }, toDisplayString(_ctx.confirmname), 1),
                            createTextVNode("? ")
                          ]),
                          createVNode("br"),
                          createVNode("button", {
                            onClick: withModifiers(($event) => _ctx.navigatetoDelete(), ["prevent"]),
                            class: "transition duration-300 rounded-lg hover:text-red-500 hover:bg-white border border-red-500 px-4 py-4 bg-red-500 text-white mx-2 text-sm"
                          }, " CONFIRM ", 8, ["onClick"]),
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
                    _push3(`<h2 class="text-red-500 text-2xl"${_scopeId2}>Delete Post</h2><p class="text-theme2 text-4xl mb-5"${_scopeId2}>Success!</p>`);
                  } else {
                    return [
                      createVNode("h2", { class: "text-red-500 text-2xl" }, "Delete Post"),
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
                createVNode("a", { href: "/PostsEditor" }, [
                  createVNode("button", { class: "xl:ml-16 my-4 mx-8 px-6 py-2 rounded-md bg-theme1 transition duration-150 border border-black text-theme2 hover:scale-110 hover:-translate-y-1" }, [
                    createTextVNode(" Add Post "),
                    createVNode(unref(FontAwesomeIcon), {
                      icon: "fa-solid fa-plus",
                      class: "pl-2 hover:text-white"
                    })
                  ])
                ]),
                createVNode("div", {
                  class: "max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-1 h-max overflow-y-hidden",
                  "data-aos": "fade-up",
                  "data-aos-duration": "1000"
                }, [
                  createVNode("div", { class: "max-w-7xl bg-white xl:px-8 xl:py-4 py-4 rounded-sm grid grid-cols-9 gap-4 xl:text-xs text-[10px] xl:text-md" }, [
                    createVNode("div", { class: "flex justify-center text-center items-center col-span-1" }, " IMAGE "),
                    createVNode("div", { class: "flex justify-center text-center items-center col-span-1" }, " TITLE "),
                    createVNode("div", { class: "flex justify-center text-center items-center col-span-1" }, " DESCRIPTION "),
                    createVNode("div", { class: "flex justify-center text-center items-center col-span-3" }, " CONTEXT "),
                    createVNode("div", { class: "flex justify-center text-center items-center col-span-1" }, " DATE CREATED "),
                    createVNode("div", { class: "flex justify-center text-center items-center col-span-1" }),
                    createVNode("div", { class: "flex justify-center text-center items-center col-span-1" })
                  ]),
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item, index) => {
                    return openBlock(), createBlock(Fragment, {
                      key: item.Postid
                    }, [
                      createVNode(PostsTile, {
                        description: item.Description,
                        image: item.avatar.ImageUrl,
                        title: item.newsTitle,
                        context: _ctx.sliceText(item.Context, 150),
                        date_created: item.news_DateCreated,
                        class: "xl:text-xs text-[9px]",
                        "data-aos": "fade-up",
                        "data-aos-duration": "500"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex justify-center text-center items-center col-span-1" }, [
                            createVNode("button", {
                              button: "",
                              onClick: ($event) => _ctx.navigateToUpdate(item.Postid),
                              class: "py-2 px-8 rounded-full bg-blue-400 xl:rounded-lg text-white text-[11px] xl:text-md transition duration-300 hover:text-blue-400 hover:bg-white border-2 border-blue-400"
                            }, " Edit ", 8, ["onClick"])
                          ]),
                          createVNode("div", { class: "flex justify-center text-center items-center col-span-1" }, [
                            createVNode("button", {
                              onClick: withModifiers(($event) => _ctx.confirmdel(item), ["prevent"]),
                              class: "transition duration-300 hover:text-red-500 hover:bg-white py-2 px-6 rounded-full bg-red-500 xl:rounded-lg text-white text-[11px] xl:text-md border-2 border-red-500"
                            }, " Delete ", 8, ["onClick"])
                          ]),
                          createVNode(_sfc_main$3, {
                            show: _ctx.showModal,
                            onClose: ($event) => _ctx.showModal = false
                          }, {
                            default: withCtx(() => [
                              createVNode("h2", { class: "text-black text-l" }, [
                                createTextVNode(" Are You Sure You Want to Delete Post "),
                                createVNode("br"),
                                createVNode("span", { class: "text-theme1" }, toDisplayString(_ctx.confirmname), 1),
                                createTextVNode("? ")
                              ]),
                              createVNode("br"),
                              createVNode("button", {
                                onClick: withModifiers(($event) => _ctx.navigatetoDelete(), ["prevent"]),
                                class: "transition duration-300 rounded-lg hover:text-red-500 hover:bg-white border border-red-500 px-4 py-4 bg-red-500 text-white mx-2 text-sm"
                              }, " CONFIRM ", 8, ["onClick"]),
                              createVNode("button", {
                                class: "transition duration-300 rounded-lg hover:text-black hover:bg-white border border-zinc-400 px-4 py-4 bg-zinc-400 text-white mx-2 text-sm",
                                onClick: ($event) => _ctx.showModal = false
                              }, " CANCEL ", 8, ["onClick"])
                            ]),
                            _: 1
                          }, 8, ["show", "onClose"])
                        ]),
                        _: 2
                      }, 1032, ["description", "image", "title", "context", "date_created"]),
                      createVNode(_sfc_main$4, {
                        show: _ctx.confirmdelmodal,
                        onClose: ($event) => _ctx.confirmdelmodal = false
                      }, {
                        default: withCtx(() => [
                          createVNode("h2", { class: "text-red-500 text-2xl" }, "Delete Post"),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Posts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
