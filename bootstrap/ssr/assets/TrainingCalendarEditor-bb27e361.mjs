import { withCtx, createVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AuthenticatedLayout-5e65d435.mjs";
import "./InputError-8978c575.mjs";
import { _ as _sfc_main$2 } from "./TextInput-f98eb51f.mjs";
import AOS from "aos";
import "../app.mjs";
import axios from "axios";
import { _ as _sfc_main$3 } from "./Modal-7cee2fea.mjs";
import { B as BASE_URL } from "./baseurl-7bfc5f79.mjs";
import "./ApplicationLogo-93b063e1.mjs";
import "@inertiajs/vue3";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/vue-fontawesome";
import "@fortawesome/free-solid-svg-icons";
const TrainingCalendarEditor_vue_vue_type_style_index_0_lang = "";
const __default__ = {
  components: {
    Modal: _sfc_main$3
  },
  data() {
    return {
      month_num: "",
      month: "",
      course_title: "",
      year: "",
      venue: "",
      showModal: false,
      items: []
    };
  },
  methods: {
    submitData() {
      this.showModal = true;
      const formData = new FormData();
      let no = parseInt(this.month_num);
      formData.append("month_num", no);
      formData.append("month", this.month);
      formData.append("courseTitle", this.course_title);
      formData.append("year", this.year);
      formData.append("venue", this.venue);
      axios.post(BASE_URL + "/storeCalendarTraining", formData, {}).then((response) => {
        console.log(response);
      }).catch((error) => {
        console.log(error);
      });
      this.showModal = true;
      console.log(this.showModal);
      async function redirectWithDelay() {
        await new Promise((resolve) => setTimeout(resolve, 1e3));
        window.location.href = route("TrainingCalendar");
      }
      redirectWithDelay();
      this.month_num = "";
      this.month = "";
      this.course_title = "";
      this.year = "";
      this.venue = "";
    },
    closeModal() {
      this.showModal = false;
    }
  }
};
AOS.init();
AOS.refresh();
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "TrainingCalendarEditor",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-3xl text-theme1 leading-tight h-4 mb-4"${_scopeId}>Training Calendar Editor </h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-3xl text-theme1 leading-tight h-4 mb-4" }, "Training Calendar Editor ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class=""${_scopeId}></div><div class="postcontainer flex justify-center h-screen w-screen xl:px-10 pt-10"${_scopeId}><div class="xl:w-3/4 w-4/5 xl:mt-16 overflow-y-hidden"${_scopeId}><form${_scopeId}><button type="submit" class="mt-16 border border-white w-24 text-white py-2 px-4 bg-green-800 rounded-lg mb-10 hover:bg-green-600 transition ease-in duration-100"${_scopeId}>Save</button><div class="overflow-y-hidden space-x-1"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              id: "name",
              name: "month_num",
              type: "text",
              class: "mt-4 py-2 px-2 w-24 focus:ring-yellow-500 active:ring-yellow-500",
              required: "",
              autocomplete: "",
              modelValue: _ctx.month_num,
              "onUpdate:modelValue": ($event) => _ctx.month_num = $event,
              placeholder: "Month No.",
              "data-aos": "fade-up",
              "data-aos-duration": "1300",
              onClick: () => {
              }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              id: "name",
              name: "month",
              type: "text",
              class: "mt-4 py-2 px-2 w-40 focus:ring-yellow-500 active:ring-yellow-500",
              required: "",
              autocomplete: "",
              modelValue: _ctx.month,
              "onUpdate:modelValue": ($event) => _ctx.month = $event,
              placeholder: "Month",
              "data-aos": "fade-up",
              "data-aos-duration": "1300",
              onClick: () => {
              }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              id: "name",
              name: "coursetitle",
              type: "text",
              class: "mt-4 py-2 px-2 w-80 focus:ring-yellow-500 active:ring-yellow-500",
              required: "",
              autocomplete: "",
              modelValue: _ctx.course_title,
              "onUpdate:modelValue": ($event) => _ctx.course_title = $event,
              placeholder: "Course Title",
              "data-aos": "fade-up",
              "data-aos-duration": "1300",
              onClick: () => {
              }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              id: "name",
              name: "venue",
              type: "text",
              class: "mt-4 py-2 px-2 w-72 focus:ring-yellow-500 active:ring-yellow-500",
              required: "",
              autocomplete: "",
              placeholder: "Venue",
              modelValue: _ctx.venue,
              "onUpdate:modelValue": ($event) => _ctx.venue = $event,
              "data-aos": "fade-up",
              "data-aos-duration": "1300",
              onClick: () => {
              }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              id: "name",
              name: "year",
              type: "number",
              class: "mt-4 py-2 px-2 w-32 focus:ring-yellow-500 active:ring-yellow-500",
              required: "",
              autocomplete: "",
              placeholder: "Year",
              modelValue: _ctx.year,
              "onUpdate:modelValue": ($event) => _ctx.year = $event,
              "data-aos": "fade-up",
              "data-aos-duration": "1300",
              onClick: () => {
              }
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              show: _ctx.showModal,
              onClose: ($event) => _ctx.showModal = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h2 class="text-theme1 text-2xl"${_scopeId2}>Added Training Calendar</h2><p class="text-theme2 text-4xl mb-5"${_scopeId2}>Success!</p>`);
                } else {
                  return [
                    createVNode("h2", { class: "text-theme1 text-2xl" }, "Added Training Calendar"),
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
              createVNode("div", { class: "postcontainer flex justify-center h-screen w-screen xl:px-10 pt-10" }, [
                createVNode("div", { class: "xl:w-3/4 w-4/5 xl:mt-16 overflow-y-hidden" }, [
                  createVNode("form", {
                    onSubmit: withModifiers(_ctx.submitData, ["prevent"])
                  }, [
                    createVNode("button", {
                      type: "submit",
                      class: "mt-16 border border-white w-24 text-white py-2 px-4 bg-green-800 rounded-lg mb-10 hover:bg-green-600 transition ease-in duration-100"
                    }, "Save"),
                    createVNode("div", { class: "overflow-y-hidden space-x-1" }, [
                      createVNode(_sfc_main$2, {
                        id: "name",
                        name: "month_num",
                        type: "text",
                        class: "mt-4 py-2 px-2 w-24 focus:ring-yellow-500 active:ring-yellow-500",
                        required: "",
                        autocomplete: "",
                        modelValue: _ctx.month_num,
                        "onUpdate:modelValue": ($event) => _ctx.month_num = $event,
                        placeholder: "Month No.",
                        "data-aos": "fade-up",
                        "data-aos-duration": "1300",
                        onClick: withModifiers(() => {
                        }, ["stop"])
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "onClick"]),
                      createVNode(_sfc_main$2, {
                        id: "name",
                        name: "month",
                        type: "text",
                        class: "mt-4 py-2 px-2 w-40 focus:ring-yellow-500 active:ring-yellow-500",
                        required: "",
                        autocomplete: "",
                        modelValue: _ctx.month,
                        "onUpdate:modelValue": ($event) => _ctx.month = $event,
                        placeholder: "Month",
                        "data-aos": "fade-up",
                        "data-aos-duration": "1300",
                        onClick: withModifiers(() => {
                        }, ["stop"])
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "onClick"]),
                      createVNode(_sfc_main$2, {
                        id: "name",
                        name: "coursetitle",
                        type: "text",
                        class: "mt-4 py-2 px-2 w-80 focus:ring-yellow-500 active:ring-yellow-500",
                        required: "",
                        autocomplete: "",
                        modelValue: _ctx.course_title,
                        "onUpdate:modelValue": ($event) => _ctx.course_title = $event,
                        placeholder: "Course Title",
                        "data-aos": "fade-up",
                        "data-aos-duration": "1300",
                        onClick: withModifiers(() => {
                        }, ["stop"])
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "onClick"]),
                      createVNode(_sfc_main$2, {
                        id: "name",
                        name: "venue",
                        type: "text",
                        class: "mt-4 py-2 px-2 w-72 focus:ring-yellow-500 active:ring-yellow-500",
                        required: "",
                        autocomplete: "",
                        placeholder: "Venue",
                        modelValue: _ctx.venue,
                        "onUpdate:modelValue": ($event) => _ctx.venue = $event,
                        "data-aos": "fade-up",
                        "data-aos-duration": "1300",
                        onClick: withModifiers(() => {
                        }, ["stop"])
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "onClick"]),
                      createVNode(_sfc_main$2, {
                        id: "name",
                        name: "year",
                        type: "number",
                        class: "mt-4 py-2 px-2 w-32 focus:ring-yellow-500 active:ring-yellow-500",
                        required: "",
                        autocomplete: "",
                        placeholder: "Year",
                        modelValue: _ctx.year,
                        "onUpdate:modelValue": ($event) => _ctx.year = $event,
                        "data-aos": "fade-up",
                        "data-aos-duration": "1300",
                        onClick: withModifiers(() => {
                        }, ["stop"])
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "onClick"])
                    ]),
                    createVNode(_sfc_main$3, {
                      show: _ctx.showModal,
                      onClose: ($event) => _ctx.showModal = false
                    }, {
                      default: withCtx(() => [
                        createVNode("h2", { class: "text-theme1 text-2xl" }, "Added Training Calendar"),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Editor/TrainingCalendarEditor.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
