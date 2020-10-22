(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{108:function(e,a,t){},109:function(e,a,t){},113:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(13),c=t.n(l),i=(t(97),t(98),t(15)),o=t(34),s=t(16),u=t(141),m=t(143),d=t(148);function g(e){return r.a.createElement(d.a,{position:"relative",display:"inline-flex"},r.a.createElement(u.a,Object.assign({variant:"static"},e)),r.a.createElement(d.a,{top:0,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center"},r.a.createElement(m.a,{variant:"caption",component:"div",color:"textSecondary"},"".concat(Math.round(e.value),"%"))))}function E(){var e=r.a.useState(10),a=Object(i.a)(e,2),t=a[0],n=a[1];return r.a.useEffect((function(){var e=setInterval((function(){n((function(e){return e>=100?10:e+10}))}),800);return function(){clearInterval(e)}}),[]),r.a.createElement(g,{value:t})}function f(){var e=Object(o.a)(["\n  query AnimeQuery($arg: String!){\n    top(subtype: $arg){\n      mal_id\n      rank\n      title\n      image_url\n      url\n    }\n  }\n"]);return f=function(){return e},e}var v=Object(s.gql)(f());var y=function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=(a[0],a[1],Object(s.useQuery)(v,{variables:{arg:"upcoming"}})),l=t.loading,c=t.error,o=t.data;return l?r.a.createElement("div",{className:"reload"},r.a.createElement(E,null)):c?r.a.createElement("p",null,"Error :("):(console.log(o.top.slice(0,10)),r.a.createElement("div",{className:"top"},o.top.slice(0,10).map((function(e){return r.a.createElement("div",{target:"_blank",className:"animeCard"},r.a.createElement("a",{href:e.url,target:"_blank"},r.a.createElement("img",{src:e.image_url,alt:""}),r.a.createElement("p",null,e.title),r.a.createElement("div",{className:"card__rank"},e.rank)))}))))},b=(t(108),t(144));t(109);var p=function(){return r.a.createElement("div",{className:"nav"},r.a.createElement("div",{className:"nav__container"},r.a.createElement(b.a,{className:"fas fa-dragon"}),r.a.createElement("h2",null,"C2Eanime")))};var O=function(){return r.a.createElement("div",{className:"banner"},r.a.createElement(p,null))};function j(){var e=Object(o.a)(["\n    query AnimeQuery($id: String!){\n      anime(animeId: $id){\n        trailer_url\n      }\n    }\n    "]);return j=function(){return e},e}function N(){var e=Object(o.a)(["\n  query AnimeGenreQuery($arg: String!){\n    genres(genreId: $arg){\n      mal_id\n      title\n      image_url\n      url\n    }\n  }\n  "]);return N=function(){return e},e}var _=Object(s.gql)(N()),h=Object(s.gql)(j());var S=function(e){var a,t,l,c=e.genreId;console.log(c.toString());var o=Object(n.useState)(c.toString()),u=Object(i.a)(o,2),m=u[0],d=u[1],g=Object(n.useState)(""),f=Object(i.a)(g,2),v=f[0],y=f[1],p=Object(n.useState)(""),O=Object(i.a)(p,2),j=(O[0],O[1],Object(n.useState)(!0)),N=Object(i.a)(j,2),S=(N[0],N[1],Object(s.useLazyQuery)(h)),C=Object(i.a)(S,2),k=C[0],A=C[1],T=(A.loading,A.data);console.log("lazydata",T),Object(n.useEffect)((function(){d(c.toString())}),[c]),console.log(">>>>>>>>>>>>>>>>",c);var x=Object(s.useQuery)(_,{variables:{arg:m}}),B=x.loading,q=x.error,w=x.data;return(null===T||void 0===T||null===(a=T.anime)||void 0===a?void 0:a.trailer_url)&&v!==(null===T||void 0===T||null===(t=T.anime)||void 0===t?void 0:t.trailer_url)&&(console.log("in if condition :",T),y(T.anime.trailer_url)),B?r.a.createElement("div",{className:"reload"},r.a.createElement(E,null)):q?r.a.createElement("p",null,"Error :("):(console.log("genre data",w,m),r.a.createElement("div",{className:"genres"},r.a.createElement("div",{style:{display:"none"},className:"trailer"},r.a.createElement("iframe",{src:v}),r.a.createElement("button",{onClick:function(e){y(""),k({variables:{id:""}}),document.getElementsByTagName("iframe")[0].setAttribute("src",""),document.getElementsByClassName("trailer")[0].style.display="none"},className:"toggler"},r.a.createElement(b.a,{className:"fas fa-window-close"}))),r.a.createElement("div",{className:"genres__container"},null===(l=w.genres)||void 0===l?void 0:l.map((function(e){return r.a.createElement("div",{className:"animeCard"},r.a.createElement("img",{src:e.image_url,alt:""}),r.a.createElement("p",null,e.title),r.a.createElement("div",{className:"card__info"},r.a.createElement("a",{onClick:function(a){a.preventDefault(),k({variables:{id:e.mal_id}}),document.getElementsByClassName("trailer")[0].style.display="block",document.getElementsByTagName("iframe")[0].setAttribute("src","".concat(v))},href:""},"Trailer"),r.a.createElement("a",{href:e.url,target:"_blank"},"Learn more")))})))))};function C(){var e=Object(o.a)(["\n    query AnimeQuery($id: String!){\n      anime(animeId: $id){\n        trailer_url\n      }\n    }\n    "]);return C=function(){return e},e}function k(){var e=Object(o.a)(["\n  query AnimeGenreQuery($arg: String!){\n    schedule(day: $arg){\n      mal_id\n      title\n      image_url\n      url\n    }\n  }\n  "]);return k=function(){return e},e}var A=Object(s.gql)(k()),T=Object(s.gql)(C());var x=function(e){var a,t,l,c=e.day;console.log(c.toString());var o=Object(n.useState)(c),u=Object(i.a)(o,2),m=u[0],d=u[1],g=Object(n.useState)(""),f=Object(i.a)(g,2),v=f[0],y=f[1],p=Object(n.useState)(""),O=Object(i.a)(p,2),j=(O[0],O[1],Object(n.useState)(!0)),N=Object(i.a)(j,2),_=(N[0],N[1],Object(s.useLazyQuery)(T)),h=Object(i.a)(_,2),S=h[0],C=h[1],k=(C.loading,C.data);console.log("lazydata",k),Object(n.useEffect)((function(){d(c)}),[c]),console.log(">>>>>>>>>>>>>>>>",c);var x=Object(s.useQuery)(A,{variables:{arg:m}}),B=x.loading,q=x.error,w=x.data;return(null===k||void 0===k||null===(a=k.anime)||void 0===a?void 0:a.trailer_url)&&v!==(null===k||void 0===k||null===(t=k.anime)||void 0===t?void 0:t.trailer_url)&&(console.log("in if condition :",k),y(k.anime.trailer_url)),B?r.a.createElement("div",{className:"reload"},r.a.createElement(E,null)):q?r.a.createElement("p",null,"Error :("):(console.log("scheduledata",w,m),r.a.createElement("div",{className:"genres"},r.a.createElement("div",{style:{display:"none"},className:"trailer"},r.a.createElement("iframe",{src:v}),r.a.createElement("button",{onClick:function(e){y(""),S({variables:{id:""}}),document.getElementsByTagName("iframe")[1].setAttribute("src",""),document.getElementsByClassName("trailer")[1].style.display="none"},className:"toggler"},r.a.createElement(b.a,{className:"fas fa-window-close"}))),r.a.createElement("div",{className:"genres__container"},null===(l=w.schedule)||void 0===l?void 0:l.map((function(e){return r.a.createElement("div",{className:"animeCard"},r.a.createElement("img",{src:e.image_url,alt:""}),r.a.createElement("p",null,e.title),r.a.createElement("div",{className:"card__info"},r.a.createElement("a",{onClick:function(a){a.preventDefault(),S({variables:{id:e.mal_id}}),console.log("trailers",document.getElementsByClassName("trailer")),console.log("iframes",document.getElementsByClassName("trailer")),document.getElementsByClassName("trailer")[1].style.display="block",document.getElementsByTagName("iframe")[1].setAttribute("src","".concat(v))},href:""},"Trailer"),r.a.createElement("a",{href:e.url,target:"_blank"},"Learn more")))})))))},B=t(145),q=t(147),w=t(149),I=t(84),M=t.n(I),Q=["Action","Adventure","Cars","Comedy","Dementia","Demons","Mystery","Dram","Ecchi","Fantasy","Game","Hentai","Historical","Horror","Kids","Magic","Martial Arts","Mecha","Music","Parody","Samurai","Romance","School","Sci Fi","Shoujo","Shoujo Ai","Shounen","Shounen Ai","Space","Sports","Super Power","Vampire","Yaoi","Yuri","Harem","Slice Of Life","Supernatural","Military","Police","Psychological","Seinen Josei Doujinshi"],$=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];var P=function(){var e=Object(n.useState)("sunday"),a=Object(i.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("Action"),o=Object(i.a)(c,2),s=o[0],u=o[1],m=r.a.useState(null),d=Object(i.a)(m,2),g=d[0],E=d[1],f=Boolean(g),v=Object(n.useState)([]),y=Object(i.a)(v,2),b=(y[0],y[1],function(e){if(E(null),Q.indexOf(e.currentTarget.innerText)>=0){u(e.currentTarget.innerText);Q.indexOf(e.currentTarget.innerText)}});return r.a.createElement("div",{className:"left"},r.a.createElement("h1",null,"Genres"),r.a.createElement("div",{className:"genres__selector"},r.a.createElement(B.a,{"aria-label":"more","aria-controls":"long-menu","aria-haspopup":"true",onClick:function(e){E(e.currentTarget),console.log(e.currentTarget)}},s,r.a.createElement(M.a,null)),r.a.createElement(q.a,{id:"long-menu",anchorEl:g,keepMounted:!0,open:f,onClose:b,PaperProps:{style:{maxHeight:216,width:"20ch"}}},Q.map((function(e){return r.a.createElement(w.a,{key:e,selected:"Pyxis"===e,onClick:b},e)})))),r.a.createElement(S,{genreId:Q.indexOf(s)+1}),r.a.createElement("h1",null,"Schedule"),r.a.createElement("ul",{className:"schedule__days"},$.map((function(e){return r.a.createElement("li",{className:"day",onClick:function(e){l(e.target.innerText),function(e){for(var a=document.getElementsByClassName("day"),t=0;t<a.length;t++)a[t].style.backgroundColor="transparent";e.currentTarget.style.backgroundColor="#ffff00"}(e)}},e)}))),r.a.createElement(x,{day:t}))};var D=function(){return r.a.createElement("div",{className:"right"},r.a.createElement("h1",null,"TOP Upcoming"),r.a.createElement(y,null))},H=new s.ApolloClient({uri:"https://anime-react-app.herokuapp.com/graphql",cache:new s.InMemoryCache});var L=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(O,null),r.a.createElement(s.ApolloProvider,{client:H},r.a.createElement("div",{className:"app__body"},r.a.createElement(P,null),r.a.createElement(D,null))),r.a.createElement("div",{className:"app__body"}))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root"))},92:function(e,a,t){e.exports=t(113)},97:function(e,a,t){},98:function(e,a,t){}},[[92,1,2]]]);
//# sourceMappingURL=main.53c97626.chunk.js.map