var supported = {};

const toggles = document.querySelectorAll("[name='toggle-greenlight']");

const browserList = document.querySelector(".browser-details");
const htmlList = document.querySelector(".html-support");
const jsList = document.querySelector(".js-support");
const cssList = document.querySelector(".css-support");


// Browser
supported.browser = {};
supported.browser.userAgent = {
   supported: navigator.userAgent,
   description: "<code>navigator.userAgent</code> <br>" + navigator.userAgent,
   canuse: 2,
};
supported.browser.platform = {
   supported: navigator.platform,
   description: "<code>navigator.platform</code> <br>" + navigator.platform,
   canuse: 2,
};
// supported.browser.systemLanguage = {
//    supported: navigator.systemLanguage,
//    description: "<code>navigator.systemLanguage</code> <br>" + navigator.systemLanguage
// };
supported.browser.language = {
   supported: navigator.language,
   description: "<code>navigator.language</code> <br>" + navigator.language,
   canuse: 2,
};
supported.browser.cookieEnabled = {
   supported: navigator.cookieEnabled,
   description: "<code>navigator.cookieEnabled</code>",
   canuse: 2,
};



// HTML
supported.html = {};

// WebP support
supported.html.webp = {
   supported: false,
   description: "WebP image format",
   browser: "Safari 14",
   canuse: 2,
   label: "use with fallback",
};
var webpIMG = new Image()
webpIMG.onload = function () { supported.html.webp.supported = (webpIMG.width > 0) && (webpIMG.height > 0) }
webpIMG.onerror = function () { supported.html.webp.supported = false }
webpIMG.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA"

supported.html.lazyLoading = {
   // supported: ('loading' in document.createElement('img')),
   supported: ('loading' in HTMLImageElement.prototype),
   description: `<code>loading="lazy"</code>`,
   browser: "Safari 15.4",
   canuse: 2,
   label: "just use",
};

supported.html.dialogElement = {
   supported: (typeof HTMLDialogElement === 'function'),
   // supported: (typeof window.showModalDialog === 'function'),
   // supported: (typeof document.createElement('dialog').show === 'function'),
   description: `<code>&lt;dialog&gt;</code> Element`,
   browser: "Safari 15.4, Firefox 98",
   canuse: 2,
   label: "use with polyfill",
};

// AVIF support
supported.html.avif = {
   supported: false,
   description: "AVIF image format",
   browser: "Safari 16; waiting on Edge",
   canuse: -1,
   label: "awaiting support",
};
var avifIMG = new Image()
avifIMG.onload = function () { supported.html.avif.supported = (avifIMG.width > 0) && (avifIMG.height > 0) }
avifIMG.onerror = function () { supported.html.avif.supported = false }
avifIMG.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="

supported.html.inert = {
   supported: "inert" in document.documentElement,
   description: "<code>inert</code>",
   browser: "Safari 15.5, Chrome 102; waiting on Firefox",
   canuse: 1,
   label: "use",
};


// JS
supported.js = {};
supported.js.domPoint = {
   supported: "DOMPoint" in window,
   description: "<code>DOMPoint</code> and <code>DOMMatrix</code>",
   canuse: 2,
};
supported.js.intersectionObserver = {
   supported: "IntersectionObserver" in window,
   description: "Intersection Observer",
   browser: "Safari 12.1",
   canuse: 2,
};
supported.js.resizeObserver = {
   supported: "ResizeObserver" in window,
   description: "Resize Observer",
   browser: "Safari 13.1",
   canuse: 2,
   label: "",
};
supported.js.stringMatchAll = {
   supported: String.prototype.matchAll,
   description: "String.matchAll()",
   browser: "Safari 13, Chrome 73",
   canuse: 2,
   label: "",
};
supported.js.stringReplaceAll = {
   supported: String.prototype.replaceAll,
   description: "String.replaceAll()",
   browser: "Safari 13.4, Chrome 85",
   canuse: 2,
   label: "",
};
supported.js.promiseAny = {
   supported: typeof Promise.any === "function",
   description: "Promise.any()",
   browser: "Safari 14",
   canuse: 0,
   label: "waiting",
};
supported.js.promiseAllSettled = {
   supported: typeof Promise.allSettled === "function",
   description: "Promise.allSettled()",
   browser: "Safari 13",
   canuse: 1,
   label: "begin using",
};
supported.js.optionalChaining = {
   supported: false,
   description: "Optional Chaining (<code>object?.property</code>)",
   browser: "Safari 13.1",
   canuse: 2,
   label: "",
};
try {
   eval('const foo = {}; foo?.bar')
   supported.js.optionalChaining.supported = true
} catch(e) {
   supported.js.optionalChaining.supported = false
}

