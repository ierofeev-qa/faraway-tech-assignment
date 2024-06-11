(function(define){var __define;"function"==typeof define&&define.amd&&(__define=define,define=null);
!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t=e.parcelRequire1d24;t.register("CZ2QE",(function(e,n){"use strict";var r=e.exports&&e.exports.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=e.exports&&e.exports.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)};Object.defineProperty(e.exports,"__esModule",{value:!0}),o(t("6fgdF"),e.exports),o(t("iKE7a"),e.exports),o(t("c7XOH"),e.exports),o(t("emT4h"),e.exports),o(t("XZdu2"),e.exports),o(t("3s2q3"),e.exports),o(t("8QRtg"),e.exports),o(t("jGlTf"),e.exports)})),t.register("6fgdF",(function(e,n){var r=t("8tcqI").Buffer,o=e.exports&&e.exports.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((r=r.apply(e,t||[])).next())}))};Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.splitDomainTld=e.exports.getParsedAllDomainsNftAccountsByOwner=e.exports.delay=e.exports.performReverseLookupBatched=e.exports.findMetadataAddress=e.exports.findNameHouse=e.exports.findTldHouse=e.exports.findNftRecord=e.exports.getMintOwner=e.exports.findAllDomainsForTld=e.exports.getParentAccountFromTldHouseAccountInfo=e.exports.getTldFromTldHouseAccountInfo=e.exports.getAllTld=e.exports.findMainDomain=e.exports.findOwnedNameAccountsForUser=e.exports.getOriginNameAccountKey=e.exports.getHashedName=e.exports.getNameOwner=e.exports.getNameAccountKeyWithBump=void 0;var i=t("liYfk"),s=t("c1rzP"),a=t("7cTdJ"),c=t("iKE7a"),u=t("emT4h"),d=t("iricV"),l=t("3s2q3");function f(e,t,n){const o=[e,t?t.toBuffer():r.alloc(32),n?n.toBuffer():r.alloc(32)];return i.PublicKey.findProgramAddressSync(o,c.ANS_PROGRAM_ID)}function p(e){return o(this,void 0,void 0,(function*(){const t=u.NameRecordHeader.HASH_PREFIX+e,n=(0,a.sha256)(r.from(t,"utf8")).slice(2);return r.from(n,"hex")}))}function m(e){var t;const n=null===(t=null==e?void 0:e.data)||void 0===t?void 0:t.subarray(104),r=new s.BN(null==n?void 0:n.subarray(0,4),"le").toNumber();return n.subarray(4,4+r).toString().replace(/\0.*$/g,"")}function h(e){var t;const n=null===(t=null==e?void 0:e.data)||void 0===t?void 0:t.subarray(72,104);return new i.PublicKey(n)}function y(e,t){return o(this,void 0,void 0,(function*(){try{const n=yield l.NftRecord.fromAccountAddress(e,t);if(n.tag!==d.Tag.ActiveRecord)return;const r=yield e.getTokenLargestAccounts(n.nftMintAccount),o=yield e.getParsedAccountInfo(r.value[0].address);if(!o.value.data)return;return new i.PublicKey(o.value.data.parsed.info.owner)}catch(e){return}}))}function g(e,t){return i.PublicKey.findProgramAddressSync([r.from(c.NFT_RECORD_PREFIX),t.toBuffer(),e.toBuffer()],c.NAME_HOUSE_PROGRAM_ID)}function v(e){return i.PublicKey.findProgramAddressSync([r.from(c.NAME_HOUSE_PREFIX),e.toBuffer()],c.NAME_HOUSE_PROGRAM_ID)}e.exports.getNameAccountKeyWithBump=f,e.exports.getNameOwner=function(e,t,n){return o(this,void 0,void 0,(function*(){const r=yield u.NameRecordHeader.fromAccountAddress(e,t),o=r.owner;if(!r.isValid)return;if(!n)return o;const[i]=v(n),[s]=g(t,i);return(null==o?void 0:o.toBase58())!==s.toBase58()?o:yield y(e,s)}))},e.exports.getHashedName=p,e.exports.getOriginNameAccountKey=function(e=c.ORIGIN_TLD){return o(this,void 0,void 0,(function*(){const t=yield p(e),[n]=f(t,void 0,void 0);return n}))},e.exports.findOwnedNameAccountsForUser=function(e,t,n){return o(this,void 0,void 0,(function*(){const r=[{memcmp:{offset:40,bytes:t.toBase58()}}];n&&r.push({memcmp:{offset:8,bytes:n.toBase58()}});return(yield e.getProgramAccounts(c.ANS_PROGRAM_ID,{filters:r})).map((e=>e.pubkey))}))},e.exports.findMainDomain=function(e){return i.PublicKey.findProgramAddressSync([r.from(c.MAIN_DOMAIN_PREFIX),e.toBuffer()],c.TLD_HOUSE_PROGRAM_ID)},e.exports.getAllTld=function(e){return o(this,void 0,void 0,(function*(){const t=[{memcmp:{offset:0,bytes:[247,144,135,1,238,173,19,249]}}],n=yield e.getProgramAccounts(c.TLD_HOUSE_PROGRAM_ID,{filters:t}),r=[];return n.map((({account:e})=>{const t=h(e),n=m(e);r.push({tld:n,parentAccount:t})})),r}))},e.exports.getTldFromTldHouseAccountInfo=m,e.exports.getParentAccountFromTldHouseAccountInfo=h,e.exports.findAllDomainsForTld=function(e,t){return o(this,void 0,void 0,(function*(){const n=[{memcmp:{offset:8,bytes:t.toBase58()}}];return(yield e.getProgramAccounts(c.ANS_PROGRAM_ID,{filters:n})).map((e=>e.pubkey))}))},e.exports.getMintOwner=y,e.exports.findNftRecord=g,e.exports.findTldHouse=function(e){return e=e.toLowerCase(),i.PublicKey.findProgramAddressSync([r.from(c.TLD_HOUSE_PREFIX),r.from(e)],c.TLD_HOUSE_PROGRAM_ID)},e.exports.findNameHouse=v;e.exports.findMetadataAddress=e=>i.PublicKey.findProgramAddressSync([r.from("metadata"),c.TOKEN_METADATA_PROGRAM_ID.toBuffer(),e.toBuffer()],c.TOKEN_METADATA_PROGRAM_ID)[0],e.exports.performReverseLookupBatched=function(e,t,n){return o(this,void 0,void 0,(function*(){const r=t.map((e=>o(this,void 0,void 0,(function*(){const t=yield p(e.toBase58()),[r]=f(t,n,void 0);return r})))),i=yield Promise.all(r);return(yield e.getMultipleAccountsInfo(i)).map((e=>null==e?void 0:e.data.subarray(u.NameRecordHeader.byteSize,null==e?void 0:e.data.length).toString()))}))},e.exports.delay=function(e){return new Promise((t=>setTimeout(t,e)))};e.exports.getParsedAllDomainsNftAccountsByOwner=(e,t,n)=>o(void 0,void 0,void 0,(function*(){const{value:r}=yield t.getParsedTokenAccountsByOwner(e,{programId:c.SPL_TOKEN_PROGRAM_ID}),o=r.filter((e=>{var t,n,r,o,i,s,a,c,u,d;const l=null===(i=null===(o=null===(r=null===(n=null===(t=e.account)||void 0===t?void 0:t.data)||void 0===n?void 0:n.parsed)||void 0===r?void 0:r.info)||void 0===o?void 0:o.tokenAmount)||void 0===i?void 0:i.uiAmount;return 0===(null===(d=null===(u=null===(c=null===(a=null===(s=e.account)||void 0===s?void 0:s.data)||void 0===a?void 0:a.parsed)||void 0===c?void 0:c.info)||void 0===u?void 0:u.tokenAmount)||void 0===d?void 0:d.decimals)&&1===l})).map((e=>{var t,n,r,o;return null===(o=null===(r=null===(n=null===(t=e.account)||void 0===t?void 0:t.data)||void 0===n?void 0:n.parsed)||void 0===r?void 0:r.info)||void 0===o?void 0:o.mint}));return yield A(o,t,n)}));const A=(t,n,r)=>o(void 0,void 0,void 0,(function*(){const o=[],s=326,a=326;if(t.length>100)for(;t.length>0;){let c=t.splice(0,100).map((t=>(0,e.exports.findMetadataAddress)(new i.PublicKey(t))));const u=yield n.getMultipleAccountsInfo(c);for(const e of u)if(e){const t=new i.PublicKey(e.data.subarray(s,358));if(Boolean(e.data.subarray(a,327))&&t.toString()===r.toString()){const t=e.data.subarray(66,101).toString().replace(/\u0000/g,"");o.push(t)}}}else{let c=t.map((t=>(0,e.exports.findMetadataAddress)(new i.PublicKey(t))));const u=yield n.getMultipleAccountsInfo(c);for(const e of u)if(e){const t=new i.PublicKey(e.data.subarray(s,358));if(Boolean(e.data.subarray(a,327))&&t.toString()===r.toString()){const t=e.data.subarray(66,101).toString().replace(/\u0000/g,"");o.push(t)}}}return o}));e.exports.splitDomainTld=function(e){const t=e.split(".");let n="",r="",o="";return 1===t.length?r=t[0]:(n="."+t[t.length-1],r=t[t.length-2],o=t.slice(0,t.length-2).join(".")),[n,r,o]}})),t.register("iKE7a",(function(e,n){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.MULTIPLE_ACCOUNT_INFO_MAX=e.exports.NAME_HOUSE_PREFIX=e.exports.TLD_HOUSE_PREFIX=e.exports.NFT_RECORD_PREFIX=e.exports.TOKEN_METADATA_PROGRAM_ID=e.exports.SPL_TOKEN_PROGRAM_ID=e.exports.NAME_HOUSE_PROGRAM_ID=e.exports.TLD_HOUSE_PROGRAM_ID=e.exports.ANS_PROGRAM_ID=e.exports.ORIGIN_TLD=e.exports.MAIN_DOMAIN_PREFIX=void 0;var r=t("liYfk");e.exports.MAIN_DOMAIN_PREFIX="main_domain",e.exports.ORIGIN_TLD="ANS",e.exports.ANS_PROGRAM_ID=new r.PublicKey("ALTNSZ46uaAUU7XUV6awvdorLGqAsPwa9shm7h4uP2FK"),e.exports.TLD_HOUSE_PROGRAM_ID=new r.PublicKey("TLDHkysf5pCnKsVA4gXpNvmy7psXLPEu4LAdDJthT9S"),e.exports.NAME_HOUSE_PROGRAM_ID=new r.PublicKey("NH3uX6FtVE2fNREAioP7hm5RaozotZxeL6khU1EHx51"),e.exports.SPL_TOKEN_PROGRAM_ID=new r.PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"),e.exports.TOKEN_METADATA_PROGRAM_ID=new r.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),e.exports.NFT_RECORD_PREFIX="nft_record",e.exports.TLD_HOUSE_PREFIX="tld_house",e.exports.NAME_HOUSE_PREFIX="name_house",e.exports.MULTIPLE_ACCOUNT_INFO_MAX=100})),t.register("emT4h",(function(e,n){var r=t("8tcqI").Buffer,o=e.exports&&e.exports.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((r=r.apply(e,t||[])).next())}))};Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.NameRecordHeader=void 0;var i=t("liYfk"),s=t("cBVvR");class a{static get byteSize(){return 200}static fromAccountAddress(e,t){var n;return o(this,void 0,void 0,(function*(){const r=yield e.getAccountInfo(t,"confirmed");if(!r)return;const o=(0,s.deserializeUnchecked)(this.schema,a,r.data);return o.data=null===(n=r.data)||void 0===n?void 0:n.subarray(this.byteSize),o}))}static fromMultipileAccountAddresses(e,t){return o(this,void 0,void 0,(function*(){let n=yield e.getMultipleAccountsInfo(t),r=[];return n.forEach((e=>{if(!e)return void r.push(void 0);let t=this.fromAccountInfo(e);t?r.push(t):r.push(void 0)})),r}))}static fromAccountInfo(e){var t;const n=(0,s.deserializeUnchecked)(this.schema,a,e.data);return n.data=null===(t=e.data)||void 0===t?void 0:t.subarray(this.byteSize),n}pretty(){var e;const t=this.data.indexOf(0);return{parentName:this.parentName.toBase58(),owner:null===(e=this.owner)||void 0===e?void 0:e.toBase58(),nclass:this.nclass.toBase58(),expiresAt:this.expiresAt,createdAt:this.createdAt,nonTransferable:this.nonTransferable,isValid:this.isValid,data:this.isValid?this.data.subarray(0,t).toString():void 0}}constructor(e){this.parentName=new i.PublicKey(e.parentName),this.nclass=new i.PublicKey(e.nclass),this.expiresAt=new Date(1e3*new s.BinaryReader(r.from(e.expiresAt)).readU64().toNumber()),this.createdAt=new Date(1e3*new s.BinaryReader(r.from(e.createdAt)).readU64().toNumber()),this.nonTransferable=0!==e.nonTransferable[0];this.isValid=0===new s.BinaryReader(r.from(e.expiresAt)).readU64().toNumber()||this.expiresAt.getTime()+3888e6>new Date(Date.now()).getTime(),this.owner=this.isValid?new i.PublicKey(e.owner):void 0}}e.exports.NameRecordHeader=a,a.DISCRIMINATOR=[68,72,88,44,15,167,103,243],a.HASH_PREFIX="ALT Name Service",a.schema=new Map([[a,{kind:"struct",fields:[["discriminator",[8]],["parentName",[32]],["owner",[32]],["nclass",[32]],["expiresAt",[8]],["createdAt",[8]],["nonTransferable",[1]],["padding",[79]]]}]])})),t.register("cBVvR",(function(n,r){var o=t("8tcqI").Buffer,i=n.exports&&n.exports.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),s=n.exports&&n.exports.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=n.exports&&n.exports.__decorate||function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},c=n.exports&&n.exports.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&i(t,e,n);return s(t,e),t},u=n.exports&&n.exports.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n.exports,"__esModule",{value:!0}),n.exports.deserializeUnchecked=n.exports.deserialize=n.exports.serialize=n.exports.BinaryReader=n.exports.BinaryWriter=n.exports.BorshError=n.exports.baseDecode=n.exports.baseEncode=void 0;const d=u(t("c1rzP")),l=u(t("85iHy")),f=c(t("5rvRH")),p=new("function"!=typeof e.TextDecoder?f.TextDecoder:e.TextDecoder)("utf-8",{fatal:!0});n.exports.baseEncode=function(e){return"string"==typeof e&&(e=o.from(e,"utf8")),l.default.encode(o.from(e))},n.exports.baseDecode=function(e){return o.from(l.default.decode(e))};const m=1024;class h extends Error{addToFieldPath(e){this.fieldPath.splice(0,0,e),this.message=this.originalMessage+": "+this.fieldPath.join(".")}constructor(e){super(e),this.fieldPath=[],this.originalMessage=e}}n.exports.BorshError=h;class y{maybeResize(){this.buf.length<16+this.length&&(this.buf=o.concat([this.buf,o.alloc(m)]))}writeU8(e){this.maybeResize(),this.buf.writeUInt8(e,this.length),this.length+=1}writeU16(e){this.maybeResize(),this.buf.writeUInt16LE(e,this.length),this.length+=2}writeU32(e){this.maybeResize(),this.buf.writeUInt32LE(e,this.length),this.length+=4}writeU64(e){this.maybeResize(),this.writeBuffer(o.from(new d.default(e).toArray("le",8)))}writeU128(e){this.maybeResize(),this.writeBuffer(o.from(new d.default(e).toArray("le",16)))}writeU256(e){this.maybeResize(),this.writeBuffer(o.from(new d.default(e).toArray("le",32)))}writeU512(e){this.maybeResize(),this.writeBuffer(o.from(new d.default(e).toArray("le",64)))}writeBuffer(e){this.buf=o.concat([o.from(this.buf.subarray(0,this.length)),e,o.alloc(m)]),this.length+=e.length}writeString(e){this.maybeResize();const t=o.from(e,"utf8");this.writeU32(t.length),this.writeBuffer(t)}writeFixedArray(e){this.writeBuffer(o.from(e))}writeArray(e,t){this.maybeResize(),this.writeU32(e.length);for(const n of e)this.maybeResize(),t(n)}toArray(){return this.buf.subarray(0,this.length)}constructor(){this.buf=o.alloc(m),this.length=0}}function g(e,t,n){const r=n.value;n.value=function(...e){try{return r.apply(this,e)}catch(e){if(e instanceof RangeError){const t=e.code;if(["ERR_BUFFER_OUT_OF_BOUNDS","ERR_OUT_OF_RANGE"].indexOf(t)>=0)throw new h("Reached the end of buffer when deserializing")}throw e}}}n.exports.BinaryWriter=y;class v{readU8(){const e=this.buf.readUInt8(this.offset);return this.offset+=1,e}readU16(){const e=this.buf.readUInt16LE(this.offset);return this.offset+=2,e}readU32(){const e=this.buf.readUInt32LE(this.offset);return this.offset+=4,e}readU64(){const e=this.readBuffer(8);return new d.default(e,"le")}readU128(){const e=this.readBuffer(16);return new d.default(e,"le")}readU256(){const e=this.readBuffer(32);return new d.default(e,"le")}readU512(){const e=this.readBuffer(64);return new d.default(e,"le")}readBuffer(e){if(this.offset+e>this.buf.length)throw new h(`Expected buffer length ${e} isn't within bounds`);const t=this.buf.slice(this.offset,this.offset+e);return this.offset+=e,t}readString(){const e=this.readU32(),t=this.readBuffer(e);try{return p.decode(t)}catch(e){throw new h(`Error decoding UTF-8 string: ${e}`)}}readFixedArray(e){return new Uint8Array(this.readBuffer(e))}readArray(e){const t=this.readU32(),n=Array();for(let r=0;r<t;++r)n.push(e());return n}constructor(e){this.buf=e,this.offset=0}}function A(e){return e.charAt(0).toUpperCase()+e.slice(1)}function b(e,t,n,r,o){try{if("string"==typeof r)o[`write${A(r)}`](n);else if(r instanceof Array)if("number"==typeof r[0]){if(n.length!==r[0])throw new h(`Expecting byte array of length ${r[0]}, but got ${n.length} bytes`);o.writeFixedArray(n)}else if(2===r.length&&"number"==typeof r[1]){if(n.length!==r[1])throw new h(`Expecting byte array of length ${r[1]}, but got ${n.length} bytes`);for(let t=0;t<r[1];t++)b(e,null,n[t],r[0],o)}else o.writeArray(n,(n=>{b(e,t,n,r[0],o)}));else if(void 0!==r.kind){if("option"!==r.kind)throw new h(`FieldType ${r} unrecognized`);null==n?o.writeU8(0):(o.writeU8(1),b(e,t,n,r.type,o))}else x(e,n,o)}catch(e){throw e instanceof h&&e.addToFieldPath(t),e}}function x(e,t,n){if("function"==typeof t.borshSerialize)return void t.borshSerialize(n);const r=e.get(t.constructor);if(!r)throw new h(`Class ${t.constructor.name} is missing in schema`);if("struct"===r.kind)r.fields.map((([r,o])=>{b(e,r,t[r],o,n)}));else{if("enum"!==r.kind)throw new h(`Unexpected schema kind: ${r.kind} for ${t.constructor.name}`);{const o=t[r.field];for(let i=0;i<r.values.length;++i){const[s,a]=r.values[i];if(s===o){n.writeU8(i),b(e,s,t[s],a,n);break}}}}}function _(e,t,n,r){try{if("string"==typeof n)return r[`read${A(n)}`]();if(n instanceof Array){if("number"==typeof n[0])return r.readFixedArray(n[0]);if("number"==typeof n[1]){const t=[];for(let o=0;o<n[1];o++)t.push(_(e,null,n[0],r));return t}return r.readArray((()=>_(e,t,n[0],r)))}if("option"===n.kind){return r.readU8()?_(e,t,n.type,r):void 0}return w(e,n,r)}catch(e){throw e instanceof h&&e.addToFieldPath(t),e}}function w(e,t,n){if("function"==typeof t.borshDeserialize)return t.borshDeserialize(n);const r=e.get(t);if(!r)throw new h(`Class ${t.name} is missing in schema`);if("struct"===r.kind){const r={};for(const[o,i]of e.get(t).fields)r[o]=_(e,o,i,n);return new t(r)}if("enum"===r.kind){const o=n.readU8();if(o>=r.values.length)throw new h(`Enum index: ${o} is out of range`);const[i,s]=r.values[o];return new t({[i]:_(e,i,s,n)})}throw new h(`Unexpected schema kind: ${r.kind} for ${t.constructor.name}`)}a([g],v.prototype,"readU8",null),a([g],v.prototype,"readU16",null),a([g],v.prototype,"readU32",null),a([g],v.prototype,"readU64",null),a([g],v.prototype,"readU128",null),a([g],v.prototype,"readU256",null),a([g],v.prototype,"readU512",null),a([g],v.prototype,"readString",null),a([g],v.prototype,"readFixedArray",null),a([g],v.prototype,"readArray",null),n.exports.BinaryReader=v,n.exports.serialize=function(e,t,n=y){const r=new n;return x(e,t,r),r.toArray()},n.exports.deserialize=function(e,t,n,r=v){const o=new r(n),i=w(e,t,o);if(o.offset<n.length)throw new h(`Unexpected ${n.length-o.offset} bytes after deserialized data`);return i},n.exports.deserializeUnchecked=function(e,t,n,r=v){return w(e,t,new r(n))}})),t.register("iricV",(function(e,n){"use strict";var r=e.exports&&e.exports.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=e.exports&&e.exports.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=e.exports&&e.exports.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t};Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.tagBeet=e.exports.Tag=void 0;const s=i(t("hbO5Y"));var a,c;(c=a=e.exports.Tag||(e.exports.Tag={}))[c.Uninitialized=0]="Uninitialized",c[c.ActiveRecord=1]="ActiveRecord",c[c.InactiveRecord=2]="InactiveRecord",e.exports.tagBeet=s.fixedScalarEnum(a)})),t.register("3s2q3",(function(e,n){"use strict";var r=e.exports&&e.exports.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=e.exports&&e.exports.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=e.exports&&e.exports.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t},s=e.exports&&e.exports.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((r=r.apply(e,t||[])).next())}))};Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.nftRecordBeet=e.exports.NftRecord=e.exports.nftRecordDiscriminator=void 0;const a=i(t("hbO5Y")),c=i(t("hvIDj"));var u=t("iricV");e.exports.nftRecordDiscriminator=[174,190,114,100,177,14,90,254];class d{static fromArgs(e){return new d(e.tag,e.bump,e.nameAccount,e.owner,e.nftMintAccount,e.tldHouse)}static fromAccountInfo(e,t=0){return d.deserialize(e.data,t)}static fromAccountAddress(e,t){return s(this,void 0,void 0,(function*(){const n=yield e.getAccountInfo(t);if(null==n)throw new Error(`Unable to find NftRecord account at ${t}`);return d.fromAccountInfo(n,0)[0]}))}static deserialize(t,n=0){return e.exports.nftRecordBeet.deserialize(t,n)}serialize(){return e.exports.nftRecordBeet.serialize(Object.assign({accountDiscriminator:e.exports.nftRecordDiscriminator},this))}static get byteSize(){return e.exports.nftRecordBeet.byteSize}static getMinimumBalanceForRentExemption(e,t){return s(this,void 0,void 0,(function*(){return yield e.getMinimumBalanceForRentExemption(d.byteSize,t)}))}static hasCorrectByteSize(e,t=0){return e.byteLength-t===d.byteSize}pretty(){return{tag:"Tag."+u.Tag[this.tag],bump:this.bump,nameAccount:this.nameAccount.toBase58(),owner:this.owner.toBase58(),nftMintAccount:this.nftMintAccount.toBase58(),tldHouse:this.tldHouse.toBase58()}}constructor(e,t,n,r,o,i){this.tag=e,this.bump=t,this.nameAccount=n,this.owner=r,this.nftMintAccount=o,this.tldHouse=i}}e.exports.NftRecord=d,e.exports.nftRecordBeet=new a.BeetStruct([["accountDiscriminator",a.uniformFixedSizeArray(a.u8,8)],["tag",u.tagBeet],["bump",a.u8],["nameAccount",c.publicKey],["owner",c.publicKey],["nftMintAccount",c.publicKey],["tldHouse",c.publicKey]],d.fromArgs,"NftRecord")})),t.register("c7XOH",(function(e,n){"use strict";var r=e.exports&&e.exports.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((r=r.apply(e,t||[])).next())}))};Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.TldParser=void 0;var o=t("liYfk"),i=t("c1rzP"),s=t("XZdu2"),a=t("emT4h"),c=t("6fgdF"),u=t("iKE7a"),d=t("8QRtg");e.exports.TldParser=class{getAllUserDomains(e){return r(this,void 0,void 0,(function*(){"string"==typeof e&&(e=new o.PublicKey(e));return yield(0,c.findOwnedNameAccountsForUser)(this.connection,e,void 0)}))}getAllUserDomainsFromTld(e,t){return r(this,void 0,void 0,(function*(){const n="."+t,r=yield(0,c.getOriginNameAccountKey)(),i=yield(0,c.getHashedName)(n),[s]=(0,c.getNameAccountKeyWithBump)(i,void 0,r);"string"==typeof e&&(e=new o.PublicKey(e));return yield(0,c.findOwnedNameAccountsForUser)(this.connection,e,s)}))}getOwnerFromDomainTld(e){return r(this,void 0,void 0,(function*(){const t=e.split("."),n=t[0],r="."+t[1],o=yield(0,c.getOriginNameAccountKey)(),i=yield(0,c.getHashedName)(r),[s]=(0,c.getNameAccountKeyWithBump)(i,void 0,o),a=yield(0,c.getHashedName)(n),[u]=(0,c.getNameAccountKeyWithBump)(a,void 0,s),[d]=(0,c.findTldHouse)(r);return yield(0,c.getNameOwner)(this.connection,u,d)}))}getNameRecordFromDomainTld(e){return r(this,void 0,void 0,(function*(){const t=e.split("."),n=t[0],r="."+t[1],o=yield(0,c.getOriginNameAccountKey)(),i=yield(0,c.getHashedName)(r),[s]=(0,c.getNameAccountKeyWithBump)(i,void 0,o),u=yield(0,c.getHashedName)(n),[d]=(0,c.getNameAccountKeyWithBump)(u,void 0,s);return yield a.NameRecordHeader.fromAccountAddress(this.connection,d)}))}getTldFromParentAccount(e){var t;return r(this,void 0,void 0,(function*(){"string"==typeof e&&(e=new o.PublicKey(e));const n=yield a.NameRecordHeader.fromAccountAddress(this.connection,e),r=yield this.connection.getAccountInfo(null==n?void 0:n.owner),s=null===(t=null==r?void 0:r.data)||void 0===t?void 0:t.subarray(104),c=new i.BN(null==s?void 0:s.subarray(0,4),"le").toNumber();return s.subarray(4,4+c).toString().replace(/\0.*$/g,"")}))}reverseLookupNameAccount(e,t){var n;return r(this,void 0,void 0,(function*(){"string"==typeof e&&(e=new o.PublicKey(e)),"string"==typeof t&&(t=new o.PublicKey(t));const r=yield(0,c.getHashedName)(e.toString()),[i]=(0,c.getNameAccountKeyWithBump)(r,t,void 0),s=yield a.NameRecordHeader.fromAccountAddress(this.connection,i);return null===(n=null==s?void 0:s.data)||void 0===n?void 0:n.toString()}))}getMainDomain(e){return r(this,void 0,void 0,(function*(){"string"==typeof e&&(e=new o.PublicKey(e));const[t]=(0,c.findMainDomain)(e);return yield s.MainDomain.fromAccountAddress(this.connection,t)}))}getParsedAllUserDomainsFromTldUnwrapped(e,t){return r(this,void 0,void 0,(function*(){const n="."+t,r=yield(0,c.getOriginNameAccountKey)(),i=yield(0,c.getHashedName)(n),[s]=(0,c.findTldHouse)(n),[a]=(0,c.getNameAccountKeyWithBump)(i,void 0,r);"string"==typeof e&&(e=new o.PublicKey(e));const d=yield(0,c.findOwnedNameAccountsForUser)(this.connection,e,a);let l=[];for(let e=0;e<d.length;e+=u.MULTIPLE_ACCOUNT_INFO_MAX){yield(0,c.delay)(100);const t=Math.min(e+u.MULTIPLE_ACCOUNT_INFO_MAX,d.length),r=d.slice(e,t),o=(yield(0,c.performReverseLookupBatched)(this.connection,r,s)).map(((e,t)=>({nameAccount:r[t],domain:e+n})));o.length>0&&o.sort(((e,t)=>e.domain.localeCompare(t.domain,void 0,{numeric:!0,sensitivity:"base"}))),l.push(...o)}return l}))}getParsedAllUserDomainsFromTld(e,t){return r(this,void 0,void 0,(function*(){const n="."+t,i=yield(0,c.getOriginNameAccountKey)(),s=yield(0,c.getHashedName)(n),[a]=(0,c.findTldHouse)(n),[l]=(0,c.getNameAccountKeyWithBump)(s,void 0,i);"string"==typeof e&&(e=new o.PublicKey(e));const f=yield(0,c.findOwnedNameAccountsForUser)(this.connection,e,l);let p=[];const m=(yield(0,c.getParsedAllDomainsNftAccountsByOwner)(e,this.connection,(0,c.findNameHouse)(a)[0])).map((e=>e+n)),h=yield Promise.all(m.map((e=>r(this,void 0,void 0,(function*(){return{nameAccount:(yield(0,d.getDomainKey)(e)).pubkey,domain:e}})))));p.push(...h);for(let e=0;e<f.length;e+=u.MULTIPLE_ACCOUNT_INFO_MAX){yield(0,c.delay)(100);const t=Math.min(e+u.MULTIPLE_ACCOUNT_INFO_MAX,f.length),r=f.slice(e,t),o=(yield(0,c.performReverseLookupBatched)(this.connection,r,a)).map(((e,t)=>({nameAccount:r[t],domain:e+n})));p.push(...o)}return p.length>0&&p.sort(((e,t)=>e.domain.localeCompare(t.domain,void 0,{numeric:!0,sensitivity:"base"}))),p}))}getParsedAllUserDomainsUnwrapped(e){return r(this,void 0,void 0,(function*(){const t=yield(0,c.getAllTld)(this.connection);let n=[];"string"==typeof e&&(e=new o.PublicKey(e));for(let{parentAccount:r,tld:o}of t){let t=o.toString();const[i]=(0,c.findTldHouse)(t),s=yield(0,c.findOwnedNameAccountsForUser)(this.connection,e,r);for(let e=0;e<s.length;e+=u.MULTIPLE_ACCOUNT_INFO_MAX){yield(0,c.delay)(100);const r=Math.min(e+u.MULTIPLE_ACCOUNT_INFO_MAX,s.length),o=s.slice(e,r),a=(yield(0,c.performReverseLookupBatched)(this.connection,o,i)).map(((e,n)=>({nameAccount:o[n],domain:e+t})));n.push(...a)}}return n.length>0&&n.sort(((e,t)=>e.domain.localeCompare(t.domain,void 0,{numeric:!0,sensitivity:"base"}))),n}))}getParsedAllUserDomains(e){return r(this,void 0,void 0,(function*(){const t=yield(0,c.getAllTld)(this.connection);let n=[];"string"==typeof e&&(e=new o.PublicKey(e));for(let{parentAccount:o,tld:i}of t){let t=i.toString();const[s]=(0,c.findTldHouse)(t),a=yield(0,c.findOwnedNameAccountsForUser)(this.connection,e,o),l=(yield(0,c.getParsedAllDomainsNftAccountsByOwner)(e,this.connection,(0,c.findNameHouse)(s)[0])).map((e=>e+t)),f=yield Promise.all(l.map((e=>r(this,void 0,void 0,(function*(){return{nameAccount:(yield(0,d.getDomainKey)(e)).pubkey,domain:e}})))));n.push(...f);for(let e=0;e<a.length;e+=u.MULTIPLE_ACCOUNT_INFO_MAX){yield(0,c.delay)(100);const r=Math.min(e+u.MULTIPLE_ACCOUNT_INFO_MAX,a.length),o=a.slice(e,r),i=(yield(0,c.performReverseLookupBatched)(this.connection,o,s)).map(((e,n)=>({nameAccount:o[n],domain:e+t})));n.push(...i)}}return n.length>0&&n.sort(((e,t)=>e.domain.localeCompare(t.domain,void 0,{numeric:!0,sensitivity:"base"}))),n}))}constructor(e){this.connection=e}}})),t.register("XZdu2",(function(e,n){"use strict";var r=e.exports&&e.exports.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=e.exports&&e.exports.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=e.exports&&e.exports.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t},s=e.exports&&e.exports.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((r=r.apply(e,t||[])).next())}))};Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.mainDomainBeet=e.exports.MainDomain=e.exports.mainDomainDiscriminator=void 0;const a=i(t("liYfk")),c=i(t("hvIDj")),u=i(t("hbO5Y"));e.exports.mainDomainDiscriminator=[109,239,227,199,98,226,66,175];class d{static fromArgs(e){return new d(e.nameAccount,e.tld,e.domain)}static fromAccountInfo(e,t=0){return d.deserialize(e.data,t)}static fromAccountAddress(e,t,n){return s(this,void 0,void 0,(function*(){const r=yield e.getAccountInfo(t,n);if(null==r)throw new Error(`Unable to find MainDomain account at ${t}`);return d.fromAccountInfo(r,0)[0]}))}static gpaBuilder(t=new a.PublicKey("TLDHkysf5pCnKsVA4gXpNvmy7psXLPEu4LAdDJthT9S")){return c.GpaBuilder.fromStruct(t,e.exports.mainDomainBeet)}static deserialize(t,n=0){return e.exports.mainDomainBeet.deserialize(t,n)}serialize(){return e.exports.mainDomainBeet.serialize(Object.assign({accountDiscriminator:e.exports.mainDomainDiscriminator},this))}static byteSize(t){const n=d.fromArgs(t);return e.exports.mainDomainBeet.toFixedFromValue(Object.assign({accountDiscriminator:e.exports.mainDomainDiscriminator},n)).byteSize}static getMinimumBalanceForRentExemption(e,t,n){return s(this,void 0,void 0,(function*(){return yield t.getMinimumBalanceForRentExemption(d.byteSize(e),n)}))}pretty(){return{nameAccount:this.nameAccount.toBase58(),tld:this.tld,domain:this.domain}}constructor(e,t,n){this.nameAccount=e,this.tld=t,this.domain=n}}e.exports.MainDomain=d,e.exports.mainDomainBeet=new u.FixableBeetStruct([["accountDiscriminator",u.uniformFixedSizeArray(u.u8,8)],["nameAccount",c.publicKey],["tld",u.utf8String],["domain",u.utf8String]],d.fromArgs,"MainDomain")})),t.register("8QRtg",(function(e,n){var r=t("8tcqI").Buffer,o=e.exports&&e.exports.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((r=r.apply(e,t||[])).next())}))};Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.getDomainKey=void 0;var i=t("6fgdF");e.exports.getDomainKey=(e,t=!1)=>o(void 0,void 0,void 0,(function*(){const n=e.split(".");if(3===n.length){const e="."+n[2],o=n[1],i=n[0],{pubkey:a}=yield s(e),{pubkey:c}=yield s(o,a),u=r.from([t?1:0]).toString().concat(i),d=yield s(u,c);return Object.assign(Object.assign({},d),{isSub:!0,parent:c})}if(4===n.length&&t){const e="."+n[3],t=n[2],o=n[1],i=n[0],{pubkey:a}=yield s(e),{pubkey:c}=yield s(t,a),{pubkey:u}=yield s("\0".concat(o),c),d=r.from([1]).toString(),l=yield s(d.concat(i),u);return Object.assign(Object.assign({},l),{isSub:!0,parent:c,isSubRecord:!0})}if(n.length>4)throw new Error("Invalid derivation input");const o="."+n[1],{pubkey:i}=yield s(o),a=n[0],c=yield s(a,i);return Object.assign(Object.assign({},c),{isSub:!1,parent:void 0})}));const s=(e,t)=>o(void 0,void 0,void 0,(function*(){t||(t=yield(0,i.getOriginNameAccountKey)());let n=yield(0,i.getHashedName)(e),[r]=yield(0,i.getNameAccountKeyWithBump)(n,void 0,t);return{pubkey:r,hashed:n}}))})),t.register("jGlTf",(function(e,t){"use strict";var n;Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.Record=void 0,(n=e.exports.Record||(e.exports.Record={})).IPFS="IPFS",n.ARWV="ARWV",n.SOL="SOL",n.ETH="ETH",n.BTC="BTC",n.LTC="LTC",n.DOGE="DOGE",n.Email="email",n.Url="url",n.Discord="discord",n.Github="github",n.Reddit="reddit",n.Twitter="twitter",n.Telegram="telegram",n.Pic="pic",n.SHDW="SHDW",n.POINT="POINT"}))}();
//# sourceMappingURL=esm.022f3542.js.map
define=__define;})(window.define);