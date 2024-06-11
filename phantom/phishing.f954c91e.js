(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);
function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},o=n.parcelRequire1d24;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},n.parcelRequire1d24=o);var a=o("lDSNw");o("1KK14");var l=o("4yY1D"),s=o("dU2RF"),c=o("cZIbv"),u=(o("lDSNw"),o("aJuCi")),d={};t(d,"BlocklistOrigin",(function(){return I}),(function(e){return I=e}));var m=o("lMzyG"),f=o("1uUV4"),g=(o("lDSNw"),c=o("cZIbv"),o("cxfOD")),b=o("hvlNY"),h=o("aanFI"),p={};t(p,"PTrans",(function(){return w}),(function(e){return w=e}));m=o("lMzyG"),a=o("lDSNw");var y=o("kBpKb"),v=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};const w=e(a).memo((t=>{const{children:n,i18nKey:r}=t,i=v(t,["children","i18nKey"]),{t:o}=(0,m.useTranslation)(),l=(0,a.useMemo)((()=>(r?`${o(r,Object.assign(Object.assign({},i),i.values))}`:"").replace(/<\/?[^>]+(>|$)/g,"")),[r,i,o]);return e(a).createElement(y.ErrorBoundary,{fallback:l},e(a).createElement(m.Trans,Object.assign({i18nKey:r},i),n))}));var O=o("kn91D"),x=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{s(r.next(e))}catch(e){o(e)}}function l(e){try{s(r.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,l)}s((r=r.apply(e,t||[])).next())}))};const E="#ca3214",S=c.default.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #fffdf8;
  padding: clamp(24px, 16vh, 256px) 24px;
  box-sizing: border-box;
`,T=c.default.div`
  margin-bottom: 24px;
  padding-bottom: 8vh;
`,k=c.default.div`
  max-width: 100ch;
  margin: auto;

  * {
    text-align: left;
  }
`,U=c.default.a`
  text-decoration: underline;
  color: ${E};
`,D=new(0,b.LocalStorage),I=({origin:t,subdomain:n})=>{const{t:r}=(0,m.useTranslation)(),i=t?(0,g.removeSubdomainFromDomain)(t):"",o=new URL(null!=t?t:"").hostname,l="true"===n?o:i;return e(a).createElement(S,null,e(a).createElement(k,null,e(a).createElement(T,null,e(a).createElement(h.IconPhantomWordmark,{width:128,fill:"#bbb9b6"})),e(a).createElement(O.Text,{size:30,color:E,weight:"600"},r("blocklistOriginDomainIsBlocked",{domainName:l||r("blocklistOriginThisDomain")})),e(a).createElement(O.Text,{color:E},r("blocklistOriginSiteIsMalicious")),e(a).createElement(O.Text,{color:E},e(a).createElement(p.PTrans,{i18nKey:"blocklistOriginCommunityDatabaseInterpolated"},"This site has been flagged as part of a",e(a).createElement(U,{href:g.PHANTOM_BLOCKLIST_GITHUB_URL,rel:"noopener",target:"_blank"},"community-maintained database"),"of known phishing websites and scams. If you believe the site has been flagged in error,",e(a).createElement(U,{href:g.PHANTOM_BLOCKLIST_GITHUB_URL,rel:"noopener",target:"_blank"},"please file an issue"),".")),l?e(a).createElement(O.Text,{color:E,onClick:()=>x(void 0,void 0,void 0,(function*(){if("true"===n){const e=yield D.get(f.StorageKeys.UserWhitelistSubdomains);let t=JSON.parse(`${e}`);t?t.push(o):t=[o],t=[...new Set(t)],D.set(f.StorageKeys.UserWhitelistSubdomains,JSON.stringify(t))}else{const e=yield D.get(f.StorageKeys.UserWhitelistedOrigins);let t=JSON.parse(`${e}`);t?t.push(i):t=[i],t=[...new Set(t)],D.set(f.StorageKeys.UserWhitelistedOrigins,JSON.stringify(t))}window.location.href=t})),hoverUnderline:!0},r("blocklistOriginIgnoreWarning",{domainName:t})):e(a).createElement(e(a).Fragment,null)))};y=o("kBpKb");const L=()=>{let e;try{e=new URLSearchParams(window.location.search).get("origin")||"",new URL(e)}catch(t){e=""}return e},N=()=>new URLSearchParams(window.location.search).get("subdomain")||"";var K=o("a8kcR"),P=o("h5kyv"),R=o("d1qx3"),_=o("8DCD7"),B=o("bLLpR");l.fileLogger.init({provider:B.ClientFileLoggerProvider}),l.telemetry.init({appVersion:(0,R.getManifestVersion)()}),l.telemetry.setUser({id:P.analytics.getDeviceId()}),(0,_.initializeFeatureFlags)();const M=document.getElementById("root");(0,s.createRoot)(M).render(e(a).createElement(c.ThemeProvider,{theme:K.theme},e(a).createElement((()=>{const t=(0,a.useMemo)(L,[]),n=(0,a.useMemo)(N,[]);return e(a).createElement(u.MemoryRouter,{future:{v7_startTransition:!0}},e(a).createElement(y.ErrorBoundaryWithDefaultFallback,null,e(a).createElement(d.BlocklistOrigin,{origin:t,subdomain:n})))}),null)));
//# sourceMappingURL=phishing.f954c91e.js.map
define=__define;})(window.define);