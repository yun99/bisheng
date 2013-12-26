/*! BiSheng.js 2013-12-26 04:55:51 PM CST */

!function(a){function b(a,b){"object"==typeof module&&module.exports?module.exports=a():"function"==typeof define&&define.amd?define(a):"function"==typeof define&&define.cmd?define(a):"undefined"!=typeof KISSY?KISSY.add(a):b&&b()}b(a,function(){window.BiSheng=a()})}(function(){var a=function(){function a(){clearTimeout(i);for(var b=0;b<l.length;b++)l[b]&&l[b]();i=setTimeout(a,50)}function b(a,b,c){function f(){var f=e(a,h,c?[g]:[],c);f&&f.length&&(b(f,a,h),h=d(a,c,[g]))}var g=j++,h=d(a,c,[g]);return f.data=a,l.push(f),h}function c(a,b){function c(a){for(var b=0;b<l.length;b++)a(l[b])&&l.splice(b--,1)}"function"==typeof b&&c(function(c){return c===b&&c.data===a}),"function"==typeof a&&c(function(a){return a===b}),void 0!==a&&c(function(b){return b.data===a})}function d(a,b,c){var e,f,g=a.constructor();if(c=c||[],null===a||"object"!=typeof a)return a;b&&(g.$path=c.join("."));for(e in a)f=a[e],void 0!==f&&(f.constructor===Object||f.constructor===Array?f=d(f,b,c.concat(e)):b&&(f=new Object(f),f.$path=c.concat(e).join("."))),g[e]=f;return g}function e(a,b,c,d){function e(a,b){return function(){for(var c=a,d=1;d<b.length-1;d++)c=c[b[d]];return c}}var i=i||[];if(c=c||[],("object"!=typeof a||"object"!=typeof b)&&i.length)return i;if(f(a,b,c,i),g(a,b,c,i),h(a,b,c,i),d)for(var j,k=0;k<i.length;k++)j=i[k],j.root=a,j.context=e(a,j.path)(),j.getContext=e;return i.length?i:void 0}function f(a,b,c,d,e){var g,h;for(g in a)/\$guid|\$path|\$blocks|\$helpers/.test(g)||(h=a[g],g in b?void 0!==h&&void 0!==b[g]&&h.constructor===b[g].constructor&&(h.constructor===Object||h.constructor===Array)&&f(h,b[g],c.concat(g),d,e):d.push({type:e||k.ADD,path:c.concat(g),value:a[g]}));return d.length?d:void 0}function g(a,b,c,d){return f(b,a,c,d,k.DELETE)}function h(a,b,c,d){var e,f;for(e in a)/\$guid|\$path|\$blocks|\$helpers/.test(e)||(f=a[e],e in b&&(void 0!==f||void 0!==b[e])&&(void 0!==f&&void 0!==b[e]&&f.constructor===b[e].constructor?f.constructor!==Object&&f.constructor!==Array?f.valueOf()!==b[e].valueOf()&&d.push({type:k.UPDATE,path:c.concat(e),value:f,oldValue:b[e]}):h(f,b[e],c.concat(e),d):d.push({type:k.UPDATE,path:c.concat(e),value:f,oldValue:void 0!==b[e]?b[e].valueOf():b[e]})));return d.length?d:void 0}var i,j=1,k={ADD:"add",DELETE:"delete",UPDATE:"update"},l=[];return i=setTimeout(a,50),{TYPES:k,watch:b,unwatch:c,clone:d,diff:e,letMeSee:a}}();window.JSON||(window.JSON={stringify:function(a){var b,c=[];for(var d in a)b="string"==typeof a[d]?'"'+a[d]+'"':a[d],c.push('"'+d+'":'+b);return"{"+c.join(",")+"}"}});var b={create:function(a){var b=Handlebars.Utils.escapeExpression,c=b("<script");for(var d in a)void 0!==a[d]&&(c+=" "+d+b('="')+a[d]+b('"'));return c+=b("></script>")},getLocatorRegExp:function(){return/(<script(?:.*?)><\/script>)/gi},find:function(a,b){var c="script";for(var d in a)c+="["+d+'="'+a[d]+'"]';return $(c,b)},parse:function(a,b){return $(a).attr(b)},update:function(a,b,c){if("script"===a.nodeName.toLowerCase()&&a.getAttribute("guid")&&"start"===a.getAttribute("slot")&&(c||!a.getAttribute("type")))for(var d in b)a.setAttribute(d,b[d]);return a},parseTarget:function(a){for(var b,c=$(a).attr("guid"),d=[],e=a;e=e.nextSibling;)if(b=$(e),"script"===e.nodeName.toLowerCase()&&b.attr("guid")){if(b.attr("guid")===c&&"end"===b.attr("slot"))break}else d.push(e);return $(d)}},c={create:function(a){var b=Handlebars.Utils.escapeExpression;return b("<!-- ")+b(JSON.stringify(a))+b(" -->")},getLocatorRegExp:function(){return/(<!--\s*({(?:.*?)})\s*-->)/gi},find:function(a,b){return $(b).add("*",b).contents().filter(function(){return 8===this.nodeType}).filter(function(b,c){try{var d=new Function("return "+c.nodeValue)();for(var e in a)if(a[e]!==d[e])return!1;return!0}catch(f){return!1}})},parse:function(a,b){var c=new Function("return "+a.nodeValue)();return b?c[b]:c},update:function(a,b,c){if(8===a.nodeType){var d=this.parse(a);if(d.guid&&"start"===d.slot&&(c||!d.type)){for(var e in b)d[e]=b[e];a.nodeValue=JSON.stringify(d)}}return a},parseTarget:function(a){for(var b=this.parse(a),c=[],d=a;d=d.nextSibling;)if(8===d.nodeType){var e=this.parse(d);if(e.guid===b.guid&&"end"===e.slot)break}else c.push(d);return $(c)}},d=[b,c],e=-1!==location.search.indexOf("locator=script")?b:-1!==location.search.indexOf("locator=comment")?c:d[0],f=function(){var a=1,b=Handlebars.helpers["if"];Handlebars.registerHelper("if",function(a,c){return b.call(this,void 0!==a?a.valueOf():a,c)});var c=Handlebars.helpers.blockHelperMissing;return Handlebars.registerHelper("blockHelperMissing",function(a,b){return c.call(this,void 0!==a?a.valueOf():a,b)}),Handlebars.registerHelper("$lastest",function(a){return a&&a.$path||this&&this.$path}),{handle:function(a,b,c,d,e){return 2===arguments.length&&(d=b,b=void 0,e={}),3===arguments.length&&(d=b,e=c,b=c=void 0),this[a.type]&&this[a.type](a,b,c,d,e),a},program:function(a,b,c,d,e){for(var f=0;f<a.statements.length;f++)this.handle(a.statements[f],a.statements,f,d,e)},mustache:function(b,c,d,f,g){if(!b.binded){var h=[];b.isHelper?b.params.forEach(function(a){"ID"===a.type&&h.push(a.string)}):h.push(b.id.string),h=h.join(" ");var i,j,k={guid:a,slot:"",type:"",path:"{{$lastest "+h+"}}",isHelper:!!b.isHelper};k.slot="start",i=e.create(k),j=Handlebars.parse(i).statements,j[1].binded=!0,c.splice.apply(c,[d,0].concat(j)),i=e.create({guid:k.guid,slot:"end"}),j=Handlebars.parse(i).statements,c.splice.apply(c,[d+4,0].concat(j)),g&&(g[a]={constructor:Handlebars.AST.ProgramNode,type:"program",statements:[b]}),a++,b.binded=!0}},block:function(b,c,d,f,g){if(!b.binded){var h,i;0===b.mustache.params.length?(h="",i=b.mustache.id.string):(h=b.mustache.id.string,i=b.mustache.params[0].string);var j,k,l={guid:a,slot:"",type:"block",path:"{{$lastest "+i+"}}",helper:h};l.slot="start",j=e.create(l),k=Handlebars.parse(j).statements,k[1].binded=!0,c.splice.apply(c,[d,0].concat(k)),j=e.create({guid:l.guid,slot:"end"}),k=Handlebars.parse(j).statements,c.splice.apply(c,[d+4,0].concat(k)),f&&(f[a]={constructor:Handlebars.AST.ProgramNode,type:"program",statements:[b]}),a++,b.binded=!0,this.handle(b.program||b.inverse,c,d,f,g)}}}}(),g=function(){function a(a,c){b(a),g(a,c)}function b(a){switch(a.nodeType){case 1:case 9:case 11:d(a),f(a);break;case 3:c(a)}}function c(a){var b=a.textContent||a.innerText||a.nodeValue;$("<div>"+b+"</div>").contents().each(function(a,b){e.update(b,{type:"text"})}).replaceAll(a)}function d(a){var b=e.getLocatorRegExp(),c=/([^;]*?): ([^;]*)/gi,d=[];$.each(function(){for(var b=[],c=a.attributes,d=0;d<c.length;d++)b.push(c[d]);return b}(),function(f,g){if(g.specified){var h,i,j=g.nodeName,k=g.nodeValue;if("style"===j)for(c.exec("");i=c.exec(k);)for(b.exec("");h=b.exec(i[2]);)d.push(e.update($("<div>"+h[1]+"</div>").contents()[0],{type:"attribute",name:g.nodeName.toLowerCase(),css:$.trim(i[1])}));else for(b.exec("");h=b.exec(k);)d.push(e.update($("<div>"+h[1]+"</div>").contents()[0],{type:"attribute",name:g.nodeName.toLowerCase()},!0));d.length&&(k=k.replace(b,""),g.nodeValue=k,$(d).each(function(b,c){var d=e.parse(c,"slot");"start"===d&&$(a).before(c),"end"===d&&$(a).after(c)}))}})}function f(a){$(a.childNodes).each(function(a,c){b(c)})}function g(a,b){e.find({slot:"start",type:"attribute",name:"value"},a).each(function(a,c){var d=e.parse(c,"path").split("."),f=e.parseTarget(c)[0];$(f).on("change keyup",function(a){h(b,d,a.target)})}),e.find({slot:"start",type:"attribute",name:"checked"},a).each(function(a,c){for(var d=e.parse(c,"path").split("."),f=e.parseTarget(c)[0],g=b,h=1;h<d.length;h++)g=g[d[h]];(void 0===g||g.valueOf()===!1||"false"===g.valueOf())&&$(f).prop("checked",!1),void 0===g||g.valueOf()!==!0&&"true"!==g.valueOf()&&"checked"!==g.valueOf()||$(f).prop("checked",!0),$(f).on("change",function(a,c){c||"radio"!==a.target.type||$('input:radio[name="'+a.target.name+'"]').not(a.target).trigger("change",c=!0),i(b,d,a.target)})})}function h(a,b,c){for(var d=1;d<b.length-1;d++)a=a[b[d]];var e,f=$(c);switch(c.nodeName.toLowerCase()){case"input":switch(c.type){case"text":f.data("user is editing",!0),e=f.val();break;case"radio":case"checkbox":return;default:e=f.val()}break;case"select":e=f.val();break;case"textarea":e=f.val();break;default:e=f.val()}a[b[b.length-1]]=e}function i(a,b,c){for(var d=1;d<b.length-1;d++)a=a[b[d]];var e,f,g=$(c);switch(c.nodeName.toLowerCase()){case"input":switch(c.type){case"radio":e=g.prop("checked"),f=g.attr("name"),f&&e&&f in a&&(a[f]=g.val());break;case"checkbox":e=g.prop("checked")}}a[b[b.length-1]]=e}return{scan:a}}(),h=function(){function b(a,c,d){var f,g=e.find({slot:"start",path:c.path.join(".")});0===g.length&&c.context instanceof Array&&(c.path.pop(),c.context=c.getContext(c.root,c.path)(),b(a,c,d)),g.each(function(g,h){f=e.parse(h,"type"),b[f]&&b[f](h,a,c,d)})}function c(a){a.target.nodeType&&(a.target=[a.target]),a.target.forEach&&a.target.forEach(function(a){switch(a.nodeType){case 3:a.parentNode.scrollIntoView();break;case 1:a.scrollIntoView()}})}function d(a){a.target.nodeType&&(a.target=[a.target]),a.target.forEach&&a.target.forEach(function(a){switch(a.nodeType){case 3:$(a).wrap("<span>").parent().addClass("transition highlight"),setTimeout(function(){$(a).unwrap("<span>").removeClass("transition highlight")},500);break;case 1:$(a).addClass("transition highlight"),setTimeout(function(){$(a).removeClass("transition highlight")},500)}})}return b.text=function(a,b,c,d){var f,g=e.parse(a,"guid"),h=e.parse(a,"helper"),i=e.parseTarget(a);1===i.length&&3===i[0].nodeType?(b.target.push(i[0]),i[0].nodeValue=c.value):(f="true"===h?Handlebars.compile(d.$helpers[g])(c.context):c.value,$("<div>"+f+"</div>").contents().insertAfter(a).each(function(a,c){b.target.push(c)}),$(i).remove())},b.attribute=function(a,b,c,d){var f,g,h;b.target.push(f=e.parseTarget(a)[0]),h=$(f);var i=d.$blocks[e.parse(a,"guid")],j=i?Handlebars.compile(i)(c.context):c.value,k=function(){var a;return c.context[c.path[c.path.length-1]]=void 0!==c.oldValue?c.oldValue.valueOf():c.oldValue,a=i?Handlebars.compile(i)(c.context):c.oldValue,c.context[c.path[c.path.length-1]]=c.value,a}();switch(g=e.parse(a,"name")){case"class":h.removeClass(""+k).addClass(""+j);break;case"style":h.css(e.parse(a,"css"),j);break;case"value":h.val()===j||h.data("user is editing")||h.val(j),h.data("user is editing",!1);break;case"checked":h.prop(g,j),g=h.attr("name"),g&&h.prop("checked")&&g in c.context&&(c.context[g]=h.val());break;default:h.attr(g,function(a,b){return void 0===k?j:b!==k.valueOf()?b.replace(k,j):j})}},b.block=function(b,c,d,f){var h=e.parse(b,"guid"),i=f.$blocks[h],j=a.clone(d.context,!0,d.path.slice(0,-1)),k=Handlebars.compile(i)(j);k=$("<div>"+k+"</div>"),g.scan(k[0],d.context),k=k.contents();var l=e.parseTarget(b),m=l.length?l[l.length-1].nextSibling:b.nextSibling;k.length<l.length&&$(l.splice(k.length)).remove(),k.each(function(a,b){return l[a]?b.nodeType!==l[a].nodeType?(l[a].parentNode.insertBefore(b,l[a]),l[a].parentNode.removeChild(l[a]),c.target.push(b),void 0):3===b.nodeType&&b.nodeValue!==l[a].nodeValue?(l[a].nodeValue=b.nodeValue,void 0):8===b.nodeType&&b.nodeValue!==l[a].nodeValue?(l[a].nodeValue=b.nodeValue,void 0):1===b.nodeType&&b.outerHTML!==l[a].outerHTML?(l[a].parentNode.insertBefore(b,l[a]),l[a].parentNode.removeChild(l[a]),c.target.push(b),void 0):void 0:(m.parentNode.insertBefore(b,m),c.target.push(b),void 0)})},{handle:b,scrollIntoView:c,highlight:d}}(),i={version:"0.1.0",bind:function(b,c,d){var e=a.watch(b,function(a){$.each(a,function(a,c){var d={target:[]};h.handle(d,c,e),location.href.indexOf("scrollIntoView")>-1&&h.scrollIntoView(d,b),location.href.indexOf("highlight")>-1&&h.highlight(d,b)})},!0),i=Handlebars.parse(c);f.handle(i,void 0,void 0,e.$blocks={},e.$helpers={});var j=Handlebars.compile(i),k=j(e),l=$("<div>"+k+"</div>");return l.length&&g.scan(l[0],b),l=l.contents(),d?d.call(b,l)||b:l},unbind:function(b){return a.unwatch(b),this}};return i.Loop=a,i.Locators=d,i.Locator=e,i.AST=f,i.Scanner=g,i.Flush=h,i});
//# sourceMappingURL=dist/bisheng-min.map