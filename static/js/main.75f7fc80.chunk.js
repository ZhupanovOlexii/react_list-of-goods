(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(7),c=n.n(r),l=n(2),i=n(3),s=n(5),u=n(4),p=(n(13),n(1)),m=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={goodsList:Object(p.a)(t.props.goodsList),minLengthOfGood:1},t.reverse=function(){t.setState((function(t){var e=t.goodsList;return{goodsList:Object(p.a)(e).reverse()}}))},t.alphabeticallySort=function(){t.setState((function(t){var e=t.goodsList;return{goodsList:Object(p.a)(e).sort((function(t,e){return t.localeCompare(e)}))}}))},t.reset=function(){t.setState({goodsList:Object(p.a)(t.props.goodsList),minLengthOfGood:1})},t.sortByLength=function(){t.setState((function(t){var e=t.goodsList;return{goodsList:Object(p.a)(e).sort((function(t,e){return t.length-e.length}))}}))},t.filterBySelectedLength=function(e){var n=e.target.value;t.setState({goodsList:t.props.goodsList.filter((function(t){return t.length>=n})),minLengthOfGood:n})},t}return Object(i.a)(n,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("ul",null,this.state.goodsList.map((function(t){return o.a.createElement("li",{key:t},t)}))),o.a.createElement("button",{type:"button",onClick:this.reverse},"Reverse"),o.a.createElement("button",{type:"button",onClick:this.alphabeticallySort},"Sort alphabetically"),o.a.createElement("button",{type:"button",onClick:this.reset},"Reset"),o.a.createElement("button",{type:"button",onClick:this.sortByLength},"Sort by length"),o.a.createElement("select",{value:this.state.minLengthOfGood,onChange:this.filterBySelectedLength},o.a.createElement("option",{value:"1"},"1"),o.a.createElement("option",{value:"2"},"2"),o.a.createElement("option",{value:"3"},"3"),o.a.createElement("option",{value:"4"},"4"),o.a.createElement("option",{value:"5"},"5"),o.a.createElement("option",{value:"6"},"6"),o.a.createElement("option",{value:"7"},"7"),o.a.createElement("option",{value:"8"},"8"),o.a.createElement("option",{value:"9"},"9"),o.a.createElement("option",{value:"10"},"10")))}}]),n}(o.a.Component),g=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],h=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={button:!0},t.clickToStart=function(){t.setState({button:!1})},t}return Object(i.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Goods"),this.state.button?o.a.createElement("button",{type:"button",onClick:this.clickToStart},"Start"):o.a.createElement(m,{goodsList:g}))}}]),n}(o.a.Component);c.a.render(o.a.createElement(h,null),document.getElementById("root"))},8:function(t,e,n){t.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.75f7fc80.chunk.js.map