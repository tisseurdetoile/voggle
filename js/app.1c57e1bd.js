(function(e){function t(t){for(var r,o,u=t[0],s=t[1],a=t[2],d=0,b=[];d<u.length;d++)o=u[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&b.push(i[o][0]),i[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(b.length)b.shift()();return c.push.apply(c,a||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,u=1;u<n.length;u++){var s=n[u];0!==i[s]&&(r=!1)}r&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},i={app:0},c=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var a=0;a<u.length;a++)t(u[a]);var l=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0bd2":function(e,t,n){"use strict";n("9659")},"2e9f":function(e,t,n){"use strict";n("91c7")},"54d5":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),i={key:0},c={key:1},o={key:2},u=Object(r["f"])("h2",null,"A quoi voulez vous jouer ?",-1),s={class:"board"},a={key:3},l=Object(r["f"])("br",null,null,-1),d={class:"board"};function b(e,t,n,b,f,m){var j=Object(r["n"])("Choice"),p=Object(r["n"])("Timer"),O=Object(r["n"])("Dice");return Object(r["j"])(),Object(r["e"])(r["a"],null,[this.end?Object(r["d"])("",!0):(Object(r["j"])(),Object(r["e"])("h1",i,"Voggle")),this.end?(Object(r["j"])(),Object(r["e"])("div",c,[Object(r["f"])("button",{onClick:t[0]||(t[0]=function(){return m.resetGame&&m.resetGame.apply(m,arguments)})},"Rejouer")])):Object(r["d"])("",!0),null==this.game?(Object(r["j"])(),Object(r["e"])("div",o,[u,Object(r["f"])("div",s,[(Object(r["j"])(!0),Object(r["e"])(r["a"],null,Object(r["m"])(m.listGames,(function(e){return Object(r["j"])(),Object(r["c"])(j,{key:e.id,game:e,onMsgGameChoice:m.gameChoice},null,8,["game","onMsgGameChoice"])})),128))])])):Object(r["d"])("",!0),null!=this.game?(Object(r["j"])(),Object(r["e"])("div",a,[Object(r["g"])(p,{timer:180,onMsgTimeUp:m.endGame},null,8,["onMsgTimeUp"]),l,Object(r["f"])("div",d,[(Object(r["j"])(!0),Object(r["e"])(r["a"],null,Object(r["m"])(m.scrambleDices,(function(e){return Object(r["j"])(),Object(r["c"])(O,{key:e.id,letter:e},null,8,["letter"])})),128))])])):Object(r["d"])("",!0)],64)}n("b64b"),n("d81d"),n("4e82");var f={key:0,class:"sletter"};function m(e,t,n,i,c,o){return Object(r["j"])(),Object(r["e"])("div",{class:Object(r["h"])(["dice",o.textPosition])},[Object(r["f"])("span",{class:Object(r["h"])([{underline:o.isUnderline},"letter"])},Object(r["o"])(n.letter),3),"Q"==n.letter?(Object(r["j"])(),Object(r["e"])("span",f,"u")):Object(r["d"])("",!0)],2)}var j=["W","Z","N"],p=["horizontal","quart-clockwise","quart-anticlockwise","upside-down"],O={props:{letter:{type:String,required:!0}},computed:{isUnderline:function(){return-1!==j.indexOf(this.letter)},textPosition:function(){return p[Math.floor(Math.random()*p.length)]}}},h=(n("d6ed"),n("6b0d")),g=n.n(h);const v=g()(O,[["render",m],["__scopeId","data-v-307c64c3"]]);var y=v,C={class:"TimerContainer"},w={class:"loading-bar"};function T(e,t,n,i,c,o){return Object(r["j"])(),Object(r["e"])("div",C,[Object(r["f"])("div",w,[Object(r["f"])("div",{class:Object(r["h"])(["percentage",{red:o.isRed,yellow:o.isYellow,lessGreen:o.isLessGreen}]),style:Object(r["i"])({width:o.percent+"%"})},null,6)])])}n("a9e3");var G={props:{timer:{type:Number,required:!0}},emits:["msg-time-up"],data:function(){return{timerCount:this.timer,timerCountTot:this.timer}},computed:{isShow:function(){return this.timerCount>0},isRed:function(){return this.percent<=10||this.timerCount<=1},isYellow:function(){return this.percent<=20},isLessGreen:function(){return this.percent<=50},percent:function(){var e=this.timerCount/this.timerCountTot*100;return this.timerCount>1?e:100}},watch:{timerCount:{handler:function(e){var t=this;e>0?setTimeout((function(){t.timerCount--}),1e3):(console.log("End Timer"),this.$emit("msg-time-up"))},immediate:!0}}};n("689c");const M=g()(G,[["render",T],["__scopeId","data-v-8c0f97de"]]);var k=M;function E(e,t,n,i,c,o){var u=this;return Object(r["j"])(),Object(r["e"])("button",{onClick:t[0]||(t[0]=function(t){return e.$emit("msg-game-choice",u.game)})},Object(r["o"])(n.game),1)}var S={props:{game:{type:String,required:!0}},emits:["msg-game-choice"]};n("0bd2");const _=g()(S,[["render",E],["__scopeId","data-v-bb4ee614"]]);var A=_,I={boggle:{dices:[["L","E","N","U","Y","G"],["E","L","U","P","S","T"],["Z","D","V","N","E","A"],["S","D","T","N","O","E"],["A","M","O","R","I","S"],["F","X","R","A","O","I"],["M","O","Q","A","B","J"],["F","S","H","E","E","I"],["H","R","S","N","E","I"],["E","T","N","K","O","U"],["T","A","R","I","L","B"],["T","I","E","A","O","A"],["A","C","E","P","D","M"],["R","L","A","S","E","C"],["U","L","I","W","E","R"],["V","G","T","N","I","E"]]},foggle:{dices:[["5","0","6","9","7","8"],["6","3","5","1","2","4"],["8","7","6","5","0","9"],["4","5","2","6","3","1"],["5","2","6","4","3","1"],["1","8","2","0","9","7"],["4","7","8","1","0","2"],["9","0","1","2","4","3"],["4","5","2","6","1","3"],["4","2","3","0","9","1"],["2","1","4","3","6","5"],["6","3","4","5","7","8"],["6","3","4","5","7","8"],["6","9","0","8","7","5"],["7","2","9","1","0","8"],["7","2","9","1","0","8"]]}},P={name:"App",components:{Dice:y,Timer:k,Choice:A},data:function(){return{game:null,end:!1}},methods:{gameChoice:function(e){console.log("gameChoice",e),this.game=e},endGame:function(){console.log("endGame"),this.end=!0},resetGame:function(){console.log("resetGame"),this.end=!1,this.game=null}},computed:{getDices:function(){return I[this.game].dices},listGames:function(){return Object.keys(I)},scrambleDices:function(){return this.getDices.map((function(e){return{position:Math.random(),face:e[Math.floor(Math.random()*e.length)]}})).sort((function(e,t){return e.position-t.position})).map((function(e){return e.face}))}}};n("2e9f");const x=g()(P,[["render",b]]);var D=x;Object(r["b"])(D).mount("#app")},"689c":function(e,t,n){"use strict";n("b352")},"91c7":function(e,t,n){},9659:function(e,t,n){},b352:function(e,t,n){},d6ed:function(e,t,n){"use strict";n("54d5")}});
//# sourceMappingURL=app.1c57e1bd.js.map