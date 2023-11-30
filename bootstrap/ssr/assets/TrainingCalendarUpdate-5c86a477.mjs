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
const TrainingCalendarUpdate_vue_vue_type_style_index_0_lang = "";
const __default__ = {
  components: {
    Modal: _sfc_main$3
  },
  data() {
    return {
      showModal: false,
      month: "",
      course_title: "",
      year: "",
      venue: "",
      items: [],
      selectedItem: this.itemId
    };
  },
  methods: {
    closeModal() {
      this.showModal = false;
    }
  },
  methods: {},
  mounted() {
    axios.get(BASE_URL + "/displayCalendarTraining").then((response) => {
      const path = window.location.pathname;
      const pathSegments = path.split("/");
      this.itemId = pathSegments[pathSegments.length - 1];
      console.log(this.itemId);
      const intNum = parseInt(this.itemId);
      console.log(intNum);
      this.items = response.data;
      console.log(this.items);
      for (let x = 0; x < this.items.length; x++) {
        const y = this.items[x];
        if (y.idTC == this.itemId) {
          console.log(y);
          this.items = y;
          console.log(this.items);
        }
      }
      this.month = this.items.month;
      this.year = this.items.year;
      this.course_title = this.items.events[0].courseTitle;
      this.venue = this.items.events[0].Venue;
    }).catch((error) => {
    });
  },
  methods: {
    updateTrainingcalendar() {
      let params = new URLSearchParams();
      let num = parseInt(this.itemId);
      params.append("courseTitle", this.course_title);
      params.append("venue", this.venue);
      params.append("month", this.month);
      params.append("year", this.year);
      params.append("idTC", num);
      axios.put(BASE_URL + "/updateCalendarTraining?" + params.toString()).then((response) => {
        console.log(response.data);
        this.showModal = true;
        async function redirectWithDelay() {
          await new Promise((resolve) => setTimeout(resolve, 1e3));
          window.location.href = route("TrainingCalendar");
        }
        redirectWithDelay();
      }).catch((error) => {
        console.log(error);
      });
      console.log(BASE_URL + "/updateCalendarTraining?" + params.toString());
    }
  }
};
AOS.init();
AOS.refresh();
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "TrainingCalendarUpdate",
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
            _push2(`<div class=""${_scopeId}></div><div class="postcontainer flex justify-center h-screen w-screen xl:px-10 pt-10"${_scopeId}><div class="xl:w-3/4 w-4/5 xl:mt-16 overflow-y-hidden"${_scopeId}><form${_scopeId}><button type="submit" class="mt-16 border border-white w-24 text-white py-2 px-4 bg-green-800 rounded-lg mb-10 hover:bg-green-600 transition ease-in duration-100"${_scopeId}>Save</button><div class="overflow-y-hidden space-x-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              id: "name",
              name: "month",
              type: "text",
              class: "mt-4 py-2 px-2 w-40 focus:ring-yellow-500 active:ring-yellow-500",
              required: "",
              autocomplete: "",
              modelValue: this.month,
              "onUpdate:modelValue": ($event) => this.month = $event,
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
              modelValue: this.course_title,
              "onUpdate:modelValue": ($event) => this.course_title = $event,
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
              modelValue: this.venue,
              "onUpdate:modelValue": ($event) => this.venue = $event,
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
              modelValue: this.year,
              "onUpdate:modelValue": ($event) => this.year = $event,
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
                  _push3(`<h2 class="text-theme1 text-2xl"${_scopeId2}>Update Training Calendar</h2><p class="text-theme2 text-4xl mb-5"${_scopeId2}>Success!</p>`);
                } else {
                  return [
                    createVNode("h2", { class: "text-theme1 text-2xl" }, "Update Training Calendar"),
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
                    onSubmit: withModifiers(($event) => _ctx.updateTrainingcalendar(this.intNum), ["prevent"])
                  }, [
                    createVNode("button", {
                      type: "submit",
                      class: "mt-16 border border-white w-24 text-white py-2 px-4 bg-green-800 rounded-lg mb-10 hover:bg-green-600 transition ease-in duration-100"
                    }, "Save"),
                    createVNode("div", { class: "overflow-y-hidden space-x-4" }, [
                      createVNode(_sfc_main$2, {
                        id: "name",
                        name: "month",
                        type: "text",
                        class: "mt-4 py-2 px-2 w-40 focus:ring-yellow-500 active:ring-yellow-500",
                        required: "",
                        autocomplete: "",
                        modelValue: this.month,
                        "onUpdate:modelValue": ($event) => this.month = $event,
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
                        modelValue: this.course_title,
                        "onUpdate:modelValue": ($event) => this.course_title = $event,
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
                        modelValue: this.venue,
                        "onUpdate:modelValue": ($event) => this.venue = $event,
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
                        modelValue: this.year,
                        "onUpdate:modelValue": ($event) => this.year = $event,
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
                        createVNode("h2", { class: "text-theme1 text-2xl" }, "Update Training Calendar"),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Editor/TrainingCalendarUpdate.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
