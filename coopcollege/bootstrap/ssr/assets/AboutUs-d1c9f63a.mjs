import { ssrRenderAttr, ssrInterpolate, ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import AOS from "aos";
import "../app.mjs";
import { _ as _sfc_main$3, a as _sfc_main$4 } from "./Header-55ad523b.mjs";
import { useSSRContext, mergeProps } from "vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
import { _ as _sfc_main$5 } from "./Footer-8dcc6d69.mjs";
import { B as BASE_URL } from "./baseurl-7f204550.mjs";
import "axios";
import "swiper";
import "@inertiajs/vue3";
import "./logo-0238775f.mjs";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/vue-fontawesome";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/free-brands-svg-icons";
import "./InputLabel-cd393c3d.mjs";
const _imports_0 = "/build/assets/climbs_logo_edited_400x400-961d4954.png";
const _imports_1 = "/build/assets/2017-cbfe47cf.png";
const _imports_2 = "/build/assets/climbs-logo-3f14f91f.jpg";
const _imports_3 = "/build/assets/2019-c5c457d0.png";
const _imports_4 = "/build/assets/2021-a3ed0d51.png";
const timeline = "";
const _sfc_main$2 = {
  props: {
    fullname: {
      type: String,
      required: true
    },
    position: {
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
  _push(`<!--[--><div class="overflow-y-hidden"><img${ssrRenderAttr("src", $props.image)} alt="BOD" class="w-60 h-80 object-cover object-center hover:scale-110 overflow-y-hidden transition duration-500 rounded-md"></div><div class="text-center"><p class="text-xl mt-2 text-theme1">${ssrInterpolate($props.fullname)}</p><p class="text-xl text-theme2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">${ssrInterpolate($props.position)}</p></div><!--]-->`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ProfileCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ProfileCard = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {
  props: {
    image: {
      type: String
      //required: true,
    },
    name: {
      type: String
      //required: true,
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-center items-center flex-col flex-wrap max-w-7xl bg-white xl:text-md overflow-y-hidden xl:space-x-3" }, _attrs))}><img${ssrRenderAttr("src", $props.image)} alt="Image" class="xl:ml-0 bg-center object-contain xl:h-32 xl:w-60 h-12 w-24 hover:scale-110 transition duration-500"><p class="text-theme1 text-l text-center">${ssrInterpolate($props.name)}</p></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/PartnersPic.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const PartnersPic = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const AboutUs_vue_vue_type_style_index_0_lang = "";
const __default__ = {
  data() {
    return {
      phrases: ["We are the sole-training needs provider of the National Federation of Cooperative Primaries of the Philippines (NaFeCOOP). We Strategically pivoted from CLIMBS Institute for Financial Literacy (CIFL) to CLIMBS Institute of Management (CIM), and now, the Co-operative College of the Philippines (Co-op College PH) to further cooperative education both locally and globally, embodies the cooperative values and principles, and upgrades its educational platforms."],
      sleepTime: 20,
      curPhraseIndex: 0,
      partners: [],
      bods: []
    };
  },
  mounted() {
    axios.get(BASE_URL + "/displayPartner").then((response) => {
      this.partners = response.data;
      console.log(this.partners);
    }).catch((error) => {
      console.log(error);
    });
    axios.get(BASE_URL + "/displayBOD").then((response) => {
      this.bods = response.data;
      console.log(this.bods);
    }).catch((error) => {
      console.log(error);
    });
    this.writeLoop();
  },
  methods: {
    sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
    async writeLoop() {
      while (true) {
        let curWord = this.phrases[this.curPhraseIndex];
        for (let i = 0; i < curWord.length; i++) {
          this.$refs.typewriter.textContent = curWord.substring(0, i + 1);
          await this.sleep(this.sleepTime);
        }
        await this.sleep(this.sleepTime * 9999);
      }
    }
  }
};
AOS.init({
  startEvent: "load",
  once: "true,"
});
AOS.refresh();
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "AboutUs",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(`<div class="w-screen flex flex-col justify-center items-center bg"><div class="overflow-y-hidden pt-20 w-3/4 xl:pl-20"><p class="text-white text-4xl xl:text-5xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]">Who are we?</p><br><br><section class="flex flex-col justify-center items-center text-justify"><p class="text-white xl:text-xl">                  <span class="text-base xl:text-2xl"></span><span id="cursor">|</span></p></section></div><p class="text-white text-3xl xl:text-5xl xl:pt-20 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] mb-4">Governance</p><div class="w-screen h-max max-w-7xl bg-zinc-100 rounded-md pt-10 flex justify-center gap-10 mb-5 mt-1 flex-wrap overflow-y-hidden"><!--[-->`);
      ssrRenderList(_ctx.bods, (bod) => {
        _push(`<div class="bg-zinc-100 h-max w-60 my-5 mx-5 overflow-y-hidden" data-aos="fade-right" data-aos-duration="1000">`);
        _push(ssrRenderComponent(ProfileCard, {
          fullname: (bod.Prefix === null ? "" : bod.Prefix + " ") + bod.Fname + " " + bod.Lname + (bod.Suffix === null ? " " : " " + bod.Suffix),
          position: bod.Position,
          image: bod.image.ImageUrl,
          class: "overflow-y-hidden shadow-2xl"
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div><div class="max-w-7xl h-max pt-4 w-screen bg-theme2 rounded-2xl text-theme1 overflow-y-hidden xl:px-8 mb-10"><p class="text-theme1 text-4xl px-4" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">Our Focus Areas: <p class="text-xl px-4" data-aos="fade-left" data-aos-delay="400" data-aos-duration="1000">(1) Risk Management</p> <p class="text-xl px-4" data-aos="fade-left" data-aos-delay="600" data-aos-duration="1000">(2) Financial Literacy</p> <p class="text-xl px-4" data-aos="fade-left" data-aos-delay="800" data-aos-duration="1000">(3) Executive Management</p> <p class="mb-10 text-xl px-4" data-aos="fade-left" data-aos-delay="1000" data-aos-duration="1000">(4) Leadership Management and Development</p></p><p class="text-theme1 xl:text-4xl text-2xl" data-aos="fade-right" data-aos-duration="1000">What We Offer :</p><div class="bg-zinc-300 h-max w-1/1 px-8 xl:px-0 my-4 rounded-2xl flex justify-center xl:flex-row flex-col items-center xl:gap-10 xl:text-xl text-sm" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="500"><div class="xl:w-1/2 xl:px-8 py-8 h-max pb-4 xl:pb-8"><div class=""><h1 class="xl:text-3xl text-xl italic underline">Executive Courses (E)</h1> • Post - Graduate Certificate in Cooperative Management (PGC CM)<br> • Global Co-operative Executives Masterclass<br> • Strategic Planning and Thinking Management<br> • Human Capital Management<br> • Cooperative Digital Transformation<br></div><br><div><h1 class="xl:text-3xl text-xl italic underline">Leadership Courses (L)</h1> • Cooperative Leadership Program<br> • Cooperative Management Training<br> • Raising Cooperative Leaders<br> • Advcanced Cooperative Business Management<br></div></div><div class="xl:w-1/2 xl:px-8 py-8 pt-0 h-max xl:pt-8"><div><h1 class="xl:text-3xl text-xl italic underline">Risk Manangement Courses (R)</h1> • Business Continuity Planning<br> • Financial Literacy and Management<br> • Environmental, Social and Corporate Governance (ESG)<br> • Corporate Governance and Enterprise Risk Management (ERM)<br></div><br><div><h1 class="xl:text-3xl text-xl italic underline">Others (O)</h1> • Coommunity Engagement through our Community Development Fund (CDF): A Collective Action Initiative<br> • Digital Marketing Strategy for Managers and Entrepreneurs<br> • Diversity and Inclusivity / Social Concerns<br> • The Cooperative Culture and Sustainable Development Goals<br> • Customized E-Learning<br> • Customized Face-to-Face Programs<br></div></div></div></div><div class="max-w-7xl mt-20"><h1 class="text-xl xl:text-3xl text-white mb-4 ml-8">Our Partners</h1><div class="w-screen justify-center items-center max-w-7xl h-max xl:rounded-3xl py-10 xl:px-20 bg-white flex flex-wrap"><!--[-->`);
      ssrRenderList(_ctx.partners, (partner) => {
        _push(ssrRenderComponent(PartnersPic, {
          name: partner.partnerName,
          image: partner.image.ImageUrl,
          class: "mx-4 my-2",
          "data-aos": "zoom-out",
          "data-aos-duration": "1000"
        }, null, _parent));
      });
      _push(`<!--]--></div></div><div class="h-max w-screen"><header class="xl:mt-40 mt-20 flex flex-col"><h1 class="text-white mb-20 text-2xl xl:text-5xl">OUR HISTORY</h1><div class="w-screen flex justify-center items-center"><br><img${ssrRenderAttr("src", _imports_0)} alt="" class="w-32" data-aos="fade-up" data-aos-duration="1000"></div></header><ul class="timeline"><li><div class="direction-r"><div class="flag-wrapper overflow-y-hidden"><span class="hexa"></span><span class="flag"></span><span class="time-wrapper" data-aos="fade-right" data-aos-duration="1500"><span class="time">2011</span></span></div><div class="desc" data-aos="fade-left" data-aos-duration="1000">Inauguration of the CLIMBS Institute for Financial Literacy (CIFL) in November</div></div></li><li><div class="direction-l"><div class="flag-wrapper overflow-y-hidden"><span class="hexa"></span><span class="flag"></span><span class="time-wrapper" data-aos="fade-left" data-aos-duration="1500"><span class="time">2012</span></span></div><div class="desc" data-aos="fade-right" data-aos-duration="1000">Partner Co-ops: 20 Total ITF: PhP 7.95 M</div></div></li><li><div class="direction-r"><div class="flag-wrapper overflow-y-hidden"><span class="hexa"></span><span class="flag"></span><span class="time-wrapper" data-aos="fade-right" data-aos-duration="1500"><span class="time">2013</span></span></div><div class="desc" data-aos="fade-left" data-aos-duration="1000">Partner Co-ops: 36</div></div></li><li><div class="direction-l"><div class="flag-wrapper overflow-y-hidden"><span class="hexa"></span><span class="flag"></span><span class="time-wrapper" data-aos="fade-left" data-aos-duration="1500"><span class="time">2014</span></span></div><div class="desc" data-aos="fade-right" data-aos-duration="1000">Total Partner Co-ops: 61</div></div></li><li><div class="direction-r"><div class="flag-wrapper overflow-y-hidden"><span class="hexa"></span><span class="flag"></span><span class="time-wrapper" data-aos="fade-right" data-aos-duration="1500"><span class="time">2015</span></span></div><div class="desc" data-aos="fade-left" data-aos-duration="1000">Total Partner Co-ops: 70</div></div></li><li><div class="direction-l"><div class="flag-wrapper overflow-y-hidden"><span class="hexa"></span><span class="flag"></span><span class="time-wrapper" data-aos="fade-left" data-aos-duration="1500"><span class="time">2016</span></span></div><div class="desc" data-aos="fade-right" data-aos-duration="1000">Total Partner Co-ops: 83</div></div></li><li><div class="direction-r"><div class="flag-wrapper overflow-y-hidden"><span class="hexa"></span><span class="flag"></span><span class="time-wrapper" data-aos="fade-right" data-aos-duration="1500"><span class="time">2017</span></span></div><div class="desc" data-aos="fade-left" data-aos-duration="1000">Total Partner Co-ops: 116 <br>Total ITF: PhP 30.56 M</div><div class="desc" data-aos="fade-left" data-aos-duration="1000"><img${ssrRenderAttr("src", _imports_1)} alt=""></div><div class="desc" data-aos="fade-left" data-aos-duration="1000">CIFL was presented in the session “Cooperatives and the Future” in the International Cooperative Alliance (ICA) Global Conference and General Assembly in Malaysia as a sustainable model for continuous education for cooperative managers and next-generation leaders. Which birthed the global globalPartnership</div></div></li><li><div class="direction-l"><div class="flag-wrapper overflow-y-hidden"><span class="hexa"></span><span class="flag"></span><span class="time-wrapper" data-aos="fade-left" data-aos-duration="1500"><span class="time">2018</span></span></div><div class="desc" data-aos="fade-right" data-aos-duration="1000">Total Partner Co-ops: 130.</div><div class="desc flex justify-center items-center" data-aos="fade-right" data-aos-duration="1000"><img${ssrRenderAttr("src", _imports_2)} alt=""></div></div></li><li><div class="direction-r"><div class="flag-wrapper overflow-y-hidden"><span class="hexa"></span><span class="flag"></span><span class="time-wrapper" data-aos="fade-right" data-aos-duration="1500"><span class="time">2019</span></span></div><div class="desc" data-aos="fade-left" data-aos-duration="1000">1st Global Cooperative Executive Masterclass held in Manila</div><div class="desc flex justify-center items-center" data-aos="fade-left" data-aos-duration="1000"><img${ssrRenderAttr("src", _imports_3)} alt=""></div><div class="desc" data-aos="fade-left" data-aos-duration="1000">Total Partner Co-ops: 134 <br>Total ITF: PhP 40.46 M</div><div class="desc" data-aos="fade-left" data-aos-duration="1000">CIM was presented during the Centenary Celebration of the Cooperative College in United Kingdom for the theme: “Cooperative Education Across the World” and “...and Now, the Future” as to how cooperative cooperative education can address challenges that we face, to change the world and transforming communities communities and changing lives.</div></div></li><li><div class="direction-l"><div class="flag-wrapper overflow-y-hidden"><span class="hexa"></span><span class="flag"></span><span class="time-wrapper" data-aos="fade-left" data-aos-duration="1500"><span class="time">2020</span></span></div><div class="desc italic" data-aos="fade-right" data-aos-duration="1000">1,400+ participants: 795 coops nationwide 20 Virtual Training Conducted</div><div class="desc" data-aos="fade-right" data-aos-duration="1000">Total Partner Co-ops: 134</div><div class="desc" data-aos="fade-right" data-aos-duration="1000">• The Sole Training Provider of National Federation of Primary Cooperatives in the Philippines (NaFeCOOP) <br><br> • Will not collect Training Fund.CETF will be for NaFeCOOP.<br><br> ** CDA Memo Circular 2019 - 08</div></div></li><li><div class="direction-r"><div class="flag-wrapper overflow-y-hidden"><span class="hexa"></span><span class="flag"></span><span class="time-wrapper" data-aos="fade-right" data-aos-duration="1500"><span class="time">2021</span></span></div><div class="desc" data-aos="fade-left" data-aos-duration="1000">1st Global Cooperative Executive Masterclass held in Manila</div><div class="desc" data-aos="fade-left" data-aos-duration="1000">• The installation of CLIMBS Corner at the Rochdale Pioneers Museum at Rochdale, United Kingdom <br> <span class="text-xs italic">--- the cradle of Cooperative Education</span></div><div class="desc flex justify-center items-center" data-aos="fade-left" data-aos-duration="1000"><img${ssrRenderAttr("src", _imports_4)} alt=""></div><div class="desc" data-aos="fade-left" data-aos-duration="1000"><span class="text-sm italic">164+ participants: 885 coops nationwide</span> <br> 20 Virtual Training Conducted 1st Post Graduate Certificate in Cooperative Management in partnership with Asian (AIM). This led to the cementing of partnership and creation of the Cooperative College of the Philippines</div></div></li><li><div class="direction-l"><div class="flag-wrapper overflow-y-hidden"><span class="hexa"></span><span class="flag"></span><span class="time-wrapper" data-aos="fade-left" data-aos-duration="1500"><span class="time">2022</span></span></div><div class="desc italic text-bold" data-aos="fade-right" data-aos-duration="1000">Total Partner Co-ops: 132<br>Total ITF: PhP 50.088 M</div><div class="desc" data-aos="fade-right" data-aos-duration="1000"><h1 class="text-xl">• Strategic Planning Session for Cooperative College of the Philippines </h1> <br><span class="text-xs italic">• with Facilitator and Consultant Dr. Jose Romeo Nereus “Neric” Acosta </span><br><br><span class="text-xs italic">• June 16, 2022</span></div><div class="desc" data-aos="fade-right" data-aos-duration="1000"><h1 class="text-xl">• Historic Signing of Partnership agreement between the Co-operative College UK, CLIMBS Life and General Insurance Cooperative and recently established Cooperative College of the Philippines </h1> <br><span class="text-xs italic">• Silken Al-Andalus Palace, Sevilla, Spain </span><br><br><span class="text-xs italic">• June 19, 2022</span></div><div class="desc" data-aos="fade-right" data-aos-duration="1000"><h1 class="text-xl">• Historic Signing of Partnership agreement between the Co-operative College UK, CLIMBS Life and General Insurance Cooperative and recently established Cooperative College of the Philippines </h1> <br><span class="text-xs italic">• July 7, 2022</span></div></div></li><div class="w-full h-max overflow-y-hidden flex justify-center items-center text-center pt-8 text-5xl my-10">PRESENT</div></ul>`);
      _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
      _push(`</div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/ViewersPage/AboutUs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
