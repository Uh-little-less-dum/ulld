'use strict';

var s = require('dayjs');
var D = require('dayjs/plugin/advancedFormat');
var d = require('dayjs/plugin/timezone');
var c = require('dayjs/plugin/utc');
var h = require('dayjs/plugin/relativeTime');
var y = require('dayjs/plugin/duration');
var p = require('dayjs/plugin/customParseFormat');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var s__default = /*#__PURE__*/_interopDefault(s);
var D__default = /*#__PURE__*/_interopDefault(D);
var d__default = /*#__PURE__*/_interopDefault(d);
var c__default = /*#__PURE__*/_interopDefault(c);
var h__default = /*#__PURE__*/_interopDefault(h);
var y__default = /*#__PURE__*/_interopDefault(y);
var p__default = /*#__PURE__*/_interopDefault(p);

s__default.default.extend(p__default.default);s__default.default.extend(y__default.default);s__default.default.extend(h__default.default);s__default.default.extend(c__default.default);s__default.default.extend(d__default.default);s__default.default.extend(D__default.default);var b=["24 hours","1 week","30 Days","60 Days","90 Days","6 Months","Previous Year","Year to Date","All Time"],f=class a{constructor(e,t){this.config=t;this.withoutSuffix=!1;this.flat=!1;this.timezone=t?.dateHandling.defaultTimeZone||this.getTimezone(),this.timezone&&s__default.default.tz.setDefault(this.timezone),this.dayjs=e instanceof Date?s__default.default(e):s__default.default(e).tz(this.timezone),this.t=this.dayjs.toDate();}getTimezone(){return Intl.DateTimeFormat().resolvedOptions().timeZone||"America/Chicago"}djs(e){return s__default.default.tz(e,this.timezone)}updateOnInterval(e,t,i){return setInterval(()=>{i(this.relativeTime(t));},e*1e3)}formatDate(e){let t=e?"MMM Do YYYY [at] h:mm a":"MMM Do YYYY";return this.dayjs.local().format(t)}now(e=!1){return e?new Date().valueOf():new Date}secondDifference(e=new Date){return this.dayjs.local().diff(e,"seconds")}diffAsDuration(e=new Date){return s__default.default.duration(this.secondDifference(e),"seconds")}formatTimeDiff(e,t=new Date){let i=e||this.diffAsDuration(t);return {years:i.years(),days:i.days(),asDays:i.asDays(),months:i.months(),hours:i.hours(),minutes:i.minutes(),seconds:i.seconds()}}getDiffBaseString(e){let t=e.days(),i=e.months(),r="";if(this.flat){let n=Math.floor(e.asDays());n>0&&(r+=`[${n} ${n===1?"day":"days"} ]`);}else i>0&&(r+=i===1?"M [month] ":"M [months] "),t>0&&(r+=t===1?"D [day] ":"D [days] ");return r}relativeTimeAnalog(){let e=this.diffAsDuration(),t=this.getDiffBaseString(e);return e.format(`${t} HH:mm:ss`)}relativeTimeDescriptive(){let e=this.diffAsDuration(),t=this.getDiffBaseString(e),i=this.formatTimeDiff(e);return i.hours&&(t+=i.hours===1?"H [hour] ":"H [hours] "),i.minutes&&(t+=i.minutes===1?"m [minute] ":"m [minutes] "),i.seconds&&(t+=i.seconds===1?"ss [second] ":"ss [seconds] "),e.format(t.trim())}relativeTimeSummarized(){return this.dayjs.local().fromNow(this.withoutSuffix)}replaceExtraNegatives(e){let t=e.indexOf("-"),i=e.lastIndexOf("-");return t<0||t===i?e:`${e.slice(0,t+1)}${e.slice(t,e.length).replaceAll("-","")}`}relativeTime(e){return e==="analog"?this.replaceExtraNegatives(this.relativeTimeAnalog()):e==="summarized"?this.replaceExtraNegatives(this.relativeTimeSummarized()):e==="descriptive"?this.replaceExtraNegatives(this.relativeTimeDescriptive()):""}startOfDay(){return s__default.default().startOf("day")}dayOfWeek(){return s__default.default().get("day")}static filterByDateRange(e,t,i,r){let n=[],o=(typeof i=="string"?new Date(i):i).valueOf(),u=(typeof r>"u"?new Date:typeof r=="string"?new Date(r):r).valueOf();for(let m of e){let l=t(m).valueOf();l>=o&&l<=u&&n.push(m);}return n}static formatDate(e,t,i){let r=i||(t?"MMM Do YYYY [at] h:mm a":"MMM Do YYYY");return s__default.default(e).format(r)}static formattedQuantityToString(e){let t="";return e.hours>0&&(t+=`${e.hours}:`),e.minutes>0&&(t+=`${e.minutes}:`),t+=`${e.seconds>0?e.seconds:"00"}`,t}static formattedQuantityToDescriptiveString(e){let t="";return e.hours>0&&(t+=`${e.hours} ${e.hours===1?"hour":"hours"} `),e.minutes>0&&(t+=`${e.minutes} ${e.minutes===1?"minute":"minutes"} `),e.seconds>0&&(t+=`${e.seconds} ${e.seconds===1?"second":"seconds"} `),t}static formatTimeQuantity(e){let t=Math.floor(e/3600),i=Math.floor((e-t*3600)/60),r=Math.floor(e-(t*3600+i*60));return {hours:t,minutes:i,seconds:r}}static getTimePeriod(e){let i={"24 hours":864e5,"1 week":6048e5,"30 Days":2592e6,"60 Days":5184e6,"90 Days":7776e6,"Previous Year":31536e6,"6 Months":15768e6,"Year to Date":n=>n.valueOf()-new Date(`1/1/${n.getFullYear()}`).valueOf(),"All Time":n=>n.valueOf()-new Date("1/1/1970").valueOf()}[e],r=new Date;return typeof i=="function"?new Date(r.valueOf()-i(r)):new Date(r.valueOf()-i)}static thirtyDaysAgo(){let e=2592e6;return new Date(new Date().valueOf()-e)}static consistentlyFormatDay(e){return `${e.getMonth()+1}/${e.getDate()}/${e.getFullYear()}`}static groupByDay(e,t){let i={};for(let r of e){let n=t(r);if(n){let o=a.consistentlyFormatDay(n);o in i||(i[o]=[]),i[o].push(r);}}return i}static groupByHour(e,t){let i={};for(let r of e){let n=t(r);if(n){let u=s__default.default(n).format("HH");u in i||(i[u]=[]),i[u].push(r);}}return i}},$=(a,e="null")=>a instanceof Date?a:typeof a=="string"?new Date(a):e==="item"?a:e==="now"?new Date:e==="undefined"?void 0:null;

exports.a = b;
exports.b = f;
exports.c = $;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-UFW2OWV7.cjs.map