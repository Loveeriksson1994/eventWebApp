/*! For license information please see index.js.LICENSE.txt */
(()=>{var e={967:e=>{"use strict";var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,a){for(var i,u,l=o(e),c=1;c<arguments.length;c++){for(var s in i=Object(arguments[c]))r.call(i,s)&&(l[s]=i[s]);if(t){u=t(i);for(var f=0;f<u.length;f++)n.call(i,u[f])&&(l[u[f]]=i[u[f]])}}return l}},112:(e,t,r)=>{"use strict";var n=r(73);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,a,i){if(i!==n){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return r.PropTypes=r,r}},691:(e,t,r)=>{e.exports=r(112)()},73:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},592:(e,t,r)=>{"use strict";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}var o=r(967),a=r(745);function i(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u=60106,l=60107,c=60108,s=60114,f=60109,p=60110,d=60112,h=60113,y=60120,v=60115,m=60116,g=60121,w=60117,x=60119,b=60129,S=60131;if("function"==typeof Symbol&&Symbol.for){var k=Symbol.for;u=k("react.portal"),l=k("react.fragment"),c=k("react.strict_mode"),s=k("react.profiler"),f=k("react.provider"),p=k("react.context"),d=k("react.forward_ref"),h=k("react.suspense"),y=k("react.suspense_list"),v=k("react.memo"),m=k("react.lazy"),g=k("react.block"),w=k("react.fundamental"),x=k("react.scope"),b=k("react.debug_trace_mode"),S=k("react.legacy_hidden")}function E(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case l:return"Fragment";case u:return"Portal";case s:return"Profiler";case c:return"StrictMode";case h:return"Suspense";case y:return"SuspenseList"}if("object"===n(e))switch(e.$$typeof){case p:return(e.displayName||"Context")+".Consumer";case f:return(e._context.displayName||"Context")+".Provider";case d:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(""!==t?"ForwardRef("+t+")":"ForwardRef");case v:return E(e.type);case g:return E(e._render);case m:t=e._payload,e=e._init;try{return E(e(t))}catch(e){}}return null}var _=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,C={};function O(e,t){for(var r=0|e._threadCount;r<=t;r++)e[r]=e._currentValue2,e._threadCount=r+1}for(var D=new Uint16Array(16),F=0;15>F;F++)D[F]=F+1;D[15]=0;var I=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,P=Object.prototype.hasOwnProperty,M={},N={};function R(e){return!!P.call(N,e)||!P.call(M,e)&&(I.test(e)?N[e]=!0:(M[e]=!0,!1))}function j(e,t,r,n,o,a,i){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=i}var T={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){T[e]=new j(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];T[t]=new j(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){T[e]=new j(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){T[e]=new j(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){T[e]=new j(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){T[e]=new j(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){T[e]=new j(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){T[e]=new j(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){T[e]=new j(e,5,!1,e.toLowerCase(),null,!1,!1)}));var A=/[\-:]([a-z])/g;function L(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(A,L);T[t]=new j(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(A,L);T[t]=new j(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(A,L);T[t]=new j(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){T[e]=new j(e,1,!1,e.toLowerCase(),null,!1,!1)})),T.xlinkHref=new j("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){T[e]=new j(e,1,!1,e.toLowerCase(),null,!0,!0)}));var $=/["'&<>]/;function U(e){if("boolean"==typeof e||"number"==typeof e)return""+e;e=""+e;var t=$.exec(e);if(t){var r,n="",o=0;for(r=t.index;r<e.length;r++){switch(e.charCodeAt(r)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#x27;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}o!==r&&(n+=e.substring(o,r)),o=r+1,n+=t}e=o!==r?n+e.substring(o,r):n}return e}function q(e,t){var r,o=T.hasOwnProperty(e)?T[e]:null;return(r="style"!==e)&&(r=null!==o?0===o.type:2<e.length&&("o"===e[0]||"O"===e[0])&&("n"===e[1]||"N"===e[1])),r||function(e,t,r,o){if(null==t||function(e,t,r,o){if(null!==r&&0===r.type)return!1;switch(n(t)){case"function":case"symbol":return!0;case"boolean":return!o&&(null!==r?!r.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,r,o))return!0;if(o)return!1;if(null!==r)switch(r.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(e,t,o,!1)?"":null!==o?(e=o.attributeName,3===(r=o.type)||4===r&&!0===t?e+'=""':(o.sanitizeURL&&(t=""+t),e+'="'+U(t)+'"')):R(e)?e+'="'+U(t)+'"':""}var z="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},V=null,W=null,H=null,B=!1,Y=!1,Z=null,X=0;function G(){if(null===V)throw Error(i(321));return V}function J(){if(0<X)throw Error(i(312));return{memoizedState:null,queue:null,next:null}}function Q(){return null===H?null===W?(B=!1,W=H=J()):(B=!0,H=W):null===H.next?(B=!1,H=H.next=J()):(B=!0,H=H.next),H}function K(e,t,r,n){for(;Y;)Y=!1,X+=1,H=null,r=e(t,n);return ee(),r}function ee(){V=null,Y=!1,W=null,X=0,H=Z=null}function te(e,t){return"function"==typeof t?t(e):t}function re(e,t,r){if(V=G(),H=Q(),B){var n=H.queue;if(t=n.dispatch,null!==Z&&void 0!==(r=Z.get(n))){Z.delete(n),n=H.memoizedState;do{n=e(n,r.action),r=r.next}while(null!==r);return H.memoizedState=n,[n,t]}return[H.memoizedState,t]}return e=e===te?"function"==typeof t?t():t:void 0!==r?r(t):t,H.memoizedState=e,e=(e=H.queue={last:null,dispatch:null}).dispatch=oe.bind(null,V,e),[H.memoizedState,e]}function ne(e,t){if(V=G(),t=void 0===t?null:t,null!==(H=Q())){var r=H.memoizedState;if(null!==r&&null!==t){var n=r[1];e:if(null===n)n=!1;else{for(var o=0;o<n.length&&o<t.length;o++)if(!z(t[o],n[o])){n=!1;break e}n=!0}if(n)return r[0]}}return e=e(),H.memoizedState=[e,t],e}function oe(e,t,r){if(!(25>X))throw Error(i(301));if(e===V)if(Y=!0,e={action:r,next:null},null===Z&&(Z=new Map),void 0===(r=Z.get(t)))Z.set(t,e);else{for(t=r;null!==t.next;)t=t.next;t.next=e}}function ae(){}var ie=null,ue={readContext:function(e){var t=ie.threadID;return O(e,t),e[t]},useContext:function(e){G();var t=ie.threadID;return O(e,t),e[t]},useMemo:ne,useReducer:re,useRef:function(e){V=G();var t=(H=Q()).memoizedState;return null===t?(e={current:e},H.memoizedState=e):t},useState:function(e){return re(te,e)},useLayoutEffect:function(){},useCallback:function(e,t){return ne((function(){return e}),t)},useImperativeHandle:ae,useEffect:ae,useDebugValue:ae,useDeferredValue:function(e){return G(),e},useTransition:function(){return G(),[function(e){e()},!1]},useOpaqueIdentifier:function(){return(ie.identifierPrefix||"")+"R:"+(ie.uniqueID++).toString(36)},useMutableSource:function(e,t){return G(),t(e._source)}},le="http://www.w3.org/1999/xhtml";function ce(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}var se={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},fe=o({menuitem:!0},se),pe={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},de=["Webkit","ms","Moz","O"];Object.keys(pe).forEach((function(e){de.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pe[t]=pe[e]}))}));var he=/([A-Z])/g,ye=/^ms-/,ve=a.Children.toArray,me=_.ReactCurrentDispatcher,ge={listing:!0,pre:!0,textarea:!0},we=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,xe={},be={},Se=Object.prototype.hasOwnProperty,ke={children:null,dangerouslySetInnerHTML:null,suppressContentEditableWarning:null,suppressHydrationWarning:null};function Ee(e,t){if(void 0===e)throw Error(i(152,E(t)||"Component"))}var _e=function(){function e(e,t,r){a.isValidElement(e)?e.type!==l?e=[e]:(e=e.props.children,e=a.isValidElement(e)?[e]:ve(e)):e=ve(e),e={type:null,domNamespace:le,children:e,childIndex:0,context:C,footer:""};var n=D[0];if(0===n){var o=D,u=2*(n=o.length);if(!(65536>=u))throw Error(i(304));var c=new Uint16Array(u);for(c.set(o),(D=c)[0]=n+1,o=n;o<u-1;o++)D[o]=o+1;D[u-1]=0}else D[0]=D[n];this.threadID=n,this.stack=[e],this.exhausted=!1,this.currentSelectValue=null,this.previousWasTextNode=!1,this.makeStaticMarkup=t,this.suspenseDepth=0,this.contextIndex=-1,this.contextStack=[],this.contextValueStack=[],this.uniqueID=0,this.identifierPrefix=r&&r.identifierPrefix||""}var t=e.prototype;return t.destroy=function(){if(!this.exhausted){this.exhausted=!0,this.clearProviders();var e=this.threadID;D[e]=D[0],D[0]=e}},t.pushProvider=function(e){var t=++this.contextIndex,r=e.type._context,n=this.threadID;O(r,n);var o=r[n];this.contextStack[t]=r,this.contextValueStack[t]=o,r[n]=e.props.value},t.popProvider=function(){var e=this.contextIndex,t=this.contextStack[e],r=this.contextValueStack[e];this.contextStack[e]=null,this.contextValueStack[e]=null,this.contextIndex--,t[this.threadID]=r},t.clearProviders=function(){for(var e=this.contextIndex;0<=e;e--)this.contextStack[e][this.threadID]=this.contextValueStack[e]},t.read=function(e){if(this.exhausted)return null;var t=ie;ie=this;var r=me.current;me.current=ue;try{for(var n=[""],o=!1;n[0].length<e;){if(0===this.stack.length){this.exhausted=!0;var a=this.threadID;D[a]=D[0],D[0]=a;break}var u=this.stack[this.stack.length-1];if(o||u.childIndex>=u.children.length){var l=u.footer;if(""!==l&&(this.previousWasTextNode=!1),this.stack.pop(),"select"===u.type)this.currentSelectValue=null;else if(null!=u.type&&null!=u.type.type&&u.type.type.$$typeof===f)this.popProvider(u.type);else if(u.type===h){this.suspenseDepth--;var c=n.pop();if(o){o=!1;var s=u.fallbackFrame;if(!s)throw Error(i(303));this.stack.push(s),n[this.suspenseDepth]+="\x3c!--$!--\x3e";continue}n[this.suspenseDepth]+=c}n[this.suspenseDepth]+=l}else{var p=u.children[u.childIndex++],d="";try{d+=this.render(p,u.context,u.domNamespace)}catch(e){if(null!=e&&"function"==typeof e.then)throw Error(i(294));throw e}n.length<=this.suspenseDepth&&n.push(""),n[this.suspenseDepth]+=d}}return n[0]}finally{me.current=r,ie=t,ee()}},t.render=function(e,t,r){if("string"==typeof e||"number"==typeof e)return""==(r=""+e)?"":this.makeStaticMarkup?U(r):this.previousWasTextNode?"\x3c!-- --\x3e"+U(r):(this.previousWasTextNode=!0,U(r));if(e=(t=function(e,t,r){function u(a,u){var l=u.prototype&&u.prototype.isReactComponent,c=function(e,t,r,o){if(o&&"object"===n(o=e.contextType)&&null!==o)return O(o,r),o[r];if(e=e.contextTypes){for(var a in r={},e)r[a]=t[a];t=r}else t=C;return t}(u,t,r,l),s=[],f=!1,p={isMounted:function(){return!1},enqueueForceUpdate:function(){if(null===s)return null},enqueueReplaceState:function(e,t){f=!0,s=[t]},enqueueSetState:function(e,t){if(null===s)return null;s.push(t)}};if(l){if(l=new u(a.props,c,p),"function"==typeof u.getDerivedStateFromProps){var d=u.getDerivedStateFromProps.call(null,a.props,l.state);null!=d&&(l.state=o({},l.state,d))}}else if(V={},l=u(a.props,c,p),null==(l=K(u,a.props,l,c))||null==l.render)return void Ee(e=l,u);if(l.props=a.props,l.context=c,l.updater=p,void 0===(p=l.state)&&(l.state=p=null),"function"==typeof l.UNSAFE_componentWillMount||"function"==typeof l.componentWillMount)if("function"==typeof l.componentWillMount&&"function"!=typeof u.getDerivedStateFromProps&&l.componentWillMount(),"function"==typeof l.UNSAFE_componentWillMount&&"function"!=typeof u.getDerivedStateFromProps&&l.UNSAFE_componentWillMount(),s.length){p=s;var h=f;if(s=null,f=!1,h&&1===p.length)l.state=p[0];else{d=h?p[0]:l.state;var y=!0;for(h=h?1:0;h<p.length;h++){var v=p[h];null!=(v="function"==typeof v?v.call(l,d,a.props,c):v)&&(y?(y=!1,d=o({},d,v)):o(d,v))}l.state=d}}else s=null;if(Ee(e=l.render(),u),"function"==typeof l.getChildContext&&"object"===n(a=u.childContextTypes)){var m=l.getChildContext();for(var g in m)if(!(g in a))throw Error(i(108,E(u)||"Unknown",g))}m&&(t=o({},t,m))}for(;a.isValidElement(e);){var l=e,c=l.type;if("function"!=typeof c)break;u(l,c)}return{child:e,context:t}}(e,t,this.threadID)).child,t=t.context,null===e||!1===e)return"";if(!a.isValidElement(e)){if(null!=e&&null!=e.$$typeof){if((r=e.$$typeof)===u)throw Error(i(257));throw Error(i(258,r.toString()))}return e=ve(e),this.stack.push({type:null,domNamespace:r,children:e,childIndex:0,context:t,footer:""}),""}var g=e.type;if("string"==typeof g)return this.renderDOM(e,t,r);switch(g){case S:case b:case c:case s:case y:case l:return e=ve(e.props.children),this.stack.push({type:null,domNamespace:r,children:e,childIndex:0,context:t,footer:""}),"";case h:throw Error(i(294));case x:throw Error(i(343))}if("object"===n(g)&&null!==g)switch(g.$$typeof){case d:V={};var k=g.render(e.props,e.ref);return k=K(g.render,e.props,k,e.ref),k=ve(k),this.stack.push({type:null,domNamespace:r,children:k,childIndex:0,context:t,footer:""}),"";case v:return e=[a.createElement(g.type,o({ref:e.ref},e.props))],this.stack.push({type:null,domNamespace:r,children:e,childIndex:0,context:t,footer:""}),"";case f:return r={type:e,domNamespace:r,children:g=ve(e.props.children),childIndex:0,context:t,footer:""},this.pushProvider(e),this.stack.push(r),"";case p:g=e.type,k=e.props;var _=this.threadID;return O(g,_),g=ve(k.children(g[_])),this.stack.push({type:e,domNamespace:r,children:g,childIndex:0,context:t,footer:""}),"";case w:throw Error(i(338));case m:return g=(k=(g=e.type)._init)(g._payload),e=[a.createElement(g,o({ref:e.ref},e.props))],this.stack.push({type:null,domNamespace:r,children:e,childIndex:0,context:t,footer:""}),""}throw Error(i(130,null==g?g:n(g),""))},t.renderDOM=function(e,t,r){var u=e.type.toLowerCase();if(r===le&&ce(u),!xe.hasOwnProperty(u)){if(!we.test(u))throw Error(i(65,u));xe[u]=!0}var l=e.props;if("input"===u)l=o({type:void 0},l,{defaultChecked:void 0,defaultValue:void 0,value:null!=l.value?l.value:l.defaultValue,checked:null!=l.checked?l.checked:l.defaultChecked});else if("textarea"===u){var c=l.value;if(null==c){c=l.defaultValue;var s=l.children;if(null!=s){if(null!=c)throw Error(i(92));if(Array.isArray(s)){if(!(1>=s.length))throw Error(i(93));s=s[0]}c=""+s}null==c&&(c="")}l=o({},l,{value:void 0,children:""+c})}else if("select"===u)this.currentSelectValue=null!=l.value?l.value:l.defaultValue,l=o({},l,{value:void 0});else if("option"===u){s=this.currentSelectValue;var f=function(e){if(null==e)return e;var t="";return a.Children.forEach(e,(function(e){null!=e&&(t+=e)})),t}(l.children);if(null!=s){var p=null!=l.value?l.value+"":f;if(c=!1,Array.isArray(s)){for(var d=0;d<s.length;d++)if(""+s[d]===p){c=!0;break}}else c=""+s===p;l=o({selected:void 0,children:void 0},l,{selected:c,children:f})}}if(c=l){if(fe[u]&&(null!=c.children||null!=c.dangerouslySetInnerHTML))throw Error(i(137,u));if(null!=c.dangerouslySetInnerHTML){if(null!=c.children)throw Error(i(60));if("object"!==n(c.dangerouslySetInnerHTML)||!("__html"in c.dangerouslySetInnerHTML))throw Error(i(61))}if(null!=c.style&&"object"!==n(c.style))throw Error(i(62))}c=l,s=this.makeStaticMarkup,f=1===this.stack.length,p="<"+e.type;e:if(-1===u.indexOf("-"))d="string"==typeof c.is;else switch(u){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":d=!1;break e;default:d=!0}for(S in c)if(Se.call(c,S)){var h=c[S];if(null!=h){if("style"===S){var y=void 0,v="",m="";for(y in h)if(h.hasOwnProperty(y)){var g=0===y.indexOf("--"),w=h[y];if(null!=w){if(g)var x=y;else if(x=y,be.hasOwnProperty(x))x=be[x];else{var b=x.replace(he,"-$1").toLowerCase().replace(ye,"-ms-");x=be[x]=b}v+=m+x+":",m=y,v+=g=null==w||"boolean"==typeof w||""===w?"":g||"number"!=typeof w||0===w||pe.hasOwnProperty(m)&&pe[m]?(""+w).trim():w+"px",m=";"}}h=v||null}y=null,d?ke.hasOwnProperty(S)||(y=R(y=S)&&null!=h?y+'="'+U(h)+'"':""):y=q(S,h),y&&(p+=" "+y)}}s||f&&(p+=' data-reactroot=""');var S=p;c="",se.hasOwnProperty(u)?S+="/>":(S+=">",c="</"+e.type+">");e:{if(null!=(s=l.dangerouslySetInnerHTML)){if(null!=s.__html){s=s.__html;break e}}else if("string"==typeof(s=l.children)||"number"==typeof s){s=U(s);break e}s=null}return null!=s?(l=[],ge.hasOwnProperty(u)&&"\n"===s.charAt(0)&&(S+="\n"),S+=s):l=ve(l.children),e=e.type,r=null==r||"http://www.w3.org/1999/xhtml"===r?ce(e):"http://www.w3.org/2000/svg"===r&&"foreignObject"===e?"http://www.w3.org/1999/xhtml":r,this.stack.push({domNamespace:r,type:u,children:l,childIndex:0,context:t,footer:c}),this.previousWasTextNode=!1,S},e}();t.renderToString=function(e,t){e=new _e(e,!1,t);try{return e.read(1/0)}finally{e.destroy()}}},929:(e,t,r)=>{"use strict";e.exports=r(592)},165:(e,t,r)=>{"use strict";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}var o=r(967),a=60103,i=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var u=60109,l=60110,c=60112;t.Suspense=60113;var s=60115,f=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;a=p("react.element"),i=p("react.portal"),t.Fragment=p("react.fragment"),t.StrictMode=p("react.strict_mode"),t.Profiler=p("react.profiler"),u=p("react.provider"),l=p("react.context"),c=p("react.forward_ref"),t.Suspense=p("react.suspense"),s=p("react.memo"),f=p("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function m(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||y}function g(){}function w(e,t,r){this.props=e,this.context=t,this.refs=v,this.updater=r||y}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!==n(e)&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=m.prototype;var x=w.prototype=new g;x.constructor=w,o(x,m.prototype),x.isPureReactComponent=!0;var b={current:null},S=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,r){var n,o={},i=null,u=null;if(null!=t)for(n in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(i=""+t.key),t)S.call(t,n)&&!k.hasOwnProperty(n)&&(o[n]=t[n]);var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){for(var c=Array(l),s=0;s<l;s++)c[s]=arguments[s+2];o.children=c}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===o[n]&&(o[n]=l[n]);return{$$typeof:a,type:e,key:i,ref:u,props:o,_owner:b.current}}function _(e){return"object"===n(e)&&null!==e&&e.$$typeof===a}var C=/\/+/g;function O(e,t){return"object"===n(e)&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function D(e,t,r,o,u){var l=n(e);"undefined"!==l&&"boolean"!==l||(e=null);var c=!1;if(null===e)c=!0;else switch(l){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case a:case i:c=!0}}if(c)return u=u(c=e),e=""===o?"."+O(c,0):o,Array.isArray(u)?(r="",null!=e&&(r=e.replace(C,"$&/")+"/"),D(u,t,r,"",(function(e){return e}))):null!=u&&(_(u)&&(u=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(u,r+(!u.key||c&&c.key===u.key?"":(""+u.key).replace(C,"$&/")+"/")+e)),t.push(u)),1;if(c=0,o=""===o?".":o+":",Array.isArray(e))for(var s=0;s<e.length;s++){var f=o+O(l=e[s],s);c+=D(l,t,r,f,u)}else if(f=function(e){return null===e||"object"!==n(e)?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),s=0;!(l=e.next()).done;)c+=D(l=l.value,t,r,f=o+O(l,s++),u);else if("object"===l)throw t=""+e,Error(h(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function F(e,t,r){if(null==e)return e;var n=[],o=0;return D(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function I(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function M(){var e=P.current;if(null===e)throw Error(h(321));return e}var N={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:b,IsSomeRendererActing:{current:!1},assign:o};t.Children={map:F,forEach:function(e,t,r){F(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return F(e,(function(){t++})),t},toArray:function(e){return F(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error(h(143));return e}},t.Component=m,t.PureComponent=w,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N,t.cloneElement=function(e,t,r){if(null==e)throw Error(h(267,e));var n=o({},e.props),i=e.key,u=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,l=b.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(s in t)S.call(t,s)&&!k.hasOwnProperty(s)&&(n[s]=void 0===t[s]&&void 0!==c?c[s]:t[s])}var s=arguments.length-2;if(1===s)n.children=r;else if(1<s){c=Array(s);for(var f=0;f<s;f++)c[f]=arguments[f+2];n.children=c}return{$$typeof:a,type:e.type,key:i,ref:u,props:n,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:l,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:I}},t.memo=function(e,t){return{$$typeof:s,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return M().useCallback(e,t)},t.useContext=function(e,t){return M().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return M().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return M().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return M().useLayoutEffect(e,t)},t.useMemo=function(e,t){return M().useMemo(e,t)},t.useReducer=function(e,t,r){return M().useReducer(e,t,r)},t.useRef=function(e){return M().useRef(e)},t.useState=function(e){return M().useState(e)},t.version="17.0.2"},745:(e,t,r)=>{"use strict";e.exports=r(165)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=r(745),t=r(929);const n=require("router");var o=r.n(n),a=r(691),i=r.n(a);const u=require("Utils");var l=r.n(u);const c=require("ImageRenderer");var s=r.n(c);const f=require("ResourceLocatorUtil");var p=r.n(f),d=function(t){var r,n=t.event,o=p().getNodeByIdentifier(n.picture),a=l().getImageScaler(308,188);s().setImageScaler(a),s().clearSourceSetMode(),s().forceUseImageScaler(),s().setImage(o),r=n.startDate===n.endDate?n.startDate:n.startDate+" - "+n.endDate;var i=n.category,u="",c=0,f=i.length-1;return i.map((function(e){return c===f?u+=e:(c++,u+=e+" • ")})),e.createElement("div",{className:"_v1Xh0QzV9vwXV4d6e_8"},e.createElement("a",{href:n.url},e.createElement("div",{dangerouslySetInnerHTML:{__html:s().render()}}),e.createElement("div",{className:"MzSCYyLDtnCrBjr2h157"},e.createElement("time",null,r)),e.createElement("div",{className:"Ot4BPf47a7yz4jqivYDc"},n.title),e.createElement("div",{className:"TSvy3wXxt5zpbF65yYMR"},u)))};d.propTypes={event:i().any};const h=d;var y=function(t){var r=t.list,n=n();return e.createElement("div",{className:"EgW9jxJuRHeN0FuUhvA4"},r.map((function(t){return e.createElement(h,{event:t})})))};y.propTypes={list:i().any};const v=y,m=require("LogUtil");var g=r.n(m);App.PropTypes={categoryList:i().any};var w=function(t){var r,n=t.list,o=o();return e.createElement("div",null,e.createElement(v,{list:n}),e.createElement("button",{onClick:(r=[],n.forEach((function(e){"Utställning"===e.category&&r.push(e)})),void(n=r))}))};w.PropTypes={list:i().any};const x=w,b=require("PortletContextUtil");var S=r.n(b);const k=require("NodeTreeUtil");var E=r.n(k);const _=require("NodeIteratorUtil");var C=r.n(_);const O=require("PropertyUtil");var D=r.n(O);const F=require("DateUtil");var I=r.n(F);const P=require("Properties");var M=r.n(P);function N(e){return D().getString(e,"picture")}function R(e){var t=D().getCalendar(e,"startDate");return I().getCalendarAsString("d MMM",t)}function j(e){var t=D().getCalendar(e,"endDate");return I().getCalendarAsString("d MMM",t)}function T(e){var t=D().getStrings(e,"category"),r=[];return t.forEach((function(e){r.push(e)})),r}function A(e,t){return new Date(e.startDateForSort).valueOf()-new Date(t.startDateForSort).valueOf()}var L=[];!function(e){var t=S().getCurrentPage(),r=E().getNode(t,"../Evenemang").getNodes();C().findFirst(r,null),g().info(r),r.forEach((function(t){!function(e,t){var r=D().getCalendar(e,"startDate"),n=D().getCalendar(e,"endDate");if(function(e){var t=D().getCalendar(e,"endDate"),r=new Date,n=I().getDateAsISO8601String(r).split("T")[0];return I().getCalendarAsString("yyyy-MM-dd",t)>=n}(e)){var o={startDateForSort:I().getCalendarAsString("yyyy-MM-dd",r),endDateForSort:I().getCalendarAsString("yyyy-MM-dd",n),startDate:R(e),endDate:j(e),title:D().getString(e,"SV.Title"),category:T(e),picture:N(e),url:M().get(e,"URL")};t.push(o)}g().info(e)}(t,e)})),e.sort(A)}(L),o().get("/",(function(r,n){n.agnosticRender((0,t.renderToString)(e.createElement(x,{list:L})),{list:L})}))})()})();