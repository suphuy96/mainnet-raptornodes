"use strict";(self["webpackChunkRaptorNodes"]=self["webpackChunkRaptorNodes"]||[]).push([[82],{77082:(e,t,o)=>{o.r(t),o.d(t,{default:()=>x});var l=o(83673),a=o(62323);const r=(0,l.Uk)("raptornodes.com"),i=["src"];function n(e,t,o,n,s,u){const c=(0,l.up)("q-btn"),m=(0,l.up)("q-toolbar-title"),p=(0,l.up)("q-avatar"),d=(0,l.up)("q-tooltip"),h=(0,l.up)("q-toolbar"),f=(0,l.up)("q-header"),g=(0,l.up)("router-view"),b=(0,l.up)("q-page-container"),w=(0,l.up)("q-layout");return(0,l.wg)(),(0,l.j4)(w,{view:"lHh Lpr lFf"},{default:(0,l.w5)((()=>[(0,l.Wm)(f,{elevated:"",class:"bg-theme"},{default:(0,l.w5)((()=>[(0,l.Wm)(h,{style:(0,a.j5)(e.$q.platform.is.mobile?"padding:0 4px":"")},{default:(0,l.w5)((()=>[(0,l.Wm)(m,{class:"text-uppercase"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{onClick:t[0]||(t[0]=t=>e.goRouter("/")),class:"font-raptornodes btn-fix-mobile-name"},{default:(0,l.w5)((()=>[r])),_:1})])),_:1}),(0,l._)("div",null,[(0,l.Wm)(c,{class:"btn-fix-mobile",color:"/plans"===e.pathActive?"orange":"white",label:"Plans",flat:"",onClick:t[1]||(t[1]=t=>e.goRouter("plans"))},null,8,["color"]),(0,l.Wm)(c,{class:"btn-fix-mobile",color:"/roi"===e.pathActive?"orange":"white",label:"Roi",flat:"",onClick:t[2]||(t[2]=t=>e.goRouter("roi"))},null,8,["color"]),(0,l.Wm)(c,{class:"btn-fix-mobile",color:"/networks"===e.pathActive?"orange":"white",label:"NetWork",flat:"",onClick:t[3]||(t[3]=t=>e.goRouter("networks"))},null,8,["color"]),(0,l.Wm)(c,{class:"btn-fix-mobile",color:"/faq"===e.pathActive?"orange":"white",label:"Faq",flat:"",onClick:t[4]||(t[4]=t=>e.goRouter("faq"))},null,8,["color"])]),(0,l.Wm)(c,{class:"btn-fix-mobile",color:"/login"===e.pathActive?"orange":"white",label:"App",flat:"",onClick:e.goApp},{default:(0,l.w5)((()=>[!e.$q.platform.is.mobile&&e.me&&""!==e.me._id?((0,l.wg)(),(0,l.j4)(p,{key:0,style:{float:"left","margin-left":"6px"},size:"1.2rem"},{default:(0,l.w5)((()=>[(0,l._)("img",{src:e.me.profile.picture},null,8,i)])),_:1})):(0,l.kq)("",!0),(0,l.Wm)(d,{modelValue:e.showing,"onUpdate:modelValue":t[5]||(t[5]=t=>e.showing=t),class:"card-dark text-amber animate-wiggle2",style:{width:"max-content"}},{default:(0,l.w5)((()=>[(0,l.Uk)("Hey! "+(0,a.zw)(e.me.profile.name)+" Go to Dashboard now.",1)])),_:1},8,["modelValue"])])),_:1},8,["color","onClick"])])),_:1},8,["style"])])),_:1}),(0,l.Wm)(b,null,{default:(0,l.w5)((()=>[(0,l.Wm)(g)])),_:1})])),_:1})}var s=o(61959),u=o(79582);const c=(0,l.aZ)({name:"MainLayout",components:{},data(){return{tab:"/",showing:!1}},computed:{pathActive(){return this.$route.path},me(){return this.$store.state.user.me}},setup(){const e=(0,s.iH)(!1),t=(0,u.tv)(),o=e=>{t.push({path:e}).then((e=>{console.log(e)}))};return{goRouter:o,leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}},methods:{goApp(){this.me&&""!==this.me._id?this.me&&"Admin"===this.me.rules?this.goRouter("/admin/dashboard"):this.goRouter("/dashboard"):this.goRouter("login")}},created(){this.me&&""!==this.me._id&&(this.showing=!0)}});var m=o(74260),p=o(83066),d=o(53812),h=o(39570),f=o(13747),g=o(2165),b=o(75096),w=o(5363),k=o(41762),v=o(57547),q=o(3269),_=o(72652),W=o(7518),Z=o.n(W);const R=(0,m.Z)(c,[["render",n]]),x=R;Z()(c,"components",{QLayout:p.Z,QHeader:d.Z,QToolbar:h.Z,QToolbarTitle:f.Z,QBtn:g.Z,QAvatar:b.Z,QTooltip:w.Z,QFooter:k.Z,QTabs:v.Z,QTab:q.Z,QPageContainer:_.Z})}}]);