supported.js.webAnimationsAPI = {
   supported: "animate" in document.documentElement,
   description: "Web Animations API",
   browser: "Safari 13.1, Chrome 84, Firefox 75, Opera 71",
   canuse: 2,
   label: "",
};

supported.js.pointerEvent = {
   supported: 'PointerEvent' in window,
   description: "Pointer Events (<code>pointerdown, pointermove, pointerup, ...</code>)",
   browser: "Safari 13.2",
   canuse: 2,
   label: "",
};

supported.js.topLevelAwait = {
   supported: false,
   description: "🪲 Top Level (<code>await()</code>)",
   browser: "Safari 15, Chrome 89",
   canuse: 0,
   label: "waiting",
};
try {
   await('/')
   supported.js.topLevelAwait.supported = true
} catch(e) {
   supported.js.topLevelAwait.supported = false
}

supported.js.arrayAt = {
   supported: false,
   description: "Array (<code>.at()</code>)",
   browser: "Safari 15.4",
   canuse: 0,
   label: "waiting",
};
try {
   eval('const array = ["a", "b", "c"]; array.at(2)')
   supported.js.arrayAt.supported = true
} catch(e) {
   supported.js.arrayAt.supported = false
}

supported.js.showPicker = {
   supported: "showPicker" in document.createElement("input"),
   description: "<code>&lt;input&gt;</code> <code>input.showPicker()</code>",
   browser: "Safari 16, Chrome 99",
   canuse: 0,
   label: "waiting",
};
supported.js.scrollIntoViewSmooth = {
   supported: 'scrollBehavior' in document.documentElement.style,
   description: `element.scrollIntoView({ behavior: "smooth" })`,
   browser: "Safari 16.0",
   canuse: 1,
   label: "begin using",
};
supported.js.virtualKeyboardAPI = {
   supported: 'virtualKeyboard' in navigator,
   description: "Virtual Keyboard API",
   browser: "... waiting on Safari, Firefox",
   canuse: -1,
   label: "awaiting support",
};





