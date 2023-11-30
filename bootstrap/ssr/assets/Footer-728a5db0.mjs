import { useSSRContext, mergeProps, unref } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import AOS from "aos";
import "../app.mjs";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope, faTty } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import "./InputLabel-cd393c3d.mjs";
import { B as BASE_URL } from "./baseurl-7bfc5f79.mjs";
const Footer_vue_vue_type_style_index_0_lang = "";
const __default__ = {
  data() {
    return {
      items: [],
      contacts: [],
      fb: "",
      phonenum: "",
      tel: "",
      email: "",
      showModal: false
    };
  },
  mounted() {
    axios.get(BASE_URL + "/displayContactUs?idcontactUs=1").then((response) => {
      this.contacts = response.data;
      console.log(this.contacts);
      this.fb = this.contacts[0].facebookLink;
      this.phonenum = this.contacts[0].phoneNum;
      this.email = "https://mail.google.com/mail/?view=cm&fs=1&to=" + this.contacts[0].emailAdd;
      this.tel = this.contacts[0].telNum;
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
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    library.add(faFacebook, faPhone, faEnvelope, faTty);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "footer",
        class: "ftr w-screen h-80 bg-theme1 pt-8 flex flex-col items-center"
      }, _attrs))}><p class="text-white text-xl" data-aos="fade-down" data-aos-duration="400" data-aos-delay="500"> Message us Now!</p><div class="flex justify-center items-center space-x-2 py-4 px-2" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500"><div class="bg-white py-2 px-4 rounded-xl transition ease-in duration-150 hover:scale-125"><a${ssrRenderAttr("href", this.fb)} target="_blank">`);
      _push(ssrRenderComponent(unref(FontAwesomeIcon), {
        icon: "fa-brands fa-facebook",
        class: "text-theme1 overflow-y-hidden"
      }, null, _parent));
      _push(`</a></div><a${ssrRenderAttr("href", this.email)} target="_blank"><div class="bg-white py-2 px-4 rounded-xl transition ease-in duration-150 hover:scale-125">`);
      _push(ssrRenderComponent(unref(FontAwesomeIcon), {
        icon: "fa-solid fa-envelope",
        class: "text-theme1 overflow-y-hidden"
      }, null, _parent));
      _push(`</div></a></div><div class="space-y-2"><div class="bg-white py-2 px-4 rounded-sm flex" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">`);
      _push(ssrRenderComponent(unref(FontAwesomeIcon), {
        icon: "fa-solid fa-phone",
        class: "h-5 text-theme1 overflow-y-hidden"
      }, null, _parent));
      _push(` <p class="ml-2 text-sm">${ssrInterpolate(_ctx.phonenum)}</p></div><div class="bg-white py-2 px-4 rounded-sm flex" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500">`);
      _push(ssrRenderComponent(unref(FontAwesomeIcon), {
        icon: "fa-solid fa-tty",
        class: "h-5 text-theme1 overflow-y-hidden"
      }, null, _parent));
      _push(` <p class="ml-2 text-sm">${ssrInterpolate(_ctx.tel)}</p></div></div><div class="w-screen py-2 relative"><p class="text-sm text-white text-center pt-16">© Co-operative College of the Philippines</p></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
