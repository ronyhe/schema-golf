(this["webpackJsonpschema-golf"]=this["webpackJsonpschema-golf"]||[]).push([[0],{31:function(e,t,n){e.exports=n(71)},36:function(e,t,n){},37:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var r,a=n(3),o=n.n(a),c=n(27),l=n.n(c),u=(n(36),n(10)),s=(n(37),n(75)),i=n(28),m=n.n(i),d=n(29),v=n.n(d),h=n(30),p=n(72),f=n(73),b=n(74),j=n(76),E=m()();function y(e){return{datum:e,result:r.None}}function g(e){var t=Object(u.a)(e,2),n=t[0],r=t[1];return{shouldAccept:n.map(y),shouldReject:r.map(y),error:null}}!function(e){e[e.Good=0]="Good",e[e.Bad=1]="Bad",e[e.None=2]="None"}(r||(r={}));var O=Object(h.a)("result"),A=O(r.Bad);function k(e,t,n){try{var a=E.validate(e,n.datum),o=(t?a:!a)?r.Good:r.Bad;return O(o)(n)}catch(c){return A(n)}}function S(e,t){try{var n=v.a.parse(e),r=Object(p.a)(k)(n);return{error:null,shouldAccept:t.shouldAccept.map(r(!0)),shouldReject:t.shouldReject.map(r(!1))}}catch(a){return{error:"Cannot parse json5",shouldAccept:t.shouldAccept.map(A),shouldReject:t.shouldReject.map(A)}}}function w(e,t){return Object(h.a)("currentLevel",e,t)}var x=function(e){var t=e.text,n={color:R(e.result)};return o.a.createElement("div",{style:n},t)};function B(e){var t=e.datum,n=e.result;return{text:JSON.stringify(t,null,4),result:n}}var L=function(e){var t=e.level,n=e.onApplySchema,r=Object(a.useState)("{}"),c=Object(u.a)(r,2),l=c[0],s=c[1],i=null===t.error?null:o.a.createElement("h3",{style:{color:"red"}},t.error),m=o.a.createElement("textarea",{value:l,onChange:function(e){return s(e.target.value)},rows:20,cols:65});return o.a.createElement("div",null,i,m,o.a.createElement("button",{type:"button",onClick:function(){return n(l)}},"Try it out!"),o.a.createElement("div",null,o.a.createElement("h4",null,"Should Accept"),t.shouldAccept.map((function(e,t){var n=B(e),r=n.text,a=n.result;return o.a.createElement(x,{key:"".concat(t),text:r,result:a})}))),o.a.createElement("div",null,o.a.createElement("h4",null,"Should Reject"),t.shouldReject.map((function(e,t){var n=B(e),r=n.text,a=n.result;return o.a.createElement(x,{key:"".concat(t),text:r,result:a})}))))};function R(e){return e===r.Good?"green":e===r.Bad?"red":"black"}var C=function(e){var t=e.model,n=e.onChangeLevel,r=e.onApplySchema,a=t.levels,c=t.currentLevel;if(Object(s.a)(a))return o.a.createElement("div",null,"Empty game. No levels :(");var l=a.map((function(e,t){var r="Level ".concat(t+1);return o.a.createElement("button",{type:"button",key:r,onClick:function(){return n(t)}},r)}));return o.a.createElement("div",null,l,o.a.createElement(L,{level:a[c],onApplySchema:r}))},N={levels:[[["some string","some other string"],[5,{a:4}]],[[5,10],["5",{a:4}]],[[1,2,3,4,5,6,7,8,9,10],[-1,-2,-3,-4,-5,-6,-7,-8,-9,-10]],[[!0],[!1]],[[{a:1,b:2}],[{a:1},{b:2},{a:1,b:2,c:3}]],[[{serial:4},{name:"some name"}],[{serial:"some name"},{name:4},{name:"some name",serial:4}]]].map(g),currentLevel:0};var G=function(){var e=Object(a.useState)(N),t=Object(u.a)(e,2),n=t[0],r=t[1];return o.a.createElement(C,{model:n,onApplySchema:function(e){r((function(t){return function(e,t,n){return Object(f.a)(Object(b.a)("levels"),Object(j.a)(n,Object(p.a)(S)(t)),e)}(t,e,t.currentLevel)}))},onChangeLevel:function(e){return r(Object(p.a)(w)(e))}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.c10dab10.chunk.js.map