"use client"
"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } }"use client";var _chunkI7EIMM7Scjs = require('../../../chunk-I7EIMM7S.cjs');require('../../../chunk-GX4GL4KK.cjs');var _react = require('react'); var o = _interopRequireWildcard(_react);var _reactpopover = require('@radix-ui/react-popover'); var e = _interopRequireWildcard(_reactpopover);var P=e.Root,f= exports.PopoverTrigger =e.Trigger,m= exports.PopoverContentNoPortal =o.forwardRef(({className:t,align:i="center",sideOffset:a=4,...n},p)=>o.createElement(e.Content,{ref:p,align:i,sideOffset:a,className:_chunkI7EIMM7Scjs.a.call(void 0, "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",t),...n})),d= exports.PopoverContent =o.forwardRef((t,i)=>o.createElement(e.Portal,null,o.createElement(m,{...t,ref:i})));d.displayName=e.Content.displayName;exports.Popover = P; exports.PopoverContent = d; exports.PopoverContentNoPortal = m; exports.PopoverTrigger = f;
//# sourceMappingURL=popover.cjs.map