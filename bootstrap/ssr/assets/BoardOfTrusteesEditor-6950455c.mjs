import { withCtx, createVNode, createTextVNode, withModifiers, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-5e65d435.mjs";
import "./InputError-8978c575.mjs";
import { _ as _sfc_main$2 } from "./TextInput-f98eb51f.mjs";
import { _ as _sfc_main$3 } from "./InputLabel-cd393c3d.mjs";
import AOS from "aos";
import "../app.mjs";
import { _ as _sfc_main$4 } from "./Modal-7cee2fea.mjs";
import axios from "axios";
import { B as BASE_URL } from "./baseurl-7bfc5f79.mjs";
import "./ApplicationLogo-93b063e1.mjs";
import "@inertiajs/vue3";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/vue-fontawesome";
import "@fortawesome/free-solid-svg-icons";
const BoardOfTrusteesEditor_vue_vue_type_style_index_0_lang = "";
const __default__ = {
  data() {
    return {
      imagePreviewUrl: null,
      imagePreviewUrlholder: null,
      firstname: "",
      lastname: "",
      prefix: "",
      suffix: "",
      position: "",
      address: "",
      start_date: "",
      end_date: "",
      showModal: false
    };
  },
  methods: {
    uploadFile(event) {
      this.imagePreviewUrlholder = this.imagePreviewUrl;
      this.imagePreviewUrl = this.$refs.file.files[0];
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (event2) => {
        this.imagePreviewUrlholder = event2.target.result;
      };
      reader.readAsDataURL(file);
    },
    submitData() {
      const formData = new FormData();
      formData.append("file", this.imagePreviewUrl);
      formData.append("Fname", this.firstname);
      formData.append("Lname", this.lastname);
      formData.append("Address", this.address);
      formData.append("Prefix", this.prefix);
      formData.append("Suffix", this.suffix);
      formData.append("Position", this.position);
      formData.append("startDate", this.start_date);
      formData.append("endDate", this.end_date);
      axios.post(BASE_URL + "/storeBOD", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then((response) => {
        console.log(response);
        this.showModal = true;
        async function redirectWithDelay() {
          await new Promise((resolve) => setTimeout(resolve, 1e3));
          window.location.href = route("BoardOfTrustees");
        }
        redirectWithDelay();
      }).catch((error) => {
        console.log(error);
      });
      this.imagePreviewUrl = "";
      this.imagePreviewUrlholder = "";
      this.firstname = "";
      this.lastname = "";
      this.prefix = "";
      this.suffix = "";
      this.position = "";
      this.address = "";
      this.start_date = "";
      this.end_date = "";
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
  __name: "BoardOfTrusteesEditor",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-3xl text-theme1 leading-tight h-4 mb-4"${_scopeId}>Member Editor </h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-3xl text-theme1 leading-tight h-4 mb-4" }, "Member Editor ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class=""${_scopeId}></div><div class="postcontainer flex justify-center h-max w-screen xl:px-10 xl:pb-96 py-20"${_scopeId}><div class="xl:w-3/4 w-4/5 xl:mt-16 overflow-y-hidden"${_scopeId}><form${_scopeId}><button class="mt-16 border border-white w-24 text-white py-2 px-4 bg-green-800 rounded-lg mb-10 hover:bg-green-600 transition ease-in duration-100"${_scopeId}>Save</button><div class="overflow-y-hidden space-x-2"${_scopeId}><div class="text-white xl:h-20 w-max flex justify-center items-center" data-aos="fade-up" data-aos-duration="1500"${_scopeId}><label for="img" class="text-2xl text-white rounded-2xl border-theme2 py-5 px-5 border-dashed border-2 hover:border-white hover:text-theme2 transiton duration-300"${_scopeId}>Upload Image<br${_scopeId}></label><input type="file" accept="image/*" id="img" required${_scopeId}></div><div class="text-white flex" data-aos="fade-up" data-aos-duration="1500"${_scopeId}>`);
            if (_ctx.imagePreviewUrlholder) {
              _push2(`<div${_scopeId}><img${ssrRenderAttr("src", _ctx.imagePreviewUrlholder)} class="h-60 w-40 object-cover my-5 mx-5"${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              id: "prefix",
              name: "prefix",
              type: "text",
              class: "mt-4 py-2 px-2 max-w-4xl w-66 focus:ring-yellow-500 active:ring-yellow-500",
              autocomplete: "",
              placeholder: "Prefix",
              modelValue: _ctx.prefix,
              "onUpdate:modelValue": ($event) => _ctx.prefix = $event,
              "data-aos": "fade-up",
              "data-aos-duration": "1300",
              onClick: () => {
              }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              id: "firstname",
              name: "firstname",
              type: "text",
              class: "mt-4 py-2 px-2 max-w-4xl w-66 focus:ring-yellow-500 active:ring-yellow-500",
              required: "",
              autocomplete: "current-title",
              placeholder: "Firstname",
              modelValue: _ctx.firstname,
              "onUpdate:modelValue": ($event) => _ctx.firstname = $event,
              "data-aos": "fade-up",
              "data-aos-duration": "1300",
              onClick: () => {
              }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              id: "lastname",
              name: "lastname",
              type: "text",
              class: "mt-4 py-2 px-2 max-w-4xl w-66 focus:ring-yellow-500 active:ring-yellow-500",
              required: "",
              autocomplete: "Lname",
              placeholder: "Lastname",
              modelValue: _ctx.lastname,
              "onUpdate:modelValue": ($event) => _ctx.lastname = $event,
              "data-aos": "fade-up",
              "data-aos-duration": "1300",
              onClick: () => {
              }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              id: "suffix",
              name: "suffix",
              type: "text",
              class: "mt-4 py-2 px-2 max-w-4xl w-66 focus:ring-yellow-500 active:ring-yellow-500",
              autocomplete: "Suffix",
              placeholder: "Suffix",
              modelValue: _ctx.suffix,
              "onUpdate:modelValue": ($event) => _ctx.suffix = $event,
              "data-aos": "fade-up",
              "data-aos-duration": "1300",
              onClick: () => {
              }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              id: "position",
              name: "position",
              type: "text",
              class: "mt-4 py-2 px-2 max-w-4xl w-66 focus:ring-yellow-500 active:ring-yellow-500",
              required: "",
              autocomplete: "",
              placeholder: "Position",
              modelValue: _ctx.position,
              "onUpdate:modelValue": ($event) => _ctx.position = $event,
              "data-aos": "fade-up",
              "data-aos-duration": "1300",
              onClick: () => {
              }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              id: "address",
              name: "address",
              type: "text",
              class: "mt-4 py-2 px-2 max-w-4xl w-66 focus:ring-yellow-500 active:ring-yellow-500",
              required: "",
              autocomplete: "",
              placeholder: "Address",
              modelValue: _ctx.address,
              "onUpdate:modelValue": ($event) => _ctx.address = $event,
              "data-aos": "fade-up",
              "data-aos-duration": "1300",
              onClick: () => {
              }
            }, null, _parent2, _scopeId));
            _push2(`<br${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              id: "start_date",
              name: "start_date",
              type: "date",
              class: "mt-4 py-2 px-2 max-w-4xl w-66 focus:ring-yellow-500 active:ring-yellow-500",
              required: "",
              autocomplete: "",
              placeholder: "Start Date",
              modelValue: _ctx.start_date,
              "onUpdate:modelValue": ($event) => _ctx.start_date = $event,
              "data-aos": "fade-up",
              "data-aos-duration": "1300",
              onClick: () => {
              }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, { onClick: () => {
            } }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Start Date`);
                } else {
                  return [
                    createTextVNode("Start Date")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              id: "end_date",
              name: "end_date",
              type: "date",
              class: "mt-4 py-2 px-2 max-w-4xl w-66 focus:ring-yellow-500 active:ring-yellow-500",
              required: "",
              autocomplete: "",
              placeholder: "End Date",
              modelValue: _ctx.end_date,
              "onUpdate:modelValue": ($event) => _ctx.end_date = $event,
              "data-aos": "fade-up",
              "data-aos-duration": "1300",
              onClick: () => {
              }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`End Date`);
                } else {
                  return [
                    createTextVNode("End Date")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              show: _ctx.showModal,
              onClose: ($event) => _ctx.showModal = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h2 class="text-theme1 text-2xl"${_scopeId2}>Added Board of Trustees</h2><p class="text-theme2 text-4xl mb-5"${_scopeId2}>Success!</p>`);
                } else {
                  return [
                    createVNode("h2", { class: "text-theme1 text-2xl" }, "Added Board of Trustees"),
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
              createVNode("div", { class: "postcontainer flex justify-center h-max w-screen xl:px-10 xl:pb-96 py-20" }, [
                createVNode("div", { class: "xl:w-3/4 w-4/5 xl:mt-16 overflow-y-hidden" }, [
                  createVNode("form", {
                    onSubmit: withModifiers(_ctx.submitData, ["prevent"])
                  }, [
                    createVNode("button", { class: "mt-16 border border-white w-24 text-white py-2 px-4 bg-green-800 rounded-lg mb-10 hover:bg-green-600 transition ease-in duration-100" }, "Save"),
                    createVNode("div", { class: "overflow-y-hidden space-x-2" }, [
                      createVNode("div", {
                        class: "text-white xl:h-20 w-max flex justify-center items-center",
                        "data-aos": "fade-up",
                        "data-aos-duration": "1500"
                      }, [
                        createVNode("label", {
                          for: "img",
                          class: "text-2xl text-white rounded-2xl border-theme2 py-5 px-5 border-dashed border-2 hover:border-white hover:text-theme2 transiton duration-300"
                        }, [
                          createTextVNode("Upload Image"),
                          createVNode("br")
                        ]),
                        createVNode("input", {
                          type: "file",
                          accept: "image/*",
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
                        _ctx.imagePreviewUrlholder ? (openBlock(), createBlock("div", { key: 0 }, [
                          createVNode("img", {
                            src: _ctx.imagePreviewUrlholder,
                            class: "h-60 w-40 object-cover my-5 mx-5"
                          }, null, 8, ["src"])
                        ])) : createCommentVNode("", true)
                      ]),
                      createVNode(_sfc_main$2, {
                        id: "prefix",
                        name: "prefix",
                        type: "text",
                        class: "mt-4 py-2 px-2 max-w-4xl w-66 focus:ring-yellow-500 active:ring-yellow-500",
                        autocomplete: "",
                        placeholder: "Prefix",
                        modelValue: _ctx.prefix,
                        "onUpdate:modelValue": ($event) => _ctx.prefix = $event,
                        "data-aos": "fade-up",
                        "data-aos-duration": "1300",
                        onClick: withModifiers(() => {
                        }, ["stop"])
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "onClick"]),
                      createVNode(_sfc_main$2, {
                        id: "firstname",
                        name: "firstname",
                        type: "text",
                        class: "mt-4 py-2 px-2 max-w-4xl w-66 focus:ring-yellow-500 active:ring-yellow-500",
                        required: "",
                        autocomplete: "current-title",
                        placeholder: "Firstname",
                        modelValue: _ctx.firstname,
                        "onUpdate:modelValue": ($event) => _ctx.firstname = $event,
                        "data-aos": "fade-up",
                        "data-aos-duration": "1300",
                        onClick: withModifiers(() => {
                        }, ["stop"])
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "onClick"]),
                      createVNode(_sfc_main$2, {
                        id: "lastname",
                        name: "lastname",
                        type: "text",
                        class: "mt-4 py-2 px-2 max-w-4xl w-66 focus:ring-yellow-500 active:ring-yellow-500",
                        required: "",
                        autocomplete: "Lname",
                        placeholder: "Lastname",
                        modelValue: _ctx.lastname,
                        "onUpdate:modelValue": ($event) => _ctx.lastname = $event,
                        "data-aos": "fade-up",
                        "data-aos-duration": "1300",
                        onClick: withModifiers(() => {
                        }, ["stop"])
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "onClick"]),
                      createVNode(_sfc_main$2, {
                        id: "suffix",
                        name: "suffix",
                        type: "text",
                        class: "mt-4 py-2 px-2 max-w-4xl w-66 focus:ring-yellow-500 active:ring-yellow-500",
                        autocomplete: "Suffix",
                        placeholder: "Suffix",
                        modelValue: _ctx.suffix,
                        "onUpdate:modelValue": ($event) => _ctx.suffix = $event,
                        "data-aos": "fade-up",
                        "data-aos-duration": "1300",
                        onClick: withModifiers(() => {
                        }, ["stop"])
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "onClick"]),
                      createVNode(_sfc_main$2, {
                        id: "position",
                        name: "position",
                        type: "text",
                        class: "mt-4 py-2 px-2 max-w-4xl w-66 focus:ring-yellow-500 active:ring-yellow-500",
                        required: "",
                        autocomplete: "",
                        placeholder: "Position",
                        modelValue: _ctx.position,
                        "onUpdate:modelValue": ($event) => _ctx.position = $event,
                        "data-aos": "fade-up",
                        "data-aos-duration": "1300",
                        onClick: withModifiers(() => {
                        }, ["stop"])
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "onClick"]),
                      createVNode(_sfc_main$2, {
                        id: "address",
                        name: "address",
                        type: "text",
                        class: "mt-4 py-2 px-2 max-w-4xl w-66 focus:ring-yellow-500 active:ring-yellow-500",
                        required: "",
                        autocomplete: "",
                        placeholder: "Address",
                        modelValue: _ctx.address,
                        "onUpdate:modelValue": ($event) => _ctx.address = $event,
                        "data-aos": "fade-up",
                        "data-aos-duration": "1300",
                        onClick: withModifiers(() => {
                        }, ["stop"])
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "onClick"]),
                      createVNode("br"),
                      createVNode(_sfc_main$2, {
                        id: "start_date",
                        name: "start_date",
                        type: "date",
                        class: "mt-4 py-2 px-2 max-w-4xl w-66 focus:ring-yellow-500 active:ring-yellow-500",
                        required: "",
                        autocomplete: "",
                        placeholder: "Start Date",
                        modelValue: _ctx.start_date,
                        "onUpdate:modelValue": ($event) => _ctx.start_date = $event,
                        "data-aos": "fade-up",
                        "data-aos-duration": "1300",
                        onClick: withModifiers(() => {
                        }, ["stop"])
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "onClick"]),
                      createVNode(_sfc_main$3, {
                        onClick: withModifiers(() => {
                        }, ["stop"])
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Start Date")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_sfc_main$2, {
                        id: "end_date",
                        name: "end_date",
                        type: "date",
                        class: "mt-4 py-2 px-2 max-w-4xl w-66 focus:ring-yellow-500 active:ring-yellow-500",
                        required: "",
                        autocomplete: "",
                        placeholder: "End Date",
                        modelValue: _ctx.end_date,
                        "onUpdate:modelValue": ($event) => _ctx.end_date = $event,
                        "data-aos": "fade-up",
                        "data-aos-duration": "1300",
                        onClick: withModifiers(() => {
                        }, ["stop"])
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "onClick"]),
                      createVNode(_sfc_main$3, null, {
                        default: withCtx(() => [
                          createTextVNode("End Date")
                        ]),
                        _: 1
                      })
                    ]),
                    createVNode(_sfc_main$4, {
                      show: _ctx.showModal,
                      onClose: ($event) => _ctx.showModal = false
                    }, {
                      default: withCtx(() => [
                        createVNode("h2", { class: "text-theme1 text-2xl" }, "Added Board of Trustees"),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Editor/BoardOfTrusteesEditor.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
