(()=>{var _y=Object.defineProperty;var xy=(i,t)=>{for(var e in t)_y(i,e,{get:t[e],enumerable:!0})};function Tt(i,t,e){return new Promise(r=>{if(e?.duration===1/0)throw new Error("Promise-based animations must be finite.");let a=i.animate(t,{...e,duration:ky()?0:e.duration});a.addEventListener("cancel",r,{once:!0}),a.addEventListener("finish",r,{once:!0})})}function Nl(i){return i=i.toString().toLowerCase(),i.indexOf("ms")>-1?parseFloat(i):i.indexOf("s")>-1?parseFloat(i)*1e3:parseFloat(i)}function ky(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function At(i){return Promise.all(i.getAnimations().map(t=>new Promise(e=>{let r=requestAnimationFrame(e);t.addEventListener("cancel",()=>r,{once:!0}),t.addEventListener("finish",()=>r,{once:!0}),t.cancel()})))}function ea(i,t){return i.map(e=>({...e,height:e.height==="auto"?`${t}px`:e.height}))}var Ul=globalThis,dn=Ul.trustedTypes,Qp=dn?dn.createPolicy("lit-html",{createHTML:i=>i}):void 0,Vl="$lit$",zi=`lit$${(Math.random()+"").slice(9)}$`,Hl="?"+zi,Cy=`<${Hl}>`,br=document,qa=()=>br.createComment(""),Ga=i=>i===null||typeof i!="object"&&typeof i!="function",ah=Array.isArray,sh=i=>ah(i)||typeof i?.[Symbol.iterator]=="function",jl=`[ 	
\f\r]`,Wa=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,th=/-->/g,eh=/>/g,fr=RegExp(`>|${jl}(?:([^\\s"'>=/]+)(${jl}*=${jl}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),oh=/'/g,ih=/"/g,nh=/^(?:script|style|textarea|title)$/i,Ly=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),E=Ly(1),pe=Symbol.for("lit-noChange"),$t=Symbol.for("lit-nothing"),rh=new WeakMap,gr=br.createTreeWalker(br,129);function lh(i,t){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Qp!==void 0?Qp.createHTML(t):t}var ch=(i,t)=>{let e=i.length-1,r=[],a,s=t===2?"<svg>":"",l=Wa;for(let p=0;p<e;p++){let d=i[p],h,f,g=-1,v=0;for(;v<d.length&&(l.lastIndex=v,f=l.exec(d),f!==null);)v=l.lastIndex,l===Wa?f[1]==="!--"?l=th:f[1]!==void 0?l=eh:f[2]!==void 0?(nh.test(f[2])&&(a=RegExp("</"+f[2],"g")),l=fr):f[3]!==void 0&&(l=fr):l===fr?f[0]===">"?(l=a??Wa,g=-1):f[1]===void 0?g=-2:(g=l.lastIndex-f[2].length,h=f[1],l=f[3]===void 0?fr:f[3]==='"'?ih:oh):l===ih||l===oh?l=fr:l===th||l===eh?l=Wa:(l=fr,a=void 0);let y=l===fr&&i[p+1].startsWith("/>")?" ":"";s+=l===Wa?d+Cy:g>=0?(r.push(h),d.slice(0,g)+Vl+d.slice(g)+zi+y):d+zi+(g===-2?p:y)}return[lh(i,s+(i[e]||"<?>")+(t===2?"</svg>":"")),r]},Ya=class i{constructor({strings:t,_$litType$:e},r){let a;this.parts=[];let s=0,l=0,p=t.length-1,d=this.parts,[h,f]=ch(t,e);if(this.el=i.createElement(h,r),gr.currentNode=this.el.content,e===2){let g=this.el.content.firstChild;g.replaceWith(...g.childNodes)}for(;(a=gr.nextNode())!==null&&d.length<p;){if(a.nodeType===1){if(a.hasAttributes())for(let g of a.getAttributeNames())if(g.endsWith(Vl)){let v=f[l++],y=a.getAttribute(g).split(zi),_=/([.?@])?(.*)/.exec(v);d.push({type:1,index:s,name:_[2],strings:y,ctor:_[1]==="."?hn:_[1]==="?"?un:_[1]==="@"?mn:yr}),a.removeAttribute(g)}else g.startsWith(zi)&&(d.push({type:6,index:s}),a.removeAttribute(g));if(nh.test(a.tagName)){let g=a.textContent.split(zi),v=g.length-1;if(v>0){a.textContent=dn?dn.emptyScript:"";for(let y=0;y<v;y++)a.append(g[y],qa()),gr.nextNode(),d.push({type:2,index:++s});a.append(g[v],qa())}}}else if(a.nodeType===8)if(a.data===Hl)d.push({type:2,index:s});else{let g=-1;for(;(g=a.data.indexOf(zi,g+1))!==-1;)d.push({type:7,index:s}),g+=zi.length-1}s++}}static createElement(t,e){let r=br.createElement("template");return r.innerHTML=t,r}};function vr(i,t,e=i,r){if(t===pe)return t;let a=r!==void 0?e._$Co?.[r]:e._$Cl,s=Ga(t)?void 0:t._$litDirective$;return a?.constructor!==s&&(a?._$AO?.(!1),s===void 0?a=void 0:(a=new s(i),a._$AT(i,e,r)),r!==void 0?(e._$Co??=[])[r]=a:e._$Cl=a),a!==void 0&&(t=vr(i,a._$AS(i,t.values),a,r)),t}var pn=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:r}=this._$AD,a=(t?.creationScope??br).importNode(e,!0);gr.currentNode=a;let s=gr.nextNode(),l=0,p=0,d=r[0];for(;d!==void 0;){if(l===d.index){let h;d.type===2?h=new oa(s,s.nextSibling,this,t):d.type===1?h=new d.ctor(s,d.name,d.strings,this,t):d.type===6&&(h=new fn(s,this,t)),this._$AV.push(h),d=r[++p]}l!==d?.index&&(s=gr.nextNode(),l++)}return gr.currentNode=br,a}p(t){let e=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}},oa=class i{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,a){this.type=2,this._$AH=$t,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=vr(this,t,e),Ga(t)?t===$t||t==null||t===""?(this._$AH!==$t&&this._$AR(),this._$AH=$t):t!==this._$AH&&t!==pe&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):sh(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==$t&&Ga(this._$AH)?this._$AA.nextSibling.data=t:this.$(br.createTextNode(t)),this._$AH=t}g(t){let{values:e,_$litType$:r}=t,a=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=Ya.createElement(lh(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===a)this._$AH.p(e);else{let s=new pn(a,this),l=s.u(this.options);s.p(e),this.$(l),this._$AH=s}}_$AC(t){let e=rh.get(t.strings);return e===void 0&&rh.set(t.strings,e=new Ya(t)),e}T(t){ah(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,r,a=0;for(let s of t)a===e.length?e.push(r=new i(this.k(qa()),this.k(qa()),this,this.options)):r=e[a],r._$AI(s),a++;a<e.length&&(this._$AR(r&&r._$AB.nextSibling,a),e.length=a)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){let r=t.nextSibling;t.remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},yr=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,a,s){this.type=1,this._$AH=$t,this._$AN=void 0,this.element=t,this.name=e,this._$AM=a,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=$t}_$AI(t,e=this,r,a){let s=this.strings,l=!1;if(s===void 0)t=vr(this,t,e,0),l=!Ga(t)||t!==this._$AH&&t!==pe,l&&(this._$AH=t);else{let p=t,d,h;for(t=s[0],d=0;d<s.length-1;d++)h=vr(this,p[r+d],e,d),h===pe&&(h=this._$AH[d]),l||=!Ga(h)||h!==this._$AH[d],h===$t?t=$t:t!==$t&&(t+=(h??"")+s[d+1]),this._$AH[d]=h}l&&!a&&this.O(t)}O(t){t===$t?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},hn=class extends yr{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===$t?void 0:t}},un=class extends yr{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==$t)}},mn=class extends yr{constructor(t,e,r,a,s){super(t,e,r,a,s),this.type=5}_$AI(t,e=this){if((t=vr(this,t,e,0)??$t)===pe)return;let r=this._$AH,a=t===$t&&r!==$t||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==$t&&(r===$t||a);a&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},fn=class{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){vr(this,t)}},Zl={j:Vl,P:zi,A:Hl,C:1,M:ch,L:pn,R:sh,V:vr,D:oa,I:yr,H:un,N:mn,U:hn,B:fn},zy=Ul.litHtmlPolyfillSupport;zy?.(Ya,oa),(Ul.litHtmlVersions??=[]).push("3.1.0");var dh=(i,t,e)=>{let r=e?.renderBefore??t,a=r._$litPart$;if(a===void 0){let s=e?.renderBefore??null;r._$litPart$=a=new oa(t.insertBefore(qa(),s),s,void 0,e??{})}return a._$AI(i),a};var Me={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},xo=i=>(...t)=>({_$litDirective$:i,values:t}),ao=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var Z=xo(class extends ao{constructor(i){if(super(i),i.type!==Me.ATTRIBUTE||i.name!=="class"||i.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(i){return" "+Object.keys(i).filter(t=>i[t]).join(" ")+" "}update(i,[t]){if(this.it===void 0){this.it=new Set,i.strings!==void 0&&(this.st=new Set(i.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(let r in t)t[r]&&!this.st?.has(r)&&this.it.add(r);return this.render(t)}let e=i.element.classList;for(let r of this.it)r in t||(e.remove(r),this.it.delete(r));for(let r in t){let a=!!t[r];a===this.it.has(r)||this.st?.has(r)||(a?(e.add(r),this.it.add(r)):(e.remove(r),this.it.delete(r)))}return pe}});var hh=new Map,Sy=new WeakMap;function Ty(i){return i??{keyframes:[],options:{duration:0}}}function ph(i,t){return t.toLowerCase()==="rtl"?{keyframes:i.rtlKeyframes||i.keyframes,options:i.options}:i}function ht(i,t){hh.set(i,Ty(t))}function yt(i,t,e){let r=Sy.get(i);if(r?.[t])return ph(r[t],e.dir);let a=hh.get(t);return a?ph(a,e.dir):{keyframes:[],options:{duration:0}}}var Ct=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=r=>{let a=r.target;(this.slotNames.includes("[default]")&&!a.name||a.name&&this.slotNames.includes(a.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){let e=t;if(e.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function uh(i){if(!i)return"";let t=i.assignedNodes({flatten:!0}),e="";return[...t].forEach(r=>{r.nodeType===Node.TEXT_NODE&&(e+=r.textContent)}),e}var gn=globalThis,bn=gn.ShadowRoot&&(gn.ShadyCSS===void 0||gn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Wl=Symbol(),mh=new WeakMap,Ka=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==Wl)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(bn&&t===void 0){let r=e!==void 0&&e.length===1;r&&(t=mh.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&mh.set(e,t))}return t}toString(){return this.cssText}},ia=i=>new Ka(typeof i=="string"?i:i+"",void 0,Wl),A=(i,...t)=>{let e=i.length===1?i[0]:t.reduce((r,a,s)=>r+(l=>{if(l._$cssResult$===!0)return l.cssText;if(typeof l=="number")return l;throw Error("Value passed to 'css' function must be a 'css' function result: "+l+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+i[s+1],i[0]);return new Ka(e,i,Wl)},fh=(i,t)=>{if(bn)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let r=document.createElement("style"),a=gn.litNonce;a!==void 0&&r.setAttribute("nonce",a),r.textContent=e.cssText,i.appendChild(r)}},ql=bn?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(let r of t.cssRules)e+=r.cssText;return ia(e)})(i):i;var{is:Py,defineProperty:Ey,getOwnPropertyDescriptor:Oy,getOwnPropertyNames:My,getOwnPropertySymbols:Ay,getPrototypeOf:$y}=Object,vn=globalThis,gh=vn.trustedTypes,Iy=gh?gh.emptyScript:"",Dy=vn.reactiveElementPolyfillSupport,Xa=(i,t)=>i,Ti={toAttribute(i,t){switch(t){case Boolean:i=i?Iy:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},Ja=(i,t)=>!Py(i,t),bh={attribute:!0,type:String,converter:Ti,reflect:!1,hasChanged:Ja};Symbol.metadata??=Symbol("metadata"),vn.litPropertyMetadata??=new WeakMap;var Si=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=bh){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){let r=Symbol(),a=this.getPropertyDescriptor(t,r,e);a!==void 0&&Ey(this.prototype,t,a)}}static getPropertyDescriptor(t,e,r){let{get:a,set:s}=Oy(this.prototype,t)??{get(){return this[e]},set(l){this[e]=l}};return{get(){return a?.call(this)},set(l){let p=a?.call(this);s.call(this,l),this.requestUpdate(t,p,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??bh}static _$Ei(){if(this.hasOwnProperty(Xa("elementProperties")))return;let t=$y(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Xa("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Xa("properties"))){let e=this.properties,r=[...My(e),...Ay(e)];for(let a of r)this.createProperty(a,e[a])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[r,a]of e)this.elementProperties.set(r,a)}this._$Eh=new Map;for(let[e,r]of this.elementProperties){let a=this._$Eu(e,r);a!==void 0&&this._$Eh.set(a,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let r=new Set(t.flat(1/0).reverse());for(let a of r)e.unshift(ql(a))}else t!==void 0&&e.push(ql(t));return e}static _$Eu(t,e){let r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$ES(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$E_??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$E_?.delete(t)}_$ES(){let t=new Map,e=this.constructor.elementProperties;for(let r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return fh(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$E_?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$E_?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EO(t,e){let r=this.constructor.elementProperties.get(t),a=this.constructor._$Eu(t,r);if(a!==void 0&&r.reflect===!0){let s=(r.converter?.toAttribute!==void 0?r.converter:Ti).toAttribute(e,r.type);this._$Em=t,s==null?this.removeAttribute(a):this.setAttribute(a,s),this._$Em=null}}_$AK(t,e){let r=this.constructor,a=r._$Eh.get(t);if(a!==void 0&&this._$Em!==a){let s=r.getPropertyOptions(a),l=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:Ti;this._$Em=a,this[a]=l.fromAttribute(e,s.type),this._$Em=null}}requestUpdate(t,e,r,a=!1,s){if(t!==void 0){if(r??=this.constructor.getPropertyOptions(t),!(r.hasChanged??Ja)(a?s:this[t],e))return;this.C(t,e,r)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(t,e,r){this._$AL.has(t)||this._$AL.set(t,e),r.reflect===!0&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[a,s]of this._$Ep)this[a]=s;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[a,s]of r)s.wrapped!==!0||this._$AL.has(a)||this[a]===void 0||this.C(a,this[a],s)}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$E_?.forEach(r=>r.hostUpdate?.()),this.update(e)):this._$ET()}catch(r){throw t=!1,this._$ET(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$E_?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(e=>this._$EO(e,this[e])),this._$ET()}updated(t){}firstUpdated(t){}};Si.elementStyles=[],Si.shadowRootOptions={mode:"open"},Si[Xa("elementProperties")]=new Map,Si[Xa("finalized")]=new Map,Dy?.({ReactiveElement:Si}),(vn.reactiveElementVersions??=[]).push("2.0.2");var qi=class extends Si{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=dh(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return pe}};qi._$litElement$=!0,qi.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:qi});var By=globalThis.litElementPolyfillSupport;By?.({LitElement:qi});(globalThis.litElementVersions??=[]).push("4.0.2");var Gl=new Set,Ry=new MutationObserver(wh),ra=new Map,vh=document.documentElement.dir||"ltr",yh=document.documentElement.lang||navigator.language,wr;Ry.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function Yl(...i){i.map(t=>{let e=t.$code.toLowerCase();ra.has(e)?ra.set(e,Object.assign(Object.assign({},ra.get(e)),t)):ra.set(e,t),wr||(wr=t)}),wh()}function wh(){vh=document.documentElement.dir||"ltr",yh=document.documentElement.lang||navigator.language,[...Gl.keys()].map(i=>{typeof i.requestUpdate=="function"&&i.requestUpdate()})}var _h=class{constructor(i){this.host=i,this.host.addController(this)}hostConnected(){Gl.add(this.host)}hostDisconnected(){Gl.delete(this.host)}dir(){return`${this.host.dir||vh}`.toLowerCase()}lang(){return`${this.host.lang||yh}`.toLowerCase()}getTranslationData(i){var t,e;let r=new Intl.Locale(i.replace(/_/g,"-")),a=r?.language.toLowerCase(),s=(e=(t=r?.region)===null||t===void 0?void 0:t.toLowerCase())!==null&&e!==void 0?e:"",l=ra.get(`${a}-${s}`),p=ra.get(a);return{locale:r,language:a,region:s,primary:l,secondary:p}}exists(i,t){var e;let{primary:r,secondary:a}=this.getTranslationData((e=t.lang)!==null&&e!==void 0?e:this.lang());return t=Object.assign({includeFallback:!1},t),!!(r&&r[i]||a&&a[i]||t.includeFallback&&wr&&wr[i])}term(i,...t){let{primary:e,secondary:r}=this.getTranslationData(this.lang()),a;if(e&&e[i])a=e[i];else if(r&&r[i])a=r[i];else if(wr&&wr[i])a=wr[i];else return console.error(`No translation found for: ${String(i)}`),String(i);return typeof a=="function"?a(...t):a}date(i,t){return i=new Date(i),new Intl.DateTimeFormat(this.lang(),t).format(i)}number(i,t){return i=Number(i),isNaN(i)?"":new Intl.NumberFormat(this.lang(),t).format(i)}relativeTime(i,t,e){return new Intl.RelativeTimeFormat(this.lang(),e).format(i,t)}};var Fy=["B","kB","MB","GB","TB","PB","EB","ZB","YB"],Ny=["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],jy=["b","kbit","Mbit","Gbit","Tbit","Pbit","Ebit","Zbit","Ybit"],Uy=["b","kibit","Mibit","Gibit","Tibit","Pibit","Eibit","Zibit","Yibit"],xh=(i,t,e)=>{let r=i;return typeof t=="string"||Array.isArray(t)?r=i.toLocaleString(t,e):(t===!0||e!==void 0)&&(r=i.toLocaleString(void 0,e)),r};function kh(i,t){if(!Number.isFinite(i))throw new TypeError(`Expected a finite number, got ${typeof i}: ${i}`);t={bits:!1,binary:!1,space:!0,...t};let e=t.bits?t.binary?Uy:jy:t.binary?Ny:Fy,r=t.space?" ":"";if(t.signed&&i===0)return` 0${r}${e[0]}`;let a=i<0,s=a?"-":t.signed?"+":"";a&&(i=-i);let l;if(t.minimumFractionDigits!==void 0&&(l={minimumFractionDigits:t.minimumFractionDigits}),t.maximumFractionDigits!==void 0&&(l={maximumFractionDigits:t.maximumFractionDigits,...l}),i<1){let f=xh(i,t.locale,l);return s+f+r+e[0]}let p=Math.min(Math.floor(t.binary?Math.log(i)/Math.log(1024):Math.log10(i)/3),e.length-1);i/=(t.binary?1024:1e3)**p,l||(i=i.toPrecision(3));let d=xh(Number(i),t.locale,l),h=e[p];return s+d+r+h}var Vy={$code:"en",$name:"English",$dir:"ltr",browseFiles:"Browse files",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",dragDrop:"Drag and drop to upload",fileTypeNotAccepted:i=>`File type is not accepted, only ${i} files are allowed`,fileSizeExceeded:i=>`File size exceeds ${kh(i,{locale:"en"})}`,error:"Error",goToSlide:(i,t)=>`Go to slide ${i} of ${t}`,hidePassword:"Hide password",loading:"Loading",files:"Files :",maxFiles:"Maximum number of files reached",noMultipleFiles:"Multiple files are not allowed",nextSlide:"Next slide",numOptionsSelected:i=>i===0?"No options selected":i===1?"1 option selected":`${i} options selected`,previousSlide:"Previous slide",previous:"Previous",next:"Next",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:i=>`Slide ${i}`,toggleColorFormat:"Toggle color format",zoomIn:"Zoom in",zoomOut:"Zoom out",enterFullscreen:"Enter fullscreen",exitFullscreen:"Exit fullscreen",locateMe:"Locate me",metersUnit:"meters",feetUnit:"feet",locatePopup:"You are within {distance} {unit} from this point",locateOutsideMapBounds:"You seem located outside the boundaries of the map"};Yl(Vy);var et=class extends _h{};var Hy={attribute:!0,type:String,converter:Ti,reflect:!1,hasChanged:Ja},Zy=(i=Hy,t,e)=>{let{kind:r,metadata:a}=e,s=globalThis.litPropertyMetadata.get(a);if(s===void 0&&globalThis.litPropertyMetadata.set(a,s=new Map),s.set(e.name,i),r==="accessor"){let{name:l}=e;return{set(p){let d=t.get.call(this);t.set.call(this,p),this.requestUpdate(l,d,i)},init(p){return p!==void 0&&this.C(l,void 0,i),p}}}if(r==="setter"){let{name:l}=e;return function(p){let d=this[l];t.call(this,p),this.requestUpdate(l,d,i)}}throw Error("Unsupported decorator location: "+r)};function u(i){return(t,e)=>typeof e=="object"?Zy(i,t,e):((r,a,s)=>{let l=a.hasOwnProperty(s);return a.constructor.createProperty(s,l?{...r,wrapped:!0}:r),l?Object.getOwnPropertyDescriptor(a,s):void 0})(i,t,e)}var _r=(i,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(i,t,e),e);function F(i,t){return(e,r,a)=>{let s=l=>l.renderRoot?.querySelector(i)??null;if(t){let{get:l,set:p}=typeof r=="object"?e:a??(()=>{let d=Symbol();return{get(){return this[d]},set(h){this[d]=h}}})();return _r(e,r,{get(){let d=l.call(this);return d===void 0&&(d=s(this),(d!==null||this.hasUpdated)&&p.call(this,d)),d}})}return _r(e,r,{get(){return s(this)}})}}function Kt(i,t){return new Promise(e=>{function r(a){a.target===i&&(i.removeEventListener(t,r),e())}i.addEventListener(t,r)})}function M(i,t){let e={waitUntilFirstUpdate:!1,...t};return(r,a)=>{let{update:s}=r,l=Array.isArray(i)?i:[i];r.update=function(p){l.forEach(d=>{let h=d;if(p.has(h)){let f=p.get(h),g=this[h];f!==g&&(!e.waitUntilFirstUpdate||this.hasUpdated)&&this[a](f,g)}}),s.call(this,p)}}}var Wy=Object.defineProperty,qy=Object.getOwnPropertyDescriptor,Ch=(i,t,e,r)=>{for(var a=r>1?void 0:r?qy(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&Wy(t,e,a),a},Kl=class extends qi{constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){let r=new CustomEvent(t,{bubbles:!0,cancelable:!1,composed:!0,detail:{...e},...e});return this.dispatchEvent(r),r}static define(t,e=this,r={}){let a=customElements.get(t);if(!a){customElements.define(t,class extends e{},r);return}let s=" (unknown version)",l=s;"version"in e&&e.version&&(s=" v"+e.version),"version"in a&&a.version&&(l=" v"+a.version),!(s&&l&&s===l)&&console.warn(`Attempted to register <${t}>${s}, but <${t}>${l} has already been registered.`)}};Kl.version="1.6.8",Kl.dependencies={};var R=Kl;Ch([u()],R.prototype,"dir",2);Ch([u()],R.prototype,"lang",2);var Xl=Symbol.for(""),Gy=i=>{if(i?.r===Xl)return i?._$litStatic$},Jl=i=>({_$litStatic$:i,r:Xl}),Pi=(i,...t)=>({_$litStatic$:t.reduce((e,r,a)=>e+(s=>{if(s._$litStatic$!==void 0)return s._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${s}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(r)+i[a+1],i[0]),r:Xl}),Lh=new Map,Yy=i=>(t,...e)=>{let r=e.length,a,s,l=[],p=[],d,h=0,f=!1;for(;h<r;){for(d=t[h];h<r&&(s=e[h],(a=Gy(s))!==void 0);)d+=a+t[++h],f=!0;h!==r&&p.push(s),l.push(d),h++}if(h===r&&l.push(t[r]),f){let g=l.join("$$lit$$");(t=Lh.get(g))===void 0&&(l.raw=l,Lh.set(g,t=l)),e=p}return i(t,...e)},Ne=Yy(E);var H=i=>i??$t;function X(i){return u({...i,state:!0,attribute:!1})}var re=(i,t,e)=>{if(!e||typeof e.value!="function")throw new TypeError(`Only methods can be decorated with @bound. <${t}> is not a method!`);return{configurable:!0,get(){let r=e.value.bind(this);return Object.defineProperty(this,t,{value:r,configurable:!0,writable:!0}),r}}};var Ql="";function Qa(i){Ql=i}function tc(i=""){if(!Ql){let t=[...document.getElementsByTagName("script")],e=t.find(r=>r.hasAttribute("data-awc"));if(e)Qa(e.getAttribute("data-awc"));else{let r=t.find(s=>/awc(\.min)?\.js($|\?)/.test(s.src)||/awc-autoloader(\.min)?\.js($|\?)/.test(s.src)),a="";r&&(a=r.getAttribute("src")),Qa(a.split("/").slice(0,-1).join("/"))}}return Ql.replace(/\/$/,"")+(i?`/${i.replace(/^\//,"")}`:"")}var zh={name:"default",resolver:i=>tc(`assets/icons/${i}.svg`)};var Sh={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-up":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,"exclamation-triangle-bi":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle" viewBox="0 0 16 16">
      <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z"></path>
      <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z"></path>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"file-earmark":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark" viewBox="0 0 16 16">
      <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"></path>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `,"arrow-down-to-line":`
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.9062 18.4375H6.09375C5.60156 18.4375 5.25 18.7891 5.25 19.2812C5.25 19.7734 5.60156 20.125 6.09375 20.125H17.9062C18.3633 20.125 18.75 19.7734 18.75 19.2812C18.75 18.8242 18.3633 18.4375 17.9062 18.4375ZM15.8672 10.5625L12.8438 13.7969V5.25391C12.8438 4.76172 12.457 4.375 12 4.375C11.5078 4.375 11.1562 4.76172 11.1562 5.25391V13.7969L8.09766 10.5625C7.92188 10.3867 7.71094 10.3164 7.5 10.3164C7.28906 10.3164 7.07812 10.3867 6.90234 10.5273C6.55078 10.8438 6.55078 11.3711 6.86719 11.7227L11.3672 16.5039C11.6836 16.8555 12.2812 16.8555 12.5977 16.5039L17.0977 11.7227C17.4141 11.3711 17.4141 10.8438 17.0625 10.5273C16.7109 10.2109 16.1836 10.2109 15.8672 10.5625Z" />
    </svg>
  `,xmark:`
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.3438 16.4336C17.6602 16.7852 17.6602 17.3125 17.3438 17.6289C16.9922 17.9805 16.4648 17.9805 16.1484 17.6289L12 13.4453L7.81641 17.6289C7.46484 17.9805 6.9375 17.9805 6.62109 17.6289C6.26953 17.3125 6.26953 16.7852 6.62109 16.4336L10.8047 12.25L6.62109 8.06641C6.26953 7.71484 6.26953 7.1875 6.62109 6.87109C6.9375 6.51953 7.46484 6.51953 7.78125 6.87109L12 11.0898L16.1836 6.90625C16.5 6.55469 17.0273 6.55469 17.3438 6.90625C17.6953 7.22266 17.6953 7.75 17.3438 8.10156L13.1602 12.25L17.3438 16.4336Z" />
    </svg>
  `,file:`
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.25 5.5C5.25 4.26953 6.23438 3.25 7.5 3.25H13.3008C13.8984 3.25 14.4609 3.49609 14.8828 3.91797L18.082 7.11719C18.5039 7.53906 18.75 8.10156 18.75 8.69922V19C18.75 20.2656 17.7305 21.25 16.5 21.25H7.5C6.23438 21.25 5.25 20.2656 5.25 19V5.5ZM17.0625 19V8.875H14.25C13.6172 8.875 13.125 8.38281 13.125 7.75V4.9375H7.5C7.18359 4.9375 6.9375 5.21875 6.9375 5.5V19C6.9375 19.3164 7.18359 19.5625 7.5 19.5625H16.5C16.7812 19.5625 17.0625 19.3164 17.0625 19Z" />
    </svg>
  `,"exclamation-triangle":`
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.7891 17.9102C21.3516 18.8945 20.6484 20.125 19.4883 20.125H4.47656C3.31641 20.125 2.61328 18.8945 3.14062 17.9102L10.6641 5.11328C10.9805 4.62109 11.4727 4.375 12 4.375C12.4922 4.375 12.9844 4.62109 13.3008 5.11328L20.7891 17.9102ZM4.82812 18.4375H19.1367L11.9648 6.23828L4.82812 18.4375ZM12 15.1328C12.5977 15.1328 13.0898 15.625 13.0898 16.2227C13.0898 16.8203 12.5977 17.3125 12 17.3125C11.3672 17.3125 10.875 16.8203 10.875 16.2227C10.875 15.625 11.3672 15.1328 12 15.1328ZM11.1562 9.71875C11.1562 9.26172 11.5078 8.875 12 8.875C12.457 8.875 12.8438 9.26172 12.8438 9.71875V13.0938C12.8438 13.5859 12.457 13.9375 12 13.9375C11.5078 13.9375 11.1562 13.5859 11.1562 13.0938V9.71875Z" />
    </svg>
  `},Th={name:"system",resolver:i=>i in Sh?`data:image/svg+xml,${encodeURIComponent(Sh[i])}`:""};var yn=[zh,Th],wn=[];function Ph(i){wn.push(i)}function Eh(i){wn=wn.filter(t=>t!==i)}function ec(i){return yn.find(t=>t.name===i)}function oc(i,t){Oh(i),yn.push({name:i,resolver:t.resolver,mutator:t.mutator,spriteSheet:t.spriteSheet}),wn.forEach(e=>{e.library===i&&e.setIcon()})}function Oh(i){yn=yn.filter(t=>t.name!==i)}var{D:Ky}=Zl,Ah=(i,t)=>t===void 0?i?._$litType$!==void 0:i?._$litType$===t,_n=i=>i.strings===void 0,Mh=()=>document.createComment(""),aa=(i,t,e)=>{let r=i._$AA.parentNode,a=t===void 0?i._$AB:t._$AA;if(e===void 0){let s=r.insertBefore(Mh(),a),l=r.insertBefore(Mh(),a);e=new Ky(s,l,i,i.options)}else{let s=e._$AB.nextSibling,l=e._$AM,p=l!==i;if(p){let d;e._$AQ?.(i),e._$AM=i,e._$AP!==void 0&&(d=i._$AU)!==l._$AU&&e._$AP(d)}if(s!==a||p){let d=e._$AA;for(;d!==s;){let h=d.nextSibling;r.insertBefore(d,a),d=h}}}return e},Gi=(i,t,e=i)=>(i._$AI(t,e),i),Xy={},xn=(i,t=Xy)=>i._$AH=t,$h=i=>i._$AH,kn=i=>{i._$AP?.(!1,!0);let t=i._$AA,e=i._$AB.nextSibling;for(;t!==e;){let r=t.nextSibling;t.remove(),t=r}};var N=A`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`;var Ih=A`
  ${N}

  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;var Jy=Object.defineProperty,Qy=Object.getOwnPropertyDescriptor,Ei=(i,t,e,r)=>{for(var a=r>1?void 0:r?Qy(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&Jy(t,e,a),a},ts=Symbol(),Cn=Symbol(),ic,rc=new Map,Dh=class extends R{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default",this.loading="eager"}async resolveIcon(t,e){let r;if(e?.spriteSheet)return E`<svg part="svg" fill="currentColor">
        <use part="use" href="${t}"></use>
      </svg>`;try{if(r=await fetch(t,{mode:"cors"}),!r.ok)return r.status===410?ts:Cn}catch{return Cn}try{let a=document.createElement("div");a.innerHTML=await r.text();let s=a.firstElementChild;if(s?.tagName?.toLowerCase()!=="svg")return ts;ic||(ic=new DOMParser);let l=ic.parseFromString(s.outerHTML,"text/html").body.querySelector("svg");return l?(l.part.add("svg"),document.adoptNode(l)):ts}catch{return ts}}connectedCallback(){super.connectedCallback(),Ph(this)}firstUpdated(){this.initialRender=!0,this.loading==="lazy"?(this.intersectionObserver=new IntersectionObserver(this.loadIcon,{rootMargin:"375px"}),this.intersectionObserver.observe(this)):this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Eh(this),this.intersectionObserver?.disconnect()}getIconSource(){let t=ec(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async loadIcon(t){this.loading==="lazy"&&!t||t&&!t.some(e=>e.isIntersecting&&(e.boundingClientRect.height>0||e.boundingClientRect.width>0))||(this.intersectionObserver?.disconnect(),await this.setIcon())}async setIcon(){let{url:t,fromLibrary:e}=this.getIconSource(),r=e?ec(this.library):void 0;if(!t){this.svg=null;return}let a=rc.get(t);if(a||(a=this.resolveIcon(t,r),rc.set(t,a)),!this.initialRender)return;let s=await a;if(s===Cn&&rc.delete(t),t===this.getIconSource().url){if(Ah(s)){this.svg=s;return}switch(s){case Cn:case ts:this.svg=null,this.emit("awc-error");break;default:this.svg=s.cloneNode(!0),r?.mutator?.(this.svg),this.emit("awc-load")}}}render(){return this.svg}};Dh.styles=Ih;var nt=Dh;Ei([X()],nt.prototype,"svg",2);Ei([u({reflect:!0})],nt.prototype,"name",2);Ei([u()],nt.prototype,"src",2);Ei([u()],nt.prototype,"label",2);Ei([u({reflect:!0})],nt.prototype,"library",2);Ei([u({type:String,reflect:!0})],nt.prototype,"loading",2);Ei([M("label")],nt.prototype,"handleLabelChange",1);Ei([re],nt.prototype,"loadIcon",1);Ei([re,M(["name","src","library"])],nt.prototype,"setIcon",1);var Bh=A`
  ${N}

  :host {
    display: inline-block;
    color: var(--awc-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--awc-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--awc-spacing-x-small);
    cursor: pointer;
    transition: var(--awc-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--awc-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--awc-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--awc-focus-ring);
    outline-offset: var(--awc-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`;var tw=Object.defineProperty,ew=Object.getOwnPropertyDescriptor,ii=(i,t,e,r)=>{for(var a=r>1?void 0:r?ew(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&tw(t,e,a),a},ac=class extends R{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("awc-blur")}handleFocus(){this.hasFocus=!0,this.emit("awc-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){let t=!!this.href,e=t?Pi`a`:Pi`button`;return Ne`
      <${e}
        part="base"
        class=${Z({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${H(t?void 0:this.disabled)}
        type=${H(t?void 0:"button")}
        href=${H(t?this.href:void 0)}
        target=${H(t?this.target:void 0)}
        download=${H(t?this.download:void 0)}
        rel=${H(t&&this.target?"noreferrer noopener":void 0)}
        role=${H(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <awc-icon
          class="icon-button__icon"
          name=${H(this.name)}
          library=${H(this.library)}
          src=${H(this.src)}
          aria-hidden="true"
        ></awc-icon>
      </${e}>
    `}};ac.styles=Bh,ac.dependencies={"awc-icon":nt};var Ut=ac;ii([F(".icon-button")],Ut.prototype,"button",2);ii([X()],Ut.prototype,"hasFocus",2);ii([u()],Ut.prototype,"name",2);ii([u()],Ut.prototype,"library",2);ii([u()],Ut.prototype,"src",2);ii([u()],Ut.prototype,"href",2);ii([u()],Ut.prototype,"target",2);ii([u()],Ut.prototype,"download",2);ii([u()],Ut.prototype,"label",2);ii([u({type:Boolean,reflect:!0})],Ut.prototype,"disabled",2);var Rh=A`
  ${N}

  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--awc-panel-background-color);
    border-radius: var(--awc-border-radius-medium);
    font-family: var(--awc-font-sans);
    font-size: var(--awc-font-size-small);
    font-weight: var(--awc-font-weight-normal);
    line-height: 1.6;
    color: var(--awc-color-neutral-700);
    margin: inherit;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--awc-font-size-large);
    padding-inline-start: var(--awc-spacing-large);
  }

  .alert--primary {
    background-color: var(--awc-color-primary-200);
  }

  .alert--primary .alert__icon {
    color: var(--awc-color-primary-600);
  }

  .alert--secondary {
    background-color: var(--awc-color-secondary-200);
  }

  .alert--secondary .alert__icon {
    color: var(--awc-color-secondary-600);
  }

  .alert--tertiary {
    background-color: var(--awc-color-tertiary-200);
  }

  .alert--tertiary .alert__icon {
    color: var(--awc-color-tertiary-600);
  }

  .alert--success {
    background-color: var(--awc-color-success-200);
  }

  .alert--success .alert__icon {
    color: var(--awc-color-success-600);
  }

  .alert--neutral {
    background-color: var(--awc-color-neutral-200);
  }

  .alert--neutral .alert__icon {
    color: var(--awc-color-neutral-600);
  }

  .alert--warning {
    background-color: var(--awc-color-warning-200);
  }

  .alert--warning .alert__icon {
    color: var(--awc-color-warning-600);
  }

  .alert--danger {
    background-color: var(--awc-color-danger-200);
  }

  .alert--danger .alert__icon {
    color: var(--awc-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--awc-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--awc-font-size-medium);
    padding-inline-end: var(--awc-spacing-medium);
  }
`;var ow=Object.defineProperty,iw=Object.getOwnPropertyDescriptor,xr=(i,t,e,r)=>{for(var a=r>1?void 0:r?iw(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&ow(t,e,a),a},sa=Object.assign(document.createElement("div"),{className:"awc-toast-stack"}),sc=class extends R{constructor(){super(...arguments),this.hasSlotController=new Ct(this,"icon","suffix"),this.localize=new et(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){this.emit("awc-show"),this.duration<1/0&&this.restartAutoHide(),await At(this.base),this.base.hidden=!1;let{keyframes:t,options:e}=yt(this,"alert.show",{dir:this.localize.dir()});await Tt(this.base,t,e),this.emit("awc-after-show")}else{this.emit("awc-hide"),clearTimeout(this.autoHideTimeout),await At(this.base);let{keyframes:t,options:e}=yt(this,"alert.hide",{dir:this.localize.dir()});await Tt(this.base,t,e),this.base.hidden=!0,this.emit("awc-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,Kt(this,"awc-after-show")}async hide(){if(this.open)return this.open=!1,Kt(this,"awc-after-hide")}async toast(){return new Promise(t=>{sa.parentElement===null&&document.body.append(sa),sa.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("awc-after-hide",()=>{sa.removeChild(this),t(),sa.querySelector("awc-alert")===null&&sa.remove()},{once:!0})})}render(){return E`
      <div
        part="base"
        class=${Z({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--secondary":this.variant==="secondary","alert--tertiary":this.variant==="tertiary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mousemove=${this.handleMouseMove}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?E`
              <awc-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></awc-icon-button>
            `:""}
      </div>
    `}};sc.styles=Rh,sc.dependencies={"awc-icon-button":Ut};var ri=sc;xr([F('[part~="base"]')],ri.prototype,"base",2);xr([u({type:Boolean,reflect:!0})],ri.prototype,"open",2);xr([u({type:Boolean,reflect:!0})],ri.prototype,"closable",2);xr([u({type:String,reflect:!0})],ri.prototype,"variant",2);xr([u({type:Number})],ri.prototype,"duration",2);xr([M("open",{waitUntilFirstUpdate:!0})],ri.prototype,"handleOpenChange",1);xr([M("duration")],ri.prototype,"handleDurationChange",1);ht("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});ht("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});ri.define("awc-alert");var Fh=A`
  ${N}

  :host {
    --control-box-size: 3rem;
    --icon-size: calc(var(--control-box-size) * 0.625);

    display: inline-flex;
    position: relative;
    cursor: pointer;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  img[aria-hidden='true'] {
    display: none;
  }

  .animated-image__control-box {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    top: calc(50% - var(--control-box-size) / 2);
    right: calc(50% - var(--control-box-size) / 2);
    width: var(--control-box-size);
    height: var(--control-box-size);
    font-size: var(--icon-size);
    background: none;
    border: solid 2px currentColor;
    background-color: rgb(0 0 0 /50%);
    border-radius: var(--awc-border-radius-circle);
    color: white;
    pointer-events: none;
    transition: var(--awc-transition-fast) opacity;
  }

  :host([play]:hover) .animated-image__control-box {
    opacity: 1;
  }

  :host([play]:not(:hover)) .animated-image__control-box {
    opacity: 0;
  }

  :host([play]) slot[name='play-icon'],
  :host(:not([play])) slot[name='pause-icon'] {
    display: none;
  }
`;var rw=Object.defineProperty,aw=Object.getOwnPropertyDescriptor,Yi=(i,t,e,r)=>{for(var a=r>1?void 0:r?aw(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&rw(t,e,a),a},nc=class extends R{constructor(){super(...arguments),this.isLoaded=!1}handleClick(){this.play=!this.play}handleLoad(){let t=document.createElement("canvas"),{width:e,height:r}=this.animatedImage;t.width=e,t.height=r,t.getContext("2d").drawImage(this.animatedImage,0,0,e,r),this.frozenFrame=t.toDataURL("image/gif"),this.isLoaded||(this.emit("awc-load"),this.isLoaded=!0)}handleError(){this.emit("awc-error")}handlePlayChange(){this.play&&(this.animatedImage.src="",this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){return E`
      <div class="animated-image">
        <img
          class="animated-image__animated"
          src=${this.src}
          alt=${this.alt}
          crossorigin="anonymous"
          aria-hidden=${this.play?"false":"true"}
          @click=${this.handleClick}
          @load=${this.handleLoad}
          @error=${this.handleError}
        />

        ${this.isLoaded?E`
              <img
                class="animated-image__frozen"
                src=${this.frozenFrame}
                alt=${this.alt}
                aria-hidden=${this.play?"true":"false"}
                @click=${this.handleClick}
              />

              <div part="control-box" class="animated-image__control-box">
                <slot name="play-icon"><awc-icon name="play-fill" library="system"></awc-icon></slot>
                <slot name="pause-icon"><awc-icon name="pause-fill" library="system"></awc-icon></slot>
              </div>
            `:""}
      </div>
    `}};nc.styles=Fh,nc.dependencies={"awc-icon":nt};var Ho=nc;Yi([F(".animated-image__animated")],Ho.prototype,"animatedImage",2);Yi([X()],Ho.prototype,"frozenFrame",2);Yi([X()],Ho.prototype,"isLoaded",2);Yi([u()],Ho.prototype,"src",2);Yi([u()],Ho.prototype,"alt",2);Yi([u({type:Boolean,reflect:!0})],Ho.prototype,"play",2);Yi([M("play",{waitUntilFirstUpdate:!0})],Ho.prototype,"handlePlayChange",1);Yi([M("src")],Ho.prototype,"handleSrcChange",1);Ho.define("awc-animated-image");var Ln={};xy(Ln,{backInDown:()=>Qh,backInLeft:()=>tu,backInRight:()=>eu,backInUp:()=>ou,backOutDown:()=>iu,backOutLeft:()=>ru,backOutRight:()=>au,backOutUp:()=>su,bounce:()=>Nh,bounceIn:()=>nu,bounceInDown:()=>lu,bounceInLeft:()=>cu,bounceInRight:()=>du,bounceInUp:()=>pu,bounceOut:()=>hu,bounceOutDown:()=>uu,bounceOutLeft:()=>mu,bounceOutRight:()=>fu,bounceOutUp:()=>gu,easings:()=>es,fadeIn:()=>bu,fadeInBottomLeft:()=>vu,fadeInBottomRight:()=>yu,fadeInDown:()=>wu,fadeInDownBig:()=>_u,fadeInLeft:()=>xu,fadeInLeftBig:()=>ku,fadeInRight:()=>Cu,fadeInRightBig:()=>Lu,fadeInTopLeft:()=>zu,fadeInTopRight:()=>Su,fadeInUp:()=>Tu,fadeInUpBig:()=>Pu,fadeOut:()=>Eu,fadeOutBottomLeft:()=>Ou,fadeOutBottomRight:()=>Mu,fadeOutDown:()=>Au,fadeOutDownBig:()=>$u,fadeOutLeft:()=>Iu,fadeOutLeftBig:()=>Du,fadeOutRight:()=>Bu,fadeOutRightBig:()=>Ru,fadeOutTopLeft:()=>Fu,fadeOutTopRight:()=>Nu,fadeOutUp:()=>ju,fadeOutUpBig:()=>Uu,flash:()=>jh,flip:()=>Vu,flipInX:()=>Hu,flipInY:()=>Zu,flipOutX:()=>Wu,flipOutY:()=>qu,headShake:()=>Uh,heartBeat:()=>Vh,hinge:()=>gm,jackInTheBox:()=>bm,jello:()=>Hh,lightSpeedInLeft:()=>Gu,lightSpeedInRight:()=>Yu,lightSpeedOutLeft:()=>Ku,lightSpeedOutRight:()=>Xu,pulse:()=>Zh,rollIn:()=>vm,rollOut:()=>ym,rotateIn:()=>Ju,rotateInDownLeft:()=>Qu,rotateInDownRight:()=>tm,rotateInUpLeft:()=>em,rotateInUpRight:()=>om,rotateOut:()=>im,rotateOutDownLeft:()=>rm,rotateOutDownRight:()=>am,rotateOutUpLeft:()=>sm,rotateOutUpRight:()=>nm,rubberBand:()=>Wh,shake:()=>qh,shakeX:()=>Gh,shakeY:()=>Yh,slideInDown:()=>lm,slideInLeft:()=>cm,slideInRight:()=>dm,slideInUp:()=>pm,slideOutDown:()=>hm,slideOutLeft:()=>um,slideOutRight:()=>mm,slideOutUp:()=>fm,swing:()=>Kh,tada:()=>Xh,wobble:()=>Jh,zoomIn:()=>wm,zoomInDown:()=>_m,zoomInLeft:()=>xm,zoomInRight:()=>km,zoomInUp:()=>Cm,zoomOut:()=>Lm,zoomOutDown:()=>zm,zoomOutLeft:()=>Sm,zoomOutRight:()=>Tm,zoomOutUp:()=>Pm});var Nh=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}];var jh=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}];var Uh=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}];var Vh=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}];var Hh=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var Zh=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}];var Wh=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}];var qh=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var Gh=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var Yh=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var Kh=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}];var Xh=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}];var Jh=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var Qh=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}];var tu=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}];var eu=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}];var ou=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}];var iu=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}];var ru=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}];var au=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}];var su=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}];var nu=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}];var lu=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}];var cu=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}];var du=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}];var pu=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}];var hu=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}];var uu=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}];var mu=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}];var fu=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}];var gu=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}];var bu=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}];var vu=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var yu=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var wu=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var _u=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var xu=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var ku=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var Cu=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var Lu=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var zu=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var Su=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var Tu=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var Pu=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var Eu=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}];var Ou=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}];var Mu=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}];var Au=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}];var $u=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}];var Iu=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}];var Du=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}];var Bu=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}];var Ru=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}];var Fu=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}];var Nu=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}];var ju=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}];var Uu=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}];var Vu=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg)`,easing:"ease-out"},{offset:.5,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg)`,easing:"ease-in"},{offset:.8,transform:`perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg)`,easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}];var Hu=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}];var Zu=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}];var Wu=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}];var qu=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}];var Gu=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var Yu=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}];var Ku=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}];var Xu=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}];var Ju=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}];var Qu=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}];var tm=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}];var em=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}];var om=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}];var im=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}];var rm=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}];var am=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}];var sm=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}];var nm=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}];var lm=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}];var cm=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}];var dm=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}];var pm=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}];var hm=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}];var um=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}];var mm=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}];var fm=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}];var gm=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}];var bm=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}];var vm=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}];var ym=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}];var wm=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}];var _m=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}];var xm=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}];var km=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}];var Cm=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}];var Lm=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}];var zm=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}];var Sm=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}];var Tm=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}];var Pm=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}];var es={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"};function Em(i){return(t,e)=>_r(t,e,{async get(){return await this.updateComplete,this.renderRoot?.querySelector(i)??null}})}var Om=A`
  ${N}

  :host {
    display: contents;
  }
`;var sw=Object.defineProperty,nw=Object.getOwnPropertyDescriptor,je=(i,t,e,r)=>{for(var a=r>1?void 0:r?nw(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&sw(t,e,a),a},Mm=class extends R{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.emit("awc-finish")},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.emit("awc-cancel")}}get currentTime(){return this.animation?.currentTime??0}set currentTime(t){this.animation&&(this.animation.currentTime=t)}connectedCallback(){super.connectedCallback(),this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){let t=es[this.easing]??this.easing,e=this.keyframes??Ln[this.name],r=(await this.defaultSlot).assignedElements()[0];return!r||!e?!1:(this.destroyAnimation(),this.animation=r.animate(e,{delay:this.delay,direction:this.direction,duration:this.duration,easing:t,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.emit("awc-start")):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return this.animation?(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.emit("awc-start")),this.play?this.animation.play():this.animation.pause(),!0):!1}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){this.animation?.cancel()}finish(){this.animation?.finish()}render(){return E` <slot @slotchange=${this.handleSlotChange}></slot> `}};Mm.styles=Om;var ge=Mm;je([Em("slot")],ge.prototype,"defaultSlot",2);je([u()],ge.prototype,"name",2);je([u({type:Boolean,reflect:!0})],ge.prototype,"play",2);je([u({type:Number})],ge.prototype,"delay",2);je([u()],ge.prototype,"direction",2);je([u({type:Number})],ge.prototype,"duration",2);je([u()],ge.prototype,"easing",2);je([u({attribute:"end-delay",type:Number})],ge.prototype,"endDelay",2);je([u()],ge.prototype,"fill",2);je([u({type:Number})],ge.prototype,"iterations",2);je([u({attribute:"iteration-start",type:Number})],ge.prototype,"iterationStart",2);je([u({attribute:!1})],ge.prototype,"keyframes",2);je([u({attribute:"playback-rate",type:Number})],ge.prototype,"playbackRate",2);je([M(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],ge.prototype,"handleAnimationChange",1);je([M("play")],ge.prototype,"handlePlayChange",1);je([M("playbackRate")],ge.prototype,"handlePlaybackRateChange",1);ge.define("awc-animation");var Am="important",lw=" !"+Am,Qt=xo(class extends ao{constructor(i){if(super(i),i.type!==Me.ATTRIBUTE||i.name!=="style"||i.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(i){return Object.keys(i).reduce((t,e)=>{let r=i[e];return r==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(i,[t]){let{style:e}=i.element;if(this.ut===void 0)return this.ut=new Set(Object.keys(t)),this.render(t);for(let r of this.ut)t[r]==null&&(this.ut.delete(r),r.includes("-")?e.removeProperty(r):e[r]=null);for(let r in t){let a=t[r];if(a!=null){this.ut.add(r);let s=typeof a=="string"&&a.endsWith(lw);r.includes("-")||s?e.setProperty(r,s?a.slice(0,-11):a,s?Am:""):e[r]=a}}return pe}});var $m={"images.ctfassets.net":"contentful","cdn.builder.io":"builder.io","images.prismic.io":"imgix","www.datocms-assets.com":"imgix","cdn.sanity.io":"imgix","images.unsplash.com":"imgix","cdn.shopify.com":"shopify","s7d1.scene7.com":"scene7","ip.keycdn.com":"keycdn","assets.caisy.io":"bunny","images.contentstack.io":"contentstack"};var Im={"imgix.net":"imgix","files.wordpress.com":"wordpress","b-cdn.net":"bunny","storyblok.com":"storyblok","kc-usercontent.com":"kontent.ai","cloudinary.com":"cloudinary","kxcdn.com":"keycdn","imgeng.in":"imageengine","imagekit.io":"imagekit","cloudimg.io":"cloudimage"};var Dm={"/cdn-cgi/image/":"cloudflare","/cdn-cgi/imagedelivery/":"cloudflare_images","/_next/image":"nextjs","/_next/static":"nextjs","/_vercel/image":"vercel","/is/image":"scene7","/_ipx/":"ipx","/_image":"astro","/.netlify/images":"netlify"};var zn=i=>{if(!i)return i;let t=Number(i);return isNaN(t)?i:Math.round(t)},it=(i,t,e,r,a)=>{e?(a&&(e=zn(e)),i.searchParams.set(t,e.toString())):r&&i.searchParams.delete(t)},Gt=(i,t,e)=>{i.searchParams.has(t)||i.searchParams.set(t,e.toString())},Oi=(i,t)=>{let e=Number(i.searchParams.get(t));return isNaN(e)?void 0:e},lc=i=>{let{pathname:t,search:e}=i;return`${t}${e}`},na=i=>i.hostname==="n"?lc(i):i.toString(),lt=(i,t)=>typeof i=="string"?new URL(i,t??"http://n/"):i;var Bm=new Map(Object.entries($m)),cw=Object.entries(Im);function Rm(i){return cc(i)||dw(i)}function cc(i){if(typeof i=="string"&&!i.startsWith("https://"))return!1;let{hostname:t}=lt(i);if(Bm.has(t))return Bm.get(t);for(let[e,r]of cw)if(t.endsWith(`.${e}`))return r;return!1}function dw(i){let{pathname:t}=lt(i);for(let[e,r]of Object.entries(Dm))if(t.startsWith(e))return r;return!1}var Sn=i=>{let t=lt(i).searchParams.get("url");if(!t||!t.startsWith("http"))return!1;let e=cc(t);return e?{cdn:e,url:t}:!1},pw=({base:i,width:t,params:{quality:e=75,root:r="_vercel"}={}})=>{let a=new URL("http://n");return a.pathname=`/${r}/image`,a.searchParams.set("url",i.toString()),it(a,"w",t,!1,!0),Gt(a,"q",e),lc(a)},Tn=({url:i,width:t,cdn:e})=>{let r=lt(i),a=r.pathname.startsWith("/_next/image")||r.pathname.startsWith("/_vercel/image"),s=a?r.searchParams.get("url"):i.toString();if(s)return it(r,"w",t,!0,!0),a?na(r):pw({base:s,width:t,params:{root:e==="nextjs"?"_next":"_vercel"}})};var Fm={vercel:Sn,nextjs:Sn};function hw(i,t){if(!(t in Fm))return!1;let e=Fm[t];return e?e(i):!1}function dc(i,t){let e=Rm(i)||t;return e?hw(i,e)||{cdn:e,url:i}:!1}var Nm=({url:i,width:t,height:e,format:r})=>{let a=lt(i);return t&&t>4e3&&(e&&(e=Math.round(e*4e3/t)),t=4e3),e&&e>4e3&&(t&&(t=Math.round(t*4e3/e)),e=4e3),it(a,"w",t,!0,!0),it(a,"h",e,!0,!0),it(a,"fm",r),Gt(a,"fit","fill"),a};var jm=({url:i,width:t,height:e,format:r})=>{let a=lt(i);return it(a,"width",t,!0,!0),it(a,"height",e,!0,!0),it(a,"format",r),t&&e&&(Gt(a,"fit","cover"),Gt(a,"sharp","true")),a};var Um=({url:i,width:t,height:e,format:r})=>{let a=lt(i);if(it(a,"w",t,!0,!0),it(a,"h",e,!0,!0),Gt(a,"fit","min"),r){a.searchParams.set("fm",r);let s=a.searchParams.get("auto");s==="format"?a.searchParams.delete("auto"):s?.includes("format")&&a.searchParams.set("auto",s.split(",").filter(l=>l!=="format").join(","))}else a.searchParams.delete("fm"),a.searchParams.get("auto")?.includes("format")||a.searchParams.append("auto","format");return a};var uw=/(.+?)(?:_(?:(pico|icon|thumb|small|compact|medium|large|grande|original|master)|(\d*)x(\d*)))?(?:_crop_([a-z]+))?(\.[a-zA-Z]+)(\.png|\.jpg|\.webp|\.avif)?$/,mw=i=>{let t=lt(i),e=t.pathname.match(uw);if(!e)throw new Error("Invalid Shopify URL");let[,r,a,s,l,p,d,h]=e;t.pathname=`${r}${d}`;let f=s||t.searchParams.get("width"),g=l||t.searchParams.get("height");return t.searchParams.delete("width"),t.searchParams.delete("height"),{base:t.toString(),width:Number(f)||void 0,height:Number(g)||void 0,format:h?h.slice(1):void 0,params:{crop:p,size:a},cdn:"shopify"}},fw=({base:i,width:t,height:e,format:r,params:a})=>{let s=lt(i);return it(s,"width",t,!0,!0),it(s,"height",e,!0,!0),it(s,"crop",a?.crop),it(s,"format",r),s},Vm=({url:i,width:t,height:e})=>{let r=mw(i);if(!r)return;let a={...r,width:t,height:e};return fw(a)};var Hm=({url:i,width:t,height:e})=>{let r=lt(i);return it(r,"w",t,!0,!0),it(r,"h",e,!0,!0),Gt(r,"crop","1"),r};var Zm=({url:i,width:t,height:e})=>{let r=lt(i);return it(r,"w",t,!0,!0),it(r,"h",e,!0,!0),it(r,"q",Oi(r,"q"),!0),r};var gw=/https?:\/\/(?<host>[^\/]+)\/(?<cloudName>[^\/]+)\/(?<assetType>image|video|raw)\/(?<deliveryType>upload|fetch|private|authenticated|sprite|facebook|twitter|youtube|vimeo)\/?(?<signature>s\-\-[a-zA-Z0-9]+\-\-)?\/?(?<transformations>(?:[^_\/]+_[^,\/]+,?)*)?\/(?:(?<version>v\d+)\/)?(?<idAndFormat>[^\s]+)$/g,bw=i=>i?Object.fromEntries(i.split(",").map(t=>t.split("_"))):{},Wm=({host:i,cloudName:t,assetType:e,deliveryType:r,signature:a,transformations:s={},version:l,id:p,format:d})=>{d&&(s.f=d);let h=Object.entries(s).map(([f,g])=>`${f}_${g}`).join(",");return`https://${[i,t,e,r,a,h,l,p].filter(Boolean).join("/")}`},qm=i=>{let t=[...lt(i).toString().matchAll(gw)];if(!t.length)throw new Error("Invalid Cloudinary URL");let e=t[0].groups||{},{transformations:r="",idAndFormat:a,...s}=e;delete e.idAndFormat;let l=a.lastIndexOf("."),p=l<0?a:a.slice(0,l),d=l<0?void 0:a.slice(l+1),{w:h,h:f,f:g,...v}=bw(r),y=g&&g!=="auto"?g:d;return{base:Wm({...s,id:p,transformations:v}),width:Number(h)||void 0,height:Number(f)||void 0,format:y,cdn:"cloudinary",params:{...e,id:e.deliveryType==="fetch"?a:p,format:y,transformations:v}}},vw=({base:i,width:t,height:e,format:r,params:a})=>{let s=qm(i.toString()),l={transformations:{},...s.params,...a,format:r||"auto"};return t&&(l.transformations.w=zn(t).toString()),e&&(l.transformations.h=zn(e).toString()),l.transformations.c||="lfill",Wm(l)},Gm=({url:i,width:t,height:e,format:r="auto"})=>{let a=qm(i);if(!a)throw new Error("Invalid Cloudinary URL");if(a.params?.assetType!=="image")throw new Error("Cloudinary transformer only supports images");if(a.params?.signature)throw new Error("Cloudinary transformer does not support signed URLs");let s={...a,width:t,height:e,format:r};return vw(s)};var yw=/https?:\/\/(?<host>[^\/]+)\/cdn-cgi\/image\/(?<transformations>[^\/]+)?\/(?<path>.*)$/g,ww=i=>Object.fromEntries(i.split(",").map(t=>t.split("="))),Ym=({host:i,transformations:t={},path:e})=>{let r=Object.entries(t).map(([a,s])=>`${a}=${s}`).join(",");return`https://${[i,"cdn-cgi","image",r,e].join("/")}`},Km=i=>{let t=lt(i),e=[...t.toString().matchAll(yw)];if(!e.length)throw new Error("Invalid Cloudflare URL");let r=e[0].groups||{},{transformations:a,...s}=r,{width:l,height:p,f:d,...h}=ww(a);return Ym({...s,transformations:h}),{base:t.toString(),width:Number(l)||void 0,height:Number(p)||void 0,format:d,cdn:"cloudflare",params:{...r,transformations:h}}},_w=({base:i,width:t,height:e,format:r,params:a})=>{let s=Km(i.toString()),l={transformations:{},...s.params,...a};return t&&(l.transformations.width=t?.toString()),e&&(l.transformations.height=e?.toString()),r&&(l.transformations.f=r==="jpg"?"jpeg":r),l.transformations.fit||="cover",new URL(Ym(l))},Xm=({url:i,width:t,height:e,format:r="auto"})=>{let a=Km(i);if(!a)throw new Error("Invalid Cloudflare URL");let s={...a,width:t,height:e,format:r};return _w(s)};var Jm=({url:i,width:t,height:e})=>{let r=lt(i);return it(r,"width",t,!0,!0),t&&e&&Gt(r,"aspect_ratio",`${t}:${e}`),r};var xw=/(?<id>\/f\/\d+\/\d+x\d+\/\w+\/[^\/]+)\/?(?<modifiers>m\/?(?<crop>\d+x\d+:\d+x\d+)?\/?(?<resize>(?<flipx>\-)?(?<width>\d+)x(?<flipy>\-)?(?<height>\d+))?\/?(filters\:(?<filters>[^\/]+))?)?$/g,kw=/^(?<modifiers>\/(?<crop>\d+x\d+:\d+x\d+)?\/?(?<resize>(?<flipx>\-)?(?<width>\d+)x(?<flipy>\-)?(?<height>\d+))?\/?(filters\:(?<filters>[^\/]+))?\/?)?(?<id>\/f\/.+)$/g,Cw=i=>i?Object.fromEntries(i.split(":").map(t=>{if(!t)return[];let[e,r]=t.split("(");return[e,r.replace(")","")]})):{},Lw=i=>{if(!i)return;let t=Object.entries(i).map(([e,r])=>`${e}(${r??""})`);if(t.length!==0)return`filters:${t.join(":")}`},zw=i=>{let t=lt(i),e=t.hostname==="img2.storyblok.com"?kw:xw,[r]=t.pathname.matchAll(e);if(!r||!r.groups)throw new Error("Invalid Storyblok URL");let{id:a,crop:s,width:l,height:p,filters:d,flipx:h,flipy:f}=r.groups,{format:g,...v}=Cw(d);return t.hostname==="img2.storyblok.com"&&(t.hostname="a.storyblok.com"),{base:t.origin+a,width:Number(l)||void 0,height:Number(p)||void 0,format:g,params:{crop:s,filters:v,flipx:h,flipy:f},cdn:"storyblok"}},Sw=({base:i,width:t=0,height:e=0,format:r,params:a={}})=>{let{crop:s,filters:l,flipx:p="",flipy:d=""}=a,h=`${p}${t}x${d}${e}`;return new URL([i,"m",s,h,Lw(l),r].filter(Boolean).join("/"))},Qm=({url:i,width:t,height:e,format:r})=>{let a=zw(i);if(a)return r&&(a.params||(a.params={filters:{}}),a.params.filters||(a.params.filters={}),a.params.filters.format=r),Sw({...a,width:t,height:e})};var tf=({url:i,width:t,height:e,format:r})=>{let a=lt(i);return it(a,"w",t,!0,!0),it(a,"h",e,!0,!0),it(a,"fm",r,!0),t&&e&&Gt(a,"fit","crop"),a};var ef=i=>Tn({...i,cdn:"nextjs"});var of=({url:i,width:t,height:e,format:r})=>{let a=lt(i);return it(a,"wid",t,!0,!0),it(a,"hei",e,!0,!0),it(a,"fmt",r,!0),it(a,"qlt",Oi(a,"qlt"),!0),it(a,"scl",Oi(a,"scl"),!0),Gt(a,"fit","crop"),!t&&!e&&Gt(a,"scl",1),a};var rf=({url:i,width:t,height:e,format:r})=>{let a=lt(i);return it(a,"width",t,!0,!0),it(a,"height",e,!0,!0),it(a,"format",r,!0),it(a,"quality",Oi(a,"quality"),!0),Gt(a,"enlarge",0),a};var af=({url:i,width:t,height:e,format:r})=>{let a=lt(i);return it(a,"width",t,!0,!0),it(a,"height",e,!0,!0),it(a,"format",r),it(a,"quality",Oi(a,"quality"),!0),a};var pc={width:"w",height:"h",autoWidthWithFallback:"w_auto",auto_width_fallback:"w_auto",scaleToScreenWidth:"pc",scale_to_screen_width:"pc",crop:"cr",outputFormat:"f",format:"f",fit:"m",fitMethod:"m",compression:"cmpr",sharpness:"s",rotate:"r",inline:"in",keepMeta:"meta",keep_meta:"meta",noOptimization:"pass",no_optimization:"pass",force_download:"dl",max_device_pixel_ratio:"maxdpr",maxDevicePixelRatio:"maxdpr"};function Tw(i){return Object.keys(pc).find(t=>pc[t]===i)||""}function Pw(i){let t=i.toString(),e=[];if(t){let r=t.split("imgeng=");r.length>1&&(e=r[1].split("/"))}return e}function Ew(i){let t=i.toString(),e="";if(t){let r=t.split("imgeng=");r.length>1?e=r[0].slice(0,-1):e=t}return e}var sf=({url:i,width:t,height:e,format:r})=>{let a=lt(i),s=Ew(a),l={},p=a.toString()===s?[]:Pw(a);p.length&&(l=$w(p)),t&&(l.width=t),e&&(l.height=e),r&&(l.format=r),l.hasOwnProperty("fit")||(l={...l,fit:"cropbox"});let d=Ow(l),h=Mw(d),f=h===""?"":s.includes("?")?"&":"?";return`${s}${f}${h}`};function Ow(i){return Object.entries(i).reduce((t,[e,r])=>t+Aw(e,r),"")}function Mw(i){return i&&i!==""?`imgeng=${i}`:""}function Aw(i,t){let e=pc[i];return e&&(t||t===0)?`/${e}_${t}`:""}function $w(i){let t={};return i.forEach(e=>{let r=e.split("_");if(r.length>1){let a=r[0],s=r[1],l=Tw(a);l&&(t[l]=s)}}),t}var nf=({url:i,width:t,height:e,format:r})=>{let a=lt(i);return it(a,"width",t,!0,!0),it(a,"height",e,!0,!0),it(a,"format",r),a.searchParams.has("format")||Gt(a,"auto","webp"),t&&e&&Gt(a,"fit","crop"),a};var Iw=/https?:\/\/(?<host>[^\/]+)\/cdn-cgi\/imagedelivery\/(?<accountHash>[^\/]+)\/(?<imageId>[^\/]+)\/*(?<transformations>[^\/]+)*$/g,Dw=i=>Object.fromEntries(i?.split(",")?.map(t=>t.split("="))??[]),Bw=({host:i,accountHash:t,transformations:e={},imageId:r})=>{let a=Object.entries(e).map(([s,l])=>`${s}=${l}`).join(",");return`https://${[i,"cdn-cgi","imagedelivery",t,r,a].join("/")}`},lf=i=>{let t=lt(i),e=[...t.toString().matchAll(Iw)];if(!e.length)throw new Error("Invalid Cloudflare Images URL");let r=e[0].groups||{},{transformations:a,...s}=r,{w:l,h:p,f:d,...h}=Dw(a);return{base:t.toString(),width:Number(l)||void 0,height:Number(p)||void 0,format:d,cdn:"cloudflare_images",params:{...s,transformations:h}}},Rw=({base:i,width:t,height:e,format:r,params:a})=>{let s=lf(i.toString()),l={transformations:{},...s.params,...a};return t&&(l.transformations.w=t?.toString()),e&&(l.transformations.h=e?.toString()),r&&(l.transformations.f=r),l.transformations.fit||="cover",new URL(Bw(l))},cf=({url:i,width:t,height:e,format:r="auto"})=>{let a=lf(i);if(!a)throw new Error("Invalid Cloudflare Images URL");let s={...a,width:t,height:e,format:r};return Rw(s)};var Fw=i=>{let t=lt(i),[e,...r]=t.pathname.split("/").slice(1),a=Object.fromEntries(e.split(",").map(s=>{let[l,p]=s.split("_");return[l,p]}));if(a.s){let[s,l]=a.s.split("x");a.w||=s,a.h||=l}return{base:r.join("/"),width:Number(a.w)||void 0,height:Number(a.h)||void 0,quality:Number(a.q)||void 0,format:a.f||"auto",params:a,cdn:"ipx"}},df=({base:i,width:t,height:e,format:r,params:a})=>{let s=a?.modifiers??{};t&&e?s.s=`${t}x${e}`:t?s.w=`${t}`:e&&(s.h=`${e}`),r&&(s.f=r);let l=a?.base.endsWith("/")?a?.base:`${a?.base}/`,p=Object.entries(s).map(([f,g])=>`${f}_${g}`).join(","),d=i.toString(),h=d.startsWith("/")?d.slice(1):d;return`${l}${p}/${h}`},pf=i=>{let t=String(i.url),e=lt(t),r=e.pathname.startsWith("/_ipx")&&e.hostname!=="n"?`${e.origin}/_ipx`:"/_ipx",a=i.cdnOptions?.ipx?.base??r;if(a&&a!=="/"&&t.startsWith(a)){let s=Fw(t.replace(a,""));return df({...s,...i,params:{...i.cdnOptions?.ipx,base:a}})}return df({...i,base:t,params:{...i.cdnOptions?.ipx,base:a}})};var hf=({url:i,width:t,height:e,format:r})=>{let a=lt(i),s=na(new URL(a.pathname,a.origin)),l={searchParams:new URLSearchParams};return it(l,"href",s,!0,!0),it(l,"w",t,!0,!0),it(l,"h",e,!0,!0),it(l,"f",r),`/_image?${l.searchParams.toString()}`};var Nw=new Set(["w","h","q","fm","url","width","height","quality"]),jw=i=>{let t=lt(i),e=Number(t.searchParams.get("w")??t.searchParams.get("width"))??void 0,r=Number(t.searchParams.get("h")??t.searchParams.get("height"))??void 0,a=Number(t.searchParams.get("q")??t.searchParams.get("quality"))||void 0,s=t.searchParams.get("fm")||void 0,l=t.searchParams.get("url")||"",p={quality:a};return t.searchParams.forEach((d,h)=>{Nw.has(h)||(p[h]=d)}),t.search="",{base:l,width:e,height:r,format:s,params:p,cdn:"netlify"}},uf=({base:i,width:t,height:e,format:r,params:{site:a,quality:s,...l}={}})=>{let p=lt("/.netlify/images",a);return Object.entries(l).forEach(([d,h])=>it(p,d,h)),it(p,"q",s,!0,!0),it(p,"w",t,!0,!0),it(p,"h",e,!0,!0),it(p,"fm",r),Gt(p,"fit","cover"),p.searchParams.set("url",i.toString()),na(p)},mf=i=>{let t=lt(i.url);if(t.pathname.startsWith("/.netlify/images")){let{params:e,base:r,format:a}=jw(t);return uf({base:r,format:a,...i,params:{...e,site:t.hostname==="n"?void 0:t.origin}})}return uf({...i,base:i.url,params:{site:i.cdnOptions?.netlify?.site}})};var Uw=i=>(i.searchParams.get("tr")||"").split(",").reduce((t,e)=>{let[r,a]=e.split("-");return t[r]=a,t},{}),ff=({url:i,width:t,height:e,format:r})=>{let a=lt(i),s=Uw(a);s.w=t&&Math.round(t),s.h=e&&Math.round(e),s.fm||(s.fm="auto"),r&&(s.fm=r);let l=Object.keys(s).map(p=>{let d=s[p];if(d)return`${p}-${d}`}).filter(p=>p).join(",");return a.searchParams.set("tr",l),a};var hc=i=>({imgix:Um,contentful:Nm,"builder.io":jm,shopify:Vm,wordpress:Hm,cloudimage:Zm,cloudinary:Gm,bunny:Jm,storyblok:Qm,cloudflare:Xm,vercel:Tn,nextjs:ef,scene7:of,"kontent.ai":tf,keycdn:rf,directus:af,imageengine:sf,contentstack:nf,cloudflare_images:cf,ipx:pf,astro:hf,netlify:mf,imagekit:ff})[i];var Vw=(i,t)=>{if(!(!i||!t))switch(t){case"constrained":case"inset":case"filled":return`(min-width: ${i}px) ${i}px, 100vw`;case"fixed":return`${i}px`;case"fullWidth":return"100vw";default:return}},os=i=>i||i===0?`${i}px`:void 0,Hw=({width:i,height:t,aspectRatio:e,layout:r,objectFit:a="cover",background:s})=>{let l=[["object-fit",a],["object-position","center"]];return s?.startsWith("https:")||s?.startsWith("http:")||s?.startsWith("data:")?(l.push(["background-image",`url(${s})`]),l.push(["background-size","cover"]),l.push(["background-repeat","no-repeat"])):l.push(["background",s]),r==="fixed"&&(l.push(["width",os(i)]),l.push(["height",os(t)])),r==="constrained"&&(l.push(["max-width",os(i)]),l.push(["max-height",os(t)]),l.push(["aspect-ratio",e?`${e}`:void 0]),l.push(["width","100%"])),r==="fullWidth"&&(l.push(["width","100%"]),l.push(["aspect-ratio",e?`${e}`:void 0]),l.push(["height",t?os(t):"100%"])),r==="filled"&&(l.push(["width","100%"]),l.push(["height","100%"]),l.push(["aspect-ratio",e?`${e}`:void 0])),r==="inset"&&(l.push(["width","100%"]),l.push(["height","100%"]),l.push(["position","absolute"]),l.push(["top","0"]),l.push(["left","0"]),l.push(["right","0"]),l.push(["bottom","0"]),l.push(["inset","0"]),l.push(["aspect-ratio",e?`${e}`:void 0])),Object.fromEntries(l.filter(([,p])=>p))},gf=[6016,5120,4480,3840,3200,2560,2048,1920,1668,1280,1080,960,828,750,640],bf=24,Zw=({width:i,layout:t})=>{if(t==="fullWidth")return gf;if(!i)return[];let e=i*2;return t==="fixed"?[i,e]:t==="constrained"?[i,e,...gf.filter(r=>r<e)]:[]},Ww=({src:i,width:t,layout:e="constrained",height:r,aspectRatio:a,breakpoints:s,cdn:l,transformer:p})=>{let d=dc(i,l);if(d&&!p&&(p=hc(d.cdn)),!!p&&(s||=Zw({width:t,layout:e}),!!s))return s.sort((h,f)=>h-f).map(h=>{let f;r&&a&&(f=Math.round(h/a));let g=p({url:d?d.url:i,width:h,height:f});return g?`${g.toString()} ${h}w`:""}).join(`,
`)};function vf({src:i,width:t,height:e,priority:r,layout:a="constrained",aspectRatio:s,cdn:l,transformer:p,objectFit:d="cover",background:h,breakpoints:f,...g}){let v=dc(i,l),y=i;if(v&&(y=v.url,p||=hc(v.cdn)),t=t&&Number(t)||void 0,e=e&&Number(e)||void 0,r?(g.loading||="eager",g.fetchpriority||="high"):(g.loading||="lazy",g.decoding||="async"),g.alt===""&&(g.role||="presentation"),s?t?e?console.error("Ignoring aspectRatio because width and height are both set"):e=t/s:e?t=e*s:a!=="fullWidth"&&console.error("When aspectRatio is set, either width or height must also be set"):t&&e?s=t/e:a!=="fullWidth"&&console.error("Either aspectRatio or both width and height must be set"),p&&h==="auto"){let x=s?Math.round(bf/s):void 0,P=p({url:y,width:bf,height:x});P&&(h=P.toString())}let _={width:t,height:e,aspectRatio:s,layout:a,objectFit:d,background:h};if(g.style={...Hw(_),...g.style},p){g.sizes||=Vw(t,a),g.srcset=Ww({src:y,width:t,height:e,aspectRatio:s,layout:a,breakpoints:f,transformer:p,cdn:l});let x=p({url:y,width:t,height:e});x&&(y=x)}return(a==="fullWidth"||a==="constrained")&&(t=void 0,e=void 0),{...g,src:y.toString(),width:t,height:e}}var yf=A`
  ${N}

  :host {
    display: block;
    position: relative;
    line-height: 0;
    overflow: hidden;
    border-radius: var(--awc-image-border-radius);
  }

  img {
    line-height: 0;
  }
`;var qw=Object.defineProperty,Gw=Object.getOwnPropertyDescriptor,he=(i,t,e,r)=>{for(var a=r>1?void 0:r?Gw(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&qw(t,e,a),a},wf=class extends R{constructor(){super(...arguments),this.src="",this.alt="",this.objectFit="cover",this.layout="constrained",this.priority=!1}handleLoad(t){this.emit("awc-load",t)}handleError(t){this.emit("awc-error",t)}handleAbort(t){this.emit("awc-abort",t)}render(){let t={src:this.src,width:this.width,height:this.height,alt:this.alt,loading:this.loading,decoding:this.decoding,aspectRatio:this.aspectRatio,objectFit:this.objectFit,role:this.role,sizes:this.sizes,fetchpriority:this.fetchPriority,layout:this.layout,transformer:this.transformer},e=vf(t);return E`
      <style>
        ${this.layout==="filled"?":host { width: 100%; height: 100%; }":""}
        ${this.layout==="inset"?":host { position: absolute !important; inset: 0; width: 100%; height: 100%; }":""}
      </style>
      <img
        src="${e.src}"
        alt="${e.alt}"
        width="${e.width}"
        height="${e.height}"
        style="${Qt(e.style??{})}"
        srcset="${e.srcset}"
        role="${H(e.role)}"
        sizes="${e.sizes}"
        loading="${e.loading}"
        fetchpriority="${H(e.fetchpriority)}"
        decoding="${H(e.decoding)}"
        crossorigin="${H(this.crossOrigin)}"
        ismap="${H(this.isMap)}"
        referrerpolicy="${H(this.referrerPolicy)}"
        usemap="${H(this.useMap)}"
        @error=${this.handleError}
        @load=${this.handleLoad}
        @abort=${this.handleAbort}
      />
    `}};wf.styles=yf;var Vt=wf;he([u({type:String})],Vt.prototype,"src",2);he([u({type:String})],Vt.prototype,"alt",2);he([u({type:Number})],Vt.prototype,"height",2);he([u({type:Number})],Vt.prototype,"width",2);he([u({type:String})],Vt.prototype,"objectFit",2);he([u({type:String})],Vt.prototype,"layout",2);he([u({type:Boolean})],Vt.prototype,"priority",2);he([u({type:String})],Vt.prototype,"background",2);he([u({type:Number})],Vt.prototype,"aspectRatio",2);he([u({type:String})],Vt.prototype,"cdn",2);he([u({type:Array})],Vt.prototype,"breakpoints",2);he([u({type:String})],Vt.prototype,"crossOrigin",2);he([u({type:String})],Vt.prototype,"fetchPriority",2);he([u({type:String})],Vt.prototype,"loading",2);he([u({type:String})],Vt.prototype,"decoding",2);he([u({type:String})],Vt.prototype,"referrerPolicy",2);he([u({type:String})],Vt.prototype,"sizes",2);he([u({type:Boolean})],Vt.prototype,"isMap",2);he([u({type:String})],Vt.prototype,"useMap",2);he([u({type:Function})],Vt.prototype,"transformer",2);var _f=A`
  ${N}

  :host {
    display: inline-block;

    --size: 3rem;
    width: var(--size);
    height: var(--size);
  }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 100%;
    background-color: var(--awc-color-neutral-400);
    font-family: var(--awc-font-sans);
    font-size: calc(var(--size) * 0.5);
    font-weight: var(--awc-font-weight-normal);
    color: var(--awc-color-neutral-0);
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
  }

  .avatar--circle,
  .avatar--circle .avatar__image {
    border-radius: var(--awc-border-radius-circle);
  }

  .avatar--rounded,
  .avatar--rounded .avatar__image {
    border-radius: var(--awc-border-radius-medium);
  }

  .avatar--square {
    border-radius: 0;
  }

  .avatar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`;var Yw=Object.defineProperty,Kw=Object.getOwnPropertyDescriptor,kr=(i,t,e,r)=>{for(var a=r>1?void 0:r?Kw(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&Yw(t,e,a),a},uc=class extends R{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}render(){let t=E`
      <awc-image
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        aspectRatio="1"
        layout="filled"
        width="256"
        alt=""
        @error="${()=>this.hasError=!0}"
      ></awc-icon>
    `,e=E``;return this.initials?e=E`<div part="initials" class="avatar__initials">${this.initials}</div>`:e=E`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <awc-icon name="person-fill" library="system"></awc-icon>
          </slot>
        </div>
      `,E`
      <div
        part="base"
        class=${Z({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?t:e}
      </div>
    `}};uc.styles=_f,uc.dependencies={"awc-icon":nt,"awc-image":Vt};var ai=uc;kr([X()],ai.prototype,"hasError",2);kr([u()],ai.prototype,"image",2);kr([u()],ai.prototype,"label",2);kr([u()],ai.prototype,"initials",2);kr([u()],ai.prototype,"loading",2);kr([u({reflect:!0})],ai.prototype,"shape",2);kr([M("image")],ai.prototype,"handleImageChange",1);ai.define("awc-avatar");var xf=A`
  ${N}

  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--awc-font-weight-semibold);
    letter-spacing: var(--awc-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--awc-badge-border-radius);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--awc-color-primary-600);
    color: var(--awc-color-neutral-0);
  }

  .badge--secondary {
    background-color: var(--awc-color-secondary-600);
    color: var(--awc-color-neutral-0);
  }

  .badge--tertiary {
    background-color: var(--awc-color-tertiary-600);
    color: var(--awc-color-neutral-0);
  }

  .badge--success {
    background-color: var(--awc-color-success-600);
    color: var(--awc-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--awc-color-neutral-600);
    color: var(--awc-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--awc-color-warning-600);
    color: var(--awc-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--awc-color-danger-600);
    color: var(--awc-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--awc-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--awc-color-primary-600);
  }

  .badge--pulse.badge--secondary {
    --pulse-color: var(--awc-color-secondary-600);
  }

  .badge--pulse.badge--tertiary {
    --pulse-color: var(--awc-color-tertiary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--awc-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--awc-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--awc-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--awc-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`;var Xw=Object.defineProperty,Jw=Object.getOwnPropertyDescriptor,mc=(i,t,e,r)=>{for(var a=r>1?void 0:r?Jw(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&Xw(t,e,a),a},kf=class extends R{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return E`
      <span
        part="base"
        class=${Z({badge:!0,"badge--primary":this.variant==="primary","badge--secondary":this.variant==="secondary","badge--tertiary":this.variant==="tertiary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};kf.styles=xf;var la=kf;mc([u({reflect:!0})],la.prototype,"variant",2);mc([u({type:Boolean,reflect:!0})],la.prototype,"pill",2);mc([u({type:Boolean,reflect:!0})],la.prototype,"pulse",2);la.define("awc-badge");var Cf=A`
  ${N}

  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`;var Qw=Object.defineProperty,t_=Object.getOwnPropertyDescriptor,gc=(i,t,e,r)=>{for(var a=r>1?void 0:r?t_(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&Qw(t,e,a),a},fc=class extends R{constructor(){super(...arguments),this.localize=new et(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){let t=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[t,...t.querySelectorAll("[id]")].forEach(e=>e.removeAttribute("id")),t.setAttribute("data-default",""),t.slot="separator",t}handleSlotChange(){let t=[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>e.tagName.toLowerCase()==="awc-breadcrumb-item");t.forEach((e,r)=>{let a=e.querySelector('[slot="separator"]');a===null?e.append(this.getSeparator()):a.hasAttribute("data-default")&&a.replaceWith(this.getSeparator()),r===t.length-1?e.setAttribute("aria-current","page"):e.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),E`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <awc-icon
            name=${this.localize.dir()==="rtl"?"chevron-left":"chevron-right"}
            library="system"
          ></awc-icon>
        </slot>
      </span>
    `}};fc.styles=Cf,fc.dependencies={"awc-icon":nt};var ca=fc;gc([F("slot")],ca.prototype,"defaultSlot",2);gc([F('slot[name="separator"]')],ca.prototype,"separatorSlot",2);gc([u()],ca.prototype,"label",2);ca.define("awc-breadcrumb");var Lf=A`
  ${N}

  :host {
    display: inline-flex;
  }

  .breadcrumb-item {
    display: inline-flex;
    align-items: center;
    font-family: var(--awc-font-sans);
    font-size: var(--awc-font-size-small);
    font-weight: var(--awc-font-weight-semibold);
    color: var(--awc-color-neutral-600);
    line-height: var(--awc-line-height-normal);
    white-space: nowrap;
  }

  .breadcrumb-item__label {
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-decoration: none;
    color: inherit;
    background: none;
    border: none;
    border-radius: var(--awc-border-radius-medium);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: var(--awc-transition-fast) --color;
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label {
    color: var(--awc-color-primary-600);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:hover {
    color: var(--awc-color-primary-800);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:active {
    color: var(--awc-color-primary-600);
  }

  .breadcrumb-item__label:focus {
    outline: none;
  }

  .breadcrumb-item__label:focus-visible {
    outline: var(--awc-focus-ring);
    outline-offset: var(--awc-focus-ring-offset);
  }

  .breadcrumb-item__prefix,
  .breadcrumb-item__suffix {
    display: flex;
    flex: 0 0 auto;
    align-items: center;
  }

  .breadcrumb-item--has-prefix .breadcrumb-item__prefix {
    display: inline-flex;
    margin-inline-end: var(--awc-spacing-x-small);
  }

  .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    display: inline-flex;
    margin-inline-start: var(--awc-spacing-x-small);
  }

  :host(:last-of-type) .breadcrumb-item__separator {
    display: none;
  }

  .breadcrumb-item__separator {
    display: inline-flex;
    align-items: center;
    margin: 0 var(--awc-spacing-x-small);
    user-select: none;
    -webkit-user-select: none;
  }
`;var e_=Object.defineProperty,o_=Object.getOwnPropertyDescriptor,bc=(i,t,e,r)=>{for(var a=r>1?void 0:r?o_(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&e_(t,e,a),a},zf=class extends R{constructor(){super(...arguments),this.hasSlotController=new Ct(this,"prefix","suffix"),this.rel="noreferrer noopener"}render(){let t=!!this.href;return E`
      <div
        part="base"
        class=${Z({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${t?E`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${H(this.target?this.target:void 0)}"
                rel=${H(this.target?this.rel:void 0)}
              >
                <slot></slot>
              </a>
            `:E`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot></slot>
              </button>
            `}

        <span part="suffix" class="breadcrumb-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span part="separator" class="breadcrumb-item__separator" aria-hidden="true">
          <slot name="separator"></slot>
        </span>
      </div>
    `}};zf.styles=Lf;var da=zf;bc([u()],da.prototype,"href",2);bc([u()],da.prototype,"target",2);bc([u()],da.prototype,"rel",2);da.define("awc-breadcrumb-item");var pa=new WeakMap,is=new WeakMap,rs=new WeakMap,vc=new WeakSet,Pn=new WeakMap,oe=class{constructor(t,e){this.handleFormData=r=>{let a=this.options.disabled(this.host),s=this.options.name(this.host),l=this.options.value(this.host),p=this.host.tagName.toLowerCase()==="awc-button";!a&&!p&&typeof s=="string"&&s.length>0&&typeof l<"u"&&(Array.isArray(l)?l.forEach(d=>{r.formData.append(s,d.toString())}):r.formData.append(s,l.toString()))},this.handleFormSubmit=r=>{let a=this.options.disabled(this.host),s=this.options.reportValidity;this.form&&!this.form.noValidate&&pa.get(this.form)?.forEach(l=>{this.setUserInteracted(l,!0)}),this.form&&!this.form.noValidate&&!a&&!s(this.host)&&(r.preventDefault(),r.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Pn.set(this.host,[])},this.handleInteraction=r=>{let a=Pn.get(this.host);a.includes(r.type)||a.push(r.type),a.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){let r=this.form.querySelectorAll("*");for(let a of r)if(typeof a.checkValidity=="function"&&!a.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){let r=this.form.querySelectorAll("*");for(let a of r)if(typeof a.reportValidity=="function"&&!a.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options={form:r=>{let a=r.form;if(a){let s=r.getRootNode().getElementById(a);if(s)return s}return r.closest("form")},name:r=>r.name,value:r=>r.value,defaultValue:r=>r.defaultValue,disabled:r=>r.disabled??!1,reportValidity:r=>typeof r.reportValidity=="function"?r.reportValidity():!0,checkValidity:r=>typeof r.checkValidity=="function"?r.checkValidity():!0,setValue:(r,a)=>r.value=a,assumeInteractionOn:["awc-input"],...e}}hostConnected(){let t=this.options.form(this.host);t&&this.attachForm(t),Pn.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),Pn.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){let t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,pa.has(this.form)?pa.get(this.form).add(this.host):pa.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),is.has(this.form)||(is.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),rs.has(this.form)||(rs.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;let t=pa.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),is.has(this.form)&&(this.form.reportValidity=is.get(this.form),is.delete(this.form)),rs.has(this.form)&&(this.form.checkValidity=rs.get(this.form),rs.delete(this.form)),this.form=void 0))}setUserInteracted(t,e){e?vc.add(t):vc.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){let r=document.createElement("button");r.type=t,r.style.position="absolute",r.style.width="0",r.style.height="0",r.style.clipPath="inset(50%)",r.style.overflow="hidden",r.style.whiteSpace="nowrap",e&&(r.name=e.name,r.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(a=>{e.hasAttribute(a)&&r.setAttribute(a,e.getAttribute(a))})),this.form.append(r),r.click(),r.remove()}}getForm(){return this.form??null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){let e=this.host,r=!!vc.has(e),a=!!e.required;e.toggleAttribute("data-required",a),e.toggleAttribute("data-optional",!a),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&r),e.toggleAttribute("data-user-valid",t&&r)}updateValidity(){let t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){let e=new CustomEvent("awc-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||t?.preventDefault()}},ha=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),Sf=Object.freeze({...ha,valid:!1,valueMissing:!0}),Tf=Object.freeze({...ha,valid:!1,customError:!0});var Pf=A`
  ${N}

  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--awc-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.01em, 2.75em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.01em, 2.75em;
    }
  }
`;var Ef=class extends R{constructor(){super(...arguments),this.localize=new et(this)}render(){return E`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Ef.styles=Pf;var Cr=Ef;var En=A`
  ${N}

  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-radius: var(--awc-button-border-radius);
    border-width: var(--awc-input-border-width);
    font-family: var(--awc-input-font-family);
    font-weight: var(--awc-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--awc-transition-medium) background-color,
      var(--awc-transition-medium) color,
      var(--awc-transition-medium) border,
      var(--awc-transition-medium) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--awc-focus-ring);
    outline-offset: var(--awc-focus-ring-offset);
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(awc-icon) {
    vertical-align: -2px;
  }

  /*
   * Colored buttons
   */

  /* Default */
  .button--colored.button--default {
    background-color: var(--awc-color-neutral-0);
    border-color: var(--awc-color-neutral-600);
    color: var(--awc-color-neutral-700);
  }

  .button--colored.button--default:hover:not(.button--disabled) {
    background-color: var(--awc-color-primary-600);
    border-color: var(--awc-color-primary-600);
    color: var(--awc-color-neutral-0);
  }

  .button--colored.button--default:active:not(.button--disabled) {
    background-color: var(--awc-color-primary-800);
    border-color: var(--awc-color-primary-800);
    color: var(--awc-color-neutral-0);
  }

  /* Primary */
  .button--colored.button--primary {
    background-color: var(--awc-color-primary-600);
    border-color: var(--awc-color-primary-600);
    color: var(--awc-color-neutral-0);
  }

  .button--colored.button--primary:hover:not(.button--disabled) {
    background-color: var(--awc-color-primary-800);
    border-color: var(--awc-color-primary-800);
    color: var(--awc-color-neutral-0);
  }

  .button--colored.button--primary:active:not(.button--disabled) {
    background-color: var(--awc-color-primary-950);
    border-color: var(--awc-color-primary-950);
    color: var(--awc-color-neutral-0);
  }

  /* Secondary */
  .button--colored.button--secondary {
    background-color: var(--awc-color-secondary-600);
    border-color: var(--awc-color-secondary-600);
    color: var(--awc-color-neutral-0);
  }

  .button--colored.button--secondary:hover:not(.button--disabled) {
    background-color: var(--awc-color-secondary-800);
    border-color: var(--awc-color-secondary-800);
    color: var(--awc-color-neutral-0);
  }

  .button--colored.button--secondary:active:not(.button--disabled) {
    background-color: var(--awc-color-secondary-950);
    border-color: var(--awc-color-secondary-950);
    color: var(--awc-color-neutral-0);
  }

  /* Tertiary */
  .button--colored.button--tertiary {
    background-color: var(--awc-color-tertiary-600);
    border-color: var(--awc-color-tertiary-600);
    color: var(--awc-color-neutral-0);
  }

  .button--colored.button--tertiary:hover:not(.button--disabled) {
    background-color: var(--awc-color-tertiary-800);
    border-color: var(--awc-color-tertiary-800);
    color: var(--awc-color-neutral-0);
  }

  .button--colored.button--tertiary:active:not(.button--disabled) {
    background-color: var(--awc-color-tertiary-950);
    border-color: var(--awc-color-tertiary-950);
    color: var(--awc-color-neutral-0);
  }

  /*
   * Colored buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--awc-color-neutral-0);
    border-color: var(--awc-color-neutral-600);
    color: var(--awc-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--awc-color-primary-600);
    border-color: var(--awc-color-primary-600);
    color: var(--awc-color-neutral-0);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--awc-color-primary-800);
    border-color: var(--awc-color-primary-800);
    color: var(--awc-color-neutral-0);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--awc-button-primary-background-color-default, var(--awc-color-primary-600));
    border-color: var(
      --awc-button-primary-border-color-default,
      var(--awc-button-primary-background-color-default, var(--awc-color-primary-600))
    );
    color: var(--awc-button-primary-color-default, var(--awc-color-neutral-0));
  }

  .button--standard.button--primary:hover:not(.button--disabled),
  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--awc-button-primary-background-color-hover, var(--awc-color-primary-800));
    border-color: var(
      --awc-button-primary-border-color-hover,
      var(--awc-button-primary-background-color-hover, var(--awc-color-primary-800))
    );
    color: var(--awc-button-primary-color-hover, var(--awc-color-neutral-0));
  }

  /* Secondary */
  .button--standard.button--secondary {
    background-color: var(--awc-button-secondary-background-color-default, var(--awc-color-secondary-600));
    border-color: var(
      --awc-button-secondary-border-color-default,
      var(--awc-button-secondary-background-color-default, var(--awc-color-secondary-600))
    );
    color: var(--awc-button-secondary-color-default, var(--awc-color-neutral-0));
  }

  .button--standard.button--secondary:hover:not(.button--disabled),
  .button--standard.button--secondary:active:not(.button--disabled) {
    background-color: var(--awc-button-secondary-background-color-hover, var(--awc-color-secondary-800));
    border-color: var(
      --awc-button-secondary-border-color-hover,
      var(--awc-button-secondary-background-color-hover, var(--awc-color-secondary-800))
    );
    color: var(--awc-button-secondary-color-hover, var(--awc-color-neutral-0));
  }

  /* Tertiary */
  .button--standard.button--tertiary {
    background-color: var(--awc-button-tertiary-background-color-default, var(--awc-color-tertiary-600));
    border-color: var(
      --awc-button-tertiary-border-color-default,
      var(--awc-button-tertiary-background-color-default, var(--awc-color-tertiary-600))
    );
    color: var(--awc-button-tertiary-color-default, var(--awc-color-neutral-0));
  }

  .button--standard.button--tertiary:hover:not(.button--disabled),
  .button--standard.button--tertiary:active:not(.button--disabled) {
    background-color: var(--awc-button-tertiary-background-color-hover, var(--awc-color-tertiary-800));
    border-color: var(
      --awc-button-tertiary-border-color-hover,
      var(--awc-button-tertiary-background-color-hover, var(--awc-color-tertiary-800))
    );
    color: var(--awc-button-tertiary-color-hover, var(--awc-color-neutral-0));
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--awc-color-success-600);
    border-color: var(--awc-color-success-600);
    color: var(--awc-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--awc-color-success-800);
    border-color: var(--awc-color-success-800);
    color: var(--awc-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--awc-color-success-950);
    border-color: var(--awc-color-success-950);
    color: var(--awc-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--awc-color-neutral-600);
    border-color: var(--awc-color-neutral-600);
    color: var(--awc-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--awc-color-neutral-800);
    border-color: var(--awc-color-neutral-800);
    color: var(--awc-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--awc-color-neutral-950);
    border-color: var(--awc-color-neutral-950);
    color: var(--awc-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--awc-color-warning-600);
    border-color: var(--awc-color-warning-600);
    color: var(--awc-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--awc-color-warning-800);
    border-color: var(--awc-color-warning-800);
    color: var(--awc-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--awc-color-warning-950);
    border-color: var(--awc-color-warning-950);
    color: var(--awc-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--awc-color-danger-600);
    border-color: var(--awc-color-danger-600);
    color: var(--awc-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--awc-color-danger-800);
    border-color: var(--awc-color-danger-800);
    color: var(--awc-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--awc-color-danger-950);
    border-color: var(--awc-color-danger-950);
    color: var(--awc-color-neutral-0);
  }

  /* Default */
  .button--standard.button--ghost {
    background-color: transparent;
    border-color: transparent;
    color: currentColor;
  }

  .button--standard.button--ghost:hover:not(.button--disabled) {
    background-color: var(--awc-color-neutral-50);
    border-color: var(--awc-color-neutral-50);
    color: var(--awc-color-neutral-700);
  }

  .button--standard.button--ghost:active:not(.button--disabled) {
    background-color: var(--awc-color-neutral-100);
    border-color: var(--awc-color-neutral-100);
    color: var(--awc-color-neutral-700);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--awc-color-neutral-300);
    color: currentColor;
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--awc-color-primary-600);
    background-color: var(--awc-color-primary-600);
    color: var(--awc-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--awc-color-primary-800);
    background-color: var(--awc-color-primary-800);
    color: var(--awc-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--awc-color-primary-600);
    color: var(--awc-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    border-color: var(--awc-color-primary-800);
    color: var(--awc-color-primary-800);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--awc-color-primary-800);
    background-color: var(--awc-color-primary-800);
    color: var(--awc-color-neutral-0);
  }

  /* Secondary */
  .button--outline.button--secondary {
    border-color: var(--awc-color-secondary-600);
    color: var(--awc-color-secondary-600);
  }

  .button--outline.button--secondary:hover:not(.button--disabled),
  .button--outline.button--secondary.button--checked:not(.button--disabled) {
    border-color: var(--awc-color-secondary-800);
    color: var(--awc-color-secondary-800);
  }

  .button--outline.button--secondary:active:not(.button--disabled) {
    border-color: var(--awc-color-secondary-800);
    background-color: var(--awc-color-secondary-800);
    color: var(--awc-color-neutral-0);
  }

  /* Tertiary */
  .button--outline.button--tertiary {
    border-color: var(--awc-color-tertiary-600);
    color: var(--awc-color-tertiary-600);
  }

  .button--outline.button--tertiary:hover:not(.button--disabled),
  .button--outline.button--tertiary.button--checked:not(.button--disabled) {
    border-color: var(--awc-color-tertiary-800);
    color: var(--awc-color-tertiary-800);
  }

  .button--outline.button--tertiary:active:not(.button--disabled) {
    border-color: var(--awc-color-tertiary-800);
    background-color: var(--awc-color-tertiary-800);
    color: var(--awc-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--awc-color-success-600);
    color: var(--awc-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    border-color: var(--awc-color-success-800);
    color: var(--awc-color-success-800);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--awc-color-success-800);
    background-color: var(--awc-color-success-800);
    color: var(--awc-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--awc-color-neutral-600);
    color: var(--awc-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    border-color: var(--awc-color-neutral-800);
    color: var(--awc-color-neutral-800);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--awc-color-neutral-800);
    background-color: var(--awc-color-neutral-800);
    color: var(--awc-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--awc-color-warning-600);
    color: var(--awc-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    border-color: var(--awc-color-warning-800);
    color: var(--awc-color-warning-800);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--awc-color-warning-800);
    background-color: var(--awc-color-warning-800);
    color: var(--awc-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--awc-color-danger-600);
    color: var(--awc-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    border-color: var(--awc-color-danger-800);
    color: var(--awc-color-danger-800);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--awc-color-danger-800);
    background-color: var(--awc-color-danger-800);
    color: var(--awc-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--awc-text-paragraph-color, var(--awc-color-neutral-800));
  }

  .button--text.button--has-label .button__suffix {
    color: var(--awc-button-text-icon-default, var(--awc-color-primary-600));
  }

  .button--text:hover:not(.button--disabled, .button--has-suffix, .button--has-prefix) {
    background-color: transparent;
    border-color: transparent;
    color: var(--awc-color-primary-600);
  }

  .button--text:focus-visible:not(.button--disabled, .button--has-suffix, .button--has-prefix) {
    background-color: transparent;
    border-color: transparent;
    color: var(--awc-color-primary-600);
  }

  .button--text:active:not(.button--disabled, .button--has-suffix, .button--has-prefix) {
    background-color: transparent;
    border-color: transparent;
    color: var(--awc-color-primary-800);
  }

  .button--text.button--has-label:active:not(.button--disabled) .button__suffix,
  .button--text.button--has-label:focus-visible:not(.button--disabled) .button__suffix,
  .button--text.button--has-label:hover:not(.button--disabled) .button__suffix {
    color: var(--awc-button-text-icon-hover, var(--awc-color-primary-800));
  }

  /*
   * Link buttons
   */

  .button--link {
    background-color: transparent;
    border-color: transparent;
    color: var(--awc-text-paragraph-color, var(--awc-color-neutral-800));
  }

  .button--link:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--awc-color-primary-600);
  }

  .button--link:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--awc-color-primary-600);
  }

  .button--link:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--awc-color-primary-800);
  }

  .button--outline.button--disabled {
    color: var(--awc-color-neutral-300);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--awc-input-height-small);
    font-size: var(--awc-button-font-size-small);
    line-height: calc(var(--awc-input-height-small) - var(--awc-input-border-width) * 2);
  }

  .button--medium {
    height: auto;
    min-height: var(--awc-input-height-medium);
    font-size: var(--awc-button-font-size-medium);
    line-height: calc(var(--awc-input-height-medium) - var(--awc-input-border-width) * 2);
  }

  .button--large {
    height: auto;
    min-height: var(--awc-input-height-large);
    font-size: var(--awc-button-font-size-large);
    line-height: calc(var(--awc-input-height-large) - var(--awc-input-border-width) * 2);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--awc-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--awc-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--awc-input-height-large);
  }

  /*
   * Icon modifier
   */

  .button--icon {
    padding-left: 0;
    padding-right: 0;
  }

  .button--icon.button--small {
    width: var(--awc-input-height-small);
  }

  .button--icon.button--medium {
    width: var(--awc-input-height-medium);
  }

  .button--icon.button--large {
    width: var(--awc-input-height-large);
  }

  .button--icon .button__prefix,
  .button--icon .button__suffix,
  .button--icon .button__caret {
    display: none;
  }

  .button--icon.button--circle {
    border-radius: 50%;
  }

  .button--icon.button--default {
    border-color: var(--awc-button-icon-border-color-default, var(--awc-color-neutral-300));
    background-color: var(--awc-button-icon-background-color-default, var(--awc-color-neutral-0));
    color: var(--awc-button-icon-color-default, currentColor);
  }

  .button--icon.button--default:hover:not(.button--disabled),
  .button--icon.button--default.button--checked:not(.button--disabled) {
    border-color: var(--awc-button-icon-border-color-hover, var(--awc-color-primary-600));
    background-color: var(--awc-button-icon-background-color-hover, var(--awc-color-primary-600));
    color: var(--awc-button-icon-color-hover, var(--awc-color-neutral-0));
  }

  .button--icon.button--default:active:not(.button--disabled) {
    border-color: var(--awc-button-icon-border-color-hover, var(--awc-color-primary-800));
    background-color: var(--awc-button-icon-background-color-hover, var(--awc-color-primary-800));
    color: var(--awc-button-icon-color-hover, var(--awc-color-neutral-0));
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading awc-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(awc-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(awc-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--awc-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--awc-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--awc-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--awc-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--awc-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--awc-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--awc-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--awc-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--awc-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--awc-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--awc-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--awc-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--awc-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--awc-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--awc-spacing-small);
  }

  .button--has-label.button--link .button__label {
    padding: 0;
  }

  .button--has-label.button--small.button--link.button--has-suffix .button__label {
    padding-inline-end: var(--awc-spacing-small);
  }

  .button--has-label.button--medium.button--link.button--has-suffix .button__label {
    padding-inline-end: var(--awc-spacing-medium);
  }

  .button--has-label.button--large.button--link.button--has-suffix .button__label {
    padding-inline-end: var(--awc-spacing-large);
  }

  .button--has-label.button--small.button--link.button--has-prefix .button__label {
    padding-inline-start: var(--awc-spacing-small);
  }

  .button--has-label.button--medium.button--link.button--has-prefix .button__label {
    padding-inline-start: var(--awc-spacing-medium);
  }

  .button--has-label.button--large.button--link.button--has-prefix .button__label {
    padding-inline-start: var(--awc-spacing-large);
  }

  /**
   * Disabled buttons
   * 
   */

  .button--disabled {
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button--colored.button--disabled {
    background-color: var(--awc-color-neutral-300);
    border-color: var(--awc-color-neutral-300);
    color: var(--awc-color-neutral-0);
  }

  .button--outline.button--disabled {
    border-color: var(--awc-color-neutral-300);
    color: var(--awc-color-neutral-300);
  }

  .button--text.button--disabled,
  .button--link.button--disabled,
  .button--text.button--disabled .button__suffix,
  .button--link.button--disabled .button__suffix {
    color: var(--awc-color-neutral-300);
  }

  .button--standard.button--disabled:not(.button--text, .button--link) {
    background-color: var(--awc-color-neutral-300);
    border-color: var(--awc-color-neutral-300);
    color: var(--awc-color-neutral-0);
  }

  /* Primary */
  .button--standard.button--primary.button--disabled {
    background-color: var(--awc-button-primary-background-color-disabled, var(--awc-color-neutral-300));
    border-color: var(
      --awc-button-primary-border-color-disabled,
      var(--awc-button-primary-background-color-disabled, var(--awc-color-neutral-300))
    );
    color: var(--awc-button-primary-color-disabled, var(--awc-color-neutral-0));
  }

  /* Secondary */
  .button--standard.button--secondary.button--disabled {
    background-color: var(--awc-button-secondary-background-color-disabled, var(--awc-color-neutral-300));
    border-color: var(
      --awc-button-secondary-border-color-disabled,
      var(--awc-button-secondary-background-color-disabled, var(--awc-color-neutral-300))
    );
    color: var(--awc-button-secondary-color-disabled, var(--awc-color-neutral-0));
  }

  /* Tertiary */
  .button--standard.button--tertiary.button--disabled {
    background-color: var(--awc-button-tertiary-background-color-disabled, var(--awc-color-neutral-300));
    border-color: var(
      --awc-button-tertiary-border-color-disabled,
      var(--awc-button-tertiary-background-color-disabled, var(--awc-color-neutral-300))
    );
    color: var(--awc-button-tertiary-color-disabled, var(--awc-color-neutral-0));
  }

  /* Default icon button */
  .button--disabled.button--icon.button--default {
    border-color: var(--awc-button-icon-border-color-disabled, var(--awc-color-primary-800));
    background-color: var(--awc-button-icon-background-color-disabled, var(--awc-color-primary-800));
    color: var(--awc-button-icon-color-disabled, var(--awc-color-neutral-0));
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host(.awc-button-group__button--first:not(.awc-button-group__button--last)) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host(.awc-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.awc-button-group__button--last:not(.awc-button-group__button--first)) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host(.awc-button-group__button:not(.awc-button-group__button--first)) {
    margin-inline-start: calc(-1 * var(--awc-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      .awc-button-group__button:not(
          .awc-button-group__button--first,
          .awc-button-group__button--radio,
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host(.awc-button-group__button--hover) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host(.awc-button-group__button--focus),
  :host(.awc-button-group__button[checked]) {
    z-index: 2;
  }
`;var i_=Object.defineProperty,r_=Object.getOwnPropertyDescriptor,Ht=(i,t,e,r)=>{for(var a=r>1?void 0:r?r_(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&i_(t,e,a),a},yc=class extends R{constructor(){super(...arguments),this.formControlController=new oe(this,{form:t=>{if(t.hasAttribute("form")){let e=t.getRootNode(),r=t.getAttribute("form");return e.getElementById(r)}return t.closest("form")},assumeInteractionOn:["click"]}),this.hasSlotController=new Ct(this,"[default]","prefix","suffix"),this.localize=new et(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.colored=!1,this.pill=!1,this.icon=void 0,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:ha}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("awc-blur")}handleFocus(){this.hasFocus=!0,this.emit("awc-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){let t=this.isLink(),e=t?Pi`a`:Pi`button`;return Ne`
      <${e}
        part="base"
        class=${Z({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--secondary":this.variant==="secondary","button--tertiary":this.variant==="tertiary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--ghost":this.variant==="ghost","button--text":this.variant==="text","button--link":this.variant==="link","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--icon":!!this.icon,"button--square":this.icon==="square","button--circle":this.icon==="circle","button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline&&(!this.colored||this.colored&&"success warning danger neutral ghost text".includes(this.variant)),"button--colored":this.colored,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${H(t?void 0:this.disabled)}
        type=${H(t?void 0:this.type)}
        title=${this.title}
        name=${H(t?void 0:this.name)}
        value=${H(t?void 0:this.value)}
        href=${H(t?this.href:void 0)}
        target=${H(t?this.target:void 0)}
        download=${H(t?this.download:void 0)}
        rel=${H(t?this.rel:void 0)}
        role=${H(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?Ne` <awc-icon part="caret" class="button__caret" library="system" name="caret"></awc-icon> `:""}
        ${this.loading?Ne`<awc-spinner part="spinner"></awc-spinner>`:""}
      </${e}>
    `}};yc.styles=En,yc.dependencies={"awc-icon":nt,"awc-spinner":Cr};var Ot=yc;Ht([F(".button")],Ot.prototype,"button",2);Ht([X()],Ot.prototype,"hasFocus",2);Ht([X()],Ot.prototype,"invalid",2);Ht([u()],Ot.prototype,"title",2);Ht([u({reflect:!0})],Ot.prototype,"variant",2);Ht([u({reflect:!0})],Ot.prototype,"size",2);Ht([u({type:Boolean,reflect:!0})],Ot.prototype,"caret",2);Ht([u({type:Boolean,reflect:!0})],Ot.prototype,"disabled",2);Ht([u({type:Boolean,reflect:!0})],Ot.prototype,"loading",2);Ht([u({type:Boolean,reflect:!0})],Ot.prototype,"outline",2);Ht([u({type:Boolean,reflect:!0})],Ot.prototype,"colored",2);Ht([u({type:Boolean,reflect:!0})],Ot.prototype,"pill",2);Ht([u({type:String,reflect:!0})],Ot.prototype,"icon",2);Ht([u()],Ot.prototype,"type",2);Ht([u()],Ot.prototype,"name",2);Ht([u()],Ot.prototype,"value",2);Ht([u()],Ot.prototype,"href",2);Ht([u()],Ot.prototype,"target",2);Ht([u()],Ot.prototype,"rel",2);Ht([u()],Ot.prototype,"download",2);Ht([u()],Ot.prototype,"form",2);Ht([u({attribute:"formaction"})],Ot.prototype,"formAction",2);Ht([u({attribute:"formenctype"})],Ot.prototype,"formEnctype",2);Ht([u({attribute:"formmethod"})],Ot.prototype,"formMethod",2);Ht([u({attribute:"formnovalidate",type:Boolean})],Ot.prototype,"formNoValidate",2);Ht([u({attribute:"formtarget"})],Ot.prototype,"formTarget",2);Ht([M("disabled",{waitUntilFirstUpdate:!0})],Ot.prototype,"handleDisabledChange",1);Ot.define("awc-button");var Of=A`
  ${N}

  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`;var a_=Object.defineProperty,s_=Object.getOwnPropertyDescriptor,wc=(i,t,e,r)=>{for(var a=r>1?void 0:r?s_(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&a_(t,e,a),a},Mf=class extends R{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(t){as(t.target)?.classList.add("awc-button-group__button--focus")}handleBlur(t){as(t.target)?.classList.remove("awc-button-group__button--focus")}handleMouseOver(t){as(t.target)?.classList.add("awc-button-group__button--hover")}handleMouseOut(t){as(t.target)?.classList.remove("awc-button-group__button--hover")}handleSlotChange(){let t=[...this.defaultSlot.assignedElements({flatten:!0})];t.forEach(e=>{let r=t.indexOf(e),a=as(e);a&&(a.classList.add("awc-button-group__button"),a.classList.toggle("awc-button-group__button--first",r===0),a.classList.toggle("awc-button-group__button--inner",r>0&&r<t.length-1),a.classList.toggle("awc-button-group__button--last",r===t.length-1),a.classList.toggle("awc-button-group__button--radio",a.tagName.toLowerCase()==="awc-radio-button"))})}render(){return E`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};Mf.styles=Of;var si=Mf;wc([F("slot")],si.prototype,"defaultSlot",2);wc([X()],si.prototype,"disableRole",2);wc([u()],si.prototype,"label",2);function as(i){let t="awc-button, awc-radio-button";return i.closest(t)??i.querySelector(t)}si.define("awc-button-group");var Af=A`
  ${N}

  :host {
    --background-color: var(--awc-card-background-color);
    --border-color: var(--awc-card-border-color);
    --border-radius: var(--awc-card-border-radius);
    --border-width: var(--awc-card-border-width);
    --padding: var(--awc-card-padding);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    border-radius: var(--border-radius);
    background-color: var(--background-color);
    height: 100%;
    text-decoration: none;
    color: currentColor;
  }

  .card .card__wrapper {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
  }

  .card.card--is-inner {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .card.card--is-inner .card__image {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  .card.card--is-inner .card__body {
    position: relative;
  }

  @media (min-width: 768px) {
    .card.card--is-horizontal {
      flex-direction: row;
    }

    .card.card--is-horizontal .card__image {
      border-radius: 0;
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
  }
  .card.card--has-border {
    border: solid var(--border-width) var(--border-color);
  }

  .card.card--has-shadow {
    box-shadow: var(--awc-shadow-x-small);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
    line-height: 0;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card.card--has-border.card--has-header .card__header {
    border-bottom: solid var(--border-width) var(--border-color);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
    height: inherit;
  }

  .card--has-footer .card__footer {
    display: block;
    padding: var(--padding);
  }

  .card.card--has-border.card--has-footer .card__footer {
    border-top: solid var(--border-width) var(--border-color);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`;var n_=Object.defineProperty,l_=Object.getOwnPropertyDescriptor,Ki=(i,t,e,r)=>{for(var a=r>1?void 0:r?l_(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&n_(t,e,a),a},$f=class extends R{constructor(){super(...arguments),this.hasSlotController=new Ct(this,"footer","header","image"),this.bordered=!1,this.shadow=!1,this.horizontal=!1,this.inner=!1,this.href="",this.rel="noreferrer noopener"}isLink(){return!!this.href}render(){let t=this.isLink(),e=t?Pi`a`:Pi`div`;return Ne`
      <${e}
        part="base"
        class=${Z({card:!0,"card--is-horizontal":!!H(this.horizontal),"card--is-inner":!!H(this.inner),"card--has-border":!!H(this.bordered),"card--has-shadow":!!H(this.shadow),"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
        href=${H(t?this.href:void 0)}
        target=${H(t?this.target:void 0)}
        download=${H(t?this.download:void 0)}
        rel=${H(t?this.rel:void 0)}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <div class="card__wrapper">
          <slot name="header" part="header" class="card__header"></slot>
          <slot part="body" class="card__body"></slot>
          <slot name="footer" part="footer" class="card__footer"></slot>
        </div>
      </${e}>
    `}};$f.styles=Af;var Zo=$f;Ki([u({type:Boolean,reflect:!0})],Zo.prototype,"bordered",2);Ki([u({type:Boolean,reflect:!0})],Zo.prototype,"shadow",2);Ki([u({type:Boolean,reflect:!0})],Zo.prototype,"horizontal",2);Ki([u({type:Boolean,reflect:!0})],Zo.prototype,"inner",2);Ki([u()],Zo.prototype,"href",2);Ki([u()],Zo.prototype,"target",2);Ki([u()],Zo.prototype,"rel",2);Ki([u()],Zo.prototype,"download",2);Zo.define("awc-card");var c_=(i,t)=>{let e=0;return function(...r){window.clearTimeout(e),e=window.setTimeout(()=>{i.call(this,...r)},t)}},If=(i,t,e)=>{let r=i[t];i[t]=function(...a){r.call(this,...a),e.call(this,r,...a)}},d_="onscrollend"in window;if(!d_){let i=new Set,t=new WeakMap,e=a=>{i.add(a.pointerId)},r=a=>{i.delete(a.pointerId)};document.addEventListener("pointerdown",e),document.addEventListener("pointerup",r),If(EventTarget.prototype,"addEventListener",function(a,s){if(s!=="scroll")return;let l=c_(()=>{i.size?l():this.dispatchEvent(new Event("scrollend"))},100);a.call(this,"scroll",l,{passive:!0}),t.set(this,l)}),If(EventTarget.prototype,"removeEventListener",function(a,s){if(s!=="scroll")return;let l=t.get(this);l&&a.call(this,"scroll",l,{passive:!0})})}function Df(i){return i!==null&&typeof i=="object"&&"constructor"in i&&i.constructor===Object}function _c(i,t){i===void 0&&(i={}),t===void 0&&(t={}),Object.keys(t).forEach(e=>{typeof i[e]>"u"?i[e]=t[e]:Df(t[e])&&Df(i[e])&&Object.keys(t[e]).length>0&&_c(i[e],t[e])})}var Bf={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function be(){let i=typeof document<"u"?document:{};return _c(i,Bf),i}var p_={document:Bf,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(i){return typeof setTimeout>"u"?(i(),null):setTimeout(i,0)},cancelAnimationFrame(i){typeof setTimeout>"u"||clearTimeout(i)}};function Le(){let i=typeof window<"u"?window:{};return _c(i,p_),i}function Mi(i){return i===void 0&&(i=""),i.trim().split(" ").filter(t=>!!t.trim())}function Rf(i){let t=i;Object.keys(t).forEach(e=>{try{t[e]=null}catch{}try{delete t[e]}catch{}})}function ma(i,t){return t===void 0&&(t=0),setTimeout(i,t)}function Ai(){return Date.now()}function h_(i){let t=Le(),e;return t.getComputedStyle&&(e=t.getComputedStyle(i,null)),!e&&i.currentStyle&&(e=i.currentStyle),e||(e=i.style),e}function Ff(i,t){t===void 0&&(t="x");let e=Le(),r,a,s,l=h_(i);return e.WebKitCSSMatrix?(a=l.transform||l.webkitTransform,a.split(",").length>6&&(a=a.split(", ").map(p=>p.replace(",",".")).join(", ")),s=new e.WebKitCSSMatrix(a==="none"?"":a)):(s=l.MozTransform||l.OTransform||l.MsTransform||l.msTransform||l.transform||l.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=s.toString().split(",")),t==="x"&&(e.WebKitCSSMatrix?a=s.m41:r.length===16?a=parseFloat(r[12]):a=parseFloat(r[4])),t==="y"&&(e.WebKitCSSMatrix?a=s.m42:r.length===16?a=parseFloat(r[13]):a=parseFloat(r[5])),a||0}function ua(i){return typeof i=="object"&&i!==null&&i.constructor&&Object.prototype.toString.call(i).slice(8,-1)==="Object"}function u_(i){return typeof window<"u"&&typeof window.HTMLElement<"u"?i instanceof HTMLElement:i&&(i.nodeType===1||i.nodeType===11)}function so(){let i=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let e=1;e<arguments.length;e+=1){let r=e<0||arguments.length<=e?void 0:arguments[e];if(r!=null&&!u_(r)){let a=Object.keys(Object(r)).filter(s=>t.indexOf(s)<0);for(let s=0,l=a.length;s<l;s+=1){let p=a[s],d=Object.getOwnPropertyDescriptor(r,p);d!==void 0&&d.enumerable&&(ua(i[p])&&ua(r[p])?r[p].__swiper__?i[p]=r[p]:so(i[p],r[p]):!ua(i[p])&&ua(r[p])?(i[p]={},r[p].__swiper__?i[p]=r[p]:so(i[p],r[p])):i[p]=r[p])}}}return i}function ss(i,t,e){i.style.setProperty(t,e)}function xc(i){let{swiper:t,targetPosition:e,side:r}=i,a=Le(),s=-t.translate,l=null,p,d=t.params.speed;t.wrapperEl.style.scrollSnapType="none",a.cancelAnimationFrame(t.cssModeFrameID);let h=e>s?"next":"prev",f=(v,y)=>h==="next"&&v>=y||h==="prev"&&v<=y,g=()=>{p=new Date().getTime(),l===null&&(l=p);let v=Math.max(Math.min((p-l)/d,1),0),y=.5-Math.cos(v*Math.PI)/2,_=s+y*(e-s);if(f(_,e)&&(_=e),t.wrapperEl.scrollTo({[r]:_}),f(_,e)){t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout(()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[r]:_})}),a.cancelAnimationFrame(t.cssModeFrameID);return}t.cssModeFrameID=a.requestAnimationFrame(g)};g()}function no(i,t){return t===void 0&&(t=""),[...i.children].filter(e=>e.matches(t))}function ns(i){try{console.warn(i);return}catch{}}function Xi(i,t){t===void 0&&(t=[]);let e=document.createElement(i);return e.classList.add(...Array.isArray(t)?t:Mi(t)),e}function On(i){let t=Le(),e=be(),r=i.getBoundingClientRect(),a=e.body,s=i.clientTop||a.clientTop||0,l=i.clientLeft||a.clientLeft||0,p=i===t?t.scrollY:i.scrollTop,d=i===t?t.scrollX:i.scrollLeft;return{top:r.top+p-s,left:r.left+d-l}}function Nf(i,t){let e=[];for(;i.previousElementSibling;){let r=i.previousElementSibling;t?r.matches(t)&&e.push(r):e.push(r),i=r}return e}function jf(i,t){let e=[];for(;i.nextElementSibling;){let r=i.nextElementSibling;t?r.matches(t)&&e.push(r):e.push(r),i=r}return e}function $i(i,t){return Le().getComputedStyle(i,null).getPropertyValue(t)}function fa(i){let t=i,e;if(t){for(e=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(e+=1);return e}}function Lr(i,t){let e=[],r=i.parentElement;for(;r;)t?r.matches(t)&&e.push(r):e.push(r),r=r.parentElement;return e}function Mn(i,t){function e(r){r.target===i&&(t.call(i,r),i.removeEventListener("transitionend",e))}t&&i.addEventListener("transitionend",e)}function ls(i,t,e){let r=Le();return e?i[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(i,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(i,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom")):i.offsetWidth}function Uf(i){let{swiper:t,extendParams:e,on:r,emit:a}=i,s=be(),l=Le();t.keyboard={enabled:!1},e({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}});function p(f){if(!t.enabled)return;let{rtlTranslate:g}=t,v=f;v.originalEvent&&(v=v.originalEvent);let y=v.keyCode||v.charCode,_=t.params.keyboard.pageUpDown,x=_&&y===33,P=_&&y===34,S=y===37,k=y===39,C=y===38,z=y===40;if(!t.allowSlideNext&&(t.isHorizontal()&&k||t.isVertical()&&z||P)||!t.allowSlidePrev&&(t.isHorizontal()&&S||t.isVertical()&&C||x))return!1;if(!(v.shiftKey||v.altKey||v.ctrlKey||v.metaKey)&&!(s.activeElement&&s.activeElement.nodeName&&(s.activeElement.nodeName.toLowerCase()==="input"||s.activeElement.nodeName.toLowerCase()==="textarea"))){if(t.params.keyboard.onlyInViewport&&(x||P||S||k||C||z)){let O=!1;if(Lr(t.el,`.${t.params.slideClass}, swiper-slide`).length>0&&Lr(t.el,`.${t.params.slideActiveClass}`).length===0)return;let j=t.el,Q=j.clientWidth,Y=j.clientHeight,G=l.innerWidth,B=l.innerHeight,U=On(j);g&&(U.left-=j.scrollLeft);let I=[[U.left,U.top],[U.left+Q,U.top],[U.left,U.top+Y],[U.left+Q,U.top+Y]];for(let W=0;W<I.length;W+=1){let q=I[W];if(q[0]>=0&&q[0]<=G&&q[1]>=0&&q[1]<=B){if(q[0]===0&&q[1]===0)continue;O=!0}}if(!O)return}t.isHorizontal()?((x||P||S||k)&&(v.preventDefault?v.preventDefault():v.returnValue=!1),((P||k)&&!g||(x||S)&&g)&&t.slideNext(),((x||S)&&!g||(P||k)&&g)&&t.slidePrev()):((x||P||C||z)&&(v.preventDefault?v.preventDefault():v.returnValue=!1),(P||z)&&t.slideNext(),(x||C)&&t.slidePrev()),a("keyPress",y)}}function d(){t.keyboard.enabled||(s.addEventListener("keydown",p),t.keyboard.enabled=!0)}function h(){t.keyboard.enabled&&(s.removeEventListener("keydown",p),t.keyboard.enabled=!1)}r("init",()=>{t.params.keyboard.enabled&&d()}),r("destroy",()=>{t.keyboard.enabled&&h()}),Object.assign(t.keyboard,{enable:d,disable:h})}function ga(i,t,e,r){return i.params.createElements&&Object.keys(r).forEach(a=>{if(!e[a]&&e.auto===!0){let s=no(i.el,`.${r[a]}`)[0];s||(s=Xi("div",r[a]),s.className=r[a],i.el.append(s)),e[a]=s,t[a]=s}}),e}function Vf(i){let{swiper:t,extendParams:e,on:r,emit:a}=i;e({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,prevEl:null};let s=x=>(Array.isArray(x)?x:[x]).filter(P=>!!P);function l(x){let P;return x&&typeof x=="string"&&t.isElement&&(P=t.el.querySelector(x),P)?P:(x&&(typeof x=="string"&&(P=[...document.querySelectorAll(x)]),t.params.uniqueNavElements&&typeof x=="string"&&P.length>1&&t.el.querySelectorAll(x).length===1&&(P=t.el.querySelector(x))),x&&!P?x:P)}function p(x,P){let S=t.params.navigation;x=s(x),x.forEach(k=>{k&&(k.classList[P?"add":"remove"](...S.disabledClass.split(" ")),k.tagName==="BUTTON"&&(k.disabled=P),t.params.watchOverflow&&t.enabled&&k.classList[t.isLocked?"add":"remove"](S.lockClass))})}function d(){let{nextEl:x,prevEl:P}=t.navigation;if(t.params.loop){p(P,!1),p(x,!1);return}p(P,t.isBeginning&&!t.params.rewind),p(x,t.isEnd&&!t.params.rewind)}function h(x){x.preventDefault(),!(t.isBeginning&&!t.params.loop&&!t.params.rewind)&&(t.slidePrev(),a("navigationPrev"))}function f(x){x.preventDefault(),!(t.isEnd&&!t.params.loop&&!t.params.rewind)&&(t.slideNext(),a("navigationNext"))}function g(){let x=t.params.navigation;if(t.params.navigation=ga(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(x.nextEl||x.prevEl))return;let P=l(x.nextEl),S=l(x.prevEl);Object.assign(t.navigation,{nextEl:P,prevEl:S}),P=s(P),S=s(S);let k=(C,z)=>{C&&C.addEventListener("click",z==="next"?f:h),!t.enabled&&C&&C.classList.add(...x.lockClass.split(" "))};P.forEach(C=>k(C,"next")),S.forEach(C=>k(C,"prev"))}function v(){let{nextEl:x,prevEl:P}=t.navigation;x=s(x),P=s(P);let S=(k,C)=>{k.removeEventListener("click",C==="next"?f:h),k.classList.remove(...t.params.navigation.disabledClass.split(" "))};x.forEach(k=>S(k,"next")),P.forEach(k=>S(k,"prev"))}r("init",()=>{t.params.navigation.enabled===!1?_():(g(),d())}),r("toEdge fromEdge lock unlock",()=>{d()}),r("destroy",()=>{v()}),r("enable disable",()=>{let{nextEl:x,prevEl:P}=t.navigation;if(x=s(x),P=s(P),t.enabled){d();return}[...x,...P].filter(S=>!!S).forEach(S=>S.classList.add(t.params.navigation.lockClass))}),r("click",(x,P)=>{let{nextEl:S,prevEl:k}=t.navigation;S=s(S),k=s(k);let C=P.target;if(t.params.navigation.hideOnClick&&!k.includes(C)&&!S.includes(C)){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===C||t.pagination.el.contains(C)))return;let z;S.length?z=S[0].classList.contains(t.params.navigation.hiddenClass):k.length&&(z=k[0].classList.contains(t.params.navigation.hiddenClass)),a(z===!0?"navigationShow":"navigationHide"),[...S,...k].filter(O=>!!O).forEach(O=>O.classList.toggle(t.params.navigation.hiddenClass))}});let y=()=>{t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")),g(),d()},_=()=>{t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")),v()};Object.assign(t.navigation,{enable:y,disable:_,update:d,init:g,destroy:v})}function Ji(i){return i===void 0&&(i=""),`.${i.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function Hf(i){let{swiper:t,extendParams:e,on:r,emit:a}=i,s="swiper-pagination";e({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:k=>k,formatFractionTotal:k=>k,bulletClass:`${s}-bullet`,bulletActiveClass:`${s}-bullet-active`,modifierClass:`${s}-`,currentClass:`${s}-current`,totalClass:`${s}-total`,hiddenClass:`${s}-hidden`,progressbarFillClass:`${s}-progressbar-fill`,progressbarOppositeClass:`${s}-progressbar-opposite`,clickableClass:`${s}-clickable`,lockClass:`${s}-lock`,horizontalClass:`${s}-horizontal`,verticalClass:`${s}-vertical`,paginationDisabledClass:`${s}-disabled`}}),t.pagination={el:null,bullets:[]};let l,p=0,d=k=>(Array.isArray(k)?k:[k]).filter(C=>!!C);function h(){return!t.params.pagination.el||!t.pagination.el||Array.isArray(t.pagination.el)&&t.pagination.el.length===0}function f(k,C){let{bulletActiveClass:z}=t.params.pagination;k&&(k=k[`${C==="prev"?"previous":"next"}ElementSibling`],k&&(k.classList.add(`${z}-${C}`),k=k[`${C==="prev"?"previous":"next"}ElementSibling`],k&&k.classList.add(`${z}-${C}-${C}`)))}function g(k){let C=k.target.closest(Ji(t.params.pagination.bulletClass));if(!C)return;k.preventDefault();let z=fa(C)*t.params.slidesPerGroup;if(t.params.loop){if(t.realIndex===z)return;t.slideToLoop(z)}else t.slideTo(z)}function v(){let k=t.rtl,C=t.params.pagination;if(h())return;let z=t.pagination.el;z=d(z);let O,j,Q=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,Y=t.params.loop?Math.ceil(Q/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(j=t.previousRealIndex||0,O=t.params.slidesPerGroup>1?Math.floor(t.realIndex/t.params.slidesPerGroup):t.realIndex):typeof t.snapIndex<"u"?(O=t.snapIndex,j=t.previousSnapIndex):(j=t.previousIndex||0,O=t.activeIndex||0),C.type==="bullets"&&t.pagination.bullets&&t.pagination.bullets.length>0){let G=t.pagination.bullets,B,U,I;if(C.dynamicBullets&&(l=ls(G[0],t.isHorizontal()?"width":"height",!0),z.forEach(W=>{W.style[t.isHorizontal()?"width":"height"]=`${l*(C.dynamicMainBullets+4)}px`}),C.dynamicMainBullets>1&&j!==void 0&&(p+=O-(j||0),p>C.dynamicMainBullets-1?p=C.dynamicMainBullets-1:p<0&&(p=0)),B=Math.max(O-p,0),U=B+(Math.min(G.length,C.dynamicMainBullets)-1),I=(U+B)/2),G.forEach(W=>{let q=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(tt=>`${C.bulletActiveClass}${tt}`)].map(tt=>typeof tt=="string"&&tt.includes(" ")?tt.split(" "):tt).flat();W.classList.remove(...q)}),z.length>1)G.forEach(W=>{let q=fa(W);q===O?W.classList.add(...C.bulletActiveClass.split(" ")):t.isElement&&W.setAttribute("part","bullet"),C.dynamicBullets&&(q>=B&&q<=U&&W.classList.add(...`${C.bulletActiveClass}-main`.split(" ")),q===B&&f(W,"prev"),q===U&&f(W,"next"))});else{let W=G[O];if(W&&W.classList.add(...C.bulletActiveClass.split(" ")),t.isElement&&G.forEach((q,tt)=>{q.setAttribute("part",tt===O?"bullet-active":"bullet")}),C.dynamicBullets){let q=G[B],tt=G[U];for(let rt=B;rt<=U;rt+=1)G[rt]&&G[rt].classList.add(...`${C.bulletActiveClass}-main`.split(" "));f(q,"prev"),f(tt,"next")}}if(C.dynamicBullets){let W=Math.min(G.length,C.dynamicMainBullets+4),q=(l*W-l)/2-I*l,tt=k?"right":"left";G.forEach(rt=>{rt.style[t.isHorizontal()?tt:"top"]=`${q}px`})}}z.forEach((G,B)=>{if(C.type==="fraction"&&(G.querySelectorAll(Ji(C.currentClass)).forEach(U=>{U.textContent=C.formatFractionCurrent(O+1)}),G.querySelectorAll(Ji(C.totalClass)).forEach(U=>{U.textContent=C.formatFractionTotal(Y)})),C.type==="progressbar"){let U;C.progressbarOpposite?U=t.isHorizontal()?"vertical":"horizontal":U=t.isHorizontal()?"horizontal":"vertical";let I=(O+1)/Y,W=1,q=1;U==="horizontal"?W=I:q=I,G.querySelectorAll(Ji(C.progressbarFillClass)).forEach(tt=>{tt.style.transform=`translate3d(0,0,0) scaleX(${W}) scaleY(${q})`,tt.style.transitionDuration=`${t.params.speed}ms`})}C.type==="custom"&&C.renderCustom?(G.innerHTML=C.renderCustom(t,O+1,Y),B===0&&a("paginationRender",G)):(B===0&&a("paginationRender",G),a("paginationUpdate",G)),t.params.watchOverflow&&t.enabled&&G.classList[t.isLocked?"add":"remove"](C.lockClass)})}function y(){let k=t.params.pagination;if(h())return;let C=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.grid&&t.params.grid.rows>1?t.slides.length/Math.ceil(t.params.grid.rows):t.slides.length,z=t.pagination.el;z=d(z);let O="";if(k.type==="bullets"){let j=t.params.loop?Math.ceil(C/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&j>C&&(j=C);for(let Q=0;Q<j;Q+=1)k.renderBullet?O+=k.renderBullet.call(t,Q,k.bulletClass):O+=`<${k.bulletElement} ${t.isElement?'part="bullet"':""} class="${k.bulletClass}"></${k.bulletElement}>`}k.type==="fraction"&&(k.renderFraction?O=k.renderFraction.call(t,k.currentClass,k.totalClass):O=`<span class="${k.currentClass}"></span> / <span class="${k.totalClass}"></span>`),k.type==="progressbar"&&(k.renderProgressbar?O=k.renderProgressbar.call(t,k.progressbarFillClass):O=`<span class="${k.progressbarFillClass}"></span>`),t.pagination.bullets=[],z.forEach(j=>{k.type!=="custom"&&(j.innerHTML=O||""),k.type==="bullets"&&t.pagination.bullets.push(...j.querySelectorAll(Ji(k.bulletClass)))}),k.type!=="custom"&&a("paginationRender",z[0])}function _(){t.params.pagination=ga(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});let k=t.params.pagination;if(!k.el)return;let C;typeof k.el=="string"&&t.isElement&&(C=t.el.querySelector(k.el)),!C&&typeof k.el=="string"&&(C=[...document.querySelectorAll(k.el)]),C||(C=k.el),!(!C||C.length===0)&&(t.params.uniqueNavElements&&typeof k.el=="string"&&Array.isArray(C)&&C.length>1&&(C=[...t.el.querySelectorAll(k.el)],C.length>1&&(C=C.filter(z=>Lr(z,".swiper")[0]===t.el)[0])),Array.isArray(C)&&C.length===1&&(C=C[0]),Object.assign(t.pagination,{el:C}),C=d(C),C.forEach(z=>{k.type==="bullets"&&k.clickable&&z.classList.add(...(k.clickableClass||"").split(" ")),z.classList.add(k.modifierClass+k.type),z.classList.add(t.isHorizontal()?k.horizontalClass:k.verticalClass),k.type==="bullets"&&k.dynamicBullets&&(z.classList.add(`${k.modifierClass}${k.type}-dynamic`),p=0,k.dynamicMainBullets<1&&(k.dynamicMainBullets=1)),k.type==="progressbar"&&k.progressbarOpposite&&z.classList.add(k.progressbarOppositeClass),k.clickable&&z.addEventListener("click",g),t.enabled||z.classList.add(k.lockClass)}))}function x(){let k=t.params.pagination;if(h())return;let C=t.pagination.el;C&&(C=d(C),C.forEach(z=>{z.classList.remove(k.hiddenClass),z.classList.remove(k.modifierClass+k.type),z.classList.remove(t.isHorizontal()?k.horizontalClass:k.verticalClass),k.clickable&&(z.classList.remove(...(k.clickableClass||"").split(" ")),z.removeEventListener("click",g))})),t.pagination.bullets&&t.pagination.bullets.forEach(z=>z.classList.remove(...k.bulletActiveClass.split(" ")))}r("changeDirection",()=>{if(!t.pagination||!t.pagination.el)return;let k=t.params.pagination,{el:C}=t.pagination;C=d(C),C.forEach(z=>{z.classList.remove(k.horizontalClass,k.verticalClass),z.classList.add(t.isHorizontal()?k.horizontalClass:k.verticalClass)})}),r("init",()=>{t.params.pagination.enabled===!1?S():(_(),y(),v())}),r("activeIndexChange",()=>{typeof t.snapIndex>"u"&&v()}),r("snapIndexChange",()=>{v()}),r("snapGridLengthChange",()=>{y(),v()}),r("destroy",()=>{x()}),r("enable disable",()=>{let{el:k}=t.pagination;k&&(k=d(k),k.forEach(C=>C.classList[t.enabled?"remove":"add"](t.params.pagination.lockClass)))}),r("lock unlock",()=>{v()}),r("click",(k,C)=>{let z=C.target,O=d(t.pagination.el);if(t.params.pagination.el&&t.params.pagination.hideOnClick&&O&&O.length>0&&!z.classList.contains(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&z===t.navigation.nextEl||t.navigation.prevEl&&z===t.navigation.prevEl))return;let j=O[0].classList.contains(t.params.pagination.hiddenClass);a(j===!0?"paginationShow":"paginationHide"),O.forEach(Q=>Q.classList.toggle(t.params.pagination.hiddenClass))}});let P=()=>{t.el.classList.remove(t.params.pagination.paginationDisabledClass);let{el:k}=t.pagination;k&&(k=d(k),k.forEach(C=>C.classList.remove(t.params.pagination.paginationDisabledClass))),_(),y(),v()},S=()=>{t.el.classList.add(t.params.pagination.paginationDisabledClass);let{el:k}=t.pagination;k&&(k=d(k),k.forEach(C=>C.classList.add(t.params.pagination.paginationDisabledClass))),x()};Object.assign(t.pagination,{enable:P,disable:S,render:y,update:v,init:_,destroy:x})}function Zf(i){let{swiper:t,extendParams:e,on:r,emit:a}=i,s=be(),l=!1,p=null,d=null,h,f,g,v;e({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag",scrollbarDisabledClass:"swiper-scrollbar-disabled",horizontalClass:"swiper-scrollbar-horizontal",verticalClass:"swiper-scrollbar-vertical"}}),t.scrollbar={el:null,dragEl:null};function y(){if(!t.params.scrollbar.el||!t.scrollbar.el)return;let{scrollbar:I,rtlTranslate:W}=t,{dragEl:q,el:tt}=I,rt=t.params.scrollbar,Bt=t.params.loop?t.progressLoop:t.progress,J=f,_t=(g-f)*Bt;W?(_t=-_t,_t>0?(J=f-_t,_t=0):-_t+f>g&&(J=g+_t)):_t<0?(J=f+_t,_t=0):_t+f>g&&(J=g-_t),t.isHorizontal()?(q.style.transform=`translate3d(${_t}px, 0, 0)`,q.style.width=`${J}px`):(q.style.transform=`translate3d(0px, ${_t}px, 0)`,q.style.height=`${J}px`),rt.hide&&(clearTimeout(p),tt.style.opacity=1,p=setTimeout(()=>{tt.style.opacity=0,tt.style.transitionDuration="400ms"},1e3))}function _(I){!t.params.scrollbar.el||!t.scrollbar.el||(t.scrollbar.dragEl.style.transitionDuration=`${I}ms`)}function x(){if(!t.params.scrollbar.el||!t.scrollbar.el)return;let{scrollbar:I}=t,{dragEl:W,el:q}=I;W.style.width="",W.style.height="",g=t.isHorizontal()?q.offsetWidth:q.offsetHeight,v=t.size/(t.virtualSize+t.params.slidesOffsetBefore-(t.params.centeredSlides?t.snapGrid[0]:0)),t.params.scrollbar.dragSize==="auto"?f=g*v:f=parseInt(t.params.scrollbar.dragSize,10),t.isHorizontal()?W.style.width=`${f}px`:W.style.height=`${f}px`,v>=1?q.style.display="none":q.style.display="",t.params.scrollbar.hide&&(q.style.opacity=0),t.params.watchOverflow&&t.enabled&&I.el.classList[t.isLocked?"add":"remove"](t.params.scrollbar.lockClass)}function P(I){return t.isHorizontal()?I.clientX:I.clientY}function S(I){let{scrollbar:W,rtlTranslate:q}=t,{el:tt}=W,rt;rt=(P(I)-On(tt)[t.isHorizontal()?"left":"top"]-(h!==null?h:f/2))/(g-f),rt=Math.max(Math.min(rt,1),0),q&&(rt=1-rt);let Bt=t.minTranslate()+(t.maxTranslate()-t.minTranslate())*rt;t.updateProgress(Bt),t.setTranslate(Bt),t.updateActiveIndex(),t.updateSlidesClasses()}function k(I){let W=t.params.scrollbar,{scrollbar:q,wrapperEl:tt}=t,{el:rt,dragEl:Bt}=q;l=!0,h=I.target===Bt?P(I)-I.target.getBoundingClientRect()[t.isHorizontal()?"left":"top"]:null,I.preventDefault(),I.stopPropagation(),tt.style.transitionDuration="100ms",Bt.style.transitionDuration="100ms",S(I),clearTimeout(d),rt.style.transitionDuration="0ms",W.hide&&(rt.style.opacity=1),t.params.cssMode&&(t.wrapperEl.style["scroll-snap-type"]="none"),a("scrollbarDragStart",I)}function C(I){let{scrollbar:W,wrapperEl:q}=t,{el:tt,dragEl:rt}=W;l&&(I.preventDefault?I.preventDefault():I.returnValue=!1,S(I),q.style.transitionDuration="0ms",tt.style.transitionDuration="0ms",rt.style.transitionDuration="0ms",a("scrollbarDragMove",I))}function z(I){let W=t.params.scrollbar,{scrollbar:q,wrapperEl:tt}=t,{el:rt}=q;l&&(l=!1,t.params.cssMode&&(t.wrapperEl.style["scroll-snap-type"]="",tt.style.transitionDuration=""),W.hide&&(clearTimeout(d),d=ma(()=>{rt.style.opacity=0,rt.style.transitionDuration="400ms"},1e3)),a("scrollbarDragEnd",I),W.snapOnRelease&&t.slideToClosest())}function O(I){let{scrollbar:W,params:q}=t,tt=W.el;if(!tt)return;let rt=tt,Bt=q.passiveListeners?{passive:!1,capture:!1}:!1,J=q.passiveListeners?{passive:!0,capture:!1}:!1;if(!rt)return;let _t=I==="on"?"addEventListener":"removeEventListener";rt[_t]("pointerdown",k,Bt),s[_t]("pointermove",C,Bt),s[_t]("pointerup",z,J)}function j(){!t.params.scrollbar.el||!t.scrollbar.el||O("on")}function Q(){!t.params.scrollbar.el||!t.scrollbar.el||O("off")}function Y(){let{scrollbar:I,el:W}=t;t.params.scrollbar=ga(t,t.originalParams.scrollbar,t.params.scrollbar,{el:"swiper-scrollbar"});let q=t.params.scrollbar;if(!q.el)return;let tt;if(typeof q.el=="string"&&t.isElement&&(tt=t.el.querySelector(q.el)),!tt&&typeof q.el=="string"){if(tt=s.querySelectorAll(q.el),!tt.length)return}else tt||(tt=q.el);t.params.uniqueNavElements&&typeof q.el=="string"&&tt.length>1&&W.querySelectorAll(q.el).length===1&&(tt=W.querySelector(q.el)),tt.length>0&&(tt=tt[0]),tt.classList.add(t.isHorizontal()?q.horizontalClass:q.verticalClass);let rt;tt&&(rt=tt.querySelector(Ji(t.params.scrollbar.dragClass)),rt||(rt=Xi("div",t.params.scrollbar.dragClass),tt.append(rt))),Object.assign(I,{el:tt,dragEl:rt}),q.draggable&&j(),tt&&tt.classList[t.enabled?"remove":"add"](...Mi(t.params.scrollbar.lockClass))}function G(){let I=t.params.scrollbar,W=t.scrollbar.el;W&&W.classList.remove(...Mi(t.isHorizontal()?I.horizontalClass:I.verticalClass)),Q()}r("init",()=>{t.params.scrollbar.enabled===!1?U():(Y(),x(),y())}),r("update resize observerUpdate lock unlock",()=>{x()}),r("setTranslate",()=>{y()}),r("setTransition",(I,W)=>{_(W)}),r("enable disable",()=>{let{el:I}=t.scrollbar;I&&I.classList[t.enabled?"remove":"add"](...Mi(t.params.scrollbar.lockClass))}),r("destroy",()=>{G()});let B=()=>{t.el.classList.remove(...Mi(t.params.scrollbar.scrollbarDisabledClass)),t.scrollbar.el&&t.scrollbar.el.classList.remove(...Mi(t.params.scrollbar.scrollbarDisabledClass)),Y(),x(),y()},U=()=>{t.el.classList.add(...Mi(t.params.scrollbar.scrollbarDisabledClass)),t.scrollbar.el&&t.scrollbar.el.classList.add(...Mi(t.params.scrollbar.scrollbarDisabledClass)),G()};Object.assign(t.scrollbar,{enable:B,disable:U,updateSize:x,setTranslate:y,init:Y,destroy:G})}function Wf(i){let{swiper:t,extendParams:e,on:r,emit:a,params:s}=i;t.autoplay={running:!1,paused:!1,timeLeft:0},e({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let l,p,d=s&&s.autoplay?s.autoplay.delay:3e3,h=s&&s.autoplay?s.autoplay.delay:3e3,f,g=new Date().getTime(),v,y,_,x,P,S,k;function C(J){!t||t.destroyed||!t.wrapperEl||J.target===t.wrapperEl&&(t.wrapperEl.removeEventListener("transitionend",C),!k&&B())}let z=()=>{if(t.destroyed||!t.autoplay.running)return;t.autoplay.paused?v=!0:v&&(h=f,v=!1);let J=t.autoplay.paused?f:g+h-new Date().getTime();t.autoplay.timeLeft=J,a("autoplayTimeLeft",J,J/d),p=requestAnimationFrame(()=>{z()})},O=()=>{let J;return t.virtual&&t.params.virtual.enabled?J=t.slides.filter(_t=>_t.classList.contains("swiper-slide-active"))[0]:J=t.slides[t.activeIndex],J?parseInt(J.getAttribute("data-swiper-autoplay"),10):void 0},j=J=>{if(t.destroyed||!t.autoplay.running)return;cancelAnimationFrame(p),z();let _t=typeof J>"u"?t.params.autoplay.delay:J;d=t.params.autoplay.delay,h=t.params.autoplay.delay;let at=O();!Number.isNaN(at)&&at>0&&typeof J>"u"&&(_t=at,d=at,h=at),f=_t;let Rt=t.params.speed,fe=()=>{!t||t.destroyed||(t.params.autoplay.reverseDirection?!t.isBeginning||t.params.loop||t.params.rewind?(t.slidePrev(Rt,!0,!0),a("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(t.slides.length-1,Rt,!0,!0),a("autoplay")):!t.isEnd||t.params.loop||t.params.rewind?(t.slideNext(Rt,!0,!0),a("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(0,Rt,!0,!0),a("autoplay")),t.params.cssMode&&(g=new Date().getTime(),requestAnimationFrame(()=>{j()})))};return _t>0?(clearTimeout(l),l=setTimeout(()=>{fe()},_t)):requestAnimationFrame(()=>{fe()}),_t},Q=()=>{g=new Date().getTime(),t.autoplay.running=!0,j(),a("autoplayStart")},Y=()=>{t.autoplay.running=!1,clearTimeout(l),cancelAnimationFrame(p),a("autoplayStop")},G=(J,_t)=>{if(t.destroyed||!t.autoplay.running)return;clearTimeout(l),J||(S=!0);let at=()=>{a("autoplayPause"),t.params.autoplay.waitForTransition?t.wrapperEl.addEventListener("transitionend",C):B()};if(t.autoplay.paused=!0,_t){P&&(f=t.params.autoplay.delay),P=!1,at();return}f=(f||t.params.autoplay.delay)-(new Date().getTime()-g),!(t.isEnd&&f<0&&!t.params.loop)&&(f<0&&(f=0),at())},B=()=>{t.isEnd&&f<0&&!t.params.loop||t.destroyed||!t.autoplay.running||(g=new Date().getTime(),S?(S=!1,j(f)):j(),t.autoplay.paused=!1,a("autoplayResume"))},U=()=>{if(t.destroyed||!t.autoplay.running)return;let J=be();J.visibilityState==="hidden"&&(S=!0,G(!0)),J.visibilityState==="visible"&&B()},I=J=>{J.pointerType==="mouse"&&(S=!0,k=!0,!(t.animating||t.autoplay.paused)&&G(!0))},W=J=>{J.pointerType==="mouse"&&(k=!1,t.autoplay.paused&&B())},q=()=>{t.params.autoplay.pauseOnMouseEnter&&(t.el.addEventListener("pointerenter",I),t.el.addEventListener("pointerleave",W))},tt=()=>{t.el.removeEventListener("pointerenter",I),t.el.removeEventListener("pointerleave",W)},rt=()=>{be().addEventListener("visibilitychange",U)},Bt=()=>{be().removeEventListener("visibilitychange",U)};r("init",()=>{t.params.autoplay.enabled&&(q(),rt(),Q())}),r("destroy",()=>{tt(),Bt(),t.autoplay.running&&Y()}),r("_freeModeStaticRelease",()=>{(_||S)&&B()}),r("_freeModeNoMomentumRelease",()=>{t.params.autoplay.disableOnInteraction?Y():G(!0,!0)}),r("beforeTransitionStart",(J,_t,at)=>{t.destroyed||!t.autoplay.running||(at||!t.params.autoplay.disableOnInteraction?G(!0,!0):Y())}),r("sliderFirstMove",()=>{if(!(t.destroyed||!t.autoplay.running)){if(t.params.autoplay.disableOnInteraction){Y();return}y=!0,_=!1,S=!1,x=setTimeout(()=>{S=!0,_=!0,G(!0)},200)}}),r("touchEnd",()=>{if(!(t.destroyed||!t.autoplay.running||!y)){if(clearTimeout(x),clearTimeout(l),t.params.autoplay.disableOnInteraction){_=!1,y=!1;return}_&&t.params.cssMode&&B(),_=!1,y=!1}}),r("slideChange",()=>{t.destroyed||!t.autoplay.running||(P=!0)}),Object.assign(t.autoplay,{start:Q,stop:Y,pause:G,resume:B})}function qf(i){let{swiper:t,extendParams:e,on:r}=i;e({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let a=!1,s=!1;t.thumbs={swiper:null};function l(){let h=t.thumbs.swiper;if(!h||h.destroyed)return;let f=h.clickedIndex,g=h.clickedSlide;if(g&&g.classList.contains(t.params.thumbs.slideThumbActiveClass)||typeof f>"u"||f===null)return;let v;h.params.loop?v=parseInt(h.clickedSlide.getAttribute("data-swiper-slide-index"),10):v=f,t.params.loop?t.slideToLoop(v):t.slideTo(v)}function p(){let{thumbs:h}=t.params;if(a)return!1;a=!0;let f=t.constructor;if(h.swiper instanceof f)t.thumbs.swiper=h.swiper,Object.assign(t.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(t.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1}),t.thumbs.swiper.update();else if(ua(h.swiper)){let g=Object.assign({},h.swiper);Object.assign(g,{watchSlidesProgress:!0,slideToClickedSlide:!1}),t.thumbs.swiper=new f(g),s=!0}return t.thumbs.swiper.el.classList.add(t.params.thumbs.thumbsContainerClass),t.thumbs.swiper.on("tap",l),!0}function d(h){let f=t.thumbs.swiper;if(!f||f.destroyed)return;let g=f.params.slidesPerView==="auto"?f.slidesPerViewDynamic():f.params.slidesPerView,v=1,y=t.params.thumbs.slideThumbActiveClass;if(t.params.slidesPerView>1&&!t.params.centeredSlides&&(v=t.params.slidesPerView),t.params.thumbs.multipleActiveThumbs||(v=1),v=Math.floor(v),f.slides.forEach(P=>P.classList.remove(y)),f.params.loop||f.params.virtual&&f.params.virtual.enabled)for(let P=0;P<v;P+=1)no(f.slidesEl,`[data-swiper-slide-index="${t.realIndex+P}"]`).forEach(S=>{S.classList.add(y)});else for(let P=0;P<v;P+=1)f.slides[t.realIndex+P]&&f.slides[t.realIndex+P].classList.add(y);let _=t.params.thumbs.autoScrollOffset,x=_&&!f.params.loop;if(t.realIndex!==f.realIndex||x){let P=f.activeIndex,S,k;if(f.params.loop){let C=f.slides.filter(z=>z.getAttribute("data-swiper-slide-index")===`${t.realIndex}`)[0];S=f.slides.indexOf(C),k=t.activeIndex>t.previousIndex?"next":"prev"}else S=t.realIndex,k=S>t.previousIndex?"next":"prev";x&&(S+=k==="next"?_:-1*_),f.visibleSlidesIndexes&&f.visibleSlidesIndexes.indexOf(S)<0&&(f.params.centeredSlides?S>P?S=S-Math.floor(g/2)+1:S=S+Math.floor(g/2)-1:S>P&&f.params.slidesPerGroup,f.slideTo(S,h?0:void 0))}}r("beforeInit",()=>{let{thumbs:h}=t.params;if(!(!h||!h.swiper))if(typeof h.swiper=="string"||h.swiper instanceof HTMLElement){let f=be(),g=()=>{let y=typeof h.swiper=="string"?f.querySelector(h.swiper):h.swiper;if(y&&y.swiper)h.swiper=y.swiper,p(),d(!0);else if(y){let _=x=>{h.swiper=x.detail[0],y.removeEventListener("init",_),p(),d(!0),h.swiper.update(),t.update()};y.addEventListener("init",_)}return y},v=()=>{t.destroyed||g()||requestAnimationFrame(v)};requestAnimationFrame(v)}else p(),d(!0)}),r("slideChange update resize observerUpdate",()=>{d()}),r("setTransition",(h,f)=>{let g=t.thumbs.swiper;!g||g.destroyed||g.setTransition(f)}),r("beforeDestroy",()=>{let h=t.thumbs.swiper;!h||h.destroyed||s&&h.destroy()}),Object.assign(t.thumbs,{init:p,update:d})}function Gf(i){let{swiper:t,extendParams:e,emit:r,once:a}=i;e({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function s(){if(t.params.cssMode)return;let d=t.getTranslate();t.setTranslate(d),t.setTransition(0),t.touchEventsData.velocities.length=0,t.freeMode.onTouchEnd({currentPos:t.rtl?t.translate:-t.translate})}function l(){if(t.params.cssMode)return;let{touchEventsData:d,touches:h}=t;d.velocities.length===0&&d.velocities.push({position:h[t.isHorizontal()?"startX":"startY"],time:d.touchStartTime}),d.velocities.push({position:h[t.isHorizontal()?"currentX":"currentY"],time:Ai()})}function p(d){let{currentPos:h}=d;if(t.params.cssMode)return;let{params:f,wrapperEl:g,rtlTranslate:v,snapGrid:y,touchEventsData:_}=t,x=Ai()-_.touchStartTime;if(h<-t.minTranslate()){t.slideTo(t.activeIndex);return}if(h>-t.maxTranslate()){t.slides.length<y.length?t.slideTo(y.length-1):t.slideTo(t.slides.length-1);return}if(f.freeMode.momentum){if(_.velocities.length>1){let Q=_.velocities.pop(),Y=_.velocities.pop(),G=Q.position-Y.position,B=Q.time-Y.time;t.velocity=G/B,t.velocity/=2,Math.abs(t.velocity)<f.freeMode.minimumVelocity&&(t.velocity=0),(B>150||Ai()-Q.time>300)&&(t.velocity=0)}else t.velocity=0;t.velocity*=f.freeMode.momentumVelocityRatio,_.velocities.length=0;let P=1e3*f.freeMode.momentumRatio,S=t.velocity*P,k=t.translate+S;v&&(k=-k);let C=!1,z,O=Math.abs(t.velocity)*20*f.freeMode.momentumBounceRatio,j;if(k<t.maxTranslate())f.freeMode.momentumBounce?(k+t.maxTranslate()<-O&&(k=t.maxTranslate()-O),z=t.maxTranslate(),C=!0,_.allowMomentumBounce=!0):k=t.maxTranslate(),f.loop&&f.centeredSlides&&(j=!0);else if(k>t.minTranslate())f.freeMode.momentumBounce?(k-t.minTranslate()>O&&(k=t.minTranslate()+O),z=t.minTranslate(),C=!0,_.allowMomentumBounce=!0):k=t.minTranslate(),f.loop&&f.centeredSlides&&(j=!0);else if(f.freeMode.sticky){let Q;for(let Y=0;Y<y.length;Y+=1)if(y[Y]>-k){Q=Y;break}Math.abs(y[Q]-k)<Math.abs(y[Q-1]-k)||t.swipeDirection==="next"?k=y[Q]:k=y[Q-1],k=-k}if(j&&a("transitionEnd",()=>{t.loopFix()}),t.velocity!==0){if(v?P=Math.abs((-k-t.translate)/t.velocity):P=Math.abs((k-t.translate)/t.velocity),f.freeMode.sticky){let Q=Math.abs((v?-k:k)-t.translate),Y=t.slidesSizesGrid[t.activeIndex];Q<Y?P=f.speed:Q<2*Y?P=f.speed*1.5:P=f.speed*2.5}}else if(f.freeMode.sticky){t.slideToClosest();return}f.freeMode.momentumBounce&&C?(t.updateProgress(z),t.setTransition(P),t.setTranslate(k),t.transitionStart(!0,t.swipeDirection),t.animating=!0,Mn(g,()=>{!t||t.destroyed||!_.allowMomentumBounce||(r("momentumBounce"),t.setTransition(f.speed),setTimeout(()=>{t.setTranslate(z),Mn(g,()=>{!t||t.destroyed||t.transitionEnd()})},0))})):t.velocity?(r("_freeModeNoMomentumRelease"),t.updateProgress(k),t.setTransition(P),t.setTranslate(k),t.transitionStart(!0,t.swipeDirection),t.animating||(t.animating=!0,Mn(g,()=>{!t||t.destroyed||t.transitionEnd()}))):t.updateProgress(k),t.updateActiveIndex(),t.updateSlidesClasses()}else if(f.freeMode.sticky){t.slideToClosest();return}else f.freeMode&&r("_freeModeNoMomentumRelease");(!f.freeMode.momentum||x>=f.longSwipesMs)&&(r("_freeModeStaticRelease"),t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses())}Object.assign(t,{freeMode:{onTouchStart:s,onTouchMove:l,onTouchEnd:p}})}function m_(i){let t=this,{params:e,slidesEl:r}=t;e.loop&&t.loopDestroy();let a=s=>{if(typeof s=="string"){let l=document.createElement("div");l.innerHTML=s,r.append(l.children[0]),l.innerHTML=""}else r.append(s)};if(typeof i=="object"&&"length"in i)for(let s=0;s<i.length;s+=1)i[s]&&a(i[s]);else a(i);t.recalcSlides(),e.loop&&t.loopCreate(),(!e.observer||t.isElement)&&t.update()}function f_(i){let t=this,{params:e,activeIndex:r,slidesEl:a}=t;e.loop&&t.loopDestroy();let s=r+1,l=p=>{if(typeof p=="string"){let d=document.createElement("div");d.innerHTML=p,a.prepend(d.children[0]),d.innerHTML=""}else a.prepend(p)};if(typeof i=="object"&&"length"in i){for(let p=0;p<i.length;p+=1)i[p]&&l(i[p]);s=r+i.length}else l(i);t.recalcSlides(),e.loop&&t.loopCreate(),(!e.observer||t.isElement)&&t.update(),t.slideTo(s,0,!1)}function g_(i,t){let e=this,{params:r,activeIndex:a,slidesEl:s}=e,l=a;r.loop&&(l-=e.loopedSlides,e.loopDestroy(),e.recalcSlides());let p=e.slides.length;if(i<=0){e.prependSlide(t);return}if(i>=p){e.appendSlide(t);return}let d=l>i?l+1:l,h=[];for(let f=p-1;f>=i;f-=1){let g=e.slides[f];g.remove(),h.unshift(g)}if(typeof t=="object"&&"length"in t){for(let f=0;f<t.length;f+=1)t[f]&&s.append(t[f]);d=l>i?l+t.length:l}else s.append(t);for(let f=0;f<h.length;f+=1)s.append(h[f]);e.recalcSlides(),r.loop&&e.loopCreate(),(!r.observer||e.isElement)&&e.update(),r.loop?e.slideTo(d+e.loopedSlides,0,!1):e.slideTo(d,0,!1)}function b_(i){let t=this,{params:e,activeIndex:r}=t,a=r;e.loop&&(a-=t.loopedSlides,t.loopDestroy());let s=a,l;if(typeof i=="object"&&"length"in i){for(let p=0;p<i.length;p+=1)l=i[p],t.slides[l]&&t.slides[l].remove(),l<s&&(s-=1);s=Math.max(s,0)}else l=i,t.slides[l]&&t.slides[l].remove(),l<s&&(s-=1),s=Math.max(s,0);t.recalcSlides(),e.loop&&t.loopCreate(),(!e.observer||t.isElement)&&t.update(),e.loop?t.slideTo(s+t.loopedSlides,0,!1):t.slideTo(s,0,!1)}function v_(){let i=this,t=[];for(let e=0;e<i.slides.length;e+=1)t.push(e);i.removeSlide(t)}function Yf(i){let{swiper:t}=i;Object.assign(t,{appendSlide:m_.bind(t),prependSlide:f_.bind(t),addSlide:g_.bind(t),removeSlide:b_.bind(t),removeAllSlides:v_.bind(t)})}var Kf=A`
  ${N}

  :host {
    --aspect-ratio: inherit;
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
    transition-property: transform;
    display: block;
    aspect-ratio: var(--aspect-ratio);
  }

  .carousel__slide-invisible-blank {
    visibility: hidden;
  }

  ::slotted(img) {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
  }
`;var y_=Object.defineProperty,w_=Object.getOwnPropertyDescriptor,__=(i,t,e,r)=>{for(var a=r>1?void 0:r?w_(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&y_(t,e,a),a},Xf=class extends R{constructor(){super(...arguments),this.lazy=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","group"),this.classList.add("carousel__slide")}render(){return E`
      <slot></slot>
      ${this.lazy?E`<div part="preloader" class="carousel__lazy-preloader"><slot name="lazy-preloader"></slot></div>`:""}
    `}};Xf.styles=Kf;var zr=Xf;__([u({type:Boolean,reflect:!0})],zr.prototype,"lazy",2);var x_=A`
  :host {
    --aspect-ratio: 16 / 9;

    --preloader-color: var(--awc-color-primary-600);

    --navigation-top-offset: 50%;
    --navigation-size: 40px;
    --navigation-background: var(--awc-color-neutral-0);
    --navigation-color: var(--awc-color-primary-600);
    --navigation-disabled-opacity: 0.35;
    --navigation-sides-offset: 10px;

    --pagination-top: auto;
    --pagination-left: auto;
    --pagination-bottom: 8px;
    --pagination-right: 8px;
    --pagination-bullet-size: 10px;
    --pagination-bullet-border-radius: 50%;
    --pagination-bullet-opacity: 1;
    --pagination-color: var(--awc-color-primary-600);
    --pagination-bullet-inactive-opacity: 0.5;
    --pagination-bullet-inactive-color: var(--awc-color-neutral-200);
    --pagination-bullet-horizontal-gap: 4px;
    --pagination-bullet-vertical-gap: 6px;
    --pagination-fraction-color: inherit;
    --pagination-progressbar-bg-color: var(--awc-color-neutral-200);
    --pagination-progressbar-size: 4px;

    --centered-offset-before: 0;
    --centered-offset-after: 0;

    --wrapper-transition-timing-function: ease;

    position: relative;
    display: block;
    margin-left: auto;
    margin-right: auto;
    z-index: 1;
  }

  .carousel {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    /* Fix of Webkit flickering */
    z-index: 1;
    display: block;
  }

  .carousel--vertical > .carousel__wrapper {
    flex-direction: column;
  }

  .carousel__wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    transition-property: transform;
    transition-timing-function: var(--wrapper-transition-timing-function);
    box-sizing: content-box;
  }

  .carousel--android ::slotted(.carousel__slide),
  .carousel--ios ::slotted(.carousel__slide),
  .carousel__wrapper {
    transform: translate3d(0px, 0, 0);
  }

  .carousel--horizontal {
    touch-action: pan-y;
  }

  .carousel--vertical {
    touch-action: pan-x;
  }

  ::slotted(.carousel__slide) {
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
    transition-property: transform;
    display: block;
  }

  .swiper-slide-invisible-blank {
    visibility: hidden;
  }

  /* Auto Height */
  .carousel--autoheight,
  .carousel--autoheight ::slotted(.carousel__slide) {
    height: auto;
  }

  .carousel--autoheight .carousel__wrapper {
    align-items: flex-start;
    transition-property: transform, height;
  }

  .carousel--backface-hidden ::slotted(.carousel__slide) {
    transform: translateZ(0);
    backface-visibility: hidden;
  }

  /* 3D Effects */
  .carousel--3d.carousel--css-mode .carousel__wrapper {
    perspective: 1200px;
  }

  .carousel--3d .carousel__wrapper {
    transform-style: preserve-3d;
  }

  .carousel--3d {
    perspective: 1200px;
  }
  .carousel--3d ::slotted(.carousel__slide),
  .carousel--3d .carousel-cube-shadow {
    transform-style: preserve-3d;
  }

  /* CSS Mode */
  .carousel--css-mode > .carousel__wrapper {
    overflow: auto;
    scrollbar-width: none;
    /* For Firefox */
    -ms-overflow-style: none;
    /* For Internet Explorer and Edge */
  }
  .carousel--css-mode > .carousel__wrapper::-webkit-scrollbar {
    display: none;
  }
  .carousel--css-mode > .carousel__wrapper > ::slotted(.carousel__slide) {
    scroll-snap-align: start start;
  }
  .carousel--css-mode.carousel--horizontal > .carousel__wrapper {
    scroll-snap-type: x mandatory;
  }
  .carousel--css-mode.carousel--vertical > .carousel__wrapper {
    scroll-snap-type: y mandatory;
  }
  .carousel--css-mode.carousel--free-mode > .carousel__wrapper {
    scroll-snap-type: none;
  }
  .carousel--css-mode.carousel--free-mode > .carousel__wrapper > ::slotted(.carousel__slide) {
    scroll-snap-align: none;
  }
  .carousel--css-mode.carousel--centered > .carousel__wrapper::before {
    content: '';
    flex-shrink: 0;
    order: 9999;
  }
  .carousel--css-mode.carousel--centered > .carousel__wrapper > ::slotted(.carousel__slide) {
    scroll-snap-align: center center;
    scroll-snap-stop: always;
  }
  .carousel--css-mode.carousel--centered.carousel--horizontal
    > .carousel__wrapper
    > ::slotted(.carousel__slide):first-child {
    margin-inline-start: var(--centered-offset-before);
  }
  .carousel--css-mode.carousel--centered.carousel--horizontal > .carousel__wrapper::before {
    height: 100%;
    min-height: 1px;
    width: var(--centered-offset-after);
  }
  .carousel--css-mode.carousel--centered.carousel--vertical
    > .carousel__wrapper
    > ::slotted(.carousel__slide):first-child {
    margin-block-start: var(--centered-offset-before);
  }
  .carousel--css-mode.carousel--centered.carousel--vertical > .carousel__wrapper::before {
    width: 100%;
    min-width: 1px;
    height: var(--centered-offset-after);
  }

  /* Slide styles start */
  /* 3D Shadows */
  .carousel--3d .carousel__slide-shadow,
  .carousel--3d .carousel__slide-shadow-left,
  .carousel--3d .carousel__slide-shadow-right,
  .carousel--3d .carousel__slide-shadow-top,
  .carousel--3d .carousel__slide-shadow-bottom,
  .carousel--3d .carousel__slide-shadow,
  .carousel--3d .carousel__slide-shadow-left,
  .carousel--3d .carousel__slide-shadow-right,
  .carousel--3d .carousel__slide-shadow-top,
  .carousel--3d .carousel__slide-shadow-bottom {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 10;
  }
  .carousel--3d .carousel__slide-shadow {
    background: rgba(0, 0, 0, 0.15);
  }
  .carousel--3d .carousel__slide-shadow-left {
    background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  }
  .carousel--3d .carousel__slide-shadow-right {
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  }
  .carousel--3d .carousel__slide-shadow-top {
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  }
  .carousel--3d .carousel__slide-shadow-bottom {
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  }

  .carousel__lazy-preloader {
    width: 42px;
    height: 42px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -21px;
    margin-top: -21px;
    z-index: 10;
    transform-origin: 50%;
    box-sizing: border-box;
    border: 4px solid var(--preloader-color);
    border-radius: 50%;
    border-top-color: transparent;
  }

  .carousel:not(.carousel--watch-progress) .carousel__lazy-preloader,
  .carousel--watch-progress .carousel__slide-visible .carousel__lazy-preloader {
    animation: slide-preloader-spin 1s infinite linear;
  }

  .carousel__lazy-preloader-white {
    --preloader-color: #fff;
  }

  .carousel__lazy-preloader-black {
    --preloader-color: #000;
  }

  @keyframes slide-preloader-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  /* Slide styles end */
`,k_=A`
  .navigation-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--navigation-background);
    border: 1px solid var(--navigation-color);
    border-radius: var(--awc-border-radius-none);
    color: var(--navigation-color);

    font-size: inherit;
    padding: var(--awc-spacing-x-small);
    cursor: pointer;
    transition: var(--awc-transition-medium) color;
    appearance: none;

    position: absolute;
    top: var(--navigation-top-offset);
    width: var(--navigation-size);
    height: var(--navigation-size);
    transform: translate3d(0, -50%, 0);
    z-index: 10;
  }

  .navigation-button--previous.navigation-button--disabled,
  .navigation-button--next.navigation-button--disabled {
    opacity: var(--navigation-disabled-opacity);
    cursor: auto;
    pointer-events: none;
  }
  .navigation-button--previous.navigation-button--hidden,
  .navigation-button--next.navigation-button--hidden {
    opacity: 0;
    cursor: auto;
    pointer-events: none;
  }
  .navigation--disabled .navigation-button--previous,
  .navigation--disabled .navigation-button--next {
    display: none !important;
  }
  .navigation-button--previous svg,
  .navigation-button--next svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transform-origin: center;
  }
  .carousel--rtl .navigation-button--previous svg,
  .carousel--rtl .navigation-button--next svg {
    transform: rotate(180deg);
  }

  .navigation-button--previous,
  .carousel--rtl .navigation-button--next {
    left: var(--navigation-sides-offset);
    right: auto;
  }

  .navigation-button--next,
  .carousel--rtl .navigation-button--previous {
    right: var(--navigation-sides-offset);
    left: auto;
  }

  .navigation-button--lock {
    display: none;
  }

  /* Navigation font start */
  .navigation-button--previous:after,
  .navigation-button--next:after {
    font-size: var(--navigation-size);
    text-transform: none !important;
    letter-spacing: 0;
    font-variant: initial;
    line-height: 1;
  }

  .navigation-button--next,
  .carousel--rtl .navigation-button--previous {
    right: var(--navigation-sides-offset);
    left: auto;
  }

  /* Navigation font end */
`,C_=A`
  .carousel__pagination {
    position: absolute;
    text-align: center;
    transition: 300ms opacity;
    transform: translate3d(0, 0, 0);
    z-index: 10;
  }
  .carousel__pagination.carousel__pagination--hidden {
    opacity: 0;
  }
  .carousel__pagination--disabled > .carousel__pagination,
  .carousel__pagination.carousel__pagination--disabled {
    display: none !important;
  }

  /* Common Styles */
  .carousel__pagination-fraction,
  .carousel__pagination-custom,
  .carousel__pagination--horizontal > .carousel__pagination-bullets,
  .carousel__pagination-bullets.carousel__pagination--horizontal {
    bottom: var(--pagination-bottom);
    top: var(--pagination-top);
    left: 0;
    width: 100%;
  }

  /* Bullets */
  .carousel__pagination--bullets-dynamic {
    overflow: hidden;
    font-size: 0;
  }
  .carousel__pagination--bullets-dynamic .pagination-item {
    transform: scale(0.33);
    position: relative;
  }
  .carousel__pagination--bullets-dynamic .pagination-item--active {
    transform: scale(1);
  }
  .carousel__pagination--bullets-dynamic .pagination-item--active-main {
    transform: scale(1);
  }
  .carousel__pagination--bullets-dynamic .pagination-item--active-prev {
    transform: scale(0.66);
  }
  .carousel__pagination--bullets-dynamic .pagination-item--active-prev-prev {
    transform: scale(0.33);
  }
  .carousel__pagination--bullets-dynamic .pagination-item--active-next {
    transform: scale(0.66);
  }
  .carousel__pagination--bullets-dynamic .pagination-item--active-next-next {
    transform: scale(0.33);
  }

  .pagination-item {
    width: var(--pagination-bullet-width, var(--pagination-bullet-size));
    height: var(--pagination-bullet-height, var(--pagination-bullet-size));
    display: inline-block;
    border-radius: var(--pagination-bullet-border-radius);
    background: var(--pagination-bullet-inactive-color);
    opacity: var(--pagination-bullet-inactive-opacity);
  }
  button.pagination-item {
    border: none;
    margin: 0;
    padding: 0;
    box-shadow: none;
    appearance: none;
  }

  .carousel__pagination-clickable .pagination-item {
    cursor: pointer;
  }
  .pagination-item:only-child {
    display: none !important;
  }

  .pagination-item--active {
    opacity: var(--pagination-bullet-opacity);
    background: var(--pagination-color);
  }

  .carousel__pagination--vertical {
    position: absolute;
  }
  .carousel--vertical > .carousel__pagination-bullets,
  .carousel__pagination--vertical.carousel__pagination-bullets {
    right: var(--pagination-right);
    left: var(--pagination-left);
    top: 50%;
    transform: translate3d(0px, -50%, 0);
  }
  .carousel--vertical > .carousel__pagination-bullets .pagination-item,
  .carousel__pagination--vertical.carousel__pagination-bullets .pagination-item {
    margin: var(--pagination-bullet-vertical-gap) 0;
    display: block;
  }
  .carousel--vertical > .carousel__pagination-bullets.carousel__pagination-bullets-dynamic,
  .carousel__pagination--vertical.carousel__pagination-bullets.carousel__pagination-bullets-dynamic {
    top: 50%;
    transform: translateY(-50%);
    width: 8px;
  }
  .carousel--vertical > .carousel__pagination-bullets.carousel__pagination-bullets-dynamic .pagination-item,
  .carousel__pagination--vertical.carousel__pagination-bullets.carousel__pagination-bullets-dynamic .pagination-item {
    display: inline-block;
    transition:
      200ms transform,
      200ms top;
  }

  .carousel__pagination--horizontal > .carousel__pagination-bullets .pagination-item,
  .carousel__pagination--horizontal.carousel__pagination-bullets .pagination-item {
    margin: 0 var(--pagination-bullet-horizontal-gap);
  }
  .carousel__pagination--horizontal > .carousel__pagination-bullets.carousel__pagination-bullets-dynamic,
  .carousel__pagination--horizontal.carousel__pagination-bullets.carousel__pagination-bullets-dynamic {
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
  }
  .carousel__pagination--horizontal
    > .carousel__pagination-bullets.carousel__pagination-bullets-dynamic
    .pagination-item,
  .carousel__pagination--horizontal.carousel__pagination-bullets.carousel__pagination-bullets-dynamic .pagination-item {
    transition:
      200ms transform,
      200ms left;
  }

  .carousel__pagination--horizontal.carousel--rtl > .carousel__pagination-bullets-dynamic .pagination-item {
    transition:
      200ms transform,
      200ms right;
  }

  /* Fraction */
  .carousel__pagination-fraction {
    color: var(--pagination-fraction-color);
  }

  /* Progress */
  .carousel__pagination-progressbar {
    background: var(--pagination-progressbar-bg-color);
    position: absolute;
  }
  .carousel__pagination-progressbar .carousel__progressbar--fill {
    background: var(--pagination-color);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transform: scale(0);
    transform-origin: left top;
  }
  .carousel--rtl + .carousel__pagination-progressbar .carousel__progressbar--fill {
    transform-origin: right top;
  }
  .carousel--horizontal + .carousel__pagination-progressbar,
  .carousel__pagination-progressbar.carousel__pagination--horizontal,
  .carousel--vertical + .carousel__pagination-progressbar.carousel__progressbar--opposite,
  .carousel__pagination-progressbar.carousel__pagination--vertical.carousel__progressbar--opposite {
    width: 100%;
    height: var(--pagination-progressbar-size);
    left: 0;
    top: 0;
  }
  .carousel--vertical + .carousel__pagination-progressbar,
  .carousel__pagination-progressbar.carousel__pagination--vertical,
  .carousel__pagination--horizontal > .carousel__pagination-progressbar.carousel__progressbar--opposite,
  .carousel__pagination-progressbar.carousel__pagination--horizontal.carousel__progressbar--opposite {
    width: var(--pagination-progressbar-size);
    height: 100%;
    left: 0;
    top: 0;
  }

  .carousel__pagination--lock {
    display: none;
  }
`,Jf=A`
  ${N}
  ${x_}
  ${k_}
  ${C_}

  .carousel--free-mode > .carousel__wrapper {
    transition-timing-function: ease-out;
    margin: 0 auto;
  }
`;var kc;function L_(){let i=Le(),t=be();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in i||i.DocumentTouch&&t instanceof i.DocumentTouch)}}function ig(){return kc||(kc=L_()),kc}var Cc;function z_(i){let{userAgent:t}=i===void 0?{}:i,e=ig(),r=Le(),a=r.navigator.platform,s=t||r.navigator.userAgent,l={ios:!1,android:!1},p=r.screen.width,d=r.screen.height,h=s.match(/(Android);?[\s\/]+([\d.]+)?/),f=s.match(/(iPad).*OS\s([\d_]+)/),g=s.match(/(iPod)(.*OS\s([\d_]+))?/),v=!f&&s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),y=a==="Win32",_=a==="MacIntel",x=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!f&&_&&e.touch&&x.indexOf(`${p}x${d}`)>=0&&(f=s.match(/(Version)\/([\d.]+)/),f||(f=[0,1,"13_0_0"]),_=!1),h&&!y&&(l.os="android",l.android=!0),(f||v||g)&&(l.os="ios",l.ios=!0),l}function S_(i){return i===void 0&&(i={}),Cc||(Cc=z_(i)),Cc}var Lc;function T_(){let i=Le(),t=!1;function e(){let r=i.navigator.userAgent.toLowerCase();return r.indexOf("safari")>=0&&r.indexOf("chrome")<0&&r.indexOf("android")<0}if(e()){let r=String(i.navigator.userAgent);if(r.includes("Version/")){let[a,s]=r.split("Version/")[1].split(" ")[0].split(".").map(l=>Number(l));t=a<16||a===16&&s<2}}return{isSafari:t||e(),needPerspectiveFix:t,isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(i.navigator.userAgent)}}function P_(){return Lc||(Lc=T_()),Lc}function E_(i){let{swiper:t,on:e,emit:r}=i,a=Le(),s=null,l=null,p=()=>{!t||t.destroyed||!t.initialized||(r("beforeResize"),r("resize"))},d=()=>{!t||t.destroyed||!t.initialized||(s=new ResizeObserver(g=>{l=a.requestAnimationFrame(()=>{let{width:v,height:y}=t,_=v,x=y;g.forEach(P=>{let{contentBoxSize:S,contentRect:k,target:C}=P;C&&C!==t.el||(_=k?k.width:(S[0]||S).inlineSize,x=k?k.height:(S[0]||S).blockSize)}),(_!==v||x!==y)&&p()})}),s.observe(t.el))},h=()=>{l&&a.cancelAnimationFrame(l),s&&s.unobserve&&t.el&&(s.unobserve(t.el),s=null)},f=()=>{!t||t.destroyed||!t.initialized||r("orientationchange")};e("init",()=>{if(t.params.resizeObserver&&typeof a.ResizeObserver<"u"){d();return}a.addEventListener("resize",p),a.addEventListener("orientationchange",f)}),e("destroy",()=>{h(),a.removeEventListener("resize",p),a.removeEventListener("orientationchange",f)})}function O_(i){let{swiper:t,extendParams:e,on:r,emit:a}=i,s=[],l=Le(),p=function(f,g){g===void 0&&(g={});let v=l.MutationObserver||l.WebkitMutationObserver,y=new v(_=>{if(t.__preventObserver__)return;if(_.length===1){a("observerUpdate",_[0]);return}let x=function(){a("observerUpdate",_[0])};l.requestAnimationFrame?l.requestAnimationFrame(x):l.setTimeout(x,0)});y.observe(f,{attributes:typeof g.attributes>"u"?!0:g.attributes,childList:typeof g.childList>"u"?!0:g.childList,characterData:typeof g.characterData>"u"?!0:g.characterData}),s.push(y)},d=()=>{if(t.params.observer){if(t.params.observeParents){let f=Lr(t.hostEl);for(let g=0;g<f.length;g+=1)p(f[g])}p(t.hostEl,{childList:t.params.observeSlideChildren}),p(t.wrapperEl,{attributes:!1})}},h=()=>{s.forEach(f=>{f.disconnect()}),s.splice(0,s.length)};e({observer:!1,observeParents:!1,observeSlideChildren:!1}),r("init",d),r("destroy",h)}var M_={on(i,t,e){let r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;let a=e?"unshift":"push";return i.split(" ").forEach(s=>{r.eventsListeners[s]||(r.eventsListeners[s]=[]),r.eventsListeners[s][a](t)}),r},once(i,t,e){let r=this;if(!r.eventsListeners||r.destroyed||typeof t!="function")return r;function a(){r.off(i,a),a.__emitterProxy&&delete a.__emitterProxy;for(var s=arguments.length,l=new Array(s),p=0;p<s;p++)l[p]=arguments[p];t.apply(r,l)}return a.__emitterProxy=t,r.on(i,a,e)},onAny(i,t){let e=this;if(!e.eventsListeners||e.destroyed||typeof i!="function")return e;let r=t?"unshift":"push";return e.eventsAnyListeners.indexOf(i)<0&&e.eventsAnyListeners[r](i),e},offAny(i){let t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;let e=t.eventsAnyListeners.indexOf(i);return e>=0&&t.eventsAnyListeners.splice(e,1),t},off(i,t){let e=this;return!e.eventsListeners||e.destroyed||!e.eventsListeners||i.split(" ").forEach(r=>{typeof t>"u"?e.eventsListeners[r]=[]:e.eventsListeners[r]&&e.eventsListeners[r].forEach((a,s)=>{(a===t||a.__emitterProxy&&a.__emitterProxy===t)&&e.eventsListeners[r].splice(s,1)})}),e},emit(){let i=this;if(!i.eventsListeners||i.destroyed||!i.eventsListeners)return i;let t,e,r;for(var a=arguments.length,s=new Array(a),l=0;l<a;l++)s[l]=arguments[l];return typeof s[0]=="string"||Array.isArray(s[0])?(t=s[0],e=s.slice(1,s.length),r=i):(t=s[0].events,e=s[0].data,r=s[0].context||i),e.unshift(r),(Array.isArray(t)?t:t.split(" ")).forEach(p=>{i.eventsAnyListeners&&i.eventsAnyListeners.length&&i.eventsAnyListeners.forEach(d=>{d.apply(r,[p,...e])}),i.eventsListeners&&i.eventsListeners[p]&&i.eventsListeners[p].forEach(d=>{d.apply(r,e)})}),i}};function A_(){let i=this,t,e,r=i.el;typeof i.params.width<"u"&&i.params.width!==null?t=i.params.width:t=r.clientWidth,typeof i.params.height<"u"&&i.params.height!==null?e=i.params.height:e=r.clientHeight,!(t===0&&i.isHorizontal()||e===0&&i.isVertical())&&(t=t-parseInt($i(r,"padding-left")||0,10)-parseInt($i(r,"padding-right")||0,10),e=e-parseInt($i(r,"padding-top")||0,10)-parseInt($i(r,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(e)&&(e=0),Object.assign(i,{width:t,height:e,size:i.isHorizontal()?t:e}))}function $_(){let i=this;function t(B,U){return parseFloat(B.getPropertyValue(i.getDirectionLabel(U))||0)}let e=i.params,{wrapperEl:r,slidesEl:a,size:s,rtlTranslate:l,wrongRTL:p}=i,d=i.virtual&&e.virtual.enabled,h=d?i.virtual.slides.length:i.slides.length,f=no(a,`.${i.params.slideClass}, swiper-slide`),g=d?i.virtual.slides.length:f.length,v=[],y=[],_=[],x=e.slidesOffsetBefore;typeof x=="function"&&(x=e.slidesOffsetBefore.call(i));let P=e.slidesOffsetAfter;typeof P=="function"&&(P=e.slidesOffsetAfter.call(i));let S=i.snapGrid.length,k=i.slidesGrid.length,C=e.spaceBetween,z=-x,O=0,j=0;if(typeof s>"u")return;typeof C=="string"&&C.indexOf("%")>=0?C=parseFloat(C.replace("%",""))/100*s:typeof C=="string"&&(C=parseFloat(C)),i.virtualSize=-C,f.forEach(B=>{l?B.style.marginLeft="":B.style.marginRight="",B.style.marginBottom="",B.style.marginTop=""}),e.centeredSlides&&e.cssMode&&(ss(r,"--swiper-centered-offset-before",""),ss(r,"--swiper-centered-offset-after",""));let Q=e.grid&&e.grid.rows>1&&i.grid;Q?i.grid.initSlides(f):i.grid&&i.grid.unsetSlides();let Y,G=e.slidesPerView==="auto"&&e.breakpoints&&Object.keys(e.breakpoints).filter(B=>typeof e.breakpoints[B].slidesPerView<"u").length>0;for(let B=0;B<g;B+=1){Y=0;let U;if(f[B]&&(U=f[B]),Q&&i.grid.updateSlide(B,U,f),!(f[B]&&$i(U,"display")==="none")){if(e.slidesPerView==="auto"){G&&(f[B].style[i.getDirectionLabel("width")]="");let I=getComputedStyle(U),W=U.style.transform,q=U.style.webkitTransform;if(W&&(U.style.transform="none"),q&&(U.style.webkitTransform="none"),e.roundLengths)Y=i.isHorizontal()?ls(U,"width",!0):ls(U,"height",!0);else{let tt=t(I,"width"),rt=t(I,"padding-left"),Bt=t(I,"padding-right"),J=t(I,"margin-left"),_t=t(I,"margin-right"),at=I.getPropertyValue("box-sizing");if(at&&at==="border-box")Y=tt+J+_t;else{let{clientWidth:Rt,offsetWidth:fe}=U;Y=tt+rt+Bt+J+_t+(fe-Rt)}}W&&(U.style.transform=W),q&&(U.style.webkitTransform=q),e.roundLengths&&(Y=Math.floor(Y))}else Y=(s-(e.slidesPerView-1)*C)/e.slidesPerView,e.roundLengths&&(Y=Math.floor(Y)),f[B]&&(f[B].style[i.getDirectionLabel("width")]=`${Y}px`);f[B]&&(f[B].swiperSlideSize=Y),_.push(Y),e.centeredSlides?(z=z+Y/2+O/2+C,O===0&&B!==0&&(z=z-s/2-C),B===0&&(z=z-s/2-C),Math.abs(z)<1/1e3&&(z=0),e.roundLengths&&(z=Math.floor(z)),j%e.slidesPerGroup===0&&v.push(z),y.push(z)):(e.roundLengths&&(z=Math.floor(z)),(j-Math.min(i.params.slidesPerGroupSkip,j))%i.params.slidesPerGroup===0&&v.push(z),y.push(z),z=z+Y+C),i.virtualSize+=Y+C,O=Y,j+=1}}if(i.virtualSize=Math.max(i.virtualSize,s)+P,l&&p&&(e.effect==="slide"||e.effect==="coverflow")&&(r.style.width=`${i.virtualSize+C}px`),e.setWrapperSize&&(r.style[i.getDirectionLabel("width")]=`${i.virtualSize+C}px`),Q&&i.grid.updateWrapperSize(Y,v),!e.centeredSlides){let B=[];for(let U=0;U<v.length;U+=1){let I=v[U];e.roundLengths&&(I=Math.floor(I)),v[U]<=i.virtualSize-s&&B.push(I)}v=B,Math.floor(i.virtualSize-s)-Math.floor(v[v.length-1])>1&&v.push(i.virtualSize-s)}if(d&&e.loop){let B=_[0]+C;if(e.slidesPerGroup>1){let U=Math.ceil((i.virtual.slidesBefore+i.virtual.slidesAfter)/e.slidesPerGroup),I=B*e.slidesPerGroup;for(let W=0;W<U;W+=1)v.push(v[v.length-1]+I)}for(let U=0;U<i.virtual.slidesBefore+i.virtual.slidesAfter;U+=1)e.slidesPerGroup===1&&v.push(v[v.length-1]+B),y.push(y[y.length-1]+B),i.virtualSize+=B}if(v.length===0&&(v=[0]),C!==0){let B=i.isHorizontal()&&l?"marginLeft":i.getDirectionLabel("marginRight");f.filter((U,I)=>!e.cssMode||e.loop?!0:I!==f.length-1).forEach(U=>{U.style[B]=`${C}px`})}if(e.centeredSlides&&e.centeredSlidesBounds){let B=0;_.forEach(I=>{B+=I+(C||0)}),B-=C;let U=B-s;v=v.map(I=>I<=0?-x:I>U?U+P:I)}if(e.centerInsufficientSlides){let B=0;if(_.forEach(U=>{B+=U+(C||0)}),B-=C,B<s){let U=(s-B)/2;v.forEach((I,W)=>{v[W]=I-U}),y.forEach((I,W)=>{y[W]=I+U})}}if(Object.assign(i,{slides:f,snapGrid:v,slidesGrid:y,slidesSizesGrid:_}),e.centeredSlides&&e.cssMode&&!e.centeredSlidesBounds){ss(r,"--swiper-centered-offset-before",`${-v[0]}px`),ss(r,"--swiper-centered-offset-after",`${i.size/2-_[_.length-1]/2}px`);let B=-i.snapGrid[0],U=-i.slidesGrid[0];i.snapGrid=i.snapGrid.map(I=>I+B),i.slidesGrid=i.slidesGrid.map(I=>I+U)}if(g!==h&&i.emit("slidesLengthChange"),v.length!==S&&(i.params.watchOverflow&&i.checkOverflow(),i.emit("snapGridLengthChange")),y.length!==k&&i.emit("slidesGridLengthChange"),e.watchSlidesProgress&&i.updateSlidesOffset(),i.emit("slidesUpdated"),!d&&!e.cssMode&&(e.effect==="slide"||e.effect==="fade")){let B=`${e.containerModifierClass}backface-hidden`,U=i.el.classList.contains(B);g<=e.maxBackfaceHiddenSlides?U||i.el.classList.add(B):U&&i.el.classList.remove(B)}}function I_(i){let t=this,e=[],r=t.virtual&&t.params.virtual.enabled,a=0,s;typeof i=="number"?t.setTransition(i):i===!0&&t.setTransition(t.params.speed);let l=p=>r?t.slides[t.getSlideIndexByData(p)]:t.slides[p];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(p=>{e.push(p)});else for(s=0;s<Math.ceil(t.params.slidesPerView);s+=1){let p=t.activeIndex+s;if(p>t.slides.length&&!r)break;e.push(l(p))}else e.push(l(t.activeIndex));for(s=0;s<e.length;s+=1)if(typeof e[s]<"u"){let p=e[s].offsetHeight;a=p>a?p:a}(a||a===0)&&(t.wrapperEl.style.height=`${a}px`)}function D_(){let i=this,t=i.slides,e=i.isElement?i.isHorizontal()?i.wrapperEl.offsetLeft:i.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(i.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-e-i.cssOverflowAdjustment()}function B_(i){i===void 0&&(i=this&&this.translate||0);let t=this,e=t.params,{slides:r,rtlTranslate:a,snapGrid:s}=t;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let l=-i;a&&(l=i),r.forEach(d=>{d.classList.remove(e.slideVisibleClass,e.slideFullyVisibleClass)}),t.visibleSlidesIndexes=[],t.visibleSlides=[];let p=e.spaceBetween;typeof p=="string"&&p.indexOf("%")>=0?p=parseFloat(p.replace("%",""))/100*t.size:typeof p=="string"&&(p=parseFloat(p));for(let d=0;d<r.length;d+=1){let h=r[d],f=h.swiperSlideOffset;e.cssMode&&e.centeredSlides&&(f-=r[0].swiperSlideOffset);let g=(l+(e.centeredSlides?t.minTranslate():0)-f)/(h.swiperSlideSize+p),v=(l-s[0]+(e.centeredSlides?t.minTranslate():0)-f)/(h.swiperSlideSize+p),y=-(l-f),_=y+t.slidesSizesGrid[d],x=y>=0&&y<=t.size-t.slidesSizesGrid[d];(y>=0&&y<t.size-1||_>1&&_<=t.size||y<=0&&_>=t.size)&&(t.visibleSlides.push(h),t.visibleSlidesIndexes.push(d),r[d].classList.add(e.slideVisibleClass)),x&&r[d].classList.add(e.slideFullyVisibleClass),h.progress=a?-g:g,h.originalProgress=a?-v:v}}function R_(i){let t=this;if(typeof i>"u"){let f=t.rtlTranslate?-1:1;i=t&&t.translate&&t.translate*f||0}let e=t.params,r=t.maxTranslate()-t.minTranslate(),{progress:a,isBeginning:s,isEnd:l,progressLoop:p}=t,d=s,h=l;if(r===0)a=0,s=!0,l=!0;else{a=(i-t.minTranslate())/r;let f=Math.abs(i-t.minTranslate())<1,g=Math.abs(i-t.maxTranslate())<1;s=f||a<=0,l=g||a>=1,f&&(a=0),g&&(a=1)}if(e.loop){let f=t.getSlideIndexByData(0),g=t.getSlideIndexByData(t.slides.length-1),v=t.slidesGrid[f],y=t.slidesGrid[g],_=t.slidesGrid[t.slidesGrid.length-1],x=Math.abs(i);x>=v?p=(x-v)/_:p=(x+_-y)/_,p>1&&(p-=1)}Object.assign(t,{progress:a,progressLoop:p,isBeginning:s,isEnd:l}),(e.watchSlidesProgress||e.centeredSlides&&e.autoHeight)&&t.updateSlidesProgress(i),s&&!d&&t.emit("reachBeginning toEdge"),l&&!h&&t.emit("reachEnd toEdge"),(d&&!s||h&&!l)&&t.emit("fromEdge"),t.emit("progress",a)}function F_(){let i=this,{slides:t,params:e,slidesEl:r,activeIndex:a}=i,s=i.virtual&&e.virtual.enabled,l=i.grid&&e.grid&&e.grid.rows>1,p=g=>no(r,`.${e.slideClass}${g}, swiper-slide${g}`)[0];t.forEach(g=>{g.classList.remove(e.slideActiveClass,e.slideNextClass,e.slidePrevClass)});let d,h,f;if(s)if(e.loop){let g=a-i.virtual.slidesBefore;g<0&&(g=i.virtual.slides.length+g),g>=i.virtual.slides.length&&(g-=i.virtual.slides.length),d=p(`[data-swiper-slide-index="${g}"]`)}else d=p(`[data-swiper-slide-index="${a}"]`);else l?(d=t.filter(g=>g.column===a)[0],f=t.filter(g=>g.column===a+1)[0],h=t.filter(g=>g.column===a-1)[0]):d=t[a];d&&(d.classList.add(e.slideActiveClass),l?(f&&f.classList.add(e.slideNextClass),h&&h.classList.add(e.slidePrevClass)):(f=jf(d,`.${e.slideClass}, swiper-slide`)[0],e.loop&&!f&&(f=t[0]),f&&f.classList.add(e.slideNextClass),h=Nf(d,`.${e.slideClass}, swiper-slide`)[0],e.loop&&!h===0&&(h=t[t.length-1]),h&&h.classList.add(e.slidePrevClass))),i.emitSlidesClasses()}var An=(i,t)=>{if(!i||i.destroyed||!i.params)return;let e=()=>i.isElement?"swiper-slide":`.${i.params.slideClass}`,r=t.closest(e());if(r){let a=r.querySelector(`.${i.params.lazyPreloaderClass}`);!a&&i.isElement&&(r.shadowRoot?a=r.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(a=r.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`),a&&a.remove())})),a&&a.remove()}},zc=(i,t)=>{if(!i.slides[t])return;let e=i.slides[t].querySelector('[loading="lazy"]');e&&e.removeAttribute("loading")},Pc=i=>{if(!i||i.destroyed||!i.params)return;let t=i.params.lazyPreloadPrevNext,e=i.slides.length;if(!e||!t||t<0)return;t=Math.min(t,e);let r=i.params.slidesPerView==="auto"?i.slidesPerViewDynamic():Math.ceil(i.params.slidesPerView),a=i.activeIndex;if(i.params.grid&&i.params.grid.rows>1){let l=a,p=[l-t];p.push(...Array.from({length:t}).map((d,h)=>l+r+h)),i.slides.forEach((d,h)=>{p.includes(d.column)&&zc(i,h)});return}let s=a+r-1;if(i.params.rewind||i.params.loop)for(let l=a-t;l<=s+t;l+=1){let p=(l%e+e)%e;(p<a||p>s)&&zc(i,p)}else for(let l=Math.max(a-t,0);l<=Math.min(s+t,e-1);l+=1)l!==a&&(l>s||l<a)&&zc(i,l)};function N_(i){let{slidesGrid:t,params:e}=i,r=i.rtlTranslate?i.translate:-i.translate,a;for(let s=0;s<t.length;s+=1)typeof t[s+1]<"u"?r>=t[s]&&r<t[s+1]-(t[s+1]-t[s])/2?a=s:r>=t[s]&&r<t[s+1]&&(a=s+1):r>=t[s]&&(a=s);return e.normalizeSlideIndex&&(a<0||typeof a>"u")&&(a=0),a}function j_(i){let t=this,e=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:a,activeIndex:s,realIndex:l,snapIndex:p}=t,d=i,h,f=y=>{let _=y-t.virtual.slidesBefore;return _<0&&(_=t.virtual.slides.length+_),_>=t.virtual.slides.length&&(_-=t.virtual.slides.length),_};if(typeof d>"u"&&(d=N_(t)),r.indexOf(e)>=0)h=r.indexOf(e);else{let y=Math.min(a.slidesPerGroupSkip,d);h=y+Math.floor((d-y)/a.slidesPerGroup)}if(h>=r.length&&(h=r.length-1),d===s&&!t.params.loop){h!==p&&(t.snapIndex=h,t.emit("snapIndexChange"));return}if(d===s&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=f(d);return}let g=t.grid&&a.grid&&a.grid.rows>1,v;if(t.virtual&&a.virtual.enabled&&a.loop)v=f(d);else if(g){let y=t.slides.filter(x=>x.column===d)[0],_=parseInt(y.getAttribute("data-swiper-slide-index"),10);Number.isNaN(_)&&(_=Math.max(t.slides.indexOf(y),0)),v=Math.floor(_/a.grid.rows)}else if(t.slides[d]){let y=t.slides[d].getAttribute("data-swiper-slide-index");y?v=parseInt(y,10):v=d}else v=d;Object.assign(t,{previousSnapIndex:p,snapIndex:h,previousRealIndex:l,realIndex:v,previousIndex:s,activeIndex:d}),t.initialized&&Pc(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(l!==v&&t.emit("realIndexChange"),t.emit("slideChange"))}function U_(i,t){let e=this,r=e.params,a=i.closest(`.${r.slideClass}, swiper-slide`);!a&&e.isElement&&t&&t.length>1&&t.includes(i)&&[...t.slice(t.indexOf(i)+1,t.length)].forEach(p=>{!a&&p.matches&&p.matches(`.${r.slideClass}, swiper-slide`)&&(a=p)});let s=!1,l;if(a){for(let p=0;p<e.slides.length;p+=1)if(e.slides[p]===a){s=!0,l=p;break}}if(a&&s)e.clickedSlide=a,e.virtual&&e.params.virtual.enabled?e.clickedIndex=parseInt(a.getAttribute("data-swiper-slide-index"),10):e.clickedIndex=l;else{e.clickedSlide=void 0,e.clickedIndex=void 0;return}r.slideToClickedSlide&&e.clickedIndex!==void 0&&e.clickedIndex!==e.activeIndex&&e.slideToClickedSlide()}var V_={updateSize:A_,updateSlides:$_,updateAutoHeight:I_,updateSlidesOffset:D_,updateSlidesProgress:B_,updateProgress:R_,updateSlidesClasses:F_,updateActiveIndex:j_,updateClickedSlide:U_};function H_(i){i===void 0&&(i=this.isHorizontal()?"x":"y");let t=this,{params:e,rtlTranslate:r,translate:a,wrapperEl:s}=t;if(e.virtualTranslate)return r?-a:a;if(e.cssMode)return a;let l=Ff(s,i);return l+=t.cssOverflowAdjustment(),r&&(l=-l),l||0}function Z_(i,t){let e=this,{rtlTranslate:r,params:a,wrapperEl:s,progress:l}=e,p=0,d=0,h=0;e.isHorizontal()?p=r?-i:i:d=i,a.roundLengths&&(p=Math.floor(p),d=Math.floor(d)),e.previousTranslate=e.translate,e.translate=e.isHorizontal()?p:d,a.cssMode?s[e.isHorizontal()?"scrollLeft":"scrollTop"]=e.isHorizontal()?-p:-d:a.virtualTranslate||(e.isHorizontal()?p-=e.cssOverflowAdjustment():d-=e.cssOverflowAdjustment(),s.style.transform=`translate3d(${p}px, ${d}px, ${h}px)`);let f,g=e.maxTranslate()-e.minTranslate();g===0?f=0:f=(i-e.minTranslate())/g,f!==l&&e.updateProgress(i),e.emit("setTranslate",e.translate,t)}function W_(){return-this.snapGrid[0]}function q_(){return-this.snapGrid[this.snapGrid.length-1]}function G_(i,t,e,r,a){i===void 0&&(i=0),t===void 0&&(t=this.params.speed),e===void 0&&(e=!0),r===void 0&&(r=!0);let s=this,{params:l,wrapperEl:p}=s;if(s.animating&&l.preventInteractionOnTransition)return!1;let d=s.minTranslate(),h=s.maxTranslate(),f;if(r&&i>d?f=d:r&&i<h?f=h:f=i,s.updateProgress(f),l.cssMode){let g=s.isHorizontal();if(t===0)p[g?"scrollLeft":"scrollTop"]=-f;else{if(!s.support.smoothScroll)return xc({swiper:s,targetPosition:-f,side:g?"left":"top"}),!0;p.scrollTo({[g?"left":"top"]:-f,behavior:"smooth"})}return!0}return t===0?(s.setTransition(0),s.setTranslate(f),e&&(s.emit("beforeTransitionStart",t,a),s.emit("transitionEnd"))):(s.setTransition(t),s.setTranslate(f),e&&(s.emit("beforeTransitionStart",t,a),s.emit("transitionStart")),s.animating||(s.animating=!0,s.onTranslateToWrapperTransitionEnd||(s.onTranslateToWrapperTransitionEnd=function(g){!s||s.destroyed||g.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onTranslateToWrapperTransitionEnd),s.onTranslateToWrapperTransitionEnd=null,delete s.onTranslateToWrapperTransitionEnd,e&&s.emit("transitionEnd"))}),s.wrapperEl.addEventListener("transitionend",s.onTranslateToWrapperTransitionEnd))),!0}var Y_={getTranslate:H_,setTranslate:Z_,minTranslate:W_,maxTranslate:q_,translateTo:G_};function K_(i,t){let e=this;e.params.cssMode||(e.wrapperEl.style.transitionDuration=`${i}ms`,e.wrapperEl.style.transitionDelay=i===0?"0ms":""),e.emit("setTransition",i,t)}function rg(i){let{swiper:t,runCallbacks:e,direction:r,step:a}=i,{activeIndex:s,previousIndex:l}=t,p=r;if(p||(s>l?p="next":s<l?p="prev":p="reset"),t.emit(`transition${a}`),e&&s!==l){if(p==="reset"){t.emit(`slideResetTransition${a}`);return}t.emit(`slideChangeTransition${a}`),p==="next"?t.emit(`slideNextTransition${a}`):t.emit(`slidePrevTransition${a}`)}}function X_(i,t){i===void 0&&(i=!0);let e=this,{params:r}=e;r.cssMode||(r.autoHeight&&e.updateAutoHeight(),rg({swiper:e,runCallbacks:i,direction:t,step:"Start"}))}function J_(i,t){i===void 0&&(i=!0);let e=this,{params:r}=e;e.animating=!1,!r.cssMode&&(e.setTransition(0),rg({swiper:e,runCallbacks:i,direction:t,step:"End"}))}var Q_={setTransition:K_,transitionStart:X_,transitionEnd:J_};function t1(i,t,e,r,a){i===void 0&&(i=0),t===void 0&&(t=this.params.speed),e===void 0&&(e=!0),typeof i=="string"&&(i=parseInt(i,10));let s=this,l=i;l<0&&(l=0);let{params:p,snapGrid:d,slidesGrid:h,previousIndex:f,activeIndex:g,rtlTranslate:v,wrapperEl:y,enabled:_}=s;if(s.animating&&p.preventInteractionOnTransition||!_&&!r&&!a)return!1;let x=Math.min(s.params.slidesPerGroupSkip,l),P=x+Math.floor((l-x)/s.params.slidesPerGroup);P>=d.length&&(P=d.length-1);let S=-d[P];if(p.normalizeSlideIndex)for(let C=0;C<h.length;C+=1){let z=-Math.floor(S*100),O=Math.floor(h[C]*100),j=Math.floor(h[C+1]*100);typeof h[C+1]<"u"?z>=O&&z<j-(j-O)/2?l=C:z>=O&&z<j&&(l=C+1):z>=O&&(l=C)}if(s.initialized&&l!==g&&(!s.allowSlideNext&&(v?S>s.translate&&S>s.minTranslate():S<s.translate&&S<s.minTranslate())||!s.allowSlidePrev&&S>s.translate&&S>s.maxTranslate()&&(g||0)!==l))return!1;l!==(f||0)&&e&&s.emit("beforeSlideChangeStart"),s.updateProgress(S);let k;if(l>g?k="next":l<g?k="prev":k="reset",v&&-S===s.translate||!v&&S===s.translate)return s.updateActiveIndex(l),p.autoHeight&&s.updateAutoHeight(),s.updateSlidesClasses(),p.effect!=="slide"&&s.setTranslate(S),k!=="reset"&&(s.transitionStart(e,k),s.transitionEnd(e,k)),!1;if(p.cssMode){let C=s.isHorizontal(),z=v?S:-S;if(t===0){let O=s.virtual&&s.params.virtual.enabled;O&&(s.wrapperEl.style.scrollSnapType="none",s._immediateVirtual=!0),O&&!s._cssModeVirtualInitialSet&&s.params.initialSlide>0?(s._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{y[C?"scrollLeft":"scrollTop"]=z})):y[C?"scrollLeft":"scrollTop"]=z,O&&requestAnimationFrame(()=>{s.wrapperEl.style.scrollSnapType="",s._immediateVirtual=!1})}else{if(!s.support.smoothScroll)return xc({swiper:s,targetPosition:z,side:C?"left":"top"}),!0;y.scrollTo({[C?"left":"top"]:z,behavior:"smooth"})}return!0}return s.setTransition(t),s.setTranslate(S),s.updateActiveIndex(l),s.updateSlidesClasses(),s.emit("beforeTransitionStart",t,r),s.transitionStart(e,k),t===0?s.transitionEnd(e,k):s.animating||(s.animating=!0,s.onSlideToWrapperTransitionEnd||(s.onSlideToWrapperTransitionEnd=function(C){!s||s.destroyed||C.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.onSlideToWrapperTransitionEnd=null,delete s.onSlideToWrapperTransitionEnd,s.transitionEnd(e,k))}),s.wrapperEl.addEventListener("transitionend",s.onSlideToWrapperTransitionEnd)),!0}function e1(i,t,e,r){i===void 0&&(i=0),t===void 0&&(t=this.params.speed),e===void 0&&(e=!0),typeof i=="string"&&(i=parseInt(i,10));let a=this,s=a.grid&&a.params.grid&&a.params.grid.rows>1,l=i;if(a.params.loop)if(a.virtual&&a.params.virtual.enabled)l=l+a.virtual.slidesBefore;else{let p;if(s){let v=l*a.params.grid.rows;p=a.slides.filter(y=>y.getAttribute("data-swiper-slide-index")*1===v)[0].column}else p=a.getSlideIndexByData(l);let d=s?Math.ceil(a.slides.length/a.params.grid.rows):a.slides.length,{centeredSlides:h}=a.params,f=a.params.slidesPerView;f==="auto"?f=a.slidesPerViewDynamic():(f=Math.ceil(parseFloat(a.params.slidesPerView,10)),h&&f%2===0&&(f=f+1));let g=d-p<f;if(h&&(g=g||p<Math.ceil(f/2)),g){let v=h?p<a.activeIndex?"prev":"next":p-a.activeIndex-1<a.params.slidesPerView?"next":"prev";a.loopFix({direction:v,slideTo:!0,activeSlideIndex:v==="next"?p+1:p-d+1,slideRealIndex:v==="next"?a.realIndex:void 0})}if(s){let v=l*a.params.grid.rows;l=a.slides.filter(y=>y.getAttribute("data-swiper-slide-index")*1===v)[0].column}else l=a.getSlideIndexByData(l)}return requestAnimationFrame(()=>{a.slideTo(l,t,e,r)}),a}function o1(i,t,e){i===void 0&&(i=this.params.speed),t===void 0&&(t=!0);let r=this,{enabled:a,params:s,animating:l}=r;if(!a)return r;let p=s.slidesPerGroup;s.slidesPerView==="auto"&&s.slidesPerGroup===1&&s.slidesPerGroupAuto&&(p=Math.max(r.slidesPerViewDynamic("current",!0),1));let d=r.activeIndex<s.slidesPerGroupSkip?1:p,h=r.virtual&&s.virtual.enabled;if(s.loop){if(l&&!h&&s.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&s.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+d,i,t,e)}),!0}return s.rewind&&r.isEnd?r.slideTo(0,i,t,e):r.slideTo(r.activeIndex+d,i,t,e)}function i1(i,t,e){i===void 0&&(i=this.params.speed),t===void 0&&(t=!0);let r=this,{params:a,snapGrid:s,slidesGrid:l,rtlTranslate:p,enabled:d,animating:h}=r;if(!d)return r;let f=r.virtual&&a.virtual.enabled;if(a.loop){if(h&&!f&&a.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}let g=p?r.translate:-r.translate;function v(S){return S<0?-Math.floor(Math.abs(S)):Math.floor(S)}let y=v(g),_=s.map(S=>v(S)),x=s[_.indexOf(y)-1];if(typeof x>"u"&&a.cssMode){let S;s.forEach((k,C)=>{y>=k&&(S=C)}),typeof S<"u"&&(x=s[S>0?S-1:S])}let P=0;if(typeof x<"u"&&(P=l.indexOf(x),P<0&&(P=r.activeIndex-1),a.slidesPerView==="auto"&&a.slidesPerGroup===1&&a.slidesPerGroupAuto&&(P=P-r.slidesPerViewDynamic("previous",!0)+1,P=Math.max(P,0))),a.rewind&&r.isBeginning){let S=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(S,i,t,e)}else if(a.loop&&r.activeIndex===0&&a.cssMode)return requestAnimationFrame(()=>{r.slideTo(P,i,t,e)}),!0;return r.slideTo(P,i,t,e)}function r1(i,t,e){i===void 0&&(i=this.params.speed),t===void 0&&(t=!0);let r=this;return r.slideTo(r.activeIndex,i,t,e)}function a1(i,t,e,r){i===void 0&&(i=this.params.speed),t===void 0&&(t=!0),r===void 0&&(r=.5);let a=this,s=a.activeIndex,l=Math.min(a.params.slidesPerGroupSkip,s),p=l+Math.floor((s-l)/a.params.slidesPerGroup),d=a.rtlTranslate?a.translate:-a.translate;if(d>=a.snapGrid[p]){let h=a.snapGrid[p],f=a.snapGrid[p+1];d-h>(f-h)*r&&(s+=a.params.slidesPerGroup)}else{let h=a.snapGrid[p-1],f=a.snapGrid[p];d-h<=(f-h)*r&&(s-=a.params.slidesPerGroup)}return s=Math.max(s,0),s=Math.min(s,a.slidesGrid.length-1),a.slideTo(s,i,t,e)}function s1(){let i=this,{params:t,slidesEl:e}=i,r=t.slidesPerView==="auto"?i.slidesPerViewDynamic():t.slidesPerView,a=i.clickedIndex,s,l=i.isElement?"swiper-slide":`.${t.slideClass}`;if(t.loop){if(i.animating)return;s=parseInt(i.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?a<i.loopedSlides-r/2||a>i.slides.length-i.loopedSlides+r/2?(i.loopFix(),a=i.getSlideIndex(no(e,`${l}[data-swiper-slide-index="${s}"]`)[0]),ma(()=>{i.slideTo(a)})):i.slideTo(a):a>i.slides.length-r?(i.loopFix(),a=i.getSlideIndex(no(e,`${l}[data-swiper-slide-index="${s}"]`)[0]),ma(()=>{i.slideTo(a)})):i.slideTo(a)}else i.slideTo(a)}var n1={slideTo:t1,slideToLoop:e1,slideNext:o1,slidePrev:i1,slideReset:r1,slideToClosest:a1,slideToClickedSlide:s1};function l1(i){let t=this,{params:e,slidesEl:r}=t;if(!e.loop||t.virtual&&t.params.virtual.enabled)return;let a=()=>{no(r,`.${e.slideClass}, swiper-slide`).forEach((f,g)=>{f.setAttribute("data-swiper-slide-index",g)})},s=t.grid&&e.grid&&e.grid.rows>1,l=e.slidesPerGroup*(s?e.grid.rows:1),p=t.slides.length%l!==0,d=s&&t.slides.length%e.grid.rows!==0,h=f=>{for(let g=0;g<f;g+=1){let v=t.isElement?Xi("swiper-slide",[e.slideBlankClass]):Xi("div",[e.slideClass,e.slideBlankClass]);t.slidesEl.append(v)}};if(p){if(e.loopAddBlankSlides){let f=l-t.slides.length%l;h(f),t.recalcSlides(),t.updateSlides()}else ns("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");a()}else if(d){if(e.loopAddBlankSlides){let f=e.grid.rows-t.slides.length%e.grid.rows;h(f),t.recalcSlides(),t.updateSlides()}else ns("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");a()}else a();t.loopFix({slideRealIndex:i,direction:e.centeredSlides?void 0:"next"})}function c1(i){let{slideRealIndex:t,slideTo:e=!0,direction:r,setTranslate:a,activeSlideIndex:s,byController:l,byMousewheel:p}=i===void 0?{}:i,d=this;if(!d.params.loop)return;d.emit("beforeLoopFix");let{slides:h,allowSlidePrev:f,allowSlideNext:g,slidesEl:v,params:y}=d,{centeredSlides:_}=y;if(d.allowSlidePrev=!0,d.allowSlideNext=!0,d.virtual&&y.virtual.enabled){e&&(!y.centeredSlides&&d.snapIndex===0?d.slideTo(d.virtual.slides.length,0,!1,!0):y.centeredSlides&&d.snapIndex<y.slidesPerView?d.slideTo(d.virtual.slides.length+d.snapIndex,0,!1,!0):d.snapIndex===d.snapGrid.length-1&&d.slideTo(d.virtual.slidesBefore,0,!1,!0)),d.allowSlidePrev=f,d.allowSlideNext=g,d.emit("loopFix");return}let x=y.slidesPerView;x==="auto"?x=d.slidesPerViewDynamic():(x=Math.ceil(parseFloat(y.slidesPerView,10)),_&&x%2===0&&(x=x+1));let P=y.slidesPerGroupAuto?x:y.slidesPerGroup,S=P;S%P!==0&&(S+=P-S%P),S+=y.loopAdditionalSlides,d.loopedSlides=S;let k=d.grid&&y.grid&&y.grid.rows>1;h.length<x+S?ns("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):k&&y.grid.fill==="row"&&ns("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");let C=[],z=[],O=d.activeIndex;typeof s>"u"?s=d.getSlideIndex(h.filter(I=>I.classList.contains(y.slideActiveClass))[0]):O=s;let j=r==="next"||!r,Q=r==="prev"||!r,Y=0,G=0,B=k?Math.ceil(h.length/y.grid.rows):h.length,U=(k?h[s].column:s)+(_&&typeof a>"u"?-x/2+.5:0);if(U<S){Y=Math.max(S-U,P);for(let I=0;I<S-U;I+=1){let W=I-Math.floor(I/B)*B;if(k){let q=B-W-1;for(let tt=h.length-1;tt>=0;tt-=1)h[tt].column===q&&C.push(tt)}else C.push(B-W-1)}}else if(U+x>B-S){G=Math.max(U-(B-S*2),P);for(let I=0;I<G;I+=1){let W=I-Math.floor(I/B)*B;k?h.forEach((q,tt)=>{q.column===W&&z.push(tt)}):z.push(W)}}if(d.__preventObserver__=!0,requestAnimationFrame(()=>{d.__preventObserver__=!1}),Q&&C.forEach(I=>{h[I].swiperLoopMoveDOM=!0,v.prepend(h[I]),h[I].swiperLoopMoveDOM=!1}),j&&z.forEach(I=>{h[I].swiperLoopMoveDOM=!0,v.append(h[I]),h[I].swiperLoopMoveDOM=!1}),d.recalcSlides(),y.slidesPerView==="auto"?d.updateSlides():k&&(C.length>0&&Q||z.length>0&&j)&&d.slides.forEach((I,W)=>{d.grid.updateSlide(W,I,d.slides)}),y.watchSlidesProgress&&d.updateSlidesOffset(),e){if(C.length>0&&Q){if(typeof t>"u"){let I=d.slidesGrid[O],W=d.slidesGrid[O+Y]-I;p?d.setTranslate(d.translate-W):(d.slideTo(O+Y,0,!1,!0),a&&(d.touchEventsData.startTranslate=d.touchEventsData.startTranslate-W,d.touchEventsData.currentTranslate=d.touchEventsData.currentTranslate-W))}else if(a){let I=k?C.length/y.grid.rows:C.length;d.slideTo(d.activeIndex+I,0,!1,!0),d.touchEventsData.currentTranslate=d.translate}}else if(z.length>0&&j)if(typeof t>"u"){let I=d.slidesGrid[O],W=d.slidesGrid[O-G]-I;p?d.setTranslate(d.translate-W):(d.slideTo(O-G,0,!1,!0),a&&(d.touchEventsData.startTranslate=d.touchEventsData.startTranslate-W,d.touchEventsData.currentTranslate=d.touchEventsData.currentTranslate-W))}else{let I=k?z.length/y.grid.rows:z.length;d.slideTo(d.activeIndex-I,0,!1,!0)}}if(d.allowSlidePrev=f,d.allowSlideNext=g,d.controller&&d.controller.control&&!l){let I={slideRealIndex:t,direction:r,setTranslate:a,activeSlideIndex:s,byController:!0};Array.isArray(d.controller.control)?d.controller.control.forEach(W=>{!W.destroyed&&W.params.loop&&W.loopFix({...I,slideTo:W.params.slidesPerView===y.slidesPerView?e:!1})}):d.controller.control instanceof d.constructor&&d.controller.control.params.loop&&d.controller.control.loopFix({...I,slideTo:d.controller.control.params.slidesPerView===y.slidesPerView?e:!1})}d.emit("loopFix")}function d1(){let i=this,{params:t,slidesEl:e}=i;if(!t.loop||i.virtual&&i.params.virtual.enabled)return;i.recalcSlides();let r=[];i.slides.forEach(a=>{let s=typeof a.swiperSlideIndex>"u"?a.getAttribute("data-swiper-slide-index")*1:a.swiperSlideIndex;r[s]=a}),i.slides.forEach(a=>{a.removeAttribute("data-swiper-slide-index")}),r.forEach(a=>{e.append(a)}),i.recalcSlides(),i.slideTo(i.realIndex,0)}var p1={loopCreate:l1,loopFix:c1,loopDestroy:d1};function h1(i){let t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;let e=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),e.style.cursor="move",e.style.cursor=i?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function u1(){let i=this;i.params.watchOverflow&&i.isLocked||i.params.cssMode||(i.isElement&&(i.__preventObserver__=!0),i[i.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",i.isElement&&requestAnimationFrame(()=>{i.__preventObserver__=!1}))}var m1={setGrabCursor:h1,unsetGrabCursor:u1};function f1(i,t){t===void 0&&(t=this);function e(r){if(!r||r===be()||r===Le())return null;r.assignedSlot&&(r=r.assignedSlot);let a=r.closest(i);return!a&&!r.getRootNode?null:a||e(r.getRootNode().host)}return e(t)}function Qf(i,t,e){let r=Le(),{params:a}=i,s=a.edgeSwipeDetection,l=a.edgeSwipeThreshold;return s&&(e<=l||e>=r.innerWidth-l)?s==="prevent"?(t.preventDefault(),!0):!1:!0}function g1(i){let t=this,e=be(),r=i;r.originalEvent&&(r=r.originalEvent);let a=t.touchEventsData;if(r.type==="pointerdown"){if(a.pointerId!==null&&a.pointerId!==r.pointerId)return;a.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(a.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){Qf(t,r,r.targetTouches[0].pageX);return}let{params:s,touches:l,enabled:p}=t;if(!p||!s.simulateTouch&&r.pointerType==="mouse"||t.animating&&s.preventInteractionOnTransition)return;!t.animating&&s.cssMode&&s.loop&&t.loopFix();let d=r.target;if(s.touchEventsTarget==="wrapper"&&!t.wrapperEl.contains(d)||"which"in r&&r.which===3||"button"in r&&r.button>0||a.isTouched&&a.isMoved)return;let h=!!s.noSwipingClass&&s.noSwipingClass!=="",f=r.composedPath?r.composedPath():r.path;h&&r.target&&r.target.shadowRoot&&f&&(d=f[0]);let g=s.noSwipingSelector?s.noSwipingSelector:`.${s.noSwipingClass}`,v=!!(r.target&&r.target.shadowRoot);if(s.noSwiping&&(v?f1(g,d):d.closest(g))){t.allowClick=!0;return}if(s.swipeHandler&&!d.closest(s.swipeHandler))return;l.currentX=r.pageX,l.currentY=r.pageY;let y=l.currentX,_=l.currentY;if(!Qf(t,r,y))return;Object.assign(a,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),l.startX=y,l.startY=_,a.touchStartTime=Ai(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,s.threshold>0&&(a.allowThresholdMove=!1);let x=!0;d.matches(a.focusableElements)&&(x=!1,d.nodeName==="SELECT"&&(a.isTouched=!1)),e.activeElement&&e.activeElement.matches(a.focusableElements)&&e.activeElement!==d&&e.activeElement.blur();let P=x&&t.allowTouchMove&&s.touchStartPreventDefault;(s.touchStartForcePreventDefault||P)&&!d.isContentEditable&&r.preventDefault(),s.freeMode&&s.freeMode.enabled&&t.freeMode&&t.animating&&!s.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",r)}function b1(i){let t=be(),e=this,r=e.touchEventsData,{params:a,touches:s,rtlTranslate:l,enabled:p}=e;if(!p||!a.simulateTouch&&i.pointerType==="mouse")return;let d=i;if(d.originalEvent&&(d=d.originalEvent),d.type==="pointermove"&&(r.touchId!==null||d.pointerId!==r.pointerId))return;let h;if(d.type==="touchmove"){if(h=[...d.changedTouches].filter(j=>j.identifier===r.touchId)[0],!h||h.identifier!==r.touchId)return}else h=d;if(!r.isTouched){r.startMoving&&r.isScrolling&&e.emit("touchMoveOpposite",d);return}let f=h.pageX,g=h.pageY;if(d.preventedByNestedSwiper){s.startX=f,s.startY=g;return}if(!e.allowTouchMove){d.target.matches(r.focusableElements)||(e.allowClick=!1),r.isTouched&&(Object.assign(s,{startX:f,startY:g,currentX:f,currentY:g}),r.touchStartTime=Ai());return}if(a.touchReleaseOnEdges&&!a.loop){if(e.isVertical()){if(g<s.startY&&e.translate<=e.maxTranslate()||g>s.startY&&e.translate>=e.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else if(f<s.startX&&e.translate<=e.maxTranslate()||f>s.startX&&e.translate>=e.minTranslate())return}if(t.activeElement&&d.target===t.activeElement&&d.target.matches(r.focusableElements)){r.isMoved=!0,e.allowClick=!1;return}r.allowTouchCallbacks&&e.emit("touchMove",d),s.previousX=s.currentX,s.previousY=s.currentY,s.currentX=f,s.currentY=g;let v=s.currentX-s.startX,y=s.currentY-s.startY;if(e.params.threshold&&Math.sqrt(v**2+y**2)<e.params.threshold)return;if(typeof r.isScrolling>"u"){let j;e.isHorizontal()&&s.currentY===s.startY||e.isVertical()&&s.currentX===s.startX?r.isScrolling=!1:v*v+y*y>=25&&(j=Math.atan2(Math.abs(y),Math.abs(v))*180/Math.PI,r.isScrolling=e.isHorizontal()?j>a.touchAngle:90-j>a.touchAngle)}if(r.isScrolling&&e.emit("touchMoveOpposite",d),typeof r.startMoving>"u"&&(s.currentX!==s.startX||s.currentY!==s.startY)&&(r.startMoving=!0),r.isScrolling){r.isTouched=!1;return}if(!r.startMoving)return;e.allowClick=!1,!a.cssMode&&d.cancelable&&d.preventDefault(),a.touchMoveStopPropagation&&!a.nested&&d.stopPropagation();let _=e.isHorizontal()?v:y,x=e.isHorizontal()?s.currentX-s.previousX:s.currentY-s.previousY;a.oneWayMovement&&(_=Math.abs(_)*(l?1:-1),x=Math.abs(x)*(l?1:-1)),s.diff=_,_*=a.touchRatio,l&&(_=-_,x=-x);let P=e.touchesDirection;e.swipeDirection=_>0?"prev":"next",e.touchesDirection=x>0?"prev":"next";let S=e.params.loop&&!a.cssMode,k=e.touchesDirection==="next"&&e.allowSlideNext||e.touchesDirection==="prev"&&e.allowSlidePrev;if(!r.isMoved){if(S&&k&&e.loopFix({direction:e.swipeDirection}),r.startTranslate=e.getTranslate(),e.setTransition(0),e.animating){let j=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0});e.wrapperEl.dispatchEvent(j)}r.allowMomentumBounce=!1,a.grabCursor&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!0),e.emit("sliderFirstMove",d)}let C;if(new Date().getTime(),r.isMoved&&r.allowThresholdMove&&P!==e.touchesDirection&&S&&k&&Math.abs(_)>=1){Object.assign(s,{startX:f,startY:g,currentX:f,currentY:g,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}e.emit("sliderMove",d),r.isMoved=!0,r.currentTranslate=_+r.startTranslate;let z=!0,O=a.resistanceRatio;if(a.touchReleaseOnEdges&&(O=0),_>0?(S&&k&&!C&&r.allowThresholdMove&&r.currentTranslate>(a.centeredSlides?e.minTranslate()-e.slidesSizesGrid[e.activeIndex+1]:e.minTranslate())&&e.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>e.minTranslate()&&(z=!1,a.resistance&&(r.currentTranslate=e.minTranslate()-1+(-e.minTranslate()+r.startTranslate+_)**O))):_<0&&(S&&k&&!C&&r.allowThresholdMove&&r.currentTranslate<(a.centeredSlides?e.maxTranslate()+e.slidesSizesGrid[e.slidesSizesGrid.length-1]:e.maxTranslate())&&e.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:e.slides.length-(a.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(parseFloat(a.slidesPerView,10)))}),r.currentTranslate<e.maxTranslate()&&(z=!1,a.resistance&&(r.currentTranslate=e.maxTranslate()+1-(e.maxTranslate()-r.startTranslate-_)**O))),z&&(d.preventedByNestedSwiper=!0),!e.allowSlideNext&&e.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!e.allowSlidePrev&&e.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!e.allowSlidePrev&&!e.allowSlideNext&&(r.currentTranslate=r.startTranslate),a.threshold>0)if(Math.abs(_)>a.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,s.startX=s.currentX,s.startY=s.currentY,r.currentTranslate=r.startTranslate,s.diff=e.isHorizontal()?s.currentX-s.startX:s.currentY-s.startY;return}}else{r.currentTranslate=r.startTranslate;return}!a.followFinger||a.cssMode||((a.freeMode&&a.freeMode.enabled&&e.freeMode||a.watchSlidesProgress)&&(e.updateActiveIndex(),e.updateSlidesClasses()),a.freeMode&&a.freeMode.enabled&&e.freeMode&&e.freeMode.onTouchMove(),e.updateProgress(r.currentTranslate),e.setTranslate(r.currentTranslate))}function v1(i){let t=this,e=t.touchEventsData,r=i;r.originalEvent&&(r=r.originalEvent);let a;if(r.type==="touchend"||r.type==="touchcancel"){if(a=[...r.changedTouches].filter(z=>z.identifier===e.touchId)[0],!a||a.identifier!==e.touchId)return}else{if(e.touchId!==null||r.pointerId!==e.pointerId)return;a=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(t.browser.isSafari||t.browser.isWebView)))return;e.pointerId=null,e.touchId=null;let{params:s,touches:l,rtlTranslate:p,slidesGrid:d,enabled:h}=t;if(!h||!s.simulateTouch&&r.pointerType==="mouse")return;if(e.allowTouchCallbacks&&t.emit("touchEnd",r),e.allowTouchCallbacks=!1,!e.isTouched){e.isMoved&&s.grabCursor&&t.setGrabCursor(!1),e.isMoved=!1,e.startMoving=!1;return}s.grabCursor&&e.isMoved&&e.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);let f=Ai(),g=f-e.touchStartTime;if(t.allowClick){let z=r.path||r.composedPath&&r.composedPath();t.updateClickedSlide(z&&z[0]||r.target,z),t.emit("tap click",r),g<300&&f-e.lastClickTime<300&&t.emit("doubleTap doubleClick",r)}if(e.lastClickTime=Ai(),ma(()=>{t.destroyed||(t.allowClick=!0)}),!e.isTouched||!e.isMoved||!t.swipeDirection||l.diff===0&&!e.loopSwapReset||e.currentTranslate===e.startTranslate&&!e.loopSwapReset){e.isTouched=!1,e.isMoved=!1,e.startMoving=!1;return}e.isTouched=!1,e.isMoved=!1,e.startMoving=!1;let v;if(s.followFinger?v=p?t.translate:-t.translate:v=-e.currentTranslate,s.cssMode)return;if(s.freeMode&&s.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:v});return}let y=v>=-t.maxTranslate()&&!t.params.loop,_=0,x=t.slidesSizesGrid[0];for(let z=0;z<d.length;z+=z<s.slidesPerGroupSkip?1:s.slidesPerGroup){let O=z<s.slidesPerGroupSkip-1?1:s.slidesPerGroup;typeof d[z+O]<"u"?(y||v>=d[z]&&v<d[z+O])&&(_=z,x=d[z+O]-d[z]):(y||v>=d[z])&&(_=z,x=d[d.length-1]-d[d.length-2])}let P=null,S=null;s.rewind&&(t.isBeginning?S=s.virtual&&s.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(P=0));let k=(v-d[_])/x,C=_<s.slidesPerGroupSkip-1?1:s.slidesPerGroup;if(g>s.longSwipesMs){if(!s.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(k>=s.longSwipesRatio?t.slideTo(s.rewind&&t.isEnd?P:_+C):t.slideTo(_)),t.swipeDirection==="prev"&&(k>1-s.longSwipesRatio?t.slideTo(_+C):S!==null&&k<0&&Math.abs(k)>s.longSwipesRatio?t.slideTo(S):t.slideTo(_))}else{if(!s.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(r.target===t.navigation.nextEl||r.target===t.navigation.prevEl)?r.target===t.navigation.nextEl?t.slideTo(_+C):t.slideTo(_):(t.swipeDirection==="next"&&t.slideTo(P!==null?P:_+C),t.swipeDirection==="prev"&&t.slideTo(S!==null?S:_))}}function tg(){let i=this,{params:t,el:e}=i;if(e&&e.offsetWidth===0)return;t.breakpoints&&i.setBreakpoint();let{allowSlideNext:r,allowSlidePrev:a,snapGrid:s}=i,l=i.virtual&&i.params.virtual.enabled;i.allowSlideNext=!0,i.allowSlidePrev=!0,i.updateSize(),i.updateSlides(),i.updateSlidesClasses();let p=l&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&i.isEnd&&!i.isBeginning&&!i.params.centeredSlides&&!p?i.slideTo(i.slides.length-1,0,!1,!0):i.params.loop&&!l?i.slideToLoop(i.realIndex,0,!1,!0):i.slideTo(i.activeIndex,0,!1,!0),i.autoplay&&i.autoplay.running&&i.autoplay.paused&&(clearTimeout(i.autoplay.resizeTimeout),i.autoplay.resizeTimeout=setTimeout(()=>{i.autoplay&&i.autoplay.running&&i.autoplay.paused&&i.autoplay.resume()},500)),i.allowSlidePrev=a,i.allowSlideNext=r,i.params.watchOverflow&&s!==i.snapGrid&&i.checkOverflow()}function y1(i){let t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&i.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(i.stopPropagation(),i.stopImmediatePropagation())))}function w1(){let i=this,{wrapperEl:t,rtlTranslate:e,enabled:r}=i;if(!r)return;i.previousTranslate=i.translate,i.isHorizontal()?i.translate=-t.scrollLeft:i.translate=-t.scrollTop,i.translate===0&&(i.translate=0),i.updateActiveIndex(),i.updateSlidesClasses();let a,s=i.maxTranslate()-i.minTranslate();s===0?a=0:a=(i.translate-i.minTranslate())/s,a!==i.progress&&i.updateProgress(e?-i.translate:i.translate),i.emit("setTranslate",i.translate,!1)}function _1(i){let t=this;An(t,i.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function x1(){let i=this;i.documentTouchHandlerProceeded||(i.documentTouchHandlerProceeded=!0,i.params.touchReleaseOnEdges&&(i.el.style.touchAction="auto"))}var ag=(i,t)=>{let e=be(),{params:r,el:a,wrapperEl:s,device:l}=i,p=!!r.nested,d=t==="on"?"addEventListener":"removeEventListener",h=t;e[d]("touchstart",i.onDocumentTouchStart,{passive:!1,capture:p}),a[d]("touchstart",i.onTouchStart,{passive:!1}),a[d]("pointerdown",i.onTouchStart,{passive:!1}),e[d]("touchmove",i.onTouchMove,{passive:!1,capture:p}),e[d]("pointermove",i.onTouchMove,{passive:!1,capture:p}),e[d]("touchend",i.onTouchEnd,{passive:!0}),e[d]("pointerup",i.onTouchEnd,{passive:!0}),e[d]("pointercancel",i.onTouchEnd,{passive:!0}),e[d]("touchcancel",i.onTouchEnd,{passive:!0}),e[d]("pointerout",i.onTouchEnd,{passive:!0}),e[d]("pointerleave",i.onTouchEnd,{passive:!0}),e[d]("contextmenu",i.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&a[d]("click",i.onClick,!0),r.cssMode&&s[d]("scroll",i.onScroll),r.updateOnWindowResize?i[h](l.ios||l.android?"resize orientationchange observerUpdate":"resize observerUpdate",tg,!0):i[h]("observerUpdate",tg,!0),a[d]("load",i.onLoad,{capture:!0})};function k1(){let i=this,{params:t}=i;i.onTouchStart=g1.bind(i),i.onTouchMove=b1.bind(i),i.onTouchEnd=v1.bind(i),i.onDocumentTouchStart=x1.bind(i),t.cssMode&&(i.onScroll=w1.bind(i)),i.onClick=y1.bind(i),i.onLoad=_1.bind(i),ag(i,"on")}function C1(){ag(this,"off")}var L1={attachEvents:k1,detachEvents:C1},eg=(i,t)=>i.grid&&t.grid&&t.grid.rows>1;function z1(){let i=this,{realIndex:t,initialized:e,params:r,el:a}=i,s=r.breakpoints;if(!s||s&&Object.keys(s).length===0)return;let l=i.getBreakpoint(s,i.params.breakpointsBase,i.el);if(!l||i.currentBreakpoint===l)return;let p=(l in s?s[l]:void 0)||i.originalParams,d=eg(i,r),h=eg(i,p),f=r.enabled;d&&!h?(a.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),i.emitContainerClasses()):!d&&h&&(a.classList.add(`${r.containerModifierClass}grid`),(p.grid.fill&&p.grid.fill==="column"||!p.grid.fill&&r.grid.fill==="column")&&a.classList.add(`${r.containerModifierClass}grid-column`),i.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach(P=>{if(typeof p[P]>"u")return;let S=r[P]&&r[P].enabled,k=p[P]&&p[P].enabled;S&&!k&&i[P].disable(),!S&&k&&i[P].enable()});let g=p.direction&&p.direction!==r.direction,v=r.loop&&(p.slidesPerView!==r.slidesPerView||g),y=r.loop;g&&e&&i.changeDirection(),so(i.params,p);let _=i.params.enabled,x=i.params.loop;Object.assign(i,{allowTouchMove:i.params.allowTouchMove,allowSlideNext:i.params.allowSlideNext,allowSlidePrev:i.params.allowSlidePrev}),f&&!_?i.disable():!f&&_&&i.enable(),i.currentBreakpoint=l,i.emit("_beforeBreakpoint",p),e&&(v?(i.loopDestroy(),i.loopCreate(t),i.updateSlides()):!y&&x?(i.loopCreate(t),i.updateSlides()):y&&!x&&i.loopDestroy()),i.emit("breakpoint",p)}function S1(i,t,e){if(t===void 0&&(t="window"),!i||t==="container"&&!e)return;let r=!1,a=Le(),s=t==="window"?a.innerHeight:e.clientHeight,l=Object.keys(i).map(p=>{if(typeof p=="string"&&p.indexOf("@")===0){let d=parseFloat(p.substr(1));return{value:s*d,point:p}}return{value:p,point:p}});l.sort((p,d)=>parseInt(p.value,10)-parseInt(d.value,10));for(let p=0;p<l.length;p+=1){let{point:d,value:h}=l[p];t==="window"?a.matchMedia(`(min-width: ${h}px)`).matches&&(r=d):h<=e.clientWidth&&(r=d)}return r||"max"}var T1={setBreakpoint:z1,getBreakpoint:S1};function P1(i,t){let e=[];return i.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(a=>{r[a]&&e.push(t+a)}):typeof r=="string"&&e.push(t+r)}),e}function E1(){let i=this,{classNames:t,params:e,rtl:r,el:a,device:s}=i,l=P1(["initialized",e.direction,{"free-mode":i.params.freeMode&&e.freeMode.enabled},{autoheight:e.autoHeight},{rtl:r},{grid:e.grid&&e.grid.rows>1},{"grid-column":e.grid&&e.grid.rows>1&&e.grid.fill==="column"},{android:s.android},{ios:s.ios},{"css-mode":e.cssMode},{centered:e.cssMode&&e.centeredSlides},{"watch-progress":e.watchSlidesProgress}],e.containerModifierClass);t.push(...l),a.classList.add(...t),i.emitContainerClasses()}function O1(){let i=this,{el:t,classNames:e}=i;t.classList.remove(...e),i.emitContainerClasses()}var M1={addClasses:E1,removeClasses:O1};function A1(){let i=this,{isLocked:t,params:e}=i,{slidesOffsetBefore:r}=e;if(r){let a=i.slides.length-1,s=i.slidesGrid[a]+i.slidesSizesGrid[a]+r*2;i.isLocked=i.size>s}else i.isLocked=i.snapGrid.length===1;e.allowSlideNext===!0&&(i.allowSlideNext=!i.isLocked),e.allowSlidePrev===!0&&(i.allowSlidePrev=!i.isLocked),t&&t!==i.isLocked&&(i.isEnd=!1),t!==i.isLocked&&i.emit(i.isLocked?"lock":"unlock")}var $1={checkOverflow:A1},og={init:!0,direction:"horizontal",oneWayMovement:!1,touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function I1(i,t){return function(e){e===void 0&&(e={});let r=Object.keys(e)[0],a=e[r];if(typeof a!="object"||a===null){so(t,e);return}if(i[r]===!0&&(i[r]={enabled:!0}),r==="navigation"&&i[r]&&i[r].enabled&&!i[r].prevEl&&!i[r].nextEl&&(i[r].auto=!0),["pagination","scrollbar"].indexOf(r)>=0&&i[r]&&i[r].enabled&&!i[r].el&&(i[r].auto=!0),!(r in i&&"enabled"in a)){so(t,e);return}typeof i[r]=="object"&&!("enabled"in i[r])&&(i[r].enabled=!0),i[r]||(i[r]={enabled:!1}),so(t,e)}}var Sc={eventsEmitter:M_,update:V_,translate:Y_,transition:Q_,slide:n1,loop:p1,grabCursor:m1,events:L1,breakpoints:T1,checkOverflow:$1,classes:M1},Tc={},ba=class i{constructor(){let t,e;for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];a.length===1&&a[0].constructor&&Object.prototype.toString.call(a[0]).slice(8,-1)==="Object"?e=a[0]:[t,e]=a,e||(e={}),e=so({},e),t&&!e.el&&(e.el=t);let l=be();if(e.el&&typeof e.el=="string"&&l.querySelectorAll(e.el).length>1){let f=[];return l.querySelectorAll(e.el).forEach(g=>{let v=so({},e,{el:g});f.push(new i(v))}),f}let p=this;p.__swiper__=!0,p.support=ig(),p.device=S_({userAgent:e.userAgent}),p.browser=P_(),p.eventsListeners={},p.eventsAnyListeners=[],p.modules=[...p.__modules__],e.modules&&Array.isArray(e.modules)&&p.modules.push(...e.modules);let d={};p.modules.forEach(f=>{f({params:e,swiper:p,extendParams:I1(e,d),on:p.on.bind(p),once:p.once.bind(p),off:p.off.bind(p),emit:p.emit.bind(p)})});let h=so({},og,d);return p.params=so({},h,Tc,e),p.originalParams=so({},p.params),p.passedParams=so({},e),p.params&&p.params.on&&Object.keys(p.params.on).forEach(f=>{p.on(f,p.params.on[f])}),p.params&&p.params.onAny&&p.onAny(p.params.onAny),Object.assign(p,{enabled:p.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return p.params.direction==="horizontal"},isVertical(){return p.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:p.params.allowSlideNext,allowSlidePrev:p.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:p.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:p.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),p.emit("_swiper"),p.params.init&&p.init(),p}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){let{slidesEl:e,params:r}=this,a=no(e,`.${r.slideClass}, swiper-slide`),s=fa(a[0]);return fa(t)-s}getSlideIndexByData(t){return this.getSlideIndex(this.slides.filter(e=>e.getAttribute("data-swiper-slide-index")*1===t)[0])}recalcSlides(){let t=this,{slidesEl:e,params:r}=t;t.slides=no(e,`.${r.slideClass}, swiper-slide`)}enable(){let t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){let t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,e){let r=this;t=Math.min(Math.max(t,0),1);let a=r.minTranslate(),s=(r.maxTranslate()-a)*t+a;r.translateTo(s,typeof e>"u"?0:e),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){let t=this;if(!t.params._emitClasses||!t.el)return;let e=t.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",e.join(" "))}getSlideClasses(t){let e=this;return e.destroyed?"":t.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(e.params.slideClass)===0).join(" ")}emitSlidesClasses(){let t=this;if(!t.params._emitClasses||!t.el)return;let e=[];t.slides.forEach(r=>{let a=t.getSlideClasses(r);e.push({slideEl:r,classNames:a}),t.emit("_slideClass",r,a)}),t.emit("_slideClasses",e)}slidesPerViewDynamic(t,e){t===void 0&&(t="current"),e===void 0&&(e=!1);let r=this,{params:a,slides:s,slidesGrid:l,slidesSizesGrid:p,size:d,activeIndex:h}=r,f=1;if(typeof a.slidesPerView=="number")return a.slidesPerView;if(a.centeredSlides){let g=s[h]?s[h].swiperSlideSize:0,v;for(let y=h+1;y<s.length;y+=1)s[y]&&!v&&(g+=s[y].swiperSlideSize,f+=1,g>d&&(v=!0));for(let y=h-1;y>=0;y-=1)s[y]&&!v&&(g+=s[y].swiperSlideSize,f+=1,g>d&&(v=!0))}else if(t==="current")for(let g=h+1;g<s.length;g+=1)(e?l[g]+p[g]-l[h]<d:l[g]-l[h]<d)&&(f+=1);else for(let g=h-1;g>=0;g-=1)l[h]-l[g]<d&&(f+=1);return f}update(){let t=this;if(!t||t.destroyed)return;let{snapGrid:e,params:r}=t;r.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(l=>{l.complete&&An(t,l)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function a(){let l=t.rtlTranslate?t.translate*-1:t.translate,p=Math.min(Math.max(l,t.maxTranslate()),t.minTranslate());t.setTranslate(p),t.updateActiveIndex(),t.updateSlidesClasses()}let s;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)a(),r.autoHeight&&t.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&t.isEnd&&!r.centeredSlides){let l=t.virtual&&r.virtual.enabled?t.virtual.slides:t.slides;s=t.slideTo(l.length-1,0,!1,!0)}else s=t.slideTo(t.activeIndex,0,!1,!0);s||a()}r.watchOverflow&&e!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,e){e===void 0&&(e=!0);let r=this,a=r.params.direction;return t||(t=a==="horizontal"?"vertical":"horizontal"),t===a||t!=="horizontal"&&t!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${a}`),r.el.classList.add(`${r.params.containerModifierClass}${t}`),r.emitContainerClasses(),r.params.direction=t,r.slides.forEach(s=>{t==="vertical"?s.style.width="":s.style.height=""}),r.emit("changeDirection"),e&&r.update()),r}changeLanguageDirection(t){let e=this;e.rtl&&t==="rtl"||!e.rtl&&t==="ltr"||(e.rtl=t==="rtl",e.rtlTranslate=e.params.direction==="horizontal"&&e.rtl,e.rtl?(e.el.classList.add(`${e.params.containerModifierClass}rtl`),e.el.dir="rtl"):(e.el.classList.remove(`${e.params.containerModifierClass}rtl`),e.el.dir="ltr"),e.update())}mount(t){let e=this;if(e.mounted)return!0;let r=t||e.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=e,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName==="SWIPER-CONTAINER"&&(e.isElement=!0);let a=()=>`.${(e.params.wrapperClass||"").trim().split(" ").join(".")}`,s=r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(a()):no(r,a())[0];return!s&&e.params.createElements&&(s=Xi("div",e.params.wrapperClass),r.append(s),no(r,`.${e.params.slideClass}`).forEach(l=>{s.append(l)})),Object.assign(e,{el:r,wrapperEl:s,slidesEl:e.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:s,hostEl:e.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||$i(r,"direction")==="rtl",rtlTranslate:e.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||$i(r,"direction")==="rtl"),wrongRTL:$i(s,"display")==="-webkit-box"}),!0}init(t){let e=this;if(e.initialized||e.mount(t)===!1)return e;e.emit("beforeInit"),e.params.breakpoints&&e.setBreakpoint(),e.addClasses(),e.updateSize(),e.updateSlides(),e.params.watchOverflow&&e.checkOverflow(),e.params.grabCursor&&e.enabled&&e.setGrabCursor(),e.params.loop&&e.virtual&&e.params.virtual.enabled?e.slideTo(e.params.initialSlide+e.virtual.slidesBefore,0,e.params.runCallbacksOnInit,!1,!0):e.slideTo(e.params.initialSlide,0,e.params.runCallbacksOnInit,!1,!0),e.params.loop&&e.loopCreate(),e.attachEvents();let r=[...e.el.querySelectorAll('[loading="lazy"]')];return e.isElement&&r.push(...e.hostEl.querySelectorAll('[loading="lazy"]')),r.forEach(a=>{a.complete?An(e,a):a.addEventListener("load",s=>{An(e,s.target)})}),Pc(e),e.initialized=!0,Pc(e),e.emit("init"),e.emit("afterInit"),e}destroy(t,e){t===void 0&&(t=!0),e===void 0&&(e=!0);let r=this,{params:a,el:s,wrapperEl:l,slides:p}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),a.loop&&r.loopDestroy(),e&&(r.removeClasses(),s.removeAttribute("style"),l.removeAttribute("style"),p&&p.length&&p.forEach(d=>{d.classList.remove(a.slideVisibleClass,a.slideFullyVisibleClass,a.slideActiveClass,a.slideNextClass,a.slidePrevClass),d.removeAttribute("style"),d.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(d=>{r.off(d)}),t!==!1&&(r.el.swiper=null,Rf(r)),r.destroyed=!0),null}static extendDefaults(t){so(Tc,t)}static get extendedDefaults(){return Tc}static get defaults(){return og}static installModule(t){i.prototype.__modules__||(i.prototype.__modules__=[]);let e=i.prototype.__modules__;typeof t=="function"&&e.indexOf(t)<0&&e.push(t)}static use(t){return Array.isArray(t)?(t.forEach(e=>i.installModule(e)),i):(i.installModule(t),i)}};Object.keys(Sc).forEach(i=>{Object.keys(Sc[i]).forEach(t=>{ba.prototype[t]=Sc[i][t]})});ba.use([E_,O_]);var D1=Object.defineProperty,B1=Object.getOwnPropertyDescriptor,Yt=(i,t,e,r)=>{for(var a=r>1?void 0:r?B1(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&D1(t,e,a),a},Ec=class extends R{constructor(){super(...arguments),this.loop=!1,this.navigation=!1,this.pagination=!1,this.scrollbar=!1,this.autoplay=!1,this.autoHeight=!1,this.slidesPerView=1,this.speed=300,this.threshold=5,this.spaceBetween=0,this.freeMode=!1,this.grabCursor=!1,this.effect="slide",this.centeredSlides=!1,this.breakpoints=void 0,this.slidesPerGroup=1,this.direction="horizontal",this.mouseDragging=!0,this.activeSlide=0,this.slideSlots=0,this.localize=new et(this)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"))}firstUpdated(){this.initializeSlides()}handleMouseDraggingChange(){this.slider&&this.slider.destroy(),this.initializeSlides()}getSlides({excludeClones:t=!0}={}){return[...this.children].filter(e=>this.isCarouselItem(e)&&(!t||!e.hasAttribute("data-clone")))}isCarouselItem(t){return t instanceof Element&&t.tagName.toLowerCase()==="awc-carousel-item"}render(){let t=this.localize.dir()==="ltr";return this.calcSlideSlots(),E`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${Z({carousel__wrapper:!0})}"
          aria-atomic="true"
          tabindex="0"
        >
          <slot></slot>
          ${Array.from({length:this.slideSlots}).map((e,r)=>`
          <awc-carousel-item part="carousel__slide carousel__slide-${r}">
            <slot name="carousel__slide-${r}"></slot>
          </awc-carousel-item>
          `).join("")}
        </div>
      </div>
      ${this.navigation?E`
            <div part="navigation" class="carousel__navigation">
              <button
                part="navigation-button navigation-button--previous"
                class="${Z({"navigation-button":!0,"navigation-button--previous":!0})}"
                aria-label="${this.localize.term("previousSlide")}"
                aria-controls="scroll-container"
              >
                <slot name="previous-icon">
                  <awc-icon library="system" name="${t?"chevron-left":"chevron-right"}"></awc-icon>
                </slot>
              </button>

              <button
                part="navigation-button navigation-button--next"
                class=${Z({"navigation-button":!0,"navigation-button--next":!0})}
                aria-label="${this.localize.term("nextSlide")}"
                aria-controls="scroll-container"
              >
                <slot name="next-icon">
                  <awc-icon library="system" name="${t?"chevron-right":"chevron-left"}"></awc-icon>
                </slot>
              </button>
            </div>
          `:""}
      ${this.pagination!==!1?E`<div
            part="pagination"
            role="tablist"
            class="carousel__pagination"
            aria-controls="scroll-container"
          ></div>`:""}
      ${this.scrollbar?E`<div
            part="scrollbar"
            role="scrollbar"
            class="carousel__scrollbar"
            aria-controls="scroll-container"
            aria-valuenow="0"
          ></div>`:""}
    `}initializeSlides(){this.slider=new ba(this.container,{modules:[Vf,Hf,Zf,Wf,Yf,Uf,qf,Gf],simulateTouch:this.mouseDragging,direction:this.direction,wrapperClass:"carousel__wrapper",containerModifierClass:"carousel--",touchEventsTarget:"container",slideClass:"carousel__slide",slidesPerView:this.slidesPerView,slidesPerGroup:this.slidesPerGroup,grabCursor:this.grabCursor,loop:this.loop,autoHeight:this.autoHeight,speed:this.speed,threshold:this.threshold,spaceBetween:this.spaceBetween,freeMode:this.freeMode?{enabled:!0}:void 0,effect:this.effect,centeredSlides:this.autoHeight,breakpoints:this.breakpoints?JSON.parse(this.breakpoints):void 0,keyboard:{enabled:!0,onlyInViewport:!0},autoplay:this.autoplay!==!1?this.autoplay===!0?!0:typeof this.autoplay!="number"?{delay:this.autoplay===""?3e3:this.autoplay}:{...JSON.parse(this.autoplay)}:!1,navigation:{enabled:this.navigation,nextEl:this.nextButton,prevEl:this.previousButton,disabledClass:"navigation-button--disabled",lockClass:"navigation-button--lock",hiddenClass:"navigation-button--hidden",navigationDisabledClass:"navigation--disabled"},pagination:{enabled:this.pagination!==!1,type:this.pagination===""?"bullets":this.pagination,el:this.paginationContainer,bulletActiveClass:"pagination-item--active",currentClass:"pagination-item--current",bulletClass:"pagination-item",clickableClass:"pagination-item--clickable",hiddenClass:"carousel__pagination--hidden",lockClass:"carousel__pagination--lock",horizontalClass:"carousel__pagination--horizontal",verticalClass:"carousel__pagination--vertical",bulletElement:"button",modifierClass:"carousel__pagination-",paginationDisabledClass:"carousel__pagination--disabled",progressbarFillClass:"carousel__progressbar--fill",progressbarOppositeClass:"carousel__progressbar--opposite",totalClass:"pagination-item--total"},scrollbar:{enabled:this.scrollbar,el:this.scrollContainer,scrollbarDisabledClass:"scrollbar--disabled"},observer:!0,observeParents:!0,observeSlideChildren:this.slideSlots>0,onAny:(t,...e)=>{if(t==="_swiper"){let s=e[0];s.isElement=!0}t==="observerUpdate"&&this.calcSlideSlots();let r=`awc-${(s=>s.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[\s_]+/g,"-").toLowerCase())(t)}`,a=new CustomEvent(r,{detail:e,bubbles:t!=="hashChange",cancelable:!0});this.dispatchEvent(a)}})}calcSlideSlots(){let t=this.slideSlots||0,e=[...this.querySelectorAll("[slot^=slide-]")].map(r=>parseInt(r?.getAttribute("slot").split("carousel__slide-")[1],10));if(this.slideSlots=e.length?Math.max(...e)+1:0,this.slideSlots>t)for(let r=t;r<this.slideSlots;r+=1){let a=document.createElement("awc-carousel-item");a.setAttribute("part",`carousel__slide carousel__slide-${r+1}`);let s=document.createElement("slot");s.setAttribute("name",`carousel__slide-${r+1}`),a.appendChild(s),this.scrollContainer.appendChild(a)}else if(this.slideSlots<t){let r=this.slider?.slides||[];for(let a=r.length-1;a>=0;a-=1)a>this.slideSlots&&r[a].remove()}}};Ec.styles=Jf,Ec.dependencies={"awc-icon":nt,"awc-carousel-item":zr};var jt=Ec;Yt([u({type:Boolean,reflect:!0})],jt.prototype,"loop",2);Yt([u({type:Boolean,reflect:!0})],jt.prototype,"navigation",2);Yt([u({reflect:!0})],jt.prototype,"pagination",2);Yt([u({type:Boolean,reflect:!0})],jt.prototype,"scrollbar",2);Yt([u({reflect:!0})],jt.prototype,"autoplay",2);Yt([u({type:Boolean,reflect:!0,attribute:"auto-height"})],jt.prototype,"autoHeight",2);Yt([u({attribute:"slides-per-view"})],jt.prototype,"slidesPerView",2);Yt([u({type:Number,reflect:!0})],jt.prototype,"speed",2);Yt([u({type:Number,reflect:!0})],jt.prototype,"threshold",2);Yt([u({reflect:!0,attribute:"space-between"})],jt.prototype,"spaceBetween",2);Yt([u({type:Boolean,reflect:!0,attribute:"free-mode"})],jt.prototype,"freeMode",2);Yt([u({type:Boolean,reflect:!0,attribute:"grab-cursor"})],jt.prototype,"grabCursor",2);Yt([u({type:String,reflect:!0})],jt.prototype,"effect",2);Yt([u({type:Boolean,reflect:!0,attribute:"centered-slides"})],jt.prototype,"centeredSlides",2);Yt([u({reflect:!0})],jt.prototype,"breakpoints",2);Yt([u({type:Number,attribute:"slides-per-group"})],jt.prototype,"slidesPerGroup",2);Yt([u()],jt.prototype,"direction",2);Yt([u({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],jt.prototype,"mouseDragging",2);Yt([F(".carousel")],jt.prototype,"container",2);Yt([F(".carousel__wrapper")],jt.prototype,"scrollContainer",2);Yt([F(".carousel__pagination")],jt.prototype,"paginationContainer",2);Yt([F(".navigation-button--previous")],jt.prototype,"previousButton",2);Yt([F(".navigation-button--next")],jt.prototype,"nextButton",2);Yt([X()],jt.prototype,"activeSlide",2);Yt([M("mouseDragging")],jt.prototype,"handleMouseDraggingChange",1);jt.define("awc-carousel");zr.define("awc-carousel-item");zr.define("swiper-slide");var lo=(i="value")=>(t,e)=>{let r=t.constructor,a=r.prototype.attributeChangedCallback;r.prototype.attributeChangedCallback=function(s,l,p){let d=r.getPropertyOptions(i),h=typeof d.attribute=="string"?d.attribute:i;if(s===h){let f=d.converter||Ti,g=(typeof f=="function"?f:f?.fromAttribute??Ti.fromAttribute)(p,d.type);this[i]!==g&&(this[e]=g)}a.call(this,s,l,p)}};var ko=xo(class extends ao{constructor(i){if(super(i),i.type!==Me.PROPERTY&&i.type!==Me.ATTRIBUTE&&i.type!==Me.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!_n(i))throw Error("`live` bindings can only contain a single expression")}render(i){return i}update(i,[t]){if(t===pe||t===$t)return t;let e=i.element,r=i.name;if(i.type===Me.PROPERTY){if(t===e[r])return pe}else if(i.type===Me.BOOLEAN_ATTRIBUTE){if(!!t===e.hasAttribute(r))return pe}else if(i.type===Me.ATTRIBUTE&&e.getAttribute(r)===t+"")return pe;return xn(i),t}});var sg=A`
  ${N}

  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--awc-input-font-family);
    font-weight: var(--awc-input-font-weight);
    color: var(--awc-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--awc-toggle-size-small);
    font-size: var(--awc-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--awc-toggle-size-medium);
    font-size: var(--awc-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--awc-toggle-size-large);
    font-size: var(--awc-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--awc-input-border-width) var(--awc-input-border-color-base);
    border-radius: 2px;
    background-color: var(--awc-input-background-color-base);
    color: var(--awc-color-neutral-0);
    transition:
      var(--awc-transition-fast) border-color,
      var(--awc-transition-fast) background-color,
      var(--awc-transition-fast) color,
      var(--awc-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--awc-input-border-color-hover);
    background-color: var(--awc-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--awc-focus-ring);
    outline-offset: var(--awc-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--awc-color-primary-600);
    background-color: var(--awc-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--awc-color-primary-600);
    background-color: var(--awc-color-primary-600);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--awc-focus-ring);
    outline-offset: var(--awc-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--awc-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--awc-input-required-content);
    margin-inline-start: var(--awc-input-required-content-offset);
  }
`;var R1=Object.defineProperty,F1=Object.getOwnPropertyDescriptor,co=(i,t,e,r)=>{for(var a=r>1?void 0:r?F1(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&R1(t,e,a),a},Oc=class extends R{constructor(){super(...arguments),this.formControlController=new oe(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("awc-change")}handleBlur(){this.hasFocus=!1,this.emit("awc-blur")}handleInput(){this.emit("awc-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleFocus(){this.hasFocus=!0,this.emit("awc-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){return E`
      <label
        part="base"
        class=${Z({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
      >
        <input
          class="checkbox__input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${H(this.value)}
          .indeterminate=${ko(this.indeterminate)}
          .checked=${ko(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          aria-checked=${this.checked?"true":"false"}
          @click=${this.handleClick}
          @input=${this.handleInput}
          @invalid=${this.handleInvalid}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
        />

        <span
          part="control${this.checked?" control--checked":""}${this.indeterminate?" control--indeterminate":""}"
          class="checkbox__control"
        >
          ${this.checked?E`
                <awc-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></awc-icon>
              `:""}
          ${!this.checked&&this.indeterminate?E`
                <awc-icon
                  part="indeterminate-icon"
                  class="checkbox__indeterminate-icon"
                  library="system"
                  name="indeterminate"
                ></awc-icon>
              `:""}
        </span>

        <div part="label" class="checkbox__label">
          <slot></slot>
        </div>
      </label>
    `}};Oc.styles=sg,Oc.dependencies={"awc-icon":nt};var ve=Oc;co([F('input[type="checkbox"]')],ve.prototype,"input",2);co([X()],ve.prototype,"hasFocus",2);co([u()],ve.prototype,"title",2);co([u()],ve.prototype,"name",2);co([u()],ve.prototype,"value",2);co([u({reflect:!0})],ve.prototype,"size",2);co([u({type:Boolean,reflect:!0})],ve.prototype,"disabled",2);co([u({type:Boolean,reflect:!0})],ve.prototype,"checked",2);co([u({type:Boolean,reflect:!0})],ve.prototype,"indeterminate",2);co([lo("checked")],ve.prototype,"defaultChecked",2);co([u({reflect:!0})],ve.prototype,"form",2);co([u({type:Boolean,reflect:!0})],ve.prototype,"required",2);co([M("disabled",{waitUntilFirstUpdate:!0})],ve.prototype,"handleDisabledChange",1);co([M(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],ve.prototype,"handleStateChange",1);ve.define("awc-checkbox");function te(i,t,e){let r=a=>Object.is(a,-0)?0:a;return i<t?r(t):i>e?r(e):r(i)}function Qi(i,t){function e(a){let s=i.getBoundingClientRect(),l=i.ownerDocument.defaultView,p=s.left+l.pageXOffset,d=s.top+l.pageYOffset,h=a.pageX-p,f=a.pageY-d;t?.onMove&&t.onMove(h,f)}function r(){document.removeEventListener("pointermove",e),document.removeEventListener("pointerup",r),t?.onStop&&t.onStop()}document.addEventListener("pointermove",e,{passive:!0}),document.addEventListener("pointerup",r),t?.initialEvent instanceof PointerEvent&&e(t.initialEvent)}function N1(i){return!!(i.offsetParent||i.offsetWidth||i.offsetHeight||i.getClientRects().length)}function j1(i){let t=i.tagName.toLowerCase();return i.getAttribute("tabindex")==="-1"||i.hasAttribute("disabled")||t==="input"&&i.getAttribute("type")==="radio"&&!i.hasAttribute("checked")||!N1(i)||window.getComputedStyle(i).visibility==="hidden"?!1:(t==="audio"||t==="video")&&i.hasAttribute("controls")||i.hasAttribute("tabindex")||i.hasAttribute("contenteditable")&&i.getAttribute("contenteditable")!=="false"?!0:["button","input","select","textarea","a","audio","video","summary"].includes(t)}function ng(i){let t=$n(i),e=t[0]??null,r=t[t.length-1]??null;return{start:e,end:r}}function $n(i){let t=[];function e(r){if(r instanceof Element){if(r.hasAttribute("inert"))return;!t.includes(r)&&j1(r)&&t.push(r);let a=s=>s.getRootNode({composed:!0})?.host!==i;r instanceof HTMLSlotElement&&a(r)&&r.assignedElements({flatten:!0}).forEach(s=>{e(s)}),r.shadowRoot!==null&&r.shadowRoot.mode==="open"&&e(r.shadowRoot)}[...r.children].forEach(a=>e(a))}return e(i),t.sort((r,a)=>{let s=Number(r.getAttribute("tabindex"))||0;return(Number(a.getAttribute("tabindex"))||0)-s})}var ni=Math.min,Ke=Math.max,ds=Math.round,ps=Math.floor,Ii=i=>({x:i,y:i}),U1={left:"right",right:"left",bottom:"top",top:"bottom"},V1={start:"end",end:"start"};function In(i,t,e){return Ke(i,ni(t,e))}function Sr(i,t){return typeof i=="function"?i(t):i}function Di(i){return i.split("-")[0]}function Tr(i){return i.split("-")[1]}function Ac(i){return i==="x"?"y":"x"}function Dn(i){return i==="y"?"height":"width"}function va(i){return["top","bottom"].includes(Di(i))?"y":"x"}function Bn(i){return Ac(va(i))}function lg(i,t,e){e===void 0&&(e=!1);let r=Tr(i),a=Bn(i),s=Dn(a),l=a==="x"?r===(e?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[s]>t.floating[s]&&(l=cs(l)),[l,cs(l)]}function cg(i){let t=cs(i);return[Mc(i),t,Mc(t)]}function Mc(i){return i.replace(/start|end/g,t=>V1[t])}function H1(i,t,e){let r=["left","right"],a=["right","left"],s=["top","bottom"],l=["bottom","top"];switch(i){case"top":case"bottom":return e?t?a:r:t?r:a;case"left":case"right":return t?s:l;default:return[]}}function dg(i,t,e,r){let a=Tr(i),s=H1(Di(i),e==="start",r);return a&&(s=s.map(l=>l+"-"+a),t&&(s=s.concat(s.map(Mc)))),s}function cs(i){return i.replace(/left|right|bottom|top/g,t=>U1[t])}function Z1(i){return{top:0,right:0,bottom:0,left:0,...i}}function $c(i){return typeof i!="number"?Z1(i):{top:i,right:i,bottom:i,left:i}}function ya(i){return{...i,top:i.y,left:i.x,right:i.x+i.width,bottom:i.y+i.height}}function pg(i,t,e){let{reference:r,floating:a}=i,s=va(t),l=Bn(t),p=Dn(l),d=Di(t),h=s==="y",f=r.x+r.width/2-a.width/2,g=r.y+r.height/2-a.height/2,v=r[p]/2-a[p]/2,y;switch(d){case"top":y={x:f,y:r.y-a.height};break;case"bottom":y={x:f,y:r.y+r.height};break;case"right":y={x:r.x+r.width,y:g};break;case"left":y={x:r.x-a.width,y:g};break;default:y={x:r.x,y:r.y}}switch(Tr(t)){case"start":y[l]-=v*(e&&h?-1:1);break;case"end":y[l]+=v*(e&&h?-1:1);break}return y}var hg=async(i,t,e)=>{let{placement:r="bottom",strategy:a="absolute",middleware:s=[],platform:l}=e,p=s.filter(Boolean),d=await(l.isRTL==null?void 0:l.isRTL(t)),h=await l.getElementRects({reference:i,floating:t,strategy:a}),{x:f,y:g}=pg(h,r,d),v=r,y={},_=0;for(let x=0;x<p.length;x++){let{name:P,fn:S}=p[x],{x:k,y:C,data:z,reset:O}=await S({x:f,y:g,initialPlacement:r,placement:v,strategy:a,middlewareData:y,rects:h,platform:l,elements:{reference:i,floating:t}});if(f=k??f,g=C??g,y={...y,[P]:{...y[P],...z}},O&&_<=50){_++,typeof O=="object"&&(O.placement&&(v=O.placement),O.rects&&(h=O.rects===!0?await l.getElementRects({reference:i,floating:t,strategy:a}):O.rects),{x:f,y:g}=pg(h,v,d)),x=-1;continue}}return{x:f,y:g,placement:v,strategy:a,middlewareData:y}};async function Rn(i,t){var e;t===void 0&&(t={});let{x:r,y:a,platform:s,rects:l,elements:p,strategy:d}=i,{boundary:h="clippingAncestors",rootBoundary:f="viewport",elementContext:g="floating",altBoundary:v=!1,padding:y=0}=Sr(t,i),_=$c(y),x=p[v?g==="floating"?"reference":"floating":g],P=ya(await s.getClippingRect({element:(e=await(s.isElement==null?void 0:s.isElement(x)))==null||e?x:x.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(p.floating)),boundary:h,rootBoundary:f,strategy:d})),S=g==="floating"?{...l.floating,x:r,y:a}:l.reference,k=await(s.getOffsetParent==null?void 0:s.getOffsetParent(p.floating)),C=await(s.isElement==null?void 0:s.isElement(k))?await(s.getScale==null?void 0:s.getScale(k))||{x:1,y:1}:{x:1,y:1},z=ya(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({rect:S,offsetParent:k,strategy:d}):S);return{top:(P.top-z.top+_.top)/C.y,bottom:(z.bottom-P.bottom+_.bottom)/C.y,left:(P.left-z.left+_.left)/C.x,right:(z.right-P.right+_.right)/C.x}}var Ic=i=>({name:"arrow",options:i,async fn(t){let{x:e,y:r,placement:a,rects:s,platform:l,elements:p,middlewareData:d}=t,{element:h,padding:f=0}=Sr(i,t)||{};if(h==null)return{};let g=$c(f),v={x:e,y:r},y=Bn(a),_=Dn(y),x=await l.getDimensions(h),P=y==="y",S=P?"top":"left",k=P?"bottom":"right",C=P?"clientHeight":"clientWidth",z=s.reference[_]+s.reference[y]-v[y]-s.floating[_],O=v[y]-s.reference[y],j=await(l.getOffsetParent==null?void 0:l.getOffsetParent(h)),Q=j?j[C]:0;(!Q||!await(l.isElement==null?void 0:l.isElement(j)))&&(Q=p.floating[C]||s.floating[_]);let Y=z/2-O/2,G=Q/2-x[_]/2-1,B=ni(g[S],G),U=ni(g[k],G),I=B,W=Q-x[_]-U,q=Q/2-x[_]/2+Y,tt=In(I,q,W),rt=!d.arrow&&Tr(a)!=null&&q!=tt&&s.reference[_]/2-(q<I?B:U)-x[_]/2<0,Bt=rt?q<I?q-I:q-W:0;return{[y]:v[y]+Bt,data:{[y]:tt,centerOffset:q-tt-Bt,...rt&&{alignmentOffset:Bt}},reset:rt}}}),Dc=function(i){return i===void 0&&(i={}),{name:"flip",options:i,async fn(t){var e,r;let{placement:a,middlewareData:s,rects:l,initialPlacement:p,platform:d,elements:h}=t,{mainAxis:f=!0,crossAxis:g=!0,fallbackPlacements:v,fallbackStrategy:y="bestFit",fallbackAxisSideDirection:_="none",flipAlignment:x=!0,...P}=Sr(i,t);if((e=s.arrow)!=null&&e.alignmentOffset)return{};let S=Di(a),k=Di(p)===p,C=await(d.isRTL==null?void 0:d.isRTL(h.floating)),z=v||(k||!x?[cs(p)]:cg(p));!v&&_!=="none"&&z.push(...dg(p,x,_,C));let O=[p,...z],j=await Rn(t,P),Q=[],Y=((r=s.flip)==null?void 0:r.overflows)||[];if(f&&Q.push(j[S]),g){let I=lg(a,l,C);Q.push(j[I[0]],j[I[1]])}if(Y=[...Y,{placement:a,overflows:Q}],!Q.every(I=>I<=0)){var G,B;let I=(((G=s.flip)==null?void 0:G.index)||0)+1,W=O[I];if(W)return{data:{index:I,overflows:Y},reset:{placement:W}};let q=(B=Y.filter(tt=>tt.overflows[0]<=0).sort((tt,rt)=>tt.overflows[1]-rt.overflows[1])[0])==null?void 0:B.placement;if(!q)switch(y){case"bestFit":{var U;let tt=(U=Y.map(rt=>[rt.placement,rt.overflows.filter(Bt=>Bt>0).reduce((Bt,J)=>Bt+J,0)]).sort((rt,Bt)=>rt[1]-Bt[1])[0])==null?void 0:U[0];tt&&(q=tt);break}case"initialPlacement":q=p;break}if(a!==q)return{reset:{placement:q}}}return{}}}};async function W1(i,t){let{placement:e,platform:r,elements:a}=i,s=await(r.isRTL==null?void 0:r.isRTL(a.floating)),l=Di(e),p=Tr(e),d=va(e)==="y",h=["left","top"].includes(l)?-1:1,f=s&&d?-1:1,g=Sr(t,i),{mainAxis:v,crossAxis:y,alignmentAxis:_}=typeof g=="number"?{mainAxis:g,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...g};return p&&typeof _=="number"&&(y=p==="end"?_*-1:_),d?{x:y*f,y:v*h}:{x:v*h,y:y*f}}var Bc=function(i){return i===void 0&&(i=0),{name:"offset",options:i,async fn(t){let{x:e,y:r}=t,a=await W1(t,i);return{x:e+a.x,y:r+a.y,data:a}}}},Rc=function(i){return i===void 0&&(i={}),{name:"shift",options:i,async fn(t){let{x:e,y:r,placement:a}=t,{mainAxis:s=!0,crossAxis:l=!1,limiter:p={fn:P=>{let{x:S,y:k}=P;return{x:S,y:k}}},...d}=Sr(i,t),h={x:e,y:r},f=await Rn(t,d),g=va(Di(a)),v=Ac(g),y=h[v],_=h[g];if(s){let P=v==="y"?"top":"left",S=v==="y"?"bottom":"right",k=y+f[P],C=y-f[S];y=In(k,y,C)}if(l){let P=g==="y"?"top":"left",S=g==="y"?"bottom":"right",k=_+f[P],C=_-f[S];_=In(k,_,C)}let x=p.fn({...t,[v]:y,[g]:_});return{...x,data:{x:x.x-e,y:x.y-r}}}}},Fn=function(i){return i===void 0&&(i={}),{name:"size",options:i,async fn(t){let{placement:e,rects:r,platform:a,elements:s}=t,{apply:l=()=>{},...p}=Sr(i,t),d=await Rn(t,p),h=Di(e),f=Tr(e),g=va(e)==="y",{width:v,height:y}=r.floating,_,x;h==="top"||h==="bottom"?(_=h,x=f===(await(a.isRTL==null?void 0:a.isRTL(s.floating))?"start":"end")?"left":"right"):(x=h,_=f==="end"?"top":"bottom");let P=y-d[_],S=v-d[x],k=!t.middlewareData.shift,C=P,z=S;if(g){let j=v-d.left-d.right;z=f||k?ni(S,j):j}else{let j=y-d.top-d.bottom;C=f||k?ni(P,j):j}if(k&&!f){let j=Ke(d.left,0),Q=Ke(d.right,0),Y=Ke(d.top,0),G=Ke(d.bottom,0);g?z=v-2*(j!==0||Q!==0?j+Q:Ke(d.left,d.right)):C=y-2*(Y!==0||G!==0?Y+G:Ke(d.top,d.bottom))}await l({...t,availableWidth:z,availableHeight:C});let O=await a.getDimensions(s.floating);return v!==O.width||y!==O.height?{reset:{rects:!0}}:{}}}};function Bi(i){return mg(i)?(i.nodeName||"").toLowerCase():"#document"}function po(i){var t;return(i==null||(t=i.ownerDocument)==null?void 0:t.defaultView)||window}function li(i){var t;return(t=(mg(i)?i.ownerDocument:i.document)||window.document)==null?void 0:t.documentElement}function mg(i){return i instanceof Node||i instanceof po(i).Node}function ci(i){return i instanceof Element||i instanceof po(i).Element}function Wo(i){return i instanceof HTMLElement||i instanceof po(i).HTMLElement}function ug(i){return typeof ShadowRoot>"u"?!1:i instanceof ShadowRoot||i instanceof po(i).ShadowRoot}function _a(i){let{overflow:t,overflowX:e,overflowY:r,display:a}=Co(i);return/auto|scroll|overlay|hidden|clip/.test(t+r+e)&&!["inline","contents"].includes(a)}function fg(i){return["table","td","th"].includes(Bi(i))}function Nn(i){let t=jn(),e=Co(i);return e.transform!=="none"||e.perspective!=="none"||(e.containerType?e.containerType!=="normal":!1)||!t&&(e.backdropFilter?e.backdropFilter!=="none":!1)||!t&&(e.filter?e.filter!=="none":!1)||["transform","perspective","filter"].some(r=>(e.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(e.contain||"").includes(r))}function gg(i){let t=Pr(i);for(;Wo(t)&&!hs(t);){if(Nn(t))return t;t=Pr(t)}return null}function jn(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function hs(i){return["html","body","#document"].includes(Bi(i))}function Co(i){return po(i).getComputedStyle(i)}function us(i){return ci(i)?{scrollLeft:i.scrollLeft,scrollTop:i.scrollTop}:{scrollLeft:i.pageXOffset,scrollTop:i.pageYOffset}}function Pr(i){if(Bi(i)==="html")return i;let t=i.assignedSlot||i.parentNode||ug(i)&&i.host||li(i);return ug(t)?t.host:t}function bg(i){let t=Pr(i);return hs(t)?i.ownerDocument?i.ownerDocument.body:i.body:Wo(t)&&_a(t)?t:bg(t)}function wa(i,t,e){var r;t===void 0&&(t=[]),e===void 0&&(e=!0);let a=bg(i),s=a===((r=i.ownerDocument)==null?void 0:r.body),l=po(a);return s?t.concat(l,l.visualViewport||[],_a(a)?a:[],l.frameElement&&e?wa(l.frameElement):[]):t.concat(a,wa(a,[],e))}function wg(i){let t=Co(i),e=parseFloat(t.width)||0,r=parseFloat(t.height)||0,a=Wo(i),s=a?i.offsetWidth:e,l=a?i.offsetHeight:r,p=ds(e)!==s||ds(r)!==l;return p&&(e=s,r=l),{width:e,height:r,$:p}}function Fc(i){return ci(i)?i:i.contextElement}function xa(i){let t=Fc(i);if(!Wo(t))return Ii(1);let e=t.getBoundingClientRect(),{width:r,height:a,$:s}=wg(t),l=(s?ds(e.width):e.width)/r,p=(s?ds(e.height):e.height)/a;return(!l||!Number.isFinite(l))&&(l=1),(!p||!Number.isFinite(p))&&(p=1),{x:l,y:p}}var q1=Ii(0);function _g(i){let t=po(i);return!jn()||!t.visualViewport?q1:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function G1(i,t,e){return t===void 0&&(t=!1),!e||t&&e!==po(i)?!1:t}function Er(i,t,e,r){t===void 0&&(t=!1),e===void 0&&(e=!1);let a=i.getBoundingClientRect(),s=Fc(i),l=Ii(1);t&&(r?ci(r)&&(l=xa(r)):l=xa(i));let p=G1(s,e,r)?_g(s):Ii(0),d=(a.left+p.x)/l.x,h=(a.top+p.y)/l.y,f=a.width/l.x,g=a.height/l.y;if(s){let v=po(s),y=r&&ci(r)?po(r):r,_=v.frameElement;for(;_&&r&&y!==v;){let x=xa(_),P=_.getBoundingClientRect(),S=Co(_),k=P.left+(_.clientLeft+parseFloat(S.paddingLeft))*x.x,C=P.top+(_.clientTop+parseFloat(S.paddingTop))*x.y;d*=x.x,h*=x.y,f*=x.x,g*=x.y,d+=k,h+=C,_=po(_).frameElement}}return ya({width:f,height:g,x:d,y:h})}function Y1(i){let{rect:t,offsetParent:e,strategy:r}=i,a=Wo(e),s=li(e);if(e===s)return t;let l={scrollLeft:0,scrollTop:0},p=Ii(1),d=Ii(0);if((a||!a&&r!=="fixed")&&((Bi(e)!=="body"||_a(s))&&(l=us(e)),Wo(e))){let h=Er(e);p=xa(e),d.x=h.x+e.clientLeft,d.y=h.y+e.clientTop}return{width:t.width*p.x,height:t.height*p.y,x:t.x*p.x-l.scrollLeft*p.x+d.x,y:t.y*p.y-l.scrollTop*p.y+d.y}}function K1(i){return Array.from(i.getClientRects())}function xg(i){return Er(li(i)).left+us(i).scrollLeft}function X1(i){let t=li(i),e=us(i),r=i.ownerDocument.body,a=Ke(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),s=Ke(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight),l=-e.scrollLeft+xg(i),p=-e.scrollTop;return Co(r).direction==="rtl"&&(l+=Ke(t.clientWidth,r.clientWidth)-a),{width:a,height:s,x:l,y:p}}function J1(i,t){let e=po(i),r=li(i),a=e.visualViewport,s=r.clientWidth,l=r.clientHeight,p=0,d=0;if(a){s=a.width,l=a.height;let h=jn();(!h||h&&t==="fixed")&&(p=a.offsetLeft,d=a.offsetTop)}return{width:s,height:l,x:p,y:d}}function Q1(i,t){let e=Er(i,!0,t==="fixed"),r=e.top+i.clientTop,a=e.left+i.clientLeft,s=Wo(i)?xa(i):Ii(1),l=i.clientWidth*s.x,p=i.clientHeight*s.y,d=a*s.x,h=r*s.y;return{width:l,height:p,x:d,y:h}}function vg(i,t,e){let r;if(t==="viewport")r=J1(i,e);else if(t==="document")r=X1(li(i));else if(ci(t))r=Q1(t,e);else{let a=_g(i);r={...t,x:t.x-a.x,y:t.y-a.y}}return ya(r)}function kg(i,t){let e=Pr(i);return e===t||!ci(e)||hs(e)?!1:Co(e).position==="fixed"||kg(e,t)}function tx(i,t){let e=t.get(i);if(e)return e;let r=wa(i,[],!1).filter(p=>ci(p)&&Bi(p)!=="body"),a=null,s=Co(i).position==="fixed",l=s?Pr(i):i;for(;ci(l)&&!hs(l);){let p=Co(l),d=Nn(l);!d&&p.position==="fixed"&&(a=null),(s?!d&&!a:!d&&p.position==="static"&&a&&["absolute","fixed"].includes(a.position)||_a(l)&&!d&&kg(i,l))?r=r.filter(h=>h!==l):a=p,l=Pr(l)}return t.set(i,r),r}function ex(i){let{element:t,boundary:e,rootBoundary:r,strategy:a}=i,s=[...e==="clippingAncestors"?tx(t,this._c):[].concat(e),r],l=s[0],p=s.reduce((d,h)=>{let f=vg(t,h,a);return d.top=Ke(f.top,d.top),d.right=ni(f.right,d.right),d.bottom=ni(f.bottom,d.bottom),d.left=Ke(f.left,d.left),d},vg(t,l,a));return{width:p.right-p.left,height:p.bottom-p.top,x:p.left,y:p.top}}function ox(i){return wg(i)}function ix(i,t,e){let r=Wo(t),a=li(t),s=e==="fixed",l=Er(i,!0,s,t),p={scrollLeft:0,scrollTop:0},d=Ii(0);if(r||!r&&!s)if((Bi(t)!=="body"||_a(a))&&(p=us(t)),r){let h=Er(t,!0,s,t);d.x=h.x+t.clientLeft,d.y=h.y+t.clientTop}else a&&(d.x=xg(a));return{x:l.left+p.scrollLeft-d.x,y:l.top+p.scrollTop-d.y,width:l.width,height:l.height}}function yg(i,t){return!Wo(i)||Co(i).position==="fixed"?null:t?t(i):i.offsetParent}function Cg(i,t){let e=po(i);if(!Wo(i))return e;let r=yg(i,t);for(;r&&fg(r)&&Co(r).position==="static";)r=yg(r,t);return r&&(Bi(r)==="html"||Bi(r)==="body"&&Co(r).position==="static"&&!Nn(r))?e:r||gg(i)||e}var rx=async function(i){let{reference:t,floating:e,strategy:r}=i,a=this.getOffsetParent||Cg,s=this.getDimensions;return{reference:ix(t,await a(e),r),floating:{x:0,y:0,...await s(e)}}};function ax(i){return Co(i).direction==="rtl"}var ms={convertOffsetParentRelativeRectToViewportRelativeRect:Y1,getDocumentElement:li,getClippingRect:ex,getOffsetParent:Cg,getElementRects:rx,getClientRects:K1,getDimensions:ox,getScale:xa,isElement:ci,isRTL:ax};function sx(i,t){let e=null,r,a=li(i);function s(){clearTimeout(r),e&&e.disconnect(),e=null}function l(p,d){p===void 0&&(p=!1),d===void 0&&(d=1),s();let{left:h,top:f,width:g,height:v}=i.getBoundingClientRect();if(p||t(),!g||!v)return;let y=ps(f),_=ps(a.clientWidth-(h+g)),x=ps(a.clientHeight-(f+v)),P=ps(h),S={rootMargin:-y+"px "+-_+"px "+-x+"px "+-P+"px",threshold:Ke(0,ni(1,d))||1},k=!0;function C(z){let O=z[0].intersectionRatio;if(O!==d){if(!k)return l();O?l(!1,O):r=setTimeout(()=>{l(!1,1e-7)},100)}k=!1}try{e=new IntersectionObserver(C,{...S,root:a.ownerDocument})}catch{e=new IntersectionObserver(C,S)}e.observe(i)}return l(!0),s}function Lg(i,t,e,r){r===void 0&&(r={});let{ancestorScroll:a=!0,ancestorResize:s=!0,elementResize:l=typeof ResizeObserver=="function",layoutShift:p=typeof IntersectionObserver=="function",animationFrame:d=!1}=r,h=Fc(i),f=a||s?[...h?wa(h):[],...wa(t)]:[];f.forEach(S=>{a&&S.addEventListener("scroll",e,{passive:!0}),s&&S.addEventListener("resize",e)});let g=h&&p?sx(h,e):null,v=-1,y=null;l&&(y=new ResizeObserver(S=>{let[k]=S;k&&k.target===h&&y&&(y.unobserve(t),cancelAnimationFrame(v),v=requestAnimationFrame(()=>{y&&y.observe(t)})),e()}),h&&!d&&y.observe(h),y.observe(t));let _,x=d?Er(i):null;d&&P();function P(){let S=Er(i);x&&(S.x!==x.x||S.y!==x.y||S.width!==x.width||S.height!==x.height)&&e(),x=S,_=requestAnimationFrame(P)}return e(),()=>{f.forEach(S=>{a&&S.removeEventListener("scroll",e),s&&S.removeEventListener("resize",e)}),g&&g(),y&&y.disconnect(),y=null,d&&cancelAnimationFrame(_)}}var zg=(i,t,e)=>{let r=new Map,a={platform:ms,...e},s={...a.platform,_c:r};return hg(i,t,{...a,platform:s})};function Sg(i){return nx(i)}function Nc(i){return i.assignedSlot?i.assignedSlot:i.parentNode instanceof ShadowRoot?i.parentNode.host:i.parentNode}function nx(i){for(let t=i;t;t=Nc(t))if(t instanceof Element&&getComputedStyle(t).display==="none")return null;for(let t=Nc(i);t;t=Nc(t)){if(!(t instanceof Element))continue;let e=getComputedStyle(t);if(e.display!=="contents"&&(e.position!=="static"||e.filter!=="none"||t.tagName==="BODY"))return t}return null}var Tg=A`
  ${N}

  :host {
    --arrow-color: var(--awc-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }
`;var lx=Object.defineProperty,cx=Object.getOwnPropertyDescriptor,ee=(i,t,e,r)=>{for(var a=r>1?void 0:r?cx(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&lx(t,e,a),a};function dx(i){return i!==null&&typeof i=="object"&&"getBoundingClientRect"in i}var Pg=class extends R{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){let t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||dx(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){this.anchorEl&&(this.cleanup=Lg(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;let t=[Bc({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(Fn({apply:({rects:r})=>{let a=this.sync==="width"||this.sync==="both",s=this.sync==="height"||this.sync==="both";this.popup.style.width=a?`${r.reference.width}px`:"",this.popup.style.height=s?`${r.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(Dc({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(Rc({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(Fn({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:r,availableHeight:a})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${a}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${r}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(Ic({element:this.arrowEl,padding:this.arrowPadding}));let e=this.strategy==="absolute"?r=>ms.getOffsetParent(r,Sg):ms.getOffsetParent;zg(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:{...ms,getOffsetParent:e}}).then(({x:r,y:a,middlewareData:s,placement:l})=>{let p=getComputedStyle(this).direction==="rtl",d={top:"bottom",right:"left",bottom:"top",left:"right"}[l.split("-")[0]];if(this.setAttribute("data-current-placement",l),Object.assign(this.popup.style,{left:`${r}px`,top:`${a}px`}),this.arrow){let h=s.arrow.x,f=s.arrow.y,g="",v="",y="",_="";if(this.arrowPlacement==="start"){let x=typeof h=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";g=typeof f=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",v=p?x:"",_=p?"":x}else if(this.arrowPlacement==="end"){let x=typeof h=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";v=p?"":x,_=p?x:"",y=typeof f=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(_=typeof h=="number"?"calc(50% - var(--arrow-size-diagonal))":"",g=typeof f=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(_=typeof h=="number"?`${h}px`:"",g=typeof f=="number"?`${f}px`:"");Object.assign(this.arrowEl.style,{top:g,right:v,bottom:y,left:_,[d]:"calc(var(--arrow-size-diagonal) * -1)"})}}),this.emit("awc-reposition")}render(){return E`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <div
        part="popup"
        class=${Z({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?E`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};Pg.styles=Tg;var Lt=Pg;ee([F(".popup")],Lt.prototype,"popup",2);ee([F(".popup__arrow")],Lt.prototype,"arrowEl",2);ee([u()],Lt.prototype,"anchor",2);ee([u({type:Boolean,reflect:!0})],Lt.prototype,"active",2);ee([u({reflect:!0})],Lt.prototype,"placement",2);ee([u({reflect:!0})],Lt.prototype,"strategy",2);ee([u({type:Number})],Lt.prototype,"distance",2);ee([u({type:Number})],Lt.prototype,"skidding",2);ee([u({type:Boolean})],Lt.prototype,"arrow",2);ee([u({attribute:"arrow-placement"})],Lt.prototype,"arrowPlacement",2);ee([u({attribute:"arrow-padding",type:Number})],Lt.prototype,"arrowPadding",2);ee([u({type:Boolean})],Lt.prototype,"flip",2);ee([u({attribute:"flip-fallback-placements",converter:{fromAttribute:i=>i.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:i=>i.join(" ")}})],Lt.prototype,"flipFallbackPlacements",2);ee([u({attribute:"flip-fallback-strategy"})],Lt.prototype,"flipFallbackStrategy",2);ee([u({type:Object})],Lt.prototype,"flipBoundary",2);ee([u({attribute:"flip-padding",type:Number})],Lt.prototype,"flipPadding",2);ee([u({type:Boolean})],Lt.prototype,"shift",2);ee([u({type:Object})],Lt.prototype,"shiftBoundary",2);ee([u({attribute:"shift-padding",type:Number})],Lt.prototype,"shiftPadding",2);ee([u({attribute:"auto-size"})],Lt.prototype,"autoSize",2);ee([u()],Lt.prototype,"sync",2);ee([u({type:Object})],Lt.prototype,"autoSizeBoundary",2);ee([u({attribute:"auto-size-padding",type:Number})],Lt.prototype,"autoSizePadding",2);var Eg=A`
  ${N}

  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--awc-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--awc-font-sans);
    font-size: var(--awc-font-size-medium);
    font-weight: var(--awc-font-weight-normal);
    box-shadow: var(--awc-shadow-large);
    border-radius: var(--awc-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(awc-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;var px=Object.defineProperty,hx=Object.getOwnPropertyDescriptor,$o=(i,t,e,r)=>{for(var a=r>1?void 0:r?hx(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&px(t,e,a),a},jc=class extends R{constructor(){super(...arguments),this.localize=new et(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.handleKeyDown=t=>{this.open&&t.key==="Escape"&&(t.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=t=>{if(t.key==="Escape"&&this.open){t.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(t.key==="Tab"){if(this.open&&document.activeElement?.tagName.toLowerCase()==="awc-menu-item"){t.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{let e=this.containingElement?.getRootNode()instanceof ShadowRoot?document.activeElement?.shadowRoot?.activeElement:document.activeElement;(!this.containingElement||e?.closest(this.containingElement.tagName.toLowerCase())!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=t=>{let e=t.composedPath();this.containingElement&&!e.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=t=>{let e=t.target;!this.stayOpenOnSelect&&e.tagName.toLowerCase()==="awc-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){let t=this.trigger.assignedElements({flatten:!0})[0];typeof t?.focus=="function"&&t.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(t=>t.tagName.toLowerCase()==="awc-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(t){if([" ","Enter"].includes(t.key)){t.preventDefault(),this.handleTriggerClick();return}let e=this.getMenu();if(e){let r=e.getAllItems(),a=r[0],s=r[r.length-1];["ArrowDown","ArrowUp","Home","End"].includes(t.key)&&(t.preventDefault(),this.open||(this.show(),await this.updateComplete),r.length>0&&this.updateComplete.then(()=>{(t.key==="ArrowDown"||t.key==="Home")&&(e.setCurrentItem(a),a.focus()),(t.key==="ArrowUp"||t.key==="End")&&(e.setCurrentItem(s),s.focus())}))}}handleTriggerKeyUp(t){t.key===" "&&t.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){let t=this.trigger.assignedElements({flatten:!0}).find(r=>ng(r).start),e;if(t){switch(t.tagName.toLowerCase()){case"awc-button":case"awc-icon-button":e=t.button;break;default:e=t}e.setAttribute("aria-haspopup","true"),e.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,Kt(this,"awc-after-show")}async hide(){if(this.open)return this.open=!1,Kt(this,"awc-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){this.panel.addEventListener("awc-select",this.handlePanelSelect),this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){this.panel&&(this.panel.removeEventListener("awc-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("awc-show"),this.addOpenListeners(),await At(this),this.panel.hidden=!1,this.popup.active=!0;let{keyframes:t,options:e}=yt(this,"dropdown.show",{dir:this.localize.dir()});await Tt(this.popup.popup,t,e),this.emit("awc-after-show")}else{this.emit("awc-hide"),this.removeOpenListeners(),await At(this);let{keyframes:t,options:e}=yt(this,"dropdown.hide",{dir:this.localize.dir()});await Tt(this.popup.popup,t,e),this.panel.hidden=!0,this.popup.active=!1,this.emit("awc-after-hide")}}render(){return E`
      <awc-popup
        part="base"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        class=${Z({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?"false":"true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </awc-popup>
    `}};jc.styles=Eg,jc.dependencies={"awc-popup":Lt};var Ae=jc;$o([F(".dropdown")],Ae.prototype,"popup",2);$o([F(".dropdown__trigger")],Ae.prototype,"trigger",2);$o([F(".dropdown__panel")],Ae.prototype,"panel",2);$o([u({type:Boolean,reflect:!0})],Ae.prototype,"open",2);$o([u({reflect:!0})],Ae.prototype,"placement",2);$o([u({type:Boolean,reflect:!0})],Ae.prototype,"disabled",2);$o([u({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],Ae.prototype,"stayOpenOnSelect",2);$o([u({attribute:!1})],Ae.prototype,"containingElement",2);$o([u({type:Number})],Ae.prototype,"distance",2);$o([u({type:Number})],Ae.prototype,"skidding",2);$o([u({type:Boolean})],Ae.prototype,"hoist",2);$o([M("open",{waitUntilFirstUpdate:!0})],Ae.prototype,"handleOpenChange",1);ht("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});ht("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});var di=A`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--awc-input-label-color);
    margin-bottom: var(--awc-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--awc-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--awc-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--awc-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--awc-input-required-content);
    margin-inline-start: var(--awc-input-required-content-offset);
    color: var(--awc-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--awc-input-help-text-color);
    margin-top: var(--awc-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--awc-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--awc-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--awc-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--awc-spacing-2x-small);
  }
`;var Og=A`
  ${N}
  ${di}

  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--awc-input-font-family);
    font-weight: var(--awc-input-font-weight);
    letter-spacing: var(--awc-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--awc-transition-fast) color,
      var(--awc-transition-fast) border,
      var(--awc-transition-fast) box-shadow,
      var(--awc-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--awc-input-background-color-base);
    border: solid var(--awc-input-border-width) var(--awc-input-border-color-base);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--awc-input-background-color-hover);
    border-color: var(--awc-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--awc-input-background-color-focus);
    border-color: var(--awc-input-border-color-focus);
    box-shadow: 0 0 0 var(--awc-focus-ring-width) var(--awc-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--awc-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--awc-input-background-color-disabled);
    border-color: var(--awc-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--awc-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--awc-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--awc-input-filled-background-color);
    color: var(--awc-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--awc-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--awc-input-filled-background-color-focus);
    outline: var(--awc-focus-ring);
    outline-offset: var(--awc-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--awc-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--awc-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--awc-input-height-large) var(--awc-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--awc-color-primary-600);
    caret-color: var(--awc-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--awc-input-height-large) var(--awc-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--awc-input-placeholder-color);
    user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--awc-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(awc-icon),
  .input__suffix ::slotted(awc-icon) {
    color: var(--awc-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--awc-input-border-radius-small);
    font-size: var(--awc-input-font-size-small);
    height: var(--awc-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--awc-input-height-small) - var(--awc-input-border-width) * 2);
    padding: 0 var(--awc-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--awc-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--awc-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--awc-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--awc-input-border-radius-medium);
    font-size: var(--awc-input-font-size-medium);
    height: var(--awc-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--awc-input-height-medium) - var(--awc-input-border-width) * 2);
    padding: 0 var(--awc-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--awc-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--awc-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--awc-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--awc-input-border-radius-large);
    font-size: var(--awc-input-font-size-large);
    height: var(--awc-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--awc-input-height-large) - var(--awc-input-border-width) * 2);
    padding: 0 var(--awc-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--awc-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--awc-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--awc-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--awc-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--awc-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--awc-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear:not(.input__clear--visible) {
    visibility: hidden;
  }

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--awc-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--awc-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--awc-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  .input--empty .input__clear {
    visibility: hidden;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`;var ux=Object.defineProperty,mx=Object.getOwnPropertyDescriptor,vt=(i,t,e,r)=>{for(var a=r>1?void 0:r?mx(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&ux(t,e,a),a},Uc=class extends R{constructor(){super(...arguments),this.formControlController=new oe(this,{assumeInteractionOn:["awc-blur","awc-input"]}),this.hasSlotController=new Ct(this,"help-text","label"),this.localize=new et(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){return this.__dateInput.type=this.type,this.__dateInput.value=this.value,this.input?.valueAsDate||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){return this.__numberInput.value=this.value,this.input?.valueAsNumber||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("awc-blur")}handleChange(){this.value=this.input.value,this.emit("awc-change")}handleClearClick(t){this.value="",this.emit("awc-clear"),this.emit("awc-input"),this.emit("awc-change"),this.input.focus(),t.stopPropagation()}handleFocus(){this.hasFocus=!0,this.emit("awc-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("awc-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){let e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!e&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,r="none"){this.input.setSelectionRange(t,e,r)}setRangeText(t,e,r,a){this.input.setRangeText(t,e,r,a),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){let t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),r=this.label?!0:!!t,a=this.helpText?!0:!!e,s=this.clearable&&!this.disabled&&!this.readonly,l=s&&(typeof this.value=="number"||this.value.length>0);return E`
      <div
        part="form-control"
        class=${Z({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":a})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${Z({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${H(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${H(this.placeholder)}
              minlength=${H(this.minlength)}
              maxlength=${H(this.maxlength)}
              min=${H(this.min)}
              max=${H(this.max)}
              step=${H(this.step)}
              .value=${ko(this.value)}
              autocapitalize=${H(this.autocapitalize)}
              autocomplete=${H(this.autocomplete)}
              autocorrect=${H(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${H(this.pattern)}
              enterkeyhint=${H(this.enterkeyhint)}
              inputmode=${H(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${s?E`
                  <button
                    part="clear-button"
                    class=${Z({input__clear:!0,"input__clear--visible":l})}
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <awc-icon name="x-circle-fill" library="system"></awc-icon>
                    </slot>
                  </button>
                `:""}
            ${this.passwordToggle&&!this.disabled?E`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?E`
                          <slot name="show-password-icon">
                            <awc-icon name="eye-slash" library="system"></awc-icon>
                          </slot>
                        `:E`
                          <slot name="hide-password-icon">
                            <awc-icon name="eye" library="system"></awc-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${a?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Uc.styles=Og,Uc.dependencies={"awc-icon":nt};var ut=Uc;vt([F(".input__control")],ut.prototype,"input",2);vt([X()],ut.prototype,"hasFocus",2);vt([u()],ut.prototype,"title",2);vt([u({reflect:!0})],ut.prototype,"type",2);vt([u()],ut.prototype,"name",2);vt([u()],ut.prototype,"value",2);vt([lo()],ut.prototype,"defaultValue",2);vt([u({reflect:!0})],ut.prototype,"size",2);vt([u({type:Boolean,reflect:!0})],ut.prototype,"filled",2);vt([u({type:Boolean,reflect:!0})],ut.prototype,"pill",2);vt([u()],ut.prototype,"label",2);vt([u({attribute:"help-text"})],ut.prototype,"helpText",2);vt([u({type:Boolean})],ut.prototype,"clearable",2);vt([u({type:Boolean,reflect:!0})],ut.prototype,"disabled",2);vt([u()],ut.prototype,"placeholder",2);vt([u({type:Boolean,reflect:!0})],ut.prototype,"readonly",2);vt([u({attribute:"password-toggle",type:Boolean})],ut.prototype,"passwordToggle",2);vt([u({attribute:"password-visible",type:Boolean})],ut.prototype,"passwordVisible",2);vt([u({attribute:"no-spin-buttons",type:Boolean})],ut.prototype,"noSpinButtons",2);vt([u({reflect:!0})],ut.prototype,"form",2);vt([u({type:Boolean,reflect:!0})],ut.prototype,"required",2);vt([u()],ut.prototype,"pattern",2);vt([u({type:Number})],ut.prototype,"minlength",2);vt([u({type:Number})],ut.prototype,"maxlength",2);vt([u()],ut.prototype,"min",2);vt([u()],ut.prototype,"max",2);vt([u()],ut.prototype,"step",2);vt([u()],ut.prototype,"autocapitalize",2);vt([u()],ut.prototype,"autocorrect",2);vt([u()],ut.prototype,"autocomplete",2);vt([u({type:Boolean})],ut.prototype,"autofocus",2);vt([u()],ut.prototype,"enterkeyhint",2);vt([u({type:Boolean,converter:{fromAttribute:i=>!(!i||i==="false"),toAttribute:i=>i?"true":"false"}})],ut.prototype,"spellcheck",2);vt([u()],ut.prototype,"inputmode",2);vt([M("disabled",{waitUntilFirstUpdate:!0})],ut.prototype,"handleDisabledChange",1);vt([M("step",{waitUntilFirstUpdate:!0})],ut.prototype,"handleStepChange",1);vt([M("value",{waitUntilFirstUpdate:!0})],ut.prototype,"handleValueChange",1);var Mg=A`
  ${N}

  :host(:not(:focus-within)) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`;var Ag=class extends R{render(){return E` <slot></slot> `}};Ag.styles=Mg;var fs=Ag;var $g=A`
  ${N}

  :host {
    --grid-width: 280px;
    --grid-height: 200px;
    --grid-handle-size: 16px;
    --slider-height: 15px;
    --slider-handle-size: 17px;
    --swatch-size: 25px;

    display: inline-block;
  }

  .color-picker {
    width: var(--grid-width);
    font-family: var(--awc-font-sans);
    font-size: var(--awc-font-size-medium);
    font-weight: var(--awc-font-weight-normal);
    color: var(--color);
    background-color: var(--awc-panel-background-color);
    border-radius: var(--awc-border-radius-medium);
    user-select: none;
    -webkit-user-select: none;
  }

  .color-picker--inline {
    border: solid var(--awc-panel-border-width) var(--awc-panel-border-color);
  }

  .color-picker--inline:focus-visible {
    outline: var(--awc-focus-ring);
    outline-offset: var(--awc-focus-ring-offset);
  }

  .color-picker__grid {
    position: relative;
    height: var(--grid-height);
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
      linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
    border-top-left-radius: var(--awc-border-radius-medium);
    border-top-right-radius: var(--awc-border-radius-medium);
    cursor: crosshair;
    forced-color-adjust: none;
  }

  .color-picker__grid-handle {
    position: absolute;
    width: var(--grid-handle-size);
    height: var(--grid-handle-size);
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    border: solid 2px white;
    margin-top: calc(var(--grid-handle-size) / -2);
    margin-left: calc(var(--grid-handle-size) / -2);
    transition: var(--awc-transition-fast) scale;
  }

  .color-picker__grid-handle--dragging {
    cursor: none;
    scale: 1.5;
  }

  .color-picker__grid-handle:focus-visible {
    outline: var(--awc-focus-ring);
  }

  .color-picker__controls {
    padding: var(--awc-spacing-small);
    display: flex;
    align-items: center;
  }

  .color-picker__sliders {
    flex: 1 1 auto;
  }

  .color-picker__slider {
    position: relative;
    height: var(--slider-height);
    border-radius: var(--awc-border-radius-pill);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
    forced-color-adjust: none;
  }

  .color-picker__slider:not(:last-of-type) {
    margin-bottom: var(--awc-spacing-small);
  }

  .color-picker__slider-handle {
    position: absolute;
    top: calc(50% - var(--slider-handle-size) / 2);
    width: var(--slider-handle-size);
    height: var(--slider-handle-size);
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    margin-left: calc(var(--slider-handle-size) / -2);
  }

  .color-picker__slider-handle:focus-visible {
    outline: var(--awc-focus-ring);
  }

  .color-picker__hue {
    background-image: linear-gradient(
      to right,
      rgb(255, 0, 0) 0%,
      rgb(255, 255, 0) 17%,
      rgb(0, 255, 0) 33%,
      rgb(0, 255, 255) 50%,
      rgb(0, 0, 255) 67%,
      rgb(255, 0, 255) 83%,
      rgb(255, 0, 0) 100%
    );
  }

  .color-picker__alpha .color-picker__alpha-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .color-picker__preview {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 2.25rem;
    height: 2.25rem;
    border: none;
    border-radius: var(--awc-border-radius-circle);
    background: none;
    margin-left: var(--awc-spacing-small);
    cursor: copy;
    forced-color-adjust: none;
  }

  .color-picker__preview:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);

    /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
    background-color: var(--preview-color);
  }

  .color-picker__preview:focus-visible {
    outline: var(--awc-focus-ring);
    outline-offset: var(--awc-focus-ring-offset);
  }

  .color-picker__preview-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
  }

  .color-picker__preview-color--copied {
    animation: pulse 0.75s;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--awc-color-primary-600);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  .color-picker__user-input {
    display: flex;
    padding: 0 var(--awc-spacing-small) var(--awc-spacing-small) var(--awc-spacing-small);
  }

  .color-picker__user-input awc-input {
    min-width: 0; /* fix input width in Safari */
    flex: 1 1 auto;
  }

  .color-picker__user-input awc-button-group {
    margin-left: var(--awc-spacing-small);
  }

  .color-picker__user-input awc-button {
    min-width: 3.25rem;
    max-width: 3.25rem;
    font-size: 1rem;
  }

  .color-picker__swatches {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 0.5rem;
    justify-items: center;
    border-top: solid 1px var(--awc-color-neutral-200);
    padding: var(--awc-spacing-small);
    forced-color-adjust: none;
  }

  .color-picker__swatch {
    position: relative;
    width: var(--swatch-size);
    height: var(--swatch-size);
    border-radius: var(--awc-border-radius-small);
  }

  .color-picker__swatch .color-picker__swatch-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
    border-radius: inherit;
    cursor: pointer;
  }

  .color-picker__swatch:focus-visible {
    outline: var(--awc-focus-ring);
    outline-offset: var(--awc-focus-ring-offset);
  }

  .color-picker__transparent-bg {
    background-image: linear-gradient(45deg, var(--awc-color-neutral-300) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, var(--awc-color-neutral-300) 75%),
      linear-gradient(45deg, transparent 75%, var(--awc-color-neutral-300) 75%),
      linear-gradient(45deg, var(--awc-color-neutral-300) 25%, transparent 25%);
    background-size: 10px 10px;
    background-position:
      0 0,
      0 0,
      -5px -5px,
      5px 5px;
  }

  .color-picker--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .color-picker--disabled .color-picker__grid,
  .color-picker--disabled .color-picker__grid-handle,
  .color-picker--disabled .color-picker__slider,
  .color-picker--disabled .color-picker__slider-handle,
  .color-picker--disabled .color-picker__preview,
  .color-picker--disabled .color-picker__swatch,
  .color-picker--disabled .color-picker__swatch-color {
    pointer-events: none;
  }

  /*
   * Color dropdown
   */

  .color-dropdown::part(panel) {
    max-height: none;
    background-color: var(--awc-panel-background-color);
    border: solid var(--awc-panel-border-width) var(--awc-panel-border-color);
    border-radius: var(--awc-border-radius-medium);
    overflow: visible;
  }

  .color-dropdown__trigger {
    display: inline-block;
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
    forced-color-adjust: none;
  }

  .color-dropdown__trigger.color-dropdown__trigger--small {
    width: var(--awc-input-height-small);
    height: var(--awc-input-height-small);
    border-radius: var(--awc-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--medium {
    width: var(--awc-input-height-medium);
    height: var(--awc-input-height-medium);
    border-radius: var(--awc-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--large {
    width: var(--awc-input-height-large);
    height: var(--awc-input-height-large);
    border-radius: var(--awc-border-radius-circle);
  }

  .color-dropdown__trigger:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: currentColor;
    box-shadow:
      inset 0 0 0 2px var(--awc-input-border-color-base),
      inset 0 0 0 4px var(--awc-color-neutral-0);
  }

  .color-dropdown__trigger--empty:before {
    background-color: transparent;
  }

  .color-dropdown__trigger:focus-visible {
    outline: none;
  }

  .color-dropdown__trigger:focus-visible:not(.color-dropdown__trigger--disabled) {
    outline: var(--awc-focus-ring);
    outline-offset: var(--awc-focus-ring-offset);
  }

  .color-dropdown__trigger.color-dropdown__trigger--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;function ye(i,t){fx(i)&&(i="100%");let e=gx(i);return i=t===360?i:Math.min(t,Math.max(0,parseFloat(i))),e&&(i=parseInt(String(i*t),10)/100),Math.abs(i-t)<1e-6?1:(t===360?i=(i<0?i%t+t:i%t)/parseFloat(String(t)):i=i%t/parseFloat(String(t)),i)}function gs(i){return Math.min(1,Math.max(0,i))}function fx(i){return typeof i=="string"&&i.indexOf(".")!==-1&&parseFloat(i)===1}function gx(i){return typeof i=="string"&&i.indexOf("%")!==-1}function Un(i){return i=parseFloat(i),(isNaN(i)||i<0||i>1)&&(i=1),i}function bs(i){return Number(i)<=1?`${Number(i)*100}%`:i}function tr(i){return i.length===1?"0"+i:String(i)}function Ig(i,t,e){return{r:ye(i,255)*255,g:ye(t,255)*255,b:ye(e,255)*255}}function Hc(i,t,e){i=ye(i,255),t=ye(t,255),e=ye(e,255);let r=Math.max(i,t,e),a=Math.min(i,t,e),s=0,l=0,p=(r+a)/2;if(r===a)l=0,s=0;else{let d=r-a;switch(l=p>.5?d/(2-r-a):d/(r+a),r){case i:s=(t-e)/d+(t<e?6:0);break;case t:s=(e-i)/d+2;break;case e:s=(i-t)/d+4;break}s/=6}return{h:s,s:l,l:p}}function Vc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*(6*e):e<1/2?t:e<2/3?i+(t-i)*(2/3-e)*6:i}function Dg(i,t,e){let r,a,s;if(i=ye(i,360),t=ye(t,100),e=ye(e,100),t===0)a=e,s=e,r=e;else{let l=e<.5?e*(1+t):e+t-e*t,p=2*e-l;r=Vc(p,l,i+1/3),a=Vc(p,l,i),s=Vc(p,l,i-1/3)}return{r:r*255,g:a*255,b:s*255}}function Zc(i,t,e){i=ye(i,255),t=ye(t,255),e=ye(e,255);let r=Math.max(i,t,e),a=Math.min(i,t,e),s=0,l=r,p=r-a,d=r===0?0:p/r;if(r===a)s=0;else{switch(r){case i:s=(t-e)/p+(t<e?6:0);break;case t:s=(e-i)/p+2;break;case e:s=(i-t)/p+4;break}s/=6}return{h:s,s:d,v:l}}function Bg(i,t,e){i=ye(i,360)*6,t=ye(t,100),e=ye(e,100);let r=Math.floor(i),a=i-r,s=e*(1-t),l=e*(1-a*t),p=e*(1-(1-a)*t),d=r%6,h=[e,l,s,s,p,e][d],f=[p,e,e,l,s,s][d],g=[s,s,p,e,e,l][d];return{r:h*255,g:f*255,b:g*255}}function Wc(i,t,e,r){let a=[tr(Math.round(i).toString(16)),tr(Math.round(t).toString(16)),tr(Math.round(e).toString(16))];return r&&a[0].startsWith(a[0].charAt(1))&&a[1].startsWith(a[1].charAt(1))&&a[2].startsWith(a[2].charAt(1))?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0):a.join("")}function Rg(i,t,e,r,a){let s=[tr(Math.round(i).toString(16)),tr(Math.round(t).toString(16)),tr(Math.round(e).toString(16)),tr(bx(r))];return a&&s[0].startsWith(s[0].charAt(1))&&s[1].startsWith(s[1].charAt(1))&&s[2].startsWith(s[2].charAt(1))&&s[3].startsWith(s[3].charAt(1))?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0)+s[3].charAt(0):s.join("")}function bx(i){return Math.round(parseFloat(i)*255).toString(16)}function qc(i){return ho(i)/255}function ho(i){return parseInt(i,16)}function Fg(i){return{r:i>>16,g:(i&65280)>>8,b:i&255}}var vs={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function Ng(i){let t={r:0,g:0,b:0},e=1,r=null,a=null,s=null,l=!1,p=!1;return typeof i=="string"&&(i=wx(i)),typeof i=="object"&&(Ri(i.r)&&Ri(i.g)&&Ri(i.b)?(t=Ig(i.r,i.g,i.b),l=!0,p=String(i.r).substr(-1)==="%"?"prgb":"rgb"):Ri(i.h)&&Ri(i.s)&&Ri(i.v)?(r=bs(i.s),a=bs(i.v),t=Bg(i.h,r,a),l=!0,p="hsv"):Ri(i.h)&&Ri(i.s)&&Ri(i.l)&&(r=bs(i.s),s=bs(i.l),t=Dg(i.h,r,s),l=!0,p="hsl"),Object.prototype.hasOwnProperty.call(i,"a")&&(e=i.a)),e=Un(e),{ok:l,format:i.format||p,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:e}}var vx="[-\\+]?\\d+%?",yx="[-\\+]?\\d*\\.\\d+%?",er=`(?:${yx})|(?:${vx})`,Gc=`[\\s|\\(]+(${er})[,|\\s]+(${er})[,|\\s]+(${er})\\s*\\)?`,Yc=`[\\s|\\(]+(${er})[,|\\s]+(${er})[,|\\s]+(${er})[,|\\s]+(${er})\\s*\\)?`,qo={CSS_UNIT:new RegExp(er),rgb:new RegExp("rgb"+Gc),rgba:new RegExp("rgba"+Yc),hsl:new RegExp("hsl"+Gc),hsla:new RegExp("hsla"+Yc),hsv:new RegExp("hsv"+Gc),hsva:new RegExp("hsva"+Yc),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function wx(i){if(i=i.trim().toLowerCase(),i.length===0)return!1;let t=!1;if(vs[i])i=vs[i],t=!0;else if(i==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let e=qo.rgb.exec(i);return e?{r:e[1],g:e[2],b:e[3]}:(e=qo.rgba.exec(i),e?{r:e[1],g:e[2],b:e[3],a:e[4]}:(e=qo.hsl.exec(i),e?{h:e[1],s:e[2],l:e[3]}:(e=qo.hsla.exec(i),e?{h:e[1],s:e[2],l:e[3],a:e[4]}:(e=qo.hsv.exec(i),e?{h:e[1],s:e[2],v:e[3]}:(e=qo.hsva.exec(i),e?{h:e[1],s:e[2],v:e[3],a:e[4]}:(e=qo.hex8.exec(i),e?{r:ho(e[1]),g:ho(e[2]),b:ho(e[3]),a:qc(e[4]),format:t?"name":"hex8"}:(e=qo.hex6.exec(i),e?{r:ho(e[1]),g:ho(e[2]),b:ho(e[3]),format:t?"name":"hex"}:(e=qo.hex4.exec(i),e?{r:ho(e[1]+e[1]),g:ho(e[2]+e[2]),b:ho(e[3]+e[3]),a:qc(e[4]+e[4]),format:t?"name":"hex8"}:(e=qo.hex3.exec(i),e?{r:ho(e[1]+e[1]),g:ho(e[2]+e[2]),b:ho(e[3]+e[3]),format:t?"name":"hex"}:!1)))))))))}function Ri(i){return!!qo.CSS_UNIT.exec(String(i))}var ys=class i{constructor(t="",e={}){if(t instanceof i)return t;typeof t=="number"&&(t=Fg(t)),this.originalInput=t;let r=Ng(t);this.originalInput=t,this.r=r.r,this.g=r.g,this.b=r.b,this.a=r.a,this.roundA=Math.round(100*this.a)/100,this.format=e.format??r.format,this.gradientType=e.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=r.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){let t=this.toRgb();return(t.r*299+t.g*587+t.b*114)/1e3}getLuminance(){let t=this.toRgb(),e,r,a,s=t.r/255,l=t.g/255,p=t.b/255;return s<=.03928?e=s/12.92:e=Math.pow((s+.055)/1.055,2.4),l<=.03928?r=l/12.92:r=Math.pow((l+.055)/1.055,2.4),p<=.03928?a=p/12.92:a=Math.pow((p+.055)/1.055,2.4),.2126*e+.7152*r+.0722*a}getAlpha(){return this.a}setAlpha(t){return this.a=Un(t),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){let{s:t}=this.toHsl();return t===0}toHsv(){let t=Zc(this.r,this.g,this.b);return{h:t.h*360,s:t.s,v:t.v,a:this.a}}toHsvString(){let t=Zc(this.r,this.g,this.b),e=Math.round(t.h*360),r=Math.round(t.s*100),a=Math.round(t.v*100);return this.a===1?`hsv(${e}, ${r}%, ${a}%)`:`hsva(${e}, ${r}%, ${a}%, ${this.roundA})`}toHsl(){let t=Hc(this.r,this.g,this.b);return{h:t.h*360,s:t.s,l:t.l,a:this.a}}toHslString(){let t=Hc(this.r,this.g,this.b),e=Math.round(t.h*360),r=Math.round(t.s*100),a=Math.round(t.l*100);return this.a===1?`hsl(${e}, ${r}%, ${a}%)`:`hsla(${e}, ${r}%, ${a}%, ${this.roundA})`}toHex(t=!1){return Wc(this.r,this.g,this.b,t)}toHexString(t=!1){return"#"+this.toHex(t)}toHex8(t=!1){return Rg(this.r,this.g,this.b,this.a,t)}toHex8String(t=!1){return"#"+this.toHex8(t)}toHexShortString(t=!1){return this.a===1?this.toHexString(t):this.toHex8String(t)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){let t=Math.round(this.r),e=Math.round(this.g),r=Math.round(this.b);return this.a===1?`rgb(${t}, ${e}, ${r})`:`rgba(${t}, ${e}, ${r}, ${this.roundA})`}toPercentageRgb(){let t=e=>`${Math.round(ye(e,255)*100)}%`;return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}}toPercentageRgbString(){let t=e=>Math.round(ye(e,255)*100);return this.a===1?`rgb(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%)`:`rgba(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%, ${this.roundA})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;let t="#"+Wc(this.r,this.g,this.b,!1);for(let[e,r]of Object.entries(vs))if(t===r)return e;return!1}toString(t){let e=!!t;t=t??this.format;let r=!1,a=this.a<1&&this.a>=0;return!e&&a&&(t.startsWith("hex")||t==="name")?t==="name"&&this.a===0?this.toName():this.toRgbString():(t==="rgb"&&(r=this.toRgbString()),t==="prgb"&&(r=this.toPercentageRgbString()),(t==="hex"||t==="hex6")&&(r=this.toHexString()),t==="hex3"&&(r=this.toHexString(!0)),t==="hex4"&&(r=this.toHex8String(!0)),t==="hex8"&&(r=this.toHex8String()),t==="name"&&(r=this.toName()),t==="hsl"&&(r=this.toHslString()),t==="hsv"&&(r=this.toHsvString()),r||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new i(this.toString())}lighten(t=10){let e=this.toHsl();return e.l+=t/100,e.l=gs(e.l),new i(e)}brighten(t=10){let e=this.toRgb();return e.r=Math.max(0,Math.min(255,e.r-Math.round(255*-(t/100)))),e.g=Math.max(0,Math.min(255,e.g-Math.round(255*-(t/100)))),e.b=Math.max(0,Math.min(255,e.b-Math.round(255*-(t/100)))),new i(e)}darken(t=10){let e=this.toHsl();return e.l-=t/100,e.l=gs(e.l),new i(e)}tint(t=10){return this.mix("white",t)}shade(t=10){return this.mix("black",t)}desaturate(t=10){let e=this.toHsl();return e.s-=t/100,e.s=gs(e.s),new i(e)}saturate(t=10){let e=this.toHsl();return e.s+=t/100,e.s=gs(e.s),new i(e)}greyscale(){return this.desaturate(100)}spin(t){let e=this.toHsl(),r=(e.h+t)%360;return e.h=r<0?360+r:r,new i(e)}mix(t,e=50){let r=this.toRgb(),a=new i(t).toRgb(),s=e/100,l={r:(a.r-r.r)*s+r.r,g:(a.g-r.g)*s+r.g,b:(a.b-r.b)*s+r.b,a:(a.a-r.a)*s+r.a};return new i(l)}analogous(t=6,e=30){let r=this.toHsl(),a=360/e,s=[this];for(r.h=(r.h-(a*t>>1)+720)%360;--t;)r.h=(r.h+a)%360,s.push(new i(r));return s}complement(){let t=this.toHsl();return t.h=(t.h+180)%360,new i(t)}monochromatic(t=6){let e=this.toHsv(),{h:r}=e,{s:a}=e,{v:s}=e,l=[],p=1/t;for(;t--;)l.push(new i({h:r,s:a,v:s})),s=(s+p)%1;return l}splitcomplement(){let t=this.toHsl(),{h:e}=t;return[this,new i({h:(e+72)%360,s:t.s,l:t.l}),new i({h:(e+216)%360,s:t.s,l:t.l})]}onBackground(t){let e=this.toRgb(),r=new i(t).toRgb(),a=e.a+r.a*(1-e.a);return new i({r:(e.r*e.a+r.r*r.a*(1-e.a))/a,g:(e.g*e.a+r.g*r.a*(1-e.a))/a,b:(e.b*e.a+r.b*r.a*(1-e.a))/a,a})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(t){let e=this.toHsl(),{h:r}=e,a=[this],s=360/t;for(let l=1;l<t;l++)a.push(new i({h:(r+l*s)%360,s:e.s,l:e.l}));return a}equals(t){return this.toRgbString()===new i(t).toRgbString()}};var _x=Object.defineProperty,xx=Object.getOwnPropertyDescriptor,It=(i,t,e,r)=>{for(var a=r>1?void 0:r?xx(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&_x(t,e,a),a},jg="EyeDropper"in window,Kc=class extends R{constructor(){super(),this.formControlController=new oe(this),this.isSafeValue=!1,this.localize=new et(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0,this.emit("awc-focus")},this.handleFocusOut=()=>{this.hasFocus=!1,this.emit("awc-blur")},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.input.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){let t=["hex","rgb","hsl","hsv"],e=(t.indexOf(this.format)+1)%t.length;this.format=t[e],this.setColor(this.value),this.emit("awc-change"),this.emit("awc-input")}handleAlphaDrag(t){let e=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),r=e.querySelector(".color-picker__slider-handle"),{width:a}=e.getBoundingClientRect(),s=this.value,l=this.value;r.focus(),t.preventDefault(),Qi(e,{onMove:p=>{this.alpha=te(p/a*100,0,100),this.syncValues(),this.value!==l&&(l=this.value,this.emit("awc-input"))},onStop:()=>{this.value!==s&&(s=this.value,this.emit("awc-change"))},initialEvent:t})}handleHueDrag(t){let e=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),r=e.querySelector(".color-picker__slider-handle"),{width:a}=e.getBoundingClientRect(),s=this.value,l=this.value;r.focus(),t.preventDefault(),Qi(e,{onMove:p=>{this.hue=te(p/a*360,0,360),this.syncValues(),this.value!==l&&(l=this.value,this.emit("awc-input"))},onStop:()=>{this.value!==s&&(s=this.value,this.emit("awc-change"))},initialEvent:t})}handleGridDrag(t){let e=this.shadowRoot.querySelector(".color-picker__grid"),r=e.querySelector(".color-picker__grid-handle"),{width:a,height:s}=e.getBoundingClientRect(),l=this.value,p=this.value;r.focus(),t.preventDefault(),this.isDraggingGridHandle=!0,Qi(e,{onMove:(d,h)=>{this.saturation=te(d/a*100,0,100),this.brightness=te(100-h/s*100,0,100),this.syncValues(),this.value!==p&&(p=this.value,this.emit("awc-input"))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==l&&(l=this.value,this.emit("awc-change"))},initialEvent:t})}handleAlphaKeyDown(t){let e=t.shiftKey?10:1,r=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.alpha=te(this.alpha-e,0,100),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.alpha=te(this.alpha+e,0,100),this.syncValues()),t.key==="Home"&&(t.preventDefault(),this.alpha=0,this.syncValues()),t.key==="End"&&(t.preventDefault(),this.alpha=100,this.syncValues()),this.value!==r&&(this.emit("awc-change"),this.emit("awc-input"))}handleHueKeyDown(t){let e=t.shiftKey?10:1,r=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.hue=te(this.hue-e,0,360),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.hue=te(this.hue+e,0,360),this.syncValues()),t.key==="Home"&&(t.preventDefault(),this.hue=0,this.syncValues()),t.key==="End"&&(t.preventDefault(),this.hue=360,this.syncValues()),this.value!==r&&(this.emit("awc-change"),this.emit("awc-input"))}handleGridKeyDown(t){let e=t.shiftKey?10:1,r=this.value;t.key==="ArrowLeft"&&(t.preventDefault(),this.saturation=te(this.saturation-e,0,100),this.syncValues()),t.key==="ArrowRight"&&(t.preventDefault(),this.saturation=te(this.saturation+e,0,100),this.syncValues()),t.key==="ArrowUp"&&(t.preventDefault(),this.brightness=te(this.brightness+e,0,100),this.syncValues()),t.key==="ArrowDown"&&(t.preventDefault(),this.brightness=te(this.brightness-e,0,100),this.syncValues()),this.value!==r&&(this.emit("awc-change"),this.emit("awc-input"))}handleInputChange(t){let e=t.target,r=this.value;t.stopPropagation(),this.input.value?(this.setColor(e.value),e.value=this.value):this.value="",this.value!==r&&(this.emit("awc-change"),this.emit("awc-input"))}handleInputInput(t){this.formControlController.updateValidity(),t.stopPropagation()}handleInputKeyDown(t){if(t.key==="Enter"){let e=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==e&&(this.emit("awc-change"),this.emit("awc-input")),setTimeout(()=>this.input.select())):this.hue=0}}handleInputInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleTouchMove(t){t.preventDefault()}parseColor(t){let e=new ys(t);if(!e.isValid)return null;let r=e.toHsl(),a={h:r.h,s:r.s*100,l:r.l*100,a:r.a},s=e.toRgb(),l=e.toHexString(),p=e.toHex8String(),d=e.toHsv(),h={h:d.h,s:d.s*100,v:d.v*100,a:d.a};return{hsl:{h:a.h,s:a.s,l:a.l,string:this.setLetterCase(`hsl(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.l)}%)`)},hsla:{h:a.h,s:a.s,l:a.l,a:a.a,string:this.setLetterCase(`hsla(${Math.round(a.h)}, ${Math.round(a.s)}%, ${Math.round(a.l)}%, ${a.a.toFixed(2).toString()})`)},hsv:{h:h.h,s:h.s,v:h.v,string:this.setLetterCase(`hsv(${Math.round(h.h)}, ${Math.round(h.s)}%, ${Math.round(h.v)}%)`)},hsva:{h:h.h,s:h.s,v:h.v,a:h.a,string:this.setLetterCase(`hsva(${Math.round(h.h)}, ${Math.round(h.s)}%, ${Math.round(h.v)}%, ${h.a.toFixed(2).toString()})`)},rgb:{r:s.r,g:s.g,b:s.b,string:this.setLetterCase(`rgb(${Math.round(s.r)}, ${Math.round(s.g)}, ${Math.round(s.b)})`)},rgba:{r:s.r,g:s.g,b:s.b,a:s.a,string:this.setLetterCase(`rgba(${Math.round(s.r)}, ${Math.round(s.g)}, ${Math.round(s.b)}, ${s.a.toFixed(2).toString()})`)},hex:this.setLetterCase(l),hexa:this.setLetterCase(p)}}setColor(t){let e=this.parseColor(t);return e===null?!1:(this.hue=e.hsva.h,this.saturation=e.hsva.s,this.brightness=e.hsva.v,this.alpha=this.opacity?e.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(t){return typeof t!="string"?"":this.uppercase?t.toUpperCase():t.toLowerCase()}async syncValues(){let t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);t!==null&&(this.format==="hsl"?this.inputValue=this.opacity?t.hsla.string:t.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?t.rgba.string:t.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?t.hsva.string:t.hsv.string:this.inputValue=this.opacity?t.hexa:t.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){jg&&new EyeDropper().open().then(t=>{let e=this.value;this.setColor(t.sRGBHex),this.value!==e&&(this.emit("awc-change"),this.emit("awc-input"))}).catch(()=>{})}selectSwatch(t){let e=this.value;this.disabled||(this.setColor(t),this.value!==e&&(this.emit("awc-change"),this.emit("awc-input")))}getHexString(t,e,r,a=100){let s=new ys(`hsva(${t}, ${e}, ${r}, ${a/100})`);return s.isValid?s.toHex8String():""}stopNestedEventPropagation(t){t.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(t,e){if(this.isEmpty=!e,e||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){let r=this.parseColor(e);r!==null?(this.inputValue=this.value,this.hue=r.hsva.h,this.saturation=r.hsva.s,this.brightness=r.hsva.v,this.alpha=r.hsva.a*100,this.syncValues()):this.inputValue=t??""}}focus(t){this.inline?this.base.focus(t):this.trigger.focus(t)}blur(){let t=this.inline?this.base:this.trigger;this.hasFocus&&(t.focus({preventScroll:!0}),t.blur()),this.dropdown?.open&&this.dropdown.hide()}getFormattedValue(t="hex"){let e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(e===null)return"";switch(t){case"hex":return e.hex;case"hexa":return e.hexa;case"rgb":return e.rgb.string;case"rgba":return e.rgba.string;case"hsl":return e.hsl.string;case"hsla":return e.hsla.string;case"hsv":return e.hsv.string;case"hsva":return e.hsva.string;default:return""}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.inline&&!this.validity.valid?(this.dropdown.show(),this.addEventListener("awc-after-show",()=>this.input.reportValidity(),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1):this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){let t=this.saturation,e=100-this.brightness,r=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(s=>s.trim()!==""),a=E`
      <div
        part="base"
        class=${Z({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled,"color-picker--focused":this.hasFocus})}
        aria-disabled=${this.disabled?"true":"false"}
        aria-labelledby="label"
        tabindex=${this.inline?"0":"-1"}
      >
        ${this.inline?E`
              <awc-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </awc-visually-hidden>
            `:null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${Qt({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${Z({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${Qt({top:`${e}%`,left:`${t}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${H(this.disabled?void 0:"0")}
            @keydown=${this.handleGridKeyDown}
          ></span>
        </div>

        <div class="color-picker__controls">
          <div class="color-picker__sliders">
            <div
              part="slider hue-slider"
              class="color-picker__hue color-picker__slider"
              @pointerdown=${this.handleHueDrag}
              @touchmove=${this.handleTouchMove}
            >
              <span
                part="slider-handle hue-slider-handle"
                class="color-picker__slider-handle"
                style=${Qt({left:`${this.hue===0?0:100/(360/this.hue)}%`})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${H(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?E`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${Qt({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${Qt({left:`${this.alpha}%`})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${H(this.disabled?void 0:"0")}
                      @keydown=${this.handleAlphaKeyDown}
                    ></span>
                  </div>
                `:""}
          </div>

          <button
            type="button"
            part="preview"
            class="color-picker__preview color-picker__transparent-bg"
            aria-label=${this.localize.term("copy")}
            style=${Qt({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            @click=${this.handleCopy}
          ></button>
        </div>

        <div class="color-picker__user-input" aria-live="polite">
          <awc-input
            part="input"
            type="text"
            name=${this.name}
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            value=${this.isEmpty?"":this.inputValue}
            ?required=${this.required}
            ?disabled=${this.disabled}
            aria-label=${this.localize.term("currentValue")}
            @keydown=${this.handleInputKeyDown}
            @awc-change=${this.handleInputChange}
            @awc-input=${this.handleInputInput}
            @awc-invalid=${this.handleInputInvalid}
            @awc-blur=${this.stopNestedEventPropagation}
            @awc-focus=${this.stopNestedEventPropagation}
          ></awc-input>

          <awc-button-group>
            ${this.noFormatToggle?"":E`
                  <awc-button
                    part="format-button"
                    aria-label=${this.localize.term("toggleColorFormat")}
                    exportparts="
                      base:format-button__base,
                      prefix:format-button__prefix,
                      label:format-button__label,
                      suffix:format-button__suffix,
                      caret:format-button__caret
                    "
                    @click=${this.handleFormatToggle}
                    @awc-blur=${this.stopNestedEventPropagation}
                    @awc-focus=${this.stopNestedEventPropagation}
                  >
                    ${this.setLetterCase(this.format)}
                  </awc-button>
                `}
            ${jg?E`
                  <awc-button
                    part="eye-dropper-button"
                    exportparts="
                      base:eye-dropper-button__base,
                      prefix:eye-dropper-button__prefix,
                      label:eye-dropper-button__label,
                      suffix:eye-dropper-button__suffix,
                      caret:eye-dropper-button__caret
                    "
                    @click=${this.handleEyeDropper}
                    @awc-blur=${this.stopNestedEventPropagation}
                    @awc-focus=${this.stopNestedEventPropagation}
                  >
                    <awc-icon
                      library="system"
                      name="eyedropper"
                      label=${this.localize.term("selectAColorFromTheScreen")}
                    ></awc-icon>
                  </awc-button>
                `:""}
          </awc-button-group>
        </div>

        ${r.length>0?E`
              <div part="swatches" class="color-picker__swatches">
                ${r.map(s=>{let l=this.parseColor(s);return l?E`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${H(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${s}
                      @click=${()=>this.selectSwatch(s)}
                      @keydown=${p=>!this.disabled&&p.key==="Enter"&&this.setColor(l.hexa)}
                    >
                      <div
                        class="color-picker__swatch-color"
                        style=${Qt({backgroundColor:l.hexa})}
                      ></div>
                    </div>
                  `:(console.error(`Unable to parse swatch color: "${s}"`,this),"")})}
              </div>
            `:""}
      </div>
    `;return this.inline?a:E`
      <awc-dropdown
        class="color-dropdown"
        aria-disabled=${this.disabled?"true":"false"}
        .containing-element=${this}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        @awc-after-hide=${this.handleAfterHide}
      >
        <button
          part="trigger"
          slot="trigger"
          class=${Z({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":this.size==="small","color-dropdown__trigger--medium":this.size==="medium","color-dropdown__trigger--large":this.size==="large","color-dropdown__trigger--empty":this.isEmpty,"color-dropdown__trigger--focused":this.hasFocus,"color-picker__transparent-bg":!0})}
          style=${Qt({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
        >
          <awc-visually-hidden>
            <slot name="label">${this.label}</slot>
          </awc-visually-hidden>
        </button>
        ${a}
      </awc-dropdown>
    `}};Kc.styles=$g,Kc.dependencies={"awc-button-group":si,"awc-button":Ot,"awc-dropdown":Ae,"awc-icon":nt,"awc-input":ut,"awc-visually-hidden":fs};var zt=Kc;It([F('[part~="base"]')],zt.prototype,"base",2);It([F('[part~="input"]')],zt.prototype,"input",2);It([F(".color-dropdown")],zt.prototype,"dropdown",2);It([F('[part~="preview"]')],zt.prototype,"previewButton",2);It([F('[part~="trigger"]')],zt.prototype,"trigger",2);It([X()],zt.prototype,"hasFocus",2);It([X()],zt.prototype,"isDraggingGridHandle",2);It([X()],zt.prototype,"isEmpty",2);It([X()],zt.prototype,"inputValue",2);It([X()],zt.prototype,"hue",2);It([X()],zt.prototype,"saturation",2);It([X()],zt.prototype,"brightness",2);It([X()],zt.prototype,"alpha",2);It([u()],zt.prototype,"value",2);It([lo()],zt.prototype,"defaultValue",2);It([u()],zt.prototype,"label",2);It([u()],zt.prototype,"format",2);It([u({type:Boolean,reflect:!0})],zt.prototype,"inline",2);It([u({reflect:!0})],zt.prototype,"size",2);It([u({attribute:"no-format-toggle",type:Boolean})],zt.prototype,"noFormatToggle",2);It([u()],zt.prototype,"name",2);It([u({type:Boolean,reflect:!0})],zt.prototype,"disabled",2);It([u({type:Boolean})],zt.prototype,"hoist",2);It([u({type:Boolean})],zt.prototype,"opacity",2);It([u({type:Boolean})],zt.prototype,"uppercase",2);It([u()],zt.prototype,"swatches",2);It([u({reflect:!0})],zt.prototype,"form",2);It([u({type:Boolean,reflect:!0})],zt.prototype,"required",2);It([M("format",{waitUntilFirstUpdate:!0})],zt.prototype,"handleFormatChange",1);It([M("opacity",{waitUntilFirstUpdate:!0})],zt.prototype,"handleOpacityChange",1);It([M("value")],zt.prototype,"handleValueChange",1);zt.define("awc-color-picker");var Ug=A`
  ${N}

  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--awc-tooltip-arrow-size);
    --arrow-color: var(--awc-tooltip-background-color);
  }

  .tooltip::part(popup) {
    pointer-events: none;
    z-index: var(--awc-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--awc-tooltip-border-radius);
    background-color: var(--awc-tooltip-background-color);
    font-family: var(--awc-tooltip-font-family);
    font-size: var(--awc-tooltip-font-size);
    font-weight: var(--awc-tooltip-font-weight);
    line-height: var(--awc-tooltip-line-height);
    color: var(--awc-tooltip-color);
    padding: var(--awc-tooltip-padding-y) var(--awc-tooltip-padding-x);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`;var kx=Object.defineProperty,Cx=Object.getOwnPropertyDescriptor,uo=(i,t,e,r)=>{for(var a=r>1?void 0:r?Cx(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&kx(t,e,a),a},Xc=class extends R{constructor(){super(),this.localize=new et(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleKeyDown=t=>{this.open&&!this.disabled&&t.key==="Escape"&&(t.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){let t=Nl(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),t)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){let t=Nl(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),t)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}connectedCallback(){super.connectedCallback()}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(t){return this.trigger.split(" ").includes(t)}async handleOpenChange(){if(this.open){if(this.disabled)return;this.emit("awc-show"),await At(this.body),this.body.hidden=!1,this.popup.active=!0;let{keyframes:t,options:e}=yt(this,"tooltip.show",{dir:this.localize.dir()});await Tt(this.popup.popup,t,e),this.emit("awc-after-show")}else{this.emit("awc-hide"),await At(this.body);let{keyframes:t,options:e}=yt(this,"tooltip.hide",{dir:this.localize.dir()});await Tt(this.popup.popup,t,e),this.popup.active=!1,this.body.hidden=!0,this.emit("awc-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,Kt(this,"awc-after-show")}async hide(){if(this.open)return this.open=!1,Kt(this,"awc-after-hide")}render(){return E`
      <awc-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${Z({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </awc-popup>
    `}};Xc.styles=Ug,Xc.dependencies={"awc-popup":Lt};var we=Xc;uo([F("slot:not([name])")],we.prototype,"defaultSlot",2);uo([F(".tooltip__body")],we.prototype,"body",2);uo([F("awc-popup")],we.prototype,"popup",2);uo([u()],we.prototype,"content",2);uo([u()],we.prototype,"placement",2);uo([u({type:Boolean,reflect:!0})],we.prototype,"disabled",2);uo([u({type:Number})],we.prototype,"distance",2);uo([u({type:Boolean,reflect:!0})],we.prototype,"open",2);uo([u({type:Number})],we.prototype,"skidding",2);uo([u()],we.prototype,"trigger",2);uo([u({type:Boolean})],we.prototype,"hoist",2);uo([M("open",{waitUntilFirstUpdate:!0})],we.prototype,"handleOpenChange",1);uo([M(["content","distance","hoist","placement","skidding"])],we.prototype,"handleOptionsChange",1);uo([M("disabled")],we.prototype,"handleDisabledChange",1);ht("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});ht("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});var Vg=A`
  ${N}

  :host {
    --error-color: var(--awc-color-danger-600);
    --success-color: var(--awc-color-success-600);

    display: inline-block;
  }

  .copy-button__button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--awc-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--awc-spacing-x-small);
    cursor: pointer;
    transition: var(--awc-transition-x-fast) color;
  }

  .copy-button--success .copy-button__button {
    color: var(--success-color);
  }

  .copy-button--error .copy-button__button {
    color: var(--error-color);
  }

  .copy-button__button:focus-visible {
    outline: var(--awc-focus-ring);
    outline-offset: var(--awc-focus-ring-offset);
  }

  .copy-button__button[disabled] {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  slot {
    display: inline-flex;
  }
`;var Lx=Object.defineProperty,zx=Object.getOwnPropertyDescriptor,Xe=(i,t,e,r)=>{for(var a=r>1?void 0:r?zx(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&Lx(t,e,a),a},Jc=class extends R{constructor(){super(...arguments),this.localize=new et(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top",this.hoist=!1}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let t=this.value;if(this.from){let e=this.getRootNode(),r=this.from.includes("."),a=this.from.includes("[")&&this.from.includes("]"),s=this.from,l="";r?[s,l]=this.from.trim().split("."):a&&([s,l]=this.from.trim().replace(/\]$/,"").split("["));let p="getElementById"in e?e.getElementById(s):null;p?a?t=p.getAttribute(l)||"":r?t=p[l]||"":t=p.textContent||"":(this.showStatus("error"),this.emit("awc-error"))}if(!t)this.showStatus("error"),this.emit("awc-error");else try{await navigator.clipboard.writeText(t),this.showStatus("success"),this.emit("awc-copy",{detail:{value:t}})}catch{this.showStatus("error"),this.emit("awc-error")}}async showStatus(t){let e=this.copyLabel||this.localize.term("copy"),r=this.successLabel||this.localize.term("copied"),a=this.errorLabel||this.localize.term("error"),s=t==="success"?this.successIcon:this.errorIcon,l=yt(this,"copy.in",{dir:"ltr"}),p=yt(this,"copy.out",{dir:"ltr"});this.tooltip.content=t==="success"?r:a,await this.copyIcon.animate(p.keyframes,p.options).finished,this.copyIcon.hidden=!0,this.status=t,s.hidden=!1,await s.animate(l.keyframes,l.options).finished,setTimeout(async()=>{await s.animate(p.keyframes,p.options).finished,s.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(l.keyframes,l.options).finished,this.tooltip.content=e,this.isCopying=!1},this.feedbackDuration)}render(){let t=this.copyLabel||this.localize.term("copy");return E`
      <awc-tooltip
        class=${Z({"copy-button":!0,"copy-button--success":this.status==="success","copy-button--error":this.status==="error"})}
        content=${t}
        placement=${this.tooltipPlacement}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        exportparts="
          base:tooltip__base,
          base__popup:tooltip__base__popup,
          base__arrow:tooltip__base__arrow,
          body:tooltip__body
        "
      >
        <button
          class="copy-button__button"
          part="button"
          type="button"
          ?disabled=${this.disabled}
          @click=${this.handleCopy}
        >
          <slot part="copy-icon" name="copy-icon">
            <awc-icon library="system" name="copy"></awc-icon>
          </slot>
          <slot part="success-icon" name="success-icon" hidden>
            <awc-icon library="system" name="check"></awc-icon>
          </slot>
          <slot part="error-icon" name="error-icon" hidden>
            <awc-icon library="system" name="x-lg"></awc-icon>
          </slot>
        </button>
      </awc-tooltip>
    `}};Jc.styles=Vg,Jc.dependencies={"awc-icon":nt,"awc-tooltip":we};var ze=Jc;Xe([F('slot[name="copy-icon"]')],ze.prototype,"copyIcon",2);Xe([F('slot[name="success-icon"]')],ze.prototype,"successIcon",2);Xe([F('slot[name="error-icon"]')],ze.prototype,"errorIcon",2);Xe([F("awc-tooltip")],ze.prototype,"tooltip",2);Xe([X()],ze.prototype,"isCopying",2);Xe([X()],ze.prototype,"status",2);Xe([u()],ze.prototype,"value",2);Xe([u()],ze.prototype,"from",2);Xe([u({type:Boolean,reflect:!0})],ze.prototype,"disabled",2);Xe([u({attribute:"copy-label"})],ze.prototype,"copyLabel",2);Xe([u({attribute:"success-label"})],ze.prototype,"successLabel",2);Xe([u({attribute:"error-label"})],ze.prototype,"errorLabel",2);Xe([u({attribute:"feedback-duration",type:Number})],ze.prototype,"feedbackDuration",2);Xe([u({attribute:"tooltip-placement"})],ze.prototype,"tooltipPlacement",2);Xe([u({type:Boolean})],ze.prototype,"hoist",2);ht("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}});ht("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}});ze.define("awc-copy-button");var Hg=A`
  ${N}

  :host {
    display: block;
    --padding: var(--awc-spacing-medium);
    --border-width: 1px;
    --border-color: var(--awc-color-neutral-200);
    --border-radius: var(--awc-card-border-radius);
    --background-color: transparent;
  }

  .details {
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
    background-color: var(--background-color);
    overflow-anchor: none;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--padding);
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
  }

  .details__header::-webkit-details-marker {
    display: none;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--awc-focus-ring);
    outline-offset: calc(1px + var(--awc-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
    pointer-events: none;
  }

  .details--disabled .details__header .details__summary,
  .details--disabled .details__header .details__summary-icon {
    color: var(--awc-color-neutral-500);
  }

  .details--disabled .details__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    font-weight: var(--awc-font-weight-semibold);
    color: var(--awc-text-title-color);
    transition: var(--awc-transition-medium) color ease;
  }

  .details__summary:hover {
    color: var(--awc-color-primary-600);
  }

  .details__summary:active,
  .details--open .details__summary,
  .details--open .details__summary-icon {
    color: var(--awc-color-primary-800);
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--awc-transition-medium) rotate ease;
  }

  .details--open .details__summary-icon {
    rotate: -180deg;
  }

  .details--open.details--rtl .details__summary-icon {
    rotate: 180deg;
  }

  .details--open slot[name='expand-icon'],
  .details:not(.details--open) slot[name='collapse-icon'] {
    display: none;
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    display: block;
    padding: var(--padding);
  }
`;var Sx=Object.defineProperty,Tx=Object.getOwnPropertyDescriptor,or=(i,t,e,r)=>{for(var a=r>1?void 0:r?Tx(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&Sx(t,e,a),a},Qc=class extends R{constructor(){super(...arguments),this.localize=new et(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(t=>{for(let e of t)e.type==="attributes"&&e.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){super.disconnectedCallback(),this.detailsObserver.disconnect()}handleSummaryClick(t){t.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(t){(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.open?this.hide():this.show()),(t.key==="ArrowUp"||t.key==="ArrowLeft")&&(t.preventDefault(),this.hide()),(t.key==="ArrowDown"||t.key==="ArrowRight")&&(t.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("awc-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await At(this.body);let{keyframes:t,options:e}=yt(this,"details.show",{dir:this.localize.dir()});await Tt(this.body,ea(t,this.body.scrollHeight),e),this.body.style.height="auto",this.emit("awc-after-show")}else{if(this.emit("awc-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await At(this.body);let{keyframes:t,options:e}=yt(this,"details.hide",{dir:this.localize.dir()});await Tt(this.body,ea(t,this.body.scrollHeight),e),this.body.style.height="auto",this.details.open=!1,this.emit("awc-after-hide")}}async show(){if(!(this.open||this.disabled))return this.open=!0,Kt(this,"awc-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,Kt(this,"awc-after-hide")}render(){let t=this.localize.dir()==="rtl";return E`
      <details
        part="base"
        class=${Z({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":t})}
      >
        <summary
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="content"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="details__summary">${this.summary}</slot>

          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <awc-icon library="system" name="chevron-down"></awc-icon>
            </slot>
            <slot name="collapse-icon">
              <awc-icon library="system" name="chevron-down"></awc-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" part="body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `}};Qc.styles=Hg,Qc.dependencies={"awc-icon":nt};var Go=Qc;or([F(".details")],Go.prototype,"details",2);or([F(".details__header")],Go.prototype,"header",2);or([F(".details__body")],Go.prototype,"body",2);or([F(".details__expand-icon-slot")],Go.prototype,"expandIconSlot",2);or([u({type:Boolean,reflect:!0})],Go.prototype,"open",2);or([u()],Go.prototype,"summary",2);or([u({type:Boolean,reflect:!0})],Go.prototype,"disabled",2);or([M("open",{waitUntilFirstUpdate:!0})],Go.prototype,"handleOpenChange",1);ht("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});ht("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});Go.define("awc-details");function Zg(i,t){return{top:Math.round(i.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(i.getBoundingClientRect().left-t.getBoundingClientRect().left)}}var td=new Set;function Px(){let i=document.documentElement.clientWidth;return Math.abs(window.innerWidth-i)}function Or(i){if(td.add(i),!document.body.classList.contains("sl-scroll-lock")){let t=Px();document.body.classList.add("sl-scroll-lock"),document.body.style.setProperty("--sl-scroll-lock-size",`${t}px`)}}function Mr(i){td.delete(i),td.size===0&&(document.body.classList.remove("sl-scroll-lock"),document.body.style.removeProperty("--sl-scroll-lock-size"))}function ws(i,t,e="vertical",r="smooth"){let a=Zg(i,t),s=a.top+t.scrollTop,l=a.left+t.scrollLeft,p=t.scrollLeft,d=t.scrollLeft+t.offsetWidth,h=t.scrollTop,f=t.scrollTop+t.offsetHeight;(e==="horizontal"||e==="both")&&(l<p?t.scrollTo({left:l,behavior:r}):l+i.clientWidth>d&&t.scrollTo({left:l-t.offsetWidth+i.clientWidth,behavior:r})),(e==="vertical"||e==="both")&&(s<h?t.scrollTo({top:s,behavior:r}):s+i.clientHeight>f&&t.scrollTo({top:s-t.offsetHeight+i.clientHeight,behavior:r}))}function*Wg(i=document.activeElement){i!=null&&(yield i,"shadowRoot"in i&&i.shadowRoot&&i.shadowRoot.mode!=="closed"&&(yield*Wg(i.shadowRoot.activeElement)))}function qg(){return[...Wg()].pop()}var _s=[],ka=class{constructor(t){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=e=>{if(e.key!=="Tab"||this.isExternalActivated||!this.isActive())return;e.shiftKey?this.tabDirection="backward":this.tabDirection="forward",e.preventDefault();let r=$n(this.element),a=qg(),s=r.findIndex(p=>p===a);if(s===-1){this.currentFocus=r[0],this.currentFocus?.focus({preventScroll:!0});return}let l=this.tabDirection==="forward"?1:-1;s+l>=r.length?s=0:s+l<0?s=r.length-1:s+=l,this.currentFocus=r[s],this.currentFocus?.focus({preventScroll:!0}),setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=t}activate(){_s.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){_s=_s.filter(t=>t!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return _s[_s.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){let t=$n(this.element);if(!this.element.matches(":focus-within")){let e=t[0],r=t[t.length-1],a=this.tabDirection==="forward"?e:r;typeof a?.focus=="function"&&(this.currentFocus=a,a.focus({preventScroll:!0}))}}}};var Gg=A`
  ${N}

  :host {
    --width: 31rem;
    --header-spacing: var(--awc-spacing-large);
    --body-spacing: var(--awc-spacing-large);
    --footer-spacing: var(--awc-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--awc-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--awc-spacing-2x-large));
    max-height: calc(100% - var(--awc-spacing-2x-large));
    background-color: var(--awc-panel-background-color);
    border-radius: var(--awc-border-radius-medium);
    box-shadow: var(--awc-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--awc-font-size-large);
    line-height: var(--awc-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--awc-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions awc-icon-button,
  .dialog__header-actions ::slotted(awc-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--awc-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(awc-button:not(:first-of-type)) {
    margin-inline-start: var(--awc-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--awc-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--awc-color-neutral-0);
    }
  }
`;var Ex=Object.defineProperty,Ox=Object.getOwnPropertyDescriptor,Ar=(i,t,e,r)=>{for(var a=r>1?void 0:r?Ox(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&Ex(t,e,a),a},ed=class extends R{constructor(){super(...arguments),this.hasSlotController=new Ct(this,"footer"),this.localize=new et(this),this.modal=new ka(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=t=>{t.key==="Escape"&&this.modal.isActive()&&this.open&&(t.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),Or(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),Mr(this)}requestClose(t){if(this.emit("awc-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){let e=yt(this,"dialog.denyClose",{dir:this.localize.dir()});Tt(this.panel,e.keyframes,e.options);return}this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("awc-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),Or(this);let t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([At(this.dialog),At(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("awc-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});let e=yt(this,"dialog.show",{dir:this.localize.dir()}),r=yt(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([Tt(this.panel,e.keyframes,e.options),Tt(this.overlay,r.keyframes,r.options)]),this.emit("awc-after-show")}else{this.emit("awc-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([At(this.dialog),At(this.overlay)]);let t=yt(this,"dialog.hide",{dir:this.localize.dir()}),e=yt(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([Tt(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),Tt(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,Mr(this);let r=this.originalTrigger;typeof r?.focus=="function"&&setTimeout(()=>r.focus()),this.emit("awc-after-hide")}}async show(){if(!this.open)return this.open=!0,Kt(this,"awc-after-show")}async hide(){if(this.open)return this.open=!1,Kt(this,"awc-after-hide")}render(){return E`
      <div
        part="base"
        class=${Z({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${H(this.noHeader?this.label:void 0)}
          aria-labelledby=${H(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":E`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <awc-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></awc-icon-button>
                  </div>
                </header>
              `}
          ${""}
          <slot part="body" class="dialog__body" tabindex="-1"></slot>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};ed.styles=Gg,ed.dependencies={"awc-icon-button":Ut};var pi=ed;Ar([F(".dialog")],pi.prototype,"dialog",2);Ar([F(".dialog__panel")],pi.prototype,"panel",2);Ar([F(".dialog__overlay")],pi.prototype,"overlay",2);Ar([u({type:Boolean,reflect:!0})],pi.prototype,"open",2);Ar([u({reflect:!0})],pi.prototype,"label",2);Ar([u({attribute:"no-header",type:Boolean,reflect:!0})],pi.prototype,"noHeader",2);Ar([M("open",{waitUntilFirstUpdate:!0})],pi.prototype,"handleOpenChange",1);ht("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});ht("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});ht("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});ht("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});ht("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});pi.define("awc-dialog");var Yg=A`
  ${N}

  :host {
    --color: var(--awc-color-gray-200);
    --width: 1px;
    --style: solid;
    --spacing: var(--awc-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: var(--style) var(--width) var(--color) !important;
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: var(--style) var(--width) var(--color) !important;
    margin: 0 var(--spacing);
  }
`;var Mx=Object.defineProperty,Ax=Object.getOwnPropertyDescriptor,Kg=(i,t,e,r)=>{for(var a=r>1?void 0:r?Ax(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&Mx(t,e,a),a},Xg=class extends R{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};Xg.styles=Yg;var xs=Xg;Kg([u({type:Boolean,reflect:!0})],xs.prototype,"vertical",2);Kg([M("vertical")],xs.prototype,"handleVerticalChange",1);xs.define("awc-divider");function od(i){return i.charAt(0).toUpperCase()+i.slice(1)}var Jg=A`
  ${N}

  :host {
    --size: 25rem;
    --header-spacing: var(--awc-spacing-large);
    --body-spacing: var(--awc-spacing-large);
    --footer-spacing: var(--awc-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--awc-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--awc-panel-background-color);
    box-shadow: var(--awc-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--awc-font-size-large);
    line-height: var(--awc-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--awc-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions awc-icon-button,
  .drawer__header-actions ::slotted(awc-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--awc-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(awc-button:not(:last-of-type)) {
    margin-inline-end: var(--awc-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--awc-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--awc-color-neutral-0);
    }
  }
`;var $x=Object.defineProperty,Ix=Object.getOwnPropertyDescriptor,hi=(i,t,e,r)=>{for(var a=r>1?void 0:r?Ix(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&$x(t,e,a),a},id=class extends R{constructor(){super(...arguments),this.hasSlotController=new Ct(this,"footer"),this.localize=new et(this),this.modal=new ka(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=t=>{this.contained||t.key==="Escape"&&this.modal.isActive()&&this.open&&(t.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),Or(this)))}disconnectedCallback(){super.disconnectedCallback(),Mr(this)}requestClose(t){if(this.emit("awc-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){let e=yt(this,"drawer.denyClose",{dir:this.localize.dir()});Tt(this.panel,e.keyframes,e.options);return}this.hide()}addOpenListeners(){document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("awc-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),Or(this));let t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([At(this.drawer),At(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("awc-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});let e=yt(this,`drawer.show${od(this.placement)}`,{dir:this.localize.dir()}),r=yt(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([Tt(this.panel,e.keyframes,e.options),Tt(this.overlay,r.keyframes,r.options)]),this.emit("awc-after-show")}else{this.emit("awc-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),Mr(this)),await Promise.all([At(this.drawer),At(this.overlay)]);let t=yt(this,`drawer.hide${od(this.placement)}`,{dir:this.localize.dir()}),e=yt(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([Tt(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),Tt(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;let r=this.originalTrigger;typeof r?.focus=="function"&&setTimeout(()=>r.focus()),this.emit("awc-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),Or(this)),this.open&&this.contained&&(this.modal.deactivate(),Mr(this))}async show(){if(!this.open)return this.open=!0,Kt(this,"awc-after-show")}async hide(){if(this.open)return this.open=!1,Kt(this,"awc-after-hide")}render(){return E`
      <div
        part="base"
        class=${Z({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${H(this.noHeader?this.label:void 0)}
          aria-labelledby=${H(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":E`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <awc-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click=${()=>this.requestClose("close-button")}
                    ></awc-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};id.styles=Jg,id.dependencies={"awc-icon-button":Ut};var Lo=id;hi([F(".drawer")],Lo.prototype,"drawer",2);hi([F(".drawer__panel")],Lo.prototype,"panel",2);hi([F(".drawer__overlay")],Lo.prototype,"overlay",2);hi([u({type:Boolean,reflect:!0})],Lo.prototype,"open",2);hi([u({reflect:!0})],Lo.prototype,"label",2);hi([u({reflect:!0})],Lo.prototype,"placement",2);hi([u({type:Boolean,reflect:!0})],Lo.prototype,"contained",2);hi([u({attribute:"no-header",type:Boolean,reflect:!0})],Lo.prototype,"noHeader",2);hi([M("open",{waitUntilFirstUpdate:!0})],Lo.prototype,"handleOpenChange",1);hi([M("contained",{waitUntilFirstUpdate:!0})],Lo.prototype,"handleNoModalChange",1);ht("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});ht("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});ht("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});ht("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});ht("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});ht("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});ht("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});ht("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});ht("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});ht("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});ht("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});Lo.define("awc-drawer");Ae.define("awc-dropdown");var Dx=Object.defineProperty,Bx=Object.getOwnPropertyDescriptor,rd=(i,t,e,r)=>{for(var a=r>1?void 0:r?Bx(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&Dx(t,e,a),a},ui=class extends R{constructor(){super(...arguments),this.localize=new et(this),this.value=0,this.unit="byte",this.display="short"}render(){if(isNaN(this.value))return"";let t=["","kilo","mega","giga","tera"],e=["","kilo","mega","giga","tera","peta"],r=this.unit==="bit"?t:e,a=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),r.length-1)),s=r[a]+this.unit,l=parseFloat((this.value/Math.pow(1e3,a)).toPrecision(3));return this.localize.number(l,{style:"unit",unit:s,unitDisplay:this.display})}};rd([u({type:Number})],ui.prototype,"value",2);rd([u()],ui.prototype,"unit",2);rd([u()],ui.prototype,"display",2);ui.define("awc-format-bytes");var Rx=Object.defineProperty,Fx=Object.getOwnPropertyDescriptor,Io=(i,t,e,r)=>{for(var a=r>1?void 0:r?Fx(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&Rx(t,e,a),a},$e=class extends R{constructor(){super(...arguments),this.localize=new et(this),this.date=new Date,this.hourFormat="auto"}render(){let t=new Date(this.date),e=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(!isNaN(t.getMilliseconds()))return E`
      <time datetime=${t.toISOString()}>
        ${this.localize.date(t,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:e})}
      </time>
    `}};Io([u()],$e.prototype,"date",2);Io([u()],$e.prototype,"weekday",2);Io([u()],$e.prototype,"era",2);Io([u()],$e.prototype,"year",2);Io([u()],$e.prototype,"month",2);Io([u()],$e.prototype,"day",2);Io([u()],$e.prototype,"hour",2);Io([u()],$e.prototype,"minute",2);Io([u()],$e.prototype,"second",2);Io([u({attribute:"time-zone-name"})],$e.prototype,"timeZoneName",2);Io([u({attribute:"time-zone"})],$e.prototype,"timeZone",2);Io([u({attribute:"hour-format"})],$e.prototype,"hourFormat",2);$e.define("awc-format-date");var Nx=Object.defineProperty,jx=Object.getOwnPropertyDescriptor,mi=(i,t,e,r)=>{for(var a=r>1?void 0:r?jx(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&Nx(t,e,a),a},Je=class extends R{constructor(){super(...arguments),this.localize=new et(this),this.value=0,this.type="decimal",this.noGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.noGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};mi([u({type:Number})],Je.prototype,"value",2);mi([u()],Je.prototype,"type",2);mi([u({attribute:"no-grouping",type:Boolean})],Je.prototype,"noGrouping",2);mi([u()],Je.prototype,"currency",2);mi([u({attribute:"currency-display"})],Je.prototype,"currencyDisplay",2);mi([u({attribute:"minimum-integer-digits",type:Number})],Je.prototype,"minimumIntegerDigits",2);mi([u({attribute:"minimum-fraction-digits",type:Number})],Je.prototype,"minimumFractionDigits",2);mi([u({attribute:"maximum-fraction-digits",type:Number})],Je.prototype,"maximumFractionDigits",2);mi([u({attribute:"minimum-significant-digits",type:Number})],Je.prototype,"minimumSignificantDigits",2);mi([u({attribute:"maximum-significant-digits",type:Number})],Je.prototype,"maximumSignificantDigits",2);Je.define("awc-format-number");nt.define("awc-icon");Ut.define("awc-icon-button");var Qg=A`
  ${N}

  :host {
    --divider-width: 2px;
    --handle-size: 2.5rem;

    display: inline-block;
    position: relative;
  }

  .image-comparer {
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
  }

  .image-comparer__before,
  .image-comparer__after {
    display: block;
    pointer-events: none;
  }

  .image-comparer__before::slotted(img),
  .image-comparer__after::slotted(img),
  .image-comparer__before::slotted(svg),
  .image-comparer__after::slotted(svg) {
    display: block;
    max-width: 100% !important;
    height: auto;
  }

  .image-comparer__after {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .image-comparer__divider {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    width: var(--divider-width);
    height: 100%;
    background-color: var(--awc-color-neutral-0);
    translate: calc(var(--divider-width) / -2);
    cursor: ew-resize;
  }

  .image-comparer__handle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: calc(50% - (var(--handle-size) / 2));
    width: var(--handle-size);
    height: var(--handle-size);
    background-color: var(--awc-color-neutral-0);
    border-radius: var(--awc-border-radius-circle);
    font-size: calc(var(--handle-size) * 0.5);
    color: var(--awc-color-neutral-700);
    cursor: inherit;
    z-index: 10;
  }

  .image-comparer__handle:focus-visible {
    outline: var(--awc-focus-ring);
    outline-offset: var(--awc-focus-ring-offset);
  }
`;var Ux=Object.defineProperty,Vx=Object.getOwnPropertyDescriptor,Vn=(i,t,e,r)=>{for(var a=r>1?void 0:r?Vx(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&Ux(t,e,a),a},ad=class extends R{constructor(){super(...arguments),this.localize=new et(this),this.position=50}handleDrag(t){let{width:e}=this.base.getBoundingClientRect(),r=this.localize.dir()==="rtl";t.preventDefault(),Qi(this.base,{onMove:a=>{this.position=parseFloat(te(a/e*100,0,100).toFixed(2)),r&&(this.position=100-this.position)},initialEvent:t})}handleKeyDown(t){let e=this.localize.dir()==="ltr",r=this.localize.dir()==="rtl";if(["ArrowLeft","ArrowRight","Home","End"].includes(t.key)){let a=t.shiftKey?10:1,s=this.position;t.preventDefault(),(e&&t.key==="ArrowLeft"||r&&t.key==="ArrowRight")&&(s-=a),(e&&t.key==="ArrowRight"||r&&t.key==="ArrowLeft")&&(s+=a),t.key==="Home"&&(s=0),t.key==="End"&&(s=100),s=te(s,0,100),this.position=s}}handlePositionChange(){this.emit("awc-change")}render(){let t=this.localize.dir()==="rtl";return E`
      <div
        part="base"
        id="image-comparer"
        class=${Z({"image-comparer":!0,"image-comparer--rtl":t})}
        @keydown=${this.handleKeyDown}
      >
        <div class="image-comparer__image">
          <div part="before" class="image-comparer__before">
            <slot name="before"></slot>
          </div>

          <div
            part="after"
            class="image-comparer__after"
            style=${Qt({clipPath:t?`inset(0 0 0 ${100-this.position}%)`:`inset(0 ${100-this.position}% 0 0)`})}
          >
            <slot name="after"></slot>
          </div>
        </div>

        <div
          part="divider"
          class="image-comparer__divider"
          style=${Qt({left:t?`${100-this.position}%`:`${this.position}%`})}
          @mousedown=${this.handleDrag}
          @touchstart=${this.handleDrag}
        >
          <div
            part="handle"
            class="image-comparer__handle"
            role="scrollbar"
            aria-valuenow=${this.position}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-controls="image-comparer"
            tabindex="0"
          >
            <slot name="handle">
              <awc-icon library="system" name="grip-vertical"></awc-icon>
            </slot>
          </div>
        </div>
      </div>
    `}};ad.styles=Qg,ad.scopedElement={"awc-icon":nt};var $r=ad;Vn([F(".image-comparer")],$r.prototype,"base",2);Vn([F(".image-comparer__handle")],$r.prototype,"handle",2);Vn([u({type:Number,reflect:!0})],$r.prototype,"position",2);Vn([M("position",{waitUntilFirstUpdate:!0})],$r.prototype,"handlePositionChange",1);$r.define("awc-image-comparer");var sd=new Map;function tb(i,t="cors"){let e=sd.get(i);if(e!==void 0)return Promise.resolve(e);let r=fetch(i,{mode:t}).then(async a=>{let s={ok:a.ok,status:a.status,html:await a.text()};return sd.set(i,s),s});return sd.set(i,r),r}var eb=A`
  ${N}

  :host {
    display: block;
  }
`;var Hx=Object.defineProperty,Zx=Object.getOwnPropertyDescriptor,Hn=(i,t,e,r)=>{for(var a=r>1?void 0:r?Zx(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&Hx(t,e,a),a},ob=class extends R{constructor(){super(...arguments),this.mode="cors",this.allowScripts=!1}executeScript(t){let e=document.createElement("script");[...t.attributes].forEach(r=>e.setAttribute(r.name,r.value)),e.textContent=t.textContent,t.parentNode.replaceChild(e,t)}async handleSrcChange(){try{let t=this.src,e=await tb(t,this.mode);if(t!==this.src)return;if(!e.ok){this.emit("awc-error",{detail:{status:e.status}});return}this.innerHTML=e.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(r=>this.executeScript(r)),this.emit("awc-load")}catch{this.emit("awc-error",{detail:{status:-1}})}}render(){return E`<slot></slot>`}};ob.styles=eb;var Ir=ob;Hn([u()],Ir.prototype,"src",2);Hn([u()],Ir.prototype,"mode",2);Hn([u({attribute:"allow-scripts",type:Boolean})],Ir.prototype,"allowScripts",2);Hn([M("src")],Ir.prototype,"handleSrcChange",1);Ir.define("awc-include");ut.define("awc-input");var ib=A`
  ${N}

  :host {
    display: block;
    position: relative;
    background: var(--awc-panel-background-color);
    border: solid var(--awc-panel-border-width) var(--awc-panel-border-color);
    border-radius: var(--awc-border-radius-medium);
    padding: var(--awc-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(awc-divider) {
    --spacing: var(--awc-spacing-x-small);
  }
`;var Wx=Object.defineProperty,qx=Object.getOwnPropertyDescriptor,Gx=(i,t,e,r)=>{for(var a=r>1?void 0:r?qx(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&Wx(t,e,a),a},rb=class extends R{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(t){let e=["menuitem","menuitemcheckbox"],r=t.composedPath().find(s=>e.includes(s?.getAttribute?.("role")||""));if(!r)return;let a=r;a.type==="checkbox"&&(a.checked=!a.checked),this.emit("awc-select",{detail:{item:a}})}handleKeyDown(t){if(t.key==="Enter"||t.key===" "){let e=this.getCurrentItem();t.preventDefault(),t.stopPropagation(),e?.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(t.key)){let e=this.getAllItems(),r=this.getCurrentItem(),a=r?e.indexOf(r):0;e.length>0&&(t.preventDefault(),t.stopPropagation(),t.key==="ArrowDown"?a++:t.key==="ArrowUp"?a--:t.key==="Home"?a=0:t.key==="End"&&(a=e.length-1),a<0&&(a=e.length-1),a>e.length-1&&(a=0),this.setCurrentItem(e[a]),e[a].focus())}}handleMouseDown(t){let e=t.target;this.isMenuItem(e)&&this.setCurrentItem(e)}handleSlotChange(){let t=this.getAllItems();t.length>0&&this.setCurrentItem(t[0])}isMenuItem(t){return t.tagName.toLowerCase()==="awc-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes(t.getAttribute("role")??"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>!(t.inert||!this.isMenuItem(t)))}getCurrentItem(){return this.getAllItems().find(t=>t.getAttribute("tabindex")==="0")}setCurrentItem(t){this.getAllItems().forEach(e=>{e.setAttribute("tabindex",e===t?"0":"-1")})}render(){return E`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};rb.styles=ib;var Zn=rb;Gx([F("slot")],Zn.prototype,"defaultSlot",2);Zn.define("awc-menu");var ks=(i,t)=>{let e=i._$AN;if(e===void 0)return!1;for(let r of e)r._$AO?.(t,!1),ks(r,t);return!0},Wn=i=>{let t,e;do{if((t=i._$AM)===void 0)break;e=t._$AN,e.delete(i),i=t}while(e?.size===0)},ab=i=>{for(let t;t=i._$AM;i=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(i))break;e.add(i),Xx(t)}};function Yx(i){this._$AN!==void 0?(Wn(this),this._$AM=i,ab(this)):this._$AM=i}function Kx(i,t=!1,e=0){let r=this._$AH,a=this._$AN;if(a!==void 0&&a.size!==0)if(t)if(Array.isArray(r))for(let s=e;s<r.length;s++)ks(r[s],!1),Wn(r[s]);else r!=null&&(ks(r,!1),Wn(r));else ks(this,i)}var Xx=i=>{i.type==Me.CHILD&&(i._$AP??=Kx,i._$AQ??=Yx)},qn=class extends ao{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,r){super._$AT(t,e,r),ab(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(ks(this,t),Wn(this))}setValue(t){if(_n(this._$Ct))this._$Ct._$AI(t,this);else{let e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}};var sb=()=>new ld,ld=class{},nd=new WeakMap,nb=xo(class extends qn{render(i){return $t}update(i,[t]){let e=t!==this.G;return e&&this.G!==void 0&&this.ot(void 0),(e||this.rt!==this.lt)&&(this.G=t,this.ct=i.options?.host,this.ot(this.lt=i.element)),$t}ot(i){if(typeof this.G=="function"){let t=this.ct??globalThis,e=nd.get(t);e===void 0&&(e=new WeakMap,nd.set(t,e)),e.get(this.G)!==void 0&&this.G.call(this.ct,void 0),e.set(this.G,i),i!==void 0&&this.G.call(this.ct,i)}else this.G.value=i}get rt(){return typeof this.G=="function"?nd.get(this.ct??globalThis)?.get(this.G):this.G?.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});var Gn=class{constructor(t,e,r){this.popupRef=sb(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=a=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${a.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${a.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=a=>{switch(a.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":a.target!==this.host&&(a.preventDefault(),a.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(a);break}},this.handleClick=a=>{a.target===this.host?(a.preventDefault(),a.stopPropagation()):a.target instanceof Element&&(a.target.tagName==="awc-menu-item"||a.target.role?.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=a=>{a.relatedTarget&&a.relatedTarget instanceof Element&&this.host.contains(a.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=a=>{a.stopPropagation()},this.handlePopupReposition=()=>{let a=this.host.renderRoot.querySelector("slot[name='submenu']")?.assignedElements({flatten:!0}).filter(f=>f.localName==="awc-menu")[0],s=this.localize.dir()==="rtl";if(!a)return;let{left:l,top:p,width:d,height:h}=a.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${s?l+d:l}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${p}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${s?l+d:l}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${p+h}px`)},(this.host=t).addController(this),this.hasSlotController=e,this.localize=r}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("awc-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("awc-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(t){let e=this.host.renderRoot.querySelector("slot[name='submenu']");if(!e){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let r=null;for(let a of e.assignedElements())if(r=a.querySelectorAll("awc-menu-item, [role^='menuitem']"),r.length!==0)break;if(!(!r||r.length===0)){r[0].setAttribute("tabindex","0");for(let a=1;a!==r.length;++a)r[a].setAttribute("tabindex","-1");this.popupRef.value&&(t.preventDefault(),t.stopPropagation(),this.popupRef.value.active?r[0]instanceof HTMLElement&&r[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{r[0]instanceof HTMLElement&&r[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(t){this.popupRef.value&&this.popupRef.value.active!==t&&(this.popupRef.value.active=t,this.host.requestUpdate())}enableSubmenu(t=!0){t?this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay):this.setSubmenuState(!0)}disableSubmenu(){clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){if(!this.host.parentElement?.computedStyleMap)return;let t=this.host.parentElement.computedStyleMap(),e=["padding-top","border-top-width","margin-top"].reduce((r,a)=>{let s=t.get(a)??new CSSUnitValue(0,"px"),l=(s instanceof CSSUnitValue?s:new CSSUnitValue(0,"px")).to("px");return r-l.value},0);this.skidding=e}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){let t=this.localize.dir()==="ltr";return this.isConnected?E`
      <awc-popup
        ${nb(this.popupRef)}
        placement=${t?"right-start":"left-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
      >
        <slot name="submenu"></slot>
      </awc-popup>
    `:E` <slot name="submenu" hidden></slot> `}};var lb=A`
  ${N}

  :host {
    --submenu-offset: -2px;

    /* Private */
    --safe-triangle-cursor-x: 0;
    --safe-triangle-cursor-y: 0;
    --safe-triangle-submenu-start-x: 0;
    --safe-triangle-submenu-start-y: 0;
    --safe-triangle-submenu-end-x: 0;
    --safe-triangle-submenu-end-y: 0;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--awc-font-sans);
    font-size: var(--awc-font-size-medium);
    font-weight: var(--awc-font-weight-normal);
    line-height: var(--awc-line-height-normal);
    letter-spacing: var(--awc-letter-spacing-normal);
    color: var(--awc-color-neutral-700);
    padding: var(--awc-spacing-2x-small) var(--awc-spacing-2x-small);
    transition: var(--awc-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--awc-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--awc-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--awc-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x) var(--safe-triangle-cursor-y),
      var(--safe-triangle-submenu-start-x) var(--safe-triangle-submenu-start-y),
      var(--safe-triangle-submenu-end-x) var(--safe-triangle-submenu-end-y)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--awc-color-neutral-100);
    color: var(--awc-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--awc-color-primary-600);
    color: var(--awc-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  awc-popup::part(popup) {
    box-shadow: var(--awc-shadow-large);
    z-index: var(--awc-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl awc-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`;var Jx=Object.defineProperty,Qx=Object.getOwnPropertyDescriptor,Fi=(i,t,e,r)=>{for(var a=r>1?void 0:r?Qx(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&Jx(t,e,a),a},cd=class extends R{constructor(){super(...arguments),this.type="normal",this.checked=!1,this.value="",this.disabled=!1,this.localize=new et(this),this.hasSlotController=new Ct(this,"submenu"),this.submenuController=new Gn(this,this.hasSlotController,this.localize),this.handleHostClick=t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())},this.handleMouseOver=t=>{this.focus(),t.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){let t=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=t;return}t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return uh(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){let t=this.localize.dir()==="rtl",e=this.submenuController.isExpanded();return E`
      <div
        id="anchor"
        part="base"
        class=${Z({"menu-item":!0,"menu-item--rtl":t,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":e})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!e}"
      >
        <span part="checked-icon" class="menu-item__check">
          <awc-icon name="check" library="system" aria-hidden="true"></awc-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <awc-icon name=${t?"chevron-left":"chevron-right"} library="system" aria-hidden="true"></awc-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
      </div>
    `}};cd.styles=lb,cd.dependencies={"awc-icon":nt,"awc-popup":Lt};var Do=cd;Fi([F("slot:not([name])")],Do.prototype,"defaultSlot",2);Fi([F(".menu-item")],Do.prototype,"menuItem",2);Fi([u()],Do.prototype,"type",2);Fi([u({type:Boolean,reflect:!0})],Do.prototype,"checked",2);Fi([u()],Do.prototype,"value",2);Fi([u({type:Boolean,reflect:!0})],Do.prototype,"disabled",2);Fi([M("checked")],Do.prototype,"handleCheckedChange",1);Fi([M("disabled")],Do.prototype,"handleDisabledChange",1);Fi([M("type")],Do.prototype,"handleTypeChange",1);Do.define("awc-menu-item");var cb=A`
  ${N}

  :host {
    display: block;
  }

  .menu-label {
    display: inline-block;
    font-family: var(--awc-font-sans);
    font-size: var(--awc-font-size-small);
    font-weight: var(--awc-font-weight-semibold);
    line-height: var(--awc-line-height-normal);
    letter-spacing: var(--awc-letter-spacing-normal);
    color: var(--awc-color-neutral-500);
    padding: var(--awc-spacing-2x-small) var(--awc-spacing-x-large);
    user-select: none;
    -webkit-user-select: none;
  }
`;var db=class extends R{render(){return E` <slot part="base" class="menu-label"></slot> `}};db.styles=cb;var dd=db;dd.define("awc-menu-label");var pb=A`
  ${N}

  :host {
    display: contents;
  }
`;var tk=Object.defineProperty,ek=Object.getOwnPropertyDescriptor,ir=(i,t,e,r)=>{for(var a=r>1?void 0:r?ek(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&tk(t,e,a),a},hb=class extends R{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=t=>{this.emit("awc-mutation",{detail:{mutationList:t}})}}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){let t=typeof this.attr=="string"&&this.attr.length>0,e=t&&this.attr!=="*"?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:t,attributeFilter:e,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch{}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return E` <slot></slot> `}};hb.styles=pb;var Yo=hb;ir([u({reflect:!0})],Yo.prototype,"attr",2);ir([u({attribute:"attr-old-value",type:Boolean,reflect:!0})],Yo.prototype,"attrOldValue",2);ir([u({attribute:"char-data",type:Boolean,reflect:!0})],Yo.prototype,"charData",2);ir([u({attribute:"char-data-old-value",type:Boolean,reflect:!0})],Yo.prototype,"charDataOldValue",2);ir([u({attribute:"child-list",type:Boolean,reflect:!0})],Yo.prototype,"childList",2);ir([u({type:Boolean,reflect:!0})],Yo.prototype,"disabled",2);ir([M("disabled")],Yo.prototype,"handleDisabledChange",1);ir([M("attr",{waitUntilFirstUpdate:!0}),M("attr-old-value",{waitUntilFirstUpdate:!0}),M("char-data",{waitUntilFirstUpdate:!0}),M("char-data-old-value",{waitUntilFirstUpdate:!0}),M("childList",{waitUntilFirstUpdate:!0})],Yo.prototype,"handleChange",1);Yo.define("awc-mutation-observer");var ub=A`
  ${N}

  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--awc-font-sans);
    font-size: var(--awc-font-size-medium);
    font-weight: var(--awc-font-weight-normal);
    line-height: var(--awc-line-height-normal);
    letter-spacing: var(--awc-letter-spacing-normal);
    color: var(--awc-color-neutral-700);
    padding: var(--awc-spacing-x-small) var(--awc-spacing-medium) var(--awc-spacing-x-small) var(--awc-spacing-x-small);
    transition: var(--awc-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--awc-color-primary-800);
    color: var(--awc-color-neutral-0);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--awc-color-primary-600);
    color: var(--awc-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--awc-line-height-normal);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--awc-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--awc-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--awc-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`;var ok=Object.defineProperty,ik=Object.getOwnPropertyDescriptor,Ni=(i,t,e,r)=>{for(var a=r>1?void 0:r?ik(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&ok(t,e,a),a},pd=class extends R{constructor(){super(...arguments),this.localize=new et(this),this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){let t=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=t;return}t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){return(this.textContent??"").trim()}render(){return E`
      <div
        part="base"
        class=${Z({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <awc-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></awc-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};pd.styles=ub,pd.dependencies={"awc-icon":nt};var Bo=pd;Ni([F(".option__label")],Bo.prototype,"defaultSlot",2);Ni([X()],Bo.prototype,"current",2);Ni([X()],Bo.prototype,"selected",2);Ni([X()],Bo.prototype,"hasHover",2);Ni([u({reflect:!0})],Bo.prototype,"value",2);Ni([u({type:Boolean,reflect:!0})],Bo.prototype,"disabled",2);Ni([M("disabled")],Bo.prototype,"handleDisabledChange",1);Ni([M("selected")],Bo.prototype,"handleSelectedChange",1);Ni([M("value")],Bo.prototype,"handleValueChange",1);Bo.define("awc-option");Lt.define("awc-popup");var mb=A`
  ${N}

  :host {
    --height: 1rem;
    --track-color: var(--awc-color-neutral-200);
    --indicator-color: var(--awc-color-primary-600);
    --label-color: var(--awc-color-neutral-0);
    --track-radius: var(--awc-border-radius-none);
    --indicator-radius: var(--awc-border-radius-none);

    display: block;
  }

  .progress-bar {
    position: relative;
    background-color: var(--track-color);
    height: var(--height);
    border-radius: var(--track-radius);
    box-shadow: inset var(--awc-shadow-small);
    overflow: hidden;
  }

  .progress-bar__indicator {
    height: 100%;
    font-family: var(--awc-font-sans);
    font-size: 12px;
    font-weight: var(--awc-font-weight-normal);
    background-color: var(--indicator-color);
    border-radius: var(--indicator-radius);
    color: var(--label-color);
    text-align: center;
    line-height: var(--height);
    white-space: nowrap;
    overflow: hidden;
    transition:
      400ms width,
      400ms background-color;
    user-select: none;
    -webkit-user-select: none;
  }

  /* Indeterminate */
  .progress-bar--indeterminate .progress-bar__indicator {
    position: absolute;
    animation: indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  .progress-bar--indeterminate.progress-bar--rtl .progress-bar__indicator {
    animation-name: indeterminate-rtl;
  }

  @media (forced-colors: active) {
    .progress-bar {
      outline: solid 1px SelectedItem;
      background-color: var(--awc-color-neutral-0);
    }

    .progress-bar__indicator {
      outline: solid 1px SelectedItem;
      background-color: SelectedItem;
    }
  }

  @keyframes indeterminate {
    0% {
      left: -50%;
      width: 50%;
    }
    75%,
    100% {
      left: 100%;
      width: 50%;
    }
  }

  @keyframes indeterminate-rtl {
    0% {
      right: -50%;
      width: 50%;
    }
    75%,
    100% {
      right: 100%;
      width: 50%;
    }
  }
`;var rk=Object.defineProperty,ak=Object.getOwnPropertyDescriptor,hd=(i,t,e,r)=>{for(var a=r>1?void 0:r?ak(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&rk(t,e,a),a},fb=class extends R{constructor(){super(...arguments),this.localize=new et(this),this.value=0,this.indeterminate=!1,this.label=""}render(){return E`
      <div
        part="base"
        class=${Z({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":this.localize.dir()==="rtl"})}
        role="progressbar"
        title=${H(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${Qt({width:`${this.value}%`})}>
          ${this.indeterminate?"":E` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}};fb.styles=mb;var rr=fb;hd([u({type:Number,reflect:!0})],rr.prototype,"value",2);hd([u({type:Boolean,reflect:!0})],rr.prototype,"indeterminate",2);hd([u()],rr.prototype,"label",2);rr.define("awc-progress-bar");var gb=A`
  ${N}

  :host {
    --size: 128px;
    --track-width: 4px;
    --track-color: var(--awc-color-neutral-200);
    --indicator-width: var(--track-width);
    --indicator-color: var(--awc-color-primary-600);
    --indicator-transition-duration: 0.35s;

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .progress-ring__image {
    width: var(--size);
    height: var(--size);
    rotate: -90deg;
    transform-origin: 50% 50%;
  }

  .progress-ring__track,
  .progress-ring__indicator {
    --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);

    transform-origin: 50% 50%;
  }

  .progress-ring__track {
    stroke: var(--track-color);
    stroke-width: var(--track-width);
  }

  .progress-ring__indicator {
    stroke: var(--indicator-color);
    stroke-width: var(--indicator-width);
    stroke-linecap: round;
    transition-property: stroke-dashoffset;
    transition-duration: var(--indicator-transition-duration);
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .progress-ring__label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
  }

  /* Indeterminate */
  .progress-ring--indeterminate .progress-ring__indicator {
    position: absolute;
    animation: indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  @keyframes indeterminate {
    from {
      stroke-dashoffset: var(--circumference);
      transform: rotateZ(0deg);
    }
    to {
      stroke-dashoffset: calc(var(--circumference) * -1);
      transform: rotateZ(360deg);
    }
  }
`;var sk=Object.defineProperty,nk=Object.getOwnPropertyDescriptor,Cs=(i,t,e,r)=>{for(var a=r>1?void 0:r?nk(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&sk(t,e,a),a},bb=class extends R{constructor(){super(...arguments),this.localize=new et(this),this.value=0,this.indeterminate=!1,this.label=""}updated(t){if(super.updated(t),t.has("value")){let e=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),r=2*Math.PI*e,a=r-this.value/100*r;this.indicatorOffset=`${a}px`}}render(){return E`
      <div
        part="base"
        class=${Z({"progress-ring":!0,"progress-ring--indeterminate":this.indeterminate})}
        role="progressbar"
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
        style="--percentage: ${this.value/100}"
      >
        <svg class="progress-ring__image">
          <circle class="progress-ring__track"></circle>
          <circle class="progress-ring__indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>
        ${this.indeterminate?"":E` <slot id="label" part="label" class="progress-ring__label"></slot> `}
      </div>
    `}};bb.styles=gb;var ar=bb;Cs([F(".progress-ring__indicator")],ar.prototype,"indicator",2);Cs([X()],ar.prototype,"indicatorOffset",2);Cs([u({type:Number,reflect:!0})],ar.prototype,"value",2);Cs([u({type:Boolean,reflect:!0})],ar.prototype,"indeterminate",2);Cs([u()],ar.prototype,"label",2);ar.define("awc-progress-ring");var vb=null,Yn=class{};Yn.render=function(i,t){vb(i,t)};self.QrCreator=Yn;(function(i){function t(p,d,h,f){var g={},v=i(h,d);v.u(p),v.J(),f=f||0;var y=v.h(),_=v.h()+2*f;return g.text=p,g.level=d,g.version=h,g.O=_,g.a=function(x,P){return x-=f,P-=f,0>x||x>=y||0>P||P>=y?!1:v.a(x,P)},g}function e(p,d,h,f,g,v,y,_,x,P){function S(k,C,z,O,j,Q,Y){k?(p.lineTo(C+Q,z+Y),p.arcTo(C,z,O,j,v)):p.lineTo(C,z)}y?p.moveTo(d+v,h):p.moveTo(d,h),S(_,f,h,f,g,-v,0),S(x,f,g,d,g,0,-v),S(P,d,g,d,h,v,0),S(y,d,h,f,h,0,v)}function r(p,d,h,f,g,v,y,_,x,P){function S(k,C,z,O){p.moveTo(k+z,C),p.lineTo(k,C),p.lineTo(k,C+O),p.arcTo(k,C,k+z,C,v)}y&&S(d,h,v,v),_&&S(f,h,-v,v),x&&S(f,g,-v,-v),P&&S(d,g,v,-v)}function a(p,d){var h=d.fill;if(typeof h=="string")p.fillStyle=h;else{var f=h.type,g=h.colorStops;if(h=h.position.map(y=>Math.round(y*d.size)),f==="linear-gradient")var v=p.createLinearGradient.apply(p,h);else if(f==="radial-gradient")v=p.createRadialGradient.apply(p,h);else throw Error("Unsupported fill");g.forEach(([y,_])=>{v.addColorStop(y,_)}),p.fillStyle=v}}function s(p,d){t:{var h=d.text,f=d.v,g=d.N,v=d.K,y=d.P;for(g=Math.max(1,g||1),v=Math.min(40,v||40);g<=v;g+=1)try{var _=t(h,f,g,y);break t}catch{}_=void 0}if(!_)return null;for(h=p.getContext("2d"),d.background&&(h.fillStyle=d.background,h.fillRect(d.left,d.top,d.size,d.size)),f=_.O,v=d.size/f,h.beginPath(),y=0;y<f;y+=1)for(g=0;g<f;g+=1){var x=h,P=d.left+g*v,S=d.top+y*v,k=y,C=g,z=_.a,O=P+v,j=S+v,Q=k-1,Y=k+1,G=C-1,B=C+1,U=Math.floor(Math.min(.5,Math.max(0,d.R))*v),I=z(k,C),W=z(Q,G),q=z(Q,C);Q=z(Q,B);var tt=z(k,B);B=z(Y,B),C=z(Y,C),Y=z(Y,G),k=z(k,G),P=Math.round(P),S=Math.round(S),O=Math.round(O),j=Math.round(j),I?e(x,P,S,O,j,U,!q&&!k,!q&&!tt,!C&&!tt,!C&&!k):r(x,P,S,O,j,U,q&&k&&W,q&&tt&&Q,C&&tt&&B,C&&k&&Y)}return a(h,d),h.fill(),p}var l={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:.5,quiet:0};vb=function(p,d){var h={};Object.assign(h,l,p),h.N=h.minVersion,h.K=h.maxVersion,h.v=h.ecLevel,h.left=h.left,h.top=h.top,h.size=h.size,h.fill=h.fill,h.background=h.background,h.text=h.text,h.R=h.radius,h.P=h.quiet,d instanceof HTMLCanvasElement?((d.width!==h.size||d.height!==h.size)&&(d.width=h.size,d.height=h.size),d.getContext("2d").clearRect(0,0,d.width,d.height),s(d,h)):(p=document.createElement("canvas"),p.width=h.size,p.height=h.size,h=s(p,h),d.appendChild(h))}})(function(){function i(d){var h=e.s(d);return{S:function(){return 4},b:function(){return h.length},write:function(f){for(var g=0;g<h.length;g+=1)f.put(h[g],8)}}}function t(){var d=[],h=0,f={B:function(){return d},c:function(g){return(d[Math.floor(g/8)]>>>7-g%8&1)==1},put:function(g,v){for(var y=0;y<v;y+=1)f.m((g>>>v-y-1&1)==1)},f:function(){return h},m:function(g){var v=Math.floor(h/8);d.length<=v&&d.push(0),g&&(d[v]|=128>>>h%8),h+=1}};return f}function e(d,h){function f(k,C){for(var z=-1;7>=z;z+=1)if(!(-1>=k+z||_<=k+z))for(var O=-1;7>=O;O+=1)-1>=C+O||_<=C+O||(y[k+z][C+O]=0<=z&&6>=z&&(O==0||O==6)||0<=O&&6>=O&&(z==0||z==6)||2<=z&&4>=z&&2<=O&&4>=O)}function g(k,C){for(var z=_=4*d+17,O=Array(z),j=0;j<z;j+=1){O[j]=Array(z);for(var Q=0;Q<z;Q+=1)O[j][Q]=null}for(y=O,f(0,0),f(_-7,0),f(0,_-7),z=s.G(d),O=0;O<z.length;O+=1)for(j=0;j<z.length;j+=1){Q=z[O];var Y=z[j];if(y[Q][Y]==null)for(var G=-2;2>=G;G+=1)for(var B=-2;2>=B;B+=1)y[Q+G][Y+B]=G==-2||G==2||B==-2||B==2||G==0&&B==0}for(z=8;z<_-8;z+=1)y[z][6]==null&&(y[z][6]=z%2==0);for(z=8;z<_-8;z+=1)y[6][z]==null&&(y[6][z]=z%2==0);for(z=s.w(v<<3|C),O=0;15>O;O+=1)j=!k&&(z>>O&1)==1,y[6>O?O:8>O?O+1:_-15+O][8]=j,y[8][8>O?_-O-1:9>O?15-O:14-O]=j;if(y[_-8][8]=!k,7<=d){for(z=s.A(d),O=0;18>O;O+=1)j=!k&&(z>>O&1)==1,y[Math.floor(O/3)][O%3+_-8-3]=j;for(O=0;18>O;O+=1)j=!k&&(z>>O&1)==1,y[O%3+_-8-3][Math.floor(O/3)]=j}if(x==null){for(k=p.I(d,v),z=t(),O=0;O<P.length;O+=1)j=P[O],z.put(4,4),z.put(j.b(),s.f(4,d)),j.write(z);for(O=j=0;O<k.length;O+=1)j+=k[O].j;if(z.f()>8*j)throw Error("code length overflow. ("+z.f()+">"+8*j+")");for(z.f()+4<=8*j&&z.put(0,4);z.f()%8!=0;)z.m(!1);for(;!(z.f()>=8*j)&&(z.put(236,8),!(z.f()>=8*j));)z.put(17,8);var U=0;for(j=O=0,Q=Array(k.length),Y=Array(k.length),G=0;G<k.length;G+=1){var I=k[G].j,W=k[G].o-I;for(O=Math.max(O,I),j=Math.max(j,W),Q[G]=Array(I),B=0;B<Q[G].length;B+=1)Q[G][B]=255&z.B()[B+U];for(U+=I,B=s.C(W),I=r(Q[G],B.b()-1).l(B),Y[G]=Array(B.b()-1),B=0;B<Y[G].length;B+=1)W=B+I.b()-Y[G].length,Y[G][B]=0<=W?I.c(W):0}for(B=z=0;B<k.length;B+=1)z+=k[B].o;for(z=Array(z),B=U=0;B<O;B+=1)for(G=0;G<k.length;G+=1)B<Q[G].length&&(z[U]=Q[G][B],U+=1);for(B=0;B<j;B+=1)for(G=0;G<k.length;G+=1)B<Y[G].length&&(z[U]=Y[G][B],U+=1);x=z}for(k=x,z=-1,O=_-1,j=7,Q=0,C=s.F(C),Y=_-1;0<Y;Y-=2)for(Y==6&&--Y;;){for(G=0;2>G;G+=1)y[O][Y-G]==null&&(B=!1,Q<k.length&&(B=(k[Q]>>>j&1)==1),C(O,Y-G)&&(B=!B),y[O][Y-G]=B,--j,j==-1&&(Q+=1,j=7));if(O+=z,0>O||_<=O){O-=z,z=-z;break}}}var v=a[h],y=null,_=0,x=null,P=[],S={u:function(k){k=i(k),P.push(k),x=null},a:function(k,C){if(0>k||_<=k||0>C||_<=C)throw Error(k+","+C);return y[k][C]},h:function(){return _},J:function(){for(var k=0,C=0,z=0;8>z;z+=1){g(!0,z);var O=s.D(S);(z==0||k>O)&&(k=O,C=z)}g(!1,C)}};return S}function r(d,h){if(typeof d.length>"u")throw Error(d.length+"/"+h);var f=function(){for(var v=0;v<d.length&&d[v]==0;)v+=1;for(var y=Array(d.length-v+h),_=0;_<d.length-v;_+=1)y[_]=d[_+v];return y}(),g={c:function(v){return f[v]},b:function(){return f.length},multiply:function(v){for(var y=Array(g.b()+v.b()-1),_=0;_<g.b();_+=1)for(var x=0;x<v.b();x+=1)y[_+x]^=l.i(l.g(g.c(_))+l.g(v.c(x)));return r(y,0)},l:function(v){if(0>g.b()-v.b())return g;for(var y=l.g(g.c(0))-l.g(v.c(0)),_=Array(g.b()),x=0;x<g.b();x+=1)_[x]=g.c(x);for(x=0;x<v.b();x+=1)_[x]^=l.i(l.g(v.c(x))+y);return r(_,0).l(v)}};return g}e.s=function(d){for(var h=[],f=0;f<d.length;f++){var g=d.charCodeAt(f);128>g?h.push(g):2048>g?h.push(192|g>>6,128|g&63):55296>g||57344<=g?h.push(224|g>>12,128|g>>6&63,128|g&63):(f++,g=65536+((g&1023)<<10|d.charCodeAt(f)&1023),h.push(240|g>>18,128|g>>12&63,128|g>>6&63,128|g&63))}return h};var a={L:1,M:0,Q:3,H:2},s=function(){function d(g){for(var v=0;g!=0;)v+=1,g>>>=1;return v}var h=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],f={w:function(g){for(var v=g<<10;0<=d(v)-d(1335);)v^=1335<<d(v)-d(1335);return(g<<10|v)^21522},A:function(g){for(var v=g<<12;0<=d(v)-d(7973);)v^=7973<<d(v)-d(7973);return g<<12|v},G:function(g){return h[g-1]},F:function(g){switch(g){case 0:return function(v,y){return(v+y)%2==0};case 1:return function(v){return v%2==0};case 2:return function(v,y){return y%3==0};case 3:return function(v,y){return(v+y)%3==0};case 4:return function(v,y){return(Math.floor(v/2)+Math.floor(y/3))%2==0};case 5:return function(v,y){return v*y%2+v*y%3==0};case 6:return function(v,y){return(v*y%2+v*y%3)%2==0};case 7:return function(v,y){return(v*y%3+(v+y)%2)%2==0};default:throw Error("bad maskPattern:"+g)}},C:function(g){for(var v=r([1],0),y=0;y<g;y+=1)v=v.multiply(r([1,l.i(y)],0));return v},f:function(g,v){if(g!=4||1>v||40<v)throw Error("mode: "+g+"; type: "+v);return 10>v?8:16},D:function(g){for(var v=g.h(),y=0,_=0;_<v;_+=1)for(var x=0;x<v;x+=1){for(var P=0,S=g.a(_,x),k=-1;1>=k;k+=1)if(!(0>_+k||v<=_+k))for(var C=-1;1>=C;C+=1)0>x+C||v<=x+C||(k!=0||C!=0)&&S==g.a(_+k,x+C)&&(P+=1);5<P&&(y+=3+P-5)}for(_=0;_<v-1;_+=1)for(x=0;x<v-1;x+=1)P=0,g.a(_,x)&&(P+=1),g.a(_+1,x)&&(P+=1),g.a(_,x+1)&&(P+=1),g.a(_+1,x+1)&&(P+=1),(P==0||P==4)&&(y+=3);for(_=0;_<v;_+=1)for(x=0;x<v-6;x+=1)g.a(_,x)&&!g.a(_,x+1)&&g.a(_,x+2)&&g.a(_,x+3)&&g.a(_,x+4)&&!g.a(_,x+5)&&g.a(_,x+6)&&(y+=40);for(x=0;x<v;x+=1)for(_=0;_<v-6;_+=1)g.a(_,x)&&!g.a(_+1,x)&&g.a(_+2,x)&&g.a(_+3,x)&&g.a(_+4,x)&&!g.a(_+5,x)&&g.a(_+6,x)&&(y+=40);for(x=P=0;x<v;x+=1)for(_=0;_<v;_+=1)g.a(_,x)&&(P+=1);return y+=Math.abs(100*P/v/v-50)/5*10}};return f}(),l=function(){for(var d=Array(256),h=Array(256),f=0;8>f;f+=1)d[f]=1<<f;for(f=8;256>f;f+=1)d[f]=d[f-4]^d[f-5]^d[f-6]^d[f-8];for(f=0;255>f;f+=1)h[d[f]]=f;return{g:function(g){if(1>g)throw Error("glog("+g+")");return h[g]},i:function(g){for(;0>g;)g+=255;for(;256<=g;)g-=255;return d[g]}}}(),p=function(){function d(g,v){switch(v){case a.L:return h[4*(g-1)];case a.M:return h[4*(g-1)+1];case a.Q:return h[4*(g-1)+2];case a.H:return h[4*(g-1)+3]}}var h=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],f={I:function(g,v){var y=d(g,v);if(typeof y>"u")throw Error("bad rs block @ typeNumber:"+g+"/errorCorrectLevel:"+v);g=y.length/3,v=[];for(var _=0;_<g;_+=1)for(var x=y[3*_],P=y[3*_+1],S=y[3*_+2],k=0;k<x;k+=1){var C=S,z={};z.o=P,z.j=C,v.push(z)}return v}};return f}();return e}());var yb=QrCreator;var wb=A`
  ${N}

  :host {
    display: inline-block;
  }
`;var lk=Object.defineProperty,ck=Object.getOwnPropertyDescriptor,ji=(i,t,e,r)=>{for(var a=r>1?void 0:r?ck(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&lk(t,e,a),a},_b=class extends R{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="black",this.background="white",this.radius=0,this.errorCorrection="H"}firstUpdated(){this.generate()}generate(){this.hasUpdated&&yb.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:this.background,size:this.size*2},this.canvas)}render(){return E`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${this.label?.length>0?this.label:this.value}
        style=${Qt({width:`${this.size}px`,height:`${this.size}px`})}
      ></canvas>
    `}};_b.styles=wb;var Ro=_b;ji([F("canvas")],Ro.prototype,"canvas",2);ji([u()],Ro.prototype,"value",2);ji([u()],Ro.prototype,"label",2);ji([u({type:Number})],Ro.prototype,"size",2);ji([u()],Ro.prototype,"fill",2);ji([u()],Ro.prototype,"background",2);ji([u({type:Number})],Ro.prototype,"radius",2);ji([u({attribute:"error-correction"})],Ro.prototype,"errorCorrection",2);ji([M(["background","errorCorrection","fill","radius","size","value"])],Ro.prototype,"generate",1);Ro.define("awc-qr-code");var xb=A`
  ${N}

  :host {
    display: block;
  }

  :host(:focus-visible) {
    outline: 0px;
  }

  .radio {
    display: inline-flex;
    align-items: top;
    font-family: var(--awc-input-font-family);
    font-size: var(--awc-input-font-size-medium);
    font-weight: var(--awc-input-font-weight);
    color: var(--awc-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .radio--small {
    --toggle-size: var(--awc-toggle-size-small);
    font-size: var(--awc-input-font-size-small);
  }

  .radio--medium {
    --toggle-size: var(--awc-toggle-size-medium);
    font-size: var(--awc-input-font-size-medium);
  }

  .radio--large {
    --toggle-size: var(--awc-toggle-size-large);
    font-size: var(--awc-input-font-size-large);
  }

  .radio__checked-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--awc-input-border-width) var(--awc-input-border-color-base);
    border-radius: 50%;
    background-color: var(--awc-input-background-color-base);
    color: transparent;
    transition:
      var(--awc-transition-fast) border-color,
      var(--awc-transition-fast) background-color,
      var(--awc-transition-fast) color,
      var(--awc-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--awc-input-border-color-hover);
    background-color: var(--awc-input-background-color-hover);
  }

  /* Checked */
  .radio--checked .radio__control {
    color: var(--awc-color-neutral-0);
    border-color: var(--awc-color-primary-600);
    background-color: var(--awc-color-primary-600);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--awc-color-primary-600);
    background-color: var(--awc-color-primary-600);
  }

  /* Checked + focus */
  :host(:focus-visible) .radio__control {
    outline: var(--awc-focus-ring);
    outline-offset: var(--awc-focus-ring-offset);
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  .radio__label {
    display: inline-block;
    color: var(--awc-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }
`;var dk=Object.defineProperty,pk=Object.getOwnPropertyDescriptor,Dr=(i,t,e,r)=>{for(var a=r>1?void 0:r?pk(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&dk(t,e,a),a},ud=class extends R{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("awc-blur")},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit("awc-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return E`
      <span
        part="base"
        class=${Z({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":this.size==="small","radio--medium":this.size==="medium","radio--large":this.size==="large"})}
      >
        <span part="${`control${this.checked?" control--checked":""}`}" class="radio__control">
          ${this.checked?E`
                <awc-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></awc-icon>
              `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};ud.styles=xb,ud.dependencies={"awc-icon":nt};var fi=ud;Dr([X()],fi.prototype,"checked",2);Dr([X()],fi.prototype,"hasFocus",2);Dr([u()],fi.prototype,"value",2);Dr([u({reflect:!0})],fi.prototype,"size",2);Dr([u({type:Boolean,reflect:!0})],fi.prototype,"disabled",2);Dr([M("checked")],fi.prototype,"handleCheckedChange",1);Dr([M("disabled",{waitUntilFirstUpdate:!0})],fi.prototype,"handleDisabledChange",1);fi.define("awc-radio");var kb=A`
  ${En}

  .button__prefix,
  .button__suffix,
  .button__label {
    display: inline-flex;
    position: relative;
    align-items: center;
  }

  /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons.
    We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
  .hidden-input {
    all: unset;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: dotted 1px red;
    opacity: 0;
    z-index: -1;
  }
`;var hk=Object.defineProperty,uk=Object.getOwnPropertyDescriptor,Ui=(i,t,e,r)=>{for(var a=r>1?void 0:r?uk(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&hk(t,e,a),a},Cb=class extends R{constructor(){super(...arguments),this.hasSlotController=new Ct(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("awc-blur")}handleClick(t){if(this.disabled){t.preventDefault(),t.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("awc-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(t){this.input.focus(t)}blur(){this.input.blur()}render(){return Ne`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${Z({button:!0,"button--default":!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${H(this.value)}
          tabindex="${this.checked?"0":"-1"}"
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};Cb.styles=kb;var Fo=Cb;Ui([F(".button")],Fo.prototype,"input",2);Ui([F(".hidden-input")],Fo.prototype,"hiddenInput",2);Ui([X()],Fo.prototype,"hasFocus",2);Ui([u({type:Boolean,reflect:!0})],Fo.prototype,"checked",2);Ui([u()],Fo.prototype,"value",2);Ui([u({type:Boolean,reflect:!0})],Fo.prototype,"disabled",2);Ui([u({reflect:!0})],Fo.prototype,"size",2);Ui([u({type:Boolean,reflect:!0})],Fo.prototype,"pill",2);Ui([M("disabled",{waitUntilFirstUpdate:!0})],Fo.prototype,"handleDisabledChange",1);Fo.define("awc-radio-button");var Lb=A`
  ${N}
  ${di}

  :host {
    display: block;
  }

  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .form-control__label {
    padding: 0;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--awc-input-required-content);
    margin-inline-start: var(--awc-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;var mk=Object.defineProperty,fk=Object.getOwnPropertyDescriptor,mo=(i,t,e,r)=>{for(var a=r>1?void 0:r?fk(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&mk(t,e,a),a},md=class extends R{constructor(){super(...arguments),this.formControlController=new oe(this),this.hasSlotController=new Ct(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){let t=this.required&&!this.value;return this.customValidityMessage!==""?Tf:t?Sf:ha}get validationMessage(){let t=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:t?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("awc-radio, awc-radio-button")]}handleRadioClick(t){let e=t.target.closest("awc-radio, awc-radio-button"),r=this.getAllRadios(),a=this.value;e.disabled||(this.value=e.value,r.forEach(s=>s.checked=s===e),this.value!==a&&(this.emit("awc-change"),this.emit("awc-input")))}handleKeyDown(t){if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key))return;let e=this.getAllRadios().filter(p=>!p.disabled),r=e.find(p=>p.checked)??e[0],a=t.key===" "?0:["ArrowUp","ArrowLeft"].includes(t.key)?-1:1,s=this.value,l=e.indexOf(r)+a;l<0&&(l=e.length-1),l>e.length-1&&(l=0),this.getAllRadios().forEach(p=>{p.checked=!1,this.hasButtonGroup||(p.tabIndex=-1)}),this.value=e[l].value,e[l].checked=!0,this.hasButtonGroup?e[l].shadowRoot.querySelector("button").focus():(e[l].tabIndex=0,e[l].focus()),this.value!==s&&(this.emit("awc-change"),this.emit("awc-input")),t.preventDefault()}handleLabelClick(){let t=this.getAllRadios(),e=t.find(r=>r.checked)||t[0];e&&e.focus()}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}async syncRadioElements(){let t=this.getAllRadios();if(await Promise.all(t.map(async e=>{await e.updateComplete,e.checked=e.value===this.value,e.size=this.size})),this.hasButtonGroup=t.some(e=>e.tagName.toLowerCase()==="awc-radio-button"),!t.some(e=>e.checked))if(this.hasButtonGroup){let e=t[0].shadowRoot?.querySelector("button");e&&(e.tabIndex=0)}else t[0].tabIndex=0;if(this.hasButtonGroup){let e=this.shadowRoot?.querySelector("awc-button-group");e&&(e.disableRole=!0)}}syncRadios(){if(customElements.get("awc-radio")&&customElements.get("awc-radio-button")){this.syncRadioElements();return}customElements.get("awc-radio")?this.syncRadioElements():customElements.whenDefined("awc-radio").then(()=>this.syncRadios()),customElements.get("awc-radio-button")?this.syncRadioElements():customElements.whenDefined("awc-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(t=>t.checked=t.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){let t=this.required&&!this.value,e=this.customValidityMessage!=="";return t||e?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){let t=this.validity.valid;return this.errorMessage=this.customValidityMessage||t?"":this.validationInput.validationMessage,this.formControlController.setValidity(t),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),t||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),t}setCustomValidity(t=""){this.customValidityMessage=t,this.errorMessage=t,this.validationInput.setCustomValidity(t),this.formControlController.updateValidity()}render(){let t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),r=this.label?!0:!!t,a=this.helpText?!0:!!e,s=E`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return E`
      <fieldset
        part="form-control"
        class=${Z({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":r,"form-control--has-help-text":a})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${r?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label class="radio-group__validation">
              <input
                type="text"
                class="radio-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
                @invalid=${this.handleInvalid}
              />
            </label>
          </div>

          ${this.hasButtonGroup?E`
                <awc-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${s}
                </awc-button-group>
              `:s}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${a?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}};md.styles=Lb,md.dependencies={"awc-button-group":si};var Ie=md;mo([F("slot:not([name])")],Ie.prototype,"defaultSlot",2);mo([F(".radio-group__validation-input")],Ie.prototype,"validationInput",2);mo([X()],Ie.prototype,"hasButtonGroup",2);mo([X()],Ie.prototype,"errorMessage",2);mo([X()],Ie.prototype,"defaultValue",2);mo([u()],Ie.prototype,"label",2);mo([u({attribute:"help-text"})],Ie.prototype,"helpText",2);mo([u()],Ie.prototype,"name",2);mo([u({reflect:!0})],Ie.prototype,"value",2);mo([u({reflect:!0})],Ie.prototype,"size",2);mo([u({reflect:!0})],Ie.prototype,"form",2);mo([u({type:Boolean,reflect:!0})],Ie.prototype,"required",2);mo([M("size",{waitUntilFirstUpdate:!0})],Ie.prototype,"handleSizeChange",1);mo([M("value")],Ie.prototype,"handleValueChange",1);Ie.define("awc-radio-group");function Kn(i){return(t,e)=>{let r=typeof t=="function"?t:t[e];Object.assign(r,i)}}var zb=A`
  ${N}
  ${di}

  :host {
    --thumb-size: 20px;
    --tooltip-offset: 10px;
    --track-color-active: var(--awc-color-neutral-200);
    --track-color-inactive: var(--awc-color-neutral-200);
    --track-active-offset: 0%;
    --track-height: 6px;

    display: block;
  }

  .range {
    position: relative;
  }

  .range__control {
    --percent: 0%;
    -webkit-appearance: none;
    border-radius: 3px;
    width: 100%;
    height: var(--track-height);
    background: transparent;
    line-height: var(--awc-input-height-medium);
    vertical-align: middle;
    margin: 0;

    background-image: linear-gradient(
      to right,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  .range--rtl .range__control {
    background-image: linear-gradient(
      to left,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  /* Webkit */
  .range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--track-height);
    border-radius: 3px;
    border: none;
  }

  .range__control::-webkit-slider-thumb {
    border: none;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--awc-color-primary-600);
    border: solid var(--awc-input-border-width) var(--awc-color-primary-600);
    -webkit-appearance: none;
    margin-top: calc(var(--thumb-size) / -2 + var(--track-height) / 2);
    cursor: pointer;
  }

  .range__control:enabled::-webkit-slider-thumb:hover {
    background-color: var(--awc-color-primary-600);
    border-color: var(--awc-color-primary-600);
  }

  .range__control:enabled:focus-visible::-webkit-slider-thumb {
    outline: var(--awc-focus-ring);
    outline-offset: var(--awc-focus-ring-offset);
  }

  .range__control:enabled::-webkit-slider-thumb:active {
    background-color: var(--awc-color-primary-600);
    border-color: var(--awc-color-primary-600);
    cursor: grabbing;
  }

  /* Firefox */
  .range__control::-moz-focus-outer {
    border: 0;
  }

  .range__control::-moz-range-progress {
    background-color: var(--track-color-active);
    border-radius: 3px;
    height: var(--track-height);
  }

  .range__control::-moz-range-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color-inactive);
    border-radius: 3px;
    border: none;
  }

  .range__control::-moz-range-thumb {
    border: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--awc-color-primary-600);
    border-color: var(--awc-color-primary-600);
    transition:
      var(--awc-transition-fast) border-color,
      var(--awc-transition-fast) background-color,
      var(--awc-transition-fast) color,
      var(--awc-transition-fast) box-shadow;
    cursor: pointer;
  }

  .range__control:enabled::-moz-range-thumb:hover {
    background-color: var(--awc-color-primary-600);
    border-color: var(--awc-color-primary-600);
  }

  .range__control:enabled:focus-visible::-moz-range-thumb {
    outline: var(--awc-focus-ring);
    outline-offset: var(--awc-focus-ring-offset);
  }

  .range__control:enabled::-moz-range-thumb:active {
    background-color: var(--awc-color-primary-600);
    border-color: var(--awc-color-primary-600);
    cursor: grabbing;
  }

  /* States */
  .range__control:focus-visible {
    outline: none;
  }

  .range__control:disabled {
    opacity: 0.5;
  }

  .range__control:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .range__control:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

  /* Tooltip output */
  .range__tooltip {
    position: absolute;
    z-index: var(--awc-z-index-tooltip);
    left: 0;
    border-radius: var(--awc-tooltip-border-radius);
    background-color: var(--awc-tooltip-background-color);
    font-family: var(--awc-tooltip-font-family);
    font-size: var(--awc-tooltip-font-size);
    font-weight: var(--awc-tooltip-font-weight);
    line-height: var(--awc-tooltip-line-height);
    color: var(--awc-tooltip-color);
    opacity: 0;
    padding: var(--awc-tooltip-padding-y) var(--awc-tooltip-padding-x);
    transition: var(--awc-transition-fast) opacity;
    pointer-events: none;
  }

  .range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    translate: calc(-1 * var(--awc-tooltip-arrow-size));
  }

  .range--tooltip-visible .range__tooltip {
    opacity: 1;
  }

  /* Tooltip on top */
  .range--tooltip-top .range__tooltip {
    top: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-top .range__tooltip:after {
    border-top: var(--awc-tooltip-arrow-size) solid var(--awc-tooltip-background-color);
    border-left: var(--awc-tooltip-arrow-size) solid transparent;
    border-right: var(--awc-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Tooltip on bottom */
  .range--tooltip-bottom .range__tooltip {
    bottom: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-bottom .range__tooltip:after {
    border-bottom: var(--awc-tooltip-arrow-size) solid var(--awc-tooltip-background-color);
    border-left: var(--awc-tooltip-arrow-size) solid transparent;
    border-right: var(--awc-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }

  @media (forced-colors: active) {
    .range__control,
    .range__tooltip {
      border: solid 1px transparent;
    }

    .range__control::-webkit-slider-thumb {
      border: solid 1px transparent;
    }

    .range__control::-moz-range-thumb {
      border: solid 1px transparent;
    }

    .range__tooltip:after {
      display: none;
    }
  }
`;var gk=Object.defineProperty,bk=Object.getOwnPropertyDescriptor,ae=(i,t,e,r)=>{for(var a=r>1?void 0:r?bk(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&gk(t,e,a),a},Sb=class extends R{constructor(){super(...arguments),this.formControlController=new oe(this),this.hasSlotController=new Ct(this,"help-text","label"),this.localize=new et(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=t=>t.toString(),this.form="",this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleChange(){this.emit("awc-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("awc-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("awc-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("awc-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(t){this.input.style.setProperty("--percent",`${t*100}%`)}syncTooltip(t){if(this.output!==null){let e=this.input.offsetWidth,r=this.output.offsetWidth,a=getComputedStyle(this.input).getPropertyValue("--thumb-size"),s=this.localize.dir()==="rtl",l=e*t;if(s){let p=`${e-l}px + ${t} * ${a}`;this.output.style.translate=`calc((${p} - ${r/2}px - ${a} / 2))`}else{let p=`${l}px - ${t} * ${a}`;this.output.style.translate=`calc(${p} - ${r/2}px + ${a} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){let t=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(t),this.tooltip!=="none"&&this.syncTooltip(t)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}focus(t){this.input.focus(t)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){let t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),r=this.label?!0:!!t,a=this.helpText?!0:!!e;return E`
      <div
        part="form-control"
        class=${Z({"form-control":!0,"form-control--medium":!0,"form-control--has-label":r,"form-control--has-help-text":a})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${Z({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()==="rtl","range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"})}
            @mousedown=${this.handleThumbDragStart}
            @mouseup=${this.handleThumbDragEnd}
            @touchstart=${this.handleThumbDragStart}
            @touchend=${this.handleThumbDragEnd}
          >
            <input
              part="input"
              id="input"
              class="range__control"
              title=${this.title}
              type="range"
              name=${H(this.name)}
              ?disabled=${this.disabled}
              min=${H(this.min)}
              max=${H(this.max)}
              step=${H(this.step)}
              .value=${ko(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${this.tooltip!=="none"&&!this.disabled?E`
                  <output part="tooltip" class="range__tooltip">
                    ${typeof this.tooltipFormatter=="function"?this.tooltipFormatter(this.value):this.value}
                  </output>
                `:""}
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${a?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Sb.styles=zb;var Xt=Sb;ae([F(".range__control")],Xt.prototype,"input",2);ae([F(".range__tooltip")],Xt.prototype,"output",2);ae([X()],Xt.prototype,"hasFocus",2);ae([X()],Xt.prototype,"hasTooltip",2);ae([u()],Xt.prototype,"title",2);ae([u()],Xt.prototype,"name",2);ae([u({type:Number})],Xt.prototype,"value",2);ae([u()],Xt.prototype,"label",2);ae([u({attribute:"help-text"})],Xt.prototype,"helpText",2);ae([u({type:Boolean,reflect:!0})],Xt.prototype,"disabled",2);ae([u({type:Number})],Xt.prototype,"min",2);ae([u({type:Number})],Xt.prototype,"max",2);ae([u({type:Number})],Xt.prototype,"step",2);ae([u()],Xt.prototype,"tooltip",2);ae([u({attribute:!1})],Xt.prototype,"tooltipFormatter",2);ae([u({reflect:!0})],Xt.prototype,"form",2);ae([lo()],Xt.prototype,"defaultValue",2);ae([Kn({passive:!0})],Xt.prototype,"handleThumbDragStart",1);ae([M("value",{waitUntilFirstUpdate:!0})],Xt.prototype,"handleValueChange",1);ae([M("disabled",{waitUntilFirstUpdate:!0})],Xt.prototype,"handleDisabledChange",1);ae([M("hasTooltip",{waitUntilFirstUpdate:!0})],Xt.prototype,"syncRange",1);Xt.define("awc-range");var Ls=class extends ao{constructor(t){if(super(t),this.et=$t,t.type!==Me.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===$t||t==null)return this.vt=void 0,this.et=t;if(t===pe)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.vt;this.et=t;let e=[t];return e.raw=e,this.vt={_$litType$:this.constructor.resultType,strings:e,values:[]}}};Ls.directiveName="unsafeHTML",Ls.resultType=1;var Ca=xo(Ls);var Tb=A`
  ${N}

  :host {
    --symbol-color: var(--awc-color-neutral-300);
    --symbol-color-active: var(--awc-color-warning-400);
    --symbol-size: 1.2rem;
    --symbol-spacing: var(--awc-spacing-3x-small);

    display: inline-flex;
  }

  .rating {
    position: relative;
    display: inline-flex;
    border-radius: var(--awc-border-radius-medium);
    vertical-align: middle;
    align-items: center;
  }

  .rating:focus {
    outline: none;
  }

  .rating:focus-visible {
    outline: var(--awc-focus-ring);
    outline-offset: var(--awc-focus-ring-offset);
  }

  .rating__symbols {
    display: inline-flex;
    position: relative;
    font-size: var(--symbol-size);
    line-height: 0;
    color: var(--symbol-color);
    white-space: nowrap;
    cursor: pointer;
    align-items: center;
  }

  .rating__symbols > * {
    padding: var(--symbol-spacing);
  }

  .rating__symbol--active,
  .rating__partial--filled {
    color: var(--symbol-color-active);
  }

  .rating__partial-symbol-container {
    position: relative;
  }

  .rating__partial--filled {
    position: absolute;
    top: var(--symbol-spacing);
    left: var(--symbol-spacing);
  }

  .rating__symbol {
    transition: var(--awc-transition-fast) scale;
  }

  .rating__rate {
    font-size: calc(var(--symbol-size) * 0.75);
    margin-left: 0.5rem;
    line-height: 0;
  }

  .rating__symbol--hover {
    scale: 1.2;
  }

  .rating--disabled .rating__symbols,
  .rating--readonly .rating__symbols {
    cursor: default;
  }

  .rating--disabled .rating__symbol--hover,
  .rating--readonly .rating__symbol--hover {
    scale: none;
  }

  .rating--disabled {
    opacity: 0.5;
  }

  .rating--disabled .rating__symbols {
    cursor: not-allowed;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    .rating__symbol--active {
      color: SelectedItem;
    }
  }
`;var vk=Object.defineProperty,yk=Object.getOwnPropertyDescriptor,fo=(i,t,e,r)=>{for(var a=r>1?void 0:r?yk(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&vk(t,e,a),a},fd=class extends R{constructor(){super(...arguments),this.localize=new et(this),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.showRate=!1,this.getSymbol=()=>'<awc-icon name="star-fill" library="system"></awc-icon>'}getValueFromMousePosition(t){return this.getValueFromXCoordinate(t.clientX)}getValueFromTouchPosition(t){return this.getValueFromXCoordinate(t.touches[0].clientX)}getValueFromXCoordinate(t){let e=this.localize.dir()==="rtl",{left:r,right:a,width:s}=this.rating.getBoundingClientRect(),l=e?this.roundToPrecision((a-t)/s*this.max,this.precision):this.roundToPrecision((t-r)/s*this.max,this.precision);return te(l,0,this.max)}handleClick(t){this.disabled||(this.setValue(this.getValueFromMousePosition(t)),this.emit("awc-change"))}setValue(t){this.disabled||this.readonly||(this.value=t===this.value?0:t,this.isHovering=!1)}handleKeyDown(t){let e=this.localize.dir()==="ltr",r=this.localize.dir()==="rtl",a=this.value;if(!(this.disabled||this.readonly)){if(t.key==="ArrowDown"||e&&t.key==="ArrowLeft"||r&&t.key==="ArrowRight"){let s=t.shiftKey?1:this.precision;this.value=Math.max(0,this.value-s),t.preventDefault()}if(t.key==="ArrowUp"||e&&t.key==="ArrowRight"||r&&t.key==="ArrowLeft"){let s=t.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+s),t.preventDefault()}t.key==="Home"&&(this.value=0,t.preventDefault()),t.key==="End"&&(this.value=this.max,t.preventDefault()),this.value!==a&&this.emit("awc-change")}}handleMouseEnter(t){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(t)}handleMouseMove(t){this.hoverValue=this.getValueFromMousePosition(t)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(t){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(t),t.preventDefault()}handleTouchMove(t){this.hoverValue=this.getValueFromTouchPosition(t)}handleTouchEnd(t){this.isHovering=!1,this.setValue(this.hoverValue),this.emit("awc-change"),t.preventDefault()}roundToPrecision(t,e=.5){let r=1/e;return Math.ceil(t*r)/r}handleHoverValueChange(){this.emit("awc-hover",{detail:{phase:"move",value:this.hoverValue}})}handleIsHoveringChange(){this.emit("awc-hover",{detail:{phase:this.isHovering?"start":"end",value:this.hoverValue}})}focus(t){this.rating.focus(t)}blur(){this.rating.blur()}render(){let t=this.localize.dir()==="rtl",e=Array.from(Array(this.max).keys()),r=0;return this.disabled||this.readonly?r=this.value:r=this.isHovering?this.hoverValue:this.value,E`
      <div
        part="base"
        class=${Z({rating:!0,"rating--readonly":this.readonly,"rating--disabled":this.disabled,"rating--rtl":t})}
        role="slider"
        aria-label=${this.label}
        aria-disabled=${this.disabled?"true":"false"}
        aria-readonly=${this.readonly?"true":"false"}
        aria-valuenow=${this.value}
        aria-valuemin=${0}
        aria-valuemax=${this.max}
        tabindex=${this.disabled?"-1":"0"}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mouseenter=${this.handleMouseEnter}
        @touchstart=${this.handleTouchStart}
        @mouseleave=${this.handleMouseLeave}
        @touchend=${this.handleTouchEnd}
        @mousemove=${this.handleMouseMove}
        @touchmove=${this.handleTouchMove}
      >
        <span class="rating__symbols">
          ${e.map(a=>r>a&&r<a+1?E`
                <span
                  class=${Z({rating__symbol:!0,"rating__partial-symbol-container":!0,"rating__symbol--hover":this.isHovering&&Math.ceil(r)===a+1})}
                  role="presentation"
                  @mouseenter=${this.handleMouseEnter}
                >
                  <div
                    style=${Qt({clipPath:t?`inset(0 ${(r-a)*100}% 0 0)`:`inset(0 0 0 ${(r-a)*100}%)`})}
                  >
                    ${Ca(this.getSymbol(a+1))}
                  </div>
                  <div
                    class="rating__partial--filled"
                    style=${Qt({clipPath:t?`inset(0 0 0 ${100-(r-a)*100}%)`:`inset(0 ${100-(r-a)*100}% 0 0)`})}
                  >
                    ${Ca(this.getSymbol(a+1))}
                  </div>
                </span>
              `:E`
              <span
                class=${Z({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(r)===a+1,"rating__symbol--active":r>=a+1})}
                role="presentation"
                @mouseenter=${this.handleMouseEnter}
              >
                ${Ca(this.getSymbol(a+1))}
              </span>
            `)}
        </span>
        ${this.showRate?E`<span part="value" class=${Z({rating__rate:!0})}> ${r} / ${this.max} </span>`:""}
      </div>
    `}};fd.styles=Tb,fd.dependencies={"awc-icon":nt};var De=fd;fo([F(".rating")],De.prototype,"rating",2);fo([X()],De.prototype,"hoverValue",2);fo([X()],De.prototype,"isHovering",2);fo([u()],De.prototype,"label",2);fo([u({type:Number})],De.prototype,"value",2);fo([u({type:Number})],De.prototype,"max",2);fo([u({type:Number})],De.prototype,"precision",2);fo([u({type:Boolean,reflect:!0})],De.prototype,"readonly",2);fo([u({type:Boolean,reflect:!0})],De.prototype,"disabled",2);fo([u({type:Boolean,reflect:!0,attribute:"show-rate"})],De.prototype,"showRate",2);fo([u()],De.prototype,"getSymbol",2);fo([Kn({passive:!0})],De.prototype,"handleTouchMove",1);fo([M("hoverValue")],De.prototype,"handleHoverValueChange",1);fo([M("isHovering")],De.prototype,"handleIsHoveringChange",1);De.define("awc-rating");var wk=Object.defineProperty,_k=Object.getOwnPropertyDescriptor,Br=(i,t,e,r)=>{for(var a=r>1?void 0:r?_k(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&wk(t,e,a),a},xk=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],No=class extends R{constructor(){super(...arguments),this.localize=new et(this),this.isoTime="",this.relativeTime="",this.titleTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){let t=new Date,e=new Date(this.date);if(isNaN(e.getMilliseconds()))return this.relativeTime="",this.isoTime="","";let r=e.getTime()-t.getTime(),{unit:a,value:s}=xk.find(l=>Math.abs(r)<l.max);if(this.isoTime=e.toISOString(),this.titleTime=this.localize.date(e,{month:"long",year:"numeric",day:"numeric",hour:"numeric",minute:"numeric",timeZoneName:"short"}),this.relativeTime=this.localize.relativeTime(Math.round(r/s),a,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let l;a==="minute"?l=Xn("second"):a==="hour"?l=Xn("minute"):a==="day"?l=Xn("hour"):l=Xn("day"),this.updateTimeout=window.setTimeout(()=>this.requestUpdate(),l)}return E` <time datetime=${this.isoTime} title=${this.titleTime}>${this.relativeTime}</time> `}};Br([X()],No.prototype,"isoTime",2);Br([X()],No.prototype,"relativeTime",2);Br([X()],No.prototype,"titleTime",2);Br([u()],No.prototype,"date",2);Br([u()],No.prototype,"format",2);Br([u()],No.prototype,"numeric",2);Br([u({type:Boolean})],No.prototype,"sync",2);function Xn(i){let t={second:1e3,minute:6e4,hour:36e5,day:864e5}[i];return t-Date.now()%t}No.define("awc-relative-time");var Pb=A`
  ${N}

  :host {
    display: contents;
  }
`;var kk=Object.defineProperty,Ck=Object.getOwnPropertyDescriptor,Eb=(i,t,e,r)=>{for(var a=r>1?void 0:r?Ck(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&kk(t,e,a),a},Ob=class extends R{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>{this.emit("awc-resize",{detail:{entries:t}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){let t=this.shadowRoot.querySelector("slot");if(t!==null){let e=t.assignedElements({flatten:!0});this.observedElements.forEach(r=>this.resizeObserver.unobserve(r)),this.observedElements=[],e.forEach(r=>{this.resizeObserver.observe(r),this.observedElements.push(r)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return E` <slot @slotchange=${this.handleSlotChange}></slot> `}};Ob.styles=Pb;var zs=Ob;Eb([u({type:Boolean,reflect:!0})],zs.prototype,"disabled",2);Eb([M("disabled",{waitUntilFirstUpdate:!0})],zs.prototype,"handleDisabledChange",1);zs.define("awc-resize-observer");var Mb=A`
  ${N}

  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    border-radius: var(--awc-tag-border-radius);
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--awc-color-primary-200);
    border-color: var(--awc-color-primary-400);
    color: var(--awc-color-primary-800);
  }

  .tag--primary:active > awc-icon-button {
    color: var(--awc-color-primary-600);
  }

  .tag--secondary {
    background-color: var(--awc-color-secondary-200);
    border-color: var(--awc-color-secondary-400);
    color: var(--awc-color-secondary-800);
  }

  .tag--secondary:active > awc-icon-button {
    color: var(--awc-color-secondary-600);
  }

  .tag--tertiary {
    background-color: var(--awc-color-tertiary-50);
    border-color: var(--awc-color-tertiary-200);
    color: var(--awc-color-tertiary-800);
  }

  .tag--tertiary:active > awc-icon-button {
    color: var(--awc-color-tertiary-600);
  }

  .tag--success {
    background-color: var(--awc-color-success-200);
    border-color: var(--awc-color-success-400);
    color: var(--awc-color-success-800);
  }

  .tag--success:active > awc-icon-button {
    color: var(--awc-color-success-600);
  }

  .tag--neutral {
    background-color: var(--awc-color-neutral-200);
    border-color: var(--awc-color-neutral-400);
    color: var(--awc-color-neutral-800);
  }

  .tag--neutral:active > awc-icon-button {
    color: var(--awc-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--awc-color-warning-200);
    border-color: var(--awc-color-warning-400);
    color: var(--awc-color-warning-800);
  }

  .tag--warning:active > awc-icon-button {
    color: var(--awc-color-warning-600);
  }

  .tag--danger {
    background-color: var(--awc-color-danger-200);
    border-color: var(--awc-color-danger-400);
    color: var(--awc-color-danger-800);
  }

  .tag--danger:active > awc-icon-button {
    color: var(--awc-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--awc-button-font-size-small);
    height: calc(var(--awc-input-height-small) * 0.8);
    line-height: calc(var(--awc-input-height-small) - var(--awc-input-border-width) * 2);
    padding: 0 var(--awc-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--awc-button-font-size-medium);
    height: calc(var(--awc-input-height-medium) * 0.8);
    line-height: calc(var(--awc-input-height-medium) - var(--awc-input-border-width) * 2);
    padding: 0 var(--awc-spacing-small);
  }

  .tag--large {
    font-size: var(--awc-button-font-size-large);
    height: calc(var(--awc-input-height-large) * 0.8);
    line-height: calc(var(--awc-input-height-large) - var(--awc-input-border-width) * 2);
    padding: 0 var(--awc-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--awc-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--awc-border-radius-pill);
  }
`;var Lk=Object.defineProperty,zk=Object.getOwnPropertyDescriptor,Jn=(i,t,e,r)=>{for(var a=r>1?void 0:r?zk(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&Lk(t,e,a),a},gd=class extends R{constructor(){super(...arguments),this.localize=new et(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("awc-remove")}render(){return E`
      <span
        part="base"
        class=${Z({tag:!0,"tag--primary":this.variant==="primary","tag--secondary":this.variant==="secondary","tag--tertiary":this.variant==="tertiary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?E`
              <awc-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></awc-icon-button>
            `:""}
      </span>
    `}};gd.styles=Mb,gd.dependencies={"awc-icon-button":Ut};var Vi=gd;Jn([u({reflect:!0})],Vi.prototype,"variant",2);Jn([u({reflect:!0})],Vi.prototype,"size",2);Jn([u({type:Boolean,reflect:!0})],Vi.prototype,"pill",2);Jn([u({type:Boolean})],Vi.prototype,"removable",2);var Ab=A`
  ${N}
  ${di}

  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--awc-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--awc-input-font-family);
    font-weight: var(--awc-input-font-weight);
    letter-spacing: var(--awc-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--awc-transition-fast) color,
      var(--awc-transition-fast) border,
      var(--awc-transition-fast) box-shadow,
      var(--awc-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--awc-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--awc-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--awc-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--awc-spacing-2x-small);
  }

  .select__tags::slotted(awc-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(awc-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--awc-input-background-color-base);
    border: solid var(--awc-input-border-width) var(--awc-input-border-color-base);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--awc-input-background-color-disabled);
    border-color: var(--awc-input-border-color-disabled);
    color: var(--awc-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--awc-input-background-color-focus);
    border-color: var(--awc-input-border-color-focus);
    box-shadow: 0 0 0 var(--awc-focus-ring-width) var(--awc-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--awc-input-filled-background-color);
    color: var(--awc-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--awc-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--awc-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--awc-input-filled-background-color-focus);
    outline: var(--awc-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--awc-input-border-radius-small);
    font-size: var(--awc-input-font-size-small);
    min-height: var(--awc-input-height-small);
    padding-block: 0;
    padding-inline: var(--awc-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--awc-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--awc-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--awc-input-border-radius-medium);
    font-size: var(--awc-input-font-size-medium);
    min-height: var(--awc-input-height-medium);
    padding-block: 0;
    padding-inline: var(--awc-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--awc-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--awc-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--awc-input-border-radius-large);
    font-size: var(--awc-input-font-size-large);
    min-height: var(--awc-input-height-large);
    padding-block: 0;
    padding-inline: var(--awc-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--awc-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--awc-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--awc-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--awc-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--awc-input-height-large);
  }

  /* Prefix */
  .select__prefix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--awc-input-placeholder-color);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--awc-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--awc-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--awc-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--awc-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--awc-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--awc-font-sans);
    font-size: var(--awc-font-size-medium);
    font-weight: var(--awc-font-weight-normal);
    box-shadow: var(--awc-shadow-large);
    background: var(--awc-panel-background-color);
    border: solid var(--awc-panel-border-width) var(--awc-panel-border-color);
    border-radius: var(--awc-border-radius-medium);
    padding-block: var(--awc-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(awc-divider) {
    --spacing: var(--awc-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    font-size: var(--awc-font-size-small);
    font-weight: var(--awc-font-weight-semibold);
    color: var(--awc-color-neutral-500);
    padding-block: var(--awc-spacing-x-small);
    padding-inline: var(--awc-spacing-x-large);
  }
`;var Sk=Object.defineProperty,Tk=Object.getOwnPropertyDescriptor,Dt=(i,t,e,r)=>{for(var a=r>1?void 0:r?Tk(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&Sk(t,e,a),a},bd=class extends R{constructor(){super(...arguments),this.formControlController=new oe(this,{assumeInteractionOn:["awc-blur","awc-input"]}),this.hasSlotController=new Ct(this,"help-text","label"),this.localize=new et(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.name="",this.value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=t=>E`
      <awc-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @awc-remove=${e=>this.handleTagRemove(e,t)}
      >
        ${t.getTextLabel()}
      </awc-tag>
    `,this.handleDocumentFocusIn=t=>{let e=t.composedPath();this&&!e.includes(this)&&this.hide()},this.handleDocumentKeyDown=t=>{let e=t.target,r=e.closest(".select__clear")!==null,a=e.closest("awc-icon-button")!==null;if(!(r||a)){if(t.key==="Escape"&&this.open&&(t.preventDefault(),t.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),t.key==="Enter"||t.key===" "&&this.typeToSelectString===""){if(t.preventDefault(),t.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("awc-input"),this.emit("awc-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(t.key)){let s=this.getAllOptions(),l=s.indexOf(this.currentOption),p=Math.max(0,l);if(t.preventDefault(),!this.open&&(this.show(),this.currentOption))return;t.key==="ArrowDown"?(p=l+1,p>s.length-1&&(p=0)):t.key==="ArrowUp"?(p=l-1,p<0&&(p=s.length-1)):t.key==="Home"?p=0:t.key==="End"&&(p=s.length-1),this.setCurrentOption(s[p])}if(t.key.length===1||t.key==="Backspace"){let s=this.getAllOptions();if(t.metaKey||t.ctrlKey||t.altKey)return;if(!this.open){if(t.key==="Backspace")return;this.show()}t.stopPropagation(),t.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),t.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=t.key.toLowerCase();for(let l of s)if(l.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(l);break}}}},this.handleDocumentMouseDown=t=>{let e=t.composedPath();this&&!e.includes(this)&&this.hide()}}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),this.open=!1}addOpenListeners(){document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("awc-focus")}handleBlur(){this.hasFocus=!1,this.emit("awc-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(t){let e=t.composedPath().some(r=>r instanceof Element&&r.tagName.toLowerCase()==="awc-icon-button");this.disabled||e||(t.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(t){t.stopPropagation(),this.handleDocumentKeyDown(t)}handleClearClick(t){t.stopPropagation(),this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("awc-clear"),this.emit("awc-input"),this.emit("awc-change")}))}handleClearMouseDown(t){t.stopPropagation(),t.preventDefault()}handleOptionClick(t){let e=t.target.closest("awc-option"),r=this.value;e&&!e.disabled&&(this.multiple?this.toggleOptionSelection(e):this.setSelectedOptions(e),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==r&&this.updateComplete.then(()=>{this.emit("awc-input"),this.emit("awc-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){let t=this.getAllOptions(),e=Array.isArray(this.value)?this.value:[this.value],r=[];customElements.get("awc-option")?(t.forEach(a=>r.push(a.value)),this.setSelectedOptions(t.filter(a=>e.includes(a.value)))):customElements.whenDefined("awc-option").then(()=>this.handleDefaultSlotChange())}handleTagRemove(t,e){t.stopPropagation(),this.disabled||(this.toggleOptionSelection(e,!1),this.updateComplete.then(()=>{this.emit("awc-input"),this.emit("awc-change")}))}getAllOptions(){return[...this.querySelectorAll("awc-option")]}getFirstOption(){return this.querySelector("awc-option")}setCurrentOption(t){this.getAllOptions().forEach(e=>{e.current=!1,e.tabIndex=-1}),t&&(this.currentOption=t,t.current=!0,t.tabIndex=0,t.focus())}setSelectedOptions(t){let e=this.getAllOptions(),r=Array.isArray(t)?t:[t];e.forEach(a=>a.selected=!1),r.length&&r.forEach(a=>a.selected=!0),this.selectionChanged()}toggleOptionSelection(t,e){e===!0||e===!1?t.selected=e:t.selected=!t.selected,this.selectionChanged()}selectionChanged(){this.selectedOptions=this.getAllOptions().filter(t=>t.selected),this.multiple?(this.value=this.selectedOptions.map(t=>t.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length)):(this.value=this.selectedOptions[0]?.value??"",this.displayLabel=this.selectedOptions[0]?.getTextLabel()??""),this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((t,e)=>{if(e<this.maxOptionsVisible||this.maxOptionsVisible<=0){let r=this.getTag(t,e);return E`<div @awc-remove=${a=>this.handleTagRemove(a,t)}>
          ${typeof r=="string"?Ca(r):r}
        </div>`}else if(e===this.maxOptionsVisible)return E`<awc-tag>+${this.selectedOptions.length-e}</awc-tag>`;return E``})}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}handleValueChange(){let t=this.getAllOptions(),e=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(t.filter(r=>e.includes(r.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("awc-show"),this.addOpenListeners(),await At(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});let{keyframes:t,options:e}=yt(this,"select.show",{dir:this.localize.dir()});await Tt(this.popup.popup,t,e),this.currentOption&&ws(this.currentOption,this.listbox,"vertical","auto"),this.emit("awc-after-show")}else{this.emit("awc-hide"),this.removeOpenListeners(),await At(this);let{keyframes:t,options:e}=yt(this,"select.hide",{dir:this.localize.dir()});await Tt(this.popup.popup,t,e),this.listbox.hidden=!0,this.popup.active=!1,this.emit("awc-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,Kt(this,"awc-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,Kt(this,"awc-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(t){this.valueInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){this.displayInput.focus(t)}blur(){this.displayInput.blur()}render(){let t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),r=this.label?!0:!!t,a=this.helpText?!0:!!e,s=this.clearable&&!this.disabled&&this.value.length>0,l=this.placeholder&&this.value.length===0;return E`
      <div
        part="form-control"
        class=${Z({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":a})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${r?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <awc-popup
            class=${Z({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":l,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
            placement=${this.placement}
            strategy=${this.hoist?"fixed":"absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple?E`<div part="tags" class="select__tags">${this.tags}</div>`:""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${s?E`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <awc-icon name="x-circle-fill" library="system"></awc-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <awc-icon library="system" name="chevron-down"></awc-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </awc-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${a?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};bd.styles=Ab,bd.dependencies={"awc-icon":nt,"awc-popup":Lt,"awc-tag":Vi};var St=bd;Dt([F(".select")],St.prototype,"popup",2);Dt([F(".select__combobox")],St.prototype,"combobox",2);Dt([F(".select__display-input")],St.prototype,"displayInput",2);Dt([F(".select__value-input")],St.prototype,"valueInput",2);Dt([F(".select__listbox")],St.prototype,"listbox",2);Dt([X()],St.prototype,"hasFocus",2);Dt([X()],St.prototype,"displayLabel",2);Dt([X()],St.prototype,"currentOption",2);Dt([X()],St.prototype,"selectedOptions",2);Dt([u()],St.prototype,"name",2);Dt([u({converter:{fromAttribute:i=>i.split(" "),toAttribute:i=>i.join(" ")}})],St.prototype,"value",2);Dt([lo()],St.prototype,"defaultValue",2);Dt([u({reflect:!0})],St.prototype,"size",2);Dt([u()],St.prototype,"placeholder",2);Dt([u({type:Boolean,reflect:!0})],St.prototype,"multiple",2);Dt([u({attribute:"max-options-visible",type:Number})],St.prototype,"maxOptionsVisible",2);Dt([u({type:Boolean,reflect:!0})],St.prototype,"disabled",2);Dt([u({type:Boolean})],St.prototype,"clearable",2);Dt([u({type:Boolean,reflect:!0})],St.prototype,"open",2);Dt([u({type:Boolean})],St.prototype,"hoist",2);Dt([u({type:Boolean,reflect:!0})],St.prototype,"filled",2);Dt([u({type:Boolean,reflect:!0})],St.prototype,"pill",2);Dt([u()],St.prototype,"label",2);Dt([u({reflect:!0})],St.prototype,"placement",2);Dt([u({attribute:"help-text"})],St.prototype,"helpText",2);Dt([u({reflect:!0})],St.prototype,"form",2);Dt([u({type:Boolean,reflect:!0})],St.prototype,"required",2);Dt([u()],St.prototype,"getTag",2);Dt([M("disabled",{waitUntilFirstUpdate:!0})],St.prototype,"handleDisabledChange",1);Dt([M("value",{waitUntilFirstUpdate:!0})],St.prototype,"handleValueChange",1);Dt([M("open",{waitUntilFirstUpdate:!0})],St.prototype,"handleOpenChange",1);ht("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});ht("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});St.define("awc-select");var $b=A`
  ${N}

  :host {
    --border-radius: var(--awc-border-radius-pill);
    --color: var(--awc-color-neutral-200);
    --sheen-color: var(--awc-color-neutral-300);

    display: block;
    position: relative;
  }

  .skeleton {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }

  .skeleton__indicator {
    flex: 1 1 auto;
    background: var(--color);
    border-radius: var(--border-radius);
  }

  .skeleton--sheen .skeleton__indicator {
    background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
    background-size: 400% 100%;
    animation: sheen 8s ease-in-out infinite;
  }

  .skeleton--pulse .skeleton__indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    :host {
      --color: GrayText;
    }
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`;var Pk=Object.defineProperty,Ek=Object.getOwnPropertyDescriptor,Ok=(i,t,e,r)=>{for(var a=r>1?void 0:r?Ek(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&Pk(t,e,a),a},Ib=class extends R{constructor(){super(...arguments),this.effect="none"}render(){return E`
      <div
        part="base"
        class=${Z({skeleton:!0,"skeleton--pulse":this.effect==="pulse","skeleton--sheen":this.effect==="sheen"})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};Ib.styles=$b;var Qn=Ib;Ok([u()],Qn.prototype,"effect",2);Qn.define("awc-skeleton");Cr.define("awc-spinner");var Db=A`
  ${N}

  :host {
    --divider-width: 4px;
    --divider-hit-area: 12px;
    --min: 0%;
    --max: 100%;

    display: grid;
  }

  .start,
  .end {
    overflow: hidden;
  }

  .divider {
    flex: 0 0 var(--divider-width);
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: var(--awc-color-neutral-200);
    color: var(--awc-color-neutral-900);
    z-index: 1;
  }

  .divider:focus {
    outline: none;
  }

  :host(:not([disabled])) .divider:focus-visible {
    background-color: var(--awc-color-primary-600);
    color: var(--awc-color-neutral-0);
  }

  :host([disabled]) .divider {
    cursor: not-allowed;
  }

  /* Horizontal */
  :host(:not([vertical], [disabled])) .divider {
    cursor: col-resize;
  }

  :host(:not([vertical])) .divider::after {
    display: flex;
    content: '';
    position: absolute;
    height: 100%;
    left: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    width: var(--divider-hit-area);
  }

  /* Vertical */
  :host([vertical]) {
    flex-direction: column;
  }

  :host([vertical]:not([disabled])) .divider {
    cursor: row-resize;
  }

  :host([vertical]) .divider::after {
    content: '';
    position: absolute;
    width: 100%;
    top: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    height: var(--divider-hit-area);
  }

  @media (forced-colors: active) {
    .divider {
      outline: solid 1px transparent;
    }
  }
`;var Mk=Object.defineProperty,Ak=Object.getOwnPropertyDescriptor,Ko=(i,t,e,r)=>{for(var a=r>1?void 0:r?Ak(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&Mk(t,e,a),a},Bb=class extends R{constructor(){super(...arguments),this.localize=new et(this),this.position=50,this.vertical=!1,this.disabled=!1,this.snapThreshold=12}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>this.handleResize(t)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}detectSize(){let{width:t,height:e}=this.getBoundingClientRect();this.size=this.vertical?e:t}percentageToPixels(t){return this.size*(t/100)}pixelsToPercentage(t){return t/this.size*100}handleDrag(t){let e=this.localize.dir()==="rtl";this.disabled||(t.cancelable&&t.preventDefault(),Qi(this,{onMove:(r,a)=>{let s=this.vertical?a:r;this.primary==="end"&&(s=this.size-s),this.snap&&this.snap.split(" ").forEach(l=>{let p;l.endsWith("%")?p=this.size*(parseFloat(l)/100):p=parseFloat(l),e&&!this.vertical&&(p=this.size-p),s>=p-this.snapThreshold&&s<=p+this.snapThreshold&&(s=p)}),this.position=te(this.pixelsToPercentage(s),0,100)},initialEvent:t}))}handleKeyDown(t){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key)){let e=this.position,r=(t.shiftKey?10:1)*(this.primary==="end"?-1:1);t.preventDefault(),(t.key==="ArrowLeft"&&!this.vertical||t.key==="ArrowUp"&&this.vertical)&&(e-=r),(t.key==="ArrowRight"&&!this.vertical||t.key==="ArrowDown"&&this.vertical)&&(e+=r),t.key==="Home"&&(e=this.primary==="end"?100:0),t.key==="End"&&(e=this.primary==="end"?0:100),this.position=te(e,0,100)}}handleResize(t){let{width:e,height:r}=t[0].contentRect;this.size=this.vertical?r:e,this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.positionInPixels=this.percentageToPixels(this.position),this.emit("awc-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){let t=this.vertical?"gridTemplateRows":"gridTemplateColumns",e=this.vertical?"gridTemplateColumns":"gridTemplateRows",r=this.localize.dir()==="rtl",a=`
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,s="auto";return this.primary==="end"?r&&!this.vertical?this.style[t]=`${a} var(--divider-width) ${s}`:this.style[t]=`${s} var(--divider-width) ${a}`:r&&!this.vertical?this.style[t]=`${s} var(--divider-width) ${a}`:this.style[t]=`${a} var(--divider-width) ${s}`,this.style[e]="",E`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${H(this.disabled?void 0:"0")}
        role="separator"
        aria-valuenow=${this.position}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.localize.term("resize")}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
      >
        <slot name="divider"></slot>
      </div>

      <slot name="end" part="panel end" class="end"></slot>
    `}};Bb.styles=Db;var go=Bb;Ko([F(".divider")],go.prototype,"divider",2);Ko([u({type:Number,reflect:!0})],go.prototype,"position",2);Ko([u({attribute:"position-in-pixels",type:Number})],go.prototype,"positionInPixels",2);Ko([u({type:Boolean,reflect:!0})],go.prototype,"vertical",2);Ko([u({type:Boolean,reflect:!0})],go.prototype,"disabled",2);Ko([u()],go.prototype,"primary",2);Ko([u()],go.prototype,"snap",2);Ko([u({type:Number,attribute:"snap-threshold"})],go.prototype,"snapThreshold",2);Ko([M("position")],go.prototype,"handlePositionChange",1);Ko([M("positionInPixels")],go.prototype,"handlePositionInPixelsChange",1);Ko([M("vertical")],go.prototype,"handleVerticalChange",1);go.define("awc-split-panel");var Rb=A`
  ${N}

  :host {
    display: inline-block;
  }

  :host([size='small']) {
    --height: var(--awc-toggle-size-small);
    --thumb-size: calc(var(--awc-toggle-size-small) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--awc-input-font-size-small);
  }

  :host([size='medium']) {
    --height: var(--awc-toggle-size-medium);
    --thumb-size: calc(var(--awc-toggle-size-medium) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--awc-input-font-size-medium);
  }

  :host([size='large']) {
    --height: var(--awc-toggle-size-large);
    --thumb-size: calc(var(--awc-toggle-size-large) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--awc-input-font-size-large);
  }

  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: var(--awc-input-font-family);
    font-size: inherit;
    font-weight: var(--awc-input-font-weight);
    color: var(--awc-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--awc-color-neutral-400);
    border: solid var(--awc-input-border-width) var(--awc-color-neutral-400);
    border-radius: var(--height);
    transition:
      var(--awc-transition-fast) border-color,
      var(--awc-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--awc-color-neutral-0);
    border-radius: 50%;
    border: solid var(--awc-input-border-width) var(--awc-color-neutral-400);
    translate: calc((var(--width) - var(--height)) / -2);
    transition:
      var(--awc-transition-fast) translate ease,
      var(--awc-transition-fast) background-color,
      var(--awc-transition-fast) border-color,
      var(--awc-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--awc-color-neutral-400);
    border-color: var(--awc-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--awc-color-neutral-0);
    border-color: var(--awc-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--awc-color-neutral-400);
    border-color: var(--awc-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--awc-color-neutral-0);
    border-color: var(--awc-color-primary-600);
    outline: var(--awc-focus-ring);
    outline-offset: var(--awc-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--awc-color-primary-600);
    border-color: var(--awc-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--awc-color-neutral-0);
    border-color: var(--awc-color-primary-600);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--awc-color-primary-600);
    border-color: var(--awc-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--awc-color-neutral-0);
    border-color: var(--awc-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--awc-color-primary-600);
    border-color: var(--awc-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--awc-color-neutral-0);
    border-color: var(--awc-color-primary-600);
    outline: var(--awc-focus-ring);
    outline-offset: var(--awc-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--awc-input-required-content);
    margin-inline-start: var(--awc-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`;var $k=Object.defineProperty,Ik=Object.getOwnPropertyDescriptor,zo=(i,t,e,r)=>{for(var a=r>1?void 0:r?Ik(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&$k(t,e,a),a},Fb=class extends R{constructor(){super(...arguments),this.formControlController=new oe(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("awc-blur")}handleInput(){this.emit("awc-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleClick(){this.checked=!this.checked,this.emit("awc-change")}handleFocus(){this.hasFocus=!0,this.emit("awc-focus")}handleKeyDown(t){t.key==="ArrowLeft"&&(t.preventDefault(),this.checked=!1,this.emit("awc-change"),this.emit("awc-input")),t.key==="ArrowRight"&&(t.preventDefault(),this.checked=!0,this.emit("awc-change"),this.emit("awc-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){return E`
      <label
        part="base"
        class=${Z({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
      >
        <input
          class="switch__input"
          type="checkbox"
          title=${this.title}
          name=${this.name}
          value=${H(this.value)}
          .checked=${ko(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          role="switch"
          aria-checked=${this.checked?"true":"false"}
          @click=${this.handleClick}
          @input=${this.handleInput}
          @invalid=${this.handleInvalid}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @keydown=${this.handleKeyDown}
        />

        <span part="control" class="switch__control">
          <span part="thumb" class="switch__thumb"></span>
        </span>

        <div part="label" class="switch__label">
          <slot></slot>
        </div>
      </label>
    `}};Fb.styles=Rb;var Ue=Fb;zo([F('input[type="checkbox"]')],Ue.prototype,"input",2);zo([X()],Ue.prototype,"hasFocus",2);zo([u()],Ue.prototype,"title",2);zo([u()],Ue.prototype,"name",2);zo([u()],Ue.prototype,"value",2);zo([u({reflect:!0})],Ue.prototype,"size",2);zo([u({type:Boolean,reflect:!0})],Ue.prototype,"disabled",2);zo([u({type:Boolean,reflect:!0})],Ue.prototype,"checked",2);zo([lo("checked")],Ue.prototype,"defaultChecked",2);zo([u({reflect:!0})],Ue.prototype,"form",2);zo([u({type:Boolean,reflect:!0})],Ue.prototype,"required",2);zo([M("checked",{waitUntilFirstUpdate:!0})],Ue.prototype,"handleCheckedChange",1);zo([M("disabled",{waitUntilFirstUpdate:!0})],Ue.prototype,"handleDisabledChange",1);Ue.define("awc-switch");var Nb=A`
  ${N}

  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--awc-font-sans);
    font-size: var(--awc-font-size-small);
    font-weight: var(--awc-font-weight-semibold);
    border-radius: var(--awc-border-radius-medium);
    color: currentColor;
    padding: var(--awc-spacing-medium) var(--awc-spacing-large);
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--awc-color-primary-800);
  }

  .tab:focus {
    outline: none;
  }

  .tab:focus-visible:not(.tab--disabled) {
    color: var(--awc-color-primary-600);
  }

  .tab:focus-visible {
    outline: var(--awc-focus-ring);
    outline-offset: calc(-1 * var(--awc-focus-ring-width) - var(--awc-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--awc-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--awc-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--awc-font-size-small);
    margin-inline-start: var(--awc-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--awc-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`;var Dk=Object.defineProperty,Bk=Object.getOwnPropertyDescriptor,Rr=(i,t,e,r)=>{for(var a=r>1?void 0:r?Bk(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&Dk(t,e,a),a},Rk=0,vd=class extends R{constructor(){super(...arguments),this.localize=new et(this),this.attrId=++Rk,this.componentId=`awc-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(t){t.stopPropagation(),this.emit("awc-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(t){this.tab.focus(t)}blur(){this.tab.blur()}render(){return this.id=this.id.length>0?this.id:this.componentId,E`
      <div
        part="base"
        class=${Z({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
        tabindex=${this.disabled?"-1":"0"}
      >
        <slot></slot>
        ${this.closable?E`
              <awc-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></awc-icon-button>
            `:""}
      </div>
    `}};vd.styles=Nb,vd.dependencies={"awc-icon-button":Ut};var gi=vd;Rr([F(".tab")],gi.prototype,"tab",2);Rr([u({reflect:!0})],gi.prototype,"panel",2);Rr([u({type:Boolean,reflect:!0})],gi.prototype,"active",2);Rr([u({type:Boolean})],gi.prototype,"closable",2);Rr([u({type:Boolean,reflect:!0})],gi.prototype,"disabled",2);Rr([M("active")],gi.prototype,"handleActiveChange",1);Rr([M("disabled")],gi.prototype,"handleDisabledChange",1);gi.define("awc-tab");var jb=A`
  ${N}

  :host {
    --indicator-color: var(--awc-color-primary-600);
    --track-color: var(--awc-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition:
      var(--awc-transition-fast) translate ease,
      var(--awc-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--awc-spacing-x-large);
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--awc-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(awc-tab-panel) {
    --padding: var(--awc-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(awc-tab-panel) {
    --padding: var(--awc-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(awc-tab-panel) {
    --padding: 0 var(--awc-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(awc-tab-panel) {
    --padding: 0 var(--awc-spacing-medium);
  }
`;var Fk=Object.defineProperty,Nk=Object.getOwnPropertyDescriptor,bi=(i,t,e,r)=>{for(var a=r>1?void 0:r?Nk(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&Fk(t,e,a),a},yd=class extends R{constructor(){super(...arguments),this.localize=new et(this),this.tabs=[],this.panels=[],this.hasScrollControls=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1}connectedCallback(){let t=Promise.all([customElements.whenDefined("awc-tab"),customElements.whenDefined("awc-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(e=>{e.some(r=>!["aria-labelledby","aria-controls"].includes(r.attributeName))&&setTimeout(()=>this.setAriaLabels()),e.some(r=>r.attributeName==="disabled")&&this.syncTabsAndPanels()}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),t.then(()=>{new IntersectionObserver((e,r)=>{e[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab(this.getActiveTab()??this.tabs[0],{emitEvents:!1}),r.unobserve(e[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver.disconnect(),this.resizeObserver.unobserve(this.nav)}getAllTabs(t={includeDisabled:!0}){return[...this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()].filter(e=>t.includeDisabled?e.tagName.toLowerCase()==="awc-tab":e.tagName.toLowerCase()==="awc-tab"&&!e.disabled)}getAllPanels(){return[...this.body.assignedElements()].filter(t=>t.tagName.toLowerCase()==="awc-tab-panel")}getActiveTab(){return this.tabs.find(t=>t.active)}handleClick(t){let e=t.target.closest("awc-tab");e?.closest("awc-tab-group")===this&&e!==null&&this.setActiveTab(e,{scrollBehavior:"smooth"})}handleKeyDown(t){let e=t.target.closest("awc-tab");if(e?.closest("awc-tab-group")===this&&(["Enter"," "].includes(t.key)&&e!==null&&(this.setActiveTab(e,{scrollBehavior:"smooth"}),t.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key))){let r=this.tabs.find(s=>s.matches(":focus")),a=this.localize.dir()==="rtl";if(r?.tagName.toLowerCase()==="awc-tab"){let s=this.tabs.indexOf(r);t.key==="Home"?s=0:t.key==="End"?s=this.tabs.length-1:["top","bottom"].includes(this.placement)&&t.key===(a?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&t.key==="ArrowUp"?s--:(["top","bottom"].includes(this.placement)&&t.key===(a?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&t.key==="ArrowDown")&&s++,s<0&&(s=this.tabs.length-1),s>this.tabs.length-1&&(s=0),this.tabs[s].focus({preventScroll:!0}),this.activation==="auto"&&this.setActiveTab(this.tabs[s],{scrollBehavior:"smooth"}),["top","bottom"].includes(this.placement)&&ws(this.tabs[s],this.nav,"horizontal"),t.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(t,e){if(e={emitEvents:!0,scrollBehavior:"auto",...e},t!==this.activeTab&&!t.disabled){let r=this.activeTab;this.activeTab=t,this.tabs.forEach(a=>a.active=a===this.activeTab),this.panels.forEach(a=>a.active=a.name===this.activeTab?.panel),this.syncIndicator(),["top","bottom"].includes(this.placement)&&ws(this.activeTab,this.nav,"horizontal",e.scrollBehavior),e.emitEvents&&(r&&this.emit("awc-tab-hide",{detail:{name:r.panel}}),this.emit("awc-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(t=>{let e=this.panels.find(r=>r.name===t.panel);e&&(t.setAttribute("aria-controls",e.getAttribute("id")),e.setAttribute("aria-labelledby",t.getAttribute("id")))})}repositionIndicator(){let t=this.getActiveTab();if(!t)return;let e=t.clientWidth,r=t.clientHeight,a=this.localize.dir()==="rtl",s=this.getAllTabs(),l=s.slice(0,s.indexOf(t)).reduce((p,d)=>({left:p.left+d.clientWidth,top:p.top+d.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${e}px`,this.indicator.style.height="auto",this.indicator.style.translate=a?`${-1*l.left}px`:`${l.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${r}px`,this.indicator.style.translate=`0 ${l.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs({includeDisabled:!1}),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(t){let e=this.tabs.find(r=>r.panel===t);e&&this.setActiveTab(e,{scrollBehavior:"smooth"})}render(){let t=this.localize.dir()==="rtl";return E`
      <div
        part="base"
        class=${Z({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?E`
                <awc-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--start"
                  name=${t?"chevron-right":"chevron-left"}
                  library="system"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></awc-icon-button>
              `:""}

          <div class="tab-group__nav">
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
            </div>
          </div>

          ${this.hasScrollControls?E`
                <awc-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--end"
                  name=${t?"chevron-left":"chevron-right"}
                  library="system"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></awc-icon-button>
              `:""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};yd.styles=jb,yd.dependencies={"awc-icon-button":Ut};var So=yd;bi([F(".tab-group")],So.prototype,"tabGroup",2);bi([F(".tab-group__body")],So.prototype,"body",2);bi([F(".tab-group__nav")],So.prototype,"nav",2);bi([F(".tab-group__indicator")],So.prototype,"indicator",2);bi([X()],So.prototype,"hasScrollControls",2);bi([u()],So.prototype,"placement",2);bi([u()],So.prototype,"activation",2);bi([u({attribute:"no-scroll-controls",type:Boolean})],So.prototype,"noScrollControls",2);bi([M("noScrollControls",{waitUntilFirstUpdate:!0})],So.prototype,"updateScrollControls",1);bi([M("placement",{waitUntilFirstUpdate:!0})],So.prototype,"syncIndicator",1);So.define("awc-tab-group");var Ub=A`
  ${N}

  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`;var jk=Object.defineProperty,Uk=Object.getOwnPropertyDescriptor,wd=(i,t,e,r)=>{for(var a=r>1?void 0:r?Uk(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&jk(t,e,a),a},Vk=0,Vb=class extends R{constructor(){super(...arguments),this.attrId=++Vk,this.componentId=`awc-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return E`
      <slot
        part="base"
        class=${Z({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};Vb.styles=Ub;var La=Vb;wd([u({reflect:!0})],La.prototype,"name",2);wd([u({type:Boolean,reflect:!0})],La.prototype,"active",2);wd([M("active")],La.prototype,"handleActiveChange",1);La.define("awc-tab-panel");Vi.define("awc-tag");var Hb=A`
  ${N}
  ${di}

  :host {
    display: block;
  }

  .textarea {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--awc-input-font-family);
    font-weight: var(--awc-input-font-weight);
    line-height: var(--awc-line-height-normal);
    letter-spacing: var(--awc-input-letter-spacing);
    vertical-align: middle;
    transition:
      var(--awc-transition-fast) color,
      var(--awc-transition-fast) border,
      var(--awc-transition-fast) box-shadow,
      var(--awc-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--awc-input-background-color);
    border: solid var(--awc-input-border-width) var(--awc-input-border-color-base);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--awc-input-background-color-hover);
    border-color: var(--awc-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--awc-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--awc-input-background-color-focus);
    border-color: var(--awc-input-border-color-focus);
    color: var(--awc-input-color-focus);
    box-shadow: 0 0 0 var(--awc-focus-ring-width) var(--awc-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--awc-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--awc-input-background-color-disabled);
    border-color: var(--awc-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--awc-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--awc-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--awc-input-filled-background-color);
    color: var(--awc-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--awc-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--awc-input-filled-background-color-focus);
    outline: var(--awc-focus-ring);
    outline-offset: var(--awc-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--awc-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--awc-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--awc-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--awc-input-border-radius-small);
    font-size: var(--awc-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--awc-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--awc-input-border-radius-medium);
    font-size: var(--awc-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--awc-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--awc-input-border-radius-large);
    font-size: var(--awc-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--awc-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`;var Hk=Object.defineProperty,Zk=Object.getOwnPropertyDescriptor,Ft=(i,t,e,r)=>{for(var a=r>1?void 0:r?Zk(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&Hk(t,e,a),a},Zb=class extends R{constructor(){super(...arguments),this.formControlController=new oe(this,{assumeInteractionOn:["awc-blur","awc-input"]}),this.hasSlotController=new Ct(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}handleBlur(){this.hasFocus=!1,this.emit("awc-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("awc-change")}handleFocus(){this.hasFocus=!0,this.emit("awc-focus")}handleInput(){this.value=this.input.value,this.emit("awc-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}setTextareaHeight(){this.resize==="auto"?(this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=void 0}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(t){if(t){typeof t.top=="number"&&(this.input.scrollTop=t.top),typeof t.left=="number"&&(this.input.scrollLeft=t.left);return}return{top:this.input.scrollTop,left:this.input.scrollLeft}}setSelectionRange(t,e,r="none"){this.input.setSelectionRange(t,e,r)}setRangeText(t,e,r,a){this.input.setRangeText(t,e,r,a),this.value!==this.input.value&&(this.value=this.input.value),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){let t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),r=this.label?!0:!!t,a=this.helpText?!0:!!e;return E`
      <div
        part="form-control"
        class=${Z({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":r,"form-control--has-help-text":a})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${Z({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${H(this.name)}
              .value=${ko(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${H(this.placeholder)}
              rows=${H(this.rows)}
              minlength=${H(this.minlength)}
              maxlength=${H(this.maxlength)}
              autocapitalize=${H(this.autocapitalize)}
              autocorrect=${H(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${H(this.spellcheck)}
              enterkeyhint=${H(this.enterkeyhint)}
              inputmode=${H(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${a?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Zb.styles=Hb;var Mt=Zb;Ft([F(".textarea__control")],Mt.prototype,"input",2);Ft([X()],Mt.prototype,"hasFocus",2);Ft([u()],Mt.prototype,"title",2);Ft([u()],Mt.prototype,"name",2);Ft([u()],Mt.prototype,"value",2);Ft([u({reflect:!0})],Mt.prototype,"size",2);Ft([u({type:Boolean,reflect:!0})],Mt.prototype,"filled",2);Ft([u()],Mt.prototype,"label",2);Ft([u({attribute:"help-text"})],Mt.prototype,"helpText",2);Ft([u()],Mt.prototype,"placeholder",2);Ft([u({type:Number})],Mt.prototype,"rows",2);Ft([u()],Mt.prototype,"resize",2);Ft([u({type:Boolean,reflect:!0})],Mt.prototype,"disabled",2);Ft([u({type:Boolean,reflect:!0})],Mt.prototype,"readonly",2);Ft([u({reflect:!0})],Mt.prototype,"form",2);Ft([u({type:Boolean,reflect:!0})],Mt.prototype,"required",2);Ft([u({type:Number})],Mt.prototype,"minlength",2);Ft([u({type:Number})],Mt.prototype,"maxlength",2);Ft([u()],Mt.prototype,"autocapitalize",2);Ft([u()],Mt.prototype,"autocorrect",2);Ft([u()],Mt.prototype,"autocomplete",2);Ft([u({type:Boolean})],Mt.prototype,"autofocus",2);Ft([u()],Mt.prototype,"enterkeyhint",2);Ft([u({type:Boolean,converter:{fromAttribute:i=>!(!i||i==="false"),toAttribute:i=>i?"true":"false"}})],Mt.prototype,"spellcheck",2);Ft([u()],Mt.prototype,"inputmode",2);Ft([lo()],Mt.prototype,"defaultValue",2);Ft([M("disabled",{waitUntilFirstUpdate:!0})],Mt.prototype,"handleDisabledChange",1);Ft([M("rows",{waitUntilFirstUpdate:!0})],Mt.prototype,"handleRowsChange",1);Ft([M("value",{waitUntilFirstUpdate:!0})],Mt.prototype,"handleValueChange",1);Mt.define("awc-textarea");we.define("awc-tooltip");function _d(i,t,e){return i?t(i):e?.(i)}var Wb=A`
  ${N}

  :host {
    display: block;
    outline: 0;
    z-index: 0;
  }

  :host(:focus) {
    outline: none;
  }

  slot:not([name])::slotted(awc-icon) {
    margin-inline-end: var(--awc-spacing-x-small);
  }

  .tree-item {
    position: relative;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    color: var(--awc-color-neutral-700);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
  }

  .tree-item__checkbox {
    pointer-events: none;
  }

  .tree-item__expand-button,
  .tree-item__checkbox,
  .tree-item__label {
    font-family: var(--awc-font-sans);
    font-size: var(--awc-font-size-medium);
    font-weight: var(--awc-font-weight-normal);
    line-height: var(--awc-line-height-normal);
    letter-spacing: var(--awc-letter-spacing-normal);
  }

  .tree-item__checkbox::part(base) {
    display: flex;
    align-items: center;
  }

  .tree-item__indentation {
    display: block;
    width: 1em;
    flex-shrink: 0;
  }

  .tree-item__expand-button {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
    color: var(--awc-color-neutral-500);
    padding: var(--awc-spacing-x-small);
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    cursor: pointer;
  }

  .tree-item__expand-button {
    transition: var(--awc-transition-medium) rotate ease;
  }

  .tree-item--expanded .tree-item__expand-button {
    rotate: 90deg;
  }

  .tree-item--expanded.tree-item--rtl .tree-item__expand-button {
    rotate: -90deg;
  }

  .tree-item--expanded slot[name='expand-icon'],
  .tree-item:not(.tree-item--expanded) slot[name='collapse-icon'] {
    display: none;
  }

  .tree-item:not(.tree-item--has-expand-button) .tree-item__expand-icon-slot {
    display: none;
  }

  .tree-item__expand-button--visible {
    cursor: pointer;
  }

  .tree-item__item {
    display: flex;
    align-items: center;
    border-inline-start: solid 3px transparent;
  }

  .tree-item--disabled .tree-item__item {
    opacity: 0.5;
    outline: none;
    cursor: not-allowed;
  }

  :host(:focus-visible) .tree-item__item {
    outline: var(--awc-focus-ring);
    outline-offset: var(--awc-focus-ring-offset);
    z-index: 2;
  }

  :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
    background-color: var(--awc-color-neutral-100);
    border-inline-start-color: var(--awc-color-primary-600);
  }

  :host(:not([aria-disabled='true'])) .tree-item__expand-button {
    color: var(--awc-color-neutral-600);
  }

  .tree-item__label {
    display: flex;
    align-items: center;
    transition: var(--awc-transition-fast) color;
  }

  .tree-item__children {
    display: block;
    font-size: calc(1em + var(--indent-size, var(--awc-spacing-medium)));
  }

  /* Indentation lines */
  .tree-item__children {
    position: relative;
  }

  .tree-item__children::before {
    content: '';
    position: absolute;
    top: var(--indent-guide-offset);
    bottom: var(--indent-guide-offset);
    left: calc(1em - (var(--indent-guide-width) / 2) - 1px);
    border-inline-end: var(--indent-guide-width) var(--indent-guide-style) var(--indent-guide-color);
    z-index: 1;
  }

  .tree-item--rtl .tree-item__children::before {
    left: auto;
    right: 1em;
  }

  @media (forced-colors: active) {
    :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
      outline: dashed 1px SelectedItem;
    }
  }
`;var Wk=Object.defineProperty,qk=Object.getOwnPropertyDescriptor,_e=(i,t,e,r)=>{for(var a=r>1?void 0:r?qk(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&Wk(t,e,a),a},za,ue=(za=class extends R{constructor(){super(...arguments),this.localize=new et(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(i){return i instanceof Element&&i.getAttribute("role")==="treeitem"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&this.getChildrenItems().length===0,this.handleExpandedChange()}async animateCollapse(){this.emit("awc-collapse"),await At(this.childrenContainer);let{keyframes:i,options:t}=yt(this,"tree-item.collapse",{dir:this.localize.dir()});await Tt(this.childrenContainer,ea(i,this.childrenContainer.scrollHeight),t),this.childrenContainer.hidden=!0,this.emit("awc-after-collapse")}isNestedItem(){let i=this.parentElement;return!!i&&za.isTreeItem(i)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0}willUpdate(i){i.has("selected")&&!i.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.emit("awc-expand"),await At(this.childrenContainer),this.childrenContainer.hidden=!1;let{keyframes:i,options:t}=yt(this,"tree-item.expand",{dir:this.localize.dir()});await Tt(this.childrenContainer,ea(i,this.childrenContainer.scrollHeight),t),this.childrenContainer.style.height="auto",this.emit("awc-after-expand")}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.emit("awc-lazy-load")):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.emit("awc-lazy-change")}getChildrenItems({includeDisabled:i=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(t=>za.isTreeItem(t)&&(i||!t.disabled)):[]}render(){let i=this.localize.dir()==="rtl",t=!this.loading&&(!this.isLeaf||this.lazy);return E`
      <div
        part="base"
        class="${Z({"tree-item":!0,"tree-item--expanded":this.expanded,"tree-item--selected":this.selected,"tree-item--disabled":this.disabled,"tree-item--leaf":this.isLeaf,"tree-item--has-expand-button":t,"tree-item--rtl":this.localize.dir()==="rtl"})}"
      >
        <div
          class="tree-item__item"
          part="
            item
            ${this.disabled?"item--disabled":""}
            ${this.expanded?"item--expanded":""}
            ${this.indeterminate?"item--indeterminate":""}
            ${this.selected?"item--selected":""}
          "
        >
          <div class="tree-item__indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${Z({"tree-item__expand-button":!0,"tree-item__expand-button--visible":t})}
            aria-hidden="true"
          >
            ${_d(this.loading,()=>E` <awc-spinner></awc-spinner> `)}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <awc-icon library="system" name=${i?"chevron-left":"chevron-right"}></awc-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <awc-icon library="system" name=${i?"chevron-left":"chevron-right"}></awc-icon>
            </slot>
          </div>

          ${_d(this.selectable,()=>E`
              <awc-checkbox
                part="checkbox"
                exportparts="
                    base:checkbox__base,
                    control:checkbox__control,
                    control--checked:checkbox__control--checked,
                    control--indeterminate:checkbox__control--indeterminate,
                    checked-icon:checkbox__checked-icon,
                    indeterminate-icon:checkbox__indeterminate-icon,
                    label:checkbox__label
                  "
                class="tree-item__checkbox"
                ?disabled="${this.disabled}"
                ?checked="${ko(this.selected)}"
                ?indeterminate="${this.indeterminate}"
                tabindex="-1"
              ></awc-checkbox>
            `)}

          <slot class="tree-item__label" part="label"></slot>
        </div>

        <div class="tree-item__children" part="children" role="group">
          <slot name="children" @slotchange="${this.handleChildrenSlotChange}"></slot>
        </div>
      </div>
    `}},za.styles=Wb,za.dependencies={"awc-checkbox":ve,"awc-icon":nt,"awc-spinner":Cr},za);_e([X()],ue.prototype,"indeterminate",2);_e([X()],ue.prototype,"isLeaf",2);_e([X()],ue.prototype,"loading",2);_e([X()],ue.prototype,"selectable",2);_e([u({type:Boolean,reflect:!0})],ue.prototype,"expanded",2);_e([u({type:Boolean,reflect:!0})],ue.prototype,"selected",2);_e([u({type:Boolean,reflect:!0})],ue.prototype,"disabled",2);_e([u({type:Boolean,reflect:!0})],ue.prototype,"lazy",2);_e([F("slot:not([name])")],ue.prototype,"defaultSlot",2);_e([F("slot[name=children]")],ue.prototype,"childrenSlot",2);_e([F(".tree-item__item")],ue.prototype,"itemElement",2);_e([F(".tree-item__children")],ue.prototype,"childrenContainer",2);_e([F(".tree-item__expand-button slot")],ue.prototype,"expandButtonSlot",2);_e([M("loading",{waitUntilFirstUpdate:!0})],ue.prototype,"handleLoadingChange",1);_e([M("disabled")],ue.prototype,"handleDisabledChange",1);_e([M("selected")],ue.prototype,"handleSelectedChange",1);_e([M("expanded",{waitUntilFirstUpdate:!0})],ue.prototype,"handleExpandedChange",1);_e([M("expanded",{waitUntilFirstUpdate:!0})],ue.prototype,"handleExpandAnimation",1);_e([M("lazy",{waitUntilFirstUpdate:!0})],ue.prototype,"handleLazyChange",1);var sr=ue;ht("tree-item.expand",{keyframes:[{height:"0",opacity:"0",overflow:"hidden"},{height:"auto",opacity:"1",overflow:"hidden"}],options:{duration:250,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});ht("tree-item.collapse",{keyframes:[{height:"auto",opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],options:{duration:200,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});var qb=A`
  ${N}

  :host {
    /*
     * These are actually used by tree item, but we define them here so they can more easily be set and all tree items
     * stay consistent.
     */
    --indent-guide-color: var(--awc-color-neutral-200);
    --indent-guide-offset: 0;
    --indent-guide-style: solid;
    --indent-guide-width: 0;
    --indent-size: var(--awc-spacing-large);

    display: block;
    isolation: isolate;

    /*
     * Tree item indentation uses the "em" unit to increment its width on each level, so setting the font size to zero
     * here removes the indentation for all the nodes on the first level.
     */
    font-size: 0;
  }
`;var Gk=Object.defineProperty,Yk=Object.getOwnPropertyDescriptor,Ss=(i,t,e,r)=>{for(var a=r>1?void 0:r?Yk(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&Gk(t,e,a),a};function Gb(i,t=!1){function e(s){let l=s.getChildrenItems({includeDisabled:!1});if(l.length){let p=l.every(h=>h.selected),d=l.every(h=>!h.selected&&!h.indeterminate);s.selected=p,s.indeterminate=!p&&!d}}function r(s){let l=s.parentElement;sr.isTreeItem(l)&&(e(l),r(l))}function a(s){for(let l of s.getChildrenItems())l.selected=t?s.selected||l.selected:!l.disabled&&s.selected,a(l);t&&e(s)}a(i),r(i)}var Yb=class extends R{constructor(){super(),this.selection="single",this.localize=new et(this),this.clickTarget=null,this.initTreeItem=t=>{t.selectable=this.selection==="multiple",["expand","collapse"].filter(e=>!!this.querySelector(`[slot="${e}-icon"]`)).forEach(e=>{let r=t.querySelector(`[slot="${e}-icon"]`);r===null?t.append(this.getExpandButtonIcon(e)):r.hasAttribute("data-default")&&r.replaceWith(this.getExpandButtonIcon(e))})},this.handleTreeChanged=t=>{for(let e of t){let r=[...e.addedNodes].filter(sr.isTreeItem),a=[...e.removedNodes].filter(sr.isTreeItem);r.forEach(this.initTreeItem),this.lastFocusedItem&&a.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=t=>{let e=t.relatedTarget;(!e||!this.contains(e))&&(this.tabIndex=0)},this.handleFocusIn=t=>{let e=t.target;t.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),sr.isTreeItem(e)&&!e.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=e,this.tabIndex=-1,e.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("awc-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver.disconnect()}getExpandButtonIcon(t){let e=(t==="expand"?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(e){let r=e.cloneNode(!0);return[r,...r.querySelectorAll("[id]")].forEach(a=>a.removeAttribute("id")),r.setAttribute("data-default",""),r.slot=`${t}-icon`,r}return null}selectItem(t){let e=[...this.selectedItems];if(this.selection==="multiple")t.selected=!t.selected,t.lazy&&(t.expanded=!0),Gb(t);else if(this.selection==="single"||t.isLeaf){let a=this.getAllTreeItems();for(let s of a)s.selected=s===t}else this.selection==="leaf"&&(t.expanded=!t.expanded);let r=this.selectedItems;(e.length!==r.length||r.some(a=>!e.includes(a)))&&Promise.all(r.map(a=>a.updateComplete)).then(()=>{this.emit("awc-selection-change",{detail:{selection:r}})})}getAllTreeItems(){return[...this.querySelectorAll("awc-tree-item")]}focusItem(t){t?.focus()}handleKeyDown(t){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(t.key)||t.composedPath().some(s=>["input","textarea"].includes(s?.tagName?.toLowerCase())))return;let e=this.getFocusableItems(),r=this.localize.dir()==="ltr",a=this.localize.dir()==="rtl";if(e.length>0){t.preventDefault();let s=e.findIndex(h=>h.matches(":focus")),l=e[s],p=h=>{let f=e[te(h,0,e.length-1)];this.focusItem(f)},d=h=>{l.expanded=h};t.key==="ArrowDown"?p(s+1):t.key==="ArrowUp"?p(s-1):r&&t.key==="ArrowRight"||a&&t.key==="ArrowLeft"?!l||l.disabled||l.expanded||l.isLeaf&&!l.lazy?p(s+1):d(!0):r&&t.key==="ArrowLeft"||a&&t.key==="ArrowRight"?!l||l.disabled||l.isLeaf||!l.expanded?p(s-1):d(!1):t.key==="Home"?p(0):t.key==="End"?p(e.length-1):(t.key==="Enter"||t.key===" ")&&(l.disabled||this.selectItem(l))}}handleClick(t){let e=t.target,r=e.closest("awc-tree-item"),a=t.composedPath().some(s=>s?.classList?.contains("tree-item__expand-button"));!r||r.disabled||e!==this.clickTarget||(a?r.expanded=!r.expanded:this.selectItem(r))}handleMouseDown(t){this.clickTarget=t.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){let t=this.selection==="multiple",e=this.getAllTreeItems();this.setAttribute("aria-multiselectable",t?"true":"false");for(let r of e)r.selectable=t;t&&(await this.updateComplete,[...this.querySelectorAll(":scope > awc-tree-item")].forEach(r=>Gb(r,!0)))}get selectedItems(){let t=this.getAllTreeItems(),e=r=>r.selected;return t.filter(e)}getFocusableItems(){let t=this.getAllTreeItems(),e=new Set;return t.filter(r=>{if(r.disabled)return!1;let a=r.parentElement?.closest("[role=treeitem]");return a&&(!a.expanded||a.loading||e.has(a))&&e.add(r),!e.has(r)})}render(){return E`
      <div
        part="base"
        class="tree"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
        <span hidden aria-hidden="true"><slot name="expand-icon"></slot></span>
        <span hidden aria-hidden="true"><slot name="collapse-icon"></slot></span>
      </div>
    `}};Yb.styles=qb;var nr=Yb;Ss([F("slot:not([name])")],nr.prototype,"defaultSlot",2);Ss([F("slot[name=expand-icon]")],nr.prototype,"expandedIconSlot",2);Ss([F("slot[name=collapse-icon]")],nr.prototype,"collapsedIconSlot",2);Ss([u()],nr.prototype,"selection",2);Ss([M("selection")],nr.prototype,"handleSelectionChange",1);nr.define("awc-tree");sr.define("awc-tree-item");fs.define("awc-visually-hidden");Vt.define("awc-image");var tl=(i="")=>{try{let t=new URL(i);return t!==null&&t.protocol.startsWith("http")}catch{return!1}},Ts=i=>new URL(i).host.replace("www.","");var xd=fetch;var Kk=async(i,t={})=>{let{proxy:e={},signal:r=null}=t,{target:a,headers:s={}}=e;return await xd(a+encodeURIComponent(i),{headers:s,signal:r})},Kb=async(i,t={})=>{let{headers:e={"user-agent":"Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/115.0"},proxy:r=null,agent:a=null,signal:s=null}=t,l=r?await Kk(i,{proxy:r,signal:s}):await xd(i,{headers:e,agent:a,signal:s}),p=l.status;if(p>=400)throw new Error(`Request failed with error code ${p}`);try{let d=await l.text();return JSON.parse(d.trim())}catch{throw new Error("Failed to convert data to JSON object")}};var Xk=i=>Ts(i)==="graph.facebook.com",Jk=()=>{let i=process.env||{},t=i.FACEBOOK_APP_ID,e=i.FACEBOOK_CLIENT_TOKEN;return`${t}|${e}`},Xb=async(i,t={},e="",r={})=>{let a={url:i,format:"json",...t};a.maxwidth<=0&&delete a.maxwidth,a.maxheight<=0&&delete a.maxheight,Xk(e)&&(a.access_token=Jk());let s=new URLSearchParams(a).toString(),l=e+"?"+s;return Kb(l,r)};var Jb=[{s:["www\\.23hq\\.com/*/photo/*"],e:"www.23hq.com/23/oembed"},{s:["store\\.abraia\\.me/*"],e:"api.abraia.me/oembed"},{s:["play\\.acast\\.com/s/*"],e:"oembed.acast.com/v1/embed-player"},{s:["secure\\.actblue\\.com/donate/*"],e:"secure.actblue.com/cf/oembed"},{s:["adilo\\.bigcommand\\.com/watch/*"],e:"adilo.bigcommand.com/web/oembed"},{s:["vod\\.afreecatv\\.com/player/","v\\.afree\\.ca/ST/","vod\\.afreecatv\\.com/ST/","vod\\.afreecatv\\.com/PLAYER/STATION/","play\\.afreecatv\\.com/"],e:"openapi.afreecatv.com/oembed/embedinfo"},{s:["altium\\.com/viewer/*"],e:"viewer.altium.com/shell/oembed"},{s:["app\\.altrulabs\\.com/*/*?answer_id=*","app\\.altrulabs\\.com/player/*"],e:"api.altrulabs.com/api/v1/social/oembed"},{s:["live\\.amcharts\\.com/*"],e:"live.amcharts.com/oembed"},{s:["amtraker\\.com/trains/*","beta\\.amtraker\\.com/trains/*"],e:"api.amtraker.com/v2/oembed"},{s:["www\\.animatron\\.com/project/*","animatron\\.com/project/*"],e:"animatron.com/oembed/json"},{s:["animoto\\.com/play/*"],e:"animoto.com/oembeds/create"},{s:["anniemusic\\.app/t/*","anniemusic\\.app/p/*"],e:"api.anniemusic.app/api/v1/oembed"},{s:["storymaps\\.arcgis\\.com/stories/*"],e:"storymaps.arcgis.com/oembed"},{s:["app\\.archivos\\.digital/app/view/*"],e:"app.archivos.digital/oembed/"},{s:["studio\\.assemblrworld\\.com/*","assemblr\\.world/*","app-edu\\.assemblrworld\\.com/*","staging\\.d1o2otincy91d\\.amplifyapp\\.com/*","editor\\.assemblrworld\\.com/*"],e:"studio.assemblrworld.com/api/oembed"},{s:["audio\\.com/*","www\\.audio\\.com/*"],e:"api.audio.com/oembed"},{s:["audioboom\\.com/channels/*","audioboom\\.com/channel/*","audioboom\\.com/playlists/*","audioboom\\.com/podcasts/*","audioboom\\.com/podcast/*","audioboom\\.com/posts/*","audioboom\\.com/episodes/*"],e:"audioboom.com/publishing/oembed.json"},{s:["audioclip\\.naver\\.com/channels/*/clips/*","audioclip\\.naver\\.com/audiobooks/*"],e:"audioclip.naver.com/oembed"},{s:["audiomack\\.com/*/song/*","audiomack\\.com/*/album/*","audiomack\\.com/*/playlist/*"],e:"audiomack.com/oembed"},{s:["podcasts\\.audiomeans\\.fr/*"],e:"podcasts.audiomeans.fr/services/oembed"},{s:["app\\.avocode\\.com/view/*"],e:"stage-embed.avocode.com/api/oembed"},{s:["backtracks\\.fm/*/*/e/*","backtracks\\.fm/*/s/*/*","backtracks\\.fm/*/*/*/*/e/*/*","backtracks\\.fm/*"],e:"backtracks.fm/oembed"},{s:["beams\\.fm/*"],e:"api.beams.fm/oEmbed"},{s:[],e:"www.beautiful.ai/api/oembed"},{s:["blackfire\\.io/profiles/*/graph","blackfire\\.io/profiles/compare/*/graph"],e:"blackfire.io/oembed"},{s:["blogcast\\.host/embed/*","blogcast\\.host/embedly/*"],e:"blogcast.host/oembed"},{s:["www\\.bookingmood\\.com/embed/*/*"],e:"bookingmood.com/api/oembed"},{s:[],e:"boxofficebuz.com/oembed"},{s:["view\\.briovr\\.com/api/v1/worlds/oembed/*"],e:"view.briovr.com/api/v1/worlds/oembed/"},{s:["www\\.bumper\\.com/oembed/bumper","www\\.bumper\\.com/oembed-s/bumper"],e:"www.bumper.com/oembed/bumper"},{s:["buttondown\\.email/*"],e:"buttondown.email/embed"},{s:["cmc\\.byzart\\.eu/files/*"],e:"cmc.byzart.eu/oembed/"},{s:["cacoo\\.com/diagrams/*"],e:"cacoo.com/oembed.json"},{s:["www\\.canva\\.com/design/*/view"],e:"www.canva.com/_oembed"},{s:["minesweeper\\.today/*"],e:"minesweeper.today/api/oembed"},{s:["img\\.catbo\\.at/*"],e:"img.catbo.at/oembed.json"},{s:["view\\.ceros\\.com/*"],e:"view.ceros.com/oembed"},{s:["chainflix\\.net/video/*","chainflix\\.net/video/embed/*","*\\.chainflix\\.net/video/*","*\\.chainflix\\.net/video/embed/*"],e:"www.chainflix.net/video/oembed"},{s:["public\\.chartblocks\\.com/c/*"],e:"embed.chartblocks.com/1.0/oembed"},{s:["chirb\\.it/*"],e:"chirb.it/oembed.json"},{s:["chroco\\.ooo/mypage/*","chroco\\.ooo/story/*"],e:"chroco.ooo/embed"},{s:["www\\.circuitlab\\.com/circuit/*"],e:"www.circuitlab.com/circuit/oembed/"},{s:["www\\.clipland\\.com/v/*"],e:"www.clipland.com/api/oembed"},{s:["clyp\\.it/*","clyp\\.it/playlist/*"],e:"api.clyp.it/oembed/"},{s:["app\\.ilovecoco\\.video/*/embed"],e:"app.ilovecoco.video/api/oembed.json"},{s:["codehs\\.com/editor/share_abacus/*"],e:"codehs.com/api/sharedprogram/1/oembed/"},{s:["codepen\\.io/*"],e:"codepen.io/api/oembed"},{s:["codepoints\\.net/*","www\\.codepoints\\.net/*"],e:"codepoints.net/api/v1/oembed"},{s:["codesandbox\\.io/s/*","codesandbox\\.io/embed/*"],e:"codesandbox.io/oembed"},{s:["www\\.collegehumor\\.com/video/*"],e:"www.collegehumor.com/oembed.json"},{s:["commaful\\.com/play/*"],e:"commaful.com/api/oembed/"},{s:["coub\\.com/view/*","coub\\.com/embed/*"],e:"coub.com/api/oembed.json"},{s:["crowdranking\\.com/*/*"],e:"crowdranking.com/api/oembed.json"},{s:["crumb\\.sh/*"],e:"crumb.sh/oembed/"},{s:["cueup\\.io/user/*/sounds/*"],e:"gql.cueup.io/oembed"},{s:["*\\.curated\\.co/*"],e:"api.curated.co/oembed"},{s:["app\\.customerdb\\.com/share/*"],e:"app.customerdb.com/embed"},{s:["app\\.dadan\\.io/*","stage\\.dadan\\.io/*"],e:"app.dadan.io/api/video/oembed"},{s:["www\\.dailymotion\\.com/video/*"],e:"www.dailymotion.com/services/oembed"},{s:["dalexni\\.com/i/*"],e:"dalexni.com/oembed/"},{s:["datawrapper\\.dwcdn\\.net/*"],e:"api.datawrapper.de/v3/oembed/"},{s:["*\\.deseret\\.com/*"],e:"embed.deseret.com/"},{s:["*\\.deviantart\\.com/art/*","*\\.deviantart\\.com/*#/d*","fav\\.me/*","sta\\.sh/*","*\\.deviantart\\.com/*/art/*"],e:"backend.deviantart.com/oembed"},{s:["www\\.ultimedia\\.com/central/video/edit/id/*/topic_id/*/","www\\.ultimedia\\.com/default/index/videogeneric/id/*/showtitle/1/viewnc/1","www\\.ultimedia\\.com/default/index/videogeneric/id/*"],e:"www.ultimedia.com/api/search/oembed"},{s:["*\\.docdroid\\.net/*","docdro\\.id/*","*\\.docdroid\\.com/*"],e:"www.docdroid.net/api/oembed"},{s:["docswell\\.com/s/*/*","www\\.docswell\\.com/s/*/*"],e:"www.docswell.com/service/oembed"},{s:["dotsub\\.com/view/*"],e:"dotsub.com/services/oembed"},{s:["www\\.dreambroker\\.com/channel/*/*"],e:"dreambroker.com/channel/oembed"},{s:["d\\.tube/v/*"],e:"api.d.tube/oembed"},{s:[],e:"www.edumedia-sciences.com/oembed.json"},{s:[],e:"www.edumedia-sciences.com/oembed.xml"},{s:["egliseinfo\\.catholique\\.fr/*"],e:"egliseinfo.catholique.fr/api/oembed"},{s:["embedery\\.com/widget/*"],e:"embedery.com/api/oembed"},{s:["ethfiddle\\.com/*"],e:"ethfiddle.com/services/oembed/"},{s:["evt\\.live/*","evt\\.live/*/*","live\\.eventlive\\.pro/*","live\\.eventlive\\.pro/*/*"],e:"evt.live/api/oembed"},{s:["app\\.everviz\\.com/embed/*"],e:"api.everviz.com/oembed"},{s:["app\\.ex\\.co/stories/*","www\\.playbuzz\\.com/*"],e:"oembed.ex.co/item"},{s:["eyrie\\.io/board/*","eyrie\\.io/sparkfun/*"],e:"eyrie.io/v1/oembed"},{s:["www\\.facebook\\.com/*/posts/*","www\\.facebook\\.com/*/activity/*","www\\.facebook\\.com/*/photos/*","www\\.facebook\\.com/photo\\.php?fbid=*","www\\.facebook\\.com/photos/*","www\\.facebook\\.com/permalink\\.php?story_fbid=*","www\\.facebook\\.com/media/set?set=*","www\\.facebook\\.com/questions/*","www\\.facebook\\.com/notes/*/*/*"],e:"graph.facebook.com/v16.0/oembed_post"},{s:["www\\.facebook\\.com/*/videos/*","www\\.facebook\\.com/video\\.php?id=*","www\\.facebook\\.com/video\\.php?v=*"],e:"graph.facebook.com/v16.0/oembed_video"},{s:["www\\.facebook\\.com/*"],e:"graph.facebook.com/v16.0/oembed_page"},{s:["app\\.getfader\\.com/projects/*/publish"],e:"app.getfader.com/api/oembed"},{s:["faithlifetv\\.com/items/*","faithlifetv\\.com/items/resource/*/*","faithlifetv\\.com/media/*","faithlifetv\\.com/media/assets/*","faithlifetv\\.com/media/resource/*/*"],e:"faithlifetv.com/api/oembed"},{s:["*\\.fireworktv\\.com/*","*\\.fireworktv\\.com/embed/*/v/*"],e:"www.fireworktv.com/oembed"},{s:["www\\.fite\\.tv/watch/*"],e:"www.fite.tv/oembed"},{s:["flat\\.io/score/*","*\\.flat\\.io/score/*"],e:"flat.io/services/oembed"},{s:["*\\.flickr\\.com/photos/*","flic\\.kr/p/*","*\\.*\\.flickr\\.com/*/*"],e:"www.flickr.com/services/oembed/"},{s:["public\\.flourish\\.studio/visualisation/*","public\\.flourish\\.studio/story/*"],e:"app.flourish.studio/api/v1/oembed"},{s:["fiso\\.foxsports\\.com\\.au/isomorphic-widget/*"],e:"fiso.foxsports.com.au/oembed"},{s:["framebuzz\\.com/v/*"],e:"framebuzz.com/oembed/"},{s:["framer\\.com/share/*","framer\\.com/embed/*"],e:"api.framer.com/web/oembed"},{s:["*\\.geograph\\.org\\.uk/*","*\\.geograph\\.co\\.uk/*","*\\.geograph\\.ie/*","*\\.wikimedia\\.org/*_geograph\\.org\\.uk_*"],e:"api.geograph.org.uk/api/oembed"},{s:["*\\.geograph\\.org\\.gg/*","*\\.geograph\\.org\\.je/*","channel-islands\\.geograph\\.org/*","channel-islands\\.geographs\\.org/*","*\\.channel\\.geographs\\.org/*"],e:"www.geograph.org.gg/api/oembed"},{s:["geo-en\\.hlipp\\.de/*","geo\\.hlipp\\.de/*","germany\\.geograph\\.org/*"],e:"geo.hlipp.de/restapi.php/api/oembed"},{s:["gty\\.im/*"],e:"embed.gettyimages.com/oembed"},{s:["gfycat\\.com/*","www\\.gfycat\\.com/*"],e:"api.gfycat.com/v1/oembed"},{s:["www\\.gifnote\\.com/play/*"],e:"www.gifnote.com/services/oembed"},{s:["giphy\\.com/gifs/*","giphy\\.com/clips/*","gph\\.is/*","media\\.giphy\\.com/media/*/giphy\\.gif"],e:"giphy.com/services/oembed"},{s:[],e:"gloria.tv/oembed/"},{s:["view\\.gmetri\\.com/*","*\\.gmetri\\.com/*"],e:"embed.gmetri.com/oembed/"},{s:["app\\.gong\\.io/call?id=*"],e:"app.gong.io/oembed"},{s:["grain\\.co/highlight/*","grain\\.co/share/*","grain\\.com/share/*"],e:"api.grain.com/_/api/oembed"},{s:["gtchannel\\.com/watch/*"],e:"api.luminery.com/oembed"},{s:["www\\.gumlet\\.com/watch/*","play\\.gumlet\\.io/embed/*"],e:"api.gumlet.com/v1/oembed"},{s:["gyazo\\.com/*"],e:"api.gyazo.com/api/oembed"},{s:["core\\.hash\\.ai/@*"],e:"api.hash.ai/oembed"},{s:["hearthis\\.at/*/*/","hearthis\\.at/*/set/*/"],e:"hearthis.at/oembed/?format=json"},{s:["heyzine\\.com/flip-book/*","*\\.hflip\\.co/*","*\\.aflip\\.in/*"],e:"heyzine.com/api1/oembed"},{s:["player\\.hihaho\\.com/*"],e:"player.hihaho.com/services/oembed"},{s:["*\\.hippovideo\\.io/*"],e:"www.hippovideo.io/services/oembed"},{s:["homey\\.app/f/*","homey\\.app/*/flow/*"],e:"homey.app/api/oembed/flow"},{s:["huffduffer\\.com/*/*"],e:"huffduffer.com/oembed"},{s:["www\\.hulu\\.com/watch/*"],e:"www.hulu.com/api/oembed.json"},{s:["*\\.idomoo\\.com/*"],e:"oembed.idomoo.com/oembed"},{s:["www\\.ifixit\\.com/Guide/View/*"],e:"www.ifixit.com/Embed"},{s:["ifttt\\.com/recipes/*"],e:"www.ifttt.com/oembed/"},{s:["www\\.iheart\\.com/podcast/*/*"],e:"www.iheart.com/oembed"},{s:["qr\\.imenupro\\.com/*"],e:"qr.imenupro.com/api/oembed"},{s:["incredible\\.dev/watch/*"],e:"oembed.incredible.dev/oembed"},{s:["player\\.indacolive\\.com/player/jwp/clients/*"],e:"player.indacolive.com/services/oembed"},{s:["infogram\\.com/*"],e:"infogram.com/oembed"},{s:["*\\.infoveave\\.net/E/*","*\\.infoveave\\.net/P/*"],e:"infoveave.net/services/oembed/"},{s:["www\\.injurymap\\.com/exercises/*"],e:"www.injurymap.com/services/oembed"},{s:["www\\.inoreader\\.com/oembed/"],e:"www.inoreader.com/oembed/api/"},{s:["*\\.inphood\\.com/*"],e:"api.inphood.com/oembed"},{s:["instagram\\.com/*/p/*,","www\\.instagram\\.com/*/p/*,","instagram\\.com/p/*","instagr\\.am/p/*","www\\.instagram\\.com/p/*","www\\.instagr\\.am/p/*","instagram\\.com/tv/*","instagr\\.am/tv/*","www\\.instagram\\.com/tv/*","www\\.instagr\\.am/tv/*","www\\.instagram\\.com/reel/*","instagram\\.com/reel/*","instagr\\.am/reel/*"],e:"graph.facebook.com/v16.0/instagram_oembed"},{s:["ppa\\.insticator\\.com/embed-unit/*"],e:"www.insticator.com/oembed"},{s:["issuu\\.com/*/docs/*"],e:"issuu.com/oembed"},{s:["play\\.itemis\\.io/*"],e:"create.storage.api.itemis.io/api/embed"},{s:["jovian\\.ml/*","jovian\\.ml/viewer*","*\\.jovian\\.ml/*","jovian\\.ai/*","jovian\\.ai/viewer*","*\\.jovian\\.ai/*","jovian\\.com/*","jovian\\.com/viewer*","*\\.jovian\\.com/*"],e:"api.jovian.com/oembed.json"},{s:["tv\\.kakao\\.com/channel/*/cliplink/*","tv\\.kakao\\.com/m/channel/*/cliplink/*","tv\\.kakao\\.com/channel/v/*","tv\\.kakao\\.com/channel/*/livelink/*","tv\\.kakao\\.com/m/channel/*/livelink/*","tv\\.kakao\\.com/channel/l/*"],e:"tv.kakao.com/oembed"},{s:["www\\.kickstarter\\.com/projects/*"],e:"www.kickstarter.com/services/oembed"},{s:["www\\.kidoju\\.com/en/x/*/*","www\\.kidoju\\.com/fr/x/*/*"],e:"www.kidoju.com/api/oembed"},{s:["halaman\\.email/form/*","aplikasi\\.kirim\\.email/form/*"],e:"halaman.email/service/oembed"},{s:["kit\\.co/*/*"],e:"embed.kit.co/oembed"},{s:["www\\.kitchenbowl\\.com/recipe/*"],e:"www.kitchenbowl.com/oembed"},{s:["app\\.kmdr\\.sh/h/*","app\\.kmdr\\.sh/history/*"],e:"api.kmdr.sh/services/oembed"},{s:["jdr\\.knacki\\.info/meuh/*"],e:"jdr.knacki.info/oembed"},{s:["knowledgepad\\.co/#/knowledge/*"],e:"api.spoonacular.com/knowledge/oembed"},{s:["*\\.kooapp\\.com/koo/*"],e:"embed.kooapp.com/services/oembed"},{s:["kurozora\\.app/episodes*","kurozora\\.app/songs*"],e:"kurozora.app/oembed"},{s:["learningapps\\.org/*"],e:"learningapps.org/oembed.php"},{s:["umotion-test\\.univ-lemans\\.fr/video/*"],e:"umotion-test.univ-lemans.fr/oembed"},{s:["pod\\.univ-lille\\.fr/video/*"],e:"pod.univ-lille.fr/video/oembed"},{s:["place\\.line\\.me/businesses/*"],e:"place.line.me/oembed"},{s:["livestream\\.com/accounts/*/events/*","livestream\\.com/accounts/*/events/*/videos/*","livestream\\.com/*/events/*","livestream\\.com/*/events/*/videos/*","livestream\\.com/*/*","livestream\\.com/*/*/videos/*"],e:"livestream.com/oembed"},{s:["lottiefiles\\.com/*","*\\.lottiefiles\\.com/*"],e:"embed.lottiefiles.com/oembed"},{s:["app\\.ludus\\.one/*"],e:"app.ludus.one/oembed"},{s:["*\\.lumiere\\.is/v/*"],e:"admin.lumiere.is/api/services/oembed"},{s:["mathembed\\.com/latex?inputText=*"],e:"mathembed.com/oembed"},{s:[],e:"my.matterport.com/api/v1/models/oembed/"},{s:["me\\.me/i/*"],e:"me.me/oembed"},{s:["mdstrm\\.com/embed/*","mdstrm\\.com/live-stream/*","mdstrm\\.com/image/*"],e:"mdstrm.com/oembed"},{s:["medienarchiv\\.zhdk\\.ch/entries/*"],e:"medienarchiv.zhdk.ch/oembed.json"},{s:["mermaid\\.ink/img/*","mermaid\\.ink/svg/*"],e:"mermaid.ink/services/oembed"},{s:["*\\.microsoftstream\\.com/video/*","*\\.microsoftstream\\.com/channel/*"],e:"web.microsoftstream.com/oembed"},{s:["www\\.minervaknows\\.com/featured-recipes/*","www\\.minervaknows\\.com/themes/*","www\\.minervaknows\\.com/themes/*/recipes/*","app\\.minervaknows\\.com/recipes/*","app\\.minervaknows\\.com/recipes/*/follow"],e:"oembed.minervaknows.com"},{s:["miro\\.com/app/board/*"],e:"miro.com/api/v1/oembed"},{s:["www\\.mixcloud\\.com/*/*/"],e:"www.mixcloud.com/oembed/"},{s:["mixpanel\\.com/*"],e:"mixpanel.com/api/app/embed/oembed/"},{s:["www\\.mobypicture\\.com/user/*/view/*","moby\\.to/*"],e:"api.mobypicture.com/oEmbed"},{s:["musicboxmaniacs\\.com/explore/melody/*"],e:"musicboxmaniacs.com/embed/"},{s:["mybeweeg\\.com/w/*"],e:"mybeweeg.com/services/oembed"},{s:["namchey\\.com/embeds/*"],e:"namchey.com/api/oembed"},{s:["*\\.nanoo\\.tv/link/*","nanoo\\.tv/link/*","*\\.nanoo\\.pro/link/*","nanoo\\.pro/link/*","media\\.zhdk\\.ch/signatur/*","new\\.media\\.zhdk\\.ch/signatur/*"],e:"www.nanoo.tv/services/oembed"},{s:["www\\.nb\\.no/items/*"],e:"api.nb.no/catalog/v1/oembed"},{s:["naturalatlas\\.com/*","naturalatlas\\.com/*/*","naturalatlas\\.com/*/*/*","naturalatlas\\.com/*/*/*/*"],e:"naturalatlas.com/oembed.json"},{s:["ndla\\.no/*"],e:"ndla.no/oembed"},{s:["liste\\.ndla\\.no/*"],e:"liste.ndla.no/oembed"},{s:["*\\.nfb\\.ca/film/*"],e:"www.nfb.ca/remote/services/oembed/"},{s:["nopaste\\.ml/*"],e:"oembed.nopaste.ml"},{s:["observablehq\\.com/@*/*","observablehq\\.com/d/*","observablehq\\.com/embed/*"],e:"api.observablehq.com/oembed"},{s:["www\\.odds\\.com\\.au/*","odds\\.com\\.au/*"],e:"www.odds.com.au/api/oembed/"},{s:["song\\.link/*","album\\.link/*","artist\\.link/*","playlist\\.link/*","pods\\.link/*","mylink\\.page/*","odesli\\.co/*"],e:"song.link/oembed"},{s:["odysee\\.com/*/*","odysee\\.com/*"],e:"odysee.com/$/oembed"},{s:["official\\.fm/tracks/*","official\\.fm/playlists/*"],e:"official.fm/services/oembed.json"},{s:["omniscope\\.me/*"],e:"omniscope.me/_global_/oembed/json"},{s:["omny\\.fm/shows/*"],e:"omny.fm/oembed"},{s:["orbitvu\\.co/001/*/ov3601/view","orbitvu\\.co/001/*/ov3601/*/view","orbitvu\\.co/001/*/ov3602/*/view","orbitvu\\.co/001/*/2/orbittour/*/view","orbitvu\\.co/001/*/1/2/orbittour/*/view"],e:"orbitvu.co/service/oembed"},{s:["origits\\.com/v/*"],e:"origits.net/oembed"},{s:["outplayed\\.tv/media/*"],e:"outplayed.tv/oembed"},{s:["overflow\\.io/s/*","overflow\\.io/embed/*"],e:"overflow.io/services/oembed"},{s:["www\\.oz\\.com/*/video/*"],e:"core.oz.com/oembed"},{s:["padlet\\.com/*"],e:"padlet.com/oembed/"},{s:["*\\.tv\\.pandavideo\\.com\\.br/embed/?v=*","*\\.tv\\.pandavideo\\.com\\.br/*/playlist\\.m3u8","dashboard\\.pandavideo\\.com\\.br/#/videos/*"],e:"api-v2.pandavideo.com.br/oembed"},{s:["pastery\\.net/*","www\\.pastery\\.net/*"],e:"www.pastery.net/oembed"},{s:["www\\.picturelfy\\.com/p/*"],e:"api.picturelfy.com/service/oembed/"},{s:["piggy\\.to/@*/*","piggy\\.to/view/*"],e:"piggy.to/oembed"},{s:["*\\.builder\\.pikasso\\.xyz/embed/*"],e:"builder.pikasso.xyz/api/oembed"},{s:[],e:"beta.pingvp.com.kpnis.nl/p/oembed.php"},{s:["tools\\.pinpoll\\.com/embed/*"],e:"tools.pinpoll.com/oembed"},{s:["www\\.pinterest\\.com/*"],e:"www.pinterest.com/oembed.json"},{s:["player\\.pitchhub\\.com/en/public/player/*"],e:"player.pitchhub.com/en/public/oembed"},{s:["store\\.pixdor\\.com/place-marker-widget/*/show","store\\.pixdor\\.com/map/*/show"],e:"store.pixdor.com/oembed"},{s:["app\\.plusdocs\\.com/*/snapshots/*","app\\.plusdocs\\.com/*/pages/edit/*","app\\.plusdocs\\.com/*/pages/share/*"],e:"app.plusdocs.com/oembed"},{s:["*\\.podbean\\.com/e/*"],e:"api.podbean.com/v1/oembed"},{s:["*\\.polldaddy\\.com/s/*","*\\.polldaddy\\.com/poll/*","*\\.polldaddy\\.com/ratings/*"],e:"polldaddy.com/oembed/"},{s:["portfolium\\.com/entry/*"],e:"api.portfolium.com/oembed"},{s:["present\\.do/decks/*"],e:"gateway.cobalt.run/present/decks/oembed"},{s:["prezi\\.com/v/*","*\\.prezi\\.com/v/*"],e:"prezi.com/v/oembed"},{s:["qtpi\\.gg/fashion/*"],e:"qtpi.gg/fashion/oembed"},{s:["www\\.quiz\\.biz/quizz-*\\.html"],e:"www.quiz.biz/api/oembed"},{s:["www\\.quizz\\.biz/quizz-*\\.html"],e:"www.quizz.biz/api/oembed"},{s:["play\\.radiopublic\\.com/*","radiopublic\\.com/*","www\\.radiopublic\\.com/*","*\\.radiopublic\\.com/*"],e:"oembed.radiopublic.com/oembed"},{s:["raindrop\\.io/*","raindrop\\.io/*/*","raindrop\\.io/*/*/*","raindrop\\.io/*/*/*/*"],e:"pub.raindrop.io/api/oembed"},{s:["www\\.rcvis\\.com/v/*","www\\.rcvis\\.com/visualize=*","www\\.rcvis\\.com/ve/*","www\\.rcvis\\.com/visualizeEmbedded=*"],e:"animatron.com/oembed"},{s:["reddit\\.com/r/*/comments/*/*","www\\.reddit\\.com/r/*/comments/*/*"],e:"www.reddit.com/oembed"},{s:["rwire\\.com/*"],e:"publisher.releasewire.com/oembed/"},{s:["repl\\.it/@*/*","replit\\.com/@*/*"],e:"replit.com/data/oembed"},{s:["www\\.reverbnation\\.com/*","www\\.reverbnation\\.com/*/songs/*"],e:"www.reverbnation.com/oembed"},{s:["roomshare\\.jp/post/*","roomshare\\.jp/en/post/*"],e:"roomshare.jp/en/oembed.json"},{s:["roosterteeth\\.com/*"],e:"roosterteeth.com/oembed"},{s:[],e:"rumble.com/api/Media/oembed.json"},{s:["embed\\.runkit\\.com/*,"],e:"embed.runkit.com/oembed"},{s:["octopus\\.saooti\\.com/main/pub/podcast/*"],e:"octopus.saooti.com/oembed"},{s:["videos\\.sapo\\.pt/*"],e:"videos.sapo.pt/oembed"},{s:["console\\.screen9\\.com/*","*\\.screen9\\.tv/*"],e:"api.screen9.com/oembed"},{s:["www\\.screencast\\.com/*"],e:"api.screencast.com/external/oembed"},{s:["www\\.screenr\\.com/*/"],e:"www.screenr.com/api/oembed.json"},{s:["www\\.scribblemaps\\.com/maps/view/*","scribblemaps\\.com/maps/view/*"],e:"scribblemaps.com/api/services/oembed.json"},{s:["www\\.scribd\\.com/doc/*"],e:"www.scribd.com/services/oembed/"},{s:["embed\\.sendtonews\\.com/oembed/*"],e:"embed.sendtonews.com/services/oembed"},{s:["www\\.shortnote\\.jp/view/notes/*"],e:"www.shortnote.jp/oembed/"},{s:["shoudio\\.com/*","shoud\\.io/*"],e:"shoudio.com/api/oembed"},{s:["app\\.getshow\\.io/iframe/*","*\\.getshow\\.io/share/*"],e:"api.getshow.io/oembed.json"},{s:["showtheway\\.io/to/*"],e:"showtheway.io/oembed"},{s:["simplecast\\.com/s/*"],e:"simplecast.com/oembed"},{s:["onsizzle\\.com/i/*"],e:"onsizzle.com/oembed"},{s:["sketchfab\\.com/*models/*","sketchfab\\.com/*/folders/*"],e:"sketchfab.com/oembed"},{s:["www\\.slideshare\\.net/*/*","fr\\.slideshare\\.net/*/*","de\\.slideshare\\.net/*/*","es\\.slideshare\\.net/*/*","pt\\.slideshare\\.net/*/*"],e:"www.slideshare.net/api/oembed/2"},{s:["smashnotes\\.com/p/*","smashnotes\\.com/p/*/e/* - https://smashnotes\\.com/p/*/e/*/s/*"],e:"smashnotes.com/services/oembed"},{s:["open\\.smeme\\.com/*"],e:"open.smeme.com/api/oembed"},{s:["www\\.smrthi\\.com/book/*"],e:"www.smrthi.com/api/oembed"},{s:["*\\.smugmug\\.com/*"],e:"api.smugmug.com/services/oembed/"},{s:["www\\.socialexplorer\\.com/*/explore","www\\.socialexplorer\\.com/*/view","www\\.socialexplorer\\.com/*/edit","www\\.socialexplorer\\.com/*/embed"],e:"www.socialexplorer.com/services/oembed/"},{s:["soundcloud\\.com/*","on\\.soundcloud\\.com/*","soundcloud\\.app\\.goog\\.gl/*"],e:"soundcloud.com/oembed"},{s:["speakerdeck\\.com/*/*"],e:"speakerdeck.com/oembed.json"},{s:["open\\.spotify\\.com/*","spotify:*"],e:"open.spotify.com/oembed"},{s:["*\\.spotlightr\\.com/watch/*","*\\.spotlightr\\.com/publish/*","*\\.cdn\\.spotlightr\\.com/watch/*","*\\.cdn\\.spotlightr\\.com/publish/*"],e:"api.spotlightr.com/getOEmbed"},{s:["*\\.spreaker\\.com/*"],e:"api.spreaker.com/oembed"},{s:["sproutvideo\\.com/videos/*","*\\.vids\\.io/videos/*"],e:"sproutvideo.com/oembed.json"},{s:["purl\\.stanford\\.edu/*"],e:"purl.stanford.edu/embed.json"},{s:["streamable\\.com/*"],e:"api.streamable.com/oembed.json"},{s:["s3m\\.io/*","23m\\.io/*"],e:"streamio.com/api/v1/oembed"},{s:["subscribi\\.io/api/oembed*"],e:"subscribi.io/api/oembed"},{s:["www\\.sudomemo\\.net/watch/*","flipnot\\.es/*"],e:"www.sudomemo.net/oembed"},{s:["www\\.sutori\\.com/story/*"],e:"www.sutori.com/api/oembed"},{s:["sway\\.com/*","www\\.sway\\.com/*"],e:"sway.com/api/v1.0/oembed"},{s:["sway\\.office\\.com/*"],e:"sway.office.com/api/v1.0/oembed"},{s:["share\\.synthesia\\.io/*"],e:"69jr5v75rc.execute-api.eu-west-1.amazonaws.com/prod/v2/oembed"},{s:["ted\\.com/talks/*","www\\.ted\\.com/talks/*"],e:"www.ted.com/services/v1/oembed.json"},{s:["www\\.nytimes\\.com/svc/oembed","nytimes\\.com/*","*\\.nytimes\\.com/*"],e:"www.nytimes.com/svc/oembed/json/"},{s:["theysaidso\\.com/image/*"],e:"theysaidso.com/extensions/oembed/"},{s:["www\\.tickcounter\\.com/widget/*","www\\.tickcounter\\.com/countdown/*","www\\.tickcounter\\.com/countup/*","www\\.tickcounter\\.com/ticker/*","www\\.tickcounter\\.com/clock/*","www\\.tickcounter\\.com/worldclock/*"],e:"www.tickcounter.com/oembed"},{s:["www\\.tiktok\\.com/*","www\\.tiktok\\.com/*/video/*"],e:"www.tiktok.com/oembed"},{s:["tonicaudio\\.com/take/*","tonicaudio\\.com/song/*","tnic\\.io/song/*","tnic\\.io/take/*"],e:"tonicaudio.com/oembed"},{s:["www\\.toornament\\.com/tournaments/*/information","www\\.toornament\\.com/tournaments/*/registration/","www\\.toornament\\.com/tournaments/*/matches/schedule","www\\.toornament\\.com/tournaments/*/stages/*/"],e:"widget.toornament.com/oembed"},{s:["www\\.topy\\.se/image/*"],e:"www.topy.se/oembed/"},{s:["app-test\\.totango\\.com/*"],e:"app-test.totango.com/oembed"},{s:["trinitymedia\\.ai/player/*","trinitymedia\\.ai/player/*/*","trinitymedia\\.ai/player/*/*/*"],e:"trinitymedia.ai/services/oembed"},{s:["*\\.tumblr\\.com/post/*"],e:"www.tumblr.com/oembed/1.0"},{s:["www\\.tuxx\\.be/*"],e:"www.tuxx.be/services/oembed"},{s:["play\\.tvcf\\.co\\.kr/*","*\\.tvcf\\.co\\.kr/*"],e:"play.tvcf.co.kr/rest/oembed"},{s:["twinmotion\\.unrealengine\\.com/presentation/*","twinmotion\\.unrealengine\\.com/panorama/*"],e:"twinmotion.unrealengine.com/oembed"},{s:["twitter\\.com/*","twitter\\.com/*/status/*","*\\.twitter\\.com/*/status/*"],e:"publish.twitter.com/oembed"},{s:["play\\.typecast\\.ai/s/*","play\\.typecast\\.ai/e/*","play\\.typecast\\.ai/*"],e:"play.typecast.ai/oembed"},{s:[],e:"typlog.com/oembed"},{s:["uapod\\.univ-antilles\\.fr/video/*"],e:"uapod.univ-antilles.fr/oembed"},{s:["map\\.cam\\.ac\\.uk/*"],e:"map.cam.ac.uk/oembed/"},{s:["mediatheque\\.univ-paris1\\.fr/video/*"],e:"mediatheque.univ-paris1.fr/oembed"},{s:["pod\\.u-pec\\.fr/video/*"],e:"pod.u-pec.fr/oembed"},{s:["*\\.ustream\\.tv/*","*\\.ustream\\.com/*"],e:"www.ustream.tv/oembed"},{s:["*\\.ustudio\\.com/embed/*","*\\.ustudio\\.com/embed/*/*"],e:"app.ustudio.com/api/v2/oembed"},{s:["veer\\.tv/videos/*"],e:"api.veer.tv/oembed"},{s:["veervr\\.tv/videos/*"],e:"api.veervr.tv/oembed"},{s:["www\\.vevo\\.com/*"],e:"www.vevo.com/oembed"},{s:["videfit\\.com/videos/*"],e:"videfit.com/oembed"},{s:["vidmount\\.com/*"],e:"vidmount.com/oembed"},{s:["*\\.vidyard\\.com/*","*\\.hubs\\.vidyard\\.com/*"],e:"api.vidyard.com/dashboard/v1.1/oembed"},{s:["vimeo\\.com/*","vimeo\\.com/album/*/video/*","vimeo\\.com/channels/*/*","vimeo\\.com/groups/*/videos/*","vimeo\\.com/ondemand/*/*","player\\.vimeo\\.com/video/*"],e:"vimeo.com/api/oembed.json"},{s:["www\\.viously\\.com/*/*"],e:"www.viously.com/oembed"},{s:["vizydrop\\.com/shared/*"],e:"vizydrop.com/oembed"},{s:["vlipsy\\.com/*"],e:"vlipsy.com/oembed"},{s:["www\\.vlive\\.tv/video/*"],e:"www.vlive.tv/oembed"},{s:["*\\.vouchfor\\.com/*"],e:"embed.vouchfor.com/v1/oembed"},{s:["article\\.voxsnap\\.com/*/*"],e:"data.voxsnap.com/oembed"},{s:["waltrack\\.net/product/*"],e:"waltrack.net/oembed"},{s:["watch\\.wave\\.video/*","embed\\.wave\\.video/*"],e:"embed.wave.video/oembed"},{s:["play\\.wecandeo\\.com/video/v/*"],e:"play.wecandeo.com/oembed/"},{s:["whimsical\\.com/*"],e:"whimsical.com/api/oembed"},{s:["fast\\.wistia\\.com/embed/iframe/*","fast\\.wistia\\.com/embed/playlists/*","*\\.wistia\\.com/medias/*"],e:"fast.wistia.com/oembed.json"},{s:["*\\.wizer\\.me/learn/*","*\\.wizer\\.me/preview/*"],e:"app.wizer.me/api/oembed.json"},{s:["wokwi\\.com/share/*"],e:"wokwi.com/api/oembed"},{s:["*\\.wolframcloud\\.com/*"],e:"www.wolframcloud.com/oembed"},{s:["wordpress\\.com/*","*\\.wordpress\\.com/*","*\\.*\\.wordpress\\.com/*","wp\\.me/*"],e:"public-api.wordpress.com/oembed/"},{s:["*\\.youtube\\.com/watch*","*\\.youtube\\.com/v/*","youtu\\.be/*","*\\.youtube\\.com/playlist?list=*","youtube\\.com/playlist?list=*","*\\.youtube\\.com/shorts*"],e:"www.youtube.com/oembed"},{s:["www\\.yumpu\\.com/*/document/view/*/*"],e:"www.yumpu.com/services/oembed"},{s:["app\\.zeplin\\.io/project/*/screen/*","app\\.zeplin\\.io/project/*/screen/*/version/*","app\\.zeplin\\.io/project/*/styleguide/components?coid=*","app\\.zeplin\\.io/styleguide/*/components?coid=*"],e:"app.zeplin.io/embed"},{s:["app\\.zingsoft\\.com/embed/*","app\\.zingsoft\\.com/view/*"],e:"app.zingsoft.com/oembed"},{s:["*\\.znipe\\.tv/*"],e:"api.znipe.tv/v3/oembed/"},{s:["srv2\\.zoomable\\.ca/viewer\\.php*"],e:"srv2.zoomable.ca/oembed"}];var Qk=(i="")=>new RegExp(i.replace(/\\./g,".").replace(/\*/g,"(.*)").replace(/\?/g,"\\?").replace(/,$/g,""),"i"),tC=(i=[])=>i.map(t=>{let{e,s:r}=t;return{endpoint:`https://${e}`,schemes:r.map(Qk)}}),eC={providers:tC(Jb)},oC=()=>[...eC.providers],iC=(i="",t="",e=[])=>{if(!e.length){let r=Ts(i),a=Ts(t);return r===a}return e.some(r=>i.match(r))},Qb=(i="")=>{if(!tl(i))return null;let t=oC();for(let e=0;e<t.length;e++){let{endpoint:r,schemes:a}=t[e];if(iC(i,r,a))return{schemes:a,endpoint:r,url:i}}return null},tv=i=>{let t=Qb(i);return t?t.endpoint:null};var ev=async(i,t={},e={})=>{if(!tl(i))throw new Error("Invalid input URL");let r=tv(i);if(!r)throw new Error(`No provider found with given url "${i}"`);return await Xb(i,t,r,e)};var Ps=i=>i||i===0?`${i}px`:void 0,rC=({width:i,height:t,aspectRatio:e,layout:r})=>{let a=[];return r==="fixed"&&(a.push(["width",Ps(i)]),a.push(["height",Ps(t)])),r==="constrained"&&(a.push(["max-width",Ps(i)]),a.push(["max-height",Ps(t)]),a.push(["aspect-ratio",e?`${e}`:void 0]),a.push(["width","100%"])),r==="fullWidth"&&(a.push(["width","100%"]),a.push(["aspect-ratio",e?`${e}`:void 0]),a.push(["height",Ps(t)])),Object.fromEntries(a.filter(([,s])=>s))};function ov({width:i,height:t,layout:e="constrained",aspectRatio:r,...a}){i=i&&Number(i)||void 0,t=t&&Number(t)||void 0,r?i?t?console.error("Ignoring aspectRatio because width and height are both set"):t=i/r:t?i=t*r:e!=="fullWidth"&&console.error("When aspectRatio is set, either width or height must also be set"):i&&t?r=i/t:e!=="fullWidth"&&console.error("Either aspectRatio or both width and height must be set");let s={width:i,height:t,aspectRatio:r,layout:e};return a.style={...rC(s),...a.style},(e==="fullWidth"||e==="constrained")&&(i=void 0,t=void 0),{...a,width:i,height:t}}var iv=A`
  ${N}

  :host {
    --control-box-size: 3rem;
    --icon-size: calc(var(--control-box-size) * 0.625);

    border: 0;
    padding: 0;
    line-height: 0;
    display: block;
    overflow: hidden;
  }

  .oembed {
    position: relative;
  }

  .oembed__thumbnail {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .oembed__control-box {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    top: calc(50% - var(--control-box-size) / 2);
    right: calc(50% - var(--control-box-size) / 2);
    width: var(--control-box-size);
    height: var(--control-box-size);
    font-size: var(--icon-size);
    background: none;
    border: solid 2px currentColor;
    background-color: rgb(0 0 0 /50%);
    border-radius: var(--awc-border-radius-circle);
    color: white;
    pointer-events: none;
    transition: var(--awc-transition-fast) opacity;
  }

  .oembed__thumbnail[aria-hidden='true'] {
    display: none;
  }
`;var aC=Object.defineProperty,sC=Object.getOwnPropertyDescriptor,To=(i,t,e,r)=>{for(var a=r>1?void 0:r?sC(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&aC(t,e,a),a},kd=class extends R{constructor(){super(...arguments),this.layout="constrained",this.frameBorder="0",this.allowFullscreen=!0,this.privacyEnhancedMode=!0,this.isLoading=!0}connectedCallback(){super.connectedCallback(),ev(this.src).then(t=>{this.handleLoad(t)}).catch(()=>{this.handleError()})}handleLoad(t){this.emit("awc-load"),this.isLoading=!1,this.data=t}handleError(){this.emit("awc-error"),this.isLoading=!1,this.data=null}handleClick(){this.play=!this.play}render(){if(this.isLoading)return Ne``;let t={src:this.src,width:this.width,height:this.height,aspectRatio:this.aspectRatio,layout:this.layout},e=ov(t),r=null;if(this.data?.type==="video"){let a=this.data,s=document.createElement("div");s.innerHTML=a.html;let l=s.querySelector("iframe");if(l){let h=new URL(l.src),f=new URLSearchParams(h.search);this.data.provider_name==="YouTube"&&(this.privacyEnhancedMode&&(h.host=h.host.replace("youtube.com","youtube-nocookie.com")),f.set("autoplay",this.play?"1":"0"),f.set("auto_play",this.play?"1":"0"),f.set("fs",this.allowFullscreen?"1":"0"),f.set("modestbranding","1"),f.set("rel","0"),f.set("showinfo","0")),h.search=f.toString(),l.src=h.toString(),l.loading=this.loading??"lazy",l.width="100%",l.height="100%",l.frameBorder=this.frameBorder,l.allowFullscreen=this.allowFullscreen}let p=this.play?Jl(s.innerHTML):null,d=this.thumbnail??a?.thumbnail_url?.replace("hqdefault.jpg","maxresdefault.jpg");r=Ne`
        <slot name="embed">${p}</slot>
        <div
          part="thumbnail"
          class="oembed__thumbnail"
          aria-hidden=${this.play?"true":"false"}
          @click=${this.handleClick}
        >
          <slot name="thumbnail">
            <awc-image
              src="${d}"
              aspectRatio="${this.aspectRatio}"
              width="${this.width}"
              height="${this.height}"
            ></awc-image>
          </slot>
          <div part="control-box" class="oembed__control-box">
            <slot name="play-icon"><awc-icon name="play-fill" library="system"></awc-icon></slot>
          </div>
        </div>
      `}if(this.data?.type==="rich"){let a=this.data,s=document.createElement("div");s.innerHTML=a.html;let l=s.querySelector("iframe");if(l){let d=new URL(l.src),h=new URLSearchParams(d.search);this.data.provider_name==="YouTube"&&(this.privacyEnhancedMode&&(d.host=d.host.replace("youtube.com","youtube-nocookie.com")),h.set("autoplay",this.play?"1":"0"),h.set("auto_play",this.play?"1":"0")),d.search=h.toString(),l.src=d.toString(),l.loading=this.loading??"lazy",l.width="100%",l.height="100%",l.frameBorder=this.frameBorder,l.allowFullscreen=this.allowFullscreen}let p=Jl(s.innerHTML);r=Ne`<slot name="embed">${p}</slot>`}if(this.data?.type==="photo"){let a=this.data;r=Ne`<slot name="embed"
        ><awc-image
          src="${a.url}"
          aspectRatio="${this.aspectRatio}"
          layout="${this.layout}"
          width="${this.width}"
          height="${this.height}"
        ></awc-image
      ></slot>`}return Ne`
      <div
        part="base"
        class="oembed"
        width="${e.width}"
        height="${e.height}"
        style="${Qt(e.style??{})}"
      >
        ${r}
      </div>
    `}};kd.styles=iv,kd.dependencies={"awc-icon":nt,"awc-image":Vt};var Ve=kd;To([u({type:String})],Ve.prototype,"src",2);To([u({type:Number})],Ve.prototype,"width",2);To([u({type:Number})],Ve.prototype,"height",2);To([u({type:Number})],Ve.prototype,"aspectRatio",2);To([u({type:String})],Ve.prototype,"layout",2);To([u({type:String})],Ve.prototype,"frameBorder",2);To([u({type:Boolean})],Ve.prototype,"allowFullscreen",2);To([u({type:Boolean})],Ve.prototype,"privacyEnhancedMode",2);To([u({type:String})],Ve.prototype,"loading",2);To([u({type:String})],Ve.prototype,"thumbnail",2);To([u({type:Boolean,reflect:!0})],Ve.prototype,"play",2);To([X()],Ve.prototype,"isLoading",2);To([X()],Ve.prototype,"data",2);Ve.define("awc-oembed");var rv=A`
  ${N}
  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;

    --awc-pagination-gap: 1rem;
  }

  .pagination {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--awc-pagination-gap);
  }

  .pagination__button::part(label) {
    display: flex;
    align-items: center;
  }

  .pagination__items {
    list-style: none;
    display: flex;
    align-items: center;
    justify-items: center;
    margin: 0;
    padding: 0;
  }

  .pagination__item--current {
    color: var(--awc-color-primary-600);
  }

  .pagination__item--dots {
    padding: 0 var(--awc-spacing-medium);
  }
`;var nC=Object.defineProperty,lC=Object.getOwnPropertyDescriptor,Fr=(i,t,e,r)=>{for(var a=r>1?void 0:r?lC(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&nC(t,e,a),a},av=class extends R{constructor(){super(...arguments),this.localize=new et(this),this.renderedPaginationArray=[],this.isMobile=window.innerWidth<=768,this.itemCount=this.isMobile?2:3,this.shouldShowLeftDots=!1,this.shouldShowRightDots=!1,this.current=1,this.handleClick=t=>{this.current=t,this.emit("awc-page-change",{detail:{value:this.current}})},this.nextPage=()=>{this.current=Math.min(this.current+1,this.total),this.emit("awc-page-change",{detail:{value:this.current}})},this.previousPage=()=>{this.current=Math.max(this.current-1,0),this.emit("awc-page-change",{detail:{value:this.current}})},this.range=(t,e)=>{let r=e-t+1;return Array.from({length:r},(a,s)=>s+t)},this.renderedPagination=()=>{let t=this.range(1,this.total);this.renderedPaginationArray=[...t]}}render(){return this.isMobile=window.innerWidth<=768,this.renderedPagination(),E`
      <div
        part="base"
        class=${Z({pagination:!0})}
      >
        <awc-button
          part="button button-previous"
          class="pagination__button"
          @click=${this.previousPage}
          variant="primary"
          outline
          ?disabled=${this.current===1}
          aria-label=${this.localize.term("previous")}
        >
          <slot name="previous-button">
            <awc-icon name="chevron-left"></awc-icon>
          </slot>
        </awc-button>

        <ul part="items" class="pagination__items">
          ${this.renderedPaginationArray.map(t=>E`
              <li
                ${t===this.current?'aria-current="page"':""}
                class=${Z({pagination__item:!0,"pagination__item--current":t===this.current})}
              >
                <awc-button variant="ghost" @click=${()=>this.handleClick(t)}> ${t} </awc-button>
              </li>
            `)}
        </ul>

        <awc-button
          part="button button-next"
          class="pagination__button"
          @click=${this.nextPage}
          variant="primary"
          outline
          ?disabled=${this.current===this.total}
          aria-label=${this.localize.term("next")}
        >
          <slot name="next-button">
            <awc-icon name="chevron-right"></awc-icon>
          </slot>
        </awc-button>
      </div>

      <style>
        .pagination__items awc-button::part(label) {
          font-weight: 400;
        }
      </style>
    `}};av.styles=rv;var vi=av;Fr([X()],vi.prototype,"renderedPaginationArray",2);Fr([X()],vi.prototype,"isMobile",2);Fr([X()],vi.prototype,"itemCount",2);Fr([X()],vi.prototype,"shouldShowLeftDots",2);Fr([X()],vi.prototype,"shouldShowRightDots",2);Fr([u({type:Number,reflect:!0})],vi.prototype,"total",2);Fr([u({type:Number,reflect:!0})],vi.prototype,"current",2);vi.define("awc-pagination");var cC=(i,t)=>t===i.name.split(".").pop(),dC=(i,t)=>{t=t.replace("/*","");let e=i.type.replace(/\/[a-z*]{0,20}$/,"");return t===e},sv=(i,t)=>t?i.size<=t:!0,nv=(i,t)=>t==="*"?!0:t.split(",").some(e=>(e=e.trim(),e===i.type?!0:e.startsWith(".")?cC(i,e.slice(1)):e.endsWith("/*")?dC(i,e):!1));var lv=(i,t,e)=>{let r=new Map;for(let a=t;a<=e;a++)r.set(i[a],a);return r},cv=xo(class extends ao{constructor(i){if(super(i),i.type!==Me.CHILD)throw Error("repeat() can only be used in text expressions")}ht(i,t,e){let r;e===void 0?e=t:t!==void 0&&(r=t);let a=[],s=[],l=0;for(let p of i)a[l]=r?r(p,l):l,s[l]=e(p,l),l++;return{values:s,keys:a}}render(i,t,e){return this.ht(i,t,e).values}update(i,[t,e,r]){let a=$h(i),{values:s,keys:l}=this.ht(t,e,r);if(!Array.isArray(a))return this.dt=l,s;let p=this.dt??=[],d=[],h,f,g=0,v=a.length-1,y=0,_=s.length-1;for(;g<=v&&y<=_;)if(a[g]===null)g++;else if(a[v]===null)v--;else if(p[g]===l[y])d[y]=Gi(a[g],s[y]),g++,y++;else if(p[v]===l[_])d[_]=Gi(a[v],s[_]),v--,_--;else if(p[g]===l[_])d[_]=Gi(a[g],s[_]),aa(i,d[_+1],a[g]),g++,_--;else if(p[v]===l[y])d[y]=Gi(a[v],s[y]),aa(i,a[g],a[v]),v--,y++;else if(h===void 0&&(h=lv(l,y,_),f=lv(p,g,v)),h.has(p[g]))if(h.has(p[v])){let x=f.get(l[y]),P=x!==void 0?a[x]:null;if(P===null){let S=aa(i,a[g]);Gi(S,s[y]),d[y]=S}else d[y]=Gi(P,s[y]),aa(i,a[g],P),a[x]=null;y++}else kn(a[v]),v--;else kn(a[g]),g++;for(;y<=_;){let x=aa(i,d[_+1]);Gi(x,s[y]),d[y++]=x}for(;g<=v;){let x=a[g++];x!==null&&kn(x)}return this.dt=l,xn(i,d),pe}});var dv=A`
  ${N}

  :host {
    display: contents;
    /* For better Developer Experience, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .file-upload-item {
    position: relative;
    display: flex;
    background-color: var(--awc-panel-background-color);
    border: solid var(--awc-panel-border-width) var(--awc-panel-border-color);
    border-radius: var(--awc-border-radius-medium);
    font-family: var(--awc-font-sans);
    font-size: var(--awc-font-size-medium);
    font-weight: var(--awc-font-weight-normal);
    line-height: var(--awc-line-height-dense);
    color: var(--awc-color-neutral-1000);
    margin: inherit;
  }

  .file-upload-item__content {
    position: relative;
    display: flex;
    flex: 1;
    overflow: hidden;
  }

  .file-upload-item:not(.file-upload-item--has-image) .file-upload-item__image,
  .file-upload-item:not(.file-upload-item--closable) .file-upload-item__close-button {
    display: none;
  }

  .file-upload-item__image {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--awc-font-size-2x-large);
    padding-left: var(--awc-spacing-large);
    color: var(--awc-color-primary-600);
  }

  .file-upload-item__progress__container {
    display: flex;
    padding-right: var(--awc-spacing-medium);
    align-items: center;
    color: var(--awc-color-primary-600);
    font-size: var(--awc-font-size-2x-large);
  }

  .file-upload-item__progress {
    flex: 1;
    --size: 1.75rem;
  }

  .file-upload-item__label {
    flex: 1 1 auto;
    padding: var(--awc-spacing-medium);
    gap: var(--awc-spacing-3x-small);
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .file-upload-item__label .file-upload-item__label__content {
    flex: 1 1 auto;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .file-upload-item__label__size {
    font-size: var(--awc-font-size-small);
    color: var(--awc-color-neutral-700);
  }

  .file-upload-item__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--awc-font-size-2x-large);
    padding-right: var(--awc-spacing-large);
  }
  .file-upload-item__close-button awc-icon-button {
    --awc-spacing-x-small: 0;
  }

  .file-upload-item .file-upload-item__label__error {
    display: none;
    font-size: var(--awc-font-size-small);
  }

  .file-upload-item--error {
    border-color: var(--awc-color-danger-600);
  }

  .file-upload-item--error .file-upload-item__label__error {
    display: block;
  }

  .file-upload-item--error .file-upload-item__label__content {
    color: var(--awc-text-paragraph-color);
  }

  .file-upload-item--error,
  .file-upload-item--error .file-upload-item__image {
    color: var(--awc-color-danger-600);
  }
`;var pC=Object.defineProperty,hC=Object.getOwnPropertyDescriptor,Xo=(i,t,e,r)=>{for(var a=r>1?void 0:r?hC(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&pC(t,e,a),a},Cd=class extends R{constructor(){super(...arguments),this.hasSlotController=new Ct(this,"image","suffix"),this.localize=new et(this),this.loading=!1,this.error=!1,this.closable=!1,this.value="",this.hidden=!1}firstUpdated(){this.base.hidden=this.hidden}async handleHiddenChange(){if(this.hidden){this.emit("awc-hide"),await At(this.base);let{keyframes:t,options:e}=yt(this,"file-upload-item.hide",{dir:this.localize.dir()});await Tt(this.base,t,e),this.base.hidden=!0,this.emit("awc-after-hide")}else{this.emit("awc-show"),await At(this.base),this.base.hidden=!1;let{keyframes:t,options:e}=yt(this,"file-upload-item.show",{dir:this.localize.dir()});await Tt(this.base,t,e),this.emit("awc-after-show")}}async show(){if(this.hidden)return this.hidden=!1,Kt(this,"awc-after-show")}async hide(){if(!this.hidden)return this.hidden=!0,Kt(this,"awc-after-hide")}handleCloseClick(){this.hide()}handleTriggerKeyUp(t){t.key==="\xA0 "&&t.preventDefault()}render(){return E`
      <div
        part="base"
        class=${Z({"file-upload-item":!0,"file-upload-item--hidden":this.hidden,"file-upload-item--closable":this.closable,"file-upload-item--error":this.error,"file-upload-item--has-size":this.size,"file-upload-item--is-loading":this.loading,"file-upload-item--has-image":this.hasSlotController.test("image")})}
      >
        <span class="file-upload-item__content">
          <span part="image" class="file-upload-item__image">
            <slot name="image"></slot>
          </span>

          <span part="label" class="file-upload-item__label">
            <div class="file-upload-item__label__content">
              <slot></slot>
              ${this.size?E`<awc-format-bytes value="${this.size}" class="file-upload-item__label__size"></awc-format-bytes>`:""}
            </div>
            <div part="error" class="file-upload-item__label__error">
              <slot name="error"></slot>
            </div>
          </span>
        </span>

        ${this.loading||H(this.progress)&&this.progress===100?E`
              <span class="file-upload-item__progress__container">
                ${!H(this.progress)||H(this.progress)&&this.progress!==100?E`<awc-progress-ring
                      class="file-upload-item__progress"
                      ?indeterminate=${this.progress===void 0}
                      value=${H(this.progress)}
                      label=${H(this.label)}
                    ></awc-progress-ring>`:""}
                ${H(this.progress)&&this.progress===100?E`<awc-icon class="file-upload-item__progress--completed" name="check-circle-fill"></awc-icon>`:""}
              </span>
            `:""}
        ${this.closable&&!(this.loading||H(this.progress)&&this.progress===100)?E`
              <span
                class="file-upload-item__close-button"
                @click=${this.handleCloseClick}
                @keyup=${this.handleTriggerKeyUp}
              >
                <slot name="close-button">
                  <awc-icon-button
                    part="close-button"
                    exportparts="base:close-button__base"
                    name="xmark"
                    library="system"
                  ></awc-icon-button>
                </slot>
              </span>
            `:""}
      </div>
    `}};Cd.styles=dv,Cd.dependencies={"awc-format-bytes":ui,"awc-progress-bar":rr,"awc-icon-button":Ut};var He=Cd;Xo([F('[part="base"]')],He.prototype,"base",2);Xo([u({type:Boolean,reflect:!0})],He.prototype,"loading",2);Xo([u({type:Number,reflect:!0})],He.prototype,"progress",2);Xo([u()],He.prototype,"label",2);Xo([u()],He.prototype,"lang",2);Xo([u({type:Boolean,reflect:!0})],He.prototype,"error",2);Xo([u({type:Boolean,reflect:!0})],He.prototype,"closable",2);Xo([u()],He.prototype,"value",2);Xo([u({type:Number,reflect:!0})],He.prototype,"size",2);Xo([u({type:Boolean,reflect:!0})],He.prototype,"hidden",2);Xo([M("hidden",{waitUntilFirstUpdate:!0})],He.prototype,"handleHiddenChange",1);ht("file-upload-item.show",{keyframes:[{opacity:0,transform:"scale(0.8)"},{opacity:1,transform:"scale(1)"}],options:{duration:250,easing:"ease"}});ht("file-upload-item.hide",{keyframes:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.8)"}],options:{duration:250,easing:"ease"}});var pv=A`
  ${N}

  :host {
    --border-radius: var(--awc-border-radius-medium);
    --border-width: var(--awc-input-border-width);
    --border-style: solid;
    --list-border-style: solid;
    display: block;
  }

  .file-upload__label {
    background-color: var(--awc-background-color);
    padding: var(--awc-spacing-3x-large);
    border-width: var(--border-width);
    border-style: var(--border-style);
    border-color: var(--awc-color-neutral-300);
    border-radius: var(--border-radius);
    color: var(--awc-text-paragraph-color);
    line-height: var(--awc-line-height-dense);
    text-align: center;
  }

  .file-upload__label.file-upload__label--has-file {
    border-radius: var(--border-radius) var(--border-radius) 0 0;
  }

  .file-upload__label__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--awc-spacing-medium);
  }

  .file-upload--dragged:not(.file-upload--disabled) .file-upload__label {
    border-color: var(--awc-color-primary-600);
    background-color: var(--awc-color-primary-200);
  }

  .file-upload__label__container__image {
    font-size: 2rem;
    color: var(--awc-color-primary-600);
  }

  .file-upload--disabled .file-upload__label,
  .file-upload--no-drag .file-upload__label {
    cursor: no-drop;
  }

  .file-upload--disabled .file-upload__label {
    color: var(--awc-color-neutral-500);
  }

  .file-upload--disabled .file-upload__label__container__image {
    color: var(--awc-color-neutral-300);
  }

  .file-upload__file-items {
    display: flex;
    flex-direction: column;
    background-color: var(--awc-background-color);
    gap: var(--awc-spacing-small);
    margin-top: calc(var(--border-width) * -1);
    padding: var(--awc-spacing-large);
    border-width: var(--border-width);
    border-style: var(--list-border-style);
    border-color: var(--awc-color-neutral-300);
    border-radius: 0 0 var(--border-radius) var(--border-radius);
  }

  .file-upload--button-only .file-upload__file-items,
  .file-upload--custom-content .file-upload__file-items {
    margin-top: var(--awc-spacing-medium);
    padding: 0;
    border: 0;
  }

  /*
  .file-upload__file-items {
    display: flex;
    flex-direction: column;
    gap: var(--awc-spacing-small);
    margin-top: var(--awc-spacing-medium);
  }
   */

  .file-upload__file-items .file-upload__file-items__header {
    font-size: var(--awc-font-size-small);
    line-height: var(--awc-line-height-dense);
    color: var(--awc-text-title-color);
  }

  .file-upload--error .file-upload__label {
    border-color: var(--awc-color-danger-600);
    color: var(--awc-color-danger-600);
  }

  .file-upload--error .file-upload__label__container__image {
    color: var(--awc-color-danger-600);
  }

  /* Help text */
  .file-upload .file-upload__help-text {
    display: none;
  }

  .file-upload--has-help-text .file-upload__help-text {
    display: block;
    color: var(--awc-color-neutral-600);
    margin-top: var(--awc-spacing-x-small);
    font-size: var(--awc-font-size-small);
  }

  .file-upload--button-only.file-upload--has-help-text .file-upload__help-text {
    margin-top: var(--awc-spacing-x-small);
  }
`;var uC=Object.defineProperty,mC=Object.getOwnPropertyDescriptor,Se=(i,t,e,r)=>{for(var a=r>1?void 0:r?mC(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&uC(t,e,a),a},Ld=class extends R{constructor(){super(...arguments),this.hasSlotController=new Ct(this,"help-text","content"),this.formControlController=new oe(this,{value:t=>t.files.length===1?t.files[0].file:t.files.length>1?t.files.map(e=>e.file):new File([""],"",{type:"application/octet-stream"}),assumeInteractionOn:["awc-blur","awc-input"]}),this.localize=new et(this),this.isDragover=!1,this.files=[],this.disabled=!1,this.noButton=!1,this.buttonOnly=!1,this.noFileList=!1,this.accept="*",this.multiple=!1,this.helpText=""}get value(){return this.files.length>0?`C:\\fakepath\\${this.files[0].file.name}`:""}set value(t){if(t instanceof File){this.files=[{file:t}];return}this.files=[]}addFile(t){if(this.maxFiles&&this.files.length>=this.maxFiles){this.error=this.localize.term("maxFiles");return}let e={file:t};nv(t,this.accept)?sv(t,this.maxFileSize)?e.accepted=!0:(e.accepted=!1,e.error=this.localize.term("fileSizeExceeded",this.maxFileSize)):(e.accepted=!1,e.error=this.localize.term("fileTypeNotAccepted",this.accept)),e.accepted=!0,this.files=this.multiple?[...this.files,e]:[e],this.emit("awc-change",{detail:e})}handleFiles(t){if(!(!t||t.length===0)){if(this.error=void 0,!this.multiple&&t.length>1){this.error=this.localize.term("noMultipleFiles");return}Object.values(t).forEach(e=>this.addFile(e))}}onDragLeave(){this.isDragover=!1}onDragOver(t){t.preventDefault(),t.dataTransfer&&(this.isDragover=!0)}onDrop(t){t.preventDefault(),this.isDragover=!1;let e=t.dataTransfer?.files;!e||this.disabled||this.handleFiles(e)}handleBrowseFileClick(){this.input.click()}handleFileInputChange(){this.emit("awc-select"),this.handleFiles(this.input.files)}handleFileRemove(t){let e=this.files[t];this.emit("awc-remove",{detail:{fileInfo:e}}),this.files=this.files.filter((r,a)=>a!==t)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}firstUpdated(){this.formControlController.updateValidity()}getForm(){return this.formControlController.getForm()}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}reportValidity(){return this.input.reportValidity()}checkValidity(){return this.input.checkValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}get dragDroplabel(){return this.error?this.error:this.label?this.label:this.localize.term("dragDrop")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}render(){let t=this.hasSlotController.test("content"),e=this.hasSlotController.test("help-text"),r=this.helpText?!0:!!e,a=E`
      <div @click="${this.handleBrowseFileClick}">
        <slot name="button">
          <awc-button part="button" variant=${this.error?"danger":"secondary"} ?disabled=${this.disabled}>
            ${this.buttonLabel??this.localize.term("browseFiles")}
          </awc-button>
        </slot>
      </div>
    `;return E`
      <div
        part="base"
        class=${Z({"file-upload":!0,"file-upload--disabled":this.disabled,"file-upload--error":!!this.error,"file-upload--dragged":this.isDragover,"file-upload--has-help-text":r,"file-upload--button-only":this.buttonOnly,"file-upload--custom-content":t})}
      >
        <input
          type="file"
          id="file-input"
          style="display: none"
          accept=${this.accept}
          ?multiple=${this.multiple}
          @change="${this.handleFileInputChange}"
          @invalid=${this.handleInvalid}
          aria-describedby="help-text"
        />
        ${this.buttonOnly?E`
              ${a}
              <div part="help-text" class="file-upload__help-text" aria-hidden=${r?"false":"true"}>
                <slot name="help-text">${this.helpText}</slot>
              </div>
            `:E`
              <div id="dropzone" @drop="${this.onDrop}" @dragover="${this.onDragOver}" @dragleave="${this.onDragLeave}">
                <slot name="content">
                  <div
                    part="content"
                    class=${Z({"file-upload__label":!0,"file-upload__label--has-file":!!this.files.length})}
                  >
                    <div class="file-upload__label__container">
                      <slot name="image">
                        <div part="image" class="file-upload__label__container__image">
                          <awc-icon name="arrow-down-to-line" library="system"></awc-icon>
                        </div>
                      </slot>
                      <div>
                        <div>${this.dragDroplabel}</div>
                        <div
                          part="help-text"
                          class="file-upload__help-text"
                          aria-hidden=${r?"false":"true"}
                        >
                          <slot name="help-text">${this.helpText}</slot>
                        </div>
                      </div>
                      ${this.noButton?"":a}
                    </div>
                  </div>
                </slot>
              </div>
            `}
        ${!this.noFileList&&this.files.length?E`
              <div
                class=${Z({"file-upload__file-items":!0})}
                id="file-items"
              >
                <div class="file-upload__file-items__header">
                  <span>${this.localize.term("files")}</span>
                </div>
                ${cv(this.files,s=>s.file.name,(s,l)=>E`
                    <awc-file-upload-item
                      size=${s.accepted?s.file.size:$t}
                      ?error=${!!s.error}
                      ?closable=${s.accepted}
                      ?loading=${s.loading}
                      progress=${H(s.progress)}
                      @awc-hide=${p=>{p.stopPropagation(),this.handleFileRemove(l)}}
                      data-test="${JSON.stringify(s)}"
                    >
                      ${s.file.name} ${s.error?E`<div slot="error">${s.error}</div>`:""}
                      <awc-icon
                        name=${s.error?"exclamation-triangle":"file"}
                        slot="image"
                        library="system"
                      ></awc-icon>
                    </awc-file-upload-item>
                  `)}
              </div>
            `:""}
      </div>
    `}};Ld.styles=pv,Ld.dependencies={"awc-icon":nt,"awc-file-upload-item":He};var se=Ld;Se([X()],se.prototype,"error",2);Se([X()],se.prototype,"isDragover",2);Se([F("#file-input")],se.prototype,"input",2);Se([u()],se.prototype,"files",2);Se([u()],se.prototype,"name",2);Se([u({type:Boolean,reflect:!0})],se.prototype,"disabled",2);Se([u({type:Boolean,reflect:!0,attribute:"no-button"})],se.prototype,"noButton",2);Se([u({type:Boolean,reflect:!0,attribute:"button-only"})],se.prototype,"buttonOnly",2);Se([u({type:Boolean,reflect:!0,attribute:"no-file-list"})],se.prototype,"noFileList",2);Se([u()],se.prototype,"label",2);Se([u({attribute:"button-label"})],se.prototype,"buttonLabel",2);Se([u()],se.prototype,"lang",2);Se([u({type:String,reflect:!0})],se.prototype,"accept",2);Se([u({type:Number,attribute:"max-file-size"})],se.prototype,"maxFileSize",2);Se([u({type:Number,attribute:"max-files"})],se.prototype,"maxFiles",2);Se([u({type:Boolean,reflect:!0})],se.prototype,"multiple",2);Se([u({attribute:"help-text"})],se.prototype,"helpText",2);Se([M("disabled",{waitUntilFirstUpdate:!0})],se.prototype,"handleDisabledChange",1);se.define("awc-file-upload");He.define("awc-file-upload-item");var el=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};var Es={exports:{}};var hv;function ol(){return hv?Es.exports:(hv=1,function(i,t){(function(e,r){r(t)})(el,function(e){var r="1.9.4";function a(o){var n,c,m,b;for(c=1,m=arguments.length;c<m;c++){b=arguments[c];for(n in b)o[n]=b[n]}return o}var s=Object.create||function(){function o(){}return function(n){return o.prototype=n,new o}}();function l(o,n){var c=Array.prototype.slice;if(o.bind)return o.bind.apply(o,c.call(arguments,1));var m=c.call(arguments,2);return function(){return o.apply(n,m.length?m.concat(c.call(arguments)):arguments)}}var p=0;function d(o){return"_leaflet_id"in o||(o._leaflet_id=++p),o._leaflet_id}function h(o,n,c){var m,b,w,T;return T=function(){m=!1,b&&(w.apply(c,b),b=!1)},w=function(){m?b=arguments:(o.apply(c,arguments),setTimeout(T,n),m=!0)},w}function f(o,n,c){var m=n[1],b=n[0],w=m-b;return o===m&&c?o:((o-b)%w+w)%w+b}function g(){return!1}function v(o,n){if(n===!1)return o;var c=Math.pow(10,n===void 0?6:n);return Math.round(o*c)/c}function y(o){return o.trim?o.trim():o.replace(/^\s+|\s+$/g,"")}function _(o){return y(o).split(/\s+/)}function x(o,n){Object.prototype.hasOwnProperty.call(o,"options")||(o.options=o.options?s(o.options):{});for(var c in n)o.options[c]=n[c];return o.options}function P(o,n,c){var m=[];for(var b in o)m.push(encodeURIComponent(c?b.toUpperCase():b)+"="+encodeURIComponent(o[b]));return(!n||n.indexOf("?")===-1?"?":"&")+m.join("&")}var S=/\{ *([\w_ -]+) *\}/g;function k(o,n){return o.replace(S,function(c,m){var b=n[m];if(b===void 0)throw new Error("No value provided for variable "+c);return typeof b=="function"&&(b=b(n)),b})}var C=Array.isArray||function(o){return Object.prototype.toString.call(o)==="[object Array]"};function z(o,n){for(var c=0;c<o.length;c++)if(o[c]===n)return c;return-1}var O="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function j(o){return window["webkit"+o]||window["moz"+o]||window["ms"+o]}var Q=0;function Y(o){var n=+new Date,c=Math.max(0,16-(n-Q));return Q=n+c,window.setTimeout(o,c)}var G=window.requestAnimationFrame||j("RequestAnimationFrame")||Y,B=window.cancelAnimationFrame||j("CancelAnimationFrame")||j("CancelRequestAnimationFrame")||function(o){window.clearTimeout(o)};function U(o,n,c){if(c&&G===Y)o.call(n);else return G.call(window,l(o,n))}function I(o){o&&B.call(window,o)}var W={__proto__:null,extend:a,create:s,bind:l,get lastId(){return p},stamp:d,throttle:h,wrapNum:f,falseFn:g,formatNum:v,trim:y,splitWords:_,setOptions:x,getParamString:P,template:k,isArray:C,indexOf:z,emptyImageUrl:O,requestFn:G,cancelFn:B,requestAnimFrame:U,cancelAnimFrame:I};function q(){}q.extend=function(o){var n=function(){x(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},c=n.__super__=this.prototype,m=s(c);m.constructor=n,n.prototype=m;for(var b in this)Object.prototype.hasOwnProperty.call(this,b)&&b!=="prototype"&&b!=="__super__"&&(n[b]=this[b]);return o.statics&&a(n,o.statics),o.includes&&(tt(o.includes),a.apply(null,[m].concat(o.includes))),a(m,o),delete m.statics,delete m.includes,m.options&&(m.options=c.options?s(c.options):{},a(m.options,o.options)),m._initHooks=[],m.callInitHooks=function(){if(!this._initHooksCalled){c.callInitHooks&&c.callInitHooks.call(this),this._initHooksCalled=!0;for(var w=0,T=m._initHooks.length;w<T;w++)m._initHooks[w].call(this)}},n},q.include=function(o){var n=this.prototype.options;return a(this.prototype,o),o.options&&(this.prototype.options=n,this.mergeOptions(o.options)),this},q.mergeOptions=function(o){return a(this.prototype.options,o),this},q.addInitHook=function(o){var n=Array.prototype.slice.call(arguments,1),c=typeof o=="function"?o:function(){this[o].apply(this,n)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(c),this};function tt(o){if(!(typeof L>"u"||!L||!L.Mixin)){o=C(o)?o:[o];for(var n=0;n<o.length;n++)o[n]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var rt={on:function(o,n,c){if(typeof o=="object")for(var m in o)this._on(m,o[m],n);else{o=_(o);for(var b=0,w=o.length;b<w;b++)this._on(o[b],n,c)}return this},off:function(o,n,c){if(!arguments.length)delete this._events;else if(typeof o=="object")for(var m in o)this._off(m,o[m],n);else{o=_(o);for(var b=arguments.length===1,w=0,T=o.length;w<T;w++)b?this._off(o[w]):this._off(o[w],n,c)}return this},_on:function(o,n,c,m){if(typeof n!="function"){console.warn("wrong listener type: "+typeof n);return}if(this._listens(o,n,c)===!1){c===this&&(c=void 0);var b={fn:n,ctx:c};m&&(b.once=!0),this._events=this._events||{},this._events[o]=this._events[o]||[],this._events[o].push(b)}},_off:function(o,n,c){var m,b,w;if(this._events&&(m=this._events[o],!!m)){if(arguments.length===1){if(this._firingCount)for(b=0,w=m.length;b<w;b++)m[b].fn=g;delete this._events[o];return}if(typeof n!="function"){console.warn("wrong listener type: "+typeof n);return}var T=this._listens(o,n,c);if(T!==!1){var $=m[T];this._firingCount&&($.fn=g,this._events[o]=m=m.slice()),m.splice(T,1)}}},fire:function(o,n,c){if(!this.listens(o,c))return this;var m=a({},n,{type:o,target:this,sourceTarget:n&&n.sourceTarget||this});if(this._events){var b=this._events[o];if(b){this._firingCount=this._firingCount+1||1;for(var w=0,T=b.length;w<T;w++){var $=b[w],D=$.fn;$.once&&this.off(o,D,$.ctx),D.call($.ctx||this,m)}this._firingCount--}}return c&&this._propagateEvent(m),this},listens:function(o,n,c,m){typeof o!="string"&&console.warn('"string" type argument expected');var b=n;typeof n!="function"&&(m=!!n,b=void 0,c=void 0);var w=this._events&&this._events[o];if(w&&w.length&&this._listens(o,b,c)!==!1)return!0;if(m){for(var T in this._eventParents)if(this._eventParents[T].listens(o,n,c,m))return!0}return!1},_listens:function(o,n,c){if(!this._events)return!1;var m=this._events[o]||[];if(!n)return!!m.length;c===this&&(c=void 0);for(var b=0,w=m.length;b<w;b++)if(m[b].fn===n&&m[b].ctx===c)return b;return!1},once:function(o,n,c){if(typeof o=="object")for(var m in o)this._on(m,o[m],n,!0);else{o=_(o);for(var b=0,w=o.length;b<w;b++)this._on(o[b],n,c,!0)}return this},addEventParent:function(o){return this._eventParents=this._eventParents||{},this._eventParents[d(o)]=o,this},removeEventParent:function(o){return this._eventParents&&delete this._eventParents[d(o)],this},_propagateEvent:function(o){for(var n in this._eventParents)this._eventParents[n].fire(o.type,a({layer:o.target,propagatedFrom:o.target},o),!0)}};rt.addEventListener=rt.on,rt.removeEventListener=rt.clearAllEventListeners=rt.off,rt.addOneTimeEventListener=rt.once,rt.fireEvent=rt.fire,rt.hasEventListeners=rt.listens;var Bt=q.extend(rt);function J(o,n,c){this.x=c?Math.round(o):o,this.y=c?Math.round(n):n}var _t=Math.trunc||function(o){return o>0?Math.floor(o):Math.ceil(o)};J.prototype={clone:function(){return new J(this.x,this.y)},add:function(o){return this.clone()._add(at(o))},_add:function(o){return this.x+=o.x,this.y+=o.y,this},subtract:function(o){return this.clone()._subtract(at(o))},_subtract:function(o){return this.x-=o.x,this.y-=o.y,this},divideBy:function(o){return this.clone()._divideBy(o)},_divideBy:function(o){return this.x/=o,this.y/=o,this},multiplyBy:function(o){return this.clone()._multiplyBy(o)},_multiplyBy:function(o){return this.x*=o,this.y*=o,this},scaleBy:function(o){return new J(this.x*o.x,this.y*o.y)},unscaleBy:function(o){return new J(this.x/o.x,this.y/o.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=_t(this.x),this.y=_t(this.y),this},distanceTo:function(o){o=at(o);var n=o.x-this.x,c=o.y-this.y;return Math.sqrt(n*n+c*c)},equals:function(o){return o=at(o),o.x===this.x&&o.y===this.y},contains:function(o){return o=at(o),Math.abs(o.x)<=Math.abs(this.x)&&Math.abs(o.y)<=Math.abs(this.y)},toString:function(){return"Point("+v(this.x)+", "+v(this.y)+")"}};function at(o,n,c){return o instanceof J?o:C(o)?new J(o[0],o[1]):o==null?o:typeof o=="object"&&"x"in o&&"y"in o?new J(o.x,o.y):new J(o,n,c)}function Rt(o,n){if(o)for(var c=n?[o,n]:o,m=0,b=c.length;m<b;m++)this.extend(c[m])}Rt.prototype={extend:function(o){var n,c;if(!o)return this;if(o instanceof J||typeof o[0]=="number"||"x"in o)n=c=at(o);else if(o=fe(o),n=o.min,c=o.max,!n||!c)return this;return!this.min&&!this.max?(this.min=n.clone(),this.max=c.clone()):(this.min.x=Math.min(n.x,this.min.x),this.max.x=Math.max(c.x,this.max.x),this.min.y=Math.min(n.y,this.min.y),this.max.y=Math.max(c.y,this.max.y)),this},getCenter:function(o){return at((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,o)},getBottomLeft:function(){return at(this.min.x,this.max.y)},getTopRight:function(){return at(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(o){var n,c;return typeof o[0]=="number"||o instanceof J?o=at(o):o=fe(o),o instanceof Rt?(n=o.min,c=o.max):n=c=o,n.x>=this.min.x&&c.x<=this.max.x&&n.y>=this.min.y&&c.y<=this.max.y},intersects:function(o){o=fe(o);var n=this.min,c=this.max,m=o.min,b=o.max,w=b.x>=n.x&&m.x<=c.x,T=b.y>=n.y&&m.y<=c.y;return w&&T},overlaps:function(o){o=fe(o);var n=this.min,c=this.max,m=o.min,b=o.max,w=b.x>n.x&&m.x<c.x,T=b.y>n.y&&m.y<c.y;return w&&T},isValid:function(){return!!(this.min&&this.max)},pad:function(o){var n=this.min,c=this.max,m=Math.abs(n.x-c.x)*o,b=Math.abs(n.y-c.y)*o;return fe(at(n.x-m,n.y-b),at(c.x+m,c.y+b))},equals:function(o){return o?(o=fe(o),this.min.equals(o.getTopLeft())&&this.max.equals(o.getBottomRight())):!1}};function fe(o,n){return!o||o instanceof Rt?o:new Rt(o,n)}function io(o,n){if(o)for(var c=n?[o,n]:o,m=0,b=c.length;m<b;m++)this.extend(c[m])}io.prototype={extend:function(o){var n=this._southWest,c=this._northEast,m,b;if(o instanceof Nt)m=o,b=o;else if(o instanceof io){if(m=o._southWest,b=o._northEast,!m||!b)return this}else return o?this.extend(xt(o)||le(o)):this;return!n&&!c?(this._southWest=new Nt(m.lat,m.lng),this._northEast=new Nt(b.lat,b.lng)):(n.lat=Math.min(m.lat,n.lat),n.lng=Math.min(m.lng,n.lng),c.lat=Math.max(b.lat,c.lat),c.lng=Math.max(b.lng,c.lng)),this},pad:function(o){var n=this._southWest,c=this._northEast,m=Math.abs(n.lat-c.lat)*o,b=Math.abs(n.lng-c.lng)*o;return new io(new Nt(n.lat-m,n.lng-b),new Nt(c.lat+m,c.lng+b))},getCenter:function(){return new Nt((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new Nt(this.getNorth(),this.getWest())},getSouthEast:function(){return new Nt(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(o){typeof o[0]=="number"||o instanceof Nt||"lat"in o?o=xt(o):o=le(o);var n=this._southWest,c=this._northEast,m,b;return o instanceof io?(m=o.getSouthWest(),b=o.getNorthEast()):m=b=o,m.lat>=n.lat&&b.lat<=c.lat&&m.lng>=n.lng&&b.lng<=c.lng},intersects:function(o){o=le(o);var n=this._southWest,c=this._northEast,m=o.getSouthWest(),b=o.getNorthEast(),w=b.lat>=n.lat&&m.lat<=c.lat,T=b.lng>=n.lng&&m.lng<=c.lng;return w&&T},overlaps:function(o){o=le(o);var n=this._southWest,c=this._northEast,m=o.getSouthWest(),b=o.getNorthEast(),w=b.lat>n.lat&&m.lat<c.lat,T=b.lng>n.lng&&m.lng<c.lng;return w&&T},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(o,n){return o?(o=le(o),this._southWest.equals(o.getSouthWest(),n)&&this._northEast.equals(o.getNorthEast(),n)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function le(o,n){return o instanceof io?o:new io(o,n)}function Nt(o,n,c){if(isNaN(o)||isNaN(n))throw new Error("Invalid LatLng object: ("+o+", "+n+")");this.lat=+o,this.lng=+n,c!==void 0&&(this.alt=+c)}Nt.prototype={equals:function(o,n){if(!o)return!1;o=xt(o);var c=Math.max(Math.abs(this.lat-o.lat),Math.abs(this.lng-o.lng));return c<=(n===void 0?1e-9:n)},toString:function(o){return"LatLng("+v(this.lat,o)+", "+v(this.lng,o)+")"},distanceTo:function(o){return Hi.distance(this,xt(o))},wrap:function(){return Hi.wrapLatLng(this)},toBounds:function(o){var n=180*o/40075017,c=n/Math.cos(Math.PI/180*this.lat);return le([this.lat-n,this.lng-c],[this.lat+n,this.lng+c])},clone:function(){return new Nt(this.lat,this.lng,this.alt)}};function xt(o,n,c){return o instanceof Nt?o:C(o)&&typeof o[0]!="object"?o.length===3?new Nt(o[0],o[1],o[2]):o.length===2?new Nt(o[0],o[1]):null:o==null?o:typeof o=="object"&&"lat"in o?new Nt(o.lat,"lng"in o?o.lng:o.lon,o.alt):n===void 0?null:new Nt(o,n,c)}var _i={latLngToPoint:function(o,n){var c=this.projection.project(o),m=this.scale(n);return this.transformation._transform(c,m)},pointToLatLng:function(o,n){var c=this.scale(n),m=this.transformation.untransform(o,c);return this.projection.unproject(m)},project:function(o){return this.projection.project(o)},unproject:function(o){return this.projection.unproject(o)},scale:function(o){return 256*Math.pow(2,o)},zoom:function(o){return Math.log(o/256)/Math.LN2},getProjectedBounds:function(o){if(this.infinite)return null;var n=this.projection.bounds,c=this.scale(o),m=this.transformation.transform(n.min,c),b=this.transformation.transform(n.max,c);return new Rt(m,b)},infinite:!1,wrapLatLng:function(o){var n=this.wrapLng?f(o.lng,this.wrapLng,!0):o.lng,c=this.wrapLat?f(o.lat,this.wrapLat,!0):o.lat,m=o.alt;return new Nt(c,n,m)},wrapLatLngBounds:function(o){var n=o.getCenter(),c=this.wrapLatLng(n),m=n.lat-c.lat,b=n.lng-c.lng;if(m===0&&b===0)return o;var w=o.getSouthWest(),T=o.getNorthEast(),$=new Nt(w.lat-m,w.lng-b),D=new Nt(T.lat-m,T.lng-b);return new io($,D)}},Hi=a({},_i,{wrapLng:[-180,180],R:6371e3,distance:function(o,n){var c=Math.PI/180,m=o.lat*c,b=n.lat*c,w=Math.sin((n.lat-o.lat)*c/2),T=Math.sin((n.lng-o.lng)*c/2),$=w*w+Math.cos(m)*Math.cos(b)*T*T,D=2*Math.atan2(Math.sqrt($),Math.sqrt(1-$));return this.R*D}}),Vd=6378137,sl={R:Vd,MAX_LATITUDE:85.0511287798,project:function(o){var n=Math.PI/180,c=this.MAX_LATITUDE,m=Math.max(Math.min(c,o.lat),-c),b=Math.sin(m*n);return new J(this.R*o.lng*n,this.R*Math.log((1+b)/(1-b))/2)},unproject:function(o){var n=180/Math.PI;return new Nt((2*Math.atan(Math.exp(o.y/this.R))-Math.PI/2)*n,o.x*n/this.R)},bounds:function(){var o=Vd*Math.PI;return new Rt([-o,-o],[o,o])}()};function nl(o,n,c,m){if(C(o)){this._a=o[0],this._b=o[1],this._c=o[2],this._d=o[3];return}this._a=o,this._b=n,this._c=c,this._d=m}nl.prototype={transform:function(o,n){return this._transform(o.clone(),n)},_transform:function(o,n){return n=n||1,o.x=n*(this._a*o.x+this._b),o.y=n*(this._c*o.y+this._d),o},untransform:function(o,n){return n=n||1,new J((o.x/n-this._b)/this._a,(o.y/n-this._d)/this._c)}};function Ma(o,n,c,m){return new nl(o,n,c,m)}var ll=a({},Hi,{code:"EPSG:3857",projection:sl,transformation:function(){var o=.5/(Math.PI*sl.R);return Ma(o,.5,-o,.5)}()}),Xv=a({},ll,{code:"EPSG:900913"});function Hd(o){return document.createElementNS("http://www.w3.org/2000/svg",o)}function Zd(o,n){var c="",m,b,w,T,$,D;for(m=0,w=o.length;m<w;m++){for($=o[m],b=0,T=$.length;b<T;b++)D=$[b],c+=(b?"L":"M")+D.x+" "+D.y;c+=n?st.svg?"z":"x":""}return c||"M0 0"}var cl=document.documentElement.style,Hs="ActiveXObject"in window,Jv=Hs&&!document.addEventListener,Wd="msLaunchUri"in navigator&&!("documentMode"in document),dl=Qo("webkit"),qd=Qo("android"),Gd=Qo("android 2")||Qo("android 3"),Qv=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),t0=qd&&Qo("Google")&&Qv<537&&!("AudioNode"in window),pl=!!window.opera,Yd=!Wd&&Qo("chrome"),Kd=Qo("gecko")&&!dl&&!pl&&!Hs,e0=!Yd&&Qo("safari"),Xd=Qo("phantom"),Jd="OTransition"in cl,o0=navigator.platform.indexOf("Win")===0,Qd=Hs&&"transition"in cl,hl="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!Gd,tp="MozPerspective"in cl,i0=!window.L_DISABLE_3D&&(Qd||hl||tp)&&!Jd&&!Xd,Aa=typeof orientation<"u"||Qo("mobile"),r0=Aa&&dl,a0=Aa&&hl,ep=!window.PointerEvent&&window.MSPointerEvent,op=!!(window.PointerEvent||ep),ip="ontouchstart"in window||!!window.TouchEvent,s0=!window.L_NO_TOUCH&&(ip||op),n0=Aa&&pl,l0=Aa&&Kd,c0=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,d0=function(){var o=!1;try{var n=Object.defineProperty({},"passive",{get:function(){o=!0}});window.addEventListener("testPassiveEventSupport",g,n),window.removeEventListener("testPassiveEventSupport",g,n)}catch{}return o}(),p0=function(){return!!document.createElement("canvas").getContext}(),ul=!!(document.createElementNS&&Hd("svg").createSVGRect),h0=!!ul&&function(){var o=document.createElement("div");return o.innerHTML="<svg/>",(o.firstChild&&o.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"}(),u0=!ul&&function(){try{var o=document.createElement("div");o.innerHTML='<v:shape adj="1"/>';var n=o.firstChild;return n.style.behavior="url(#default#VML)",n&&typeof n.adj=="object"}catch{return!1}}(),m0=navigator.platform.indexOf("Mac")===0,f0=navigator.platform.indexOf("Linux")===0;function Qo(o){return navigator.userAgent.toLowerCase().indexOf(o)>=0}var st={ie:Hs,ielt9:Jv,edge:Wd,webkit:dl,android:qd,android23:Gd,androidStock:t0,opera:pl,chrome:Yd,gecko:Kd,safari:e0,phantom:Xd,opera12:Jd,win:o0,ie3d:Qd,webkit3d:hl,gecko3d:tp,any3d:i0,mobile:Aa,mobileWebkit:r0,mobileWebkit3d:a0,msPointer:ep,pointer:op,touch:s0,touchNative:ip,mobileOpera:n0,mobileGecko:l0,retina:c0,passiveEvents:d0,canvas:p0,svg:ul,vml:u0,inlineSvg:h0,mac:m0,linux:f0},rp=st.msPointer?"MSPointerDown":"pointerdown",ap=st.msPointer?"MSPointerMove":"pointermove",sp=st.msPointer?"MSPointerUp":"pointerup",np=st.msPointer?"MSPointerCancel":"pointercancel",ml={touchstart:rp,touchmove:ap,touchend:sp,touchcancel:np},lp={touchstart:_0,touchmove:Zs,touchend:Zs,touchcancel:Zs},Wr={},cp=!1;function g0(o,n,c){return n==="touchstart"&&w0(),lp[n]?(c=lp[n].bind(this,c),o.addEventListener(ml[n],c,!1),c):(console.warn("wrong event specified:",n),g)}function b0(o,n,c){if(!ml[n]){console.warn("wrong event specified:",n);return}o.removeEventListener(ml[n],c,!1)}function v0(o){Wr[o.pointerId]=o}function y0(o){Wr[o.pointerId]&&(Wr[o.pointerId]=o)}function dp(o){delete Wr[o.pointerId]}function w0(){cp||(document.addEventListener(rp,v0,!0),document.addEventListener(ap,y0,!0),document.addEventListener(sp,dp,!0),document.addEventListener(np,dp,!0),cp=!0)}function Zs(o,n){if(n.pointerType!==(n.MSPOINTER_TYPE_MOUSE||"mouse")){n.touches=[];for(var c in Wr)n.touches.push(Wr[c]);n.changedTouches=[n],o(n)}}function _0(o,n){n.MSPOINTER_TYPE_TOUCH&&n.pointerType===n.MSPOINTER_TYPE_TOUCH&&Oe(n),Zs(o,n)}function x0(o){var n={},c,m;for(m in o)c=o[m],n[m]=c&&c.bind?c.bind(o):c;return o=n,n.type="dblclick",n.detail=2,n.isTrusted=!1,n._simulated=!0,n}var k0=200;function C0(o,n){o.addEventListener("dblclick",n);var c=0,m;function b(w){if(w.detail!==1){m=w.detail;return}if(!(w.pointerType==="mouse"||w.sourceCapabilities&&!w.sourceCapabilities.firesTouchEvents)){var T=fp(w);if(!(T.some(function(D){return D instanceof HTMLLabelElement&&D.attributes.for})&&!T.some(function(D){return D instanceof HTMLInputElement||D instanceof HTMLSelectElement}))){var $=Date.now();$-c<=k0?(m++,m===2&&n(x0(w))):m=1,c=$}}}return o.addEventListener("click",b),{dblclick:n,simDblclick:b}}function L0(o,n){o.removeEventListener("dblclick",n.dblclick),o.removeEventListener("click",n.simDblclick)}var fl=Gs(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),$a=Gs(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),pp=$a==="webkitTransition"||$a==="OTransition"?$a+"End":"transitionend";function hp(o){return typeof o=="string"?document.getElementById(o):o}function Ia(o,n){var c=o.style[n]||o.currentStyle&&o.currentStyle[n];if((!c||c==="auto")&&document.defaultView){var m=document.defaultView.getComputedStyle(o,null);c=m?m[n]:null}return c==="auto"?null:c}function Et(o,n,c){var m=document.createElement(o);return m.className=n||"",c&&c.appendChild(m),m}function Jt(o){var n=o.parentNode;n&&n.removeChild(o)}function Ws(o){for(;o.firstChild;)o.removeChild(o.firstChild)}function qr(o){var n=o.parentNode;n&&n.lastChild!==o&&n.appendChild(o)}function Gr(o){var n=o.parentNode;n&&n.firstChild!==o&&n.insertBefore(o,n.firstChild)}function gl(o,n){if(o.classList!==void 0)return o.classList.contains(n);var c=qs(o);return c.length>0&&new RegExp("(^|\\s)"+n+"(\\s|$)").test(c)}function mt(o,n){if(o.classList!==void 0)for(var c=_(n),m=0,b=c.length;m<b;m++)o.classList.add(c[m]);else if(!gl(o,n)){var w=qs(o);bl(o,(w?w+" ":"")+n)}}function ie(o,n){o.classList!==void 0?o.classList.remove(n):bl(o,y((" "+qs(o)+" ").replace(" "+n+" "," ")))}function bl(o,n){o.className.baseVal===void 0?o.className=n:o.className.baseVal=n}function qs(o){return o.correspondingElement&&(o=o.correspondingElement),o.className.baseVal===void 0?o.className:o.className.baseVal}function Oo(o,n){"opacity"in o.style?o.style.opacity=n:"filter"in o.style&&z0(o,n)}function z0(o,n){var c=!1,m="DXImageTransform.Microsoft.Alpha";try{c=o.filters.item(m)}catch{if(n===1)return}n=Math.round(n*100),c?(c.Enabled=n!==100,c.Opacity=n):o.style.filter+=" progid:"+m+"(opacity="+n+")"}function Gs(o){for(var n=document.documentElement.style,c=0;c<o.length;c++)if(o[c]in n)return o[c];return!1}function dr(o,n,c){var m=n||new J(0,0);o.style[fl]=(st.ie3d?"translate("+m.x+"px,"+m.y+"px)":"translate3d("+m.x+"px,"+m.y+"px,0)")+(c?" scale("+c+")":"")}function ce(o,n){o._leaflet_pos=n,st.any3d?dr(o,n):(o.style.left=n.x+"px",o.style.top=n.y+"px")}function pr(o){return o._leaflet_pos||new J(0,0)}var Da,Ba,vl;if("onselectstart"in document)Da=function(){pt(window,"selectstart",Oe)},Ba=function(){Wt(window,"selectstart",Oe)};else{var Ra=Gs(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);Da=function(){if(Ra){var o=document.documentElement.style;vl=o[Ra],o[Ra]="none"}},Ba=function(){Ra&&(document.documentElement.style[Ra]=vl,vl=void 0)}}function yl(){pt(window,"dragstart",Oe)}function wl(){Wt(window,"dragstart",Oe)}var Ys,_l;function xl(o){for(;o.tabIndex===-1;)o=o.parentNode;o.style&&(Ks(),Ys=o,_l=o.style.outlineStyle,o.style.outlineStyle="none",pt(window,"keydown",Ks))}function Ks(){Ys&&(Ys.style.outlineStyle=_l,Ys=void 0,_l=void 0,Wt(window,"keydown",Ks))}function up(o){do o=o.parentNode;while((!o.offsetWidth||!o.offsetHeight)&&o!==document.body);return o}function kl(o){var n=o.getBoundingClientRect();return{x:n.width/o.offsetWidth||1,y:n.height/o.offsetHeight||1,boundingClientRect:n}}var S0={__proto__:null,TRANSFORM:fl,TRANSITION:$a,TRANSITION_END:pp,get:hp,getStyle:Ia,create:Et,remove:Jt,empty:Ws,toFront:qr,toBack:Gr,hasClass:gl,addClass:mt,removeClass:ie,setClass:bl,getClass:qs,setOpacity:Oo,testProp:Gs,setTransform:dr,setPosition:ce,getPosition:pr,get disableTextSelection(){return Da},get enableTextSelection(){return Ba},disableImageDrag:yl,enableImageDrag:wl,preventOutline:xl,restoreOutline:Ks,getSizedParentNode:up,getScale:kl};function pt(o,n,c,m){if(n&&typeof n=="object")for(var b in n)Ll(o,b,n[b],c);else{n=_(n);for(var w=0,T=n.length;w<T;w++)Ll(o,n[w],c,m)}return this}var ti="_leaflet_events";function Wt(o,n,c,m){if(arguments.length===1)mp(o),delete o[ti];else if(n&&typeof n=="object")for(var b in n)zl(o,b,n[b],c);else if(n=_(n),arguments.length===2)mp(o,function($){return z(n,$)!==-1});else for(var w=0,T=n.length;w<T;w++)zl(o,n[w],c,m);return this}function mp(o,n){for(var c in o[ti]){var m=c.split(/\d/)[0];(!n||n(m))&&zl(o,m,null,null,c)}}var Cl={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function Ll(o,n,c,m){var b=n+d(c)+(m?"_"+d(m):"");if(o[ti]&&o[ti][b])return this;var w=function($){return c.call(m||o,$||window.event)},T=w;!st.touchNative&&st.pointer&&n.indexOf("touch")===0?w=g0(o,n,w):st.touch&&n==="dblclick"?w=C0(o,w):"addEventListener"in o?n==="touchstart"||n==="touchmove"||n==="wheel"||n==="mousewheel"?o.addEventListener(Cl[n]||n,w,st.passiveEvents?{passive:!1}:!1):n==="mouseenter"||n==="mouseleave"?(w=function($){$=$||window.event,Tl(o,$)&&T($)},o.addEventListener(Cl[n],w,!1)):o.addEventListener(n,T,!1):o.attachEvent("on"+n,w),o[ti]=o[ti]||{},o[ti][b]=w}function zl(o,n,c,m,b){b=b||n+d(c)+(m?"_"+d(m):"");var w=o[ti]&&o[ti][b];if(!w)return this;!st.touchNative&&st.pointer&&n.indexOf("touch")===0?b0(o,n,w):st.touch&&n==="dblclick"?L0(o,w):"removeEventListener"in o?o.removeEventListener(Cl[n]||n,w,!1):o.detachEvent("on"+n,w),o[ti][b]=null}function hr(o){return o.stopPropagation?o.stopPropagation():o.originalEvent?o.originalEvent._stopped=!0:o.cancelBubble=!0,this}function Sl(o){return Ll(o,"wheel",hr),this}function Fa(o){return pt(o,"mousedown touchstart dblclick contextmenu",hr),o._leaflet_disable_click=!0,this}function Oe(o){return o.preventDefault?o.preventDefault():o.returnValue=!1,this}function ur(o){return Oe(o),hr(o),this}function fp(o){if(o.composedPath)return o.composedPath();for(var n=[],c=o.target;c;)n.push(c),c=c.parentNode;return n}function gp(o,n){if(!n)return new J(o.clientX,o.clientY);var c=kl(n),m=c.boundingClientRect;return new J((o.clientX-m.left)/c.x-n.clientLeft,(o.clientY-m.top)/c.y-n.clientTop)}var T0=st.linux&&st.chrome?window.devicePixelRatio:st.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function bp(o){return st.edge?o.wheelDeltaY/2:o.deltaY&&o.deltaMode===0?-o.deltaY/T0:o.deltaY&&o.deltaMode===1?-o.deltaY*20:o.deltaY&&o.deltaMode===2?-o.deltaY*60:o.deltaX||o.deltaZ?0:o.wheelDelta?(o.wheelDeltaY||o.wheelDelta)/2:o.detail&&Math.abs(o.detail)<32765?-o.detail*20:o.detail?o.detail/-32765*60:0}function Tl(o,n){var c=n.relatedTarget;if(!c)return!0;try{for(;c&&c!==o;)c=c.parentNode}catch{return!1}return c!==o}var P0={__proto__:null,on:pt,off:Wt,stopPropagation:hr,disableScrollPropagation:Sl,disableClickPropagation:Fa,preventDefault:Oe,stop:ur,getPropagationPath:fp,getMousePosition:gp,getWheelDelta:bp,isExternalTarget:Tl,addListener:pt,removeListener:Wt},vp=Bt.extend({run:function(o,n,c,m){this.stop(),this._el=o,this._inProgress=!0,this._duration=c||.25,this._easeOutPower=1/Math.max(m||.5,.2),this._startPos=pr(o),this._offset=n.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=U(this._animate,this),this._step()},_step:function(o){var n=+new Date-this._startTime,c=this._duration*1e3;n<c?this._runFrame(this._easeOut(n/c),o):(this._runFrame(1),this._complete())},_runFrame:function(o,n){var c=this._startPos.add(this._offset.multiplyBy(o));n&&c._round(),ce(this._el,c),this.fire("step")},_complete:function(){I(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(o){return 1-Math.pow(1-o,this._easeOutPower)}}),kt=Bt.extend({options:{crs:ll,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(o,n){n=x(this,n),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(o),this._initLayout(),this._onResize=l(this._onResize,this),this._initEvents(),n.maxBounds&&this.setMaxBounds(n.maxBounds),n.zoom!==void 0&&(this._zoom=this._limitZoom(n.zoom)),n.center&&n.zoom!==void 0&&this.setView(xt(n.center),n.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=$a&&st.any3d&&!st.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),pt(this._proxy,pp,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(o,n,c){if(n=n===void 0?this._zoom:this._limitZoom(n),o=this._limitCenter(xt(o),n,this.options.maxBounds),c=c||{},this._stop(),this._loaded&&!c.reset&&c!==!0){c.animate!==void 0&&(c.zoom=a({animate:c.animate},c.zoom),c.pan=a({animate:c.animate,duration:c.duration},c.pan));var m=this._zoom!==n?this._tryAnimatedZoom&&this._tryAnimatedZoom(o,n,c.zoom):this._tryAnimatedPan(o,c.pan);if(m)return clearTimeout(this._sizeTimer),this}return this._resetView(o,n,c.pan&&c.pan.noMoveStart),this},setZoom:function(o,n){return this._loaded?this.setView(this.getCenter(),o,{zoom:n}):(this._zoom=o,this)},zoomIn:function(o,n){return o=o||(st.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+o,n)},zoomOut:function(o,n){return o=o||(st.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-o,n)},setZoomAround:function(o,n,c){var m=this.getZoomScale(n),b=this.getSize().divideBy(2),w=o instanceof J?o:this.latLngToContainerPoint(o),T=w.subtract(b).multiplyBy(1-1/m),$=this.containerPointToLatLng(b.add(T));return this.setView($,n,{zoom:c})},_getBoundsCenterZoom:function(o,n){n=n||{},o=o.getBounds?o.getBounds():le(o);var c=at(n.paddingTopLeft||n.padding||[0,0]),m=at(n.paddingBottomRight||n.padding||[0,0]),b=this.getBoundsZoom(o,!1,c.add(m));if(b=typeof n.maxZoom=="number"?Math.min(n.maxZoom,b):b,b===1/0)return{center:o.getCenter(),zoom:b};var w=m.subtract(c).divideBy(2),T=this.project(o.getSouthWest(),b),$=this.project(o.getNorthEast(),b),D=this.unproject(T.add($).divideBy(2).add(w),b);return{center:D,zoom:b}},fitBounds:function(o,n){if(o=le(o),!o.isValid())throw new Error("Bounds are not valid.");var c=this._getBoundsCenterZoom(o,n);return this.setView(c.center,c.zoom,n)},fitWorld:function(o){return this.fitBounds([[-90,-180],[90,180]],o)},panTo:function(o,n){return this.setView(o,this._zoom,{pan:n})},panBy:function(o,n){if(o=at(o).round(),n=n||{},!o.x&&!o.y)return this.fire("moveend");if(n.animate!==!0&&!this.getSize().contains(o))return this._resetView(this.unproject(this.project(this.getCenter()).add(o)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new vp,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),n.noMoveStart||this.fire("movestart"),n.animate!==!1){mt(this._mapPane,"leaflet-pan-anim");var c=this._getMapPanePos().subtract(o).round();this._panAnim.run(this._mapPane,c,n.duration||.25,n.easeLinearity)}else this._rawPanBy(o),this.fire("move").fire("moveend");return this},flyTo:function(o,n,c){if(c=c||{},c.animate===!1||!st.any3d)return this.setView(o,n,c);this._stop();var m=this.project(this.getCenter()),b=this.project(o),w=this.getSize(),T=this._zoom;o=xt(o),n=n===void 0?T:n;var $=Math.max(w.x,w.y),D=$*this.getZoomScale(T,n),V=b.distanceTo(m)||1,ot=1.42,ct=ot*ot;function bt(de){var cn=de?-1:1,by=de?D:$,vy=D*D-$*$+cn*ct*ct*V*V,yy=2*by*ct*V,Fl=vy/yy,Jp=Math.sqrt(Fl*Fl+1)-Fl,wy=Jp<1e-9?-18:Math.log(Jp);return wy}function Ye(de){return(Math.exp(de)-Math.exp(-de))/2}function Ce(de){return(Math.exp(de)+Math.exp(-de))/2}function Ao(de){return Ye(de)/Ce(de)}var ro=bt(0);function ta(de){return $*(Ce(ro)/Ce(ro+ot*de))}function uy(de){return $*(Ce(ro)*Ao(ro+ot*de)-Ye(ro))/ct}function my(de){return 1-Math.pow(1-de,1.5)}var fy=Date.now(),Kp=(bt(1)-ro)/ot,gy=c.duration?1e3*c.duration:1e3*Kp*.8;function Xp(){var de=(Date.now()-fy)/gy,cn=my(de)*Kp;de<=1?(this._flyToFrame=U(Xp,this),this._move(this.unproject(m.add(b.subtract(m).multiplyBy(uy(cn)/V)),T),this.getScaleZoom($/ta(cn),T),{flyTo:!0})):this._move(o,n)._moveEnd(!0)}return this._moveStart(!0,c.noMoveStart),Xp.call(this),this},flyToBounds:function(o,n){var c=this._getBoundsCenterZoom(o,n);return this.flyTo(c.center,c.zoom,n)},setMaxBounds:function(o){return o=le(o),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),o.isValid()?(this.options.maxBounds=o,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(o){var n=this.options.minZoom;return this.options.minZoom=o,this._loaded&&n!==o&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(o):this},setMaxZoom:function(o){var n=this.options.maxZoom;return this.options.maxZoom=o,this._loaded&&n!==o&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(o):this},panInsideBounds:function(o,n){this._enforcingBounds=!0;var c=this.getCenter(),m=this._limitCenter(c,this._zoom,le(o));return c.equals(m)||this.panTo(m,n),this._enforcingBounds=!1,this},panInside:function(o,n){n=n||{};var c=at(n.paddingTopLeft||n.padding||[0,0]),m=at(n.paddingBottomRight||n.padding||[0,0]),b=this.project(this.getCenter()),w=this.project(o),T=this.getPixelBounds(),$=fe([T.min.add(c),T.max.subtract(m)]),D=$.getSize();if(!$.contains(w)){this._enforcingBounds=!0;var V=w.subtract($.getCenter()),ot=$.extend(w).getSize().subtract(D);b.x+=V.x<0?-ot.x:ot.x,b.y+=V.y<0?-ot.y:ot.y,this.panTo(this.unproject(b),n),this._enforcingBounds=!1}return this},invalidateSize:function(o){if(!this._loaded)return this;o=a({animate:!1,pan:!0},o===!0?{animate:!0}:o);var n=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var c=this.getSize(),m=n.divideBy(2).round(),b=c.divideBy(2).round(),w=m.subtract(b);return!w.x&&!w.y?this:(o.animate&&o.pan?this.panBy(w):(o.pan&&this._rawPanBy(w),this.fire("move"),o.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(l(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:n,newSize:c}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(o){if(o=this._locateOptions=a({timeout:1e4,watch:!1},o),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var n=l(this._handleGeolocationResponse,this),c=l(this._handleGeolocationError,this);return o.watch?this._locationWatchId=navigator.geolocation.watchPosition(n,c,o):navigator.geolocation.getCurrentPosition(n,c,o),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(o){if(this._container._leaflet_id){var n=o.code,c=o.message||(n===1?"permission denied":n===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:n,message:"Geolocation error: "+c+"."})}},_handleGeolocationResponse:function(o){if(this._container._leaflet_id){var n=o.coords.latitude,c=o.coords.longitude,m=new Nt(n,c),b=m.toBounds(o.coords.accuracy*2),w=this._locateOptions;if(w.setView){var T=this.getBoundsZoom(b);this.setView(m,w.maxZoom?Math.min(T,w.maxZoom):T)}var $={latlng:m,bounds:b,timestamp:o.timestamp};for(var D in o.coords)typeof o.coords[D]=="number"&&($[D]=o.coords[D]);this.fire("locationfound",$)}},addHandler:function(o,n){if(!n)return this;var c=this[o]=new n(this);return this._handlers.push(c),this.options[o]&&c.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),Jt(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(I(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var o;for(o in this._layers)this._layers[o].remove();for(o in this._panes)Jt(this._panes[o]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(o,n){var c="leaflet-pane"+(o?" leaflet-"+o.replace("Pane","")+"-pane":""),m=Et("div",c,n||this._mapPane);return o&&(this._panes[o]=m),m},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var o=this.getPixelBounds(),n=this.unproject(o.getBottomLeft()),c=this.unproject(o.getTopRight());return new io(n,c)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(o,n,c){o=le(o),c=at(c||[0,0]);var m=this.getZoom()||0,b=this.getMinZoom(),w=this.getMaxZoom(),T=o.getNorthWest(),$=o.getSouthEast(),D=this.getSize().subtract(c),V=fe(this.project($,m),this.project(T,m)).getSize(),ot=st.any3d?this.options.zoomSnap:1,ct=D.x/V.x,bt=D.y/V.y,Ye=n?Math.max(ct,bt):Math.min(ct,bt);return m=this.getScaleZoom(Ye,m),ot&&(m=Math.round(m/(ot/100))*(ot/100),m=n?Math.ceil(m/ot)*ot:Math.floor(m/ot)*ot),Math.max(b,Math.min(w,m))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new J(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(o,n){var c=this._getTopLeftPoint(o,n);return new Rt(c,c.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(o){return this.options.crs.getProjectedBounds(o===void 0?this.getZoom():o)},getPane:function(o){return typeof o=="string"?this._panes[o]:o},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(o,n){var c=this.options.crs;return n=n===void 0?this._zoom:n,c.scale(o)/c.scale(n)},getScaleZoom:function(o,n){var c=this.options.crs;n=n===void 0?this._zoom:n;var m=c.zoom(o*c.scale(n));return isNaN(m)?1/0:m},project:function(o,n){return n=n===void 0?this._zoom:n,this.options.crs.latLngToPoint(xt(o),n)},unproject:function(o,n){return n=n===void 0?this._zoom:n,this.options.crs.pointToLatLng(at(o),n)},layerPointToLatLng:function(o){var n=at(o).add(this.getPixelOrigin());return this.unproject(n)},latLngToLayerPoint:function(o){var n=this.project(xt(o))._round();return n._subtract(this.getPixelOrigin())},wrapLatLng:function(o){return this.options.crs.wrapLatLng(xt(o))},wrapLatLngBounds:function(o){return this.options.crs.wrapLatLngBounds(le(o))},distance:function(o,n){return this.options.crs.distance(xt(o),xt(n))},containerPointToLayerPoint:function(o){return at(o).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(o){return at(o).add(this._getMapPanePos())},containerPointToLatLng:function(o){var n=this.containerPointToLayerPoint(at(o));return this.layerPointToLatLng(n)},latLngToContainerPoint:function(o){return this.layerPointToContainerPoint(this.latLngToLayerPoint(xt(o)))},mouseEventToContainerPoint:function(o){return gp(o,this._container)},mouseEventToLayerPoint:function(o){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(o))},mouseEventToLatLng:function(o){return this.layerPointToLatLng(this.mouseEventToLayerPoint(o))},_initContainer:function(o){var n=this._container=hp(o);if(n){if(n._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");pt(n,"scroll",this._onScroll,this),this._containerId=d(n)},_initLayout:function(){var o=this._container;this._fadeAnimated=this.options.fadeAnimation&&st.any3d,mt(o,"leaflet-container"+(st.touch?" leaflet-touch":"")+(st.retina?" leaflet-retina":"")+(st.ielt9?" leaflet-oldie":"")+(st.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var n=Ia(o,"position");n!=="absolute"&&n!=="relative"&&n!=="fixed"&&n!=="sticky"&&(o.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var o=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),ce(this._mapPane,new J(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(mt(o.markerPane,"leaflet-zoom-hide"),mt(o.shadowPane,"leaflet-zoom-hide"))},_resetView:function(o,n,c){ce(this._mapPane,new J(0,0));var m=!this._loaded;this._loaded=!0,n=this._limitZoom(n),this.fire("viewprereset");var b=this._zoom!==n;this._moveStart(b,c)._move(o,n)._moveEnd(b),this.fire("viewreset"),m&&this.fire("load")},_moveStart:function(o,n){return o&&this.fire("zoomstart"),n||this.fire("movestart"),this},_move:function(o,n,c,m){n===void 0&&(n=this._zoom);var b=this._zoom!==n;return this._zoom=n,this._lastCenter=o,this._pixelOrigin=this._getNewPixelOrigin(o),m?c&&c.pinch&&this.fire("zoom",c):((b||c&&c.pinch)&&this.fire("zoom",c),this.fire("move",c)),this},_moveEnd:function(o){return o&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return I(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(o){ce(this._mapPane,this._getMapPanePos().subtract(o))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(o){this._targets={},this._targets[d(this._container)]=this;var n=o?Wt:pt;n(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&n(window,"resize",this._onResize,this),st.any3d&&this.options.transform3DLimit&&(o?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){I(this._resizeRequest),this._resizeRequest=U(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var o=this._getMapPanePos();Math.max(Math.abs(o.x),Math.abs(o.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(o,n){for(var c=[],m,b=n==="mouseout"||n==="mouseover",w=o.target||o.srcElement,T=!1;w;){if(m=this._targets[d(w)],m&&(n==="click"||n==="preclick")&&this._draggableMoved(m)){T=!0;break}if(m&&m.listens(n,!0)&&(b&&!Tl(w,o)||(c.push(m),b))||w===this._container)break;w=w.parentNode}return!c.length&&!T&&!b&&this.listens(n,!0)&&(c=[this]),c},_isClickDisabled:function(o){for(;o&&o!==this._container;){if(o._leaflet_disable_click)return!0;o=o.parentNode}},_handleDOMEvent:function(o){var n=o.target||o.srcElement;if(!(!this._loaded||n._leaflet_disable_events||o.type==="click"&&this._isClickDisabled(n))){var c=o.type;c==="mousedown"&&xl(n),this._fireDOMEvent(o,c)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(o,n,c){if(o.type==="click"){var m=a({},o);m.type="preclick",this._fireDOMEvent(m,m.type,c)}var b=this._findEventTargets(o,n);if(c){for(var w=[],T=0;T<c.length;T++)c[T].listens(n,!0)&&w.push(c[T]);b=w.concat(b)}if(b.length){n==="contextmenu"&&Oe(o);var $=b[0],D={originalEvent:o};if(o.type!=="keypress"&&o.type!=="keydown"&&o.type!=="keyup"){var V=$.getLatLng&&(!$._radius||$._radius<=10);D.containerPoint=V?this.latLngToContainerPoint($.getLatLng()):this.mouseEventToContainerPoint(o),D.layerPoint=this.containerPointToLayerPoint(D.containerPoint),D.latlng=V?$.getLatLng():this.layerPointToLatLng(D.layerPoint)}for(T=0;T<b.length;T++)if(b[T].fire(n,D,!0),D.originalEvent._stopped||b[T].options.bubblingMouseEvents===!1&&z(this._mouseEvents,n)!==-1)return}},_draggableMoved:function(o){return o=o.dragging&&o.dragging.enabled()?o:this,o.dragging&&o.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var o=0,n=this._handlers.length;o<n;o++)this._handlers[o].disable()},whenReady:function(o,n){return this._loaded?o.call(n||this,{target:this}):this.on("load",o,n),this},_getMapPanePos:function(){return pr(this._mapPane)||new J(0,0)},_moved:function(){var o=this._getMapPanePos();return o&&!o.equals([0,0])},_getTopLeftPoint:function(o,n){var c=o&&n!==void 0?this._getNewPixelOrigin(o,n):this.getPixelOrigin();return c.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(o,n){var c=this.getSize()._divideBy(2);return this.project(o,n)._subtract(c)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(o,n,c){var m=this._getNewPixelOrigin(c,n);return this.project(o,n)._subtract(m)},_latLngBoundsToNewLayerBounds:function(o,n,c){var m=this._getNewPixelOrigin(c,n);return fe([this.project(o.getSouthWest(),n)._subtract(m),this.project(o.getNorthWest(),n)._subtract(m),this.project(o.getSouthEast(),n)._subtract(m),this.project(o.getNorthEast(),n)._subtract(m)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(o){return this.latLngToLayerPoint(o).subtract(this._getCenterLayerPoint())},_limitCenter:function(o,n,c){if(!c)return o;var m=this.project(o,n),b=this.getSize().divideBy(2),w=new Rt(m.subtract(b),m.add(b)),T=this._getBoundsOffset(w,c,n);return Math.abs(T.x)<=1&&Math.abs(T.y)<=1?o:this.unproject(m.add(T),n)},_limitOffset:function(o,n){if(!n)return o;var c=this.getPixelBounds(),m=new Rt(c.min.add(o),c.max.add(o));return o.add(this._getBoundsOffset(m,n))},_getBoundsOffset:function(o,n,c){var m=fe(this.project(n.getNorthEast(),c),this.project(n.getSouthWest(),c)),b=m.min.subtract(o.min),w=m.max.subtract(o.max),T=this._rebound(b.x,-w.x),$=this._rebound(b.y,-w.y);return new J(T,$)},_rebound:function(o,n){return o+n>0?Math.round(o-n)/2:Math.max(0,Math.ceil(o))-Math.max(0,Math.floor(n))},_limitZoom:function(o){var n=this.getMinZoom(),c=this.getMaxZoom(),m=st.any3d?this.options.zoomSnap:1;return m&&(o=Math.round(o/m)*m),Math.max(n,Math.min(c,o))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){ie(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(o,n){var c=this._getCenterOffset(o)._trunc();return(n&&n.animate)!==!0&&!this.getSize().contains(c)?!1:(this.panBy(c,n),!0)},_createAnimProxy:function(){var o=this._proxy=Et("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(o),this.on("zoomanim",function(n){var c=fl,m=this._proxy.style[c];dr(this._proxy,this.project(n.center,n.zoom),this.getZoomScale(n.zoom,1)),m===this._proxy.style[c]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){Jt(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var o=this.getCenter(),n=this.getZoom();dr(this._proxy,this.project(o,n),this.getZoomScale(n,1))},_catchTransitionEnd:function(o){this._animatingZoom&&o.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(o,n,c){if(this._animatingZoom)return!0;if(c=c||{},!this._zoomAnimated||c.animate===!1||this._nothingToAnimate()||Math.abs(n-this._zoom)>this.options.zoomAnimationThreshold)return!1;var m=this.getZoomScale(n),b=this._getCenterOffset(o)._divideBy(1-1/m);return c.animate!==!0&&!this.getSize().contains(b)?!1:(U(function(){this._moveStart(!0,c.noMoveStart||!1)._animateZoom(o,n,!0)},this),!0)},_animateZoom:function(o,n,c,m){this._mapPane&&(c&&(this._animatingZoom=!0,this._animateToCenter=o,this._animateToZoom=n,mt(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:o,zoom:n,noUpdate:m}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(l(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&ie(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function E0(o,n){return new kt(o,n)}var Uo=q.extend({options:{position:"topright"},initialize:function(o){x(this,o)},getPosition:function(){return this.options.position},setPosition:function(o){var n=this._map;return n&&n.removeControl(this),this.options.position=o,n&&n.addControl(this),this},getContainer:function(){return this._container},addTo:function(o){this.remove(),this._map=o;var n=this._container=this.onAdd(o),c=this.getPosition(),m=o._controlCorners[c];return mt(n,"leaflet-control"),c.indexOf("bottom")!==-1?m.insertBefore(n,m.firstChild):m.appendChild(n),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(Jt(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(o){this._map&&o&&o.screenX>0&&o.screenY>0&&this._map.getContainer().focus()}}),Na=function(o){return new Uo(o)};kt.include({addControl:function(o){return o.addTo(this),this},removeControl:function(o){return o.remove(),this},_initControlPos:function(){var o=this._controlCorners={},n="leaflet-",c=this._controlContainer=Et("div",n+"control-container",this._container);function m(b,w){var T=n+b+" "+n+w;o[b+w]=Et("div",T,c)}m("top","left"),m("top","right"),m("bottom","left"),m("bottom","right")},_clearControlPos:function(){for(var o in this._controlCorners)Jt(this._controlCorners[o]);Jt(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var yp=Uo.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(o,n,c,m){return c<m?-1:m<c?1:0}},initialize:function(o,n,c){x(this,c),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var m in o)this._addLayer(o[m],m);for(m in n)this._addLayer(n[m],m,!0)},onAdd:function(o){this._initLayout(),this._update(),this._map=o,o.on("zoomend",this._checkDisabledLayers,this);for(var n=0;n<this._layers.length;n++)this._layers[n].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(o){return Uo.prototype.addTo.call(this,o),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var o=0;o<this._layers.length;o++)this._layers[o].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(o,n){return this._addLayer(o,n),this._map?this._update():this},addOverlay:function(o,n){return this._addLayer(o,n,!0),this._map?this._update():this},removeLayer:function(o){o.off("add remove",this._onLayerChange,this);var n=this._getLayer(d(o));return n&&this._layers.splice(this._layers.indexOf(n),1),this._map?this._update():this},expand:function(){mt(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var o=this._map.getSize().y-(this._container.offsetTop+50);return o<this._section.clientHeight?(mt(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=o+"px"):ie(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return ie(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var o="leaflet-control-layers",n=this._container=Et("div",o),c=this.options.collapsed;n.setAttribute("aria-haspopup",!0),Fa(n),Sl(n);var m=this._section=Et("section",o+"-list");c&&(this._map.on("click",this.collapse,this),pt(n,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var b=this._layersLink=Et("a",o+"-toggle",n);b.href="#",b.title="Layers",b.setAttribute("role","button"),pt(b,{keydown:function(w){w.keyCode===13&&this._expandSafely()},click:function(w){Oe(w),this._expandSafely()}},this),c||this.expand(),this._baseLayersList=Et("div",o+"-base",m),this._separator=Et("div",o+"-separator",m),this._overlaysList=Et("div",o+"-overlays",m),n.appendChild(m)},_getLayer:function(o){for(var n=0;n<this._layers.length;n++)if(this._layers[n]&&d(this._layers[n].layer)===o)return this._layers[n]},_addLayer:function(o,n,c){this._map&&o.on("add remove",this._onLayerChange,this),this._layers.push({layer:o,name:n,overlay:c}),this.options.sortLayers&&this._layers.sort(l(function(m,b){return this.options.sortFunction(m.layer,b.layer,m.name,b.name)},this)),this.options.autoZIndex&&o.setZIndex&&(this._lastZIndex++,o.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;Ws(this._baseLayersList),Ws(this._overlaysList),this._layerControlInputs=[];var o,n,c,m,b=0;for(c=0;c<this._layers.length;c++)m=this._layers[c],this._addItem(m),n=n||m.overlay,o=o||!m.overlay,b+=m.overlay?0:1;return this.options.hideSingleBase&&(o=o&&b>1,this._baseLayersList.style.display=o?"":"none"),this._separator.style.display=n&&o?"":"none",this},_onLayerChange:function(o){this._handlingClick||this._update();var n=this._getLayer(d(o.target)),c=n.overlay?o.type==="add"?"overlayadd":"overlayremove":o.type==="add"?"baselayerchange":null;c&&this._map.fire(c,n)},_createRadioElement:function(o,n){var c='<input type="radio" class="leaflet-control-layers-selector" name="'+o+'"'+(n?' checked="checked"':"")+"/>",m=document.createElement("div");return m.innerHTML=c,m.firstChild},_addItem:function(o){var n=document.createElement("label"),c=this._map.hasLayer(o.layer),m;o.overlay?(m=document.createElement("input"),m.type="checkbox",m.className="leaflet-control-layers-selector",m.defaultChecked=c):m=this._createRadioElement("leaflet-base-layers_"+d(this),c),this._layerControlInputs.push(m),m.layerId=d(o.layer),pt(m,"click",this._onInputClick,this);var b=document.createElement("span");b.innerHTML=" "+o.name;var w=document.createElement("span");n.appendChild(w),w.appendChild(m),w.appendChild(b);var T=o.overlay?this._overlaysList:this._baseLayersList;return T.appendChild(n),this._checkDisabledLayers(),n},_onInputClick:function(){if(!this._preventClick){var o=this._layerControlInputs,n,c,m=[],b=[];this._handlingClick=!0;for(var w=o.length-1;w>=0;w--)n=o[w],c=this._getLayer(n.layerId).layer,n.checked?m.push(c):n.checked||b.push(c);for(w=0;w<b.length;w++)this._map.hasLayer(b[w])&&this._map.removeLayer(b[w]);for(w=0;w<m.length;w++)this._map.hasLayer(m[w])||this._map.addLayer(m[w]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var o=this._layerControlInputs,n,c,m=this._map.getZoom(),b=o.length-1;b>=0;b--)n=o[b],c=this._getLayer(n.layerId).layer,n.disabled=c.options.minZoom!==void 0&&m<c.options.minZoom||c.options.maxZoom!==void 0&&m>c.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var o=this._section;this._preventClick=!0,pt(o,"click",Oe),this.expand();var n=this;setTimeout(function(){Wt(o,"click",Oe),n._preventClick=!1})}}),O0=function(o,n,c){return new yp(o,n,c)},Pl=Uo.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(o){var n="leaflet-control-zoom",c=Et("div",n+" leaflet-bar"),m=this.options;return this._zoomInButton=this._createButton(m.zoomInText,m.zoomInTitle,n+"-in",c,this._zoomIn),this._zoomOutButton=this._createButton(m.zoomOutText,m.zoomOutTitle,n+"-out",c,this._zoomOut),this._updateDisabled(),o.on("zoomend zoomlevelschange",this._updateDisabled,this),c},onRemove:function(o){o.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(o){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(o.shiftKey?3:1))},_zoomOut:function(o){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(o.shiftKey?3:1))},_createButton:function(o,n,c,m,b){var w=Et("a",c,m);return w.innerHTML=o,w.href="#",w.title=n,w.setAttribute("role","button"),w.setAttribute("aria-label",n),Fa(w),pt(w,"click",ur),pt(w,"click",b,this),pt(w,"click",this._refocusOnMap,this),w},_updateDisabled:function(){var o=this._map,n="leaflet-disabled";ie(this._zoomInButton,n),ie(this._zoomOutButton,n),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||o._zoom===o.getMinZoom())&&(mt(this._zoomOutButton,n),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||o._zoom===o.getMaxZoom())&&(mt(this._zoomInButton,n),this._zoomInButton.setAttribute("aria-disabled","true"))}});kt.mergeOptions({zoomControl:!0}),kt.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new Pl,this.addControl(this.zoomControl))});var M0=function(o){return new Pl(o)},wp=Uo.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(o){var n="leaflet-control-scale",c=Et("div",n),m=this.options;return this._addScales(m,n+"-line",c),o.on(m.updateWhenIdle?"moveend":"move",this._update,this),o.whenReady(this._update,this),c},onRemove:function(o){o.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(o,n,c){o.metric&&(this._mScale=Et("div",n,c)),o.imperial&&(this._iScale=Et("div",n,c))},_update:function(){var o=this._map,n=o.getSize().y/2,c=o.distance(o.containerPointToLatLng([0,n]),o.containerPointToLatLng([this.options.maxWidth,n]));this._updateScales(c)},_updateScales:function(o){this.options.metric&&o&&this._updateMetric(o),this.options.imperial&&o&&this._updateImperial(o)},_updateMetric:function(o){var n=this._getRoundNum(o),c=n<1e3?n+" m":n/1e3+" km";this._updateScale(this._mScale,c,n/o)},_updateImperial:function(o){var n=o*3.2808399,c,m,b;n>5280?(c=n/5280,m=this._getRoundNum(c),this._updateScale(this._iScale,m+" mi",m/c)):(b=this._getRoundNum(n),this._updateScale(this._iScale,b+" ft",b/n))},_updateScale:function(o,n,c){o.style.width=Math.round(this.options.maxWidth*c)+"px",o.innerHTML=n},_getRoundNum:function(o){var n=Math.pow(10,(Math.floor(o)+"").length-1),c=o/n;return c=c>=10?10:c>=5?5:c>=3?3:c>=2?2:1,n*c}}),A0=function(o){return new wp(o)},$0='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',El=Uo.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(st.inlineSvg?$0+" ":"")+"Leaflet</a>"},initialize:function(o){x(this,o),this._attributions={}},onAdd:function(o){o.attributionControl=this,this._container=Et("div","leaflet-control-attribution"),Fa(this._container);for(var n in o._layers)o._layers[n].getAttribution&&this.addAttribution(o._layers[n].getAttribution());return this._update(),o.on("layeradd",this._addAttribution,this),this._container},onRemove:function(o){o.off("layeradd",this._addAttribution,this)},_addAttribution:function(o){o.layer.getAttribution&&(this.addAttribution(o.layer.getAttribution()),o.layer.once("remove",function(){this.removeAttribution(o.layer.getAttribution())},this))},setPrefix:function(o){return this.options.prefix=o,this._update(),this},addAttribution:function(o){return o?(this._attributions[o]||(this._attributions[o]=0),this._attributions[o]++,this._update(),this):this},removeAttribution:function(o){return o?(this._attributions[o]&&(this._attributions[o]--,this._update()),this):this},_update:function(){if(this._map){var o=[];for(var n in this._attributions)this._attributions[n]&&o.push(n);var c=[];this.options.prefix&&c.push(this.options.prefix),o.length&&c.push(o.join(", ")),this._container.innerHTML=c.join(' <span aria-hidden="true">|</span> ')}}});kt.mergeOptions({attributionControl:!0}),kt.addInitHook(function(){this.options.attributionControl&&new El().addTo(this)});var I0=function(o){return new El(o)};Uo.Layers=yp,Uo.Zoom=Pl,Uo.Scale=wp,Uo.Attribution=El,Na.layers=O0,Na.zoom=M0,Na.scale=A0,Na.attribution=I0;var ei=q.extend({initialize:function(o){this._map=o},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});ei.addTo=function(o,n){return o.addHandler(n,this),this};var D0={Events:rt},_p=st.touch?"touchstart mousedown":"mousedown",Zi=Bt.extend({options:{clickTolerance:3},initialize:function(o,n,c,m){x(this,m),this._element=o,this._dragStartTarget=n||o,this._preventOutline=c},enable:function(){this._enabled||(pt(this._dragStartTarget,_p,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(Zi._dragging===this&&this.finishDrag(!0),Wt(this._dragStartTarget,_p,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(o){if(this._enabled&&(this._moved=!1,!gl(this._element,"leaflet-zoom-anim"))){if(o.touches&&o.touches.length!==1){Zi._dragging===this&&this.finishDrag();return}if(!(Zi._dragging||o.shiftKey||o.which!==1&&o.button!==1&&!o.touches)&&(Zi._dragging=this,this._preventOutline&&xl(this._element),yl(),Da(),!this._moving)){this.fire("down");var n=o.touches?o.touches[0]:o,c=up(this._element);this._startPoint=new J(n.clientX,n.clientY),this._startPos=pr(this._element),this._parentScale=kl(c);var m=o.type==="mousedown";pt(document,m?"mousemove":"touchmove",this._onMove,this),pt(document,m?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(o){if(this._enabled){if(o.touches&&o.touches.length>1){this._moved=!0;return}var n=o.touches&&o.touches.length===1?o.touches[0]:o,c=new J(n.clientX,n.clientY)._subtract(this._startPoint);!c.x&&!c.y||Math.abs(c.x)+Math.abs(c.y)<this.options.clickTolerance||(c.x/=this._parentScale.x,c.y/=this._parentScale.y,Oe(o),this._moved||(this.fire("dragstart"),this._moved=!0,mt(document.body,"leaflet-dragging"),this._lastTarget=o.target||o.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),mt(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(c),this._moving=!0,this._lastEvent=o,this._updatePosition())}},_updatePosition:function(){var o={originalEvent:this._lastEvent};this.fire("predrag",o),ce(this._element,this._newPos),this.fire("drag",o)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(o){ie(document.body,"leaflet-dragging"),this._lastTarget&&(ie(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),Wt(document,"mousemove touchmove",this._onMove,this),Wt(document,"mouseup touchend touchcancel",this._onUp,this),wl(),Ba();var n=this._moved&&this._moving;this._moving=!1,Zi._dragging=!1,n&&this.fire("dragend",{noInertia:o,distance:this._newPos.distanceTo(this._startPos)})}});function xp(o,n,c){var m,b=[1,4,2,8],w,T,$,D,V,ot,ct,bt;for(w=0,ot=o.length;w<ot;w++)o[w]._code=mr(o[w],n);for($=0;$<4;$++){for(ct=b[$],m=[],w=0,ot=o.length,T=ot-1;w<ot;T=w++)D=o[w],V=o[T],D._code&ct?V._code&ct||(bt=Xs(V,D,ct,n,c),bt._code=mr(bt,n),m.push(bt)):(V._code&ct&&(bt=Xs(V,D,ct,n,c),bt._code=mr(bt,n),m.push(bt)),m.push(D));o=m}return o}function kp(o,n){var c,m,b,w,T,$,D,V,ot;if(!o||o.length===0)throw new Error("latlngs not passed");Mo(o)||(console.warn("latlngs are not flat! Only the first ring will be used"),o=o[0]);var ct=xt([0,0]),bt=le(o),Ye=bt.getNorthWest().distanceTo(bt.getSouthWest())*bt.getNorthEast().distanceTo(bt.getNorthWest());Ye<1700&&(ct=Ol(o));var Ce=o.length,Ao=[];for(c=0;c<Ce;c++){var ro=xt(o[c]);Ao.push(n.project(xt([ro.lat-ct.lat,ro.lng-ct.lng])))}for($=D=V=0,c=0,m=Ce-1;c<Ce;m=c++)b=Ao[c],w=Ao[m],T=b.y*w.x-w.y*b.x,D+=(b.x+w.x)*T,V+=(b.y+w.y)*T,$+=T*3;$===0?ot=Ao[0]:ot=[D/$,V/$];var ta=n.unproject(at(ot));return xt([ta.lat+ct.lat,ta.lng+ct.lng])}function Ol(o){for(var n=0,c=0,m=0,b=0;b<o.length;b++){var w=xt(o[b]);n+=w.lat,c+=w.lng,m++}return xt([n/m,c/m])}var B0={__proto__:null,clipPolygon:xp,polygonCenter:kp,centroid:Ol};function Cp(o,n){if(!n||!o.length)return o.slice();var c=n*n;return o=N0(o,c),o=F0(o,c),o}function Lp(o,n,c){return Math.sqrt(ja(o,n,c,!0))}function R0(o,n,c){return ja(o,n,c)}function F0(o,n){var c=o.length,m=typeof Uint8Array<"u"?Uint8Array:Array,b=new m(c);b[0]=b[c-1]=1,Ml(o,b,n,0,c-1);var w,T=[];for(w=0;w<c;w++)b[w]&&T.push(o[w]);return T}function Ml(o,n,c,m,b){var w=0,T,$,D;for($=m+1;$<=b-1;$++)D=ja(o[$],o[m],o[b],!0),D>w&&(T=$,w=D);w>c&&(n[T]=1,Ml(o,n,c,m,T),Ml(o,n,c,T,b))}function N0(o,n){for(var c=[o[0]],m=1,b=0,w=o.length;m<w;m++)j0(o[m],o[b])>n&&(c.push(o[m]),b=m);return b<w-1&&c.push(o[w-1]),c}var zp;function Sp(o,n,c,m,b){var w=m?zp:mr(o,c),T=mr(n,c),$,D,V;for(zp=T;;){if(!(w|T))return[o,n];if(w&T)return!1;$=w||T,D=Xs(o,n,$,c,b),V=mr(D,c),$===w?(o=D,w=V):(n=D,T=V)}}function Xs(o,n,c,m,b){var w=n.x-o.x,T=n.y-o.y,$=m.min,D=m.max,V,ot;return c&8?(V=o.x+w*(D.y-o.y)/T,ot=D.y):c&4?(V=o.x+w*($.y-o.y)/T,ot=$.y):c&2?(V=D.x,ot=o.y+T*(D.x-o.x)/w):c&1&&(V=$.x,ot=o.y+T*($.x-o.x)/w),new J(V,ot,b)}function mr(o,n){var c=0;return o.x<n.min.x?c|=1:o.x>n.max.x&&(c|=2),o.y<n.min.y?c|=4:o.y>n.max.y&&(c|=8),c}function j0(o,n){var c=n.x-o.x,m=n.y-o.y;return c*c+m*m}function ja(o,n,c,m){var b=n.x,w=n.y,T=c.x-b,$=c.y-w,D=T*T+$*$,V;return D>0&&(V=((o.x-b)*T+(o.y-w)*$)/D,V>1?(b=c.x,w=c.y):V>0&&(b+=T*V,w+=$*V)),T=o.x-b,$=o.y-w,m?T*T+$*$:new J(b,w)}function Mo(o){return!C(o[0])||typeof o[0][0]!="object"&&typeof o[0][0]<"u"}function Tp(o){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),Mo(o)}function Pp(o,n){var c,m,b,w,T,$,D,V;if(!o||o.length===0)throw new Error("latlngs not passed");Mo(o)||(console.warn("latlngs are not flat! Only the first ring will be used"),o=o[0]);var ot=xt([0,0]),ct=le(o),bt=ct.getNorthWest().distanceTo(ct.getSouthWest())*ct.getNorthEast().distanceTo(ct.getNorthWest());bt<1700&&(ot=Ol(o));var Ye=o.length,Ce=[];for(c=0;c<Ye;c++){var Ao=xt(o[c]);Ce.push(n.project(xt([Ao.lat-ot.lat,Ao.lng-ot.lng])))}for(c=0,m=0;c<Ye-1;c++)m+=Ce[c].distanceTo(Ce[c+1])/2;if(m===0)V=Ce[0];else for(c=0,w=0;c<Ye-1;c++)if(T=Ce[c],$=Ce[c+1],b=T.distanceTo($),w+=b,w>m){D=(w-m)/b,V=[$.x-D*($.x-T.x),$.y-D*($.y-T.y)];break}var ro=n.unproject(at(V));return xt([ro.lat+ot.lat,ro.lng+ot.lng])}var U0={__proto__:null,simplify:Cp,pointToSegmentDistance:Lp,closestPointOnSegment:R0,clipSegment:Sp,_getEdgeIntersection:Xs,_getBitCode:mr,_sqClosestPointOnSegment:ja,isFlat:Mo,_flat:Tp,polylineCenter:Pp},Al={project:function(o){return new J(o.lng,o.lat)},unproject:function(o){return new Nt(o.y,o.x)},bounds:new Rt([-180,-90],[180,90])},$l={R:6378137,R_MINOR:6356752314245179e-9,bounds:new Rt([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(o){var n=Math.PI/180,c=this.R,m=o.lat*n,b=this.R_MINOR/c,w=Math.sqrt(1-b*b),T=w*Math.sin(m),$=Math.tan(Math.PI/4-m/2)/Math.pow((1-T)/(1+T),w/2);return m=-c*Math.log(Math.max($,1e-10)),new J(o.lng*n*c,m)},unproject:function(o){for(var n=180/Math.PI,c=this.R,m=this.R_MINOR/c,b=Math.sqrt(1-m*m),w=Math.exp(-o.y/c),T=Math.PI/2-2*Math.atan(w),$=0,D=.1,V;$<15&&Math.abs(D)>1e-7;$++)V=b*Math.sin(T),V=Math.pow((1-V)/(1+V),b/2),D=Math.PI/2-2*Math.atan(w*V)-T,T+=D;return new Nt(T*n,o.x*n/c)}},V0={__proto__:null,LonLat:Al,Mercator:$l,SphericalMercator:sl},H0=a({},Hi,{code:"EPSG:3395",projection:$l,transformation:function(){var o=.5/(Math.PI*$l.R);return Ma(o,.5,-o,.5)}()}),Ep=a({},Hi,{code:"EPSG:4326",projection:Al,transformation:Ma(1/180,1,-1/180,.5)}),Z0=a({},_i,{projection:Al,transformation:Ma(1,0,-1,0),scale:function(o){return Math.pow(2,o)},zoom:function(o){return Math.log(o)/Math.LN2},distance:function(o,n){var c=n.lng-o.lng,m=n.lat-o.lat;return Math.sqrt(c*c+m*m)},infinite:!0});_i.Earth=Hi,_i.EPSG3395=H0,_i.EPSG3857=ll,_i.EPSG900913=Xv,_i.EPSG4326=Ep,_i.Simple=Z0;var Vo=Bt.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(o){return o.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(o){return o&&o.removeLayer(this),this},getPane:function(o){return this._map.getPane(o?this.options[o]||o:this.options.pane)},addInteractiveTarget:function(o){return this._map._targets[d(o)]=this,this},removeInteractiveTarget:function(o){return delete this._map._targets[d(o)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(o){var n=o.target;if(n.hasLayer(this)){if(this._map=n,this._zoomAnimated=n._zoomAnimated,this.getEvents){var c=this.getEvents();n.on(c,this),this.once("remove",function(){n.off(c,this)},this)}this.onAdd(n),this.fire("add"),n.fire("layeradd",{layer:this})}}});kt.include({addLayer:function(o){if(!o._layerAdd)throw new Error("The provided object is not a Layer.");var n=d(o);return this._layers[n]?this:(this._layers[n]=o,o._mapToAdd=this,o.beforeAdd&&o.beforeAdd(this),this.whenReady(o._layerAdd,o),this)},removeLayer:function(o){var n=d(o);return this._layers[n]?(this._loaded&&o.onRemove(this),delete this._layers[n],this._loaded&&(this.fire("layerremove",{layer:o}),o.fire("remove")),o._map=o._mapToAdd=null,this):this},hasLayer:function(o){return d(o)in this._layers},eachLayer:function(o,n){for(var c in this._layers)o.call(n,this._layers[c]);return this},_addLayers:function(o){o=o?C(o)?o:[o]:[];for(var n=0,c=o.length;n<c;n++)this.addLayer(o[n])},_addZoomLimit:function(o){(!isNaN(o.options.maxZoom)||!isNaN(o.options.minZoom))&&(this._zoomBoundLayers[d(o)]=o,this._updateZoomLevels())},_removeZoomLimit:function(o){var n=d(o);this._zoomBoundLayers[n]&&(delete this._zoomBoundLayers[n],this._updateZoomLevels())},_updateZoomLevels:function(){var o=1/0,n=-1/0,c=this._getZoomSpan();for(var m in this._zoomBoundLayers){var b=this._zoomBoundLayers[m].options;o=b.minZoom===void 0?o:Math.min(o,b.minZoom),n=b.maxZoom===void 0?n:Math.max(n,b.maxZoom)}this._layersMaxZoom=n===-1/0?void 0:n,this._layersMinZoom=o===1/0?void 0:o,c!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var Yr=Vo.extend({initialize:function(o,n){x(this,n),this._layers={};var c,m;if(o)for(c=0,m=o.length;c<m;c++)this.addLayer(o[c])},addLayer:function(o){var n=this.getLayerId(o);return this._layers[n]=o,this._map&&this._map.addLayer(o),this},removeLayer:function(o){var n=o in this._layers?o:this.getLayerId(o);return this._map&&this._layers[n]&&this._map.removeLayer(this._layers[n]),delete this._layers[n],this},hasLayer:function(o){var n=typeof o=="number"?o:this.getLayerId(o);return n in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(o){var n=Array.prototype.slice.call(arguments,1),c,m;for(c in this._layers)m=this._layers[c],m[o]&&m[o].apply(m,n);return this},onAdd:function(o){this.eachLayer(o.addLayer,o)},onRemove:function(o){this.eachLayer(o.removeLayer,o)},eachLayer:function(o,n){for(var c in this._layers)o.call(n,this._layers[c]);return this},getLayer:function(o){return this._layers[o]},getLayers:function(){var o=[];return this.eachLayer(o.push,o),o},setZIndex:function(o){return this.invoke("setZIndex",o)},getLayerId:function(o){return d(o)}}),W0=function(o,n){return new Yr(o,n)},xi=Yr.extend({addLayer:function(o){return this.hasLayer(o)?this:(o.addEventParent(this),Yr.prototype.addLayer.call(this,o),this.fire("layeradd",{layer:o}))},removeLayer:function(o){return this.hasLayer(o)?(o in this._layers&&(o=this._layers[o]),o.removeEventParent(this),Yr.prototype.removeLayer.call(this,o),this.fire("layerremove",{layer:o})):this},setStyle:function(o){return this.invoke("setStyle",o)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var o=new io;for(var n in this._layers){var c=this._layers[n];o.extend(c.getBounds?c.getBounds():c.getLatLng())}return o}}),q0=function(o,n){return new xi(o,n)},Kr=q.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(o){x(this,o)},createIcon:function(o){return this._createIcon("icon",o)},createShadow:function(o){return this._createIcon("shadow",o)},_createIcon:function(o,n){var c=this._getIconUrl(o);if(!c){if(o==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var m=this._createImg(c,n&&n.tagName==="IMG"?n:null);return this._setIconStyles(m,o),(this.options.crossOrigin||this.options.crossOrigin==="")&&(m.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),m},_setIconStyles:function(o,n){var c=this.options,m=c[n+"Size"];typeof m=="number"&&(m=[m,m]);var b=at(m),w=at(n==="shadow"&&c.shadowAnchor||c.iconAnchor||b&&b.divideBy(2,!0));o.className="leaflet-marker-"+n+" "+(c.className||""),w&&(o.style.marginLeft=-w.x+"px",o.style.marginTop=-w.y+"px"),b&&(o.style.width=b.x+"px",o.style.height=b.y+"px")},_createImg:function(o,n){return n=n||document.createElement("img"),n.src=o,n},_getIconUrl:function(o){return st.retina&&this.options[o+"RetinaUrl"]||this.options[o+"Url"]}});function G0(o){return new Kr(o)}var Ua=Kr.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(o){return typeof Ua.imagePath!="string"&&(Ua.imagePath=this._detectIconPath()),(this.options.imagePath||Ua.imagePath)+Kr.prototype._getIconUrl.call(this,o)},_stripUrl:function(o){var n=function(c,m,b){var w=m.exec(c);return w&&w[b]};return o=n(o,/^url\((['"])?(.+)\1\)$/,2),o&&n(o,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var o=Et("div","leaflet-default-icon-path",document.body),n=Ia(o,"background-image")||Ia(o,"backgroundImage");if(document.body.removeChild(o),n=this._stripUrl(n),n)return n;var c=document.querySelector('link[href$="leaflet.css"]');return c?c.href.substring(0,c.href.length-11-1):""}}),Op=ei.extend({initialize:function(o){this._marker=o},addHooks:function(){var o=this._marker._icon;this._draggable||(this._draggable=new Zi(o,o,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),mt(o,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&ie(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(o){var n=this._marker,c=n._map,m=this._marker.options.autoPanSpeed,b=this._marker.options.autoPanPadding,w=pr(n._icon),T=c.getPixelBounds(),$=c.getPixelOrigin(),D=fe(T.min._subtract($).add(b),T.max._subtract($).subtract(b));if(!D.contains(w)){var V=at((Math.max(D.max.x,w.x)-D.max.x)/(T.max.x-D.max.x)-(Math.min(D.min.x,w.x)-D.min.x)/(T.min.x-D.min.x),(Math.max(D.max.y,w.y)-D.max.y)/(T.max.y-D.max.y)-(Math.min(D.min.y,w.y)-D.min.y)/(T.min.y-D.min.y)).multiplyBy(m);c.panBy(V,{animate:!1}),this._draggable._newPos._add(V),this._draggable._startPos._add(V),ce(n._icon,this._draggable._newPos),this._onDrag(o),this._panRequest=U(this._adjustPan.bind(this,o))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(o){this._marker.options.autoPan&&(I(this._panRequest),this._panRequest=U(this._adjustPan.bind(this,o)))},_onDrag:function(o){var n=this._marker,c=n._shadow,m=pr(n._icon),b=n._map.layerPointToLatLng(m);c&&ce(c,m),n._latlng=b,o.latlng=b,o.oldLatLng=this._oldLatLng,n.fire("move",o).fire("drag",o)},_onDragEnd:function(o){I(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",o)}}),Js=Vo.extend({options:{icon:new Ua,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(o,n){x(this,n),this._latlng=xt(o)},onAdd:function(o){this._zoomAnimated=this._zoomAnimated&&o.options.markerZoomAnimation,this._zoomAnimated&&o.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(o){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&o.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(o){var n=this._latlng;return this._latlng=xt(o),this.update(),this.fire("move",{oldLatLng:n,latlng:this._latlng})},setZIndexOffset:function(o){return this.options.zIndexOffset=o,this.update()},getIcon:function(){return this.options.icon},setIcon:function(o){return this.options.icon=o,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var o=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(o)}return this},_initIcon:function(){var o=this.options,n="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),c=o.icon.createIcon(this._icon),m=!1;c!==this._icon&&(this._icon&&this._removeIcon(),m=!0,o.title&&(c.title=o.title),c.tagName==="IMG"&&(c.alt=o.alt||"")),mt(c,n),o.keyboard&&(c.tabIndex="0",c.setAttribute("role","button")),this._icon=c,o.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&pt(c,"focus",this._panOnFocus,this);var b=o.icon.createShadow(this._shadow),w=!1;b!==this._shadow&&(this._removeShadow(),w=!0),b&&(mt(b,n),b.alt=""),this._shadow=b,o.opacity<1&&this._updateOpacity(),m&&this.getPane().appendChild(this._icon),this._initInteraction(),b&&w&&this.getPane(o.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&Wt(this._icon,"focus",this._panOnFocus,this),Jt(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&Jt(this._shadow),this._shadow=null},_setPos:function(o){this._icon&&ce(this._icon,o),this._shadow&&ce(this._shadow,o),this._zIndex=o.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(o){this._icon&&(this._icon.style.zIndex=this._zIndex+o)},_animateZoom:function(o){var n=this._map._latLngToNewLayerPoint(this._latlng,o.zoom,o.center).round();this._setPos(n)},_initInteraction:function(){if(this.options.interactive&&(mt(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),Op)){var o=this.options.draggable;this.dragging&&(o=this.dragging.enabled(),this.dragging.disable()),this.dragging=new Op(this),o&&this.dragging.enable()}},setOpacity:function(o){return this.options.opacity=o,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var o=this.options.opacity;this._icon&&Oo(this._icon,o),this._shadow&&Oo(this._shadow,o)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var o=this._map;if(o){var n=this.options.icon.options,c=n.iconSize?at(n.iconSize):at(0,0),m=n.iconAnchor?at(n.iconAnchor):at(0,0);o.panInside(this._latlng,{paddingTopLeft:m,paddingBottomRight:c.subtract(m)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function Y0(o,n){return new Js(o,n)}var Wi=Vo.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(o){this._renderer=o.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(o){return x(this,o),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&o&&Object.prototype.hasOwnProperty.call(o,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),Qs=Wi.extend({options:{fill:!0,radius:10},initialize:function(o,n){x(this,n),this._latlng=xt(o),this._radius=this.options.radius},setLatLng:function(o){var n=this._latlng;return this._latlng=xt(o),this.redraw(),this.fire("move",{oldLatLng:n,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(o){return this.options.radius=this._radius=o,this.redraw()},getRadius:function(){return this._radius},setStyle:function(o){var n=o&&o.radius||this._radius;return Wi.prototype.setStyle.call(this,o),this.setRadius(n),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var o=this._radius,n=this._radiusY||o,c=this._clickTolerance(),m=[o+c,n+c];this._pxBounds=new Rt(this._point.subtract(m),this._point.add(m))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(o){return o.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function K0(o,n){return new Qs(o,n)}var Il=Qs.extend({initialize:function(o,n,c){if(typeof n=="number"&&(n=a({},c,{radius:n})),x(this,n),this._latlng=xt(o),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(o){return this._mRadius=o,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var o=[this._radius,this._radiusY||this._radius];return new io(this._map.layerPointToLatLng(this._point.subtract(o)),this._map.layerPointToLatLng(this._point.add(o)))},setStyle:Wi.prototype.setStyle,_project:function(){var o=this._latlng.lng,n=this._latlng.lat,c=this._map,m=c.options.crs;if(m.distance===Hi.distance){var b=Math.PI/180,w=this._mRadius/Hi.R/b,T=c.project([n+w,o]),$=c.project([n-w,o]),D=T.add($).divideBy(2),V=c.unproject(D).lat,ot=Math.acos((Math.cos(w*b)-Math.sin(n*b)*Math.sin(V*b))/(Math.cos(n*b)*Math.cos(V*b)))/b;(isNaN(ot)||ot===0)&&(ot=w/Math.cos(Math.PI/180*n)),this._point=D.subtract(c.getPixelOrigin()),this._radius=isNaN(ot)?0:D.x-c.project([V,o-ot]).x,this._radiusY=D.y-T.y}else{var ct=m.unproject(m.project(this._latlng).subtract([this._mRadius,0]));this._point=c.latLngToLayerPoint(this._latlng),this._radius=this._point.x-c.latLngToLayerPoint(ct).x}this._updateBounds()}});function X0(o,n,c){return new Il(o,n,c)}var ki=Wi.extend({options:{smoothFactor:1,noClip:!1},initialize:function(o,n){x(this,n),this._setLatLngs(o)},getLatLngs:function(){return this._latlngs},setLatLngs:function(o){return this._setLatLngs(o),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(o){for(var n=1/0,c=null,m=ja,b,w,T=0,$=this._parts.length;T<$;T++)for(var D=this._parts[T],V=1,ot=D.length;V<ot;V++){b=D[V-1],w=D[V];var ct=m(o,b,w,!0);ct<n&&(n=ct,c=m(o,b,w))}return c&&(c.distance=Math.sqrt(n)),c},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Pp(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(o,n){return n=n||this._defaultShape(),o=xt(o),n.push(o),this._bounds.extend(o),this.redraw()},_setLatLngs:function(o){this._bounds=new io,this._latlngs=this._convertLatLngs(o)},_defaultShape:function(){return Mo(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(o){for(var n=[],c=Mo(o),m=0,b=o.length;m<b;m++)c?(n[m]=xt(o[m]),this._bounds.extend(n[m])):n[m]=this._convertLatLngs(o[m]);return n},_project:function(){var o=new Rt;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,o),this._bounds.isValid()&&o.isValid()&&(this._rawPxBounds=o,this._updateBounds())},_updateBounds:function(){var o=this._clickTolerance(),n=new J(o,o);this._rawPxBounds&&(this._pxBounds=new Rt([this._rawPxBounds.min.subtract(n),this._rawPxBounds.max.add(n)]))},_projectLatlngs:function(o,n,c){var m=o[0]instanceof Nt,b=o.length,w,T;if(m){for(T=[],w=0;w<b;w++)T[w]=this._map.latLngToLayerPoint(o[w]),c.extend(T[w]);n.push(T)}else for(w=0;w<b;w++)this._projectLatlngs(o[w],n,c)},_clipPoints:function(){var o=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(o))){if(this.options.noClip){this._parts=this._rings;return}var n=this._parts,c,m,b,w,T,$,D;for(c=0,b=0,w=this._rings.length;c<w;c++)for(D=this._rings[c],m=0,T=D.length;m<T-1;m++)$=Sp(D[m],D[m+1],o,m,!0),$&&(n[b]=n[b]||[],n[b].push($[0]),($[1]!==D[m+1]||m===T-2)&&(n[b].push($[1]),b++))}},_simplifyPoints:function(){for(var o=this._parts,n=this.options.smoothFactor,c=0,m=o.length;c<m;c++)o[c]=Cp(o[c],n)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(o,n){var c,m,b,w,T,$,D=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(o))return!1;for(c=0,w=this._parts.length;c<w;c++)for($=this._parts[c],m=0,T=$.length,b=T-1;m<T;b=m++)if(!(!n&&m===0)&&Lp(o,$[b],$[m])<=D)return!0;return!1}});function J0(o,n){return new ki(o,n)}ki._flat=Tp;var Xr=ki.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return kp(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(o){var n=ki.prototype._convertLatLngs.call(this,o),c=n.length;return c>=2&&n[0]instanceof Nt&&n[0].equals(n[c-1])&&n.pop(),n},_setLatLngs:function(o){ki.prototype._setLatLngs.call(this,o),Mo(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return Mo(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var o=this._renderer._bounds,n=this.options.weight,c=new J(n,n);if(o=new Rt(o.min.subtract(c),o.max.add(c)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(o))){if(this.options.noClip){this._parts=this._rings;return}for(var m=0,b=this._rings.length,w;m<b;m++)w=xp(this._rings[m],o,!0),w.length&&this._parts.push(w)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(o){var n=!1,c,m,b,w,T,$,D,V;if(!this._pxBounds||!this._pxBounds.contains(o))return!1;for(w=0,D=this._parts.length;w<D;w++)for(c=this._parts[w],T=0,V=c.length,$=V-1;T<V;$=T++)m=c[T],b=c[$],m.y>o.y!=b.y>o.y&&o.x<(b.x-m.x)*(o.y-m.y)/(b.y-m.y)+m.x&&(n=!n);return n||ki.prototype._containsPoint.call(this,o,!0)}});function Q0(o,n){return new Xr(o,n)}var Ci=xi.extend({initialize:function(o,n){x(this,n),this._layers={},o&&this.addData(o)},addData:function(o){var n=C(o)?o:o.features,c,m,b;if(n){for(c=0,m=n.length;c<m;c++)b=n[c],(b.geometries||b.geometry||b.features||b.coordinates)&&this.addData(b);return this}var w=this.options;if(w.filter&&!w.filter(o))return this;var T=tn(o,w);return T?(T.feature=rn(o),T.defaultOptions=T.options,this.resetStyle(T),w.onEachFeature&&w.onEachFeature(o,T),this.addLayer(T)):this},resetStyle:function(o){return o===void 0?this.eachLayer(this.resetStyle,this):(o.options=a({},o.defaultOptions),this._setLayerStyle(o,this.options.style),this)},setStyle:function(o){return this.eachLayer(function(n){this._setLayerStyle(n,o)},this)},_setLayerStyle:function(o,n){o.setStyle&&(typeof n=="function"&&(n=n(o.feature)),o.setStyle(n))}});function tn(o,n){var c=o.type==="Feature"?o.geometry:o,m=c?c.coordinates:null,b=[],w=n&&n.pointToLayer,T=n&&n.coordsToLatLng||Dl,$,D,V,ot;if(!m&&!c)return null;switch(c.type){case"Point":return $=T(m),Mp(w,o,$,n);case"MultiPoint":for(V=0,ot=m.length;V<ot;V++)$=T(m[V]),b.push(Mp(w,o,$,n));return new xi(b);case"LineString":case"MultiLineString":return D=en(m,c.type==="LineString"?0:1,T),new ki(D,n);case"Polygon":case"MultiPolygon":return D=en(m,c.type==="Polygon"?1:2,T),new Xr(D,n);case"GeometryCollection":for(V=0,ot=c.geometries.length;V<ot;V++){var ct=tn({geometry:c.geometries[V],type:"Feature",properties:o.properties},n);ct&&b.push(ct)}return new xi(b);case"FeatureCollection":for(V=0,ot=c.features.length;V<ot;V++){var bt=tn(c.features[V],n);bt&&b.push(bt)}return new xi(b);default:throw new Error("Invalid GeoJSON object.")}}function Mp(o,n,c,m){return o?o(n,c):new Js(c,m&&m.markersInheritOptions&&m)}function Dl(o){return new Nt(o[1],o[0],o[2])}function en(o,n,c){for(var m=[],b=0,w=o.length,T;b<w;b++)T=n?en(o[b],n-1,c):(c||Dl)(o[b]),m.push(T);return m}function Bl(o,n){return o=xt(o),o.alt!==void 0?[v(o.lng,n),v(o.lat,n),v(o.alt,n)]:[v(o.lng,n),v(o.lat,n)]}function on(o,n,c,m){for(var b=[],w=0,T=o.length;w<T;w++)b.push(n?on(o[w],Mo(o[w])?0:n-1,c,m):Bl(o[w],m));return!n&&c&&b.length>0&&b.push(b[0].slice()),b}function Jr(o,n){return o.feature?a({},o.feature,{geometry:n}):rn(n)}function rn(o){return o.type==="Feature"||o.type==="FeatureCollection"?o:{type:"Feature",properties:{},geometry:o}}var Rl={toGeoJSON:function(o){return Jr(this,{type:"Point",coordinates:Bl(this.getLatLng(),o)})}};Js.include(Rl),Il.include(Rl),Qs.include(Rl),ki.include({toGeoJSON:function(o){var n=!Mo(this._latlngs),c=on(this._latlngs,n?1:0,!1,o);return Jr(this,{type:(n?"Multi":"")+"LineString",coordinates:c})}}),Xr.include({toGeoJSON:function(o){var n=!Mo(this._latlngs),c=n&&!Mo(this._latlngs[0]),m=on(this._latlngs,c?2:n?1:0,!0,o);return n||(m=[m]),Jr(this,{type:(c?"Multi":"")+"Polygon",coordinates:m})}}),Yr.include({toMultiPoint:function(o){var n=[];return this.eachLayer(function(c){n.push(c.toGeoJSON(o).geometry.coordinates)}),Jr(this,{type:"MultiPoint",coordinates:n})},toGeoJSON:function(o){var n=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(n==="MultiPoint")return this.toMultiPoint(o);var c=n==="GeometryCollection",m=[];return this.eachLayer(function(b){if(b.toGeoJSON){var w=b.toGeoJSON(o);if(c)m.push(w.geometry);else{var T=rn(w);T.type==="FeatureCollection"?m.push.apply(m,T.features):m.push(T)}}}),c?Jr(this,{geometries:m,type:"GeometryCollection"}):{type:"FeatureCollection",features:m}}});function Ap(o,n){return new Ci(o,n)}var ty=Ap,an=Vo.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(o,n,c){this._url=o,this._bounds=le(n),x(this,c)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(mt(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){Jt(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(o){return this.options.opacity=o,this._image&&this._updateOpacity(),this},setStyle:function(o){return o.opacity&&this.setOpacity(o.opacity),this},bringToFront:function(){return this._map&&qr(this._image),this},bringToBack:function(){return this._map&&Gr(this._image),this},setUrl:function(o){return this._url=o,this._image&&(this._image.src=o),this},setBounds:function(o){return this._bounds=le(o),this._map&&this._reset(),this},getEvents:function(){var o={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(o.zoomanim=this._animateZoom),o},setZIndex:function(o){return this.options.zIndex=o,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var o=this._url.tagName==="IMG",n=this._image=o?this._url:Et("img");if(mt(n,"leaflet-image-layer"),this._zoomAnimated&&mt(n,"leaflet-zoom-animated"),this.options.className&&mt(n,this.options.className),n.onselectstart=g,n.onmousemove=g,n.onload=l(this.fire,this,"load"),n.onerror=l(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(n.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),o){this._url=n.src;return}n.src=this._url,n.alt=this.options.alt},_animateZoom:function(o){var n=this._map.getZoomScale(o.zoom),c=this._map._latLngBoundsToNewLayerBounds(this._bounds,o.zoom,o.center).min;dr(this._image,c,n)},_reset:function(){var o=this._image,n=new Rt(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),c=n.getSize();ce(o,n.min),o.style.width=c.x+"px",o.style.height=c.y+"px"},_updateOpacity:function(){Oo(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var o=this.options.errorOverlayUrl;o&&this._url!==o&&(this._url=o,this._image.src=o)},getCenter:function(){return this._bounds.getCenter()}}),ey=function(o,n,c){return new an(o,n,c)},$p=an.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var o=this._url.tagName==="VIDEO",n=this._image=o?this._url:Et("video");if(mt(n,"leaflet-image-layer"),this._zoomAnimated&&mt(n,"leaflet-zoom-animated"),this.options.className&&mt(n,this.options.className),n.onselectstart=g,n.onmousemove=g,n.onloadeddata=l(this.fire,this,"load"),o){for(var c=n.getElementsByTagName("source"),m=[],b=0;b<c.length;b++)m.push(c[b].src);this._url=c.length>0?m:[n.src];return}C(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(n.style,"objectFit")&&(n.style.objectFit="fill"),n.autoplay=!!this.options.autoplay,n.loop=!!this.options.loop,n.muted=!!this.options.muted,n.playsInline=!!this.options.playsInline;for(var w=0;w<this._url.length;w++){var T=Et("source");T.src=this._url[w],n.appendChild(T)}}});function oy(o,n,c){return new $p(o,n,c)}var Ip=an.extend({_initImage:function(){var o=this._image=this._url;mt(o,"leaflet-image-layer"),this._zoomAnimated&&mt(o,"leaflet-zoom-animated"),this.options.className&&mt(o,this.options.className),o.onselectstart=g,o.onmousemove=g}});function iy(o,n,c){return new Ip(o,n,c)}var oi=Vo.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(o,n){o&&(o instanceof Nt||C(o))?(this._latlng=xt(o),x(this,n)):(x(this,o),this._source=n),this.options.content&&(this._content=this.options.content)},openOn:function(o){return o=arguments.length?o:this._source._map,o.hasLayer(this)||o.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(o){return this._map?this.close():(arguments.length?this._source=o:o=this._source,this._prepareOpen(),this.openOn(o._map)),this},onAdd:function(o){this._zoomAnimated=o._zoomAnimated,this._container||this._initLayout(),o._fadeAnimated&&Oo(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),o._fadeAnimated&&Oo(this._container,1),this.bringToFront(),this.options.interactive&&(mt(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(o){o._fadeAnimated?(Oo(this._container,0),this._removeTimeout=setTimeout(l(Jt,void 0,this._container),200)):Jt(this._container),this.options.interactive&&(ie(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(o){return this._latlng=xt(o),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(o){return this._content=o,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var o={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(o.zoomanim=this._animateZoom),o},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&qr(this._container),this},bringToBack:function(){return this._map&&Gr(this._container),this},_prepareOpen:function(o){var n=this._source;if(!n._map)return!1;if(n instanceof xi){n=null;var c=this._source._layers;for(var m in c)if(c[m]._map){n=c[m];break}if(!n)return!1;this._source=n}if(!o)if(n.getCenter)o=n.getCenter();else if(n.getLatLng)o=n.getLatLng();else if(n.getBounds)o=n.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(o),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var o=this._contentNode,n=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof n=="string")o.innerHTML=n;else{for(;o.hasChildNodes();)o.removeChild(o.firstChild);o.appendChild(n)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var o=this._map.latLngToLayerPoint(this._latlng),n=at(this.options.offset),c=this._getAnchor();this._zoomAnimated?ce(this._container,o.add(c)):n=n.add(o).add(c);var m=this._containerBottom=-n.y,b=this._containerLeft=-Math.round(this._containerWidth/2)+n.x;this._container.style.bottom=m+"px",this._container.style.left=b+"px"}},_getAnchor:function(){return[0,0]}});kt.include({_initOverlay:function(o,n,c,m){var b=n;return b instanceof o||(b=new o(m).setContent(n)),c&&b.setLatLng(c),b}}),Vo.include({_initOverlay:function(o,n,c,m){var b=c;return b instanceof o?(x(b,m),b._source=this):(b=n&&!m?n:new o(m,this),b.setContent(c)),b}});var sn=oi.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(o){return o=arguments.length?o:this._source._map,!o.hasLayer(this)&&o._popup&&o._popup.options.autoClose&&o.removeLayer(o._popup),o._popup=this,oi.prototype.openOn.call(this,o)},onAdd:function(o){oi.prototype.onAdd.call(this,o),o.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof Wi||this._source.on("preclick",hr))},onRemove:function(o){oi.prototype.onRemove.call(this,o),o.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof Wi||this._source.off("preclick",hr))},getEvents:function(){var o=oi.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(o.preclick=this.close),this.options.keepInView&&(o.moveend=this._adjustPan),o},_initLayout:function(){var o="leaflet-popup",n=this._container=Et("div",o+" "+(this.options.className||"")+" leaflet-zoom-animated"),c=this._wrapper=Et("div",o+"-content-wrapper",n);if(this._contentNode=Et("div",o+"-content",c),Fa(n),Sl(this._contentNode),pt(n,"contextmenu",hr),this._tipContainer=Et("div",o+"-tip-container",n),this._tip=Et("div",o+"-tip",this._tipContainer),this.options.closeButton){var m=this._closeButton=Et("a",o+"-close-button",n);m.setAttribute("role","button"),m.setAttribute("aria-label","Close popup"),m.href="#close",m.innerHTML='<span aria-hidden="true">&#215;</span>',pt(m,"click",function(b){Oe(b),this.close()},this)}},_updateLayout:function(){var o=this._contentNode,n=o.style;n.width="",n.whiteSpace="nowrap";var c=o.offsetWidth;c=Math.min(c,this.options.maxWidth),c=Math.max(c,this.options.minWidth),n.width=c+1+"px",n.whiteSpace="",n.height="";var m=o.offsetHeight,b=this.options.maxHeight,w="leaflet-popup-scrolled";b&&m>b?(n.height=b+"px",mt(o,w)):ie(o,w),this._containerWidth=this._container.offsetWidth},_animateZoom:function(o){var n=this._map._latLngToNewLayerPoint(this._latlng,o.zoom,o.center),c=this._getAnchor();ce(this._container,n.add(c))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var o=this._map,n=parseInt(Ia(this._container,"marginBottom"),10)||0,c=this._container.offsetHeight+n,m=this._containerWidth,b=new J(this._containerLeft,-c-this._containerBottom);b._add(pr(this._container));var w=o.layerPointToContainerPoint(b),T=at(this.options.autoPanPadding),$=at(this.options.autoPanPaddingTopLeft||T),D=at(this.options.autoPanPaddingBottomRight||T),V=o.getSize(),ot=0,ct=0;w.x+m+D.x>V.x&&(ot=w.x+m-V.x+D.x),w.x-ot-$.x<0&&(ot=w.x-$.x),w.y+c+D.y>V.y&&(ct=w.y+c-V.y+D.y),w.y-ct-$.y<0&&(ct=w.y-$.y),(ot||ct)&&(this.options.keepInView&&(this._autopanning=!0),o.fire("autopanstart").panBy([ot,ct]))}},_getAnchor:function(){return at(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),ry=function(o,n){return new sn(o,n)};kt.mergeOptions({closePopupOnClick:!0}),kt.include({openPopup:function(o,n,c){return this._initOverlay(sn,o,n,c).openOn(this),this},closePopup:function(o){return o=arguments.length?o:this._popup,o&&o.close(),this}}),Vo.include({bindPopup:function(o,n){return this._popup=this._initOverlay(sn,this._popup,o,n),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(o){return this._popup&&(this instanceof xi||(this._popup._source=this),this._popup._prepareOpen(o||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(o){return this._popup&&this._popup.setContent(o),this},getPopup:function(){return this._popup},_openPopup:function(o){if(!(!this._popup||!this._map)){ur(o);var n=o.layer||o.target;if(this._popup._source===n&&!(n instanceof Wi)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(o.latlng);return}this._popup._source=n,this.openPopup(o.latlng)}},_movePopup:function(o){this._popup.setLatLng(o.latlng)},_onKeyPress:function(o){o.originalEvent.keyCode===13&&this._openPopup(o)}});var nn=oi.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(o){oi.prototype.onAdd.call(this,o),this.setOpacity(this.options.opacity),o.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(o){oi.prototype.onRemove.call(this,o),o.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var o=oi.prototype.getEvents.call(this);return this.options.permanent||(o.preclick=this.close),o},_initLayout:function(){var o="leaflet-tooltip",n=o+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=Et("div",n),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+d(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(o){var n,c,m=this._map,b=this._container,w=m.latLngToContainerPoint(m.getCenter()),T=m.layerPointToContainerPoint(o),$=this.options.direction,D=b.offsetWidth,V=b.offsetHeight,ot=at(this.options.offset),ct=this._getAnchor();$==="top"?(n=D/2,c=V):$==="bottom"?(n=D/2,c=0):$==="center"?(n=D/2,c=V/2):$==="right"?(n=0,c=V/2):$==="left"?(n=D,c=V/2):T.x<w.x?($="right",n=0,c=V/2):($="left",n=D+(ot.x+ct.x)*2,c=V/2),o=o.subtract(at(n,c,!0)).add(ot).add(ct),ie(b,"leaflet-tooltip-right"),ie(b,"leaflet-tooltip-left"),ie(b,"leaflet-tooltip-top"),ie(b,"leaflet-tooltip-bottom"),mt(b,"leaflet-tooltip-"+$),ce(b,o)},_updatePosition:function(){var o=this._map.latLngToLayerPoint(this._latlng);this._setPosition(o)},setOpacity:function(o){this.options.opacity=o,this._container&&Oo(this._container,o)},_animateZoom:function(o){var n=this._map._latLngToNewLayerPoint(this._latlng,o.zoom,o.center);this._setPosition(n)},_getAnchor:function(){return at(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),ay=function(o,n){return new nn(o,n)};kt.include({openTooltip:function(o,n,c){return this._initOverlay(nn,o,n,c).openOn(this),this},closeTooltip:function(o){return o.close(),this}}),Vo.include({bindTooltip:function(o,n){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(nn,this._tooltip,o,n),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(o){if(!(!o&&this._tooltipHandlersAdded)){var n=o?"off":"on",c={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?c.add=this._openTooltip:(c.mouseover=this._openTooltip,c.mouseout=this.closeTooltip,c.click=this._openTooltip,this._map?this._addFocusListeners():c.add=this._addFocusListeners),this._tooltip.options.sticky&&(c.mousemove=this._moveTooltip),this[n](c),this._tooltipHandlersAdded=!o}},openTooltip:function(o){return this._tooltip&&(this instanceof xi||(this._tooltip._source=this),this._tooltip._prepareOpen(o)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(o){return this._tooltip&&this._tooltip.setContent(o),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(o){var n=typeof o.getElement=="function"&&o.getElement();n&&(pt(n,"focus",function(){this._tooltip._source=o,this.openTooltip()},this),pt(n,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(o){var n=typeof o.getElement=="function"&&o.getElement();n&&n.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(o){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var n=this;this._map.once("moveend",function(){n._openOnceFlag=!1,n._openTooltip(o)});return}this._tooltip._source=o.layer||o.target,this.openTooltip(this._tooltip.options.sticky?o.latlng:void 0)}},_moveTooltip:function(o){var n=o.latlng,c,m;this._tooltip.options.sticky&&o.originalEvent&&(c=this._map.mouseEventToContainerPoint(o.originalEvent),m=this._map.containerPointToLayerPoint(c),n=this._map.layerPointToLatLng(m)),this._tooltip.setLatLng(n)}});var Dp=Kr.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(o){var n=o&&o.tagName==="DIV"?o:document.createElement("div"),c=this.options;if(c.html instanceof Element?(Ws(n),n.appendChild(c.html)):n.innerHTML=c.html!==!1?c.html:"",c.bgPos){var m=at(c.bgPos);n.style.backgroundPosition=-m.x+"px "+-m.y+"px"}return this._setIconStyles(n,"icon"),n},createShadow:function(){return null}});function sy(o){return new Dp(o)}Kr.Default=Ua;var Va=Vo.extend({options:{tileSize:256,opacity:1,updateWhenIdle:st.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(o){x(this,o)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(o){o._addZoomLimit(this)},onRemove:function(o){this._removeAllTiles(),Jt(this._container),o._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(qr(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(Gr(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(o){return this.options.opacity=o,this._updateOpacity(),this},setZIndex:function(o){return this.options.zIndex=o,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var o=this._clampZoom(this._map.getZoom());o!==this._tileZoom&&(this._tileZoom=o,this._updateLevels()),this._update()}return this},getEvents:function(){var o={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=h(this._onMoveEnd,this.options.updateInterval,this)),o.move=this._onMove),this._zoomAnimated&&(o.zoomanim=this._animateZoom),o},createTile:function(){return document.createElement("div")},getTileSize:function(){var o=this.options.tileSize;return o instanceof J?o:new J(o,o)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(o){for(var n=this.getPane().children,c=-o(-1/0,1/0),m=0,b=n.length,w;m<b;m++)w=n[m].style.zIndex,n[m]!==this._container&&w&&(c=o(c,+w));isFinite(c)&&(this.options.zIndex=c+o(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!st.ielt9){Oo(this._container,this.options.opacity);var o=+new Date,n=!1,c=!1;for(var m in this._tiles){var b=this._tiles[m];if(!(!b.current||!b.loaded)){var w=Math.min(1,(o-b.loaded)/200);Oo(b.el,w),w<1?n=!0:(b.active?c=!0:this._onOpaqueTile(b),b.active=!0)}}c&&!this._noPrune&&this._pruneTiles(),n&&(I(this._fadeFrame),this._fadeFrame=U(this._updateOpacity,this))}},_onOpaqueTile:g,_initContainer:function(){this._container||(this._container=Et("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var o=this._tileZoom,n=this.options.maxZoom;if(o!==void 0){for(var c in this._levels)c=Number(c),this._levels[c].el.children.length||c===o?(this._levels[c].el.style.zIndex=n-Math.abs(o-c),this._onUpdateLevel(c)):(Jt(this._levels[c].el),this._removeTilesAtZoom(c),this._onRemoveLevel(c),delete this._levels[c]);var m=this._levels[o],b=this._map;return m||(m=this._levels[o]={},m.el=Et("div","leaflet-tile-container leaflet-zoom-animated",this._container),m.el.style.zIndex=n,m.origin=b.project(b.unproject(b.getPixelOrigin()),o).round(),m.zoom=o,this._setZoomTransform(m,b.getCenter(),b.getZoom()),g(m.el.offsetWidth),this._onCreateLevel(m)),this._level=m,m}},_onUpdateLevel:g,_onRemoveLevel:g,_onCreateLevel:g,_pruneTiles:function(){if(this._map){var o,n,c=this._map.getZoom();if(c>this.options.maxZoom||c<this.options.minZoom){this._removeAllTiles();return}for(o in this._tiles)n=this._tiles[o],n.retain=n.current;for(o in this._tiles)if(n=this._tiles[o],n.current&&!n.active){var m=n.coords;this._retainParent(m.x,m.y,m.z,m.z-5)||this._retainChildren(m.x,m.y,m.z,m.z+2)}for(o in this._tiles)this._tiles[o].retain||this._removeTile(o)}},_removeTilesAtZoom:function(o){for(var n in this._tiles)this._tiles[n].coords.z===o&&this._removeTile(n)},_removeAllTiles:function(){for(var o in this._tiles)this._removeTile(o)},_invalidateAll:function(){for(var o in this._levels)Jt(this._levels[o].el),this._onRemoveLevel(Number(o)),delete this._levels[o];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(o,n,c,m){var b=Math.floor(o/2),w=Math.floor(n/2),T=c-1,$=new J(+b,+w);$.z=+T;var D=this._tileCoordsToKey($),V=this._tiles[D];return V&&V.active?(V.retain=!0,!0):(V&&V.loaded&&(V.retain=!0),T>m?this._retainParent(b,w,T,m):!1)},_retainChildren:function(o,n,c,m){for(var b=2*o;b<2*o+2;b++)for(var w=2*n;w<2*n+2;w++){var T=new J(b,w);T.z=c+1;var $=this._tileCoordsToKey(T),D=this._tiles[$];if(D&&D.active){D.retain=!0;continue}else D&&D.loaded&&(D.retain=!0);c+1<m&&this._retainChildren(b,w,c+1,m)}},_resetView:function(o){var n=o&&(o.pinch||o.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),n,n)},_animateZoom:function(o){this._setView(o.center,o.zoom,!0,o.noUpdate)},_clampZoom:function(o){var n=this.options;return n.minNativeZoom!==void 0&&o<n.minNativeZoom?n.minNativeZoom:n.maxNativeZoom!==void 0&&n.maxNativeZoom<o?n.maxNativeZoom:o},_setView:function(o,n,c,m){var b=Math.round(n);this.options.maxZoom!==void 0&&b>this.options.maxZoom||this.options.minZoom!==void 0&&b<this.options.minZoom?b=void 0:b=this._clampZoom(b);var w=this.options.updateWhenZooming&&b!==this._tileZoom;(!m||w)&&(this._tileZoom=b,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),b!==void 0&&this._update(o),c||this._pruneTiles(),this._noPrune=!!c),this._setZoomTransforms(o,n)},_setZoomTransforms:function(o,n){for(var c in this._levels)this._setZoomTransform(this._levels[c],o,n)},_setZoomTransform:function(o,n,c){var m=this._map.getZoomScale(c,o.zoom),b=o.origin.multiplyBy(m).subtract(this._map._getNewPixelOrigin(n,c)).round();st.any3d?dr(o.el,b,m):ce(o.el,b)},_resetGrid:function(){var o=this._map,n=o.options.crs,c=this._tileSize=this.getTileSize(),m=this._tileZoom,b=this._map.getPixelWorldBounds(this._tileZoom);b&&(this._globalTileRange=this._pxBoundsToTileRange(b)),this._wrapX=n.wrapLng&&!this.options.noWrap&&[Math.floor(o.project([0,n.wrapLng[0]],m).x/c.x),Math.ceil(o.project([0,n.wrapLng[1]],m).x/c.y)],this._wrapY=n.wrapLat&&!this.options.noWrap&&[Math.floor(o.project([n.wrapLat[0],0],m).y/c.x),Math.ceil(o.project([n.wrapLat[1],0],m).y/c.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(o){var n=this._map,c=n._animatingZoom?Math.max(n._animateToZoom,n.getZoom()):n.getZoom(),m=n.getZoomScale(c,this._tileZoom),b=n.project(o,this._tileZoom).floor(),w=n.getSize().divideBy(m*2);return new Rt(b.subtract(w),b.add(w))},_update:function(o){var n=this._map;if(n){var c=this._clampZoom(n.getZoom());if(o===void 0&&(o=n.getCenter()),this._tileZoom!==void 0){var m=this._getTiledPixelBounds(o),b=this._pxBoundsToTileRange(m),w=b.getCenter(),T=[],$=this.options.keepBuffer,D=new Rt(b.getBottomLeft().subtract([$,-$]),b.getTopRight().add([$,-$]));if(!(isFinite(b.min.x)&&isFinite(b.min.y)&&isFinite(b.max.x)&&isFinite(b.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var V in this._tiles){var ot=this._tiles[V].coords;(ot.z!==this._tileZoom||!D.contains(new J(ot.x,ot.y)))&&(this._tiles[V].current=!1)}if(Math.abs(c-this._tileZoom)>1){this._setView(o,c);return}for(var ct=b.min.y;ct<=b.max.y;ct++)for(var bt=b.min.x;bt<=b.max.x;bt++){var Ye=new J(bt,ct);if(Ye.z=this._tileZoom,!!this._isValidTile(Ye)){var Ce=this._tiles[this._tileCoordsToKey(Ye)];Ce?Ce.current=!0:T.push(Ye)}}if(T.sort(function(ro,ta){return ro.distanceTo(w)-ta.distanceTo(w)}),T.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var Ao=document.createDocumentFragment();for(bt=0;bt<T.length;bt++)this._addTile(T[bt],Ao);this._level.el.appendChild(Ao)}}}},_isValidTile:function(o){var n=this._map.options.crs;if(!n.infinite){var c=this._globalTileRange;if(!n.wrapLng&&(o.x<c.min.x||o.x>c.max.x)||!n.wrapLat&&(o.y<c.min.y||o.y>c.max.y))return!1}if(!this.options.bounds)return!0;var m=this._tileCoordsToBounds(o);return le(this.options.bounds).overlaps(m)},_keyToBounds:function(o){return this._tileCoordsToBounds(this._keyToTileCoords(o))},_tileCoordsToNwSe:function(o){var n=this._map,c=this.getTileSize(),m=o.scaleBy(c),b=m.add(c),w=n.unproject(m,o.z),T=n.unproject(b,o.z);return[w,T]},_tileCoordsToBounds:function(o){var n=this._tileCoordsToNwSe(o),c=new io(n[0],n[1]);return this.options.noWrap||(c=this._map.wrapLatLngBounds(c)),c},_tileCoordsToKey:function(o){return o.x+":"+o.y+":"+o.z},_keyToTileCoords:function(o){var n=o.split(":"),c=new J(+n[0],+n[1]);return c.z=+n[2],c},_removeTile:function(o){var n=this._tiles[o];n&&(Jt(n.el),delete this._tiles[o],this.fire("tileunload",{tile:n.el,coords:this._keyToTileCoords(o)}))},_initTile:function(o){mt(o,"leaflet-tile");var n=this.getTileSize();o.style.width=n.x+"px",o.style.height=n.y+"px",o.onselectstart=g,o.onmousemove=g,st.ielt9&&this.options.opacity<1&&Oo(o,this.options.opacity)},_addTile:function(o,n){var c=this._getTilePos(o),m=this._tileCoordsToKey(o),b=this.createTile(this._wrapCoords(o),l(this._tileReady,this,o));this._initTile(b),this.createTile.length<2&&U(l(this._tileReady,this,o,null,b)),ce(b,c),this._tiles[m]={el:b,coords:o,current:!0},n.appendChild(b),this.fire("tileloadstart",{tile:b,coords:o})},_tileReady:function(o,n,c){n&&this.fire("tileerror",{error:n,tile:c,coords:o});var m=this._tileCoordsToKey(o);c=this._tiles[m],c&&(c.loaded=+new Date,this._map._fadeAnimated?(Oo(c.el,0),I(this._fadeFrame),this._fadeFrame=U(this._updateOpacity,this)):(c.active=!0,this._pruneTiles()),n||(mt(c.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:c.el,coords:o})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),st.ielt9||!this._map._fadeAnimated?U(this._pruneTiles,this):setTimeout(l(this._pruneTiles,this),250)))},_getTilePos:function(o){return o.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(o){var n=new J(this._wrapX?f(o.x,this._wrapX):o.x,this._wrapY?f(o.y,this._wrapY):o.y);return n.z=o.z,n},_pxBoundsToTileRange:function(o){var n=this.getTileSize();return new Rt(o.min.unscaleBy(n).floor(),o.max.unscaleBy(n).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var o in this._tiles)if(!this._tiles[o].loaded)return!1;return!0}});function ny(o){return new Va(o)}var Qr=Va.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(o,n){this._url=o,n=x(this,n),n.detectRetina&&st.retina&&n.maxZoom>0?(n.tileSize=Math.floor(n.tileSize/2),n.zoomReverse?(n.zoomOffset--,n.minZoom=Math.min(n.maxZoom,n.minZoom+1)):(n.zoomOffset++,n.maxZoom=Math.max(n.minZoom,n.maxZoom-1)),n.minZoom=Math.max(0,n.minZoom)):n.zoomReverse?n.minZoom=Math.min(n.maxZoom,n.minZoom):n.maxZoom=Math.max(n.minZoom,n.maxZoom),typeof n.subdomains=="string"&&(n.subdomains=n.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(o,n){return this._url===o&&n===void 0&&(n=!0),this._url=o,n||this.redraw(),this},createTile:function(o,n){var c=document.createElement("img");return pt(c,"load",l(this._tileOnLoad,this,n,c)),pt(c,"error",l(this._tileOnError,this,n,c)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(c.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(c.referrerPolicy=this.options.referrerPolicy),c.alt="",c.src=this.getTileUrl(o),c},getTileUrl:function(o){var n={r:st.retina?"@2x":"",s:this._getSubdomain(o),x:o.x,y:o.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var c=this._globalTileRange.max.y-o.y;this.options.tms&&(n.y=c),n["-y"]=c}return k(this._url,a(n,this.options))},_tileOnLoad:function(o,n){st.ielt9?setTimeout(l(o,this,null,n),0):o(null,n)},_tileOnError:function(o,n,c){var m=this.options.errorTileUrl;m&&n.getAttribute("src")!==m&&(n.src=m),o(c,n)},_onTileRemove:function(o){o.tile.onload=null},_getZoomForUrl:function(){var o=this._tileZoom,n=this.options.maxZoom,c=this.options.zoomReverse,m=this.options.zoomOffset;return c&&(o=n-o),o+m},_getSubdomain:function(o){var n=Math.abs(o.x+o.y)%this.options.subdomains.length;return this.options.subdomains[n]},_abortLoading:function(){var o,n;for(o in this._tiles)if(this._tiles[o].coords.z!==this._tileZoom&&(n=this._tiles[o].el,n.onload=g,n.onerror=g,!n.complete)){n.src=O;var c=this._tiles[o].coords;Jt(n),delete this._tiles[o],this.fire("tileabort",{tile:n,coords:c})}},_removeTile:function(o){var n=this._tiles[o];if(n)return n.el.setAttribute("src",O),Va.prototype._removeTile.call(this,o)},_tileReady:function(o,n,c){if(!(!this._map||c&&c.getAttribute("src")===O))return Va.prototype._tileReady.call(this,o,n,c)}});function Bp(o,n){return new Qr(o,n)}var Rp=Qr.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(o,n){this._url=o;var c=a({},this.defaultWmsParams);for(var m in n)m in this.options||(c[m]=n[m]);n=x(this,n);var b=n.detectRetina&&st.retina?2:1,w=this.getTileSize();c.width=w.x*b,c.height=w.y*b,this.wmsParams=c},onAdd:function(o){this._crs=this.options.crs||o.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var n=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[n]=this._crs.code,Qr.prototype.onAdd.call(this,o)},getTileUrl:function(o){var n=this._tileCoordsToNwSe(o),c=this._crs,m=fe(c.project(n[0]),c.project(n[1])),b=m.min,w=m.max,T=(this._wmsVersion>=1.3&&this._crs===Ep?[b.y,b.x,w.y,w.x]:[b.x,b.y,w.x,w.y]).join(","),$=Qr.prototype.getTileUrl.call(this,o);return $+P(this.wmsParams,$,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+T},setParams:function(o,n){return a(this.wmsParams,o),n||this.redraw(),this}});function ly(o,n){return new Rp(o,n)}Qr.WMS=Rp,Bp.wms=ly;var Li=Vo.extend({options:{padding:.1},initialize:function(o){x(this,o),d(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),mt(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var o={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(o.zoomanim=this._onAnimZoom),o},_onAnimZoom:function(o){this._updateTransform(o.center,o.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(o,n){var c=this._map.getZoomScale(n,this._zoom),m=this._map.getSize().multiplyBy(.5+this.options.padding),b=this._map.project(this._center,n),w=m.multiplyBy(-c).add(b).subtract(this._map._getNewPixelOrigin(o,n));st.any3d?dr(this._container,w,c):ce(this._container,w)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var o in this._layers)this._layers[o]._reset()},_onZoomEnd:function(){for(var o in this._layers)this._layers[o]._project()},_updatePaths:function(){for(var o in this._layers)this._layers[o]._update()},_update:function(){var o=this.options.padding,n=this._map.getSize(),c=this._map.containerPointToLayerPoint(n.multiplyBy(-o)).round();this._bounds=new Rt(c,c.add(n.multiplyBy(1+o*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),Fp=Li.extend({options:{tolerance:0},getEvents:function(){var o=Li.prototype.getEvents.call(this);return o.viewprereset=this._onViewPreReset,o},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){Li.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var o=this._container=document.createElement("canvas");pt(o,"mousemove",this._onMouseMove,this),pt(o,"click dblclick mousedown mouseup contextmenu",this._onClick,this),pt(o,"mouseout",this._handleMouseOut,this),o._leaflet_disable_events=!0,this._ctx=o.getContext("2d")},_destroyContainer:function(){I(this._redrawRequest),delete this._ctx,Jt(this._container),Wt(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var o;this._redrawBounds=null;for(var n in this._layers)o=this._layers[n],o._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Li.prototype._update.call(this);var o=this._bounds,n=this._container,c=o.getSize(),m=st.retina?2:1;ce(n,o.min),n.width=m*c.x,n.height=m*c.y,n.style.width=c.x+"px",n.style.height=c.y+"px",st.retina&&this._ctx.scale(2,2),this._ctx.translate(-o.min.x,-o.min.y),this.fire("update")}},_reset:function(){Li.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(o){this._updateDashArray(o),this._layers[d(o)]=o;var n=o._order={layer:o,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=n),this._drawLast=n,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(o){this._requestRedraw(o)},_removePath:function(o){var n=o._order,c=n.next,m=n.prev;c?c.prev=m:this._drawLast=m,m?m.next=c:this._drawFirst=c,delete o._order,delete this._layers[d(o)],this._requestRedraw(o)},_updatePath:function(o){this._extendRedrawBounds(o),o._project(),o._update(),this._requestRedraw(o)},_updateStyle:function(o){this._updateDashArray(o),this._requestRedraw(o)},_updateDashArray:function(o){if(typeof o.options.dashArray=="string"){var n=o.options.dashArray.split(/[, ]+/),c=[],m,b;for(b=0;b<n.length;b++){if(m=Number(n[b]),isNaN(m))return;c.push(m)}o.options._dashArray=c}else o.options._dashArray=o.options.dashArray},_requestRedraw:function(o){this._map&&(this._extendRedrawBounds(o),this._redrawRequest=this._redrawRequest||U(this._redraw,this))},_extendRedrawBounds:function(o){if(o._pxBounds){var n=(o.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new Rt,this._redrawBounds.extend(o._pxBounds.min.subtract([n,n])),this._redrawBounds.extend(o._pxBounds.max.add([n,n]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var o=this._redrawBounds;if(o){var n=o.getSize();this._ctx.clearRect(o.min.x,o.min.y,n.x,n.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var o,n=this._redrawBounds;if(this._ctx.save(),n){var c=n.getSize();this._ctx.beginPath(),this._ctx.rect(n.min.x,n.min.y,c.x,c.y),this._ctx.clip()}this._drawing=!0;for(var m=this._drawFirst;m;m=m.next)o=m.layer,(!n||o._pxBounds&&o._pxBounds.intersects(n))&&o._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(o,n){if(this._drawing){var c,m,b,w,T=o._parts,$=T.length,D=this._ctx;if($){for(D.beginPath(),c=0;c<$;c++){for(m=0,b=T[c].length;m<b;m++)w=T[c][m],D[m?"lineTo":"moveTo"](w.x,w.y);n&&D.closePath()}this._fillStroke(D,o)}}},_updateCircle:function(o){if(!(!this._drawing||o._empty())){var n=o._point,c=this._ctx,m=Math.max(Math.round(o._radius),1),b=(Math.max(Math.round(o._radiusY),1)||m)/m;b!==1&&(c.save(),c.scale(1,b)),c.beginPath(),c.arc(n.x,n.y/b,m,0,Math.PI*2,!1),b!==1&&c.restore(),this._fillStroke(c,o)}},_fillStroke:function(o,n){var c=n.options;c.fill&&(o.globalAlpha=c.fillOpacity,o.fillStyle=c.fillColor||c.color,o.fill(c.fillRule||"evenodd")),c.stroke&&c.weight!==0&&(o.setLineDash&&o.setLineDash(n.options&&n.options._dashArray||[]),o.globalAlpha=c.opacity,o.lineWidth=c.weight,o.strokeStyle=c.color,o.lineCap=c.lineCap,o.lineJoin=c.lineJoin,o.stroke())},_onClick:function(o){for(var n=this._map.mouseEventToLayerPoint(o),c,m,b=this._drawFirst;b;b=b.next)c=b.layer,c.options.interactive&&c._containsPoint(n)&&(!(o.type==="click"||o.type==="preclick")||!this._map._draggableMoved(c))&&(m=c);this._fireEvent(m?[m]:!1,o)},_onMouseMove:function(o){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var n=this._map.mouseEventToLayerPoint(o);this._handleMouseHover(o,n)}},_handleMouseOut:function(o){var n=this._hoveredLayer;n&&(ie(this._container,"leaflet-interactive"),this._fireEvent([n],o,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(o,n){if(!this._mouseHoverThrottled){for(var c,m,b=this._drawFirst;b;b=b.next)c=b.layer,c.options.interactive&&c._containsPoint(n)&&(m=c);m!==this._hoveredLayer&&(this._handleMouseOut(o),m&&(mt(this._container,"leaflet-interactive"),this._fireEvent([m],o,"mouseover"),this._hoveredLayer=m)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,o),this._mouseHoverThrottled=!0,setTimeout(l(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(o,n,c){this._map._fireDOMEvent(n,c||n.type,o)},_bringToFront:function(o){var n=o._order;if(n){var c=n.next,m=n.prev;if(c)c.prev=m;else return;m?m.next=c:c&&(this._drawFirst=c),n.prev=this._drawLast,this._drawLast.next=n,n.next=null,this._drawLast=n,this._requestRedraw(o)}},_bringToBack:function(o){var n=o._order;if(n){var c=n.next,m=n.prev;if(m)m.next=c;else return;c?c.prev=m:m&&(this._drawLast=m),n.prev=null,n.next=this._drawFirst,this._drawFirst.prev=n,this._drawFirst=n,this._requestRedraw(o)}}});function Np(o){return st.canvas?new Fp(o):null}var Ha=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(o){return document.createElement("<lvml:"+o+' class="lvml">')}}catch{}return function(o){return document.createElement("<"+o+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}(),cy={_initContainer:function(){this._container=Et("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(Li.prototype._update.call(this),this.fire("update"))},_initPath:function(o){var n=o._container=Ha("shape");mt(n,"leaflet-vml-shape "+(this.options.className||"")),n.coordsize="1 1",o._path=Ha("path"),n.appendChild(o._path),this._updateStyle(o),this._layers[d(o)]=o},_addPath:function(o){var n=o._container;this._container.appendChild(n),o.options.interactive&&o.addInteractiveTarget(n)},_removePath:function(o){var n=o._container;Jt(n),o.removeInteractiveTarget(n),delete this._layers[d(o)]},_updateStyle:function(o){var n=o._stroke,c=o._fill,m=o.options,b=o._container;b.stroked=!!m.stroke,b.filled=!!m.fill,m.stroke?(n||(n=o._stroke=Ha("stroke")),b.appendChild(n),n.weight=m.weight+"px",n.color=m.color,n.opacity=m.opacity,m.dashArray?n.dashStyle=C(m.dashArray)?m.dashArray.join(" "):m.dashArray.replace(/( *, *)/g," "):n.dashStyle="",n.endcap=m.lineCap.replace("butt","flat"),n.joinstyle=m.lineJoin):n&&(b.removeChild(n),o._stroke=null),m.fill?(c||(c=o._fill=Ha("fill")),b.appendChild(c),c.color=m.fillColor||m.color,c.opacity=m.fillOpacity):c&&(b.removeChild(c),o._fill=null)},_updateCircle:function(o){var n=o._point.round(),c=Math.round(o._radius),m=Math.round(o._radiusY||c);this._setPath(o,o._empty()?"M0 0":"AL "+n.x+","+n.y+" "+c+","+m+" 0,"+65535*360)},_setPath:function(o,n){o._path.v=n},_bringToFront:function(o){qr(o._container)},_bringToBack:function(o){Gr(o._container)}},ln=st.vml?Ha:Hd,Za=Li.extend({_initContainer:function(){this._container=ln("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=ln("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){Jt(this._container),Wt(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Li.prototype._update.call(this);var o=this._bounds,n=o.getSize(),c=this._container;(!this._svgSize||!this._svgSize.equals(n))&&(this._svgSize=n,c.setAttribute("width",n.x),c.setAttribute("height",n.y)),ce(c,o.min),c.setAttribute("viewBox",[o.min.x,o.min.y,n.x,n.y].join(" ")),this.fire("update")}},_initPath:function(o){var n=o._path=ln("path");o.options.className&&mt(n,o.options.className),o.options.interactive&&mt(n,"leaflet-interactive"),this._updateStyle(o),this._layers[d(o)]=o},_addPath:function(o){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(o._path),o.addInteractiveTarget(o._path)},_removePath:function(o){Jt(o._path),o.removeInteractiveTarget(o._path),delete this._layers[d(o)]},_updatePath:function(o){o._project(),o._update()},_updateStyle:function(o){var n=o._path,c=o.options;n&&(c.stroke?(n.setAttribute("stroke",c.color),n.setAttribute("stroke-opacity",c.opacity),n.setAttribute("stroke-width",c.weight),n.setAttribute("stroke-linecap",c.lineCap),n.setAttribute("stroke-linejoin",c.lineJoin),c.dashArray?n.setAttribute("stroke-dasharray",c.dashArray):n.removeAttribute("stroke-dasharray"),c.dashOffset?n.setAttribute("stroke-dashoffset",c.dashOffset):n.removeAttribute("stroke-dashoffset")):n.setAttribute("stroke","none"),c.fill?(n.setAttribute("fill",c.fillColor||c.color),n.setAttribute("fill-opacity",c.fillOpacity),n.setAttribute("fill-rule",c.fillRule||"evenodd")):n.setAttribute("fill","none"))},_updatePoly:function(o,n){this._setPath(o,Zd(o._parts,n))},_updateCircle:function(o){var n=o._point,c=Math.max(Math.round(o._radius),1),m=Math.max(Math.round(o._radiusY),1)||c,b="a"+c+","+m+" 0 1,0 ",w=o._empty()?"M0 0":"M"+(n.x-c)+","+n.y+b+c*2+",0 "+b+-c*2+",0 ";this._setPath(o,w)},_setPath:function(o,n){o._path.setAttribute("d",n)},_bringToFront:function(o){qr(o._path)},_bringToBack:function(o){Gr(o._path)}});st.vml&&Za.include(cy);function jp(o){return st.svg||st.vml?new Za(o):null}kt.include({getRenderer:function(o){var n=o.options.renderer||this._getPaneRenderer(o.options.pane)||this.options.renderer||this._renderer;return n||(n=this._renderer=this._createRenderer()),this.hasLayer(n)||this.addLayer(n),n},_getPaneRenderer:function(o){if(o==="overlayPane"||o===void 0)return!1;var n=this._paneRenderers[o];return n===void 0&&(n=this._createRenderer({pane:o}),this._paneRenderers[o]=n),n},_createRenderer:function(o){return this.options.preferCanvas&&Np(o)||jp(o)}});var Up=Xr.extend({initialize:function(o,n){Xr.prototype.initialize.call(this,this._boundsToLatLngs(o),n)},setBounds:function(o){return this.setLatLngs(this._boundsToLatLngs(o))},_boundsToLatLngs:function(o){return o=le(o),[o.getSouthWest(),o.getNorthWest(),o.getNorthEast(),o.getSouthEast()]}});function dy(o,n){return new Up(o,n)}Za.create=ln,Za.pointsToPath=Zd,Ci.geometryToLayer=tn,Ci.coordsToLatLng=Dl,Ci.coordsToLatLngs=en,Ci.latLngToCoords=Bl,Ci.latLngsToCoords=on,Ci.getFeature=Jr,Ci.asFeature=rn,kt.mergeOptions({boxZoom:!0});var Vp=ei.extend({initialize:function(o){this._map=o,this._container=o._container,this._pane=o._panes.overlayPane,this._resetStateTimeout=0,o.on("unload",this._destroy,this)},addHooks:function(){pt(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){Wt(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){Jt(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(o){if(!o.shiftKey||o.which!==1&&o.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),Da(),yl(),this._startPoint=this._map.mouseEventToContainerPoint(o),pt(document,{contextmenu:ur,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(o){this._moved||(this._moved=!0,this._box=Et("div","leaflet-zoom-box",this._container),mt(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(o);var n=new Rt(this._point,this._startPoint),c=n.getSize();ce(this._box,n.min),this._box.style.width=c.x+"px",this._box.style.height=c.y+"px"},_finish:function(){this._moved&&(Jt(this._box),ie(this._container,"leaflet-crosshair")),Ba(),wl(),Wt(document,{contextmenu:ur,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(o){if(!(o.which!==1&&o.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(l(this._resetState,this),0);var n=new io(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(n).fire("boxzoomend",{boxZoomBounds:n})}},_onKeyDown:function(o){o.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});kt.addInitHook("addHandler","boxZoom",Vp),kt.mergeOptions({doubleClickZoom:!0});var Hp=ei.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(o){var n=this._map,c=n.getZoom(),m=n.options.zoomDelta,b=o.originalEvent.shiftKey?c-m:c+m;n.options.doubleClickZoom==="center"?n.setZoom(b):n.setZoomAround(o.containerPoint,b)}});kt.addInitHook("addHandler","doubleClickZoom",Hp),kt.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var Zp=ei.extend({addHooks:function(){if(!this._draggable){var o=this._map;this._draggable=new Zi(o._mapPane,o._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),o.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),o.on("zoomend",this._onZoomEnd,this),o.whenReady(this._onZoomEnd,this))}mt(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){ie(this._map._container,"leaflet-grab"),ie(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var o=this._map;if(o._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var n=le(this._map.options.maxBounds);this._offsetLimit=fe(this._map.latLngToContainerPoint(n.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(n.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;o.fire("movestart").fire("dragstart"),o.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(o){if(this._map.options.inertia){var n=this._lastTime=+new Date,c=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(c),this._times.push(n),this._prunePositions(n)}this._map.fire("move",o).fire("drag",o)},_prunePositions:function(o){for(;this._positions.length>1&&o-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var o=this._map.getSize().divideBy(2),n=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=n.subtract(o).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(o,n){return o-(o-n)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var o=this._draggable._newPos.subtract(this._draggable._startPos),n=this._offsetLimit;o.x<n.min.x&&(o.x=this._viscousLimit(o.x,n.min.x)),o.y<n.min.y&&(o.y=this._viscousLimit(o.y,n.min.y)),o.x>n.max.x&&(o.x=this._viscousLimit(o.x,n.max.x)),o.y>n.max.y&&(o.y=this._viscousLimit(o.y,n.max.y)),this._draggable._newPos=this._draggable._startPos.add(o)}},_onPreDragWrap:function(){var o=this._worldWidth,n=Math.round(o/2),c=this._initialWorldOffset,m=this._draggable._newPos.x,b=(m-n+c)%o+n-c,w=(m+n+c)%o-n-c,T=Math.abs(b+c)<Math.abs(w+c)?b:w;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=T},_onDragEnd:function(o){var n=this._map,c=n.options,m=!c.inertia||o.noInertia||this._times.length<2;if(n.fire("dragend",o),m)n.fire("moveend");else{this._prunePositions(+new Date);var b=this._lastPos.subtract(this._positions[0]),w=(this._lastTime-this._times[0])/1e3,T=c.easeLinearity,$=b.multiplyBy(T/w),D=$.distanceTo([0,0]),V=Math.min(c.inertiaMaxSpeed,D),ot=$.multiplyBy(V/D),ct=V/(c.inertiaDeceleration*T),bt=ot.multiplyBy(-ct/2).round();!bt.x&&!bt.y?n.fire("moveend"):(bt=n._limitOffset(bt,n.options.maxBounds),U(function(){n.panBy(bt,{duration:ct,easeLinearity:T,noMoveStart:!0,animate:!0})}))}}});kt.addInitHook("addHandler","dragging",Zp),kt.mergeOptions({keyboard:!0,keyboardPanDelta:80});var Wp=ei.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(o){this._map=o,this._setPanDelta(o.options.keyboardPanDelta),this._setZoomDelta(o.options.zoomDelta)},addHooks:function(){var o=this._map._container;o.tabIndex<=0&&(o.tabIndex="0"),pt(o,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),Wt(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var o=document.body,n=document.documentElement,c=o.scrollTop||n.scrollTop,m=o.scrollLeft||n.scrollLeft;this._map._container.focus(),window.scrollTo(m,c)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(o){var n=this._panKeys={},c=this.keyCodes,m,b;for(m=0,b=c.left.length;m<b;m++)n[c.left[m]]=[-1*o,0];for(m=0,b=c.right.length;m<b;m++)n[c.right[m]]=[o,0];for(m=0,b=c.down.length;m<b;m++)n[c.down[m]]=[0,o];for(m=0,b=c.up.length;m<b;m++)n[c.up[m]]=[0,-1*o]},_setZoomDelta:function(o){var n=this._zoomKeys={},c=this.keyCodes,m,b;for(m=0,b=c.zoomIn.length;m<b;m++)n[c.zoomIn[m]]=o;for(m=0,b=c.zoomOut.length;m<b;m++)n[c.zoomOut[m]]=-o},_addHooks:function(){pt(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){Wt(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(o){if(!(o.altKey||o.ctrlKey||o.metaKey)){var n=o.keyCode,c=this._map,m;if(n in this._panKeys){if(!c._panAnim||!c._panAnim._inProgress)if(m=this._panKeys[n],o.shiftKey&&(m=at(m).multiplyBy(3)),c.options.maxBounds&&(m=c._limitOffset(at(m),c.options.maxBounds)),c.options.worldCopyJump){var b=c.wrapLatLng(c.unproject(c.project(c.getCenter()).add(m)));c.panTo(b)}else c.panBy(m)}else if(n in this._zoomKeys)c.setZoom(c.getZoom()+(o.shiftKey?3:1)*this._zoomKeys[n]);else if(n===27&&c._popup&&c._popup.options.closeOnEscapeKey)c.closePopup();else return;ur(o)}}});kt.addInitHook("addHandler","keyboard",Wp),kt.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var qp=ei.extend({addHooks:function(){pt(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){Wt(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(o){var n=bp(o),c=this._map.options.wheelDebounceTime;this._delta+=n,this._lastMousePos=this._map.mouseEventToContainerPoint(o),this._startTime||(this._startTime=+new Date);var m=Math.max(c-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(l(this._performZoom,this),m),ur(o)},_performZoom:function(){var o=this._map,n=o.getZoom(),c=this._map.options.zoomSnap||0;o._stop();var m=this._delta/(this._map.options.wheelPxPerZoomLevel*4),b=4*Math.log(2/(1+Math.exp(-Math.abs(m))))/Math.LN2,w=c?Math.ceil(b/c)*c:b,T=o._limitZoom(n+(this._delta>0?w:-w))-n;this._delta=0,this._startTime=null,T&&(o.options.scrollWheelZoom==="center"?o.setZoom(n+T):o.setZoomAround(this._lastMousePos,n+T))}});kt.addInitHook("addHandler","scrollWheelZoom",qp);var py=600;kt.mergeOptions({tapHold:st.touchNative&&st.safari&&st.mobile,tapTolerance:15});var Gp=ei.extend({addHooks:function(){pt(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){Wt(this._map._container,"touchstart",this._onDown,this)},_onDown:function(o){if(clearTimeout(this._holdTimeout),o.touches.length===1){var n=o.touches[0];this._startPos=this._newPos=new J(n.clientX,n.clientY),this._holdTimeout=setTimeout(l(function(){this._cancel(),this._isTapValid()&&(pt(document,"touchend",Oe),pt(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",n))},this),py),pt(document,"touchend touchcancel contextmenu",this._cancel,this),pt(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function o(){Wt(document,"touchend",Oe),Wt(document,"touchend touchcancel",o)},_cancel:function(){clearTimeout(this._holdTimeout),Wt(document,"touchend touchcancel contextmenu",this._cancel,this),Wt(document,"touchmove",this._onMove,this)},_onMove:function(o){var n=o.touches[0];this._newPos=new J(n.clientX,n.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(o,n){var c=new MouseEvent(o,{bubbles:!0,cancelable:!0,view:window,screenX:n.screenX,screenY:n.screenY,clientX:n.clientX,clientY:n.clientY});c._simulated=!0,n.target.dispatchEvent(c)}});kt.addInitHook("addHandler","tapHold",Gp),kt.mergeOptions({touchZoom:st.touch,bounceAtZoomLimits:!0});var Yp=ei.extend({addHooks:function(){mt(this._map._container,"leaflet-touch-zoom"),pt(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){ie(this._map._container,"leaflet-touch-zoom"),Wt(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(o){var n=this._map;if(!(!o.touches||o.touches.length!==2||n._animatingZoom||this._zooming)){var c=n.mouseEventToContainerPoint(o.touches[0]),m=n.mouseEventToContainerPoint(o.touches[1]);this._centerPoint=n.getSize()._divideBy(2),this._startLatLng=n.containerPointToLatLng(this._centerPoint),n.options.touchZoom!=="center"&&(this._pinchStartLatLng=n.containerPointToLatLng(c.add(m)._divideBy(2))),this._startDist=c.distanceTo(m),this._startZoom=n.getZoom(),this._moved=!1,this._zooming=!0,n._stop(),pt(document,"touchmove",this._onTouchMove,this),pt(document,"touchend touchcancel",this._onTouchEnd,this),Oe(o)}},_onTouchMove:function(o){if(!(!o.touches||o.touches.length!==2||!this._zooming)){var n=this._map,c=n.mouseEventToContainerPoint(o.touches[0]),m=n.mouseEventToContainerPoint(o.touches[1]),b=c.distanceTo(m)/this._startDist;if(this._zoom=n.getScaleZoom(b,this._startZoom),!n.options.bounceAtZoomLimits&&(this._zoom<n.getMinZoom()&&b<1||this._zoom>n.getMaxZoom()&&b>1)&&(this._zoom=n._limitZoom(this._zoom)),n.options.touchZoom==="center"){if(this._center=this._startLatLng,b===1)return}else{var w=c._add(m)._divideBy(2)._subtract(this._centerPoint);if(b===1&&w.x===0&&w.y===0)return;this._center=n.unproject(n.project(this._pinchStartLatLng,this._zoom).subtract(w),this._zoom)}this._moved||(n._moveStart(!0,!1),this._moved=!0),I(this._animRequest);var T=l(n._move,n,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=U(T,this,!0),Oe(o)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,I(this._animRequest),Wt(document,"touchmove",this._onTouchMove,this),Wt(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});kt.addInitHook("addHandler","touchZoom",Yp),kt.BoxZoom=Vp,kt.DoubleClickZoom=Hp,kt.Drag=Zp,kt.Keyboard=Wp,kt.ScrollWheelZoom=qp,kt.TapHold=Gp,kt.TouchZoom=Yp,e.Bounds=Rt,e.Browser=st,e.CRS=_i,e.Canvas=Fp,e.Circle=Il,e.CircleMarker=Qs,e.Class=q,e.Control=Uo,e.DivIcon=Dp,e.DivOverlay=oi,e.DomEvent=P0,e.DomUtil=S0,e.Draggable=Zi,e.Evented=Bt,e.FeatureGroup=xi,e.GeoJSON=Ci,e.GridLayer=Va,e.Handler=ei,e.Icon=Kr,e.ImageOverlay=an,e.LatLng=Nt,e.LatLngBounds=io,e.Layer=Vo,e.LayerGroup=Yr,e.LineUtil=U0,e.Map=kt,e.Marker=Js,e.Mixin=D0,e.Path=Wi,e.Point=J,e.PolyUtil=B0,e.Polygon=Xr,e.Polyline=ki,e.Popup=sn,e.PosAnimation=vp,e.Projection=V0,e.Rectangle=Up,e.Renderer=Li,e.SVG=Za,e.SVGOverlay=Ip,e.TileLayer=Qr,e.Tooltip=nn,e.Transformation=nl,e.Util=W,e.VideoOverlay=$p,e.bind=l,e.bounds=fe,e.canvas=Np,e.circle=X0,e.circleMarker=K0,e.control=Na,e.divIcon=sy,e.extend=a,e.featureGroup=q0,e.geoJSON=Ap,e.geoJson=ty,e.gridLayer=ny,e.icon=G0,e.imageOverlay=ey,e.latLng=xt,e.latLngBounds=le,e.layerGroup=W0,e.map=E0,e.marker=Y0,e.point=at,e.polygon=Q0,e.polyline=J0,e.popup=ry,e.rectangle=dy,e.setOptions=x,e.stamp=d,e.svg=jp,e.svgOverlay=iy,e.tileLayer=Bp,e.tooltip=ay,e.transformation=Ma,e.version=r,e.videoOverlay=oy;var hy=window.L;e.noConflict=function(){return window.L=hy,this},window.L=e})}(Es,Es.exports),Es.exports)}var K=ol();var fC=Object.defineProperty,gC=Object.getOwnPropertyDescriptor,bC=(i,t,e,r)=>{for(var a=r>1?void 0:r?gC(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&fC(t,e,a),a},dt=class extends R{get container(){return this._container}set container(t){this._container=t,this.containerChanged?.(t)}get mapElement(){return this.container instanceof K.Map?this.container.getContainer().getRootNode().host:null}onLeafletEvent(t){this.emit(t.type,t)}};bC([re],dt.prototype,"onLeafletEvent",1);var uv=A`
  :host {
    display: none;
  }
`;var vC=Object.defineProperty,yC=Object.getOwnPropertyDescriptor,Sa=(i,t,e,r)=>{for(var a=r>1?void 0:r?yC(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&vC(t,e,a),a},Nr,jr=(Nr=class extends dt{constructor(){super(...arguments),this.localize=new et(this),this.position="topright",this.zoomInText=Nr._zoomInText,this.zoomInTitle=void 0,this.zoomOutText=Nr._zoomOutText,this.zoomOutTitle=void 0}containerChanged(){if(!this.container)return;let{position:i,zoomInText:t,zoomOutText:e}=this;this.control=K.control.zoom({position:i,zoomInText:t,zoomInTitle:this.zoomInTitle?this.zoomInTitle:this.localize.term("zoomIn"),zoomOutText:e,zoomOutTitle:this.zoomOutTitle?this.zoomOutTitle:this.localize.term("zoomOut")}),this.control.addTo(this.container)}disconnectedCallback(){this.container&&this.control&&this.container.removeControl(this.control)}updatePosition(){this.container&&this.control&&this.control.setPosition(this.position)}},Nr.styles=uv,Nr._zoomInText='<span aria-hidden="true"><awc-icon name="plus-lg"></awc-icon></span>',Nr._zoomOutText='<span aria-hidden="true"><awc-icon name="dash-lg"></awc-icon></span>',Nr);Sa([u({type:String})],jr.prototype,"position",2);Sa([u({type:String})],jr.prototype,"zoomInText",2);Sa([u({type:String})],jr.prototype,"zoomInTitle",2);Sa([u({type:String})],jr.prototype,"zoomOutText",2);Sa([u({type:String})],jr.prototype,"zoomOutTitle",2);Sa([M("position",{waitUntilFirstUpdate:!0})],jr.prototype,"updatePosition",1);var Ta=jr;Ta.define("awc-map-zoom-control");var mv='.leaflet-pane,.leaflet-tile,.leaflet-marker-icon,.leaflet-marker-shadow,.leaflet-tile-container,.leaflet-pane>svg,.leaflet-pane>canvas,.leaflet-zoom-box,.leaflet-image-layer,.leaflet-layer{position:absolute;left:0;top:0}.leaflet-container{overflow:hidden}.leaflet-tile,.leaflet-marker-icon,.leaflet-marker-shadow{-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-user-drag:none}.leaflet-tile::selection{background:transparent}.leaflet-safari .leaflet-tile{image-rendering:-webkit-optimize-contrast}.leaflet-safari .leaflet-tile-container{width:1600px;height:1600px;-webkit-transform-origin:0 0}.leaflet-marker-icon,.leaflet-marker-shadow{display:block}.leaflet-container .leaflet-overlay-pane svg{max-width:none!important;max-height:none!important}.leaflet-container .leaflet-marker-pane img,.leaflet-container .leaflet-shadow-pane img,.leaflet-container .leaflet-tile-pane img,.leaflet-container img.leaflet-image-layer,.leaflet-container .leaflet-tile{max-width:none!important;max-height:none!important;width:auto;padding:0}.leaflet-container img.leaflet-tile{mix-blend-mode:plus-lighter}.leaflet-container.leaflet-touch-zoom{-ms-touch-action:pan-x pan-y;touch-action:pan-x pan-y}.leaflet-container.leaflet-touch-drag{-ms-touch-action:pinch-zoom;touch-action:none;touch-action:pinch-zoom}.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom{-ms-touch-action:none;touch-action:none}.leaflet-container{-webkit-tap-highlight-color:transparent}.leaflet-container a{-webkit-tap-highlight-color:rgba(51,181,229,.4)}.leaflet-tile{filter:inherit;visibility:hidden}.leaflet-tile-loaded{visibility:inherit}.leaflet-zoom-box{width:0;height:0;-moz-box-sizing:border-box;box-sizing:border-box;z-index:800}.leaflet-overlay-pane svg{-moz-user-select:none}.leaflet-pane{z-index:400}.leaflet-tile-pane{z-index:200}.leaflet-overlay-pane{z-index:400}.leaflet-shadow-pane{z-index:500}.leaflet-marker-pane{z-index:600}.leaflet-tooltip-pane{z-index:650}.leaflet-popup-pane{z-index:700}.leaflet-map-pane canvas{z-index:100}.leaflet-map-pane svg{z-index:200}.leaflet-vml-shape{width:1px;height:1px}.lvml{behavior:url(#default#VML);display:inline-block;position:absolute}.leaflet-control{position:relative;z-index:800;pointer-events:visiblePainted;pointer-events:auto}.leaflet-top,.leaflet-bottom{position:absolute;z-index:1000;pointer-events:none}.leaflet-top{top:0}.leaflet-right{right:0}.leaflet-bottom{bottom:0}.leaflet-left{left:0}.leaflet-control{float:left;clear:both}.leaflet-right .leaflet-control{float:right}.leaflet-top .leaflet-control{margin-top:10px}.leaflet-bottom .leaflet-control{margin-bottom:10px}.leaflet-left .leaflet-control{margin-left:10px}.leaflet-right .leaflet-control{margin-right:10px}.leaflet-fade-anim .leaflet-popup{opacity:0;-webkit-transition:opacity .2s linear;-moz-transition:opacity .2s linear;transition:opacity .2s linear}.leaflet-fade-anim .leaflet-map-pane .leaflet-popup{opacity:1}.leaflet-zoom-animated{-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0}svg.leaflet-zoom-animated{will-change:transform}.leaflet-zoom-anim .leaflet-zoom-animated{-webkit-transition:-webkit-transform .25s cubic-bezier(0,0,.25,1);-moz-transition:-moz-transform .25s cubic-bezier(0,0,.25,1);transition:transform .25s cubic-bezier(0,0,.25,1)}.leaflet-zoom-anim .leaflet-tile,.leaflet-pan-anim .leaflet-tile{-webkit-transition:none;-moz-transition:none;transition:none}.leaflet-zoom-anim .leaflet-zoom-hide{visibility:hidden}.leaflet-interactive{cursor:pointer}.leaflet-grab{cursor:-webkit-grab;cursor:-moz-grab;cursor:grab}.leaflet-crosshair,.leaflet-crosshair .leaflet-interactive{cursor:crosshair}.leaflet-popup-pane,.leaflet-control{cursor:auto}.leaflet-dragging .leaflet-grab,.leaflet-dragging .leaflet-grab .leaflet-interactive,.leaflet-dragging .leaflet-marker-draggable{cursor:move;cursor:-webkit-grabbing;cursor:-moz-grabbing;cursor:grabbing}.leaflet-marker-icon,.leaflet-marker-shadow,.leaflet-image-layer,.leaflet-pane>svg path,.leaflet-tile-container{pointer-events:none}.leaflet-marker-icon.leaflet-interactive,.leaflet-image-layer.leaflet-interactive,.leaflet-pane>svg path.leaflet-interactive,svg.leaflet-image-layer.leaflet-interactive path{pointer-events:visiblePainted;pointer-events:auto}.leaflet-container{background:#ddd;outline-offset:1px}.leaflet-container a{color:#0078a8}.leaflet-zoom-box{border:2px dotted #38f;background:#ffffff80}.leaflet-container{font-family:Helvetica Neue,Arial,Helvetica,sans-serif;font-size:12px;font-size:.75rem;line-height:1.5}.leaflet-bar{box-shadow:0 1px 5px #000000a6;border-radius:4px}.leaflet-bar a{background-color:#fff;border-bottom:1px solid #ccc;width:26px;height:26px;line-height:26px;display:block;text-align:center;text-decoration:none;color:#000}.leaflet-bar a,.leaflet-control-layers-toggle{background-position:50% 50%;background-repeat:no-repeat;display:block}.leaflet-bar a:hover,.leaflet-bar a:focus{background-color:#f4f4f4}.leaflet-bar a:first-child{border-top-left-radius:4px;border-top-right-radius:4px}.leaflet-bar a:last-child{border-bottom-left-radius:4px;border-bottom-right-radius:4px;border-bottom:none}.leaflet-bar a.leaflet-disabled{cursor:default;background-color:#f4f4f4;color:#bbb}.leaflet-touch .leaflet-bar a{width:30px;height:30px;line-height:30px}.leaflet-touch .leaflet-bar a:first-child{border-top-left-radius:2px;border-top-right-radius:2px}.leaflet-touch .leaflet-bar a:last-child{border-bottom-left-radius:2px;border-bottom-right-radius:2px}.leaflet-control-zoom-in,.leaflet-control-zoom-out{font:700 18px Lucida Console,Monaco,monospace;text-indent:1px}.leaflet-touch .leaflet-control-zoom-in,.leaflet-touch .leaflet-control-zoom-out{font-size:22px}.leaflet-control-layers{box-shadow:0 1px 5px #0006;background:#fff;border-radius:5px}.leaflet-control-layers-toggle{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAQAAAADQ4RFAAACf0lEQVR4AY1UM3gkARTePdvdoTxXKc+qTl3aU5U6b2Kbkz3Gtq3Zw6ziLGNPzrYx7946Tr6/ee/XeCQ4D3ykPtL5tHno4n0d/h3+xfuWHGLX81cn7r0iTNzjr7LrlxCqPtkbTQEHeqOrTy4Yyt3VCi/IOB0v7rVC7q45Q3Gr5K6jt+3Gl5nCoDD4MtO+j96Wu8atmhGqcNGHObuf8OM/x3AMx38+4Z2sPqzCxRFK2aF2e5Jol56XTLyggAMTL56XOMoS1W4pOyjUcGGQdZxU6qRh7B9Zp+PfpOFlqt0zyDZckPi1ttmIp03jX8gyJ8a/PG2yutpS/Vol7peZIbZcKBAEEheEIAgFbDkz5H6Zrkm2hVWGiXKiF4Ycw0RWKdtC16Q7qe3X4iOMxruonzegJzWaXFrU9utOSsLUmrc0YjeWYjCW4PDMADElpJSSQ0vQvA1Tm6/JlKnqFs1EGyZiFCqnRZTEJJJiKRYzVYzJck2Rm6P4iH+cmSY0YzimYa8l0EtTODFWhcMIMVqdsI2uiTvKmTisIDHJ3od5GILVhBCarCfVRmo4uTjkhrhzkiBV7SsaqS+TzrzM1qpGGUFt28pIySQHR6h7F6KSwGWm97ay+Z+ZqMcEjEWebE7wxCSQwpkhJqoZA5ivCdZDjJepuJ9IQjGGUmuXJdBFUygxVqVsxFsLMbDe8ZbDYVCGKxs+W080max1hFCarCfV+C1KATwcnvE9gRRuMP2prdbWGowm1KB1y+zwMMENkM755cJ2yPDtqhTI6ED1M/82yIDtC/4j4BijjeObflpO9I9MwXTCsSX8jWAFeHr05WoLTJ5G8IQVS/7vwR6ohirYM7f6HzYpogfS3R2OAAAAAElFTkSuQmCC);width:36px;height:36px}.leaflet-retina .leaflet-control-layers-toggle{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAQAAABvcdNgAAAEsklEQVR4AWL4TydIhpZK1kpWOlg0w3ZXP6D2soBtG42jeI6ZmQTHzAxiTbSJsYLjO9HhP+WOmcuhciVnmHVQcJnp7DFvScowZorad/+V/fVzMdMT2g9Cv9guXGv/7pYOrXh2U+RRR3dSd9JRx6bIFc/ekqHI29JC6pJ5ZEh1yWkhkbcFeSjxgx3L2m1cb1C7bceyxA+CNjT/Ifff+/kDk2u/w/33/IeCMOSaWZ4glosqT3DNnNZQ7Cs58/3Ce5HL78iZH/vKVIaYlqzfdLu8Vi7dnvUbEza5Idt36tquZFldl6N5Z/POLof0XLK61mZCmJSWjVF9tEjUluu74IUXvgttuVIHE7YxSkaYhJZam7yiM9Pv82JYfl9nptxZaxMJE4YSPty+vF0+Y2up9d3wwijfjZbabqm/3bZ9ecKHsiGmRflnn1MW4pjHf9oLufyn2z3y1D6n8g8TZhxyzipLNPnAUpsOiuWimg52psrTZYnOWYNDTMuWBWa0tJb4rgq1UvmutpaYEbZlwU3CLJm/ayYjHW5/h7xWLn9Hh1vepDkyf7dE7MtT5LR4e7yYpHrkhOUpEfssBLq2pPhAqoSWKUkk7EDqkmK6RrCEzqDjhNDWNE+XSMvkJRDWlZTmCW0l0PHQGRZY5t1L83kT0Y3l2SItk5JAWHl2dCOBm+fPu3fo5/3v61RMCO9Jx2EEYYhb0rmNQMX/vm7gqOEJLcXTGw3CAuRNeyaPWwjR8PRqKQ1PDA/dpv+on9Shox52WFnx0KY8onHayrJzm87i5h9xGw/tfkev0jGsQizqezUKjk12hBMKJ4kbCqGPVNXudyyrShovGw5CgxsRICxF6aRmSjlBnHRzg7Gx8fKqEubI2rahQYdR1YgDIRQO7JvQyD52hoIQx0mxa0ODtW2Iozn1le2iIRdzwWewedyZzewidueOGqlsn1MvcnQpuVwLGG3/IR1hIKxCjelIDZ8ldqWz25jWAsnldEnK0Zxro19TGVb2ffIZEsIO89EIEDvKMPrzmBOQcKQ+rroye6NgRRxqR4U8EAkz0CL6uSGOm6KQCdWjvjRiSP1BPalCRS5iQYiEIvxuBMJEWgzSoHADcVMuN7IuqqTeyUPq22qFimFtxDyBBJEwNyt6TM88blFHao/6tWWhuuOM4SAK4EI4QmFHA+SEyWlp4EQoJ13cYGzMu7yszEIBOm2rVmHUNqwAIQabISNMRstmdhNWcFLsSm+0tjJH1MdRxO5Nx0WDMhCtgD6OKgZeljJqJKc9po8juskR9XN0Y1lZ3mWjLR9JCO1jRDMd0fpYC2VnvjBSEFg7wBENc0R9HFlb0xvF1+TBEpF68d+DHR6IOWVv2BECtxo46hOFUBd/APU57WIoEwJhIi2CdpyZX0m93BZicktMj1AS9dClteUFAUNUIEygRZCtik5zSxI9MubTBH1GOiHsiLJ3OCoSZkILa9PxiN0EbvhsAo8tdAf9Seepd36lGWHmtNANTv5Jd0z4QYyeo/UEJqxKRpg5LZx6btLPsOaEmdMyxYdlc8LMaJnikDlhclqmPiQnTEpLUIZEwkRagjYkEibQErwhkTAKCLQEbUgkzJQWc/0PstHHcfEdQ+UAAAAASUVORK5CYII=);background-size:26px 26px}.leaflet-touch .leaflet-control-layers-toggle{width:44px;height:44px}.leaflet-control-layers .leaflet-control-layers-list,.leaflet-control-layers-expanded .leaflet-control-layers-toggle{display:none}.leaflet-control-layers-expanded .leaflet-control-layers-list{display:block;position:relative}.leaflet-control-layers-expanded{padding:6px 10px 6px 6px;color:#333;background:#fff}.leaflet-control-layers-scrollbar{overflow-y:scroll;overflow-x:hidden;padding-right:5px}.leaflet-control-layers-selector{margin-top:2px;position:relative;top:1px}.leaflet-control-layers label{display:block;font-size:13px;font-size:1.08333em}.leaflet-control-layers-separator{height:0;border-top:1px solid #ddd;margin:5px -10px 5px -6px}.leaflet-default-icon-path{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=)}.leaflet-container .leaflet-control-attribution{background:#fff;background:#fffc;margin:0}.leaflet-control-attribution,.leaflet-control-scale-line{padding:0 5px;color:#333;line-height:1.4}.leaflet-control-attribution a{text-decoration:none}.leaflet-control-attribution a:hover,.leaflet-control-attribution a:focus{text-decoration:underline}.leaflet-attribution-flag{display:inline!important;vertical-align:baseline!important;width:1em;height:.6669em}.leaflet-left .leaflet-control-scale{margin-left:5px}.leaflet-bottom .leaflet-control-scale{margin-bottom:5px}.leaflet-control-scale-line{border:2px solid #777;border-top:none;line-height:1.1;padding:2px 5px 1px;white-space:nowrap;-moz-box-sizing:border-box;box-sizing:border-box;background:#fffc;text-shadow:1px 1px #fff}.leaflet-control-scale-line:not(:first-child){border-top:2px solid #777;border-bottom:none;margin-top:-2px}.leaflet-control-scale-line:not(:first-child):not(:last-child){border-bottom:2px solid #777}.leaflet-touch .leaflet-control-attribution,.leaflet-touch .leaflet-control-layers,.leaflet-touch .leaflet-bar{box-shadow:none}.leaflet-touch .leaflet-control-layers,.leaflet-touch .leaflet-bar{border:2px solid rgba(0,0,0,.2);background-clip:padding-box}.leaflet-popup{position:absolute;text-align:center;margin-bottom:20px}.leaflet-popup-content-wrapper{padding:1px;text-align:left;border-radius:12px}.leaflet-popup-content{margin:13px 24px 13px 20px;line-height:1.3;font-size:13px;font-size:1.08333em;min-height:1px}.leaflet-popup-content p{margin:1.3em 0}.leaflet-popup-tip-container{width:40px;height:20px;position:absolute;left:50%;margin-top:-1px;margin-left:-20px;overflow:hidden;pointer-events:none}.leaflet-popup-tip{width:17px;height:17px;padding:1px;margin:-10px auto 0;pointer-events:auto;-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.leaflet-popup-content-wrapper,.leaflet-popup-tip{background:#fff;color:#333;box-shadow:0 3px 14px #0006}.leaflet-container a.leaflet-popup-close-button{position:absolute;top:0;right:0;border:none;text-align:center;width:24px;height:24px;font:16px/24px Tahoma,Verdana,sans-serif;color:#757575;text-decoration:none;background:transparent}.leaflet-container a.leaflet-popup-close-button:hover,.leaflet-container a.leaflet-popup-close-button:focus{color:#585858}.leaflet-popup-scrolled{overflow:auto}.leaflet-oldie .leaflet-popup-content-wrapper{-ms-zoom:1}.leaflet-oldie .leaflet-popup-tip{width:24px;margin:0 auto;-ms-filter:"progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)";filter:progid:DXImageTransform.Microsoft.Matrix(M11=.70710678,M12=.70710678,M21=-.70710678,M22=.70710678)}.leaflet-oldie .leaflet-control-zoom,.leaflet-oldie .leaflet-control-layers,.leaflet-oldie .leaflet-popup-content-wrapper,.leaflet-oldie .leaflet-popup-tip{border:1px solid #999}.leaflet-div-icon{background:#fff;border:1px solid #666}.leaflet-tooltip{position:absolute;padding:6px;background-color:#fff;border:1px solid #fff;border-radius:3px;color:#222;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;box-shadow:0 1px 3px #0006}.leaflet-tooltip.leaflet-interactive{cursor:pointer;pointer-events:auto}.leaflet-tooltip-top:before,.leaflet-tooltip-bottom:before,.leaflet-tooltip-left:before,.leaflet-tooltip-right:before{position:absolute;pointer-events:none;border:6px solid transparent;background:transparent;content:""}.leaflet-tooltip-bottom{margin-top:6px}.leaflet-tooltip-top{margin-top:-6px}.leaflet-tooltip-bottom:before,.leaflet-tooltip-top:before{left:50%;margin-left:-6px}.leaflet-tooltip-top:before{bottom:0;margin-bottom:-12px;border-top-color:#fff}.leaflet-tooltip-bottom:before{top:0;margin-top:-12px;margin-left:-6px;border-bottom-color:#fff}.leaflet-tooltip-left{margin-left:-6px}.leaflet-tooltip-right{margin-left:6px}.leaflet-tooltip-left:before,.leaflet-tooltip-right:before{top:50%;margin-top:-6px}.leaflet-tooltip-left:before{right:0;margin-right:-12px;border-left-color:#fff}.leaflet-tooltip-right:before{left:0;margin-left:-12px;border-right-color:#fff}@media print{.leaflet-control{-webkit-print-color-adjust:exact;print-color-adjust:exact}}';var fv=`.leaflet-control-locate a{cursor:pointer}.leaflet-control-locate a .leaflet-control-locate-location-arrow{display:inline-block;width:16px;height:16px;margin:7px;background-image:url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="black" d="M445 4 29 195c-48 23-32 93 19 93h176v176c0 51 70 67 93 19L508 67c16-38-25-79-63-63z"/></svg>')}.leaflet-control-locate a .leaflet-control-locate-spinner{display:inline-block;width:16px;height:16px;margin:7px;background-image:url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="black" d="M304 48a48 48 0 1 1-96 0 48 48 0 0 1 96 0zm-48 368a48 48 0 1 0 0 96 48 48 0 0 0 0-96zm208-208a48 48 0 1 0 0 96 48 48 0 0 0 0-96zM96 256a48 48 0 1 0-96 0 48 48 0 0 0 96 0zm13 99a48 48 0 1 0 0 96 48 48 0 0 0 0-96zm294 0a48 48 0 1 0 0 96 48 48 0 0 0 0-96zM109 61a48 48 0 1 0 0 96 48 48 0 0 0 0-96z"/></svg>');animation:leaflet-control-locate-spin 2s linear infinite}.leaflet-control-locate.active a .leaflet-control-locate-location-arrow{background-image:url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="rgb(32, 116, 182)" d="M445 4 29 195c-48 23-32 93 19 93h176v176c0 51 70 67 93 19L508 67c16-38-25-79-63-63z"/></svg>')}.leaflet-control-locate.following a .leaflet-control-locate-location-arrow{background-image:url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="rgb(252, 132, 40)" d="M445 4 29 195c-48 23-32 93 19 93h176v176c0 51 70 67 93 19L508 67c16-38-25-79-63-63z"/></svg>')}.leaflet-touch .leaflet-bar .leaflet-locate-text-active{width:100%;max-width:200px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;padding:0 10px}.leaflet-touch .leaflet-bar .leaflet-locate-text-active .leaflet-locate-icon{padding:0 5px 0 0}.leaflet-control-locate-location circle{animation:leaflet-control-locate-throb 4s ease infinite}@keyframes leaflet-control-locate-throb{0%{stroke-width:1}50%{stroke-width:3;transform:scale(.8)}to{stroke-width:1}}@keyframes leaflet-control-locate-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}`;var gv=".leaflet-cluster-anim .leaflet-marker-icon,.leaflet-cluster-anim .leaflet-marker-shadow{-webkit-transition:-webkit-transform .3s ease-out,opacity .3s ease-in;-moz-transition:-moz-transform .3s ease-out,opacity .3s ease-in;-o-transition:-o-transform .3s ease-out,opacity .3s ease-in;transition:transform .3s ease-out,opacity .3s ease-in}.leaflet-cluster-spider-leg{-webkit-transition:-webkit-stroke-dashoffset .3s ease-out,-webkit-stroke-opacity .3s ease-in;-moz-transition:-moz-stroke-dashoffset .3s ease-out,-moz-stroke-opacity .3s ease-in;-o-transition:-o-stroke-dashoffset .3s ease-out,-o-stroke-opacity .3s ease-in;transition:stroke-dashoffset .3s ease-out,stroke-opacity .3s ease-in}";var bv=A`
  ${N}
  ${ia(mv)}
  ${ia(gv)}
  ${ia(fv)}

  :host {
    display: block;
    --link-color: var(--awc-color-primary-600);

    --popup-tip-size: 1rem;
    --popup-text-color: var(--awc-text-paragraph-color);
    --popup-background-color: var(--awc-panel-background-color);
    --popup-border-radius: var(--awc-panel-border-radius);
    --popup-padding: var(--awc-spacing-large) var(--awc-spacing-large) var(--awc-spacing-medium);
    --popup-box-shadow: var(--awc-shadow-medium);

    --controls-background-color: var(--awc-panel-background-color);
    --controls-border-color: var(--awc-panel-border-color);
    --controls-border-width: var(--awc-panel-border-width);
    --controls-border-radius: var(--awc-panel-border-radius);
    --controls-text-color: var(--awc-color-neutral-900);
    --controls-box-shadow: var(--awc-shadow-medium);

    --controls-location-active-color: var(--awc-color-secondary-600);
    --controls-location-following-color: var(--awc-color-primary-600);

    --attribution-background-color: var(--awc-panel-background-color);
    --attribution-text-color: var(--awc-color-neutral-900);
    --attribution-opacity: 0.8;

    --cluster-opacity: 0.8;
    --cluster-ring-opacity: 0.6;
    --cluster-small-color: var(--awc-color-neutral-0);
    --cluster-small-background-color: var(--awc-color-primary-600);
    --cluster-medium-color: var(--awc-color-neutral-0);
    --cluster-medium-background-color: var(--awc-color-primary-600);
    --cluster-large-color: var(--awc-color-neutral-0);
    --cluster-large-background-color: var(--awc-color-primary-600);

    --legend-contents-background: rgba(0, 0, 0, 0.25);
  }

  #map {
    height: 100%;
    width: 100%;
    position: relative;
    
  }

  .leaflet-control-fullscreen-button span {
    width: 30px;
    height: 30px;
  }

  .leaflet-touch .leaflet-control-zoom-in,
  .leaflet-touch .leaflet-control-zoom-out,
  .leaflet-touch .leaflet-control-zoom-in span,
  .leaflet-touch .leaflet-control-zoom-out span,
  .leaflet-control-fullscreen-button span,
  .leaflet-control-locate a,
  .leaflet-control-locate a .leaflet-control-locate-location-arrow   {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /** Legend */
  .leaflet-legend-contents {
    background-color: var(--legend-contents-background);
  }

  .leaflet-legend-contents h3 {
    margin-top: 0;
  }

  .leaflet-legend-title {
    margin: 3px;
    padding-bottom: 5px;
  }

  .leaflet-legend-column {
    float: left;
    margin-left: 10px;
  }

  .leaflet-legend-item {
    display: table;
    margin: 2px 0;
  }

  .leaflet-legend-item span {
    vertical-align: middle;
    display: table-cell;
    word-break: keep-all;
    white-space: nowrap;
    background-color: transparent;
    text-align: left;
  }

  .leaflet-legend-item-clickable {
    cursor: pointer;
  }

  .leaflet-legend-item-inactive span {
    color: #cccccc;
  }

  .leaflet-legend-item-inactive i img,
  .leaflet-legend-item-inactive i canvas {
    opacity: 0.3;
  }

  .leaflet-legend-item i {
    display: inline-block;
    padding: 0px 3px 0px 4px;
    position: relative;
    vertical-align: middle;
  }

  .leaflet-legend-toggle {
    background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTk5MDE0Mjk2NTEwIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE3Nzk4IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwvc3R5bGU+PC9kZWZzPjxwYXRoIGQ9Ik05MzQuNCA0NzguNzJINzM3LjI4Yy0xNS44NzItMTEwLjA4LTExMS4xMDQtMTk0LjU2LTIyNS4yOC0xOTQuNTZTMzAyLjU5MiAzNjguNjQgMjg2LjcyIDQ3OC43Mkg4OS42djY2LjU2SDI4Ni43MmMxNS44NzIgMTEwLjA4IDExMS4xMDQgMTk0LjU2IDIyNS4yOCAxOTQuNTZzMjA5LjQwOC04NC40OCAyMjUuMjgtMTk0LjU2aDE5Ny4xMnYtNjYuNTZ6IiBmaWxsPSIjNzA3MDcwIiBwLWlkPSIxNzc5OSI+PC9wYXRoPjwvc3ZnPg==');
    background-repeat: no-repeat;
    background-position: 50% 50%;
    box-shadow: none;
    border-radius: 4px;
  }

  .leaflet-legend-contents {
    display: none;
  }

  .leaflet-legend-expanded .leaflet-legend-contents {
    display: block;
    padding: 6px 15px 6px 6px;
  }

  .leaflet-legend-contents img {
    position: absolute;
  }

  .leaflet-legend-contents:after {
    content: '';
    display: block;
    clear: both;
  }

  /** Custom */

  .leaflet-container {
    font-family: var(--awc-font-sans);
  }

  .leaflet-touch .leaflet-control-layers, 
  .leaflet-touch .leaflet-bar,
  .leaflet-touch .leaflet-bar a {
    background: var(--controls-background-color);
    border-color: var(--controls-border-color);
    border-width: var(--controls-border-width);
    color: var(--controls-text-color);
    box-shadow: var(--controls-box-shadow);
  }

  .leaflet-bar a.leaflet-disabled {
    pointer-events: none;
    cursor: default;
    opacity: 0.4;
  }

  .leaflet-touch .leaflet-bar a:last-child {
    border-bottom-left-radius: var(--controls-border-radius);
    border-bottom-right-radius: var(--controls-border-radius);
  }
  .leaflet-touch .leaflet-bar a:first-child {
    border-top-left-radius: var(--controls-border-radius);
    border-top-right-radius: var(--controls-border-radius);
  }

  .leaflet-container .leaflet-control-attribution {
    background: var(--attribution-background-color);
    color: var(--attribution-text-color);
    opacity: var(--attribution-opacity);
  }

  .leaflet-container .leaflet-control-attribution .leaflet-attribution-flag {
    display: none !important;
  }import { babel } from '@rollup/plugin-babel';



  .leaflet-container a {
    color: var(--link-color);
  }

  .leaflet-popup-content-wrapper,
  .leaflet-popup-tip {
    background: var(--popup-background-color);
    box-shadow: var(--popup-box-shadow);
  }

  .leaflet-popup-content-wrapper {
    border-radius: var(--popup-border-radius);
    padding: var(--popup-padding);
  }

  .leaflet-popup-content {
    margin: 0;
    color: var(--popup-text-color);
  }

  .leaflet-popup-content p:last-child {
    margin-bottom: 0;
  }

  .leaflet-popup-tip-container {
    width: calc(var(--popup-tip-size) * 1.4142125);
    height: calc((var(--popup-tip-size) * 1.4142125) / 2);
    margin-left: calc(((var(--popup-tip-size) * 1.4142125) / 2) * -1);
  }

  .leaflet-container a.leaflet-popup-close-button {
    color: var(--popup-close-button-color, var(--awc-color-neutral-1000));
  }

  .leaflet-popup-tip {
    width: var(--popup-tip-size);
    height: var(--popup-tip-size);
    margin-top: calc((var(--popup-tip-size) / 2) * -1);
  }

  .leaflet-control-locate a .leaflet-control-locate-location-arrow {
    color: var(--controls-text-color);
    background: none;
    font-size: 1rem;
    width: auto;
    heigth: auto;
    margin: 0;
  }

  .leaflet-control-locate a .leaflet-control-locate-location-arrow awc-spinner {
    font-size: 1rem;
    display: none;
  }

  .leaflet-control-locate.active a .leaflet-control-locate-location-arrow {
    color: var(--controls-location-active-color);
    background: none;
  }

  .leaflet-control-locate.following a .leaflet-control-locate-location-arrow {
    color: var(--controls-location-following-color);
    background: none;
  }

  
  .leaflet-control-locate a .leaflet-control-locate-spinner {
    animation: none;
    background: none;
    width: auto;
    height: auto;
    margin: 0;
    font-size: 1rem;
    display: inline-flex;
  }

  .leaflet-control-locate a .leaflet-control-locate-spinner awc-icon {
    display: none;
  }

  .leaflet-control-locate a .leaflet-control-locate-spinner awc-spinner {
    display: inline-flex;
  }

  .marker-cluster {
    position: relative;
    background-clip: padding-box;
    border-radius: 20px;
    overflow: hidden;
  }
  
  .marker-cluster div {
    position: absolute;
    inset: 5px;
    width: 30px;
    height: 30px;
    overflow: hidden;
    text-align: center;
    border-radius: 15px;
    font: 12px var(--awc-font-sans);
  }

  .marker-cluster span {
    position: relative;
    line-height: 30px;
  }

  .marker-cluster::before,
  .marker-cluster div::before {
    content: "";
    position: absolute;
    inset: 0;
    opacity: var(--cluster-ring-opacity);
  }

  .marker-cluster div::before {
    opacity: var(--cluster-opacity);
  }

  .marker-cluster-small {
    color: var(--cluster-small-color);
  }
  .marker-cluster-small::before,
  .marker-cluster-small div::before {
    background-color: var(--cluster-small-background-color);
  }

  .marker-cluster-medium {
    color: var(--cluster-medium-color);
  }
  .marker-cluster-medium::before,
  .marker-cluster-medium div::before {
    background-color: var(--cluster-medium-background-color);
  }

  .marker-cluster-large {
    color: var(--cluster-large-color);
  }
  .marker-cluster-large::before,
  .marker-cluster-large div::before {
    background-color: var(--cluster-large-background-color);
  }

`;var wC=Object.defineProperty,_C=Object.getOwnPropertyDescriptor,gt=(i,t,e,r)=>{for(var a=r>1?void 0:r?_C(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&wC(t,e,a),a},xC="https://cdn.jsdelivr.net/npm/leaflet/dist/images/",kC="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",CC='Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="http://mapbox.com">Mapbox</a>',vv=18;function zd(i){return i instanceof HTMLElement&&i.tagName.toLowerCase().startsWith("awc-map-")}function LC(i){return zd(i)?!!i.tagName.toLowerCase().match(/(circle|geojson|layer-group|marker|polygon|polyline)$/):!1}function zC(i){return zd(i)?!!i.tagName.toLowerCase().match(/(zoom-control)$/):!1}function yv(i){return!!i.isLayer?.()}function SC(i){return!!i&&typeof i=="object"&&typeof i.getLatLng=="function"&&typeof i.getIcon=="function"}var Os,ft=(Os=class extends dt{constructor(){super(...arguments),this.localize=new et(this),this.latitude=51,this.longitude=0,this.fullscreenControl=!1,this.zoom=-1,this.minZoom=0,this.maxZoom=vv,this.noDragging=!1,this.noTouchZoom=!1,this.noScrollWheelZoom=!1,this.noDoubleClickZoom=!1,this.noBoxZoom=!1,this.noTap=!1,this.tapTolerance=15,this.noTrackResize=!1,this.worldCopyJump=!1,this.noClosePopupOnClick=!1,this.noBounceAtZoomLimits=!1,this.noKeyboard=!1,this.noInertia=!1,this.inertiaDeceleration=3e3,this.inertiaMaxSpeed=1500,this.noZoomControl=!1,this.noAttributionControl=!1,this.zoomAnimationThreshold=4,this.fitToMarkers=!1,this.mapReady=!1,this.stylesheet=void 0}get imagePath(){return this.__imagePath||K.Icon.Default.imagePath||xC}set imagePath(i){this.__imagePath=i}get latLng(){return K.latLng(this.latitude,this.longitude)}get elements(){return[...this.children].flatMap(i=>i instanceof HTMLSlotElement?i.assignedElements():[i]).filter(zd)}connectedCallback(){super.connectedCallback(),K.Icon.Default.imagePath=this.imagePath,this.updateComplete.then(()=>{this.intersectionObserver=new IntersectionObserver(this.onIntersection,{rootMargin:"50%"}),this.mutationObserver=new MutationObserver(this.onMutation),this.resizeObserver=new ResizeObserver(this.onResize),this.startObserver()})}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){try{this.mutationObserver.observe(this,{childList:!0}),this.resizeObserver.observe(this),this.intersectionObserver.observe(this)}catch{}}stopObserver(){this.mutationObserver.disconnect(),this.resizeObserver.disconnect(),this.intersectionObserver.disconnect()}render(){let i=this.querySelector("style")?.innerHTML;return E`
      ${this.stylesheet?E`<link rel="stylesheet" href="${this.stylesheet}" />`:null}
      ${i?E`<style>
            ${i}
          </style>`:null}
      <div id="map"></div>
      <slot id="markers"></slot>
    `}initMap(){this.map&&this.map.remove();let i=K.map(this.mapContainer,{minZoom:this.minZoom,maxZoom:this.maxZoom,dragging:!this.noDragging,touchZoom:!this.noTouchZoom,scrollWheelZoom:!this.noScrollWheelZoom,doubleClickZoom:!this.noDoubleClickZoom,boxZoom:!this.noBoxZoom,tap:!this.noTap,tapTolerance:this.tapTolerance,trackResize:!this.noTrackResize,worldCopyJump:this.worldCopyJump,closePopupOnClick:!this.noClosePopupOnClick,bounceAtZoomLimits:!this.noBounceAtZoomLimits,keyboard:!this.noKeyboard,inertia:!this.noInertia,inertiaDeceleration:this.inertiaDeceleration,inertiaMaxSpeed:this.inertiaMaxSpeed,zoomControl:!1,attributionControl:!this.noAttributionControl,zoomAnimationThreshold:this.zoomAnimationThreshold});this.map=i,!this.noZoomControl&&!this.elements.filter(zC).length&&K.control.zoom({position:"topright",zoomInText:Ta._zoomInText,zoomInTitle:this.localize.term("zoomIn"),zoomOutText:Ta._zoomOutText,zoomOutTitle:this.localize.term("zoomOut")}).addTo(i),i.on(Os.events,this.onLeafletEvent),i.whenReady(this.onLoad),i.on("moveend",this.onMoveend),i.on("zoomend",this.onZoomend),i.setView([this.latitude,this.longitude],this.zoom),Array.from(this.children).some(yv)||this.initDefaultLayer();for(let t of this.elements)t.container=this.map;this.fitToMarkers?this.fitBoundsToMarkers():this.zoom===-1&&i.fitWorld()}toGeoJSON(){return{type:"FeatureCollection",features:this.features?.map?.(i=>i.feature.toGeoJSON())??[]}}async fitBoundsToMarkers(){let i=this.elements.filter(LC);if(!i.length)return;let t=(await Promise.all(i.map(this.getFeatureFromElement))).filter(Boolean);t.length<1||(t.length===1&&t.every(SC)?this.panToMarker(t[0]):this.map.fitBounds(K.featureGroup(t).getBounds()))}panToMarker(i){this.map.setZoom(this.map.getMaxZoom()),this.map.panTo(i.getLatLng())}async getFeatureFromElement(i){return await customElements.whenDefined(i.tagName.toLowerCase()),i.feature||(i.container=this.map),await i.updateComplete,i.feature??i.layer}invalidateSize(){this.map&&this.map.invalidateSize()}fitToMarkersChanged(){!this.mapReady&&this.fitToMarkers||(this.fitBoundsToMarkers(),this.invalidateSize())}viewChanged(){!this.mapReady||this._ignoreViewChange||setTimeout(()=>{this.map.setView(this.latLng,this.zoom)},1)}initDefaultLayer(){let i=CC,t=vv;K.tileLayer(kC,{attribution:i,maxZoom:t}).addTo(this.map)}onLoad(){this.mapReady=!0,this.emit("awc-map-ready")}async onMoveend(){this._ignoreViewChange=!0,this.longitude=this.map.getCenter().lng,this.latitude=this.map.getCenter().lat,await this.updateComplete,this._ignoreViewChange=!1}onZoomend(){this.zoom=this.map.getZoom()}async onIntersection(i){this.mapReady||i.some(t=>t.isIntersecting&&(t.boundingClientRect.height>0||t.boundingClientRect.width>0))&&(await this.updateComplete,this.initMap(),this.intersectionObserver.disconnect())}onResize(){this.invalidateSize(),this.fitToMarkers&&this.mapReady&&this.fitBoundsToMarkers()}onMutation(i){this.map&&i.forEach(({addedNodes:t,removedNodes:e})=>{[...e].filter(yv).forEach(r=>this.map.removeLayer(r.feature)),[...t].forEach(r=>{r.container=this.map})})}},Os.styles=bv,Os.events=["click","dblclick","mousedown","mouseup","mouseover","mouseout","mousemove","contextmenu","focus","blur","preclick","load","unload","viewreset","movestart","move","moveend","dragstart","drag","dragend","zoomstart","zoomend","zoomlevelschange","resize","autopanstart","layeradd","layerremove","baselayerchange","overlayadd","overlayremove","locationfound","locationerror","popupopen","popupclose"].join(" "),Os);gt([u({attribute:!1})],ft.prototype,"map",2);gt([u({type:Number,reflect:!0})],ft.prototype,"latitude",2);gt([u({type:Number,reflect:!0})],ft.prototype,"longitude",2);gt([u({type:Boolean,reflect:!0,attribute:"fullscreen-control"})],ft.prototype,"fullscreenControl",2);gt([u({type:Number,reflect:!0})],ft.prototype,"zoom",2);gt([u({type:Number,attribute:"min-zoom"})],ft.prototype,"minZoom",2);gt([u({type:Number,attribute:"max-zoom"})],ft.prototype,"maxZoom",2);gt([u({type:Boolean,attribute:"no-dragging"})],ft.prototype,"noDragging",2);gt([u({type:Boolean,attribute:"no-touch-zoom"})],ft.prototype,"noTouchZoom",2);gt([u({type:Boolean,attribute:"no-scroll-wheel-zoom"})],ft.prototype,"noScrollWheelZoom",2);gt([u({type:Boolean,attribute:"no-double-click-zoom"})],ft.prototype,"noDoubleClickZoom",2);gt([u({type:Boolean,attribute:"no-box-zoom"})],ft.prototype,"noBoxZoom",2);gt([u({type:Boolean,attribute:"no-tap"})],ft.prototype,"noTap",2);gt([u({type:Number,attribute:"tap-tolerance"})],ft.prototype,"tapTolerance",2);gt([u({type:Boolean,attribute:"no-track-resize"})],ft.prototype,"noTrackResize",2);gt([u({type:Boolean,attribute:"world-copy-jump"})],ft.prototype,"worldCopyJump",2);gt([u({type:Boolean,attribute:"no-close-popup-on-click"})],ft.prototype,"noClosePopupOnClick",2);gt([u({type:Boolean,attribute:"no-bounce-at-zoom-limits"})],ft.prototype,"noBounceAtZoomLimits",2);gt([u({type:Boolean,attribute:"no-keyboard"})],ft.prototype,"noKeyboard",2);gt([u({type:Boolean,attribute:"no-inertia"})],ft.prototype,"noInertia",2);gt([u({type:Number,attribute:"inertia-deceleration"})],ft.prototype,"inertiaDeceleration",2);gt([u({type:Number,attribute:"inertia-max-speed"})],ft.prototype,"inertiaMaxSpeed",2);gt([u({type:Boolean,attribute:"no-zoom-control"})],ft.prototype,"noZoomControl",2);gt([u({type:Boolean,attribute:"no-attribution-control"})],ft.prototype,"noAttributionControl",2);gt([u({type:Number,attribute:"zoom-animation-threshold"})],ft.prototype,"zoomAnimationThreshold",2);gt([u({reflect:!0,attribute:"image-path"})],ft.prototype,"imagePath",1);gt([u({type:Boolean,attribute:"fit-to-markers"})],ft.prototype,"fitToMarkers",2);gt([X()],ft.prototype,"mapReady",2);gt([F("#map")],ft.prototype,"mapContainer",2);gt([u({type:String})],ft.prototype,"stylesheet",2);gt([re],ft.prototype,"getFeatureFromElement",1);gt([M("fit-to-markers",{waitUntilFirstUpdate:!0})],ft.prototype,"fitToMarkersChanged",1);gt([M("latitude",{waitUntilFirstUpdate:!0}),M("longitude",{waitUntilFirstUpdate:!0}),M("zoom",{waitUntilFirstUpdate:!0})],ft.prototype,"viewChanged",1);gt([re],ft.prototype,"onLoad",1);gt([re],ft.prototype,"onMoveend",1);gt([re],ft.prototype,"onZoomend",1);gt([re],ft.prototype,"onIntersection",1);gt([re],ft.prototype,"onResize",1);gt([re],ft.prototype,"onMutation",1);var Sd=ft;Sd.define("awc-map");var wv=new WeakMap;function TC(i,t){let e=t;for(;e;){if(wv.get(e)===i)return!0;e=Object.getPrototypeOf(e)}return!1}function il(i){return t=>{if(TC(i,t))return t;let e=i(t);return wv.set(e,i),e}}var PC=Object.defineProperty,EC=Object.getOwnPropertyDescriptor,OC=(i,t,e,r)=>{for(var a=r>1?void 0:r?EC(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&PC(t,e,a),a},yi=il(i=>{class t extends i{connectedCallback(){super.connectedCallback(),MutationObserver&&!this.popupMO&&(this.popupMO=new MutationObserver(this.updatePopupContent),this.popupMO.observe(this,{childList:!0,characterData:!0,attributes:!0,subtree:!0}))}updatePopupContent(){if(!this.feature)return;this.feature.unbindPopup();let r=this.innerHTML.replace(/<\/?awc-map-point[^>]*>/g,"").trim();r&&this.feature.bindPopup(r)}disconnectedCallback(){super.disconnectedCallback(),this.popupMO&&this.popupMO.disconnect()}}return OC([re],t.prototype,"updatePopupContent",1),t});var _v=A`
  :host {
    display: none;
  }
`;var MC=Object.defineProperty,AC=Object.getOwnPropertyDescriptor,Ms=(i,t,e,r)=>{for(var a=r>1?void 0:r?AC(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&MC(t,e,a),a},xv=class extends dt{constructor(){super(...arguments),this.className=""}getIcon(){if(this.icon)return this.icon;let{className:t,iconWidth:e,iconHeight:r,iconAnchorX:a,iconAnchorY:s,innerHTML:l}=this,p=e&&r?K.point(e,r):void 0,d=a&&s?K.point(a,s):void 0;return this.icon=K.divIcon({iconSize:p,iconAnchor:d,className:t,html:l}),this.icon}updated(t){super.updated(t),this.icon=null}};xv.styles=_v;var wi=xv;Ms([u({attribute:"icon-width",type:Number})],wi.prototype,"iconWidth",2);Ms([u({attribute:"icon-height",type:Number})],wi.prototype,"iconHeight",2);Ms([u({attribute:"icon-anchor-x",type:Number})],wi.prototype,"iconAnchorX",2);Ms([u({attribute:"icon-anchor-y",type:Number})],wi.prototype,"iconAnchorY",2);Ms([u({attribute:"class-name",type:String})],wi.prototype,"className",2);wi.define("awc-map-divicon");var $C=Object.defineProperty,IC=Object.getOwnPropertyDescriptor,Qe=(i,t,e,r)=>{for(var a=r>1?void 0:r?IC(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&$C(t,e,a),a},Ze=class kv extends dt{constructor(){super(...arguments),this.className="",this.icon=null}static isLeafletIcon(t){return t instanceof kv}getIcon(){if(this.icon)return this.icon;let{className:t,iconAnchorX:e,iconAnchorY:r,iconHeight:a,iconRetinaUrl:s,iconUrl:l,iconWidth:p,popupAnchorX:d,popupAnchorY:h,shadowAnchorX:f,shadowAnchorY:g,shadowHeight:v,shadowRetinaUrl:y,shadowUrl:_,shadowWidth:x}=this,P=p&&a?K.point(p,a):void 0,S=e&&r?K.point(e,r):void 0,k=x&&v?K.point(x,v):void 0,C=f&&g?K.point(f,g):void 0,z=d&&h?K.point(d,h):void 0;return this.icon=K.icon({className:t,iconAnchor:S,iconRetinaUrl:s,iconSize:P,iconUrl:l,popupAnchor:z,shadowAnchor:C,shadowRetinaUrl:y,shadowSize:k,shadowUrl:_}),this.icon}updated(t){super.updated(t),this.icon=null}};Qe([u({type:String,attribute:"icon-url"})],Ze.prototype,"iconUrl",2);Qe([u({type:String,attribute:"icon-retina-url"})],Ze.prototype,"iconRetinaUrl",2);Qe([u({type:Number,attribute:"icon-width"})],Ze.prototype,"iconWidth",2);Qe([u({type:Number,attribute:"icon-height"})],Ze.prototype,"iconHeight",2);Qe([u({type:Number,attribute:"icon-anchor-x"})],Ze.prototype,"iconAnchorX",2);Qe([u({type:Number,attribute:"icon-anchor-y"})],Ze.prototype,"iconAnchorY",2);Qe([u({type:String,attribute:"shadow-url"})],Ze.prototype,"shadowUrl",2);Qe([u({type:String,attribute:"shadow-retina-url"})],Ze.prototype,"shadowRetinaUrl",2);Qe([u({type:Number,attribute:"shadow-width"})],Ze.prototype,"shadowWidth",2);Qe([u({type:Number,attribute:"shadow-height"})],Ze.prototype,"shadowHeight",2);Qe([u({type:Number,attribute:"shadow-anchor-x"})],Ze.prototype,"shadowAnchorX",2);Qe([u({type:Number,attribute:"shadow-anchor-y"})],Ze.prototype,"shadowAnchorY",2);Qe([u({type:Number,attribute:"popup-anchor-x"})],Ze.prototype,"popupAnchorX",2);Qe([u({type:Number,attribute:"popup-anchor-y"})],Ze.prototype,"popupAnchorY",2);Qe([u({attribute:"class-name"})],Ze.prototype,"className",2);var As=Ze;As.define("awc-map-icon");var Cv=A`
  :host {
    display: none;
  }
`;var DC=Object.defineProperty,BC=Object.getOwnPropertyDescriptor,We=(i,t,e,r)=>{for(var a=r>1?void 0:r?BC(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&DC(t,e,a),a};function Lv(i){return typeof i=="number"&&!Number.isNaN(i)}var Ur,Be=(Ur=class extends yi(dt){constructor(){super(...arguments),this.draggable=!1,this.keyboard=!1,this.title="",this.alt="",this.zIndexOffset=0,this.opacity=1,this.riseOnHover=!1,this.riseOffset=250}static isLeafletMarker(i){return i instanceof Ur}get latLng(){return this.feature?.getLatLng?.()??null}containerChanged(){this.container&&(this.feature=K.marker([this.latitude,this.longitude],{draggable:this.draggable,keyboard:this.keyboard,title:this.title,alt:this.alt,zIndexOffset:this.zIndexOffset,opacity:this.opacity,riseOnHover:this.riseOnHover,riseOffset:this.riseOffset}),this.iconChanged(),this.feature.on(Ur.events,this.onLeafletEvent),this.feature.on("move",this.onMove),this.updatePopupContent(),this.feature.addTo(this.container))}draggableChanged(){this.feature&&(this.feature.off(Ur.events),this.container instanceof K.Map&&this.feature.removeFrom(this.container),this.containerChanged())}iconChanged(){let i;typeof this.icon=="string"?i=this.walkDOMForIcon(this.icon):this.icon?.options?{icon:i}=this:this.icon?i=K.icon(this.icon):i=new K.Icon.Default,this.feature&&this.feature.setIcon(i)}walkDOMForIcon(i){let t=this.shadowRoot?.getElementById(i)||this.mapElement?(this.mapElement?.getRootNode()).getElementById(i):null,e=this.getRootNode();for(;!t;)if(e instanceof ShadowRoot)t=e.getElementById(i),e=e.host.getRootNode();else if(e instanceof Document){t=e.getElementById(i);break}if(t instanceof As||t instanceof wi)return t.getIcon();try{return K.icon(JSON.parse(i))}catch{return new K.Icon.Default}}onMove(i){let t=i.target.getLatLng();this.latitude=t.lat,this.longitude=t.lng}positionChanged(){if(!Lv(this.latitude)||!Lv(this.longitude))return;let i=K.latLng(this.latitude,this.longitude);this.feature&&!this.latLng?.equals?.(i)&&this.feature.setLatLng(i)}zIndexOffsetChanged(){this.feature&&this.feature.setZIndexOffset(this.zIndexOffset)}opacityChanged(){this.feature&&this.feature.setOpacity(this.opacity)}disconnectedCallback(){super.disconnectedCallback(),this.container&&this.feature&&this.container.removeLayer(this.feature)}},Ur.styles=Cv,Ur.events=["click","dblclick","mousedown","mouseover","mouseout","contextmenu","dragstart","drag","dragend","move","add","remove","popupopen","popupclose"].join(" "),Ur);We([u({type:Number,reflect:!0})],Be.prototype,"latitude",2);We([u({type:Number,reflect:!0})],Be.prototype,"longitude",2);We([u({type:String})],Be.prototype,"icon",2);We([u({type:Boolean})],Be.prototype,"draggable",2);We([u({type:Boolean})],Be.prototype,"keyboard",2);We([u()],Be.prototype,"title",2);We([u()],Be.prototype,"alt",2);We([u({type:Number,attribute:"z-index-offset"})],Be.prototype,"zIndexOffset",2);We([u({type:Number})],Be.prototype,"opacity",2);We([u({type:Boolean,attribute:"rise-on-hover"})],Be.prototype,"riseOnHover",2);We([u({type:Number,attribute:"rise-offset"})],Be.prototype,"riseOffset",2);We([M("draggable",{waitUntilFirstUpdate:!0})],Be.prototype,"draggableChanged",1);We([M("icon",{waitUntilFirstUpdate:!0})],Be.prototype,"iconChanged",1);We([M("latitude",{waitUntilFirstUpdate:!0}),M("longitude",{waitUntilFirstUpdate:!0})],Be.prototype,"positionChanged",1);We([M("z-index-offset",{waitUntilFirstUpdate:!0})],Be.prototype,"zIndexOffsetChanged",1);We([M("opacity",{waitUntilFirstUpdate:!0})],Be.prototype,"opacityChanged",1);var Td=Be;Td.define("awc-map-marker");var zv=A`
  :host {
    display: none;
  }
`;var RC=Object.defineProperty,FC=Object.getOwnPropertyDescriptor,Te=(i,t,e,r)=>{for(var a=r>1?void 0:r?FC(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&RC(t,e,a),a},Pa,xe=(Pa=class extends yi(dt){constructor(){super(...arguments),this.radius=100,this.stroke=!0,this.color="#03f",this.weight=5,this.opacity=.5,this.fill=!1,this.fillColor=void 0,this.fillOpacity=.2,this.dashArray=void 0,this.lineCap=void 0,this.lineJoin=void 0,this.pointerEvents=void 0,this.clickable=!1,this.className=""}static isLeafletCircle(i){return i instanceof Pa}getPathOptions(){return{stroke:this.stroke,color:this.color,weight:this.weight,opacity:this.opacity,fill:this.fill,fillColor:this.fillColor,fillOpacity:this.fillOpacity,dashArray:this.dashArray,lineCap:this.lineCap,lineJoin:this.lineJoin,className:this.className}}containerChanged(){this.latitude&&this.longitude&&this.container&&(this.feature=K.circle([this.latitude,this.longitude],this.radius,this.getPathOptions()),this.feature.on(Pa.events,this.onLeafletEvent),this.updatePopupContent(),this.feature.addTo(this.container))}updatePosition(){this.feature&&this.latitude!==null&&this.longitude!==null&&this.feature.setLatLng(K.latLng(this.latitude,this.longitude))}updateRadius(){this.feature&&this.radius!==null&&this.feature.setRadius(this.radius)}},Pa.styles=zv,Pa.events="click dblclick mousedown mouseover mouseout contextmenu add remove popupopen popupclose",Pa);Te([u({type:Number})],xe.prototype,"longitude",2);Te([u({type:Number})],xe.prototype,"latitude",2);Te([u({type:Number})],xe.prototype,"radius",2);Te([u({type:Boolean})],xe.prototype,"stroke",2);Te([u({type:String})],xe.prototype,"color",2);Te([u({type:Number})],xe.prototype,"weight",2);Te([u({type:Number})],xe.prototype,"opacity",2);Te([u({type:Boolean})],xe.prototype,"fill",2);Te([u({type:String,attribute:"fill-color"})],xe.prototype,"fillColor",2);Te([u({type:Number,attribute:"fill-opacity"})],xe.prototype,"fillOpacity",2);Te([u({type:String,attribute:"dash-array"})],xe.prototype,"dashArray",2);Te([u({type:String,attribute:"line-cap"})],xe.prototype,"lineCap",2);Te([u({type:String,attribute:"line-join"})],xe.prototype,"lineJoin",2);Te([u({type:String,attribute:"pointer-events"})],xe.prototype,"pointerEvents",2);Te([u({type:Boolean})],xe.prototype,"clickable",2);Te([u({type:String,attribute:"class-name"})],xe.prototype,"className",2);Te([M("latitude",{waitUntilFirstUpdate:!0}),M("longitude",{waitUntilFirstUpdate:!0})],xe.prototype,"updatePosition",1);Te([M("radius",{waitUntilFirstUpdate:!0})],xe.prototype,"updateRadius",1);var Pd=xe;Pd.define("awc-map-circle");var Sv=A`
  :host {
    display: none;
  }
`;var NC=Object.defineProperty,jC=Object.getOwnPropertyDescriptor,Tv=(i,t,e,r)=>{for(var a=r>1?void 0:r?jC(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&NC(t,e,a),a},rl,Ed=(rl=class extends dt{constructor(){super(...arguments),this.latitude=0,this.longitude=0}static isLeafletPoint(i){return i instanceof rl}get latLng(){return K.latLng(this.latitude,this.longitude)}},rl.styles=Sv,rl);Tv([u({type:Number,reflect:!0})],Ed.prototype,"latitude",2);Tv([u({type:Number,reflect:!0})],Ed.prototype,"longitude",2);var Vr=Ed;var Pv=A`
  :host {
    display: none;
  }
`;var UC=Object.defineProperty,VC=Object.getOwnPropertyDescriptor,bo=(i,t,e,r)=>{for(var a=r>1?void 0:r?VC(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&UC(t,e,a),a},$s,to=($s=class extends yi(dt){constructor(){super(...arguments),this.stroke=!0,this.color="#03f",this.weight=5,this.opacity=.5,this.fill=!1,this.fillColor=void 0,this.fillOpacity=.2,this.dashArray=void 0,this.lineCap=void 0,this.lineJoin=void 0,this.pointerEvents=void 0,this.clickable=!1,this.className=""}getPathOptions(){return{stroke:this.stroke,color:this.color,weight:this.weight,opacity:this.opacity,fill:this.fill,fillColor:this.fillColor,fillOpacity:this.fillOpacity,dashArray:this.dashArray,lineCap:this.lineCap,lineJoin:this.lineJoin,className:this.className}}containerChanged(){let i=this.getPathOptions();this.feature=K.polygon([],i),this.feature.addTo(this.container);let t=[...this.children].filter(Vr.isLeafletPoint).map(e=>e.latLng);this.feature.setLatLngs(t),this.updatePopupContent(),this.feature.on($s.events,this.onLeafletEvent)}disconnectedCallback(){super.disconnectedCallback(),this.container&&this.feature&&this.container.removeLayer(this.feature)}},$s.styles=Pv,$s.events="click dblclick mousedown mouseover mouseout contextmenu add remove popupopen popupclose",$s);bo([u({attribute:!1})],to.prototype,"feature",2);bo([u({type:Boolean})],to.prototype,"stroke",2);bo([u({type:String})],to.prototype,"color",2);bo([u({type:Number})],to.prototype,"weight",2);bo([u({type:Number})],to.prototype,"opacity",2);bo([u({type:Boolean})],to.prototype,"fill",2);bo([u({type:String,attribute:"fill-color"})],to.prototype,"fillColor",2);bo([u({type:Number,attribute:"fill-opacity"})],to.prototype,"fillOpacity",2);bo([u({type:String,attribute:"dash-array"})],to.prototype,"dashArray",2);bo([u({type:String,attribute:"line-cap"})],to.prototype,"lineCap",2);bo([u({type:String,attribute:"line-join"})],to.prototype,"lineJoin",2);bo([u({type:String,attribute:"pointer-events"})],to.prototype,"pointerEvents",2);bo([u({type:Boolean})],to.prototype,"clickable",2);bo([u({type:String,attribute:"class-name"})],to.prototype,"className",2);var Od=to;Od.define("awc-map-polygon");var vo=il(i=>class extends i{isLayer(){return!0}});var Ev=A`
  :host {
    display: none;
  }
`;var HC=Object.defineProperty,ZC=Object.getOwnPropertyDescriptor,me=(i,t,e,r)=>{for(var a=r>1?void 0:r?ZC(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&HC(t,e,a),a},Is,ne=(Is=class extends vo(dt){constructor(){super(...arguments),this.url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",this.minZoom=0,this.maxZoom=18,this.tileSize=256,this.subdomains="abc",this.errorTileUrl="",this.attribution="",this.tms=!1,this.continuousWorld=!1,this.noWrap=!1,this.zoomOffset=0,this.zoomReverse=!1,this.opacity=1,this.zIndex=1,this.detectRetina=!1,this.reuseTiles=!1}get cleanedUrl(){return this.url.replace(/%7B([sxyz])%7D/g,"{$1}")}containerChanged(){this.container&&(this.layer=K.tileLayer(this.cleanedUrl,{attribution:this.innerHTML+this.attribution,minZoom:this.minZoom,maxZoom:this.maxZoom,maxNativeZoom:this.maxNativeZoom,tileSize:this.tileSize,subdomains:this.subdomains,errorTileUrl:this.errorTileUrl,tms:this.tms,noWrap:this.noWrap,zoomOffset:this.zoomOffset,zoomReverse:this.zoomReverse,opacity:this.opacity,zIndex:this.zIndex,detectRetina:this.detectRetina}),this.layer.on(Is.events,this.onLeafletEvent),this.container instanceof K.Map&&this.container.setMaxZoom(this.maxZoom),this.layer.addTo(this.container))}urlChanged(){this.layer&&this.layer.setUrl(this.cleanedUrl)}opacityChanged(){this.layer&&this.layer.setOpacity(this.opacity)}zIndexChanged(){this.layer&&this.layer.setZIndex(this.zIndex)}disconnectedCallback(){super.disconnectedCallback?.(),this.container&&this.layer&&this.container.removeLayer(this.layer)}},Is.styles=Ev,Is.events="loading load tileloadstart tileload tileunload",Is);me([u({type:String})],ne.prototype,"url",2);me([u({type:Number,attribute:"min-zoom"})],ne.prototype,"minZoom",2);me([u({type:Number,attribute:"max-zoom"})],ne.prototype,"maxZoom",2);me([u({type:Number,attribute:"max-native-zoom"})],ne.prototype,"maxNativeZoom",2);me([u({type:Number,attribute:"tile-size"})],ne.prototype,"tileSize",2);me([u({type:String})],ne.prototype,"subdomains",2);me([u({type:String,attribute:"error-tile-url"})],ne.prototype,"errorTileUrl",2);me([u({type:String})],ne.prototype,"attribution",2);me([u({type:Boolean})],ne.prototype,"tms",2);me([u({type:Boolean,attribute:"continuous-world"})],ne.prototype,"continuousWorld",2);me([u({type:Boolean})],ne.prototype,"noWrap",2);me([u({type:Number,attribute:"zoom-offset"})],ne.prototype,"zoomOffset",2);me([u({type:Boolean,attribute:"zoom-reverse"})],ne.prototype,"zoomReverse",2);me([u({type:Number})],ne.prototype,"opacity",2);me([u({type:Number,attribute:"z-index"})],ne.prototype,"zIndex",2);me([u({type:Boolean,attribute:"detect-retina"})],ne.prototype,"detectRetina",2);me([u({type:Boolean,attribute:"reuse-tiles"})],ne.prototype,"reuseTiles",2);me([M("url",{waitUntilFirstUpdate:!0})],ne.prototype,"urlChanged",1);me([M("opacity",{waitUntilFirstUpdate:!0})],ne.prototype,"opacityChanged",1);me([M("z-index",{waitUntilFirstUpdate:!0})],ne.prototype,"zIndexChanged",1);var Md=ne;Md.define("awc-map-tilelayer");var Ov=A`
  :host {
    display: none;
  }
`;var WC=Object.defineProperty,qC=Object.getOwnPropertyDescriptor,qt=(i,t,e,r)=>{for(var a=r>1?void 0:r?qC(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&WC(t,e,a),a},Ds,Zt=(Ds=class extends vo(dt){constructor(){super(...arguments),this.url="",this.minZoom=0,this.maxZoom=18,this.tileSize=256,this.subdomains="abc",this.errorTileUrl="",this.attribution="",this.tms=!1,this.continuousWorld=!1,this.noWrap=!1,this.zoomOffset=0,this.zoomReverse=!1,this.opacity=1,this.zIndex=10,this.detectRetina=!1,this.reuseTiles=!1,this.layers="",this.styles="",this.format="image/jpeg",this.transparent=!1,this.version="1.1.1"}containerChanged(){this.container&&(this.layer=K.tileLayer.wms(this.url,{attribution:this.innerHTML+this.attribution,minZoom:this.minZoom,maxZoom:this.maxZoom,maxNativeZoom:this.maxNativeZoom,tileSize:this.tileSize,subdomains:this.subdomains,errorTileUrl:this.errorTileUrl,tms:this.tms,noWrap:this.noWrap,zoomOffset:this.zoomOffset,zoomReverse:this.zoomReverse,opacity:this.opacity,zIndex:this.zIndex,detectRetina:this.detectRetina,layers:this.layers,styles:this.styles,format:this.format,transparent:this.transparent,version:this.version,crs:this.crs}),this.layer.on(Ds.events,this.onLeafletEvent),this.layer.addTo(this.container))}urlChanged(){this.layer&&this.layer.setUrl(this.url)}opacityChanged(){this.layer&&this.layer.setOpacity(this.opacity)}zIndexChanged(){this.layer&&this.layer.setZIndex(this.zIndex)}disconnectedCallback(){super.disconnectedCallback?.(),this.container&&this.layer&&this.container.removeLayer(this.layer)}},Ds.styles=Ov,Ds.events="loading load tileloadstart tileload tileunload",Ds);qt([u({type:String})],Zt.prototype,"url",2);qt([u({type:Number,attribute:"min-zoom"})],Zt.prototype,"minZoom",2);qt([u({type:Number,attribute:"max-zoom"})],Zt.prototype,"maxZoom",2);qt([u({type:Number,attribute:"max-native-zoom"})],Zt.prototype,"maxNativeZoom",2);qt([u({type:Number,attribute:"tile-size"})],Zt.prototype,"tileSize",2);qt([u({type:String})],Zt.prototype,"subdomains",2);qt([u({type:String,attribute:"error-tile-url"})],Zt.prototype,"errorTileUrl",2);qt([u({type:String})],Zt.prototype,"attribution",2);qt([u({type:Boolean})],Zt.prototype,"tms",2);qt([u({type:Boolean,attribute:"continuous-world"})],Zt.prototype,"continuousWorld",2);qt([u({type:Boolean})],Zt.prototype,"noWrap",2);qt([u({type:Number,attribute:"zoom-offset"})],Zt.prototype,"zoomOffset",2);qt([u({type:Boolean,attribute:"zoom-reverse"})],Zt.prototype,"zoomReverse",2);qt([u({type:Number})],Zt.prototype,"opacity",2);qt([u({type:Number,attribute:"z-index"})],Zt.prototype,"zIndex",2);qt([u({type:Boolean,attribute:"detect-retina"})],Zt.prototype,"detectRetina",2);qt([u({type:Boolean,attribute:"reuse-tiles"})],Zt.prototype,"reuseTiles",2);qt([u()],Zt.prototype,"layers",2);qt([u()],Zt.prototype,"styles",2);qt([u()],Zt.prototype,"format",2);qt([u({type:Boolean})],Zt.prototype,"transparent",2);qt([u()],Zt.prototype,"version",2);qt([u({attribute:!1})],Zt.prototype,"crs",2);qt([M("url",{waitUntilFirstUpdate:!0})],Zt.prototype,"urlChanged",1);qt([M("opacity",{waitUntilFirstUpdate:!0})],Zt.prototype,"opacityChanged",1);qt([M("z-index",{waitUntilFirstUpdate:!0})],Zt.prototype,"zIndexChanged",1);var Ad=Zt;Ad.define("awc-map-tilelayer-wms");var Mv=A`
  ${N}

  :host {
    display: block;
  }
`;var GC=Object.defineProperty,YC=Object.getOwnPropertyDescriptor,Bs=(i,t,e,r)=>{for(var a=r>1?void 0:r?YC(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&GC(t,e,a),a},Av=class extends dt{constructor(){super(...arguments),this.position="topright",this.maxWidth=100,this.metric=!1,this.imperial=!1,this.updateWhenIdle=!1}containerChanged(){this.container&&(this.control=K.control.scale({position:this.position,maxWidth:this.maxWidth,metric:this.metric||!this.imperial,imperial:this.imperial||!this.metric,updateWhenIdle:this.updateWhenIdle}),this.control.addTo(this.container))}disconnectedCallback(){this.container&&this.control&&this.container.removeControl(this.control)}};Av.styles=Mv;var lr=Av;Bs([u({type:String})],lr.prototype,"position",2);Bs([u({type:Number,attribute:"max-width"})],lr.prototype,"maxWidth",2);Bs([u({type:Boolean})],lr.prototype,"metric",2);Bs([u({type:Boolean})],lr.prototype,"imperial",2);Bs([u({type:Boolean,attribute:"update-when-idle"})],lr.prototype,"updateWhenIdle",2);lr.define("awc-map-scale-control");var $v=A`
  :host {
    display: none;
  }
`;var KC=Object.defineProperty,XC=Object.getOwnPropertyDescriptor,eo=(i,t,e,r)=>{for(var a=r>1?void 0:r?XC(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&KC(t,e,a),a},Iv=class extends vo(dt){constructor(){super(...arguments),this.stroke=!0,this.color="#03f",this.weight=5,this.opacity=.5,this.fill=!1,this.fillColor=void 0,this.fillOpacity=.2,this.dashArray=void 0,this.lineCap=void 0,this.lineJoin=void 0,this.pointerEvents=void 0,this.clickable=!1,this.className=""}getPathOptions(){return{stroke:this.stroke,color:this.color,weight:this.weight,opacity:this.opacity,fill:this.fill,fillColor:this.fillColor,fillOpacity:this.fillOpacity,dashArray:this.dashArray,lineCap:this.lineCap,lineJoin:this.lineJoin,className:this.className}}get data(){if(this._data)return this._data;try{let t=this.querySelector('script[type="application/json"]')?.innerHTML;if(t)return JSON.parse(t)}catch(t){console.error(t)}}set data(t){let e=this.data;this._data=t,this.requestUpdate("data",e)}containerChanged(){!this.container||!this.data||(this.feature&&this.container.removeLayer(this.feature),this.feature=K.geoJSON(this.data),this.feature.addTo(this.container).setStyle(this.getPathOptions()))}disconnectedCallback(){super.disconnectedCallback?.(),this.container&&this.feature&&this.container.removeLayer(this.feature)}};Iv.styles=$v;var Pe=Iv;eo([u({type:Boolean})],Pe.prototype,"stroke",2);eo([u({type:String})],Pe.prototype,"color",2);eo([u({type:Number})],Pe.prototype,"weight",2);eo([u({type:Number})],Pe.prototype,"opacity",2);eo([u({type:Boolean})],Pe.prototype,"fill",2);eo([u({type:String,attribute:"fill-color"})],Pe.prototype,"fillColor",2);eo([u({type:Number,attribute:"fill-opacity"})],Pe.prototype,"fillOpacity",2);eo([u({type:String,attribute:"dash-array"})],Pe.prototype,"dashArray",2);eo([u({type:String,attribute:"line-cap"})],Pe.prototype,"lineCap",2);eo([u({type:String,attribute:"line-join"})],Pe.prototype,"lineJoin",2);eo([u({type:String,attribute:"pointer-events"})],Pe.prototype,"pointerEvents",2);eo([u({type:Boolean})],Pe.prototype,"clickable",2);eo([u({type:String,attribute:"class-name"})],Pe.prototype,"className",2);eo([u({attribute:!1})],Pe.prototype,"data",1);eo([M("data",{waitUntilFirstUpdate:!0})],Pe.prototype,"containerChanged",1);Pe.define("awc-map-geojson");Vr.define("awc-map-point");var Dv=A`
  :host {
    display: none;
  }
`;var JC=Object.defineProperty,QC=Object.getOwnPropertyDescriptor,yo=(i,t,e,r)=>{for(var a=r>1?void 0:r?QC(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&JC(t,e,a),a},Rs,oo=(Rs=class extends yi(dt){constructor(){super(...arguments),this.stroke=!0,this.color="#03f",this.weight=5,this.opacity=.5,this.fill=!1,this.fillColor=void 0,this.fillOpacity=.2,this.dashArray=void 0,this.lineCap=void 0,this.lineJoin=void 0,this.pointerEvents=void 0,this.clickable=!1,this.className=""}getPathOptions(){return{stroke:this.stroke,color:this.color,weight:this.weight,opacity:this.opacity,fill:this.fill,fillColor:this.fillColor,fillOpacity:this.fillOpacity,dashArray:this.dashArray,lineCap:this.lineCap,lineJoin:this.lineJoin,className:this.className}}containerChanged(){this.feature=K.polyline([],this.getPathOptions()),this.feature.addTo(this.container);let i=[...this.children].filter(Vr.isLeafletPoint).map(t=>t.latLng);this.feature.setLatLngs(i),this.updatePopupContent(),this.feature.on(Rs.events,this.onLeafletEvent)}disconnectedCallback(){super.disconnectedCallback(),this.container&&this.feature&&this.container.removeLayer(this.feature)}},Rs.styles=Dv,Rs.events="click dblclick mousedown mouseover mouseout contextmenu add remove popupopen popupclose",Rs);yo([u({attribute:!1})],oo.prototype,"feature",2);yo([u({type:Boolean})],oo.prototype,"stroke",2);yo([u({type:String})],oo.prototype,"color",2);yo([u({type:Number})],oo.prototype,"weight",2);yo([u({type:Number})],oo.prototype,"opacity",2);yo([u({type:Boolean})],oo.prototype,"fill",2);yo([u({type:String,attribute:"fill-color"})],oo.prototype,"fillColor",2);yo([u({type:Number,attribute:"fill-opacity"})],oo.prototype,"fillOpacity",2);yo([u({type:String,attribute:"dash-array"})],oo.prototype,"dashArray",2);yo([u({type:String,attribute:"line-cap"})],oo.prototype,"lineCap",2);yo([u({type:String,attribute:"line-join"})],oo.prototype,"lineJoin",2);yo([u({type:String,attribute:"pointer-events"})],oo.prototype,"pointerEvents",2);yo([u({type:Boolean})],oo.prototype,"clickable",2);yo([u({type:String,attribute:"class-name"})],oo.prototype,"className",2);var $d=oo;$d.define("awc-map-polyline");var t2=Object.defineProperty,e2=Object.getOwnPropertyDescriptor,o2=(i,t,e,r)=>{for(var a=r>1?void 0:r?e2(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&t2(t,e,a),a},Ea=class extends dt{firstUpdated(){this.mutationObserver=new MutationObserver(this.registerContainerOnChildren),this.mutationObserver.observe(this,{childList:!0})}containerChanged(){this.container&&(this.feature=K.layerGroup(),this.feature.addTo(this.container),this.registerContainerOnChildren())}disconnectedCallback(){super.disconnectedCallback(),this.container&&this.feature&&this.container.removeLayer(this.feature),this.mutationObserver.disconnect()}registerContainerOnChildren(){for(let t of this.children)t.container=this.feature}};o2([re],Ea.prototype,"registerContainerOnChildren",1);Ea.define("awc-map-layer-group");var Bv={exports:{}};(function(i,t){(function(e,r){typeof r<"u"&&r.L?i.exports=e(L):i.exports=e(ol()),typeof r<"u"&&r.L&&(r.L.Control.Locate=e(L))})(function(e){let r=(h,f,g)=>{g=g.split(" "),g.forEach(function(v){e.DomUtil[h].call(this,f,v)})},a=(h,f)=>r("addClass",h,f),s=(h,f)=>r("removeClass",h,f),l=e.Marker.extend({initialize(h,f){e.Util.setOptions(this,f),this._latlng=h,this.createIcon()},createIcon(){let h=this.options,f="";h.color!==void 0&&(f+=`stroke:${h.color};`),h.weight!==void 0&&(f+=`stroke-width:${h.weight};`),h.fillColor!==void 0&&(f+=`fill:${h.fillColor};`),h.fillOpacity!==void 0&&(f+=`fill-opacity:${h.fillOpacity};`),h.opacity!==void 0&&(f+=`opacity:${h.opacity};`);let g=this._getIconSVG(h,f);this._locationIcon=e.divIcon({className:g.className,html:g.svg,iconSize:[g.w,g.h]}),this.setIcon(this._locationIcon)},_getIconSVG(h,f){let g=h.radius,v=h.weight,y=g+v,_=y*2;return{className:"leaflet-control-locate-location",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="${_}" height="${_}" version="1.1" viewBox="-${y} -${y} ${_} ${_}"><circle r="`+g+'" style="'+f+'" /></svg>',w:_,h:_}},setStyle(h){e.Util.setOptions(this,h),this.createIcon()}}),p=l.extend({initialize(h,f,g){e.Util.setOptions(this,g),this._latlng=h,this._heading=f,this.createIcon()},setHeading(h){this._heading=h},_getIconSVG(h,f){let g=h.radius,v=h.width+h.weight,y=(g+h.depth+h.weight)*2,_=`M0,0 l${h.width/2},${h.depth} l-${v},0 z`,x=`transform: rotate(${this._heading}deg)`;return{className:"leaflet-control-locate-heading",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="${v}" height="${y}" version="1.1" viewBox="-${v/2} 0 ${v} ${y}" style="${x}"><path d="`+_+'" style="'+f+'" /></svg>',w:v,h:y}}}),d=e.Control.extend({options:{position:"topleft",layer:void 0,setView:"untilPanOrZoom",keepCurrentZoomLevel:!1,initialZoomLevel:!1,getLocationBounds(h){return h.bounds},flyTo:!1,clickBehavior:{inView:"stop",outOfView:"setView",inViewNotFollowing:"inView"},returnToPrevBounds:!1,cacheLocation:!0,drawCircle:!0,drawMarker:!0,showCompass:!0,markerClass:l,compassClass:p,circleStyle:{className:"leaflet-control-locate-circle",color:"#136AEC",fillColor:"#136AEC",fillOpacity:.15,weight:0},markerStyle:{className:"leaflet-control-locate-marker",color:"#fff",fillColor:"#2A93EE",fillOpacity:1,weight:3,opacity:1,radius:9},compassStyle:{fillColor:"#2A93EE",fillOpacity:1,weight:0,color:"#fff",opacity:1,radius:9,width:9,depth:6},followCircleStyle:{},followMarkerStyle:{},followCompassStyle:{},icon:"leaflet-control-locate-location-arrow",iconLoading:"leaflet-control-locate-spinner",iconElementTag:"span",textElementTag:"small",circlePadding:[0,0],metric:!0,createButtonCallback(h,f){let g=e.DomUtil.create("a","leaflet-bar-part leaflet-bar-part-single",h);g.title=f.strings.title,g.href="#",g.setAttribute("role","button");let v=e.DomUtil.create(f.iconElementTag,f.icon,g);if(f.strings.text!==void 0){let y=e.DomUtil.create(f.textElementTag,"leaflet-locate-text",g);y.textContent=f.strings.text,g.classList.add("leaflet-locate-text-active"),g.parentNode.style.display="flex",f.icon.length>0&&v.classList.add("leaflet-locate-icon")}return{link:g,icon:v}},onLocationError(h,f){alert(h.message)},onLocationOutsideMapBounds(h){h.stop(),alert(h.options.strings.outsideMapBoundsMsg)},showPopup:!0,strings:{title:"Show me where I am",metersUnit:"meters",feetUnit:"feet",popup:"You are within {distance} {unit} from this point",outsideMapBoundsMsg:"You seem located outside the boundaries of the map"},locateOptions:{maxZoom:1/0,watch:!0,setView:!1}},initialize(h){for(let f in h)typeof this.options[f]=="object"?e.extend(this.options[f],h[f]):this.options[f]=h[f];this.options.followMarkerStyle=e.extend({},this.options.markerStyle,this.options.followMarkerStyle),this.options.followCircleStyle=e.extend({},this.options.circleStyle,this.options.followCircleStyle),this.options.followCompassStyle=e.extend({},this.options.compassStyle,this.options.followCompassStyle)},onAdd(h){let f=e.DomUtil.create("div","leaflet-control-locate leaflet-bar leaflet-control");this._container=f,this._map=h,this._layer=this.options.layer||new e.LayerGroup,this._layer.addTo(h),this._event=void 0,this._compassHeading=null,this._prevBounds=null;let g=this.options.createButtonCallback(f,this.options);return this._link=g.link,this._icon=g.icon,e.DomEvent.on(this._link,"click",function(v){e.DomEvent.stopPropagation(v),e.DomEvent.preventDefault(v),this._onClick()},this).on(this._link,"dblclick",e.DomEvent.stopPropagation),this._resetVariables(),this._map.on("unload",this._unload,this),f},_onClick(){this._justClicked=!0;let h=this._isFollowing();if(this._userPanned=!1,this._userZoomed=!1,this._active&&!this._event)this.stop();else if(this._active){let f=this.options.clickBehavior,g=f.outOfView;switch(this._map.getBounds().contains(this._event.latlng)&&(g=h?f.inView:f.inViewNotFollowing),f[g]&&(g=f[g]),g){case"setView":this.setView();break;case"stop":this.stop(),this.options.returnToPrevBounds&&(this.options.flyTo?this._map.flyToBounds:this._map.fitBounds).bind(this._map)(this._prevBounds);break}}else this.options.returnToPrevBounds&&(this._prevBounds=this._map.getBounds()),this.start();this._updateContainerStyle()},start(){this._activate(),this._event&&(this._drawMarker(this._map),this.options.setView&&this.setView()),this._updateContainerStyle()},stop(){this._deactivate(),this._cleanClasses(),this._resetVariables(),this._removeMarker()},stopFollowing(){this._userPanned=!0,this._updateContainerStyle(),this._drawMarker()},_activate(){if(!(this._active||!this._map)&&(this._map.locate(this.options.locateOptions),this._map.fire("locateactivate",this),this._active=!0,this._map.on("locationfound",this._onLocationFound,this),this._map.on("locationerror",this._onLocationError,this),this._map.on("dragstart",this._onDrag,this),this._map.on("zoomstart",this._onZoom,this),this._map.on("zoomend",this._onZoomEnd,this),this.options.showCompass)){let h="ondeviceorientationabsolute"in window;if(h||"ondeviceorientation"in window){let f=this,g=function(){e.DomEvent.on(window,h?"deviceorientationabsolute":"deviceorientation",f._onDeviceOrientation,f)};DeviceOrientationEvent&&typeof DeviceOrientationEvent.requestPermission=="function"?DeviceOrientationEvent.requestPermission().then(function(v){v==="granted"&&g()}):g()}}},_deactivate(){!this._active||!this._map||(this._map.stopLocate(),this._map.fire("locatedeactivate",this),this._active=!1,this.options.cacheLocation||(this._event=void 0),this._map.off("locationfound",this._onLocationFound,this),this._map.off("locationerror",this._onLocationError,this),this._map.off("dragstart",this._onDrag,this),this._map.off("zoomstart",this._onZoom,this),this._map.off("zoomend",this._onZoomEnd,this),this.options.showCompass&&(this._compassHeading=null,"ondeviceorientationabsolute"in window?e.DomEvent.off(window,"deviceorientationabsolute",this._onDeviceOrientation,this):"ondeviceorientation"in window&&e.DomEvent.off(window,"deviceorientation",this._onDeviceOrientation,this)))},setView(){if(this._drawMarker(),this._isOutsideMapBounds())this._event=void 0,this.options.onLocationOutsideMapBounds(this);else if(this._justClicked&&this.options.initialZoomLevel!==!1){var h=this.options.flyTo?this._map.flyTo:this._map.setView;h.bind(this._map)([this._event.latitude,this._event.longitude],this.options.initialZoomLevel)}else if(this.options.keepCurrentZoomLevel){var h=this.options.flyTo?this._map.flyTo:this._map.panTo;h.bind(this._map)([this._event.latitude,this._event.longitude])}else{var h=this.options.flyTo?this._map.flyToBounds:this._map.fitBounds;this._ignoreEvent=!0,h.bind(this._map)(this.options.getLocationBounds(this._event),{padding:this.options.circlePadding,maxZoom:this.options.initialZoomLevel||this.options.locateOptions.maxZoom}),e.Util.requestAnimFrame(function(){this._ignoreEvent=!1},this)}},_drawCompass(){if(!this._event)return;let h=this._event.latlng;if(this.options.showCompass&&h&&this._compassHeading!==null){let f=this._isFollowing()?this.options.followCompassStyle:this.options.compassStyle;this._compass?(this._compass.setLatLng(h),this._compass.setHeading(this._compassHeading),this._compass.setStyle&&this._compass.setStyle(f)):this._compass=new this.options.compassClass(h,this._compassHeading,f).addTo(this._layer)}this._compass&&(!this.options.showCompass||this._compassHeading===null)&&(this._compass.removeFrom(this._layer),this._compass=null)},_drawMarker(){this._event.accuracy===void 0&&(this._event.accuracy=0);let h=this._event.accuracy,f=this._event.latlng;if(this.options.drawCircle){let x=this._isFollowing()?this.options.followCircleStyle:this.options.circleStyle;this._circle?this._circle.setLatLng(f).setRadius(h).setStyle(x):this._circle=e.circle(f,h,x).addTo(this._layer)}let g,v;if(this.options.metric?(g=h.toFixed(0),v=this.options.strings.metersUnit):(g=(h*3.2808399).toFixed(0),v=this.options.strings.feetUnit),this.options.drawMarker){let x=this._isFollowing()?this.options.followMarkerStyle:this.options.markerStyle;this._marker?(this._marker.setLatLng(f),this._marker.setStyle&&this._marker.setStyle(x)):this._marker=new this.options.markerClass(f,x).addTo(this._layer)}this._drawCompass();let y=this.options.strings.popup;function _(){return typeof y=="string"?e.Util.template(y,{distance:g,unit:v}):typeof y=="function"?y({distance:g,unit:v}):y}this.options.showPopup&&y&&this._marker&&this._marker.bindPopup(_())._popup.setLatLng(f),this.options.showPopup&&y&&this._compass&&this._compass.bindPopup(_())._popup.setLatLng(f)},_removeMarker(){this._layer.clearLayers(),this._marker=void 0,this._circle=void 0},_unload(){this.stop(),this._map.off("unload",this._unload,this)},_setCompassHeading(h){!isNaN(parseFloat(h))&&isFinite(h)?(h=Math.round(h),this._compassHeading=h,e.Util.requestAnimFrame(this._drawCompass,this)):this._compassHeading=null},_onCompassNeedsCalibration(){this._setCompassHeading()},_onDeviceOrientation(h){this._active&&(h.webkitCompassHeading?this._setCompassHeading(h.webkitCompassHeading):h.absolute&&h.alpha&&this._setCompassHeading(360-h.alpha))},_onLocationError(h){h.code==3&&this.options.locateOptions.watch||(this.stop(),this.options.onLocationError(h,this))},_onLocationFound(h){if(!(this._event&&this._event.latlng.lat===h.latlng.lat&&this._event.latlng.lng===h.latlng.lng&&this._event.accuracy===h.accuracy)&&this._active){switch(this._event=h,this._drawMarker(),this._updateContainerStyle(),this.options.setView){case"once":this._justClicked&&this.setView();break;case"untilPan":this._userPanned||this.setView();break;case"untilPanOrZoom":!this._userPanned&&!this._userZoomed&&this.setView();break;case"always":this.setView();break}this._justClicked=!1}},_onDrag(){this._event&&!this._ignoreEvent&&(this._userPanned=!0,this._updateContainerStyle(),this._drawMarker())},_onZoom(){this._event&&!this._ignoreEvent&&(this._userZoomed=!0,this._updateContainerStyle(),this._drawMarker())},_onZoomEnd(){this._event&&this._drawCompass(),this._event&&!this._ignoreEvent&&this._marker&&!this._map.getBounds().pad(-.3).contains(this._marker.getLatLng())&&(this._userPanned=!0,this._updateContainerStyle(),this._drawMarker())},_isFollowing(){if(!this._active)return!1;if(this.options.setView==="always")return!0;if(this.options.setView==="untilPan")return!this._userPanned;if(this.options.setView==="untilPanOrZoom")return!this._userPanned&&!this._userZoomed},_isOutsideMapBounds(){return this._event===void 0?!1:this._map.options.maxBounds&&!this._map.options.maxBounds.contains(this._event.latlng)},_updateContainerStyle(){this._container&&(this._active&&!this._event?this._setClasses("requesting"):this._isFollowing()?this._setClasses("following"):this._active?this._setClasses("active"):this._cleanClasses())},_setClasses(h){h=="requesting"?(s(this._container,"active following"),a(this._container,"requesting"),s(this._icon,this.options.icon),a(this._icon,this.options.iconLoading)):h=="active"?(s(this._container,"requesting following"),a(this._container,"active"),s(this._icon,this.options.iconLoading),a(this._icon,this.options.icon)):h=="following"&&(s(this._container,"requesting"),a(this._container,"active following"),s(this._icon,this.options.iconLoading),a(this._icon,this.options.icon))},_cleanClasses(){e.DomUtil.removeClass(this._container,"requesting"),e.DomUtil.removeClass(this._container,"active"),e.DomUtil.removeClass(this._container,"following"),s(this._icon,this.options.iconLoading),a(this._icon,this.options.icon)},_resetVariables(){this._active=!1,this._justClicked=!1,this._userPanned=!1,this._userZoomed=!1}});return e.control.locate=h=>new e.Control.Locate(h),d},window)})(Bv);var Rv=A`
  :host {
    display: none;
  }
`;var i2=Object.defineProperty,r2=Object.getOwnPropertyDescriptor,Pt=(i,t,e,r)=>{for(var a=r>1?void 0:r?r2(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&i2(t,e,a),a},Fv=class extends dt{constructor(){super(...arguments),this.localize=new et(this),this.position="topright",this.start=!1,this.watch=!0,this.setView="always",this.keepCurrentZoomLevel=!0,this.initialZoomLevel=!1,this.flyTo=!0,this.clickBehavior={inView:"stop",outOfView:"setView",inViewNotFollowing:"inView"},this.returnToPrevBounds=!1,this.cacheLocation=!0,this.drawCircle=!0,this.drawMarker=!0,this.showCompass=!0,this.showPopup=!0,this.metric=!0,this.maxZoom=Number.MAX_SAFE_INTEGER,this.timeout=1e4,this.maximumAge=0,this.enableHighAccuracy=!1,this.latitude=null,this.longitude=null,this.bounds=null,this.accuracy=null,this.altitude=null,this.altitudeAccuracy=null,this.heading=null,this.speed=null,this.timestamp=null,this.circleStyle={className:"leaflet-control-locate-circle",color:"#136AEC",fillColor:"#136AEC",fillOpacity:.15,weight:0},this.markerStyle={className:"leaflet-control-locate-marker",color:"#fff",fillColor:"#2A93EE",fillOpacity:1,weight:3,opacity:1,radius:9},this.compassStyle={fillColor:"#2A93EE",fillOpacity:1,weight:0,color:"#fff",opacity:1,radius:9,width:9,depth:6},this.icon="cursor-fill"}containerChanged(){this.container&&(this.control=K.control.locate({setView:this.setView,keepCurrentZoomLevel:this.keepCurrentZoomLevel,initialZoomLevel:this.initialZoomLevel,flyTo:this.flyTo,clickBehavior:this.clickBehavior,returnToPrevBounds:this.returnToPrevBounds,cacheLocation:this.cacheLocation,drawCircle:this.drawCircle,drawMarker:this.drawMarker,showCompass:this.showCompass,showPopup:this.showPopup,metric:this.metric,position:this.position,circleStyle:this.circleStyle,markerStyle:this.markerStyle,compassStyle:this.compassStyle,locateOptions:{watch:this.watch,setView:!1,maxZoom:this.maxZoom,timeout:this.timeout,maximumAge:this.maximumAge,enableHighAccuracy:this.enableHighAccuracy},strings:{title:this.localize.term("locateMe"),metersUnit:this.localize.term("metersUnit"),feetUnit:this.localize.term("feetUnit"),popup:this.localize.term("locatePopup"),outsideMapBoundsMsg:this.localize.term("locateOutsideMapBounds")}}),this.control.addTo(this.container),this.icon&&this.control._icon&&(this.control._icon.innerHTML=`<awc-icon name="${this.icon}"></awc-icon><awc-spinner></awc-spinner>`),this.start&&this.control.start(),this.container.on("locationfound locationerror",this.onLeafletEvent),this.container.on("locationfound",this.onLocationfound))}disconnectedCallback(){this.container&&this.control&&this.container.removeControl(this.control)}onLocationfound(t){this.latitude=t.latlng.lat,this.longitude=t.latlng.lng,this.bounds=t.bounds,this.accuracy=t.accuracy,this.altitude=t.altitude,this.altitudeAccuracy=t.altitudeAccuracy,this.heading=t.heading,this.speed=t.speed,this.timestamp=t.timestamp}};Fv.styles=Rv;var wt=Fv;Pt([u({type:String})],wt.prototype,"position",2);Pt([u({type:Boolean})],wt.prototype,"start",2);Pt([u({type:Boolean})],wt.prototype,"watch",2);Pt([u({type:String,attribute:"set-view"})],wt.prototype,"setView",2);Pt([u({type:Boolean,attribute:"keep-current-zoom-level"})],wt.prototype,"keepCurrentZoomLevel",2);Pt([u({attribute:"initial-zoom-level"})],wt.prototype,"initialZoomLevel",2);Pt([u({type:Boolean,attribute:"fly-to"})],wt.prototype,"flyTo",2);Pt([u({type:Object,attribute:"click-behavior"})],wt.prototype,"clickBehavior",2);Pt([u({type:Boolean,attribute:"return-to-prev-bounds"})],wt.prototype,"returnToPrevBounds",2);Pt([u({type:Boolean,attribute:"cache-location"})],wt.prototype,"cacheLocation",2);Pt([u({type:Boolean,attribute:"draw-circle"})],wt.prototype,"drawCircle",2);Pt([u({type:Boolean,attribute:"draw-marker"})],wt.prototype,"drawMarker",2);Pt([u({type:Boolean,attribute:"show-compass"})],wt.prototype,"showCompass",2);Pt([u({type:Boolean,attribute:"show-popup"})],wt.prototype,"showPopup",2);Pt([u({type:Boolean,attribute:"metric"})],wt.prototype,"metric",2);Pt([u({type:Number,attribute:"max-zoom"})],wt.prototype,"maxZoom",2);Pt([u({type:Number})],wt.prototype,"timeout",2);Pt([u({type:Number,attribute:"maximum-age"})],wt.prototype,"maximumAge",2);Pt([u({type:Boolean,attribute:"enable-high-accuracy"})],wt.prototype,"enableHighAccuracy",2);Pt([u({type:Number})],wt.prototype,"latitude",2);Pt([u({type:Number})],wt.prototype,"longitude",2);Pt([u({type:Object})],wt.prototype,"bounds",2);Pt([u({type:Number})],wt.prototype,"accuracy",2);Pt([u({type:Number})],wt.prototype,"altitude",2);Pt([u({type:Number,attribute:"altitude-accuracy"})],wt.prototype,"altitudeAccuracy",2);Pt([u({type:Number})],wt.prototype,"heading",2);Pt([u({type:Number})],wt.prototype,"speed",2);Pt([u({type:Number})],wt.prototype,"timestamp",2);Pt([u({type:Object,attribute:"circle-style"})],wt.prototype,"circleStyle",2);Pt([u({type:Object,attribute:"marker-style"})],wt.prototype,"markerStyle",2);Pt([u({type:Object,attribute:"compass-style"})],wt.prototype,"compassStyle",2);Pt([u({type:String})],wt.prototype,"icon",2);Pt([re],wt.prototype,"onLocationfound",1);wt.define("awc-map-geolocation");function Id(i){return(t,e)=>{let{slot:r}=i??{},a="slot"+(r?`[name=${r}]`:":not([name])");return _r(t,e,{get(){return this.renderRoot?.querySelector(a)?.assignedNodes(i)??[]}})}}var Nv=A`
  :host {
    display: none;
  }
`;var a2=Object.defineProperty,s2=Object.getOwnPropertyDescriptor,cr=(i,t,e,r)=>{for(var a=r>1?void 0:r?s2(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&a2(t,e,a),a};function n2(i){return i.fullscreenElement||i.mozFullScreenElement||i.webkitFullscreenElement||i.msFullscreenElement}function l2(i){return!!(i.requestFullscreen||i.mozRequestFullScreen||i.webkitRequestFullscreen||i.msRequestFullscreen)}function c2(i){i.requestFullscreen?i.requestFullscreen():i.msRequestFullscreen?i.msRequestFullscreen():i.webkitRequestFullscreen?i.webkitRequestFullscreen():i.mozRequestFullScreen&&i.mozRequestFullScreen()}function d2(i){return!!(i.exitFullscreen||i.mozCancelFullScreen||i.webkitCancelFullScreen||i.msExitFullscreen)}function p2(i){i.exitFullscreen?i.exitFullscreen():i.msExitFullscreen?i.msExitFullscreen():i.webkitCancelFullScreen?i.webkitCancelFullScreen():i.mozCancelFullScreen&&i.mozCancelFullScreen()}var jv=class extends dt{constructor(){super(...arguments),this.localize=new et(this),this.position="topleft",this.pseudoFullscreen=!1,this.trueText="Exit Fullscreen",this.falseText="View Fullscreen"}get isFullscreen(){return this.container?.isFullscreen()??!1}async toggleFullscreen(){return await this.container.toggleFullscreen(this.control.options,this.control)}containerChanged(){if(!this.container)return;let{position:t,pseudoFullscreen:e,trueText:r,falseText:a,fullscreenIcons:[s=this.defaultFullscreenIcon],exitIcons:[l=this.defaultExitIcon]}=this,p={true:r,false:a};this.control=K.control.fullscreen({position:t,title:p,pseudoFullscreen:e,fullscreenIcon:s,exitIcon:l}),this.control.addTo(this.container)}disconnectedCallback(){this.container&&this.control&&this.container.removeControl(this.control)}render(){return E`
      <slot name="fullscreen-icon" @slotchange="${()=>this.control.updateIcons(!0)}">
        <awc-icon name="fullscreen" label="${this.localize.term("enterFullscreen")}"></awc-icon>
      </slot>
      <slot name="exit-icon" @slotchange="${()=>this.control.updateIcons(!0)}">
        <awc-icon name="fullscreen-exit" label="${this.localize.term("exitFullscreen")}"></awc-icon>
      </slot>
    `}};jv.styles=Nv;var Jo=jv;cr([u({type:String})],Jo.prototype,"position",2);cr([u({type:Boolean,attribute:"pseudo-fullscreen"})],Jo.prototype,"pseudoFullscreen",2);cr([u({type:String,attribute:"true-text"})],Jo.prototype,"trueText",2);cr([u({type:String,attribute:"false-text"})],Jo.prototype,"falseText",2);cr([Id({slot:"exit-icon"})],Jo.prototype,"exitIcons",2);cr([Id({slot:"fullscreen-icon"})],Jo.prototype,"fullscreenIcons",2);cr([F('[name="fullscreen-icon"] awc-icon')],Jo.prototype,"defaultFullscreenIcon",2);cr([F('[name="exit-icon"] awc-icon')],Jo.prototype,"defaultExitIcon",2);K.Control.Fullscreen=K.Control.extend({options:{position:"topleft",exitIcon:"",fullscreenIcon:"",pseudoFullscreen:!1,title:{false:"View Fullscreen",true:"Exit Fullscreen"}},onAdd(i){let t=K.DomUtil.create("div","leaflet-control-fullscreen leaflet-bar leaflet-control");return this.link=K.DomUtil.create("a","leaflet-control-fullscreen-button leaflet-bar-part",t),this.link.href="#",this.link.innerHTML=`
      <span class="fullscreen-icon" hidden></span>
      <span class="exit-icon" hidden></span>
    `,this._map=i,this._map.on("fullscreenchange",this._toggleTitle,this),this._toggleTitle(),this.updateIcons(!0),K.DomEvent.on(this.link,"click",this._click,this),t},_click(i){K.DomEvent.stopPropagation(i),K.DomEvent.preventDefault(i),this._map.toggleFullscreen(this.options,this)},_toggleTitle(){this.link.title=this.options.title[`${this._map.isFullscreen()}`]},updateIcons(i){let t=this.link.querySelector(".exit-icon"),e=this.link.querySelector(".fullscreen-icon");if(i){let{exitIcon:a,fullscreenIcon:s}=this.options;t.children[0]?.remove(),e.children[0]?.remove(),typeof a=="string"?t.appendChild(new Text(a)):a instanceof Element&&t.appendChild(a.cloneNode(!0)),typeof s=="string"?e.appendChild(new Text(s)):s instanceof Element&&e.appendChild(s.cloneNode(!0))}let r=this._map.isFullscreen();t.hidden=!r,e.hidden=r}});K.Map.include({isFullscreen(){return this._isPseudoFullscreen||this.getContainer()===n2(this.getContainerRoot())},getContainerRoot(){let i=this.getContainer()?.getRootNode?.();return i instanceof Document||i instanceof ShadowRoot?i:document},toggleFullscreen(i,t){let e=this.getContainer();this.isFullscreen()?i?.pseudoFullscreen?this._disablePseudoFullscreen(e):d2(document)?p2(document):this._disablePseudoFullscreen(e):i?.pseudoFullscreen?this._enablePseudoFullscreen(e):l2(e)?c2(e):this._enablePseudoFullscreen(e),setTimeout(()=>{t.updateIcons()},100)},_enablePseudoFullscreen(i){K.DomUtil.addClass(i,"leaflet-pseudo-fullscreen"),this._isPseudoFullscreen=!0,this._setFullscreen(!0),this.fire("fullscreenchange")},_disablePseudoFullscreen(i){K.DomUtil.removeClass(i,"leaflet-pseudo-fullscreen"),this._isPseudoFullscreen=!1,this._setFullscreen(!1),this.fire("fullscreenchange")},_setFullscreen(i){let t=this.getContainer();i?K.DomUtil.addClass(t,"leaflet-fullscreen-on"):K.DomUtil.removeClass(t,"leaflet-fullscreen-on"),this.invalidateSize()},_onFullscreenChange(){this._setFullscreen(!this.isFullscreen()),this.fire("fullscreenchange")}});K.Map.mergeOptions({fullscreenControl:!1});K.Map.addInitHook(function(){this.options.fullscreenControl&&(this.fullscreenControl=new K.Control.Fullscreen(this.options.fullscreenControl),this.addControl(this.fullscreenControl));let i="fullscreenchange";if("onmozfullscreenchange"in document?i="mozfullscreenchange":"onwebkitfullscreenchange"in document?i="webkitfullscreenchange":"onmsfullscreenchange"in document&&(i="MSFullscreenChange"),i){let t=this._onFullscreenChange.bind(this);this.whenReady(()=>{K.DomEvent.on(document,i,t)}),this.on("unload",()=>{K.DomEvent.off(document,i,t)})}});K.control.fullscreen=function(i){return new K.Control.Fullscreen(i)};Jo.define("awc-map-fullscreen-control");var Uv=A`
  :host {
    display: none;
  }
`;var h2=Object.defineProperty,u2=Object.getOwnPropertyDescriptor,qe=(i,t,e,r)=>{for(var a=r>1?void 0:r?u2(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&h2(t,e,a),a},Fs,Re=(Fs=class extends yi(dt){constructor(){super(...arguments),this.stroke=!0,this.color="#03f",this.weight=5,this.opacity=.5,this.fill=!1,this.fillColor=void 0,this.fillOpacity=.2,this.dashArray=void 0,this.lineCap=void 0,this.lineJoin=void 0,this.pointerEvents=void 0,this.clickable=!1,this.className=""}getPathOptions(){return{stroke:this.stroke,color:this.color,weight:this.weight,opacity:this.opacity,fill:this.fill,fillColor:this.fillColor,fillOpacity:this.fillOpacity,dashArray:this.dashArray,lineCap:this.lineCap,lineJoin:this.lineJoin,className:this.className}}containerChanged(){!this.container||!this.latLngBounds||(this.feature&&this.container.removeLayer(this.feature),this.feature=K.rectangle(this.latLngBounds,this.getPathOptions()),this.feature.addTo(this.container),this.updatePopupContent(),this.feature.on(Fs.events,this.onLeafletEvent))}disconnectedCallback(){super.disconnectedCallback(),this.container&&this.feature&&this.container.removeLayer(this.feature)}},Fs.styles=Uv,Fs.events="click dblclick mousedown mouseover mouseout contextmenu add remove popupopen popupclose",Fs);qe([u({attribute:!1})],Re.prototype,"feature",2);qe([u({type:Array,attribute:"lat-lng-bounds"})],Re.prototype,"latLngBounds",2);qe([u({type:Boolean})],Re.prototype,"stroke",2);qe([u({type:String})],Re.prototype,"color",2);qe([u({type:Number})],Re.prototype,"weight",2);qe([u({type:Number})],Re.prototype,"opacity",2);qe([u({type:Boolean})],Re.prototype,"fill",2);qe([u({type:String,attribute:"fill-color"})],Re.prototype,"fillColor",2);qe([u({type:Number,attribute:"fill-opacity"})],Re.prototype,"fillOpacity",2);qe([u({type:String,attribute:"dash-array"})],Re.prototype,"dashArray",2);qe([u({type:String,attribute:"line-cap"})],Re.prototype,"lineCap",2);qe([u({type:String,attribute:"line-join"})],Re.prototype,"lineJoin",2);qe([u({type:String,attribute:"pointer-events"})],Re.prototype,"pointerEvents",2);qe([u({type:Boolean})],Re.prototype,"clickable",2);qe([u({type:String,attribute:"class-name"})],Re.prototype,"className",2);qe([M("lat-lng-bounds",{waitUntilFirstUpdate:!0})],Re.prototype,"containerChanged",1);var Dd=Re;Dd.define("awc-map-rectangle");var Vv=A`
  :host {
    display: none;
  }
`;var m2=Object.defineProperty,f2=Object.getOwnPropertyDescriptor,Po=(i,t,e,r)=>{for(var a=r>1?void 0:r?f2(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&m2(t,e,a),a},Ns,wo=(Ns=class extends vo(dt){constructor(){super(...arguments),this.alt="",this.errorOverlayUrl="",this.attribution="",this.opacity=1,this.zIndex=1,this.interactive=!1,this.crossOrigin=!1}containerChanged(){!this.container||!this.url||!this.latLngBounds||(this.layer=K.imageOverlay(this.url,this.latLngBounds,{attribution:this.innerHTML+this.attribution,opacity:this.opacity,zIndex:this.zIndex,interactive:this.interactive,errorOverlayUrl:this.errorOverlayUrl,alt:this.alt,className:this.className,crossOrigin:this.crossOrigin}),this.layer.on(Ns.events,this.onLeafletEvent),this.layer.addTo(this.container))}urlChanged(){!this.layer||!this.url||this.layer.setUrl(this.url)}latLngBoundsChanged(){!this.layer||!this.latLngBounds||this.layer.setBounds(K.latLngBounds(this.latLngBounds))}opacityChanged(){this.layer&&this.layer.setOpacity(this.opacity)}zIndexChanged(){this.layer&&this.layer.setZIndex(this.zIndex)}disconnectedCallback(){super.disconnectedCallback?.(),this.container&&this.layer&&this.container.removeLayer(this.layer)}},Ns.styles=Vv,Ns.events="load error click dblclick mousedown mouseup mouseover mouseout contextmenu",Ns);Po([u({type:Array,attribute:"lat-lng-bounds"})],wo.prototype,"latLngBounds",2);Po([u({type:String})],wo.prototype,"url",2);Po([u({type:String})],wo.prototype,"alt",2);Po([u({type:String,attribute:"error-overlay-url"})],wo.prototype,"errorOverlayUrl",2);Po([u({type:String})],wo.prototype,"attribution",2);Po([u({type:Number})],wo.prototype,"opacity",2);Po([u({type:Number,attribute:"z-index"})],wo.prototype,"zIndex",2);Po([u({type:Boolean})],wo.prototype,"interactive",2);Po([u({attribute:"cross-origin"})],wo.prototype,"crossOrigin",2);Po([M("url",{waitUntilFirstUpdate:!0})],wo.prototype,"urlChanged",1);Po([M("lat-lng-bounds",{waitUntilFirstUpdate:!0})],wo.prototype,"latLngBoundsChanged",1);Po([M("opacity",{waitUntilFirstUpdate:!0})],wo.prototype,"opacityChanged",1);Po([M("z-index",{waitUntilFirstUpdate:!0})],wo.prototype,"zIndexChanged",1);var Bd=wo;Bd.define("awc-map-image-overlay");var Hv=A`
  :host {
    display: none;
  }
`;var g2=Object.defineProperty,b2=Object.getOwnPropertyDescriptor,Ee=(i,t,e,r)=>{for(var a=r>1?void 0:r?b2(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&g2(t,e,a),a},js,ke=(js=class extends vo(dt){constructor(){super(...arguments),this.alt="",this.errorOverlayUrl="",this.attribution="",this.opacity=1,this.zIndex=1,this.interactive=!1,this.crossOrigin=!1,this.autoplay=!0,this.loop=!0,this.keepAspectRatio=!0,this.muted=!1,this.playsInline=!0}containerChanged(){!this.container||!this.url||!this.latLngBounds||(this.layer=K.videoOverlay(this.url,this.latLngBounds,{attribution:this.innerHTML+this.attribution,opacity:this.opacity,zIndex:this.zIndex,interactive:this.interactive,errorOverlayUrl:this.errorOverlayUrl,alt:this.alt,className:this.className,crossOrigin:this.crossOrigin,autoplay:this.autoplay,loop:this.loop,keepAspectRatio:this.keepAspectRatio,muted:this.muted,playsInline:this.playsInline}),this.layer.on(js.events,this.onLeafletEvent),this.layer.addTo(this.container))}urlChanged(){!this.layer||!this.url||this.layer.setUrl(this.url)}latLngBoundsChanged(){!this.layer||!this.latLngBounds||this.layer.setBounds(K.latLngBounds(this.latLngBounds))}opacityChanged(){this.layer&&this.layer.setOpacity(this.opacity)}zIndexChanged(){this.layer&&this.layer.setZIndex(this.zIndex)}disconnectedCallback(){super.disconnectedCallback?.(),this.container&&this.layer&&this.container.removeLayer(this.layer)}},js.styles=Hv,js.events="load error click dblclick mousedown mouseup mouseover mouseout contextmenu",js);Ee([u({type:Array,attribute:"lat-lng-bounds"})],ke.prototype,"latLngBounds",2);Ee([u({type:String})],ke.prototype,"url",2);Ee([u({type:String})],ke.prototype,"alt",2);Ee([u({type:String,attribute:"error-overlay-url"})],ke.prototype,"errorOverlayUrl",2);Ee([u({type:String})],ke.prototype,"attribution",2);Ee([u({type:Number})],ke.prototype,"opacity",2);Ee([u({type:Number,attribute:"z-index"})],ke.prototype,"zIndex",2);Ee([u({type:Boolean})],ke.prototype,"interactive",2);Ee([u({attribute:"cross-origin"})],ke.prototype,"crossOrigin",2);Ee([u({type:Boolean})],ke.prototype,"autoplay",2);Ee([u({type:Boolean})],ke.prototype,"loop",2);Ee([u({type:Boolean,attribute:"keep-aspect-ratio"})],ke.prototype,"keepAspectRatio",2);Ee([u({type:Boolean})],ke.prototype,"muted",2);Ee([u({type:Boolean,attribute:"plays-inline"})],ke.prototype,"playsInline",2);Ee([M("url",{waitUntilFirstUpdate:!0})],ke.prototype,"urlChanged",1);Ee([M("lat-lng-bounds",{waitUntilFirstUpdate:!0})],ke.prototype,"latLngBoundsChanged",1);Ee([M("opacity",{waitUntilFirstUpdate:!0})],ke.prototype,"opacityChanged",1);Ee([M("z-index",{waitUntilFirstUpdate:!0})],ke.prototype,"zIndexChanged",1);var Rd=ke;Rd.define("awc-map-video-overlay");var Zv=A`
  :host {
    display: none;
  }
`;var v2=Object.defineProperty,y2=Object.getOwnPropertyDescriptor,Eo=(i,t,e,r)=>{for(var a=r>1?void 0:r?y2(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&v2(t,e,a),a},Us,_o=(Us=class extends vo(dt){constructor(){super(...arguments),this.alt="",this.errorOverlayUrl="",this.attribution="",this.opacity=1,this.zIndex=1,this.interactive=!1,this.crossOrigin=!1}containerChanged(){this.svg=this.querySelector("svg"),!(!this.container||!this.svg||!this.latLngBounds)&&(this.layer&&this.container.removeLayer(this.layer),this.layer=K.svgOverlay(this.svg,this.latLngBounds,{attribution:this.attribution,opacity:this.opacity,zIndex:this.zIndex,interactive:this.interactive,errorOverlayUrl:this.errorOverlayUrl,alt:this.alt,className:this.className,crossOrigin:this.crossOrigin}),this.layer.on(Us.events,this.onLeafletEvent),this.layer.addTo(this.container))}urlChanged(){!this.layer||!this.url||this.layer.setUrl(this.url)}opacityChanged(){this.layer&&this.layer.setOpacity(this.opacity)}zIndexChanged(){this.layer&&this.layer.setZIndex(this.zIndex)}disconnectedCallback(){super.disconnectedCallback?.(),this.container&&this.layer&&this.container.removeLayer(this.layer)}},Us.styles=Zv,Us.events="load error click dblclick mousedown mouseup mouseover mouseout contextmenu",Us);Eo([u({type:Array,attribute:"lat-lng-bounds"})],_o.prototype,"latLngBounds",2);Eo([u({type:String})],_o.prototype,"url",2);Eo([u({type:String})],_o.prototype,"alt",2);Eo([u({type:String,attribute:"error-overlay-url"})],_o.prototype,"errorOverlayUrl",2);Eo([u({type:String})],_o.prototype,"attribution",2);Eo([u({type:Number})],_o.prototype,"opacity",2);Eo([u({type:Number,attribute:"z-index"})],_o.prototype,"zIndex",2);Eo([u({type:Boolean})],_o.prototype,"interactive",2);Eo([u({attribute:"cross-origin"})],_o.prototype,"crossOrigin",2);Eo([M("lat-lng-bounds",{waitUntilFirstUpdate:!0})],_o.prototype,"containerChanged",1);Eo([M("url",{waitUntilFirstUpdate:!0})],_o.prototype,"urlChanged",1);Eo([M("opacity",{waitUntilFirstUpdate:!0})],_o.prototype,"opacityChanged",1);Eo([M("z-index",{waitUntilFirstUpdate:!0})],_o.prototype,"zIndexChanged",1);var Fd=_o;Fd.define("awc-map-svg-overlay");(function(){var i=Symbol("newer"),t=Symbol("older"),e=function(d,h){typeof d!="number"&&(h=d,d=0),this.size=0,this.limit=d,this.oldest=this.newest=void 0,this._keymap=new Map,h&&(this.assign(h),d<1&&(this.limit=this.size))};e.prototype._markEntryAsUsed=function(d){d!==this.newest&&(d[i]&&(d===this.oldest&&(this.oldest=d[i]),d[i][t]=d[t]),d[t]&&(d[t][i]=d[i]),d[i]=void 0,d[t]=this.newest,this.newest&&(this.newest[i]=d),this.newest=d)},e.prototype.assign=function(d){var h,f=this.limit||Number.MAX_VALUE;this._keymap.clear();for(var g=d[Symbol.iterator](),v=g.next();!v.done;v=g.next()){var y=new r(v.value[0],v.value[1]);if(this._keymap.set(y.key,y),h?(h[i]=y,y[t]=h):this.oldest=y,h=y,f--==0)throw new Error("overflow")}this.newest=h,this.size=this._keymap.size},e.prototype.get=function(d){var h=this._keymap.get(d);if(h)return this._markEntryAsUsed(h),h.value},e.prototype.set=function(d,h){var f=this._keymap.get(d);return f?(f.value=h,this._markEntryAsUsed(f),this):(this._keymap.set(d,f=new r(d,h)),this.newest?(this.newest[i]=f,f[t]=this.newest):this.oldest=f,this.newest=f,++this.size,this.size>this.limit&&this.shift(),this)},e.prototype.shift=function(){var d=this.oldest;if(d)return this.oldest[i]?(this.oldest=this.oldest[i],this.oldest[t]=void 0):(this.oldest=void 0,this.newest=void 0),d[i]=d[t]=void 0,this._keymap.delete(d.key),--this.size,[d.key,d.value]},e.prototype.find=function(d){var h=this._keymap.get(d);return h?h.value:void 0},e.prototype.has=function(d){return this._keymap.has(d)},e.prototype.delete=function(d){var h=this._keymap.get(d);if(h)return this._keymap.delete(h.key),h[i]&&h[t]?(h[t][i]=h[i],h[i][t]=h[t]):h[i]?(h[i][t]=void 0,this.oldest=h[i]):h[t]?(h[t][i]=void 0,this.newest=h[t]):this.oldest=this.newest=void 0,this.size--,h.value},e.prototype.clear=function(){this.oldest=this.newest=void 0,this.size=0,this._keymap.clear()},e.prototype.keys=function(){return new s(this.oldest)},e.prototype.values=function(){return new l(this.oldest)},e.prototype.entries=function(){return this},e.prototype[Symbol.iterator]=function(){return new a(this.oldest)},e.prototype.forEach=function(d,h){typeof h!="object"&&(h=this);for(var f=this.oldest;f;)d.call(h,f.value,f.key,this),f=f[i]},e.prototype.toJSON=function(){for(var d=new Array(this.size),h=0,f=this.oldest;f;)d[h++]={key:f.key,value:f.value},f=f[i];return d},e.prototype.toString=function(){for(var d="",h=this.oldest;h;)d+=String(h.key)+":"+h.value,h=h[i],h&&(d+=" < ");return d};function r(d,h){this.key=d,this.value=h,this[i]=void 0,this[t]=void 0}function a(d){this.entry=d}a.prototype[Symbol.iterator]=function(){return this},a.prototype.next=function(){var d=this.entry;return d?(this.entry=d[i],{done:!1,value:[d.key,d.value]}):{done:!0,value:void 0}};function s(d){this.entry=d}s.prototype[Symbol.iterator]=function(){return this},s.prototype.next=function(){var d=this.entry;return d?(this.entry=d[i],{done:!1,value:d.key}):{done:!0,value:void 0}};function l(d){this.entry=d}l.prototype[Symbol.iterator]=function(){return this},l.prototype.next=function(){var d=this.entry;return d?(this.entry=d[i],{done:!1,value:d.value}):{done:!0,value:void 0}};function p(d,h){var f=0,g=null;g=setInterval(function(){if(f>=20)throw clearInterval(g),new Error("window.google not found after 10 seconds");window.google&&window.google.maps&&window.google.maps.Map&&(clearInterval(g),d.call(h)),++f},500)}L.GridLayer.GoogleMutant=L.GridLayer.extend({options:{maxZoom:21,type:"roadmap",maxNativeZoom:21},initialize:function(d){L.GridLayer.prototype.initialize.call(this,d),this._tileCallbacks={},this._lru=new e(100),this._imagesPerTile=this.options.type==="hybrid"?2:1,this._boundOnMutatedImage=this._onMutatedImage.bind(this)},onAdd:function(d){var h=this;L.GridLayer.prototype.onAdd.call(this,d),this._initMutantContainer(),this._logoContainer&&d._controlCorners.bottomleft.appendChild(this._logoContainer),this._attributionContainer&&d._controlCorners.bottomright.appendChild(this._attributionContainer),p(function(){h._map&&(h._initMutant(),google.maps.event.addListenerOnce(h._mutant,"idle",function(){h._map&&(h._checkZoomLevels(),h._mutantIsReady=!0)}))})},onRemove:function(d){L.GridLayer.prototype.onRemove.call(this,d),this._observer.disconnect(),d._container.removeChild(this._mutantContainer),this._logoContainer&&L.DomUtil.remove(this._logoContainer),this._attributionContainer&&L.DomUtil.remove(this._attributionContainer),this._mutant&&google.maps.event.clearListeners(this._mutant,"idle")},addGoogleLayer:function(d,h){var f=this;return this._subLayers||(this._subLayers={}),this.whenReady(function(){var g=google.maps[d],v=new g(h);v.setMap(f._mutant),f._subLayers[d]=v}),this},removeGoogleLayer:function(d){var h=this;return this.whenReady(function(){var f=h._subLayers&&h._subLayers[d];f&&(f.setMap(null),delete h._subLayers[d])}),this},_initMutantContainer:function(){this._mutantContainer||(this._mutantContainer=L.DomUtil.create("div","leaflet-google-mutant leaflet-top leaflet-left"),this._mutantContainer.id="_MutantContainer_"+L.Util.stamp(this._mutantContainer),this._mutantContainer.style.pointerEvents="none",this._mutantContainer.style.visibility="hidden",L.DomEvent.off(this._mutantContainer)),this._map.getContainer().appendChild(this._mutantContainer),this.setOpacity(this.options.opacity);var d=this._mutantContainer.style;this._map.options.zoomSnap<1?(d.width="180%",d.height="180%"):(d.width="100%",d.height="100%"),d.zIndex=-1,this._attachObserver(this._mutantContainer)},_initMutant:function(){if(!this._mutant){var d=new google.maps.Map(this._mutantContainer,{center:{lat:0,lng:0},zoom:0,tilt:0,mapTypeId:this.options.type,disableDefaultUI:!0,keyboardShortcuts:!1,draggable:!1,disableDoubleClickZoom:!0,scrollwheel:!1,styles:this.options.styles||[],backgroundColor:"transparent"});this._mutant=d,this._update(),this.fire("spawned",{mapObject:d}),this._waitControls(),this.once("controls_ready",this._setupAttribution)}},_attachObserver:function(d){this._observer||(this._observer=new MutationObserver(this._onMutations.bind(this))),this._observer.observe(d,{childList:!0,subtree:!0}),Array.prototype.forEach.call(d.querySelectorAll("img"),this._boundOnMutatedImage)},_waitControls:function(){var d=this,h=setInterval(function(){var f=d._mutant.__gm.layoutManager;if(f){clearInterval(h);var g;Object.keys(f).forEach(function(v){var y=f[v];y.get&&y.get(1)instanceof Node&&(g=y)}),d.fire("controls_ready",{positions:g})}},50)},_setupAttribution:function(d){if(this._map){var h=google.maps.ControlPosition,f=this._attributionContainer=d.positions.get(h.BOTTOM_RIGHT);L.DomUtil.addClass(f,"leaflet-control leaflet-control-attribution"),L.DomEvent.disableClickPropagation(f),f.style.height="14px",this._map._controlCorners.bottomright.appendChild(f),this._logoContainer=d.positions.get(h.BOTTOM_LEFT),this._logoContainer.style.pointerEvents="auto",this._map._controlCorners.bottomleft.appendChild(this._logoContainer)}},_onMutations:function(d){for(var h=0;h<d.length;++h)for(var f=d[h],g=0;g<f.addedNodes.length;++g){var v=f.addedNodes[g];v instanceof HTMLImageElement?this._onMutatedImage(v):v instanceof HTMLElement&&Array.prototype.forEach.call(v.querySelectorAll("img"),this._boundOnMutatedImage)}},_roadRegexp:/!1i(\d+)!2i(\d+)!3i(\d+|VinaFnapurmBegrtn)!/,_satRegexp:/x=(\d+)&y=(\d+)&z=(\d+|VinaFnapurmBegrtn)/,_onMutatedImage:function(d){var h,f=d.src.match(this._roadRegexp),g=0;if(f?(h={z:f[1],x:f[2],y:f[3]},this._imagesPerTile>1&&(d.style.zIndex=1,g=1)):(f=d.src.match(this._satRegexp),f&&(h={x:f[1],y:f[2],z:f[3]}),g=0),h){var v=this._tileCoordsToKey(h);d.style.position="absolute";var y=v+"/"+g;this._lru.set(y,d),y in this._tileCallbacks&&this._tileCallbacks[y]&&(this._tileCallbacks[y].forEach(function(_){return _(d)}),delete this._tileCallbacks[y])}},createTile:function(d,h){var f=this._tileCoordsToKey(d),g=L.DomUtil.create("div");g.style.textAlign="left",g.dataset.pending=this._imagesPerTile,h=h.bind(this,null,g);for(var v=0;v<this._imagesPerTile;++v){var y=f+"/"+v,_=this._lru.get(y);_?(g.appendChild(this._clone(_)),--g.dataset.pending):(this._tileCallbacks[y]=this._tileCallbacks[y]||[],this._tileCallbacks[y].push(function(x){return function(P){x.appendChild(this._clone(P)),--x.dataset.pending,parseInt(x.dataset.pending)||h()}.bind(this)}.bind(this)(g)))}return parseInt(g.dataset.pending)||L.Util.requestAnimFrame(h),g},_clone:function(d){var h=d.cloneNode(!0);return h.style.visibility="visible",h},_checkZoomLevels:function(){var d=this._map.getZoom(),h=this._mutant.getZoom();!d||!h||(h!==d||h>this.options.maxNativeZoom)&&this._setMaxNativeZoom(h)},_setMaxNativeZoom:function(d){d!==this.options.maxNativeZoom&&(this.options.maxNativeZoom=d,this._resetView())},_update:function(d){if(this._mutant){d=d||this._map.getCenter();var h=new google.maps.LatLng(d.lat,d.lng),f=Math.round(this._map.getZoom()),g=this._mutant.getZoom();this._mutant.setCenter(h),f!==g&&(this._mutant.setZoom(f),this._mutantIsReady&&this._checkZoomLevels())}L.GridLayer.prototype._update.call(this,d)},whenReady:function(d,h){return this._mutant?d.call(h||this,{target:this}):this.on("spawned",d,h),this}}),L.gridLayer.googleMutant=function(d){return new L.GridLayer.GoogleMutant(d)}})();var Wv=A`
  :host {
    display: none;
  }
`;var w2=Object.defineProperty,_2=Object.getOwnPropertyDescriptor,Ge=(i,t,e,r)=>{for(var a=r>1?void 0:r?_2(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&w2(t,e,a),a},Vs,Fe=(Vs=class extends vo(dt){constructor(){super(...arguments),this.type="roadmap",this.mapStyles=void 0,this.minZoom=0,this.maxZoom=18,this.tileSize=256,this.subdomains="abc",this.errorTileUrl="",this.attribution="",this.continuousWorld=!1,this.noWrap=!1,this.opacity=1,this.zIndex=10}containerChanged(){this.container&&(this.layer&&this.container.removeLayer(this.layer),this.layer=K.gridLayer.googleMutant({minZoom:this.minZoom,maxZoom:this.maxZoom,maxNativeZoom:this.maxNativeZoom,tileSize:this.tileSize,subdomains:this.subdomains,errorTileUrl:this.errorTileUrl,zIndex:this.zIndex,attribution:this.innerHTML+this.attribution,opacity:this.opacity,continuousWorld:this.continuousWorld,noWrap:this.noWrap,type:this.type,styles:this.mapStyles}),this.layer.on(Vs.events,this.onLeafletEvent),this.layer.addTo(this.container))}opacityChanged(){this.layer&&this.layer.setOpacity(this.opacity)}zIndexChanged(){this.layer&&this.layer.setZIndex(this.zIndex)}disconnectedCallback(){super.disconnectedCallback?.(),this.container&&this.layer&&this.container.removeLayer(this.layer)}},Vs.styles=Wv,Vs.events="loading load tileloadstart tileload tileunload",Vs);Ge([u({type:String})],Fe.prototype,"type",2);Ge([u({type:Array,attribute:"map-styles"})],Fe.prototype,"mapStyles",2);Ge([u({type:Number,attribute:"min-zoom"})],Fe.prototype,"minZoom",2);Ge([u({type:Number,attribute:"max-zoom"})],Fe.prototype,"maxZoom",2);Ge([u({type:Number,attribute:"max-native-zoom"})],Fe.prototype,"maxNativeZoom",2);Ge([u({type:Number,attribute:"tile-size"})],Fe.prototype,"tileSize",2);Ge([u({type:String})],Fe.prototype,"subdomains",2);Ge([u({type:String,attribute:"error-tile-url"})],Fe.prototype,"errorTileUrl",2);Ge([u({type:String})],Fe.prototype,"attribution",2);Ge([u({type:Boolean,attribute:"continuous-world"})],Fe.prototype,"continuousWorld",2);Ge([u({type:Boolean})],Fe.prototype,"noWrap",2);Ge([u({type:Number})],Fe.prototype,"opacity",2);Ge([u({type:Number,attribute:"z-index"})],Fe.prototype,"zIndex",2);Ge([M("type",{waitUntilFirstUpdate:!0}),M("styles",{waitUntilFirstUpdate:!0})],Fe.prototype,"containerChanged",1);Ge([M("opacity",{waitUntilFirstUpdate:!0})],Fe.prototype,"opacityChanged",1);Ge([M("z-index",{waitUntilFirstUpdate:!0})],Fe.prototype,"zIndexChanged",1);var Nd=Fe;Nd.define("awc-map-tilelayer-google");var jd={exports:{}};(function(i,t){(function(e,r){r(t)})(el,function(e){var r=L.MarkerClusterGroup=L.FeatureGroup.extend({options:{maxClusterRadius:80,iconCreateFunction:null,clusterPane:L.Marker.prototype.options.pane,spiderfyOnEveryZoom:!1,spiderfyOnMaxZoom:!0,showCoverageOnHover:!0,zoomToBoundsOnClick:!0,singleMarkerMode:!1,disableClusteringAtZoom:null,removeOutsideVisibleBounds:!0,animate:!0,animateAddingMarkers:!1,spiderfyShapePositions:null,spiderfyDistanceMultiplier:1,spiderLegPolylineOptions:{weight:1.5,color:"#222",opacity:.5},chunkedLoading:!1,chunkInterval:200,chunkDelay:50,chunkProgress:null,polygonOptions:{}},initialize:function(s){L.Util.setOptions(this,s),this.options.iconCreateFunction||(this.options.iconCreateFunction=this._defaultIconCreateFunction),this._featureGroup=L.featureGroup(),this._featureGroup.addEventParent(this),this._nonPointGroup=L.featureGroup(),this._nonPointGroup.addEventParent(this),this._inZoomAnimation=0,this._needsClustering=[],this._needsRemoving=[],this._currentShownBounds=null,this._queue=[],this._childMarkerEventHandlers={dragstart:this._childMarkerDragStart,move:this._childMarkerMoved,dragend:this._childMarkerDragEnd};var l=L.DomUtil.TRANSITION&&this.options.animate;L.extend(this,l?this._withAnimation:this._noAnimation),this._markerCluster=l?L.MarkerCluster:L.MarkerClusterNonAnimated},addLayer:function(s){if(s instanceof L.LayerGroup)return this.addLayers([s]);if(!s.getLatLng)return this._nonPointGroup.addLayer(s),this.fire("layeradd",{layer:s}),this;if(!this._map)return this._needsClustering.push(s),this.fire("layeradd",{layer:s}),this;if(this.hasLayer(s))return this;this._unspiderfy&&this._unspiderfy(),this._addLayer(s,this._maxZoom),this.fire("layeradd",{layer:s}),this._topClusterLevel._recalculateBounds(),this._refreshClustersIcons();var l=s,p=this._zoom;if(s.__parent)for(;l.__parent._zoom>=p;)l=l.__parent;return this._currentShownBounds.contains(l.getLatLng())&&(this.options.animateAddingMarkers?this._animationAddLayer(s,l):this._animationAddLayerNonAnimated(s,l)),this},removeLayer:function(s){return s instanceof L.LayerGroup?this.removeLayers([s]):s.getLatLng?this._map?s.__parent?(this._unspiderfy&&(this._unspiderfy(),this._unspiderfyLayer(s)),this._removeLayer(s,!0),this.fire("layerremove",{layer:s}),this._topClusterLevel._recalculateBounds(),this._refreshClustersIcons(),s.off(this._childMarkerEventHandlers,this),this._featureGroup.hasLayer(s)&&(this._featureGroup.removeLayer(s),s.clusterShow&&s.clusterShow()),this):this:(!this._arraySplice(this._needsClustering,s)&&this.hasLayer(s)&&this._needsRemoving.push({layer:s,latlng:s._latlng}),this.fire("layerremove",{layer:s}),this):(this._nonPointGroup.removeLayer(s),this.fire("layerremove",{layer:s}),this)},addLayers:function(s,l){if(!L.Util.isArray(s))return this.addLayer(s);var p=this._featureGroup,d=this._nonPointGroup,h=this.options.chunkedLoading,f=this.options.chunkInterval,g=this.options.chunkProgress,v=s.length,y=0,_=!0,x;if(this._map){var P=new Date().getTime(),S=L.bind(function(){var C=new Date().getTime();for(this._map&&this._unspiderfy&&this._unspiderfy();y<v;y++){if(h&&y%200===0){var z=new Date().getTime()-C;if(z>f)break}if(x=s[y],x instanceof L.LayerGroup){_&&(s=s.slice(),_=!1),this._extractNonGroupLayers(x,s),v=s.length;continue}if(!x.getLatLng){d.addLayer(x),l||this.fire("layeradd",{layer:x});continue}if(!this.hasLayer(x)&&(this._addLayer(x,this._maxZoom),l||this.fire("layeradd",{layer:x}),x.__parent&&x.__parent.getChildCount()===2)){var O=x.__parent.getAllChildMarkers(),j=O[0]===x?O[1]:O[0];p.removeLayer(j)}}g&&g(y,v,new Date().getTime()-P),y===v?(this._topClusterLevel._recalculateBounds(),this._refreshClustersIcons(),this._topClusterLevel._recursivelyAddChildrenToMap(null,this._zoom,this._currentShownBounds)):setTimeout(S,this.options.chunkDelay)},this);S()}else for(var k=this._needsClustering;y<v;y++){if(x=s[y],x instanceof L.LayerGroup){_&&(s=s.slice(),_=!1),this._extractNonGroupLayers(x,s),v=s.length;continue}if(!x.getLatLng){d.addLayer(x);continue}this.hasLayer(x)||k.push(x)}return this},removeLayers:function(s){var l,p,d=s.length,h=this._featureGroup,f=this._nonPointGroup,g=!0;if(!this._map){for(l=0;l<d;l++){if(p=s[l],p instanceof L.LayerGroup){g&&(s=s.slice(),g=!1),this._extractNonGroupLayers(p,s),d=s.length;continue}this._arraySplice(this._needsClustering,p),f.removeLayer(p),this.hasLayer(p)&&this._needsRemoving.push({layer:p,latlng:p._latlng}),this.fire("layerremove",{layer:p})}return this}if(this._unspiderfy){this._unspiderfy();var v=s.slice(),y=d;for(l=0;l<y;l++){if(p=v[l],p instanceof L.LayerGroup){this._extractNonGroupLayers(p,v),y=v.length;continue}this._unspiderfyLayer(p)}}for(l=0;l<d;l++){if(p=s[l],p instanceof L.LayerGroup){g&&(s=s.slice(),g=!1),this._extractNonGroupLayers(p,s),d=s.length;continue}if(!p.__parent){f.removeLayer(p),this.fire("layerremove",{layer:p});continue}this._removeLayer(p,!0,!0),this.fire("layerremove",{layer:p}),h.hasLayer(p)&&(h.removeLayer(p),p.clusterShow&&p.clusterShow())}return this._topClusterLevel._recalculateBounds(),this._refreshClustersIcons(),this._topClusterLevel._recursivelyAddChildrenToMap(null,this._zoom,this._currentShownBounds),this},clearLayers:function(){return this._map||(this._needsClustering=[],this._needsRemoving=[],delete this._gridClusters,delete this._gridUnclustered),this._noanimationUnspiderfy&&this._noanimationUnspiderfy(),this._featureGroup.clearLayers(),this._nonPointGroup.clearLayers(),this.eachLayer(function(s){s.off(this._childMarkerEventHandlers,this),delete s.__parent},this),this._map&&this._generateInitialClusters(),this},getBounds:function(){var s=new L.LatLngBounds;this._topClusterLevel&&s.extend(this._topClusterLevel._bounds);for(var l=this._needsClustering.length-1;l>=0;l--)s.extend(this._needsClustering[l].getLatLng());return s.extend(this._nonPointGroup.getBounds()),s},eachLayer:function(s,l){var p=this._needsClustering.slice(),d=this._needsRemoving,h,f,g;for(this._topClusterLevel&&this._topClusterLevel.getAllChildMarkers(p),f=p.length-1;f>=0;f--){for(h=!0,g=d.length-1;g>=0;g--)if(d[g].layer===p[f]){h=!1;break}h&&s.call(l,p[f])}this._nonPointGroup.eachLayer(s,l)},getLayers:function(){var s=[];return this.eachLayer(function(l){s.push(l)}),s},getLayer:function(s){var l=null;return s=parseInt(s,10),this.eachLayer(function(p){L.stamp(p)===s&&(l=p)}),l},hasLayer:function(s){if(!s)return!1;var l,p=this._needsClustering;for(l=p.length-1;l>=0;l--)if(p[l]===s)return!0;for(p=this._needsRemoving,l=p.length-1;l>=0;l--)if(p[l].layer===s)return!1;return!!(s.__parent&&s.__parent._group===this)||this._nonPointGroup.hasLayer(s)},zoomToShowLayer:function(s,l){var p=this._map;typeof l!="function"&&(l=function(){});var d=function(){(p.hasLayer(s)||p.hasLayer(s.__parent))&&!this._inZoomAnimation&&(this._map.off("moveend",d,this),this.off("animationend",d,this),p.hasLayer(s)?l():s.__parent._icon&&(this.once("spiderfied",l,this),s.__parent.spiderfy()))};s._icon&&this._map.getBounds().contains(s.getLatLng())?l():s.__parent._zoom<Math.round(this._map._zoom)?(this._map.on("moveend",d,this),this._map.panTo(s.getLatLng())):(this._map.on("moveend",d,this),this.on("animationend",d,this),s.__parent.zoomToBounds())},onAdd:function(s){this._map=s;var l,p,d;if(!isFinite(this._map.getMaxZoom()))throw"Map has no maxZoom specified";for(this._featureGroup.addTo(s),this._nonPointGroup.addTo(s),this._gridClusters||this._generateInitialClusters(),this._maxLat=s.options.crs.projection.MAX_LATITUDE,l=0,p=this._needsRemoving.length;l<p;l++)d=this._needsRemoving[l],d.newlatlng=d.layer._latlng,d.layer._latlng=d.latlng;for(l=0,p=this._needsRemoving.length;l<p;l++)d=this._needsRemoving[l],this._removeLayer(d.layer,!0),d.layer._latlng=d.newlatlng;this._needsRemoving=[],this._zoom=Math.round(this._map._zoom),this._currentShownBounds=this._getExpandedVisibleBounds(),this._map.on("zoomend",this._zoomEnd,this),this._map.on("moveend",this._moveEnd,this),this._spiderfierOnAdd&&this._spiderfierOnAdd(),this._bindEvents(),p=this._needsClustering,this._needsClustering=[],this.addLayers(p,!0)},onRemove:function(s){s.off("zoomend",this._zoomEnd,this),s.off("moveend",this._moveEnd,this),this._unbindEvents(),this._map._mapPane.className=this._map._mapPane.className.replace(" leaflet-cluster-anim",""),this._spiderfierOnRemove&&this._spiderfierOnRemove(),delete this._maxLat,this._hideCoverage(),this._featureGroup.remove(),this._nonPointGroup.remove(),this._featureGroup.clearLayers(),this._map=null},getVisibleParent:function(s){for(var l=s;l&&!l._icon;)l=l.__parent;return l||null},_arraySplice:function(s,l){for(var p=s.length-1;p>=0;p--)if(s[p]===l)return s.splice(p,1),!0},_removeFromGridUnclustered:function(s,l){for(var p=this._map,d=this._gridUnclustered,h=Math.floor(this._map.getMinZoom());l>=h&&d[l].removeObject(s,p.project(s.getLatLng(),l));l--);},_childMarkerDragStart:function(s){s.target.__dragStart=s.target._latlng},_childMarkerMoved:function(s){if(!this._ignoreMove&&!s.target.__dragStart){var l=s.target._popup&&s.target._popup.isOpen();this._moveChild(s.target,s.oldLatLng,s.latlng),l&&s.target.openPopup()}},_moveChild:function(s,l,p){s._latlng=l,this.removeLayer(s),s._latlng=p,this.addLayer(s)},_childMarkerDragEnd:function(s){var l=s.target.__dragStart;delete s.target.__dragStart,l&&this._moveChild(s.target,l,s.target._latlng)},_removeLayer:function(s,l,p){var d=this._gridClusters,h=this._gridUnclustered,f=this._featureGroup,g=this._map,v=Math.floor(this._map.getMinZoom());l&&this._removeFromGridUnclustered(s,this._maxZoom);var y=s.__parent,_=y._markers,x;for(this._arraySplice(_,s);y&&(y._childCount--,y._boundsNeedUpdate=!0,!(y._zoom<v));)l&&y._childCount<=1?(x=y._markers[0]===s?y._markers[1]:y._markers[0],d[y._zoom].removeObject(y,g.project(y._cLatLng,y._zoom)),h[y._zoom].addObject(x,g.project(x.getLatLng(),y._zoom)),this._arraySplice(y.__parent._childClusters,y),y.__parent._markers.push(x),x.__parent=y.__parent,y._icon&&(f.removeLayer(y),p||f.addLayer(x))):y._iconNeedsUpdate=!0,y=y.__parent;delete s.__parent},_isOrIsParent:function(s,l){for(;l;){if(s===l)return!0;l=l.parentNode}return!1},fire:function(s,l,p){if(l&&l.layer instanceof L.MarkerCluster){if(l.originalEvent&&this._isOrIsParent(l.layer._icon,l.originalEvent.relatedTarget))return;s="cluster"+s}L.FeatureGroup.prototype.fire.call(this,s,l,p)},listens:function(s,l){return L.FeatureGroup.prototype.listens.call(this,s,l)||L.FeatureGroup.prototype.listens.call(this,"cluster"+s,l)},_defaultIconCreateFunction:function(s){var l=s.getChildCount(),p=" marker-cluster-";return l<10?p+="small":l<100?p+="medium":p+="large",new L.DivIcon({html:"<div><span>"+l+"</span></div>",className:"marker-cluster"+p,iconSize:new L.Point(40,40)})},_bindEvents:function(){var s=this._map,l=this.options.spiderfyOnMaxZoom,p=this.options.showCoverageOnHover,d=this.options.zoomToBoundsOnClick,h=this.options.spiderfyOnEveryZoom;(l||d||h)&&this.on("clusterclick clusterkeypress",this._zoomOrSpiderfy,this),p&&(this.on("clustermouseover",this._showCoverage,this),this.on("clustermouseout",this._hideCoverage,this),s.on("zoomend",this._hideCoverage,this))},_zoomOrSpiderfy:function(s){var l=s.layer,p=l;if(!(s.type==="clusterkeypress"&&s.originalEvent&&s.originalEvent.keyCode!==13)){for(;p._childClusters.length===1;)p=p._childClusters[0];p._zoom===this._maxZoom&&p._childCount===l._childCount&&this.options.spiderfyOnMaxZoom?l.spiderfy():this.options.zoomToBoundsOnClick&&l.zoomToBounds(),this.options.spiderfyOnEveryZoom&&l.spiderfy(),s.originalEvent&&s.originalEvent.keyCode===13&&this._map._container.focus()}},_showCoverage:function(s){var l=this._map;this._inZoomAnimation||(this._shownPolygon&&l.removeLayer(this._shownPolygon),s.layer.getChildCount()>2&&s.layer!==this._spiderfied&&(this._shownPolygon=new L.Polygon(s.layer.getConvexHull(),this.options.polygonOptions),l.addLayer(this._shownPolygon)))},_hideCoverage:function(){this._shownPolygon&&(this._map.removeLayer(this._shownPolygon),this._shownPolygon=null)},_unbindEvents:function(){var s=this.options.spiderfyOnMaxZoom,l=this.options.showCoverageOnHover,p=this.options.zoomToBoundsOnClick,d=this.options.spiderfyOnEveryZoom,h=this._map;(s||p||d)&&this.off("clusterclick clusterkeypress",this._zoomOrSpiderfy,this),l&&(this.off("clustermouseover",this._showCoverage,this),this.off("clustermouseout",this._hideCoverage,this),h.off("zoomend",this._hideCoverage,this))},_zoomEnd:function(){this._map&&(this._mergeSplitClusters(),this._zoom=Math.round(this._map._zoom),this._currentShownBounds=this._getExpandedVisibleBounds())},_moveEnd:function(){if(!this._inZoomAnimation){var s=this._getExpandedVisibleBounds();this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,Math.floor(this._map.getMinZoom()),this._zoom,s),this._topClusterLevel._recursivelyAddChildrenToMap(null,Math.round(this._map._zoom),s),this._currentShownBounds=s}},_generateInitialClusters:function(){var s=Math.ceil(this._map.getMaxZoom()),l=Math.floor(this._map.getMinZoom()),p=this.options.maxClusterRadius,d=p;typeof p!="function"&&(d=function(){return p}),this.options.disableClusteringAtZoom!==null&&(s=this.options.disableClusteringAtZoom-1),this._maxZoom=s,this._gridClusters={},this._gridUnclustered={};for(var h=s;h>=l;h--)this._gridClusters[h]=new L.DistanceGrid(d(h)),this._gridUnclustered[h]=new L.DistanceGrid(d(h));this._topClusterLevel=new this._markerCluster(this,l-1)},_addLayer:function(s,l){var p=this._gridClusters,d=this._gridUnclustered,h=Math.floor(this._map.getMinZoom()),f,g;for(this.options.singleMarkerMode&&this._overrideMarkerIcon(s),s.on(this._childMarkerEventHandlers,this);l>=h;l--){f=this._map.project(s.getLatLng(),l);var v=p[l].getNearObject(f);if(v){v._addChild(s),s.__parent=v;return}if(v=d[l].getNearObject(f),v){var y=v.__parent;y&&this._removeLayer(v,!1);var _=new this._markerCluster(this,l,v,s);p[l].addObject(_,this._map.project(_._cLatLng,l)),v.__parent=_,s.__parent=_;var x=_;for(g=l-1;g>y._zoom;g--)x=new this._markerCluster(this,g,x),p[g].addObject(x,this._map.project(v.getLatLng(),g));y._addChild(x),this._removeFromGridUnclustered(v,l);return}d[l].addObject(s,f)}this._topClusterLevel._addChild(s),s.__parent=this._topClusterLevel},_refreshClustersIcons:function(){this._featureGroup.eachLayer(function(s){s instanceof L.MarkerCluster&&s._iconNeedsUpdate&&s._updateIcon()})},_enqueue:function(s){this._queue.push(s),this._queueTimeout||(this._queueTimeout=setTimeout(L.bind(this._processQueue,this),300))},_processQueue:function(){for(var s=0;s<this._queue.length;s++)this._queue[s].call(this);this._queue.length=0,clearTimeout(this._queueTimeout),this._queueTimeout=null},_mergeSplitClusters:function(){var s=Math.round(this._map._zoom);this._processQueue(),this._zoom<s&&this._currentShownBounds.intersects(this._getExpandedVisibleBounds())?(this._animationStart(),this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,Math.floor(this._map.getMinZoom()),this._zoom,this._getExpandedVisibleBounds()),this._animationZoomIn(this._zoom,s)):this._zoom>s?(this._animationStart(),this._animationZoomOut(this._zoom,s)):this._moveEnd()},_getExpandedVisibleBounds:function(){if(this.options.removeOutsideVisibleBounds){if(L.Browser.mobile)return this._checkBoundsMaxLat(this._map.getBounds())}else return this._mapBoundsInfinite;return this._checkBoundsMaxLat(this._map.getBounds().pad(1))},_checkBoundsMaxLat:function(s){var l=this._maxLat;return l!==void 0&&(s.getNorth()>=l&&(s._northEast.lat=1/0),s.getSouth()<=-l&&(s._southWest.lat=-1/0)),s},_animationAddLayerNonAnimated:function(s,l){if(l===s)this._featureGroup.addLayer(s);else if(l._childCount===2){l._addToMap();var p=l.getAllChildMarkers();this._featureGroup.removeLayer(p[0]),this._featureGroup.removeLayer(p[1])}else l._updateIcon()},_extractNonGroupLayers:function(s,l){var p=s.getLayers(),d=0,h;for(l=l||[];d<p.length;d++){if(h=p[d],h instanceof L.LayerGroup){this._extractNonGroupLayers(h,l);continue}l.push(h)}return l},_overrideMarkerIcon:function(s){var l=s.options.icon=this.options.iconCreateFunction({getChildCount:function(){return 1},getAllChildMarkers:function(){return[s]}});return l}});L.MarkerClusterGroup.include({_mapBoundsInfinite:new L.LatLngBounds(new L.LatLng(-1/0,-1/0),new L.LatLng(1/0,1/0))}),L.MarkerClusterGroup.include({_noAnimation:{_animationStart:function(){},_animationZoomIn:function(s,l){this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,Math.floor(this._map.getMinZoom()),s),this._topClusterLevel._recursivelyAddChildrenToMap(null,l,this._getExpandedVisibleBounds()),this.fire("animationend")},_animationZoomOut:function(s,l){this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,Math.floor(this._map.getMinZoom()),s),this._topClusterLevel._recursivelyAddChildrenToMap(null,l,this._getExpandedVisibleBounds()),this.fire("animationend")},_animationAddLayer:function(s,l){this._animationAddLayerNonAnimated(s,l)}},_withAnimation:{_animationStart:function(){this._map._mapPane.className+=" leaflet-cluster-anim",this._inZoomAnimation++},_animationZoomIn:function(s,l){var p=this._getExpandedVisibleBounds(),d=this._featureGroup,h=Math.floor(this._map.getMinZoom()),f;this._ignoreMove=!0,this._topClusterLevel._recursively(p,s,h,function(g){var v=g._latlng,y=g._markers,_;for(p.contains(v)||(v=null),g._isSingleParent()&&s+1===l?(d.removeLayer(g),g._recursivelyAddChildrenToMap(null,l,p)):(g.clusterHide(),g._recursivelyAddChildrenToMap(v,l,p)),f=y.length-1;f>=0;f--)_=y[f],p.contains(_._latlng)||d.removeLayer(_)}),this._forceLayout(),this._topClusterLevel._recursivelyBecomeVisible(p,l),d.eachLayer(function(g){!(g instanceof L.MarkerCluster)&&g._icon&&g.clusterShow()}),this._topClusterLevel._recursively(p,s,l,function(g){g._recursivelyRestoreChildPositions(l)}),this._ignoreMove=!1,this._enqueue(function(){this._topClusterLevel._recursively(p,s,h,function(g){d.removeLayer(g),g.clusterShow()}),this._animationEnd()})},_animationZoomOut:function(s,l){this._animationZoomOutSingle(this._topClusterLevel,s-1,l),this._topClusterLevel._recursivelyAddChildrenToMap(null,l,this._getExpandedVisibleBounds()),this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds,Math.floor(this._map.getMinZoom()),s,this._getExpandedVisibleBounds())},_animationAddLayer:function(s,l){var p=this,d=this._featureGroup;d.addLayer(s),l!==s&&(l._childCount>2?(l._updateIcon(),this._forceLayout(),this._animationStart(),s._setPos(this._map.latLngToLayerPoint(l.getLatLng())),s.clusterHide(),this._enqueue(function(){d.removeLayer(s),s.clusterShow(),p._animationEnd()})):(this._forceLayout(),p._animationStart(),p._animationZoomOutSingle(l,this._map.getMaxZoom(),this._zoom)))}},_animationZoomOutSingle:function(s,l,p){var d=this._getExpandedVisibleBounds(),h=Math.floor(this._map.getMinZoom());s._recursivelyAnimateChildrenInAndAddSelfToMap(d,h,l+1,p);var f=this;this._forceLayout(),s._recursivelyBecomeVisible(d,p),this._enqueue(function(){if(s._childCount===1){var g=s._markers[0];this._ignoreMove=!0,g.setLatLng(g.getLatLng()),this._ignoreMove=!1,g.clusterShow&&g.clusterShow()}else s._recursively(d,p,h,function(v){v._recursivelyRemoveChildrenFromMap(d,h,l+1)});f._animationEnd()})},_animationEnd:function(){this._map&&(this._map._mapPane.className=this._map._mapPane.className.replace(" leaflet-cluster-anim","")),this._inZoomAnimation--,this.fire("animationend")},_forceLayout:function(){L.Util.falseFn(document.body.offsetWidth)}}),L.markerClusterGroup=function(s){return new L.MarkerClusterGroup(s)};var a=L.MarkerCluster=L.Marker.extend({options:L.Icon.prototype.options,initialize:function(s,l,p,d){L.Marker.prototype.initialize.call(this,p?p._cLatLng||p.getLatLng():new L.LatLng(0,0),{icon:this,pane:s.options.clusterPane}),this._group=s,this._zoom=l,this._markers=[],this._childClusters=[],this._childCount=0,this._iconNeedsUpdate=!0,this._boundsNeedUpdate=!0,this._bounds=new L.LatLngBounds,p&&this._addChild(p),d&&this._addChild(d)},getAllChildMarkers:function(s,l){s=s||[];for(var p=this._childClusters.length-1;p>=0;p--)this._childClusters[p].getAllChildMarkers(s,l);for(var d=this._markers.length-1;d>=0;d--)l&&this._markers[d].__dragStart||s.push(this._markers[d]);return s},getChildCount:function(){return this._childCount},zoomToBounds:function(s){for(var l=this._childClusters.slice(),p=this._group._map,d=p.getBoundsZoom(this._bounds),h=this._zoom+1,f=p.getZoom(),g;l.length>0&&d>h;){h++;var v=[];for(g=0;g<l.length;g++)v=v.concat(l[g]._childClusters);l=v}d>h?this._group._map.setView(this._latlng,h):d<=f?this._group._map.setView(this._latlng,f+1):this._group._map.fitBounds(this._bounds,s)},getBounds:function(){var s=new L.LatLngBounds;return s.extend(this._bounds),s},_updateIcon:function(){this._iconNeedsUpdate=!0,this._icon&&this.setIcon(this)},createIcon:function(){return this._iconNeedsUpdate&&(this._iconObj=this._group.options.iconCreateFunction(this),this._iconNeedsUpdate=!1),this._iconObj.createIcon()},createShadow:function(){return this._iconObj.createShadow()},_addChild:function(s,l){this._iconNeedsUpdate=!0,this._boundsNeedUpdate=!0,this._setClusterCenter(s),s instanceof L.MarkerCluster?(l||(this._childClusters.push(s),s.__parent=this),this._childCount+=s._childCount):(l||this._markers.push(s),this._childCount++),this.__parent&&this.__parent._addChild(s,!0)},_setClusterCenter:function(s){this._cLatLng||(this._cLatLng=s._cLatLng||s._latlng)},_resetBounds:function(){var s=this._bounds;s._southWest&&(s._southWest.lat=1/0,s._southWest.lng=1/0),s._northEast&&(s._northEast.lat=-1/0,s._northEast.lng=-1/0)},_recalculateBounds:function(){var s=this._markers,l=this._childClusters,p=0,d=0,h=this._childCount,f,g,v,y;if(h!==0){for(this._resetBounds(),f=0;f<s.length;f++)v=s[f]._latlng,this._bounds.extend(v),p+=v.lat,d+=v.lng;for(f=0;f<l.length;f++)g=l[f],g._boundsNeedUpdate&&g._recalculateBounds(),this._bounds.extend(g._bounds),v=g._wLatLng,y=g._childCount,p+=v.lat*y,d+=v.lng*y;this._latlng=this._wLatLng=new L.LatLng(p/h,d/h),this._boundsNeedUpdate=!1}},_addToMap:function(s){s&&(this._backupLatlng=this._latlng,this.setLatLng(s)),this._group._featureGroup.addLayer(this)},_recursivelyAnimateChildrenIn:function(s,l,p){this._recursively(s,this._group._map.getMinZoom(),p-1,function(d){var h=d._markers,f,g;for(f=h.length-1;f>=0;f--)g=h[f],g._icon&&(g._setPos(l),g.clusterHide())},function(d){var h=d._childClusters,f,g;for(f=h.length-1;f>=0;f--)g=h[f],g._icon&&(g._setPos(l),g.clusterHide())})},_recursivelyAnimateChildrenInAndAddSelfToMap:function(s,l,p,d){this._recursively(s,d,l,function(h){h._recursivelyAnimateChildrenIn(s,h._group._map.latLngToLayerPoint(h.getLatLng()).round(),p),h._isSingleParent()&&p-1===d?(h.clusterShow(),h._recursivelyRemoveChildrenFromMap(s,l,p)):h.clusterHide(),h._addToMap()})},_recursivelyBecomeVisible:function(s,l){this._recursively(s,this._group._map.getMinZoom(),l,null,function(p){p.clusterShow()})},_recursivelyAddChildrenToMap:function(s,l,p){this._recursively(p,this._group._map.getMinZoom()-1,l,function(d){if(l!==d._zoom)for(var h=d._markers.length-1;h>=0;h--){var f=d._markers[h];p.contains(f._latlng)&&(s&&(f._backupLatlng=f.getLatLng(),f.setLatLng(s),f.clusterHide&&f.clusterHide()),d._group._featureGroup.addLayer(f))}},function(d){d._addToMap(s)})},_recursivelyRestoreChildPositions:function(s){for(var l=this._markers.length-1;l>=0;l--){var p=this._markers[l];p._backupLatlng&&(p.setLatLng(p._backupLatlng),delete p._backupLatlng)}if(s-1===this._zoom)for(var d=this._childClusters.length-1;d>=0;d--)this._childClusters[d]._restorePosition();else for(var h=this._childClusters.length-1;h>=0;h--)this._childClusters[h]._recursivelyRestoreChildPositions(s)},_restorePosition:function(){this._backupLatlng&&(this.setLatLng(this._backupLatlng),delete this._backupLatlng)},_recursivelyRemoveChildrenFromMap:function(s,l,p,d){var h,f;this._recursively(s,l-1,p-1,function(g){for(f=g._markers.length-1;f>=0;f--)h=g._markers[f],(!d||!d.contains(h._latlng))&&(g._group._featureGroup.removeLayer(h),h.clusterShow&&h.clusterShow())},function(g){for(f=g._childClusters.length-1;f>=0;f--)h=g._childClusters[f],(!d||!d.contains(h._latlng))&&(g._group._featureGroup.removeLayer(h),h.clusterShow&&h.clusterShow())})},_recursively:function(s,l,p,d,h){var f=this._childClusters,g=this._zoom,v,y;if(l<=g&&(d&&d(this),h&&g===p&&h(this)),g<l||g<p)for(v=f.length-1;v>=0;v--)y=f[v],y._boundsNeedUpdate&&y._recalculateBounds(),s.intersects(y._bounds)&&y._recursively(s,l,p,d,h)},_isSingleParent:function(){return this._childClusters.length>0&&this._childClusters[0]._childCount===this._childCount}});L.Marker.include({clusterHide:function(){var s=this.options.opacity;return this.setOpacity(0),this.options.opacity=s,this},clusterShow:function(){return this.setOpacity(this.options.opacity)}}),L.DistanceGrid=function(s){this._cellSize=s,this._sqCellSize=s*s,this._grid={},this._objectPoint={}},L.DistanceGrid.prototype={addObject:function(s,l){var p=this._getCoord(l.x),d=this._getCoord(l.y),h=this._grid,f=h[d]=h[d]||{},g=f[p]=f[p]||[],v=L.Util.stamp(s);this._objectPoint[v]=l,g.push(s)},updateObject:function(s,l){this.removeObject(s),this.addObject(s,l)},removeObject:function(s,l){var p=this._getCoord(l.x),d=this._getCoord(l.y),h=this._grid,f=h[d]=h[d]||{},g=f[p]=f[p]||[],v,y;for(delete this._objectPoint[L.Util.stamp(s)],v=0,y=g.length;v<y;v++)if(g[v]===s)return g.splice(v,1),y===1&&delete f[p],!0},eachObject:function(s,l){var p,d,h,f,g,v,y,_=this._grid;for(p in _){g=_[p];for(d in g)for(v=g[d],h=0,f=v.length;h<f;h++)y=s.call(l,v[h]),y&&(h--,f--)}},getNearObject:function(s){var l=this._getCoord(s.x),p=this._getCoord(s.y),d,h,f,g,v,y,_,x,P=this._objectPoint,S=this._sqCellSize,k=null;for(d=p-1;d<=p+1;d++)if(g=this._grid[d],g){for(h=l-1;h<=l+1;h++)if(v=g[h],v)for(f=0,y=v.length;f<y;f++)_=v[f],x=this._sqDist(P[L.Util.stamp(_)],s),(x<S||x<=S&&k===null)&&(S=x,k=_)}return k},_getCoord:function(s){var l=Math.floor(s/this._cellSize);return isFinite(l)?l:s},_sqDist:function(s,l){var p=l.x-s.x,d=l.y-s.y;return p*p+d*d}},function(){L.QuickHull={getDistant:function(s,l){var p=l[1].lat-l[0].lat,d=l[0].lng-l[1].lng;return d*(s.lat-l[0].lat)+p*(s.lng-l[0].lng)},findMostDistantPointFromBaseLine:function(s,l){var p=0,d=null,h=[],f,g,v;for(f=l.length-1;f>=0;f--){if(g=l[f],v=this.getDistant(g,s),v>0)h.push(g);else continue;v>p&&(p=v,d=g)}return{maxPoint:d,newPoints:h}},buildConvexHull:function(s,l){var p=[],d=this.findMostDistantPointFromBaseLine(s,l);return d.maxPoint?(p=p.concat(this.buildConvexHull([s[0],d.maxPoint],d.newPoints)),p=p.concat(this.buildConvexHull([d.maxPoint,s[1]],d.newPoints)),p):[s[0]]},getConvexHull:function(s){var l=!1,p=!1,d=!1,h=!1,f=null,g=null,v=null,y=null,_=null,x=null,P;for(P=s.length-1;P>=0;P--){var S=s[P];(l===!1||S.lat>l)&&(f=S,l=S.lat),(p===!1||S.lat<p)&&(g=S,p=S.lat),(d===!1||S.lng>d)&&(v=S,d=S.lng),(h===!1||S.lng<h)&&(y=S,h=S.lng)}p!==l?(x=g,_=f):(x=y,_=v);var k=[].concat(this.buildConvexHull([x,_],s),this.buildConvexHull([_,x],s));return k}}}(),L.MarkerCluster.include({getConvexHull:function(){var s=this.getAllChildMarkers(),l=[],p,d;for(d=s.length-1;d>=0;d--)p=s[d].getLatLng(),l.push(p);return L.QuickHull.getConvexHull(l)}}),L.MarkerCluster.include({_2PI:Math.PI*2,_circleFootSeparation:25,_circleStartAngle:0,_spiralFootSeparation:28,_spiralLengthStart:11,_spiralLengthFactor:5,_circleSpiralSwitchover:9,spiderfy:function(){if(!(this._group._spiderfied===this||this._group._inZoomAnimation)){var s=this.getAllChildMarkers(null,!0),l=this._group,p=l._map,d=p.latLngToLayerPoint(this._latlng),h;this._group._unspiderfy(),this._group._spiderfied=this,this._group.options.spiderfyShapePositions?h=this._group.options.spiderfyShapePositions(s.length,d):s.length>=this._circleSpiralSwitchover?h=this._generatePointsSpiral(s.length,d):(d.y+=10,h=this._generatePointsCircle(s.length,d)),this._animationSpiderfy(s,h)}},unspiderfy:function(s){this._group._inZoomAnimation||(this._animationUnspiderfy(s),this._group._spiderfied=null)},_generatePointsCircle:function(s,l){var p=this._group.options.spiderfyDistanceMultiplier*this._circleFootSeparation*(2+s),d=p/this._2PI,h=this._2PI/s,f=[],g,v;for(d=Math.max(d,35),f.length=s,g=0;g<s;g++)v=this._circleStartAngle+g*h,f[g]=new L.Point(l.x+d*Math.cos(v),l.y+d*Math.sin(v))._round();return f},_generatePointsSpiral:function(s,l){var p=this._group.options.spiderfyDistanceMultiplier,d=p*this._spiralLengthStart,h=p*this._spiralFootSeparation,f=p*this._spiralLengthFactor*this._2PI,g=0,v=[],y;for(v.length=s,y=s;y>=0;y--)y<s&&(v[y]=new L.Point(l.x+d*Math.cos(g),l.y+d*Math.sin(g))._round()),g+=h/d+y*5e-4,d+=f/g;return v},_noanimationUnspiderfy:function(){var s=this._group,l=s._map,p=s._featureGroup,d=this.getAllChildMarkers(null,!0),h,f;for(s._ignoreMove=!0,this.setOpacity(1),f=d.length-1;f>=0;f--)h=d[f],p.removeLayer(h),h._preSpiderfyLatlng&&(h.setLatLng(h._preSpiderfyLatlng),delete h._preSpiderfyLatlng),h.setZIndexOffset&&h.setZIndexOffset(0),h._spiderLeg&&(l.removeLayer(h._spiderLeg),delete h._spiderLeg);s.fire("unspiderfied",{cluster:this,markers:d}),s._ignoreMove=!1,s._spiderfied=null}}),L.MarkerClusterNonAnimated=L.MarkerCluster.extend({_animationSpiderfy:function(s,l){var p=this._group,d=p._map,h=p._featureGroup,f=this._group.options.spiderLegPolylineOptions,g,v,y,_;for(p._ignoreMove=!0,g=0;g<s.length;g++)_=d.layerPointToLatLng(l[g]),v=s[g],y=new L.Polyline([this._latlng,_],f),d.addLayer(y),v._spiderLeg=y,v._preSpiderfyLatlng=v._latlng,v.setLatLng(_),v.setZIndexOffset&&v.setZIndexOffset(1e6),h.addLayer(v);this.setOpacity(.3),p._ignoreMove=!1,p.fire("spiderfied",{cluster:this,markers:s})},_animationUnspiderfy:function(){this._noanimationUnspiderfy()}}),L.MarkerCluster.include({_animationSpiderfy:function(s,l){var p=this,d=this._group,h=d._map,f=d._featureGroup,g=this._latlng,v=h.latLngToLayerPoint(g),y=L.Path.SVG,_=L.extend({},this._group.options.spiderLegPolylineOptions),x=_.opacity,P,S,k,C,z,O;for(x===void 0&&(x=L.MarkerClusterGroup.prototype.options.spiderLegPolylineOptions.opacity),y?(_.opacity=0,_.className=(_.className||"")+" leaflet-cluster-spider-leg"):_.opacity=x,d._ignoreMove=!0,P=0;P<s.length;P++)S=s[P],O=h.layerPointToLatLng(l[P]),k=new L.Polyline([g,O],_),h.addLayer(k),S._spiderLeg=k,y&&(C=k._path,z=C.getTotalLength()+.1,C.style.strokeDasharray=z,C.style.strokeDashoffset=z),S.setZIndexOffset&&S.setZIndexOffset(1e6),S.clusterHide&&S.clusterHide(),f.addLayer(S),S._setPos&&S._setPos(v);for(d._forceLayout(),d._animationStart(),P=s.length-1;P>=0;P--)O=h.layerPointToLatLng(l[P]),S=s[P],S._preSpiderfyLatlng=S._latlng,S.setLatLng(O),S.clusterShow&&S.clusterShow(),y&&(k=S._spiderLeg,C=k._path,C.style.strokeDashoffset=0,k.setStyle({opacity:x}));this.setOpacity(.3),d._ignoreMove=!1,setTimeout(function(){d._animationEnd(),d.fire("spiderfied",{cluster:p,markers:s})},200)},_animationUnspiderfy:function(s){var l=this,p=this._group,d=p._map,h=p._featureGroup,f=s?d._latLngToNewLayerPoint(this._latlng,s.zoom,s.center):d.latLngToLayerPoint(this._latlng),g=this.getAllChildMarkers(null,!0),v=L.Path.SVG,y,_,x,P,S,k;for(p._ignoreMove=!0,p._animationStart(),this.setOpacity(1),_=g.length-1;_>=0;_--)y=g[_],y._preSpiderfyLatlng&&(y.closePopup(),y.setLatLng(y._preSpiderfyLatlng),delete y._preSpiderfyLatlng,k=!0,y._setPos&&(y._setPos(f),k=!1),y.clusterHide&&(y.clusterHide(),k=!1),k&&h.removeLayer(y),v&&(x=y._spiderLeg,P=x._path,S=P.getTotalLength()+.1,P.style.strokeDashoffset=S,x.setStyle({opacity:0})));p._ignoreMove=!1,setTimeout(function(){var C=0;for(_=g.length-1;_>=0;_--)y=g[_],y._spiderLeg&&C++;for(_=g.length-1;_>=0;_--)y=g[_],y._spiderLeg&&(y.clusterShow&&y.clusterShow(),y.setZIndexOffset&&y.setZIndexOffset(0),C>1&&h.removeLayer(y),d.removeLayer(y._spiderLeg),delete y._spiderLeg);p._animationEnd(),p.fire("unspiderfied",{cluster:l,markers:g})},200)}}),L.MarkerClusterGroup.include({_spiderfied:null,unspiderfy:function(){this._unspiderfy.apply(this,arguments)},_spiderfierOnAdd:function(){this._map.on("click",this._unspiderfyWrapper,this),this._map.options.zoomAnimation&&this._map.on("zoomstart",this._unspiderfyZoomStart,this),this._map.on("zoomend",this._noanimationUnspiderfy,this),L.Browser.touch||this._map.getRenderer(this)},_spiderfierOnRemove:function(){this._map.off("click",this._unspiderfyWrapper,this),this._map.off("zoomstart",this._unspiderfyZoomStart,this),this._map.off("zoomanim",this._unspiderfyZoomAnim,this),this._map.off("zoomend",this._noanimationUnspiderfy,this),this._noanimationUnspiderfy()},_unspiderfyZoomStart:function(){this._map&&this._map.on("zoomanim",this._unspiderfyZoomAnim,this)},_unspiderfyZoomAnim:function(s){L.DomUtil.hasClass(this._map._mapPane,"leaflet-touching")||(this._map.off("zoomanim",this._unspiderfyZoomAnim,this),this._unspiderfy(s))},_unspiderfyWrapper:function(){this._unspiderfy()},_unspiderfy:function(s){this._spiderfied&&this._spiderfied.unspiderfy(s)},_noanimationUnspiderfy:function(){this._spiderfied&&this._spiderfied._noanimationUnspiderfy()},_unspiderfyLayer:function(s){s._spiderLeg&&(this._featureGroup.removeLayer(s),s.clusterShow&&s.clusterShow(),s.setZIndexOffset&&s.setZIndexOffset(0),this._map.removeLayer(s._spiderLeg),delete s._spiderLeg)}}),L.MarkerClusterGroup.include({refreshClusters:function(s){return s?s instanceof L.MarkerClusterGroup?s=s._topClusterLevel.getAllChildMarkers():s instanceof L.LayerGroup?s=s._layers:s instanceof L.MarkerCluster?s=s.getAllChildMarkers():s instanceof L.Marker&&(s=[s]):s=this._topClusterLevel.getAllChildMarkers(),this._flagParentsIconsNeedUpdate(s),this._refreshClustersIcons(),this.options.singleMarkerMode&&this._refreshSingleMarkerModeMarkers(s),this},_flagParentsIconsNeedUpdate:function(s){var l,p;for(l in s)for(p=s[l].__parent;p;)p._iconNeedsUpdate=!0,p=p.__parent},_refreshSingleMarkerModeMarkers:function(s){var l,p;for(l in s)p=s[l],this.hasLayer(p)&&p.setIcon(this._overrideMarkerIcon(p))}}),L.Marker.include({refreshIconOptions:function(s,l){var p=this.options.icon;return L.setOptions(p,s),this.setIcon(p),l&&this.__parent&&this.__parent._group.refreshClusters(this),this}}),e.MarkerClusterGroup=r,e.MarkerCluster=a,Object.defineProperty(e,"__esModule",{value:!0})})})(jd,jd.exports);var x2=Object.defineProperty,k2=Object.getOwnPropertyDescriptor,Hr=(i,t,e,r)=>{for(var a=r>1?void 0:r?k2(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&x2(t,e,a),a},jo=class extends dt{constructor(){super(...arguments),this.showCoverageOnHover=!1,this.zoomToBoundsOnClick=!0,this.spiderfyOnMaxZoom=!0,this.removeOutsideVisibleBounds=!0,this.spiderLegPolylineOptions={weight:1.5,color:"#222",opacity:.5},this.chunkedLoading=!0}firstUpdated(){this.mutationObserver=new MutationObserver(this.registerContainerOnChildren),this.mutationObserver.observe(this,{childList:!0})}containerChanged(){this.container&&(this.feature=K.markerClusterGroup({showCoverageOnHover:this.showCoverageOnHover,zoomToBoundsOnClick:this.zoomToBoundsOnClick,spiderfyOnMaxZoom:this.spiderfyOnMaxZoom,removeOutsideVisibleBounds:this.removeOutsideVisibleBounds,spiderLegPolylineOptions:this.spiderLegPolylineOptions}),this.feature.addTo(this.container),this.registerContainerOnChildren())}disconnectedCallback(){super.disconnectedCallback(),this.container&&this.feature&&this.container.removeLayer(this.feature),this.mutationObserver.disconnect()}registerContainerOnChildren(){for(let t of this.children)t.container=this.feature}};Hr([u({type:Boolean,attribute:"show-coverage-on-hover"})],jo.prototype,"showCoverageOnHover",2);Hr([u({type:Boolean,attribute:"zoom-to-bounds-on-click"})],jo.prototype,"zoomToBoundsOnClick",2);Hr([u({type:Boolean,attribute:"spiderfy-on-max-zoom"})],jo.prototype,"spiderfyOnMaxZoom",2);Hr([u({type:Boolean,attribute:"remove-outside-visible-bounds"})],jo.prototype,"removeOutsideVisibleBounds",2);Hr([u({type:Object,attribute:"spider-leg-polyline-options"})],jo.prototype,"spiderLegPolylineOptions",2);Hr([u({type:Boolean,attribute:"chunked-loading"})],jo.prototype,"chunkedLoading",2);Hr([re],jo.prototype,"registerContainerOnChildren",1);jo.define("awc-map-marker-cluster-group");var qv=A`
  ${N}

  :host {
    display: block;

    --gap: var(--awc-spacing-medium);
    --size: var(--awc-spacing-5x-large);
    --font-size: var(--awc-font-size-medium);
    --badge-radius: 50%;
    --track-height: var(--awc-spacing-3x-small);
    --track-gap: var(--awc-spacing-x-small);

    --color: var(--awc-color-neutral-400);
    --badge-color: var(--awc-color-neutral-400);
    --backgound-color: var(--awc-color-neutral-0);

    --active-color: var(--awc-color-primary-600);
    --active-badge-color: var(--awc-color-primary-600);
    --active-backgound-color: var(--awc-color-neutral-0);

    --completed-color: var(--awc-color-neutral-0);
    --completed-badge-color: var(--awc-color-primary-600);
    --completed-backgound-color: var(--awc-color-primary-600);
  }

  ol,
  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .stepper {
    z-index: 0;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .stepper.vertical {
    flex-direction: column;
  }
`;var C2=Object.defineProperty,L2=Object.getOwnPropertyDescriptor,Ud=(i,t,e,r)=>{for(var a=r>1?void 0:r?L2(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&C2(t,e,a),a},Gv=class extends R{constructor(){super(...arguments),this.vertical=!1}getCompletedIcon(){let t=this.completedIconSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[t,...t.querySelectorAll("[id]")].forEach(e=>e.removeAttribute("id")),t.setAttribute("data-default",""),t.slot="completed-icon",t}handleSlotChange(){[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>t.tagName.toLowerCase()==="awc-stepper-item").forEach((t,e,r)=>{t.container=this,t.step||(t.step=e+1),t.isFirst=e===0,t.isLast=e===r.length-1;let a=t.querySelector('[slot="completed-icon"]');a===null?t.append(this.getCompletedIcon()):a.hasAttribute("data-default")&&a.replaceWith(this.getCompletedIcon())})}render(){return this.updateComplete.then(()=>this.handleSlotChange()),E`<ol class="${Z({stepper:!0,vertical:this.vertical})}" part="base">
        <slot @slotchange=${this.handleSlotChange}></slot>
      </ol>
      <span hidden aria-hidden="true">
        <slot name="completed-icon">
          <awc-icon name="check-lg"></awc-icon>
        </slot>
      </span>`}};Gv.styles=qv;var Oa=Gv;Ud([u({type:Boolean})],Oa.prototype,"vertical",2);Ud([F("slot")],Oa.prototype,"defaultSlot",2);Ud([F('slot[name="completed-icon"]')],Oa.prototype,"completedIconSlot",2);Oa.define("awc-stepper");var Yv=A`
  ${N}

  :host {
    display: block;
    width: 100%;

    --gap: inherit;
    --size: inherit;
    --font-size: inherit;
    --badge-radius: inherit;
    --track-height: inherit;
    --track-gap: inherit;

    --color: inherit;
    --badge-color: inherit;
    --backgound-color: inherit;

    --active-color: inherit;
    --active-badge-color: inherit;
    --active-backgound-color: inherit;

    --completed-color: inherit;
    --completed-badge-color: inherit;
    --completed-backgound-color: inherit;
  }

  .step-item {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    text-align: center;
    gap: var(--gap);
  }

  .step-item.vertical {
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;
  }

  .step-item::after {
    content: '';
    position: absolute;
    height: var(--track-height);
    width: calc(100% - var(--size) - (var(--track-gap) * 2));
    background-color: var(--badge-color);
    top: calc(var(--size) / 2);
    left: calc(50% + (var(--size) / 2) + var(--track-gap));
    z-index: -1;
  }

  .step-item.vertical::after {
    width: var(--track-height);
    height: calc(100% - var(--size) - (var(--track-gap) * 2));
    top: calc(var(--size) + var(--track-gap));
    left: calc(var(--size) / 2);
  }

  .step-item .badge {
    position: relative;
    z-index: 5;
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    width: var(--size);
    height: var(--size);
    border-radius: var(--badge-radius);
    border: solid var(--track-height) var(--badge-color);
    font-size: var(--font-size);
    color: var(--color);
    background-color: var(--backgound-color);
    user-select: none;
  }

  .step-item .badge .badge__step {
    display: inline-flex;
  }

  .step-item.has-completed-icon .badge .badge__completed {
    display: none;
  }

  .step-item.completed.has-completed-icon .badge .badge__completed {
    display: inline-flex;
  }

  .step-item.completed.has-completed-icon .badge .badge__step {
    display: none;
  }

  .step-item.vertical {
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;
  }

  .step-item.completed .badge {
    background-color: var(--completed-backgound-color);
    border-color: var(--completed-badge-color);
    color: var(--completed-color);
  }

  .step-item.completed::after {
    background-color: var(--completed-backgound-color);
  }

  .step-item.active .badge {
    background-color: var(--active-backgound-color);
    border-color: var(--active-badge-color);
    color: var(--active-color);
  }

  .step-item.last::after {
    content: none;
  }
`;var z2=Object.defineProperty,S2=Object.getOwnPropertyDescriptor,al=(i,t,e,r)=>{for(var a=r>1?void 0:r?S2(t,e):t,s=i.length-1,l;s>=0;s--)(l=i[s])&&(a=(r?l(t,e,a):l(a))||a);return r&&a&&z2(t,e,a),a},Kv=class extends R{constructor(){super(...arguments),this.hasSlotController=new Ct(this,"completed-icon","step"),this.container=void 0,this.label=void 0,this.step=void 0,this.completed=!1,this.active=!1,this.isFirst=!1,this.isLast=!1}render(){return E`<li
      part="base"
      aria-label="${this.label}"
      class="${Z({"step-item":!0,completed:this.completed,"has-completed-icon":this.hasSlotController.test("completed-icon"),active:this.active,first:this.isFirst,last:this.isLast,vertical:!!this.container?.vertical})}"
    >
      <span part="badge" class="badge">
        <span part="step" class="badge__step">
          <slot name="step"> ${this.step} </slot>
        </span>
        <span part="completed" class="badge__completed">
          <slot name="completed-icon"></slot>
        </span>
      </span>
      <span part="label" class="label"><slot></slot></span>
    </li> `}};Kv.styles=Yv;var Zr=Kv;al([u({type:String})],Zr.prototype,"label",2);al([u({type:Number,reflect:!0})],Zr.prototype,"step",2);al([u({type:Boolean,reflect:!0})],Zr.prototype,"completed",2);al([u({type:Boolean,reflect:!0})],Zr.prototype,"active",2);Zr.define("awc-stepper-item");Qa("https://cdn.jsdelivr.net/npm/@agence-adeliom/awc@latest/dist/");window.acf_icons=window.acf_icons??[];window.acf_icons.forEach(i=>{oc(i.library,{resolver:t=>{let e=t,r="",a=i?.resolver??"";for(let s in i?.subsets??{}){let l=i.subsets[s].prefix??null;l&&(e=e.replace(`${l}-`,""),t.startsWith(`${l}-`)&&(r=s))}return a=a.replaceAll("{{assetPath}}",window.acf_icon_theme.uri).replaceAll("{{library}}",i.library).replaceAll("{{subset}}",r).replaceAll("{{name}}",e),a},mutator:t=>t.setAttribute("fill","currentColor"),spriteSheet:i?.spritesheet??!1})});})();
/*! Bundled license information:

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/static.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/if-defined.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/style-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/live.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/async-directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/ref.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/unsafe-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/when.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/repeat.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

leaflet/dist/leaflet-src.js:
  (* @preserve
   * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
   * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
   *)

leaflet.locatecontrol/src/L.Control.Locate.js:
  (*!
  Copyright (c) 2016 Dominik Moritz
  
  This file is part of the leaflet locate control. It is licensed under the MIT license.
  You can find the project at: https://github.com/domoritz/leaflet-locatecontrol
  *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=icon-libraries.js.map
