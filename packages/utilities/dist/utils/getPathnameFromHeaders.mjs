import '../chunk-T7KECS5U.mjs';
import { headers } from 'next/headers';

var n=()=>{let e=headers().get("x-url"),t=e?.indexOf("?");return e&&t&&t>-1&&(e=e.slice(0,t)),e};

export { n as getPathnameFromHeaders };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=getPathnameFromHeaders.mjs.map