// CSS
supported.css = {};
supported.css.hover = {
   supported: window.matchMedia("(hover: hover)").matches,
   description: "@media (hover: hover)",
   canuse: 2,
};
supported.css.not = {
   supported: CSS.supports('selector(:not(.highlight))'),
   description: ":not(.highlight)",
   browser: "Chrome 88, Samsung Internet 15, Firefox 84, Safari 9",
   canuse: 2,
};
supported.css.minMax = {
   supported: CSS.supports(`(width: min(100%, 500px)) and (height: max(100%, 500px))`),
   description: "min/max(100%, 500px)",
   browser: "Safari 11.1, Chrome 79",
   canuse: 2,
};
supported.css.woff2 = {
   supported: true,
   description: "@fontface with font-family: *.woff2",
   browser: "Safari 10",
   canuse: 2,
};
supported.css.marker = {
   supported: CSS.supports('selector(::marker)'),
   description: "::marker",
   browser: "Safari 11.1, Chrome 86, Samsung Internet 14, Firefox 68; not in iOS Safari!!",
   canuse: 1,
};
supported.css.envVariables = {
   supported: CSS.supports('margin-bottom: env(safe-area-inset-bottom)'),
   description: "env(safe-area-inset-bottom)",
   browser: "Safari 11.1, Chrome 69, Firefox 65",
   canuse: 2,
};
supported.css.conicGradient = {
   supported: CSS.supports('background: conic-gradient(red, orange, blue)'),
   description: "conic-gradient(red, orange, blue)",
   browser: "Safari 12.1, Chrome 69, Firefox 83",
   canuse: 2,
};
supported.css.columnGap = {
   supported: CSS.supports('(display: grid) and (column-gap: 1em)'),
   description: `Grid Layout: <code>gap</code>/<code>rowgap</code>/<code>columngap</code>`,
   browser: "Safari 12",
   canuse: 2,
};
supported.css.flexGap = {
   supported: CSS.supports('(display: flex) and (gap: 1em)'),
   description: `Flexbox: <code>gap</code>/<code>rowgap</code>/<code>columngap</code>`,
   browser: "Safari 14.1 (<code>grid-gap</code>)",
   canuse: 1,
   label: "begin using",
};
supported.css.webkitBackdropFilter = {
   supported: CSS.supports('-webkit-backdrop-filter: blur(4px)'),
   description: "-webkit-backdrop-filter: blur(4px)",
   browser: "Safari 9",
   canuse: 1,
   label: "use",
};
supported.css.backdropFilter = {
   supported: CSS.supports('backdrop-filter: blur(4px)'),
   description: "backdrop-filter: blur(4px)",
   browser: "Chrome 69, Firefox 103, Opera 64 ... waiting on Safari",
   canuse: 1,
   label: "begin using",
};
supported.css.displayContents = {
   supported: CSS.supports('display: contents'),
   description: "<code>display: contents</code>",
   browser: "Chrome 89, Safari 11.1, Firefox 62",
   canuse: 1,
   label: "begin using",
};
supported.css.systemUI = {
   supported: document.fonts.check('12px system-ui'),
   description: "<code>font-family: system-ui</code>",
   browser: "",
   canuse: 2,
   label: "use",
};
supported.css.uiRounded = {
   supported: document.fonts.check('12px ui-rounded'),
   description: "<code>font-family: ui-rounded</code>",
   browser: "Safari; no other?",
   canuse: 1,
   label: "?",
};
supported.css.uiSerif = {
   supported: document.fonts.check('12px ui-serif'),
   description: "<code>font-family: ui-serif</code>",
   browser: "Safari; no other?",
   canuse: 1,
   label: "?",
};
supported.css.scrollSnapType = {
   supported: CSS.supports('scroll-snap-type: x mandatory'),
   description: `Scroll Snap`,
   browser: "Safari 11, Chrome 69, Edge 79, Firefox 68",
   canuse: 2,
 };
 supported.css.scrollSnapStop = {
   supported: CSS.supports('scroll-snap-stop: always'),
   description: `<code>scroll-snap-stop</code>`,
   browser: "Safari 15",
   canuse: 0,
   label: "waiting"
 };
supported.css.backdrop = {
   supported: CSS.supports('selector(::backdrop)'),
   description: "::backdrop",
   canuse: 2,
   label: "use with polyfill",
};
supported.css.touchAction = {
   supported: CSS.supports('touch-action: none'),
   description: `touch-action: none;`,
   browser: "Safari 13",
   canuse: 2,
   label: "begin using"
};
supported.css.clipPathPath = {
   supported: CSS.supports('clip-path: path("M 0 0 L 100 0 L 100 100")'),
   description: `clip-path: path("M 0 0 L 100 0 L 100 100")`,
   browser: "Chrome 88, Safari 13.1 (-webkit-: Safari 10)",
   canuse: 2,
   label: "use with -webkit"
 };
