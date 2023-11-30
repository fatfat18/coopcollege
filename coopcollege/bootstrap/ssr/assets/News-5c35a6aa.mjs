import { mergeProps, useSSRContext, unref } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrIncludeBooleanAttr } from "vue/server-renderer";
import AOS from "aos";
import "../app.mjs";
import { _ as _sfc_main$3, a as _sfc_main$4 } from "./Header-55ad523b.mjs";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
import { _ as _sfc_main$5 } from "./Footer-8dcc6d69.mjs";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { B as BASE_URL } from "./baseurl-7f204550.mjs";
import "axios";
import "swiper";
import "@inertiajs/vue3";
import "./logo-0238775f.mjs";
import "@fortawesome/free-brands-svg-icons";
import "./InputLabel-cd393c3d.mjs";
const NewsHeading_vue_vue_type_style_index_0_lang = "";
const _sfc_main$2 = {
  props: {
    title: {
      type: String,
      required: true
    },
    context: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String
      //required: true,
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "z-1 header w-full overflow-y-hidden h-full justify-center items-center xl:h-screen bg-white flex text-theme1 flex-col-reverse xl:flex-row" }, _attrs))}><div class="z-10 w-3/4 xl:mx-20 mb-10 xl:mb-0 overflow-y-hidden xl:py-24 pt-10 xl:rounded-lg px-10 xl:px-0 h-full xl:h-full flex flex-col justify-center items-center"><p class="xl:text-3xl text-l text-center" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="700">${ssrInterpolate($props.title)}</p><p class="xl:text-l text-base text-center xl:mb-10 xl:px-10 mb-0 text-theme2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="800">${ssrInterpolate($props.description)}</p><p class="xl:px-10 text-start xl:text-md text-sm my-10" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1000">${ssrInterpolate($props.context)}</p></div><div class="overflow-y-hidden w-screen xl:h-full h-max py-20 flex justify-center items-center xl:mr-20" data-aos="zoom-out" data-aos-duration="1000" data-aos-delay="500"><img${ssrRenderAttr("src", $props.image)} alt="image" class="xl:w-3/4 xl:h-96 object-cover rounded-lg hover:scale-110 transition duration-500"></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/NewsComponent/NewsHeading.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const NewsHeading = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const NewsCol_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = {
  props: {
    context: {
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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "mx-2 xl:mx-0 img xl:px-5 my-5 xl:my-10 flex justify-center items-center flex-col drop-shadow-2xl" }, _attrs))}><img${ssrRenderAttr("src", $props.image)} class="card hover:scale-125 transition duration-700 overflow-y-hidden img object-cover object-center rounded-lg" alt=""><p class="text-xs xl:text-md mt-4 text-theme1">${ssrInterpolate($props.context)}</p></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/NewsComponent/NewsCol.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const NewsCol = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const News_vue_vue_type_style_index_0_lang = "";
const __default__ = {
  data() {
    return {
      title: "",
      description: "",
      context: "",
      img: "",
      pid: "",
      postsnohead: [],
      pageposts: [],
      currentPage: 1,
      perPage: 6,
      heading: {}
    };
  },
  mounted() {
    this.fetchData();
  },
  computed: {
    totalPages() {
      return Math.ceil(this.pageposts.length / this.perPage);
    },
    paginatedPosts() {
      const startIndex = (this.currentPage - 1) * this.perPage;
      const endIndex = startIndex + this.perPage;
      return this.pageposts.slice(startIndex, endIndex);
    }
  },
  methods: {
    sliceText(text, limit) {
      if (text.length > limit) {
        return text.slice(0, 200) + " ...";
      } else {
        return text;
      }
    },
    navigateToPost(Postid) {
      window.location.href = this.route("ViewPost", { Postid });
    },
    async fetchData() {
      try {
        const response = await axios.get(
          BASE_URL + "/paginateDisplayPost"
        );
        console.log(response);
        this.heading = response.data.data[0];
        console.log(this.heading);
        this.title = this.heading.newsTitle;
        this.description = this.heading.Description;
        this.context = this.heading.Context;
        this.img = this.heading.avatar.ImageUrl;
        console.log(this.img);
        this.pid = this.heading.Postid;
        this.pageposts = response.data.data.slice(1);
        console.log(this.pageposts);
      } catch (error) {
        console.error(error);
      }
    }
  }
};
AOS.init({ startEvent: "load", once: "true," });
AOS.refresh();
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "News",
  __ssrInlineRender: true,
  setup(__props) {
    library.add(faAngleLeft, faAngleRight);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(`<div class="h-max w-screen flex flex-col justify-center"><div class="xl:h-screen py-80 xl:py-0 w-screen newsbg bg-theme1 flex flex-col justify-center items-center" data-aos="fade" data-aos-duration="1000"><p class="xl:text-6xl text-3xl text-white" data-aos="fade-up" data-aos-delay="700" data-aos-duration="1200"> What&#39;s New? </p><p class="xl:text-xl xl:mt-5 text-white text-center" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000"> Keep posted to see the latest posts of <br></p><p class="text-theme2 xl:text-5xl text-3xl mx-2 text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]" data-aos="fade-up" data-aos-delay="1100" data-aos-duration="1000"> Co-operative College of the Philippines </p></div>`);
      _push(ssrRenderComponent(NewsHeading, {
        title: _ctx.title,
        description: _ctx.sliceText(_ctx.description, 10),
        context: _ctx.sliceText(_ctx.context, 200),
        image: _ctx.img,
        class: "clickable-div z-1",
        onClick: ($event) => _ctx.navigateToPost(_ctx.pid)
      }, null, _parent));
      _push(`<div class="w-screen bg-theme2 h-4 xl:hidden flex"></div><div class="h-max bg-white justify-center items-center w-screen flex xl:py-10 xl:px-20 flex-wrap"><!--[-->`);
      ssrRenderList(_ctx.paginatedPosts, (post, index) => {
        _push(`<div class="overflow-y-hidden flex items-center justify-center xl:px-15">`);
        _push(ssrRenderComponent(NewsCol, {
          image: post.avatar.ImageUrl,
          context: _ctx.sliceText(post.Context, 200),
          "data-aos": "fade-up",
          "data-aos-duration": "1000",
          "data-aos-delay": "200",
          class: "clickable-div text-md overflow-y-hidden",
          onClick: ($event) => _ctx.navigateToPost(post.Postid)
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div><div class="w-screen flex justify-center items-center xl:space-x-2 text-md bg-white"><button class="py-3 border-2 border-theme1 px-4 my-2 mx-2 rounded-lg hover:bg-theme1 hover:text-white transition duration-300 text-theme1 active:-translate-x-2"${ssrIncludeBooleanAttr(_ctx.currentPage === 1) ? " disabled" : ""}>`);
      _push(ssrRenderComponent(unref(FontAwesomeIcon), {
        icon: "fa-solid fa-angle-left ",
        class: "text-md"
      }, null, _parent));
      _push(` Previous </button><button class="py-3 border-2 border-theme1 px-8 my-2 mx-2 rounded-lg hover:bg-theme1 hover:text-white transition duration-300 text-theme1 active:translate-x-2"${ssrIncludeBooleanAttr(_ctx.currentPage === _ctx.totalPages) ? " disabled" : ""}> Next `);
      _push(ssrRenderComponent(unref(FontAwesomeIcon), {
        icon: "fa-solid fa-angle-right",
        class: "text-md"
      }, null, _parent));
      _push(`</button></div></div>`);
      _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/ViewersPage/News.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
