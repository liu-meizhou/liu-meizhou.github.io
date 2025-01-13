import{p as Pe,h as _e,j as Ve,m as ge,d as Be,ao as Ae,i as ie,r as Fe,e as Re,k as te,q as se,_ as me,w as He,as as Te,a as x,E as P,b as Ne}from"./chunks/index.CmVtdrLR.js";import{r as ne,g as Ie,O as ve,p as V,a2 as Ee,ao as Ce,d as L,b as M,h as E,i as p,c as C,F as ye,e as D,s as l,n as Z,K as W,j as le,N as $e,Y as Ue,a4 as ke,ad as ue,w as je,a as Ge,J as c,f as A,t as j,q as Q}from"./chunks/framework.D82swi_l.js";import{E as S,a as Oe}from"./chunks/index.-dgBxn3g.js";const ze=Symbol(),fe=ne();function De(n,e=void 0){const t=Ie()?ve(ze,fe):fe;return V(()=>{var r,o;return(o=(r=t.value)==null?void 0:r[n])!=null?o:e})}const xe=Symbol("buttonGroupContextKey"),Le=(n,e)=>{Pe({from:"type.text",replacement:"link",version:"3.0.0",scope:"props",ref:"https://element-plus.org/en-US/component/button.html#button-attributes"},V(()=>n.type==="text"));const t=ve(xe,void 0),r=De("button"),{form:o}=_e(),a=Ve(V(()=>t==null?void 0:t.size)),i=ge(),d=ne(),u=Ee(),s=V(()=>n.type||(t==null?void 0:t.type)||""),f=V(()=>{var h,k,m;return(m=(k=n.autoInsertSpace)!=null?k:(h=r.value)==null?void 0:h.autoInsertSpace)!=null?m:!1}),g=V(()=>n.tag==="button"?{ariaDisabled:i.value||n.loading,disabled:i.value||n.loading,autofocus:n.autofocus,type:n.nativeType}:{}),H=V(()=>{var h;const k=(h=u.default)==null?void 0:h.call(u);if(f.value&&(k==null?void 0:k.length)===1){const m=k[0];if((m==null?void 0:m.type)===Ce){const y=m.children;return new RegExp("^\\p{Unified_Ideograph}{2}$","u").test(y.trim())}}return!1});return{_disabled:i,_size:a,_type:s,_ref:d,_props:g,shouldAddSpace:H,handleClick:h=>{n.nativeType==="reset"&&(o==null||o.resetFields()),e("click",h)}}},qe=["default","primary","success","warning","info","danger","text",""],We=["button","submit","reset"],X=Be({size:Ae,disabled:Boolean,type:{type:String,values:qe,default:""},icon:{type:ie},nativeType:{type:String,values:We,default:"button"},loading:Boolean,loadingIcon:{type:ie,default:()=>Fe},plain:Boolean,text:Boolean,link:Boolean,bg:Boolean,autofocus:Boolean,round:Boolean,circle:Boolean,color:String,dark:Boolean,autoInsertSpace:{type:Boolean,default:void 0},tag:{type:Re([String,Object]),default:"button"}}),Ke={click:n=>n instanceof MouseEvent};function b(n,e){Je(n)&&(n="100%");var t=Ye(n);return n=e===360?n:Math.min(e,Math.max(0,parseFloat(n))),t&&(n=parseInt(String(n*e),10)/100),Math.abs(n-e)<1e-6?1:(e===360?n=(n<0?n%e+e:n%e)/parseFloat(String(e)):n=n%e/parseFloat(String(e)),n)}function G(n){return Math.min(1,Math.max(0,n))}function Je(n){return typeof n=="string"&&n.indexOf(".")!==-1&&parseFloat(n)===1}function Ye(n){return typeof n=="string"&&n.indexOf("%")!==-1}function Se(n){return n=parseFloat(n),(isNaN(n)||n<0||n>1)&&(n=1),n}function O(n){return n<=1?"".concat(Number(n)*100,"%"):n}function R(n){return n.length===1?"0"+n:String(n)}function Ze(n,e,t){return{r:b(n,255)*255,g:b(e,255)*255,b:b(t,255)*255}}function ce(n,e,t){n=b(n,255),e=b(e,255),t=b(t,255);var r=Math.max(n,e,t),o=Math.min(n,e,t),a=0,i=0,d=(r+o)/2;if(r===o)i=0,a=0;else{var u=r-o;switch(i=d>.5?u/(2-r-o):u/(r+o),r){case n:a=(e-t)/u+(e<t?6:0);break;case e:a=(t-n)/u+2;break;case t:a=(n-e)/u+4;break}a/=6}return{h:a,s:i,l:d}}function K(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*(6*t):t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function Qe(n,e,t){var r,o,a;if(n=b(n,360),e=b(e,100),t=b(t,100),e===0)o=t,a=t,r=t;else{var i=t<.5?t*(1+e):t+e-t*e,d=2*t-i;r=K(d,i,n+1/3),o=K(d,i,n),a=K(d,i,n-1/3)}return{r:r*255,g:o*255,b:a*255}}function de(n,e,t){n=b(n,255),e=b(e,255),t=b(t,255);var r=Math.max(n,e,t),o=Math.min(n,e,t),a=0,i=r,d=r-o,u=r===0?0:d/r;if(r===o)a=0;else{switch(r){case n:a=(e-t)/d+(e<t?6:0);break;case e:a=(t-n)/d+2;break;case t:a=(n-e)/d+4;break}a/=6}return{h:a,s:u,v:i}}function Xe(n,e,t){n=b(n,360)*6,e=b(e,100),t=b(t,100);var r=Math.floor(n),o=n-r,a=t*(1-e),i=t*(1-o*e),d=t*(1-(1-o)*e),u=r%6,s=[t,i,a,a,d,t][u],f=[d,t,t,i,a,a][u],g=[a,a,d,t,t,i][u];return{r:s*255,g:f*255,b:g*255}}function he(n,e,t,r){var o=[R(Math.round(n).toString(16)),R(Math.round(e).toString(16)),R(Math.round(t).toString(16))];return r&&o[0].startsWith(o[0].charAt(1))&&o[1].startsWith(o[1].charAt(1))&&o[2].startsWith(o[2].charAt(1))?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function et(n,e,t,r,o){var a=[R(Math.round(n).toString(16)),R(Math.round(e).toString(16)),R(Math.round(t).toString(16)),R(tt(r))];return o&&a[0].startsWith(a[0].charAt(1))&&a[1].startsWith(a[1].charAt(1))&&a[2].startsWith(a[2].charAt(1))&&a[3].startsWith(a[3].charAt(1))?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0)+a[3].charAt(0):a.join("")}function tt(n){return Math.round(parseFloat(n)*255).toString(16)}function pe(n){return v(n)/255}function v(n){return parseInt(n,16)}function nt(n){return{r:n>>16,g:(n&65280)>>8,b:n&255}}var ee={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function rt(n){var e={r:0,g:0,b:0},t=1,r=null,o=null,a=null,i=!1,d=!1;return typeof n=="string"&&(n=it(n)),typeof n=="object"&&(_(n.r)&&_(n.g)&&_(n.b)?(e=Ze(n.r,n.g,n.b),i=!0,d=String(n.r).substr(-1)==="%"?"prgb":"rgb"):_(n.h)&&_(n.s)&&_(n.v)?(r=O(n.s),o=O(n.v),e=Xe(n.h,r,o),i=!0,d="hsv"):_(n.h)&&_(n.s)&&_(n.l)&&(r=O(n.s),a=O(n.l),e=Qe(n.h,r,a),i=!0,d="hsl"),Object.prototype.hasOwnProperty.call(n,"a")&&(t=n.a)),t=Se(t),{ok:i,format:n.format||d,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:t}}var at="[-\\+]?\\d+%?",ot="[-\\+]?\\d*\\.\\d+%?",F="(?:".concat(ot,")|(?:").concat(at,")"),J="[\\s|\\(]+(".concat(F,")[,|\\s]+(").concat(F,")[,|\\s]+(").concat(F,")\\s*\\)?"),Y="[\\s|\\(]+(".concat(F,")[,|\\s]+(").concat(F,")[,|\\s]+(").concat(F,")[,|\\s]+(").concat(F,")\\s*\\)?"),w={CSS_UNIT:new RegExp(F),rgb:new RegExp("rgb"+J),rgba:new RegExp("rgba"+Y),hsl:new RegExp("hsl"+J),hsla:new RegExp("hsla"+Y),hsv:new RegExp("hsv"+J),hsva:new RegExp("hsva"+Y),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function it(n){if(n=n.trim().toLowerCase(),n.length===0)return!1;var e=!1;if(ee[n])n=ee[n],e=!0;else if(n==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var t=w.rgb.exec(n);return t?{r:t[1],g:t[2],b:t[3]}:(t=w.rgba.exec(n),t?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=w.hsl.exec(n),t?{h:t[1],s:t[2],l:t[3]}:(t=w.hsla.exec(n),t?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=w.hsv.exec(n),t?{h:t[1],s:t[2],v:t[3]}:(t=w.hsva.exec(n),t?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=w.hex8.exec(n),t?{r:v(t[1]),g:v(t[2]),b:v(t[3]),a:pe(t[4]),format:e?"name":"hex8"}:(t=w.hex6.exec(n),t?{r:v(t[1]),g:v(t[2]),b:v(t[3]),format:e?"name":"hex"}:(t=w.hex4.exec(n),t?{r:v(t[1]+t[1]),g:v(t[2]+t[2]),b:v(t[3]+t[3]),a:pe(t[4]+t[4]),format:e?"name":"hex8"}:(t=w.hex3.exec(n),t?{r:v(t[1]+t[1]),g:v(t[2]+t[2]),b:v(t[3]+t[3]),format:e?"name":"hex"}:!1)))))))))}function _(n){return!!w.CSS_UNIT.exec(String(n))}var st=function(){function n(e,t){e===void 0&&(e=""),t===void 0&&(t={});var r;if(e instanceof n)return e;typeof e=="number"&&(e=nt(e)),this.originalInput=e;var o=rt(e);this.originalInput=e,this.r=o.r,this.g=o.g,this.b=o.b,this.a=o.a,this.roundA=Math.round(100*this.a)/100,this.format=(r=t.format)!==null&&r!==void 0?r:o.format,this.gradientType=t.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=o.ok}return n.prototype.isDark=function(){return this.getBrightness()<128},n.prototype.isLight=function(){return!this.isDark()},n.prototype.getBrightness=function(){var e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3},n.prototype.getLuminance=function(){var e=this.toRgb(),t,r,o,a=e.r/255,i=e.g/255,d=e.b/255;return a<=.03928?t=a/12.92:t=Math.pow((a+.055)/1.055,2.4),i<=.03928?r=i/12.92:r=Math.pow((i+.055)/1.055,2.4),d<=.03928?o=d/12.92:o=Math.pow((d+.055)/1.055,2.4),.2126*t+.7152*r+.0722*o},n.prototype.getAlpha=function(){return this.a},n.prototype.setAlpha=function(e){return this.a=Se(e),this.roundA=Math.round(100*this.a)/100,this},n.prototype.isMonochrome=function(){var e=this.toHsl().s;return e===0},n.prototype.toHsv=function(){var e=de(this.r,this.g,this.b);return{h:e.h*360,s:e.s,v:e.v,a:this.a}},n.prototype.toHsvString=function(){var e=de(this.r,this.g,this.b),t=Math.round(e.h*360),r=Math.round(e.s*100),o=Math.round(e.v*100);return this.a===1?"hsv(".concat(t,", ").concat(r,"%, ").concat(o,"%)"):"hsva(".concat(t,", ").concat(r,"%, ").concat(o,"%, ").concat(this.roundA,")")},n.prototype.toHsl=function(){var e=ce(this.r,this.g,this.b);return{h:e.h*360,s:e.s,l:e.l,a:this.a}},n.prototype.toHslString=function(){var e=ce(this.r,this.g,this.b),t=Math.round(e.h*360),r=Math.round(e.s*100),o=Math.round(e.l*100);return this.a===1?"hsl(".concat(t,", ").concat(r,"%, ").concat(o,"%)"):"hsla(".concat(t,", ").concat(r,"%, ").concat(o,"%, ").concat(this.roundA,")")},n.prototype.toHex=function(e){return e===void 0&&(e=!1),he(this.r,this.g,this.b,e)},n.prototype.toHexString=function(e){return e===void 0&&(e=!1),"#"+this.toHex(e)},n.prototype.toHex8=function(e){return e===void 0&&(e=!1),et(this.r,this.g,this.b,this.a,e)},n.prototype.toHex8String=function(e){return e===void 0&&(e=!1),"#"+this.toHex8(e)},n.prototype.toHexShortString=function(e){return e===void 0&&(e=!1),this.a===1?this.toHexString(e):this.toHex8String(e)},n.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},n.prototype.toRgbString=function(){var e=Math.round(this.r),t=Math.round(this.g),r=Math.round(this.b);return this.a===1?"rgb(".concat(e,", ").concat(t,", ").concat(r,")"):"rgba(".concat(e,", ").concat(t,", ").concat(r,", ").concat(this.roundA,")")},n.prototype.toPercentageRgb=function(){var e=function(t){return"".concat(Math.round(b(t,255)*100),"%")};return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}},n.prototype.toPercentageRgbString=function(){var e=function(t){return Math.round(b(t,255)*100)};return this.a===1?"rgb(".concat(e(this.r),"%, ").concat(e(this.g),"%, ").concat(e(this.b),"%)"):"rgba(".concat(e(this.r),"%, ").concat(e(this.g),"%, ").concat(e(this.b),"%, ").concat(this.roundA,")")},n.prototype.toName=function(){if(this.a===0)return"transparent";if(this.a<1)return!1;for(var e="#"+he(this.r,this.g,this.b,!1),t=0,r=Object.entries(ee);t<r.length;t++){var o=r[t],a=o[0],i=o[1];if(e===i)return a}return!1},n.prototype.toString=function(e){var t=!!e;e=e??this.format;var r=!1,o=this.a<1&&this.a>=0,a=!t&&o&&(e.startsWith("hex")||e==="name");return a?e==="name"&&this.a===0?this.toName():this.toRgbString():(e==="rgb"&&(r=this.toRgbString()),e==="prgb"&&(r=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(r=this.toHexString()),e==="hex3"&&(r=this.toHexString(!0)),e==="hex4"&&(r=this.toHex8String(!0)),e==="hex8"&&(r=this.toHex8String()),e==="name"&&(r=this.toName()),e==="hsl"&&(r=this.toHslString()),e==="hsv"&&(r=this.toHsvString()),r||this.toHexString())},n.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},n.prototype.clone=function(){return new n(this.toString())},n.prototype.lighten=function(e){e===void 0&&(e=10);var t=this.toHsl();return t.l+=e/100,t.l=G(t.l),new n(t)},n.prototype.brighten=function(e){e===void 0&&(e=10);var t=this.toRgb();return t.r=Math.max(0,Math.min(255,t.r-Math.round(255*-(e/100)))),t.g=Math.max(0,Math.min(255,t.g-Math.round(255*-(e/100)))),t.b=Math.max(0,Math.min(255,t.b-Math.round(255*-(e/100)))),new n(t)},n.prototype.darken=function(e){e===void 0&&(e=10);var t=this.toHsl();return t.l-=e/100,t.l=G(t.l),new n(t)},n.prototype.tint=function(e){return e===void 0&&(e=10),this.mix("white",e)},n.prototype.shade=function(e){return e===void 0&&(e=10),this.mix("black",e)},n.prototype.desaturate=function(e){e===void 0&&(e=10);var t=this.toHsl();return t.s-=e/100,t.s=G(t.s),new n(t)},n.prototype.saturate=function(e){e===void 0&&(e=10);var t=this.toHsl();return t.s+=e/100,t.s=G(t.s),new n(t)},n.prototype.greyscale=function(){return this.desaturate(100)},n.prototype.spin=function(e){var t=this.toHsl(),r=(t.h+e)%360;return t.h=r<0?360+r:r,new n(t)},n.prototype.mix=function(e,t){t===void 0&&(t=50);var r=this.toRgb(),o=new n(e).toRgb(),a=t/100,i={r:(o.r-r.r)*a+r.r,g:(o.g-r.g)*a+r.g,b:(o.b-r.b)*a+r.b,a:(o.a-r.a)*a+r.a};return new n(i)},n.prototype.analogous=function(e,t){e===void 0&&(e=6),t===void 0&&(t=30);var r=this.toHsl(),o=360/t,a=[this];for(r.h=(r.h-(o*e>>1)+720)%360;--e;)r.h=(r.h+o)%360,a.push(new n(r));return a},n.prototype.complement=function(){var e=this.toHsl();return e.h=(e.h+180)%360,new n(e)},n.prototype.monochromatic=function(e){e===void 0&&(e=6);for(var t=this.toHsv(),r=t.h,o=t.s,a=t.v,i=[],d=1/e;e--;)i.push(new n({h:r,s:o,v:a})),a=(a+d)%1;return i},n.prototype.splitcomplement=function(){var e=this.toHsl(),t=e.h;return[this,new n({h:(t+72)%360,s:e.s,l:e.l}),new n({h:(t+216)%360,s:e.s,l:e.l})]},n.prototype.onBackground=function(e){var t=this.toRgb(),r=new n(e).toRgb(),o=t.a+r.a*(1-t.a);return new n({r:(t.r*t.a+r.r*r.a*(1-t.a))/o,g:(t.g*t.a+r.g*r.a*(1-t.a))/o,b:(t.b*t.a+r.b*r.a*(1-t.a))/o,a:o})},n.prototype.triad=function(){return this.polyad(3)},n.prototype.tetrad=function(){return this.polyad(4)},n.prototype.polyad=function(e){for(var t=this.toHsl(),r=t.h,o=[this],a=360/e,i=1;i<e;i++)o.push(new n({h:(r+i*a)%360,s:t.s,l:t.l}));return o},n.prototype.equals=function(e){return this.toRgbString()===new n(e).toRgbString()},n}();function B(n,e=20){return n.mix("#141414",e).toString()}function lt(n){const e=ge(),t=te("button");return V(()=>{let r={};const o=n.color;if(o){const a=new st(o),i=n.dark?a.tint(20).toString():B(a,20);if(n.plain)r=t.cssVarBlock({"bg-color":n.dark?B(a,90):a.tint(90).toString(),"text-color":o,"border-color":n.dark?B(a,50):a.tint(50).toString(),"hover-text-color":`var(${t.cssVarName("color-white")})`,"hover-bg-color":o,"hover-border-color":o,"active-bg-color":i,"active-text-color":`var(${t.cssVarName("color-white")})`,"active-border-color":i}),e.value&&(r[t.cssVarBlockName("disabled-bg-color")]=n.dark?B(a,90):a.tint(90).toString(),r[t.cssVarBlockName("disabled-text-color")]=n.dark?B(a,50):a.tint(50).toString(),r[t.cssVarBlockName("disabled-border-color")]=n.dark?B(a,80):a.tint(80).toString());else{const d=n.dark?B(a,30):a.tint(30).toString(),u=a.isDark()?`var(${t.cssVarName("color-white")})`:`var(${t.cssVarName("color-black")})`;if(r=t.cssVarBlock({"bg-color":o,"text-color":u,"border-color":o,"hover-bg-color":d,"hover-text-color":u,"hover-border-color":d,"active-bg-color":i,"active-border-color":i}),e.value){const s=n.dark?B(a,50):a.tint(50).toString();r[t.cssVarBlockName("disabled-bg-color")]=s,r[t.cssVarBlockName("disabled-text-color")]=n.dark?"rgba(255, 255, 255, 0.5)":`var(${t.cssVarName("color-white")})`,r[t.cssVarBlockName("disabled-border-color")]=s}}}return r})}const ut=L({name:"ElButton"}),ft=L({...ut,props:X,emits:Ke,setup(n,{expose:e,emit:t}){const r=n,o=lt(r),a=te("button"),{_ref:i,_size:d,_type:u,_disabled:s,_props:f,shouldAddSpace:g,handleClick:H}=Le(r,t),T=V(()=>[a.b(),a.m(u.value),a.m(d.value),a.is("disabled",s.value),a.is("loading",r.loading),a.is("plain",r.plain),a.is("round",r.round),a.is("circle",r.circle),a.is("text",r.text),a.is("link",r.link),a.is("has-bg",r.bg)]);return e({ref:i,size:d,type:u,disabled:s,shouldAddSpace:g}),(h,k)=>(M(),E(W(h.tag),$e({ref_key:"_ref",ref:i},l(f),{class:l(T),style:l(o),onClick:l(H)}),{default:p(()=>[h.loading?(M(),C(ye,{key:0},[h.$slots.loading?D(h.$slots,"loading",{key:0}):(M(),E(l(se),{key:1,class:Z(l(a).is("loading"))},{default:p(()=>[(M(),E(W(h.loadingIcon)))]),_:1},8,["class"]))],64)):h.icon||h.$slots.icon?(M(),E(l(se),{key:1},{default:p(()=>[h.icon?(M(),E(W(h.icon),{key:0})):D(h.$slots,"icon",{key:1})]),_:3})):le("v-if",!0),h.$slots.default?(M(),C("span",{key:2,class:Z({[l(a).em("text","expand")]:l(g)})},[D(h.$slots,"default")],2)):le("v-if",!0)]),_:3},16,["class","style","onClick"]))}});var ct=me(ft,[["__file","button.vue"]]);const dt={size:X.size,type:X.type},ht=L({name:"ElButtonGroup"}),pt=L({...ht,props:dt,setup(n){const e=n;Ue(xe,ke({size:ue(e,"size"),type:ue(e,"type")}));const t=te("button");return(r,o)=>(M(),C("div",{class:Z(`${l(t).b("group")}`)},[D(r.$slots,"default")],2))}});var we=me(pt,[["__file","button-group.vue"]]);const be=He(ct,{ButtonGroup:we});Te(we);const z=4,bt={__name:"stock",setup(n){const e=ke({n:5,now:0,coin:"SUI",x:10,amplitude:2,price:5,income:1,buyPoint:0,pricePoint:4,fees:.02}),t=ne([]),r=(u,s=2)=>{const f=Math.pow(10,s);return Math.ceil(u*f)/f},o=(u,s=2)=>{const f=Math.pow(10,s);return Math.floor(u*f)/f},a=(u,s=2)=>{const f=Math.pow(10,s);return Math.round(u*f)/f},i=({row:u,rowIndex:s})=>{if(s===e.now)return{"background-color":"cornflowerblue"}};return je(e,((u,s)=>{let f;return(...g)=>{clearTimeout(f),f=setTimeout(()=>{u.apply(this,g)},s)}})(()=>{e.n=r(e.n,0),e.now=a(e.now,0),e.buyPoint=r(e.buyPoint,0),e.pricePoint=r(e.pricePoint,0),e.x=r(e.x,e.buyPoint),e.price=o(e.price,e.pricePoint),e.amplitude=r(e.amplitude);const u=e.amplitude*.01,s=e.fees*.01;e.income=u*e.x;{const m=new URLSearchParams(e);window.history.replaceState({},"",`${window.location.pathname}?${m.toString()}`)}const{n:f,x:g}=e,H=r(e.price*(1+u),e.pricePoint),T=r(g*e.price*s,z),h=r(g*H*s,z),k=[{n:1,all:g,allPrice:e.price,finalPrice:e.price,final:g,buyFees:T,loss:T,downLoss:r(g*u*e.price),sellPrice:H,sellFees:h,risingProfit:o(g*u*e.price-T-h)}];for(let m=1;m<f;m++){const y=k[m-1],N=y.finalPrice*(1-u),$=N*(1+u),re=y.loss+y.downLoss,Me=(m===1?1:2)*(y.buyFees+y.sellFees),I=o((e.income*e.price+re+Me)/($-N)-y.all,e.buyPoint),U=a(y.all+I,e.buyPoint),ae=r((y.allPrice*y.all+I*N)/(y.all+I),e.pricePoint),q=r(I*N*s,z),oe=r(U*$*s,z);k[m]={n:m+1,all:U,allPrice:ae,final:I,finalPrice:o(N,e.pricePoint),buyFees:q,loss:r(re+q,e.pricePoint),downLoss:r(U*u*N,e.pricePoint),sellPrice:o($,e.pricePoint),sellFees:oe,risingProfit:o(U*($-ae)-q-oe,e.pricePoint)}}t.value=k},2e3),{deep:!0,immediate:!0}),Ge(()=>{{const u=new URLSearchParams(window.location.search);Object.assign(e,Object.fromEntries(u))}}),(u,s)=>(M(),C(ye,null,[c(l(Ne),{model:e,"label-position":"left","label-width":"120px"},{default:p(()=>[c(l(x),{label:"投入币种"},{default:p(()=>[c(l(P),{modelValue:e.coin,"onUpdate:modelValue":s[0]||(s[0]=f=>e.coin=f)},null,8,["modelValue"])]),_:1}),c(l(x),{label:"币种单价"},{default:p(()=>[c(l(P),{modelValue:e.price,"onUpdate:modelValue":s[1]||(s[1]=f=>e.price=f),type:"number"},{append:p(()=>[A("USDT")]),_:1},8,["modelValue"])]),_:1}),c(l(x),{label:"周期次数"},{default:p(()=>[c(l(P),{modelValue:e.n,"onUpdate:modelValue":s[2]||(s[2]=f=>e.n=f),type:"number"},{append:p(()=>[A("次")]),_:1},8,["modelValue"])]),_:1}),c(l(x),{label:"单次投入金额"},{default:p(()=>[c(l(P),{modelValue:e.x,"onUpdate:modelValue":s[3]||(s[3]=f=>e.x=f),type:"number"},{append:p(()=>[A(j(e.coin),1)]),_:1},8,["modelValue"])]),_:1}),c(l(x),{label:"跌涨幅度"},{default:p(()=>[c(l(P),{modelValue:e.amplitude,"onUpdate:modelValue":s[4]||(s[4]=f=>e.amplitude=f),type:"number"},{append:p(()=>[A("%")]),_:1},8,["modelValue"])]),_:1}),c(l(x),{label:"最低买入小数点"},{default:p(()=>[c(l(P),{modelValue:e.buyPoint,"onUpdate:modelValue":s[5]||(s[5]=f=>e.buyPoint=f),type:"number"},null,8,["modelValue"])]),_:1}),c(l(x),{label:"价格小数点"},{default:p(()=>[c(l(P),{modelValue:e.pricePoint,"onUpdate:modelValue":s[6]||(s[6]=f=>e.pricePoint=f),type:"number"},null,8,["modelValue"])]),_:1}),c(l(x),{label:"买卖手续费"},{default:p(()=>[c(l(P),{modelValue:e.fees,"onUpdate:modelValue":s[7]||(s[7]=f=>e.fees=f),type:"number"},{append:p(()=>[A("%")]),_:1},8,["modelValue"])]),_:1}),c(l(x),{label:"收益"},{default:p(()=>[Q("span",null,j(e.income)+" "+j(e.coin)+" = "+j(o(e.income*e.price))+" USDT ",1)]),_:1}),c(l(x),{label:"当前周期"},{default:p(()=>[c(l(P),{modelValue:e.now,"onUpdate:modelValue":s[8]||(s[8]=f=>e.now=f),type:"number"},null,8,["modelValue"])]),_:1}),c(l(x),{label:"周期操作"},{default:p(()=>[c(l(be),{onClick:s[9]||(s[9]=f=>e.now++)},{default:p(()=>[A("下一期")]),_:1}),c(l(be),{onClick:s[10]||(s[10]=f=>e.now=0)},{default:p(()=>[A("重置")]),_:1})]),_:1})]),_:1},8,["model"]),c(l(Oe),{ref:"table",data:t.value,border:"","row-style":i},{default:p(()=>[c(l(S),{prop:"n",label:"周期"}),c(l(S),{prop:"final",label:"买入量"}),c(l(S),{prop:"finalPrice",label:"买入价"}),c(l(S),{prop:"all",label:"持有量"}),c(l(S),{prop:"allPrice",label:"持有均价"}),c(l(S),{prop:"sellPrice",label:"卖出价"}),c(l(S),{prop:"loss",label:"已亏损"}),c(l(S),{prop:"downLoss",label:"下跌亏损"}),c(l(S),{prop:"buyFees",label:"买手续费"}),c(l(S),{prop:"sellFees",label:"卖手续费"}),c(l(S),{prop:"risingProfit",label:"上涨盈利"})]),_:1},8,["data"])],64))}},gt=Q("h2",{id:"股票必胜计算",tabindex:"-1"},[A("股票必胜计算 "),Q("a",{class:"header-anchor",href:"#股票必胜计算","aria-label":'Permalink to "股票必胜计算"'},"​")],-1),xt=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"menus/tool/compute/stock.md","filePath":"menus/tool/compute/stock.md","lastUpdated":1727083655000}'),mt={name:"menus/tool/compute/stock.md"},St=Object.assign(mt,{setup(n){return(e,t)=>(M(),C("div",null,[gt,c(bt)]))}});export{xt as __pageData,St as default};
