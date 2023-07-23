"use strict";(self.webpackChunkfrotend=self.webpackChunkfrotend||[]).push([[478],{70478:function(e,t,s){s.d(t,{Z:function(){return G}});var n=s(63366),a=s(87462),r=s(72791),c=s(50931);function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.baseClasses,s=e.newClasses;e.Component;if(!s)return t;var n=(0,a.Z)({},t);return Object.keys(s).forEach((function(e){s[e]&&(n[e]="".concat(t[e]," ").concat(s[e]))})),n}var i={set:function(e,t,s,n){var a=e.get(t);a||(a=new Map,e.set(t,a)),a.set(s,n)},get:function(e,t,s){var n=e.get(t);return n?n.get(s):void 0},delete:function(e,t,s){e.get(t).delete(s)}},l=s(29598),u=s(20919),f=["checked","disabled","error","focused","focusVisible","required","expanded","selected"];var h=s(93141),v=s(96625),d=s(72190),m=s(87882),y=s(25068),p=s(67430),C=s(21264);s(80184);var S=(0,c.Ue)({plugins:[(0,h.Z)(),(0,v.Z)(),(0,d.Z)(),(0,m.Z)(),(0,y.Z)(),"undefined"===typeof window?null:(0,p.Z)(),(0,C.Z)()]}),g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.disableGlobal,s=void 0!==t&&t,n=e.productionPrefix,a=void 0===n?"jss":n,r=e.seed,c=void 0===r?"":r,o=""===c?"":"".concat(c,"-"),i=0,l=function(){return i+=1};return function(e,t){var n=t.options.name;if(n&&0===n.indexOf("Mui")&&!t.options.link&&!s){if(-1!==f.indexOf(e.key))return"Mui-".concat(e.key);var r="".concat(o).concat(n,"-").concat(e.key);return t.options.theme[u.Z]&&""===c?"".concat(r,"-").concat(l()):r}return"".concat(o).concat(a).concat(l())}}(),Z={disableGeneration:!1,generateClassName:g,jss:S,sheetsCache:null,sheetsManager:new Map,sheetsRegistry:null},b=r.createContext(Z);var k=-1e9;var O=s(82466),w=s(27312),x=["variant"];function M(e){return 0===e.length}function j(e){var t="function"===typeof e;return{create:function(s,r){var c;try{c=t?e(s):e}catch(u){throw u}if(!r||!s.components||!s.components[r]||!s.components[r].styleOverrides&&!s.components[r].variants)return c;var o=s.components[r].styleOverrides||{},i=s.components[r].variants||[],l=(0,a.Z)({},c);return Object.keys(o).forEach((function(e){l[e]=(0,O.Z)(l[e]||{},o[e])})),i.forEach((function(e){var t=function(e){var t=e.variant,s=(0,n.Z)(e,x),a=t||"";return Object.keys(s).sort().forEach((function(t){a+="color"===t?M(a)?e[t]:(0,w.Z)(e[t]):"".concat(M(a)?t:(0,w.Z)(t)).concat((0,w.Z)(e[t].toString()))})),a}(e.props);l[t]=(0,O.Z)(l[t]||{},e.style)})),l},options:{}}}var P={},E=["name","classNamePrefix","Component","defaultTheme"];function G(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=t.name,u=t.classNamePrefix,f=t.Component,h=t.defaultTheme,v=void 0===h?P:h,d=(0,n.Z)(t,E),m=j(e),y=s||u||"makeStyles";m.options={index:k+=1,name:s,meta:y,classNamePrefix:y};return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,l.Z)()||v,n=(0,a.Z)({},r.useContext(b),d),u=r.useRef(),h=r.useRef();!function(e,t){var s,n=r.useRef([]),a=r.useMemo((function(){return{}}),t);n.current!==a&&(n.current=a,s=e()),r.useEffect((function(){return function(){s&&s()}}),[a])}((function(){var r={name:s,state:{},stylesCreator:m,stylesOptions:n,theme:t};return function(e,t){var s=e.state,n=e.theme,r=e.stylesOptions,l=e.stylesCreator,u=e.name;if(!r.disableGeneration){var f=i.get(r.sheetsManager,l,n);f||(f={refs:0,staticSheet:null,dynamicStyles:null},i.set(r.sheetsManager,l,n,f));var h=(0,a.Z)({},l.options,r,{theme:n,flip:"boolean"===typeof r.flip?r.flip:"rtl"===n.direction});h.generateId=h.serverGenerateClassName||h.generateClassName;var v=r.sheetsRegistry;if(0===f.refs){var d;r.sheetsCache&&(d=i.get(r.sheetsCache,l,n));var m=l.create(n,u);d||((d=r.jss.createStyleSheet(m,(0,a.Z)({link:!1},h))).attach(),r.sheetsCache&&i.set(r.sheetsCache,l,n,d)),v&&v.add(d),f.staticSheet=d,f.dynamicStyles=(0,c._$)(m)}if(f.dynamicStyles){var y=r.jss.createStyleSheet(f.dynamicStyles,(0,a.Z)({link:!0},h));y.update(t),y.attach(),s.dynamicSheet=y,s.classes=o({baseClasses:f.staticSheet.classes,newClasses:y.classes}),v&&v.add(y)}else s.classes=f.staticSheet.classes;f.refs+=1}}(r,e),h.current=!1,u.current=r,function(){!function(e){var t=e.state,s=e.theme,n=e.stylesOptions,a=e.stylesCreator;if(!n.disableGeneration){var r=i.get(n.sheetsManager,a,s);r.refs-=1;var c=n.sheetsRegistry;0===r.refs&&(i.delete(n.sheetsManager,a,s),n.jss.removeStyleSheet(r.staticSheet),c&&c.remove(r.staticSheet)),t.dynamicSheet&&(n.jss.removeStyleSheet(t.dynamicSheet),c&&c.remove(t.dynamicSheet))}}(r)}}),[t,m]),r.useEffect((function(){h.current&&function(e,t){var s=e.state;s.dynamicSheet&&s.dynamicSheet.update(t)}(u.current,e),h.current=!0}));var y=function(e,t,s){var n=e.state;if(e.stylesOptions.disableGeneration)return t||{};n.cacheClasses||(n.cacheClasses={value:null,lastProp:null,lastJSS:{}});var a=!1;return n.classes!==n.cacheClasses.lastJSS&&(n.cacheClasses.lastJSS=n.classes,a=!0),t!==n.cacheClasses.lastProp&&(n.cacheClasses.lastProp=t,a=!0),a&&(n.cacheClasses.value=o({baseClasses:n.cacheClasses.lastJSS,newClasses:t,Component:s})),n.cacheClasses.value}(u.current,e.classes,f);return y}}}}]);
//# sourceMappingURL=478.38e6f798.chunk.js.map