supported.css.clamp = {
   supported: CSS.supports('font-size', 'clamp(1rem, 5vw, 2rem)'),
   description: "clamp(1rem, 5vw, 2rem)",
   browser: "Safari 13.1, Chrome 79",
   canuse: 2,
   label: ""
};
supported.css.is = {
   supported: CSS.supports('selector(:is(.highlight))'),
   description: ":is(.highlight)",
   browser: "Safari 14",
   canuse: 0,
   label: "waiting"
};
supported.css.where = {
   supported: CSS.supports('selector(:where(.highlight))'),
   description: ":where(.highlight)",
   browser: "Safari 14",
   canuse: 0,
   label: "waiting"
};
supported.css.scrollbarThumb = {
   supported: CSS.supports('selector(::-webkit-scrollbar-thumb)'),
   description: "::-webkit-scrollbar-thumb",
   canuse: 1,
   label: "begin using"
};
supported.css.focusVisible = {
   supported: CSS.supports('selector(:focus-visible)'),
   description: ":focus-visible",
   browser: "Safari 15.4",
   canuse: 1,
   label: "begin using"
};
supported.css.accentColor = {
   supported: CSS.supports('accent-color', 'fuchsia'),
   description: "accent-color: fuchsia;",
   browser: "Safari 15.4",
   canuse: 1,
   label: "begin using"
};
supported.css.modal = {
   supported: CSS.supports('selector(:modal)'),
   description: "<code>:modal</code>",
   browser: "Safari 15.6, Chrome 105, Firefox 103",
   canuse: 1,
};

// waiting
supported.css.inset = {
   supported: CSS.supports('inset: 0'),
   description: `<code>inset: 0;</code>`,
   browser: "Safari 14.1, iOS 14.5, Chrome 87",
   canuse: 0,
   label: "waiting",
};
supported.css.scrollPadding = {
   supported: CSS.supports('scroll-padding: 1em'),
   description: `scroll-padding: 1em`,
   browser: "Safari 14.1",
   canuse: 0,
   label: "waiting",
};
supported.css.aspectRatio = {
   supported: CSS.supports('aspect-ratio', '1 / 1'),
   description: "aspectRatio: 1 / 1;",
   browser: "Safari 15, Chrome 88, Firefox 89",
   canuse: 0,
   label: "waiting",
};
supported.css.logicalProperties = {
   supported: CSS.supports('margin-block: 1em'),
   description: `Logical Properties (e.g. <code>margin-block: 1em</code>)`,
   browser: "Chrome 89, Safari 15",
   canuse: 0,
   label: "waiting",
};
supported.css.cascadeLayer = {
   supported: "CSSLayerStatementRule" in window,
   description: "Cascade Layers: <code>@layer</code>",
   browser: "Safari 15.4, Chrome 99, Firefox 97, Samsung Internet 18",
   canuse: 0,
   label: "waiting",
};
supported.css.overscrollBehavior = {
   supported: CSS.supports('overscroll-behavior: none'),
   description: `overscroll-behavior: none`,
   browser: "Safari 16",
   canuse: 1,
   label: "begin using",
};
supported.css.scrollBehaviorSmooth = {
   supported: CSS.supports('scroll-behavior: smooth'),
   description: `scroll-behavior: smooth`,
   browser: "Safari 15.4",
   canuse: 1,
   label: "begin using",
};
supported.css.mask = {
   supported: CSS.supports('mask: url(#image)'),
   description: `mask: url(#image);`,
   browser: "Firefox 53, Safari 15.4; waiting on Chrome",
   canuse: 2,
   label: "use with -webkit",
};
supported.css.offsetPath = {
   supported: CSS.supports('offset-path: path("M 0 0 L 100 0 L 100 100")'),
   description: `Motion Path (<code>offset-path: path("M 0 0 L 100 0 L 100 100")</code>`,
   browser: "Safari 16",
   canuse: 0,
   label: "waiting",
};
supported.css.has = {
   supported: CSS.supports('selector(:has(.highlight))'),
   description: ":has(.highlight)",
   browser: "Safari 15.4, Chrome 105, Opera 91 ... waiting on Firefox",
   canuse: -1,
   label: "awaiting support",
};
supported.css.containerQuery = {
   supported: "CSSContainerRule" in window,
   description: "Container Queries",
   browser: "Chrome 105, Safari 16, Opera 91 ... waiting on Firefox",
   canuse: -1,
   label: "awaiting support",
};
supported.css.containerUnits = {
   supported: CSS.supports('width: 50cqw'),
   description: "Container Query units: <code>cqw</code>, <code>cqh</code>",
   browser: "Chrome 105, Safari 16, Opera 91 ... waiting on Firefox",
   canuse: -1,
   label: "awaiting support",
};
supported.css.dynamicUnits = {
   supported: CSS.supports('width: 50cqw'),
   description: "Dynamic viewport units <code>svh</code>, <code>lvh</code>, <code>dvh</code>",
   browser: "Safari 15.4, Firefox 101, Chrome 108 ... waiting on Edge, Opera",
   canuse: -1,
   label: "awaiting support",
};
supported.css.keyboardAPI = {
   supported: CSS.supports('margin-bottom: env(keyboard-inset-height)'),
   description: "Keyboard API <code>env(keyboard-inset-height)</code>",
   browser: "... waiting on Safari, Firefox",
   canuse: -1,
   label: "awaiting support",
};
supported.css.scrollTimeline = {
   supported: false,
   description: "<code>@scroll-timeline</code>",
   browser: "... waiting on all major browsers",
   canuse: -1,
   label: "awaiting support",
};
supported.css.nest = {
   supported: false,
   description: "<code>@nest</code>",
   browser: "... waiting on all major browsers",
   canuse: -1,
   label: "awaiting support",
};





