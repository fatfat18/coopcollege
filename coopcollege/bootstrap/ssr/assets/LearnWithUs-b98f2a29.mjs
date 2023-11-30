import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import "@inertiajs/vue3";
import AOS from "aos";
import "../app.mjs";
import { _ as _sfc_main$2, a as _sfc_main$3 } from "./Header-55ad523b.mjs";
import { useSSRContext } from "vue";
import { _ as _sfc_main$4 } from "./Footer-8dcc6d69.mjs";
import { B as BASE_URL } from "./baseurl-7f204550.mjs";
import "axios";
import "swiper";
import "./logo-0238775f.mjs";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/vue-fontawesome";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/free-brands-svg-icons";
import "./InputLabel-cd393c3d.mjs";
const _sfc_main$1 = {
  props: ["Month", "CourseTitle1", "CourseTitle2", "Venue1", "Venue2"]
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/CalendarMonth.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const LearnWithUs_vue_vue_type_style_index_0_lang = "";
const __default__ = {
  data() {
    return {
      calendar: [],
      currentYear: (/* @__PURE__ */ new Date()).getFullYear()
    };
  },
  mounted() {
    axios.get(BASE_URL + "/displayCalendarTraining").then((response) => {
      this.calendar = response.data;
      console.log(this.calendar);
    }).catch((error) => {
      console.log(error);
    });
  }
};
AOS.init({
  startEvent: "load",
  once: "true,"
});
AOS.refresh();
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "LearnWithUs",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(`<div class="h-max w-screen flex flex-col justify-center items-center bg-theme1 overflow-y-hidden bg"><div class="h-24 w-screen max-w-7xl flex bg-theme2 justify-center items-center mt-10 xl:rounded-lg" data-aos="fade-up" data-aos-duration="1000"><p class="xl:text-5xl text-2xl font-thin text-theme1 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]"> Training Calendar ${ssrInterpolate(_ctx.currentYear)}</p></div><div data-aos="fade-up" data-aos-duration="1000" class="rounded-t max-w-6xl w-screen bg-zinc-300 text-theme1 mt-5 py-2 flex items-center text-l xl:text-2xl"><div class="xl:w-2/5 w-1/3 text-center">Month</div> <div class="xl:w-3/4 w-1/3 text-center">Course Title</div><div class="xl:w-1/2 w-1/3 text-center">Venue</div></div><div class="rounded-t pb-5 h-max overflow-y-hidden max-w-7xl w-full bg-zinc-300 flex justify-center items-center flex-col text-theme1" data-aos="fade-up" data-aos-duration="1000"><!--[-->`);
      ssrRenderList(_ctx.calendar, (eventData, index) => {
        _push(`<div class="flex justify-center items-center h-max w-screen max-w-6xl bg-white border-2 border-theme1 xl:mx-5 xl:mt-1 mt-1 py-2 rounded-2xl xl:rounded-xl" data-aos="zoom-in" data-aos-duration="1000"><div class="flex text-center justify-center items-center hover:scale-105 transition duration-300"><div class="xl:w-2/5 lg:w-2/3 w-1/3 text-center flex justify-center items-center py-5">${ssrInterpolate(eventData.month)}</div><div class="w-screen"><!--[-->`);
        ssrRenderList(_ctx.calendar[index].events, (event, index2) => {
          _push(`<div class="flex space-x-5"><div class="w-3/4 text-center flex justify-center items-center py-2">• ${ssrInterpolate(event.courseTitle)}</div><div class="w-1/2 text-center flex justify-center items-center py-2">• ${ssrInterpolate(event.Venue)}</div><br></div>`);
        });
        _push(`<!--]--></div></div></div>`);
      });
      _push(`<!--]--></div><div class="py-5"></div>`);
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/ViewersPage/LearnWithUs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
