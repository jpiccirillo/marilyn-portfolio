(function(e){function t(t){for(var n,s,r=t[0],l=t[1],c=t[2],d=0,p=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,r=1;r<a.length;r++){var l=a[r];0!==o[l]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},o={app:0},i=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"025a":function(e,t,a){e.exports=a.p+"img/headshot.1dfda0bc.jpg"},"035c":function(e,t,a){"use strict";a("98c8")},"088a":function(e,t,a){},"288b":function(e,t,a){"use strict";a("f96b")},"2f4b":function(e,t,a){"use strict";a("da67")},"512c":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);var n=a("2b0e"),o=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("div",{staticClass:"filler"}),t("Navbar"),t("router-view",{attrs:{id:"router"}})],1)},i=[],s=function(){var e=this,t=e._self._c;return t("nav",{staticClass:"navbar"},[e._m(0),t("NavbarButtons",{staticClass:"large-width-menu"}),t("Hamburger",{staticClass:"small-width-menu"})],1)},r=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"banner"},[t("h1",[e._v("Marilyn Piccirillo, PhD")]),t("h2",{staticClass:"oblique"},[e._v("Licensed Psychologist")])])}],l=function(){var e=this,t=e._self._c;return t("div",[t("div",{attrs:{id:"menu"}},[t("div",{attrs:{id:"x"},on:{click:e.menuOnClick}},[t("div",{staticClass:"bar",attrs:{id:"bar1"}}),t("div",{staticClass:"bar",attrs:{id:"bar2"}}),t("div",{staticClass:"bar",attrs:{id:"bar3"}})]),t("nav",{staticClass:"nav",attrs:{id:"nav"}},[t("ul",{staticClass:"navbar-buttons"},[t("li",{directives:[{name:"show",rawName:"v-show",value:"Home"!==e.$route.name,expression:"$route.name !== 'Home'"}]},[t("router-link",{attrs:{to:"home"}},[e._v("Home")])],1),t("li",{directives:[{name:"show",rawName:"v-show",value:"About"!==e.$route.name,expression:"$route.name !== 'About'"}]},[t("router-link",{attrs:{to:"about-me"}},[e._v("About Me")])],1),t("li",{directives:[{name:"show",rawName:"v-show",value:"faq"!==e.$route.name,expression:"$route.name !== 'faq'"}]},[t("router-link",{attrs:{to:"faq"}},[e._v("FAQ")])],1),t("li",{directives:[{name:"show",rawName:"v-show",value:"contact"!==e.$route.name,expression:"$route.name !== 'contact'"}]},[t("router-link",{attrs:{to:"contact"}},[e._v("Contact")])],1)])]),t("div",{staticClass:"menu-bg",attrs:{id:"menu-bg"}})])])},c=[];function u(){document.getElementById("x")&&document.getElementById("nav")&&document.getElementById("menu-bg")&&document.getElementById("router")&&(document.getElementById("x").classList.toggle("change"),document.getElementById("nav").classList.toggle("change"),document.getElementById("menu-bg").classList.toggle("change-bg"),document.getElementById("router").classList.toggle("change"))}var d={name:"Navbar",methods:{menuOnClick(){u()}}},p=d,h=(a("7f2f"),a("2877")),m=Object(h["a"])(p,l,c,!1,null,"2f905871",null),v=m.exports,f=function(){var e=this,t=e._self._c;return t("ul",{staticClass:"navbar-buttons"},[t("li",[t("router-link",{attrs:{to:"home"}},[e._v("Home")])],1),t("li",[t("router-link",{attrs:{to:"about-me"}},[e._v("About Me")])],1),t("li",[t("router-link",{attrs:{to:"faq"}},[e._v("FAQ")])],1),t("li",[t("router-link",{attrs:{to:"contact"}},[e._v("Contact")])],1)])},g=[],y={name:"Navbar"},b=y,w=(a("89d6"),Object(h["a"])(b,f,g,!1,null,"fd612144",null)),_=w.exports,k={name:"Navbar",components:{NavbarButtons:_,Hamburger:v}},I=k,C=(a("288b"),Object(h["a"])(I,s,r,!1,null,"6ff7a3e6",null)),x=C.exports,O={name:"App",components:{Navbar:x}},j=O,P=(a("fe60"),Object(h["a"])(j,o,i,!1,null,null,null)),B=P.exports,T=a("8c4f"),M=function(){var e=this,t=e._self._c;return t("GauzyBackground",{staticClass:"vertically-center",attrs:{background:a("dae8")}},[t("div",{staticClass:"card-image"},[t("div",{staticClass:"card"},[t("p",{staticClass:"quote"},[e._v(' "Letting go gives us freedom, and freedom is the only condition for happiness.” ')]),t("p",[e._v("― Thích Nhất Hạnh")]),t("hr"),t("p",[e._v(" I am a clinical psychologist providing teletherapy to adults living in Washington or New York. I specialize in using cognitive-behavioral approaches to help adults recover from trauma/PTSD, anxiety and mood symptoms, and OCD. I am also skilled in understanding and managing chronic thoughts of death, suicide, or self-harm, as well as substance misuse, using dialectical behavioral therapy. ")]),t("p",[e._v(" My approach to therapy is compassionate and authentic and I strive to bring a refreshing sense of realism, balance, and joy into your journey towards better health. ")]),t("ContactInfo")],1)])])},A=[],S=function(){var e=this,t=e._self._c;return t("div",{staticClass:"page-container"},[t("div",{staticClass:"background-container"},[t("div",{staticClass:"background",style:e.style}),t("div",{staticClass:"overlay"}),t("div",{staticClass:"card-container"},[e._t("default")],2)])])},N=[],D={name:"GauzyBackground",props:["background"],computed:{style(){return{backgroundImage:`url(${this.background})`}}}},E=D,z=(a("2f4b"),Object(h["a"])(E,S,N,!1,null,"2197cb59",null)),H=z.exports,$=function(){var e=this,t=e._self._c;return t("div",{staticClass:"contact-options"},[t("div",[e._v(" To learn more or to schedule an appointment, contact me at "),t("a",{staticClass:"monospace",attrs:{href:`mailto:${e.email}?subject=${e.subject}&body=${e.body}`}},[e._v(" "+e._s(e.email)+" ")]),e._v(" or call (646) 481-0175. ")])])},q=[],L={data(){return{email:"drmarilynpiccirillo@gmail.com",subject:"Interest in Phone Consult",body:"Hi, I am interested in scheduling a phone consultation to discuss..."}}},G=L,W=(a("7c85"),Object(h["a"])(G,$,q,!1,null,"48504fef",null)),Y=W.exports,F={name:"Home",props:{msg:String},components:{GauzyBackground:H,ContactInfo:Y}},U=F,Q=(a("035c"),Object(h["a"])(U,M,A,!1,null,"2c700db2",null)),R=Q.exports,J=function(){var e=this,t=e._self._c;return t("GauzyBackground",{attrs:{background:a("cdb5")}},[t("div",{staticClass:"grid two-columns"},[t("div",{staticClass:"headshot"},[t("img",{attrs:{src:a("025a")}})]),t("div",{staticClass:"card"},[t("h1",[e._v("About Me")]),t("p",[e._v(" I am a clinical psychologist and provide teletherapy to adults living in Washington or New York. I have nearly 10 years of experience helping adults recover from trauma/PTSD or those looking to better understand and manage symptoms of anxiety, OCD, chronic suicidality and forms of self-harm, including substance misuse. I am skilled at tailoring evidence-based treatments to fit your individual needs. My primary goal is to support you in reaching your goals, whatever they may be! ")]),t("p",[e._v(" As a human and therapist, I strive to be radically genuine. That means that I prioritize being direct, honest, and compassionate. I am committed to doing everything I can to understand you and your needs - as much as I am able. My goal is to support you in learning more about the way you experience your thoughts, feelings, behaviors across different situations. Therapy can feel uncomfortable when you are learning new ways of being, but it can also be fun! I am often irreverant, expressive, and goofy during sessions with the intention of bringing a refreshing sense of realism, balance, and joy into your journey towards better health. ")])]),t("div",{staticClass:"card"},[t("h1",[e._v("I specialize in providing")]),t("ul",[t("li",[e._v("Therapy to adults 18 years and older")]),t("li",[e._v(" Cognitive-behavior therapy for: ")]),t("ul",[t("li",[e._v("Trauma and PTSD")]),t("li",[e._v("Anxiety and mood symptoms")]),t("li",[e._v("OCD")])]),t("li",[e._v(" I strongly value providing ethical and compassionate care around ")]),t("ul",[t("li",[e._v("Suicidal thoughts and behaviors")]),t("li",[e._v("Alcohol and substance use")]),t("li",[e._v(" Understanding the impact of systemic division, exclusion, and marginalization on physical and mental health ")])])])]),t("div",{staticClass:"card"},[t("h1",[e._v("Experience")]),t("p",[e._v(" I am skilled in cognitive-behavioral and related therapeutic approaches to manage symptoms of trauma/PTSD, anxiety, OCD, as well as suicidality and other forms of self-harm, including substance misuse. ")]),e._v(" These therapies are often known as: "),t("ul",[t("li",[e._v(" Exposure and Response Prevention ")]),t("li",[e._v("Prolonged Exposure")]),t("li",[e._v(" Cognitive Processing Therapy ")]),t("li",[e._v(" Acceptance and Commitment Therapy ")]),t("li",[e._v(" Dialectical Behavior Therapy ")])]),t("p",[e._v(" I have worked in a variety of medical organizations and am familiar with multiple systems and levels of care, including outpatient, partial hospital, inpatient and other crisis care and medical settings. I completed my clinical internship in a Veteran's hospital and deeply value providing care to US Veterans and their families. ")])]),t("div",{staticClass:"card"},[t("h1",[e._v("Education and Licensure")]),t("ul",[t("li",[e._v(" Temple University (Masters) ")]),t("li",[e._v("Washington University in St. Louis (Doctorate)")]),t("li",[e._v(" Licensed in Washington: PY61122055M ")]),t("li",[e._v(" Licensed in New York: 025345 ")])])])])])},V=[],K={name:"HelloWorld",props:{msg:String},components:{GauzyBackground:H}},X=K,Z=(a("f61d"),Object(h["a"])(X,J,V,!1,null,"5b357045",null)),ee=Z.exports,te=function(){var e=this,t=e._self._c;return t("GauzyBackground",{attrs:{background:a("d1ba")}},[t("div",{staticClass:"grid two-columns"},[t("div",{staticClass:"card"},[t("h1",[e._v("When, where, and for how long will we meet?")]),t("p",[e._v(" I meet via telehealth with adults living in Washington or New York using a secure, virtual videoconferencing platform. ")]),t("p",[e._v(" Some folks find it's easier to make progress when meeting briefly for a shorter period of time, others will prefer to space sessions out over time. Regardless, I find it's easiest to make progress on an issue when we meet weekly, at least for a short period of time in the beginning. Our sessions will typically last 50 minutes and I can also provide out-of-session coaching via text as needed. ")])]),t("div",{staticClass:"card"},[t("h1",[e._v('Is your approach "Talk Therapy"?')]),t("p",[e._v("Yes and no!")]),t("p",[e._v(" I do not prescribe medications so much of our time together will be spent talking about the issues that concern you, the changes you've noticed, and ways to approach situations differently. In that way, we'll be \"talking\" about the important issues for you! ")]),t("p",[e._v(" At the same time, I believe there's much to be gained by focusing on what you can be \"doing\" differently to get to where you want to be. During session, we'll spend time talking about how you can approach memories or situations differently. My goal as your therapist will be to help coach and support you in practicing new ways of approaching life both in and out of session. I may also ask you to complete questionnaires in between sessions to help me track how we're doing towards reaching your goals. ")])]),t("div",{staticClass:"card"},[t("h1",[e._v("Who do you work best with?")]),t("p",[e._v(" My primary goal is to support YOU in working towards your goals. I've been fortunate to meet and work with hundreds of people who identify with a range of backgrounds and life experiences. My goal is to work towards understanding how your perspective is shaped by your identity and life experiences and to to be mindful of the ways in which I may be limited in fully understanding all aspects of your experience. I strive to help you balance between change when possible and acceptance when change is not possible. ")]),t("p",[e._v(" I have extensive experience using trauma-focused, evidence-based therapies (Prolonged Exposure and Cognitive Processing Therapy) to facilitate recovery, particularly from trauma that is interpersonal or sexual in nature. I also skilled in using evidence-based therapies such as Cognitive Behavior Therapy and Exposure and Response Prevention to manage symptoms of anxiety and OCD. Finally, I've trained in full-model Dialectical Behavior Therapy to manage chronic suicidality and forms of self-harm (e.g., non-suicidal self injury, substance misuse). During the first few sessions, I'll ask lots of questions to better understand what you're experiencing, how I can help, and develop a collaborative plan to help you meet your goals. ")])]),t("div",{staticClass:"card"},[t("h1",[e._v("Insurance and payment")]),t("p",[e._v(" My rates for therapy are available upon request. ")]),t("p",[e._v(" I am not paneled with insurance companies and so I'm considered an out-of-network provider. However, if your insurance provides out of network benefits, you may be able to use your benefits to cover part of our sessions. I will provide you with an invoice for reimbursement purposes. ")]),t("p",[e._v(" Before we begin, I encourage you to ask your insurance provider: ")]),t("ol",[t("li",[e._v(" If you have out-of-network benefits for mental health/behavioral health treatment ")]),t("li",[e._v(" The amount you would pay in co-insurance (the amount you are responsible for) ")]),t("li",[e._v(" If you have an out-of-network deductible that needs to be met before you are eligible for reimbursement ")])]),t("p",[e._v(" I accept payment via debit/credit card. You are welcome to use your HSA/FSA debit card to pay for sessions. ")])])])])},ae=[],ne={name:"FAQ",components:{GauzyBackground:H}},oe=ne,ie=(a("ad09"),Object(h["a"])(oe,te,ae,!1,null,"11bdb582",null)),se=ie.exports,re=function(){var e=this,t=e._self._c;return t("GauzyBackground",{attrs:{background:a("fa03")}},[t("div",{staticClass:"grid custom-grid"},[t("div",{staticClass:"card a"},[t("h1",[e._v("Let's talk!")]),t("p"),t("p",[e._v(" I provide a 20-minute phone consultation to answer questions about logistics and disucss my approach to therapy. A phone consultation can very helpful in learning more about each other and how we might work together. ")]),t("p",[e._v(" Please reach out, I'd love to hear from you! ")]),t("ContactInfo")],1)])])},le=[],ce={name:"Contact",components:{GauzyBackground:H,ContactInfo:Y}},ue=ce,de=(a("7221"),Object(h["a"])(ue,re,le,!1,null,"0618fd3d",null)),pe=de.exports;n["a"].use(T["a"]);const he=[{path:"/",name:"Home",component:R,meta:{title:()=>"Home"}},{path:"/about-me",name:"About",component:ee,meta:{title:()=>"About Me"}},{path:"/faq",name:"faq",component:se,meta:{title:()=>"FAQ"}},{path:"/contact",name:"contact",component:pe,meta:{title:()=>"Contact Me"}},{path:"*",redirect:"/"}],me=new T["a"]({mode:"history",base:"/",routes:he,scrollBehavior:()=>({x:0,y:0})});me.beforeEach(async(e,t,a)=>{document.title="Marilyn Piccirillo :: "+e.meta.title(e)||"Marilyn Piccirillo",u(),a()});var ve=me;n["a"].config.productionTip=!1,new n["a"]({router:ve,render:e=>e(B)}).$mount("#app")},"5d35":function(e,t,a){},"6f0c":function(e,t,a){},7221:function(e,t,a){"use strict";a("5d35")},"7c85":function(e,t,a){"use strict";a("512c")},"7f2f":function(e,t,a){"use strict";a("a68c")},"89d6":function(e,t,a){"use strict";a("f31a")},"98c8":function(e,t,a){},a68c:function(e,t,a){},ad09:function(e,t,a){"use strict";a("088a")},cdb5:function(e,t,a){e.exports=a.p+"img/beach.bf69c88c.jpeg"},d1ba:function(e,t,a){e.exports=a.p+"img/waterfall.dea3322d.webp"},da67:function(e,t,a){},dae8:function(e,t,a){e.exports=a.p+"img/sea.c30b3a58.webp"},f172:function(e,t,a){},f31a:function(e,t,a){},f61d:function(e,t,a){"use strict";a("6f0c")},f96b:function(e,t,a){},fa03:function(e,t,a){e.exports=a.p+"img/skyline.58c34cd4.webp"},fe60:function(e,t,a){"use strict";a("f172")}});
//# sourceMappingURL=app.25943d59.js.map