import { watch, onMounted, onUnmounted, computed, unref, useSSRContext, withCtx, createVNode } from "vue";
import { ssrRenderTeleport, ssrRenderStyle, ssrRenderClass, ssrRenderSlot, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _imports_0 } from "./logo-0238775f.mjs";
import AOS from "aos";
import "../app.mjs";
import { _ as _sfc_main$2, a as _sfc_main$3 } from "./Header-55ad523b.mjs";
import { B as BASE_URL } from "./baseurl-7f204550.mjs";
import "axios";
import "swiper";
import "@inertiajs/vue3";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/vue-fontawesome";
import "@fortawesome/free-solid-svg-icons";
const _sfc_main$1 = {
  __name: "ShowImgModal",
  __ssrInlineRender: true,
  props: {
    show: {
      type: Boolean,
      default: false
    },
    maxWidth: {
      type: String,
      default: "4xl"
    },
    closeable: {
      type: Boolean,
      default: true
    }
  },
  emits: ["close"],
  setup(__props, { emit }) {
    const props = __props;
    watch(
      () => props.show,
      () => {
        if (props.show) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = null;
        }
      }
    );
    const close = () => {
      if (props.closeable) {
        emit("close");
      }
    };
    const closeOnEscape = (e) => {
      if (e.key === "Escape" && props.show) {
        close();
      }
    };
    onMounted(() => document.addEventListener("keydown", closeOnEscape));
    onUnmounted(() => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = null;
    });
    const maxWidthClass = computed(() => {
      return {
        sm: "sm:max-w-sm",
        md: "sm:max-w-md",
        lg: "sm:max-w-lg",
        xl: "sm:max-w-xl",
        "4xl": "sm:max-w-4xl"
      }[props.maxWidth];
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderTeleport(_push, (_push2) => {
        _push2(`<div style="${ssrRenderStyle(__props.show ? null : { display: "none" })}" class="fixed text-center flex justify-center items-center inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50" scroll-region><div style="${ssrRenderStyle(__props.show ? null : { display: "none" })}" class="fixed inset-0 transform transition-all"><div class="absolute inset-0 bg-gray-100 backdrop-blur-md opacity-25"></div></div><div style="${ssrRenderStyle(__props.show ? null : { display: "none" })}" class="${ssrRenderClass([unref(maxWidthClass), "mb-6 bg-white rounded-lg max-w-6xl overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto pb-10 py-10 px-6 text-center"])}">`);
        if (__props.show) {
          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div>`);
      }, "body", false, _parent);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ShowImgModal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ViewPost_vue_vue_type_style_index_0_lang = "";
const __default__ = {
  data() {
    return {
      items: [],
      imagePreviewUrl: [],
      imagePreviewUrlholder: [],
      title: "",
      description: "",
      context: "",
      img: "",
      showimgmodal: false
    };
  },
  created() {
    axios.get(BASE_URL + "/displayPost").then((response) => {
      this.items = response.data;
      console.log(this.items);
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
        if (y.Postid == this.itemId) {
          console.log(y);
          this.items = y;
          console.log(this.items);
        }
      }
      this.title = this.items.newsTitle;
      this.description = this.items.Description;
      this.context = this.items.Context;
      this.img = this.items.avatar.ImageUrl;
      for (let i = 0; i < this.items.image.length; i++) {
        this.imagePreviewUrlholder[i] = this.items.image[i].ImageUrl;
      }
      console.log(this.imagePreviewUrlholder);
    }).catch((error) => {
      console.log(error);
    });
  },
  methods: {
    changeImage(pushedimage) {
      this.img = pushedimage;
    },
    showimgmod() {
      this.showimgmodal = true;
    }
  }
};
AOS.init({ startEvent: "load", once: "true," });
AOS.refresh();
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "ViewPost",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(`<div class="w-screen h-max bg-zinc-200 flex justify-center items-center"><div class="h-max max-w-7xl w-screen flex xl:flex-row flex-col"><div class="h-max xl:w-1/2 flex-col min-h-max flex justify-center items-center"><img${ssrRenderAttr("src", _ctx.img)} alt="" id="dispimg" class="card rounded-md cursor-pointer transition duration-1000 w-max xl:h-96 object-cover my-10" data-aos="fade" data-aos-duration="1000">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        show: _ctx.showimgmodal,
        onClose: ($event) => _ctx.showimgmodal = false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _ctx.img)} alt="" id="dispimg" class="transition duration-300 w-max xl:w-full test scale-125 object-contain my-10" data-aos="fade-down" data-aos-duration="1000"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _ctx.img,
                alt: "",
                id: "dispimg",
                class: "transition duration-300 w-max xl:w-full test scale-125 object-contain my-10",
                "data-aos": "fade-down",
                "data-aos-duration": "1000"
              }, null, 8, ["src"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex flex-wrap justify-center items-center" data-aos="fade" data-aos-delay="500" data-aos-duration="1000"><!--[-->`);
      ssrRenderList(_ctx.imagePreviewUrlholder, (imageUrl) => {
        _push(`<div><img${ssrRenderAttr("src", imageUrl)} class="card rounded-md transition duration-300 hover:scale-110 clickable-div h-32 w-40 object-cover my-5 mx-5"></div>`);
      });
      _push(`<!--]--></div></div><div class="h-max xl:w-1/2 flex flex-col text-center pt-10 px-10"><h1 class="text-3xl text-theme1 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]" data-aos="zoom-out" data-aos-duration="1000">${ssrInterpolate(_ctx.title)}</h1><br><h1 class="text-xl text-theme2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]" data-aos="zoom-out" data-aos-duration="1000">${ssrInterpolate(_ctx.description)}</h1><br><p class="text-slate-900 text-xs xl:text-lg flex items-center justify-center text-justify" data-aos="zoom-out" data-aos-duration="1000">${ssrInterpolate(_ctx.context)}</p><div class="mt-10 w-full overflow-y-hidden h-full flex justify-center items-center"><img${ssrRenderAttr("src", _imports_0)} alt="" class="w-32" data-aos="zoom-out" data-aos-duration="1000"></div></div></div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/ViewPost.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
