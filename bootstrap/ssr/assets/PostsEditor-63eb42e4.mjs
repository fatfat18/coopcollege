import { withCtx, createVNode, withModifiers, createTextVNode, openBlock, createBlock, Fragment, renderList, withDirectives, vModelText, toDisplayString, vModelSelect, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-5e65d435.mjs";
import "./InputError-8978c575.mjs";
import { _ as _sfc_main$2 } from "./TextInput-f98eb51f.mjs";
import AOS from "aos";
import "../app.mjs";
import "./InputLabel-cd393c3d.mjs";
import { _ as _sfc_main$3 } from "./Modal-7cee2fea.mjs";
import { B as BASE_URL } from "./baseurl-7bfc5f79.mjs";
import "./ApplicationLogo-93b063e1.mjs";
import "@inertiajs/vue3";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/vue-fontawesome";
import "@fortawesome/free-solid-svg-icons";
import "axios";
const PostsEditor_vue_vue_type_style_index_0_lang = "";
const __default__ = {
  data() {
    return {
      imagePreviewUrl: [],
      imagePreviewUrlholder: [],
      posttype: null,
      idUser: 1,
      description: "",
      title: "",
      context: "",
      items: [],
      showModal: false
    };
  },
  mounted() {
    axios.get(BASE_URL + "/postCategory").then((response) => {
      this.items = response.data;
    }).catch((error) => {
      console.log(error);
    });
  },
  methods: {
    uploadFile(event) {
      console.log(this.imagePreviewUrlholder);
      const files = event.target.files;
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        reader.onload = (event2) => {
          this.imagePreviewUrlholder.push(event2.target.result);
        };
        reader.readAsDataURL(file);
      }
      const images = this.$refs.file.files;
      for (let i = 0; i < images.length; i++) {
        const image = images[i];
        this.imagePreviewUrl.push(image);
      }
      console.log(this.imagePreviewUrl);
    },
    submitData() {
      const formData = new FormData();
      for (let i = 0; i < this.imagePreviewUrl.length; i++) {
        const key = `file[${i}]`;
        formData.append(key, this.imagePreviewUrl[i]);
      }
      formData.append("PostCatId", this.posttype);
      formData.append("idUser", this.idUser);
      formData.append("Description", this.description);
      formData.append("newsTitle", this.title);
      formData.append("Context", this.context);
      axios.post(BASE_URL + "/storePost", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then((response) => {
        console.log(response);
        this.showModal = true;
        async function redirectWithDelay() {
          await new Promise((resolve) => setTimeout(resolve, 1e3));
          window.location.href = route("Posts");
        }
        redirectWithDelay();
      }).catch((error) => {
        console.log(error);
      });
      this.imagePreviewUrl = "";
      this.imagePreviewUrlholder = "";
      this.posttype = "";
      this.idUser = 1;
      this.description = "";
      this.title = "";
      this.context = "";
      this.date_created = "";
    },
    closeModal() {
      this.showModal = false;
    }
  }
};
AOS.init({
  startEvent: "load",
  once: "true,"
});
AOS.refresh();
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "PostsEditor",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-3xl text-theme1 leading-tight h-4 mb-4"${_scopeId}>Post Editor </h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-3xl text-theme1 leading-tight h-4 mb-4" }, "Post Editor ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class=""${_scopeId}></div><div class="postcontainer flex justify-center h-max w-screen xl:px-10 xl:pb-96 py-20 overflow-y-hidden"${_scopeId}><div class="xl:w-3/4 w-4/5 h-max xl:mt-4"${_scopeId}><form${_scopeId}><button class="mt-16 border border-white w-24 text-white py-2 px-4 bg-green-800 rounded-lg mb-10 hover:bg-green-600 transition ease-in duration-100"${_scopeId}>Save</button><div class="text-white xl:h-20 w-max flex justify-center items-center" data-aos="fade-up" data-aos-duration="1500"${_scopeId}><label for="img" class="text-2xl text-white rounded-2xl border-theme2 py-5 px-5 border-dashed border-2 hover:border-white hover:text-theme2 transiton duration-300"${_scopeId}>Upload Images<br${_scopeId}></label><input type="file" accept="image/*" multiple id="img" required${_scopeId}></div><div class="text-white flex" data-aos="fade-up" data-aos-duration="1500"${_scopeId}><!--[-->`);
            ssrRenderList(_ctx.imagePreviewUrlholder, (imageUrl) => {
              _push2(`<div${_scopeId}><img${ssrRenderAttr("src", imageUrl)} class="h-32 w-40 object-cover my-5 mx-5"${_scopeId}></div>`);
            });
            _push2(`<!--]--></div><div class="overflow-y-hidden"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              id: "title",
              name: "title",
              type: "text",
              class: "mt-4 py-2 px-2 w-full focus:ring-yellow-500 active:ring-yellow-500",
              required: "",
              autocomplete: "current-title",
              placeholder: "Title",
              modelValue: _ctx.title,
              "onUpdate:modelValue": ($event) => _ctx.title = $event,
              "data-aos": "fade-up",
              "data-aos-duration": "1300"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              id: "description",
              name: "description",
              type: "text",
              class: "mt-2 py-2 px-2 w-full focus:ring-yellow-500 active:ring-yellow-500",
              required: "",
              autocomplete: "current-description",
              placeholder: "Description",
              modelValue: _ctx.description,
              "onUpdate:modelValue": ($event) => _ctx.description = $event,
              "data-aos": "fade-up",
              "data-aos-duration": "1000"
            }, null, _parent2, _scopeId));
            _push2(`<textarea id="context" name="context" type="text" class="mt-2 h-72 py-2 px-2 block w-full rounded-lg focus:ring-yellow-500 active:ring-yellow-500" required autocomplete="current-Context" placeholder="Context" data-aos="fade-up" data-aos-duration="1000"${_scopeId}>${ssrInterpolate(_ctx.context)}</textarea><select class="mt-4" name="posttype"${_scopeId}><option hidden${_scopeId}>Post Type</option><!--[-->`);
            ssrRenderList(_ctx.items, (item) => {
              _push2(`<option${ssrRenderAttr("value", item.PostCatId)}${_scopeId}>${ssrInterpolate(item.category)}</option>`);
            });
            _push2(`<!--]--></select></div>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              show: _ctx.showModal,
              onClose: ($event) => _ctx.showModal = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h2 class="text-theme1 text-2xl"${_scopeId2}>Added Post</h2><p class="text-theme2 text-4xl mb-5"${_scopeId2}>Success!</p>`);
                } else {
                  return [
                    createVNode("h2", { class: "text-theme1 text-2xl" }, "Added Post"),
                    createVNode("p", { class: "text-theme2 text-4xl mb-5" }, "Success!")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</form></div></div>`);
          } else {
            return [
              createVNode("div", { class: "" }),
              createVNode("div", { class: "postcontainer flex justify-center h-max w-screen xl:px-10 xl:pb-96 py-20 overflow-y-hidden" }, [
                createVNode("div", { class: "xl:w-3/4 w-4/5 h-max xl:mt-4" }, [
                  createVNode("form", {
                    onSubmit: withModifiers(_ctx.submitData, ["prevent"])
                  }, [
                    createVNode("button", { class: "mt-16 border border-white w-24 text-white py-2 px-4 bg-green-800 rounded-lg mb-10 hover:bg-green-600 transition ease-in duration-100" }, "Save"),
                    createVNode("div", {
                      class: "text-white xl:h-20 w-max flex justify-center items-center",
                      "data-aos": "fade-up",
                      "data-aos-duration": "1500"
                    }, [
                      createVNode("label", {
                        for: "img",
                        class: "text-2xl text-white rounded-2xl border-theme2 py-5 px-5 border-dashed border-2 hover:border-white hover:text-theme2 transiton duration-300"
                      }, [
                        createTextVNode("Upload Images"),
                        createVNode("br")
                      ]),
                      createVNode("input", {
                        type: "file",
                        accept: "image/*",
                        multiple: "",
                        onChange: _ctx.uploadFile,
                        id: "img",
                        ref: "file",
                        required: ""
                      }, null, 40, ["onChange"])
                    ]),
                    createVNode("div", {
                      class: "text-white flex",
                      "data-aos": "fade-up",
                      "data-aos-duration": "1500"
                    }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.imagePreviewUrlholder, (imageUrl) => {
                        return openBlock(), createBlock("div", { key: imageUrl }, [
                          createVNode("img", {
                            src: imageUrl,
                            class: "h-32 w-40 object-cover my-5 mx-5"
                          }, null, 8, ["src"])
                        ]);
                      }), 128))
                    ]),
                    createVNode("div", { class: "overflow-y-hidden" }, [
                      createVNode(_sfc_main$2, {
                        id: "title",
                        name: "title",
                        type: "text",
                        class: "mt-4 py-2 px-2 w-full focus:ring-yellow-500 active:ring-yellow-500",
                        required: "",
                        autocomplete: "current-title",
                        placeholder: "Title",
                        modelValue: _ctx.title,
                        "onUpdate:modelValue": ($event) => _ctx.title = $event,
                        "data-aos": "fade-up",
                        "data-aos-duration": "1300"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_sfc_main$2, {
                        id: "description",
                        name: "description",
                        type: "text",
                        class: "mt-2 py-2 px-2 w-full focus:ring-yellow-500 active:ring-yellow-500",
                        required: "",
                        autocomplete: "current-description",
                        placeholder: "Description",
                        modelValue: _ctx.description,
                        "onUpdate:modelValue": ($event) => _ctx.description = $event,
                        "data-aos": "fade-up",
                        "data-aos-duration": "1000"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      withDirectives(createVNode("textarea", {
                        id: "context",
                        name: "context",
                        type: "text",
                        class: "mt-2 h-72 py-2 px-2 block w-full rounded-lg focus:ring-yellow-500 active:ring-yellow-500",
                        required: "",
                        autocomplete: "current-Context",
                        placeholder: "Context",
                        "onUpdate:modelValue": ($event) => _ctx.context = $event,
                        "data-aos": "fade-up",
                        "data-aos-duration": "1000"
                      }, "\n                            \n                                ", 8, ["onUpdate:modelValue"]), [
                        [vModelText, _ctx.context]
                      ]),
                      withDirectives(createVNode("select", {
                        class: "mt-4",
                        "onUpdate:modelValue": ($event) => _ctx.posttype = $event,
                        name: "posttype"
                      }, [
                        createVNode("option", { hidden: "" }, "Post Type"),
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.items, (item) => {
                          return openBlock(), createBlock("option", {
                            key: item.postCatId,
                            value: item.PostCatId
                          }, toDisplayString(item.category), 9, ["value"]);
                        }), 128))
                      ], 8, ["onUpdate:modelValue"]), [
                        [vModelSelect, _ctx.posttype]
                      ])
                    ]),
                    createVNode(_sfc_main$3, {
                      show: _ctx.showModal,
                      onClose: ($event) => _ctx.showModal = false
                    }, {
                      default: withCtx(() => [
                        createVNode("h2", { class: "text-theme1 text-2xl" }, "Added Post"),
                        createVNode("p", { class: "text-theme2 text-4xl mb-5" }, "Success!")
                      ]),
                      _: 1
                    }, 8, ["show", "onClose"])
                  ], 40, ["onSubmit"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Editor/PostsEditor.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
