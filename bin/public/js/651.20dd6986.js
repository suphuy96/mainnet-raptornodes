"use strict";(self["webpackChunkRaptorNodes"]=self["webpackChunkRaptorNodes"]||[]).push([[651],{85651:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ge});var o=a(83673),l=a(62323);const n={style:{"max-width":"1024px",margin:"0 auto"}},c=(0,o._)("div",{class:"text-h5 text-amber col-12 q-pa-sm"}," Two Factor Authentication ",-1),s={class:"col-12 s-pa-md"},r={class:"text-h5 col-12 q-pa-sm"},i={key:0},u={class:"text-red",style:{margin:"0px"}},d=(0,o.Uk)("You are required to enable 2-Factor Authentication "),p=(0,o.Uk)(" what is this? "),m=(0,o.Uk)(" You have lost connection to the internet. This app is offline. "),f=(0,o._)("a",{class:"text-white text-h6",href:"https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=vi&gl=US",target:"_blank"},"Android",-1),h=(0,o._)("a",{style:{"margin-left":"10px"},class:"text-white text-h6",href:"https://apps.apple.com/vn/app/google-authenticator/id388497605",target:"_blank"},"Ios",-1),y=(0,o._)("p",{class:"text-red",style:{margin:"0px"}},"Turn on 2-step login to help you feel secure about your account money.",-1),g={style:{"background-color":"#fff",width:"240px",height:"240px"}},b={class:"box"},w=(0,o._)("span",null,null,-1),k=(0,o._)("span",null,null,-1),v=(0,o._)("span",null,null,-1),_=(0,o._)("span",null,null,-1),x={class:"content"},q={key:1},C=(0,o.Uk)("You cannot disable 2FA!"),W=(0,o._)("div",{class:"text-h5 text-amber col-12 q-pa-sm"},"Link your Discord Account",-1),Z={class:"col-12 s-pa-md"},T=(0,o._)("div",{class:"text-h6 col-12 q-pa-sm"},"If you are currently earning with Raptor Nodes, between August 2021 and March 2022 please link your Discord account. This will help us map your account to your earnings on the old spread sheet. ",-1),U={key:1,class:"q-pa-md"},Q=(0,o.Uk)(" Hey : "),R=(0,o.Uk)(),S=(0,o.Uk)(" DiscordID: "),z=(0,o._)("div",{class:"text-h5 text-amber col-12 q-pa-sm"}," Default Currency ",-1),D={class:"col-12 q-pa-sm"},I={class:"text-h6"};function V(e,t,a,V,A,L){const $=(0,o.up)("q-separator"),j=(0,o.up)("q-icon"),P=(0,o.up)("q-banner"),E=(0,o.up)("q-popup-proxy"),F=(0,o.up)("q-btn"),N=(0,o.up)("qrcode-vue"),O=(0,o.up)("q-input"),Y=(0,o.up)("q-tooltip"),B=(0,o.up)("q-toggle"),G=(0,o.up)("q-img"),H=(0,o.up)("q-avatar"),M=(0,o.up)("q-item-label"),K=(0,o.up)("q-item-section"),J=(0,o.up)("q-item"),X=(0,o.up)("q-select"),ee=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(ee,{class:"row items-center justify-evenly q-pa-lg",style:{display:"block"}},{default:(0,o.w5)((()=>[(0,o._)("div",n,[c,(0,o.Wm)($),(0,o._)("div",s,[(0,o._)("div",r," Status: "+(0,l.zw)(e.me.enableTfa?"Enable":"Disable"),1),e.me.enableTfa?((0,o.wg)(),(0,o.iD)("div",q,[(0,o.Wm)(B,{disable:"",modelValue:e.enableTfa,"onUpdate:modelValue":t[1]||(t[1]=t=>e.enableTfa=t),label:"2fa"},{default:(0,o.w5)((()=>[(0,o.Wm)(Y,null,{default:(0,o.w5)((()=>[C])),_:1})])),_:1},8,["modelValue"])])):((0,o.wg)(),(0,o.iD)("div",i,[(0,o._)("p",u,[d,(0,o.Wm)(F,{class:"text-white"},{default:(0,o.w5)((()=>[p,(0,o.Wm)(E,null,{default:(0,o.w5)((()=>[(0,o.Wm)(P,null,{avatar:(0,o.w5)((()=>[(0,o.Wm)(j,{name:"eva-question-mark-outline",color:"primary"})])),default:(0,o.w5)((()=>[m,f,h])),_:1})])),_:1})])),_:1})]),y,(0,o._)("p",null,[(0,o.Uk)("Secret Key: "+(0,l.zw)(e.tempSecret)+" ",1),(0,o.Wm)(F,{dense:"",icon:"fas fa-copy",onClick:e.copyToClipboard},null,8,["onClick"])]),(0,o._)("div",g,[(0,o._)("div",b,[w,k,v,_,(0,o._)("div",x,[(0,o.Wm)(N,{style:{"background-color":"#fff",padding:"4px"},size:"200",value:e.dataURL},null,8,["value"])])])]),(0,o.Wm)(O,{dense:"",style:{width:"240px"},modelValue:e.token,"onUpdate:modelValue":t[0]||(t[0]=t=>e.token=t),label:"input code in Google app"},null,8,["modelValue"]),(0,o.Wm)(F,{label:"verify",onClick:e.verify},null,8,["onClick"])]))]),W,(0,o.Wm)($),(0,o._)("div",Z,[T,e.me.discord&&""!==e.me.discord?((0,o.wg)(),(0,o.iD)("div",U,[Q,(0,o._)("b",null,(0,l.zw)(e.me.profile.discordName),1),R,(0,o.Wm)(H,{size:"26px"},{default:(0,o.w5)((()=>[(0,o.Wm)(G,{src:e.me.profile.discordAvatar},null,8,["src"])])),_:1}),S,(0,o._)("b",null,(0,l.zw)(e.me.discord),1)])):((0,o.wg)(),(0,o.j4)(F,{key:0,label:"Link discord",onClick:e.redirectLinkDiscord},null,8,["onClick"]))]),z,(0,o.Wm)($),(0,o._)("div",D,[(0,o._)("div",I,"Currency "+(0,l.zw)(e.currency.symbol)+" - "+(0,l.zw)(e.currency.charCode),1),(0,o.Wm)(X,{dense:"",dark:"",options:e.currencys,modelValue:e.currency,"onUpdate:modelValue":[t[2]||(t[2]=t=>e.currency=t),e.changeCurrency],onInputValue:e.changeCurrency,onChange:e.changeCurrency,"option-value":"symbol",style:{width:"310px"}},{option:(0,o.w5)((e=>[(0,o.Wm)(J,(0,o.dG)({dense:""},e.itemProps),{default:(0,o.w5)((()=>[(0,o.Wm)(K,null,{default:(0,o.w5)((()=>[(0,o.Wm)(M,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,l.zw)(e.opt.country),1)])),_:2},1024),(0,o.Wm)(M,{caption:""},{default:(0,o.w5)((()=>[(0,o.Uk)((0,l.zw)(e.opt.symbol)+" - "+(0,l.zw)(e.opt.charCode),1)])),_:2},1024)])),_:2},1024)])),_:2},1040)])),selected:(0,o.w5)((()=>[(0,o.Wm)(J,{dense:""},{default:(0,o.w5)((()=>[(0,o.Wm)(K,null,{default:(0,o.w5)((()=>[(0,o.Wm)(M,null,{default:(0,o.w5)((()=>[(0,o.Uk)((0,l.zw)(e.currency.country),1)])),_:1}),(0,o.Wm)(M,{caption:""},{default:(0,o.w5)((()=>[(0,o.Uk)((0,l.zw)(e.currency.symbol)+" - "+(0,l.zw)(e.currency.charCode),1)])),_:1})])),_:1})])),_:1})])),_:1},8,["options","modelValue","onUpdate:modelValue","onInputValue","onChange"])])])])),_:1})}var A,L=a(25310),$=a(41914),j=a(64434),P=a(86045),E=a.n(P),F=a(17638),N=a(3515),O=a(85777),Y=a(55181),B=a(94756),G=function(e,t,a,o){var l,n=arguments.length,c=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,a):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)c=Reflect.decorate(e,t,a,o);else for(var s=e.length-1;s>=0;s--)(l=e[s])&&(c=(n<3?l(c):n>3?l(t,a,c):l(t,a))||c);return n>3&&c&&Object.defineProperty(t,a,c),c},H=function(e,t){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,t)};let M=class extends O.w3{me;currencys=F.Z;tab="tfa";enableTfa=!1;dataURL="";tempSecret="";token="";get currency(){return this.$store.state.balance.currency}set currency(e){this.$store.commit("balance/setCurrency",e)}changeCurrency(){console.log("changeCurrency"),this.$store.commit("balance/setCurrency",this.currency)}async verify(){let e=!1;const t=await this.$apollo.mutate({mutation:L.ZH,variables:{token:this.token}}).catch((t=>{e=!0,j.Z.create({message:`Error! ${t.toString()||""}`,color:"red",position:"center"})}));t&&t.data&t.data.verifyTfa?(this.enableTfa=!0,j.Z.create({message:"2FA Successfully Enabled!",position:"center"}),await this.$store.dispatch("user/getInfoRefresh")):e||(this.enableTfa=!0,j.Z.create({message:"2FA Successfully Enabled!",position:"center"}),await this.$store.dispatch("user/getInfoRefresh"))}copyToClipboard(){(0,$.Z)(this.tempSecret).then((()=>{console.log("đầ")})).catch((()=>{console.log("")}))}redirectLinkDiscord(){console.log(location.href),location.href=N.Z.isDev?"http://localhost:3456/auth/discord":location.origin+"/auth/discord"}async created(){if(this.me.enableTfa)this.enableTfa=!0;else{this.enableTfa=!1;const e=await this.$apollo.mutate({mutation:L.$y,variables:{}});this.dataURL=e.data?.setupTfa?.dataURL||"",this.tempSecret=e.data?.setupTfa?.tempSecret||""}}};G([(0,Y.ZM)((e=>e.user.me)),H("design:type","function"===typeof(A="undefined"!==typeof B.e&&B.e)?A:Object)],M.prototype,"me",void 0),M=G([(0,O.Ei)({name:"SettingsPage",components:{QrcodeVue:E()},computed:{}})],M);const K=M;var J=a(74260),X=a(24379),ee=a(65869),te=a(2165),ae=a(83944),oe=a(15607),le=a(24554),ne=a(64689),ce=a(28886),se=a(5363),re=a(75096),ie=a(24027),ue=a(63314),de=a(83414),pe=a(52035),me=a(2350),fe=a(7518),he=a.n(fe);const ye=(0,J.Z)(K,[["render",V]]),ge=ye;he()(K,"components",{QPage:X.Z,QSeparator:ee.Z,QBtn:te.Z,QPopupProxy:ae.Z,QBanner:oe.Z,QIcon:le.Z,QInput:ne.Z,QToggle:ce.Z,QTooltip:se.Z,QAvatar:re.Z,QImg:ie.Z,QSelect:ue.Z,QItem:de.Z,QItemSection:pe.Z,QItemLabel:me.Z})}}]);