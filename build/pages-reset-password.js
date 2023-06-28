"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[896],{4402:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var s=a(5118),r=a(7401),n=a(3398),o=a.n(n),i=a(1856),l=a(3100),c=a(6979),p=a(2675),m=a(8911),u=a(1887),d=a(7536),g=a(6679),_=a(1437),E=a(5232),y=a(9385),w=a(352),f=a(4671),h=a(4753);const b=()=>{const e=(0,d.cI)(),t=(0,w.Z)(),[a,n]=(0,r.useState)(""),[o,b]=(0,r.useState)(!1),v=(0,f.Z)(),{pathname:S}=(0,h.TH)(),Z=(0,g.useShopperCustomersMutation)(g.ShopperCustomersMutations.GetResetPasswordToken),A=function(){var t=(0,s.Z)((function*({email:t}){const a={login:t};try{yield Z.mutateAsync({body:a}),n(t),b(!o)}catch(t){e.setError("global",{type:"manual",message:t.message})}}));return function(e){return t.apply(this,arguments)}}();return(0,r.useEffect)((()=>{v.sendViewPage(S)}),[]),r.createElement(l.xu,{"data-testid":"reset-password-page",bg:"gray.50",py:[8,16]},r.createElement(_.Z,{title:"Reset password",description:"Reset customer password"}),r.createElement(c.W,{paddingTop:16,width:["100%","407px"],bg:"white",paddingBottom:14,marginTop:8,marginBottom:8,borderRadius:"base"},o?r.createElement(p.K,{justify:"center",align:"center",spacing:6},r.createElement(y.Oc,{width:"60px",height:"auto"}),r.createElement(m.x,{align:"center",fontSize:"md"},r.createElement(i.Z,{defaultMessage:[{type:0,value:"Password Reset"}],id:"reset_password.title.password_reset"})),r.createElement(p.K,{spacing:6,pt:4},r.createElement(m.x,{align:"center",fontSize:"sm"},r.createElement(i.Z,{defaultMessage:[{type:0,value:"You will receive an email at "},{type:8,value:"b",children:[{type:1,value:"email"}]},{type:0,value:" with a link to reset your password shortly."}],id:"reset_password.info.receive_email_shortly",values:{email:a,b:e=>r.createElement("b",null,e)}})),r.createElement(u.z,{onClick:()=>t("/login")},r.createElement(i.Z,{defaultMessage:[{type:0,value:"Back to Sign In"}],id:"reset_password.button.back_to_sign_in"})))):r.createElement(E.Z,{form:e,submitForm:A,clickSignIn:()=>t("/login")})))};b.getTemplateName=()=>"reset-password",b.propTypes={match:o().object};const v=b}}]);