let showSupport = false;
toggles.forEach(toggle => {
   toggle.addEventListener("change", () => {
      showSupport = toggle.id != "toggle-can-use"
      console.log("toggle show support", showSupport)
      updateLists()
   })
})


document.addEventListener("DOMContentLoaded", function() {
   setTimeout(updateLists, 100)
})

function updateLists() {
   fillList(htmlList, supported.html)
   fillList(jsList, supported.js)
   fillList(cssList, supported.css)
   fillList(browserList, supported.browser)
}

function fillList(list, object) {
   list.innerHTML = "";
   Object.keys(object).forEach((key, k) => {
      const li = document.createElement("li");

      // labels
      let canuse = "";
      if (object[key].canuse == -1) canuse = "waiting-on-support"
      if (object[key].canuse ==   0) canuse = "waiting"
      if (object[key].canuse == +1) canuse = "use-carefully"
      if (object[key].canuse == +2) canuse = "can-use"

      li.innerHTML = `
         <span class="label ${ canuse }">${ object[key].label || "" }</span>
         ${ object[key].description }
         ${ object[key].browser ? `<small>(${object[key].browser})<small>` : "" }
      `
      if (object[key].supported) li.classList.add("supported")
      if (object[key].canuse)      li.classList.add("canuse")
      if (showSupport)                li.classList.add("show-support")

      list.appendChild(li)
   })
}




// supported.js.windowCSS = {
//    supported: window.CSS,
//    description: "window.CSS"
// };


// supported.css.cssSupports = {
//    supported: CSS.supports,
//    description: "CSS @supports rule"
// };
// supported.css.redBgWhiteText = {
//    supported: CSS.supports("(background-color: red) and (color: white)"),
//    description: "Test: SupportsA and SupportsB <br>background-color: red; <br>& color: white;"
// };
// supported.css.minWidth = {
//    supported: window.matchMedia("(min-width: 600px)").matches,
//    description: "@media (min-width: 600px)"
// };
// supported.css.maxAspectRatio = {
//    supported: window.matchMedia("(max-aspect-ratio: 3/4)").matches,
//    description: "@media (max-aspect-ratio: 3/4)"
// };
// supported.css.orientationLandscape = {
//    supported: window.matchMedia("(orientation: landscape)").matches,
//    description: "@media (orientation: landscape)"
// };
// supported.css.orientationPortrait = {
//    supported: window.matchMedia("(orientation: portrait)").matches,
//    description: "@media (orientation: portrait)"
// };
// supported.css.displayFlex = {
//    supported: CSS.supports('display', 'flex'),
//    description: "display: flex;"
// };
// supported.css.min = {
//    supported: CSS.supports('width', 'min(100%, 500px)'),
//    description: "min(100%, 500px)"
// };
// supported.css.max = {
//    supported: CSS.supports('width', 'max(100%, 500px)'),
//    description: "max(100%, 500px)"
// };
