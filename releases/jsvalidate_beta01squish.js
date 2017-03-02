// JavaScript Document

/* JSValidate preferences */
var errorTag = "span"; // which tag do you want to use. it must be one that opens and closes (div,span,p,b)
var errorClass = "jsvalidation"; // this is the css class name given to the tag above
var errorLocation = "afterEnd"; // only accepts beforeBegin or afterEnd (either before or after the input element)
//note: if you choose "none" for the above attribute, you must create the error yourself and give the element an ID consisting of the option below + the name of the field to validate.
var errorIDPrefix = "jsvalidator"; // prefix of the id of the element above that will attach to the name or id of the form element. don't use spaces or special characters.
var useBR = "none"; // accepts before, after, both or none; This will add a new line (<br />) before and/or after the above element.

//setup validators like: name of validator, default message, /regular expression/ !don't forget the / in front and the / in back!!!!
var custom_validators = {
	number: {
		className: "jsvalidate_number",
		defaultMessage: "This field must have a numerical value.",
		regExp: /^[-]?\d+(\.\d+)?$/
	},
	digits: {
		className: "jsvalidate_digits",
		defaultMessage: "This field can only contain numbers.",
		regExp: /^[-]?\d+(\.\d+)?$/
	},
	email: {
		className: "jsvalidate_email",
		defaultMessage: "This field must contain a valid email address.",
		regExp: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
	},
	uscanzip: {
		className: "jsvalidate_uscanzip",
		defaultMessage: "This field must contain a valid US or Canada zip code.",
		regExp: /^((\d{5}([- ])\d{4})|(\d{5})|([AaBbCcEeGgHhJjKkLlMmNnPpRrSsTtVvXxYy]\d[A-Za-z]\s?\d[A-Za-z]\d))$/
	},
	usstate: {
		className: "jsvalidate_usstate",
		defaultMessage: "This field must contain a valid 2 letter US state code.",
		regExp: /^(A[LKSZRAEP]|C[AOT]|D[EC]|F[LM]|G[ANU]|HI|I[ADLN]|K[SY]|LA|M[ADEHINOPST]|N[CDEHJMVY]|O[HKR]|P[ARW]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$/
	},
	usphone: {
		className: "jsvalidate_usphone",
		defaultMessage: "This field must contain a valid US phone number.",
		regExp: /^(\(?[0-9]{3}[\)-\. ]?\ ?)?[0-9]{3}[-\. ]?[0-9]{4}$/
	},
	creditcard: {
		className: "jsvalidate_creditcard",
		defaultMessage: "This field must contain a valid credit card number.",
		regExp: /^((4\d{3})|(5[1-5]\d{2})|(6011))([- ])?\d{4}([- ])?\d{4}([- ])?\d{4}|3[4,7]\d{13}$/
	},
	ssn: {
		className: "jsvalidate_ssn",
		defaultMessage: "This field must contain a valid social security number.",
		regExp: /(^|\s)(00[1-9]|0[1-9]0|0[1-9][1-9]|[1-6]\d{2}|7[0-6]\d|77[0-2])(-?|[\. ])([1-9]0|0[1-9]|[1-9][1-9])\3(\d{3}[1-9]|[1-9]\d{3}|\d[1-9]\d{2}|\d{2}[1-9]\d)($|\s|[;:,!\.\?])/
	}
};

var js_validators = {
	required: {
		className: "required",
		defaultMessage: "This field is required."
	},
	notfirst: {
		className: "select-notfirst",
		defaultMessage: "Select something other than the first item."
	}
};

/* begin uneditable code ---- please don't touch */

eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('1u.H.1y=8(){a=6.1Z(/^\\s+/,\'\');c a.1Z(/\\s+$/,\'\')};1t.H.1x=8(x){4 i;B(i=0;i<6.t;i++){3(6[i]===x){c 9}}c u};1t.H.30=8(s){B(i=0;i<6.t;i++){3(s==6[i])6.2Q(i,1)}};1u.H.2s=8(){3((6.x.t==0)||(6.x==27)){c 9}c u};4 2a={"2t":9,"2R":9,"1H":9,"2w":9,"2x":9,"2y":9,"2v":9};3(y.K!="V"&&y.K!="2z"&&y.K!="2A"){1s.H.2B("22",8(){4 1d=6.2C;4 1c="<"+6.I;B(4 i=0;i<1d.t;i++)1c+=" "+1d[i].v+"=\\""+1d[i].x+"\\"";3(2a[6.I])c 1c+">";c 1c+">"+6.32+"</"+6.I+">"});1s.H.31("22",8(G){4 r=6.1Q.1R();r.1U(6);4 m=r.S(G);6.1m.2F(m,6)});1s.H.1f=8(1S,G){4 m;4 r=6.1Q.1R();2I(1u(1S).2J()){15"2K":r.1U(6);m=r.S(G);6.1m.1q(m,6);1b;15"2L":r.1V(6);r.1W(9);m=r.S(G);6.1q(m,6.2M);1b;15"2N":r.1V(6);r.1W(u);m=r.S(G);6.2O(m);1b;15"2S":r.2T(6);m=r.S(G);6.1m.1q(m,6.2V);1b}}}4 w=P 1t();4 1j=9;8 1I(){4 b=d.2W(\'2X\');c b}8 1g(1v,L){4 D;3(L=="v"){D=d.b[1v].11}3(L=="C"){D=2Y.33(1v)}c D}8 1K(f){4 R;3(d.b[f.v]){R=d.b[f.v];f=f.v}e{R=$(f.C);f=f.C}3(1Y.1k){R.24=8(){c 1e(f)}}e{R.34(\'24\',8(){c 1e(f)})}}8 1h(z,g){4 h="";4 7;3(d.b[g].11[z]){7=d.b[g].11[z]}e{7=$(z)}3(7.p){B(o 1A 12){3(7.p.N(12[o][\'p\'])!=-1){3(h==""){h=12[o][\'Y\']}e{h+=\' \'+12[o][\'Y\']}3(!w.1x(z+","+g+","+7.p)){X=w.t;w[X]=z+","+g+","+7.p}}}B(o 1A F){3(7.p.N(F[o][\'p\'])!=-1){3(h==""){h=F[o][\'Y\']}e{h+=\' \'+F[o][\'Y\']}3(!w.1x(z+","+g+","+7.p)){X=w.t;w[X]=z+","+g+","+7.p}}}3(7.1i(\'1z\')){3(7.1i(\'1z\')!=""){h=7.1i(\'1z\')}}}3(h!=""&&h!=27){4 n=23+"26"+z;n=n.1y();4 k=\'<\'+U+\' C="\'+n+\'" 1B="\'+1C+\'" 1w="28:0; 37:38(28=0);">\'+h+\'</\'+U+\'>\';3(q!="1D"){3(q=="1E"||q=="19"){k=\'<1a />\'+k}3(q=="1G"||q=="19"){k=k+\'<1a />\'}}3(W=="2b"||W=="2c"){3((y.K=="V"&&y.1l<5.5)){k=\'<\'+U+\' C="\'+n+\'" 1B="\'+1C+\'">\'+h+\'</\'+U+\'>\';3(q!="1D"){3(q=="1E"||q=="19"){k=\'<1a />\'+k}3(q=="1G"||q=="19"){k=k+\'<1a />\'}}7.1f(W,k)}e{7.1f(W,k);P 14.1o(n,{1p:0.0,17:0})}}}}8 18(){3(1j){4 b=1I();4 1J;4 E;4 j;4 T;3(b.t>=1){B(4 i=0;i<b.t;i++){1J=1K(b[i]);g=b[i].v;3(g){E=1g(g,"v")}e{E=1g(b[i].C,"C")}B(j=0;j<E.t;j++){T=u;3(E[j].C){1h(E[j].C,g);T=9}3(E[j].v&&T==u){1h(E[j].v,g);T=9}}}}1j=u}}8 1T(O){3((y.K=="V"&&y.1l<5.5)){$(O).1w.1N=\'2m\'}e{3(1O.1P(O)>.2n){P 14.2o(O,{17:1.0,2p:"#3a"})}e{P 14.1o(O,{1p:1.0,17:.5})}}}8 1X(16){3((y.K=="V"&&y.1l<5.5)){$(16).1w.1N=\'2E\'}e{3(1O.1P(16)>.25){P 14.1o(16,{1p:0.0,17:.5})}}}8 20(l){4 7;4 1r=9;B(4 13=0;13<w.t;13++){4 J=u;4 D=w[13].2U(",");Q=D[0];f=D[1];Z=D[2];3(f==l){3($(Q)){7=$(Q)}e{7=d.b[f].11[Q]}4 n=23+\'26\'+Q;n=n.1y();B(o 1A F){3(Z.N(F[o][\'p\'])>-1&&7.x!=""){4 1F=F[o][\'2d\'];3(!1F.1n(7.x)){J=9}}}3(Z.N("2g")>-1){3((7.I=="1H"&&(7.L=="2h"||7.L=="2i"))||7.I=="2j"){3(7.x==""){J=9}}3(7.I=="2k"){3(7.x==""){J=9}}}3(Z.N("2q-2r")>-1){3(7.2D==0){J=9}}3(J){1T(n);1r=u}e{1X(n)}}}c 1r}8 1e(21){4 M=20(21);c M}8 35(29,l){3($(l)){l=d.b[l].v}4 M=1e(l);3(29.I=="A"&&M&&(d.b[l]||$(l))){3(d.b[l]){d.b[l].1L()}e{$(l).1L()}c u}c M}3(d.1k){d.1k("2G",18,u)}3(/2P/i.1n(2Z.36)){4 1M=2e(8(){3(/2u|2H/.1n(d.39)){2f(1M);18()}},10)}1Y.2l=18;',62,197,'|||if|var||this|the_field|function|true||forms|return|document|else|form_ref|form_name|validation_message|||html|theForm|df|field_name|items|className|useBR|||length|false|name|jsValidator|value|BrowserDetect|fieldref||for|id|els|fields|custom_validators|sHTML|prototype|tagName|bad_field|browser|type|process|indexOf|fieldToFlag|new|field_ref|form_attach|createContextualFragment|done|errorTag|Explorer|errorLocation|array_pos|defaultMessage|class_ref||elements|js_validators|jsV|Effect|case|fieldToHide|duration|loadAction|both|br|break|str|attrs|submitAction|insertAdjacentHTML|getFields|attachValidation|getAttribute|notloaded|addEventListener|version|parentNode|test|Opacity|to|insertBefore|proceed|HTMLElement|Array|String|formref|style|inArray|trim|alt|in|class|errorClass|none|before|thisRegExp|after|INPUT|findForms|attachIt|attachSubmit|submit|_timer|visibility|Element|getOpacity|ownerDocument|createRange|sWhere|throwFlag|setStartBefore|selectNodeContents|collapse|hideFlag|window|replace|validateFields|thisForm|outerHTML|errorIDPrefix|onsubmit||_|null|opacity|button|_emptyTags|afterEnd|beforeBegin|regExp|setInterval|clearInterval|required|text|password|TEXTAREA|SELECT|onload|visible|75|Highlight|endColor|select|notfirst|isEmpty|IMG|loaded|HR|META|LINK|PARAM|Opera|Netscape|__defineGetter__|attributes|selectedIndex|hidden|replaceChild|DOMContentLoaded|complete|switch|toLowerCase|beforebegin|afterbegin|firstChild|beforeend|appendChild|WebKit|splice|BR|afterend|setStartAfter|split|nextSibling|getElementsByTagName|form|Form|navigator|remove|__defineSetter__|innerHTML|getElements|attachEvent|submitLinkAction|userAgent|filter|alpha|readyState|FFCC99'.split('|'),0,{}))