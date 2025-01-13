import{$ as N}from"./chunks/theme.CE8Jhfpu.js";import{a as b,E as c,b as U}from"./chunks/index.CmVtdrLR.js";import{E as o,a as h}from"./chunks/index.-dgBxn3g.js";import{E as $}from"./chunks/index.BdwKjW10.js";import{a4 as g,p as y,b as T,c as E,J as e,i as p,s as l,q as s,f as m,F as j}from"./chunks/framework.D82swi_l.js";const B=s("ul",null,[s("li",null,"每月五险一金计算")],-1),D=s("ul",null,[s("li",null,"每月缴税计算"),s("li",null,[m("每月"),s("code",null,"0.5k"),m("免税额度")])],-1),O=s("li",null,"每月收入计算",-1),A={__name:"salary",setup(H){const a=g({month:16.5,providentFund:5,isHasProvidentFund:!1,year:0});N.Get("permission").then(t=>{t==="jiahe"&&(a.month=20,a.providentFund=10)});const r=t=>Number(t.toFixed(5)),i=y(()=>{const t={oldMoney:r(a.month*.08),providentFundMoney:r(a.month*a.providentFund*.01),unemploymentMoney:r(a.month*.002),medicalMoney:r(a.month*.02)};return{...t,all:r(Object.values(t).reduce((d,n)=>d+Number(n),0))}}),P=t=>{const n=[{money:960,tax:.45,extraMoney:181.92},{money:660,tax:.35,extraMoney:85.92},{money:420,tax:.3,extraMoney:52.92},{money:300,tax:.25,extraMoney:31.92},{money:144,tax:.2,extraMoney:16.92},{money:36,tax:.1,extraMoney:2.52},{money:0,tax:.03,extraMoney:0}].find(u=>t>=u.money);return r(t*n.tax-n.extraMoney)},x=y(()=>{var d,n;const t=[];for(let u=1;u<=12;u++){const _=r(a.month*u),M=r(i.value.all*u),f=Math.max(r(_-M-5*u),0),v=P(f),k=r(((d=t[u-2])==null?void 0:d.allShouldTax)||0),F=r(v-k),V=r(a.month-F-i.value.all+(a.isHasProvidentFund?i.value.providentFundMoney*2:0));t.push({month:`${u}月`,allMoney:_,allFundMoney:M,allShouldMoney:f,allShouldTax:v,allAlreadyTax:k,needTax:F,hasMoney:V,allHasMoney:r((((n=t[u-2])==null?void 0:n.allHasMoney)||0)+V)})}return t}),S=y(()=>[{money:a.month,...i.value}]),w=y(()=>x.value.map(t=>({...t,money:a.month})));return(t,d)=>(T(),E(j,null,[e(l(U),{model:a,"label-position":"left","label-width":"90px"},{default:p(()=>[e(l(b),{label:"月薪"},{default:p(()=>[e(l(c),{modelValue:a.month,"onUpdate:modelValue":d[0]||(d[0]=n=>a.month=n),type:"number"},{append:p(()=>[m("k")]),_:1},8,["modelValue"])]),_:1}),e(l(b),{label:"公积金比例"},{default:p(()=>[e(l(c),{modelValue:a.providentFund,"onUpdate:modelValue":d[1]||(d[1]=n=>a.providentFund=n),type:"number"},{append:p(()=>[m("%")]),_:1},8,["modelValue"])]),_:1}),e(l(b),{label:"年终奖"},{default:p(()=>[e(l(c),{modelValue:a.year,"onUpdate:modelValue":d[2]||(d[2]=n=>a.year=n),type:"number"},{append:p(()=>[m("k")]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"]),B,e(l(h),{data:S.value,stripe:"",border:""},{default:p(()=>[e(l(o),{prop:"money",label:"收入(k)",width:"80px"}),e(l(o),{prop:"providentFundMoney",label:"公积金(k)"}),e(l(o),{prop:"oldMoney",label:"养老(k)"}),e(l(o),{prop:"medicalMoney",label:"医保(k)"}),e(l(o),{prop:"unemploymentMoney",label:"失业保险(k)"}),e(l(o),{prop:"all",label:"专项总扣除(k)"})]),_:1},8,["data"]),D,e(l(h),{data:x.value,stripe:"",border:""},{default:p(()=>[e(l(o),{prop:"month",label:"月份",width:"66px"}),e(l(o),{prop:"allMoney",label:"总收入(k)"}),e(l(o),{prop:"allFundMoney",label:"总扣除(k)"}),e(l(o),{prop:"allShouldMoney",label:"总应缴(k)"}),e(l(o),{prop:"allShouldTax",label:"总应缴税(k)"}),e(l(o),{prop:"allAlreadyTax",label:"总已缴(k)"}),e(l(o),{prop:"needTax",label:"需缴(k)"})]),_:1},8,["data"]),s("ul",null,[O,s("li",null,[m("是否提现公积金："),e(l($),{modelValue:a.isHasProvidentFund,"onUpdate:modelValue":d[3]||(d[3]=n=>a.isHasProvidentFund=n)},null,8,["modelValue"])])]),e(l(h),{data:w.value,stripe:"",border:""},{default:p(()=>[e(l(o),{prop:"month",label:"月份",width:"66px"}),e(l(o),{prop:"money",label:"收入(k)"}),e(l(o),{prop:"needTax",label:"需缴(k)"}),e(l(o),{prop:"hasMoney",label:"到手(k)"}),e(l(o),{prop:"allHasMoney",label:"总到手(k)"})]),_:1},8,["data"])],64))}},C=s("h2",{id:"薪资计算",tabindex:"-1"},[m("薪资计算 "),s("a",{class:"header-anchor",href:"#薪资计算","aria-label":'Permalink to "薪资计算"'},"​")],-1),L=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"menus/tool/compute/salary.md","filePath":"menus/tool/compute/salary.md","lastUpdated":1708939620000}'),I={name:"menus/tool/compute/salary.md"},Q=Object.assign(I,{setup(H){return(a,r)=>(T(),E("div",null,[C,e(A)]))}});export{L as __pageData,Q as default};
