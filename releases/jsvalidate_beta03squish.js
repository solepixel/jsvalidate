// JavaScript Document

/* JSValidate preferences */
var js_options = {
	errorTag: "span", // which tag do you want to use for error container. it must be one that opens and closes (div,span,p,b)
	errorClass: "jsvalidation", // this is the css class name given to the tag above
	errorLocation: "afterEnd", // only accepts beforeBegin or afterEnd (either before or after the input element)
	//note: if you choose "none" for the above attribute, you must create the error yourself and give the element an ID consisting of the option below + the name of the field to validate.
	errorIDPrefix: "jsvalidator", // prefix of the id of the element above that will attach to the name or id of the form element. don't use spaces or special characters.
	startGone: false, //couldn't think of another name for this, but if true, it will apply "display:none", otherwise, the element is just invisible.
	useBR: "none", // accepts before, after, both or none; This will add a new line (<br />) before and/or after the above element.
	useBlur: true, // this will attach an onBlur validator to each form element.
	submitClass: 'submit_action', // apply this class inside any form to let this element submit the form.
	highlightColor: '#FFFF99', //default color should be:  #FFFF99
	endColor: '#FFFFFF' //this is what you generally want to set to the background color behind the form elements.
}
//note: can apply any of the custom options above by including {optionname: 'value'} in the element's class.


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
		defaultMessage: "This field must contain a valid US phone number with area code.",
		regExp: /^([0-9]( |-|.)?)?(\(?[0-9]{3}\)?|[0-9]{3})( |-|.)?([0-9]{3}( |-|.)?[0-9]{4}|[a-zA-Z0-9]{7})$/
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
	},
	alpha: {
		className: "jsvalidate_alpha",
		defaultMessage: "This field must contain only letters.",
		regExp: /^[a-zA-z\s]+$/
	},
	alphanum: {
		className: "jsvalidate_alphanum",
		defaultMessage: "This field must contain only letters or numbers.",
		regExp: /^[a-zA-Z0-9]+$/
	}
};



/* only change the default message, do not change the className */
var js_validators = {
	required: {
		className: "jsrequired",
		defaultMessage: "This field is required."
	},
	notfirst: {
		className: "select-notfirst",
		defaultMessage: "Select something other than the first item."
	}
};



/* begin uneditable code ---- please don't touch */



eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('1S.E.1o=7(){a=6.1L(/^\\s+/,\'\');h a.1L(/\\s+$/,\'\')};11.E.26=7(O){4 i;y(i=0;i<6.f;i++){3(6[i]===O){h d}}h p};11.E.2X=7(s){y(i=0;i<6.f;i++){3(s==6[i])6.2Y(i,1)}};1S.E.2Z=7(){3((6.O.f==0)||(6.O==1N)){h d}h p};3(!11.E.2i){11.E.2i=7(){4 20;3(6.f){20=6[6.f-1];6.f-=1}h 20||1N}}3(!11.E.1P){11.E.1P=7(){y(4 i=0;i<2j.f;++i){6[6.f]=2j[i]}h 6.f}}7 D(v){h((30(v)==\'31\'||v.f==0)?p:d)}7 21(A,H,1b){4 2W=1c 32("(^|\\\\s)"+A+"(\\\\s|$)");4 H=H||"*";4 1b=1b||q;4 V=(H=="*"&&1b.2k)?1b.2k:1b.2m(H);4 2c=[];4 1E;4 f=V.f;y(4 i=0;i<f;i++){1E=V[i];3(2W.1D(1E.A)){2c.1P(1E)}}h 2c}4 2o={"37":d,"38":d,"W":d,"39":d,"3U":d,"3a":d,"3b":d};3(N.1a!="1z"&&N.1a!="3c"&&N.1a!="3d"){1R.E.3e("2p",7(){4 1w=6.3f;4 1G="<"+6.t;y(4 i=0;i<1w.f;i++)1G+=" "+1w[i].C+"=\\""+1w[i].O+"\\"";3(2o[6.t])h 1G+">";h 1G+">"+6.3h+"</"+6.t+">"});1R.E.3i("2p",7(12){4 r=6.2z.2q();r.2s(6);4 F=r.1m(12);6.1n.3j(F,6)});1R.E.2T=7(2r,12){4 F;4 r=6.2z.2q();3l(1S(2r).1v()){1x"3m":r.2s(6);F=r.1m(12);6.1n.1V(F,6);1y;1x"3o":r.2u(6);r.2t(d);F=r.1m(12);6.1V(F,6.3w);1y;1x"3p":r.2u(6);r.2t(p);F=r.1m(12);6.3r(F);1y;1x"3s":r.3t(6);F=r.1m(12);6.1n.1V(F,6.3x);1y}}}4 L=1c 11();4 23=d;4 9=1k("({})");7 2w(){4 n=q.2m(\'3z\');h n}7 1Z(1Y,u){4 U;3(u=="C"){U=q.n[1Y].V}3(u=="I"){U=3A.3B(1Y)}h U}7 2D(S){3C(S.1n!=1N&&S.t!="3D")S=S.1n;h(S.C)?S.C:S.I}7 2y(k){4 1j;4 22;3(q.n[k.C]){1j=q.n[k.C];k=k.C}m{1j=$(k.I);k=k.I}3(1i.14){1j.2B=7(){h 1q(k,\'3E\',\'1u\')}}m{1j.1t(\'2B\',7(){h 1q(k,\'W\',\'1u\')})}3(21(B[\'2C\']).f>0){4 T=21(B[\'2C\']);y(b=0;b<T.f;b++){22=2D(T[b]);3(22==k){H=T[b].t;3(T[b].u){u=T[b].u.1v()}m{u=""}3(1i.14){T[b].1I=7(){h 1q(k,H,u)}}m{T[b].1t(\'1I\',7(){h 1q(k,H,u)})}}}}}7 2d(1A){4 2F=1A.19("{");4 2G=1A.19("}")+1;4 2H=1A.3G(2F,2G);h 2H}7 1O(Q,l){4 G="";4 8;4 3H=p;4 9=1k("({})");3(q.n[l].V[Q]){8=q.n[l].V[Q]}m{8=$(Q)}e=8.A;3(e){3(e.19("{")>-1&&e.19("}")>-1){9=2d(e).3I();e=e.1L(9,"");9=1k("("+9+")")}e.1o();e=e.1T(" ");y(c=0;c<e.f;c++){y(J 27 1d){3(e[c]==1d[J][\'A\']){3(G==""){G=1d[J][\'1B\']}m{G+=\' \'+1d[J][\'1B\']}3(!L.26(Q+","+l+","+8.A)){1C=L.f;L[1C]=Q+","+l+","+8.A}}}y(J 27 13){3(e[c]==13[J][\'A\']){3(G==""){G=13[J][\'1B\']}m{G+=\' \'+13[J][\'1B\']}3(!L.26(Q+","+l+","+8.A)){1C=L.f;L[1C]=Q+","+l+","+8.A}}}3(8.2a(\'28\')){3(8.2a(\'28\')!=""){G=8.2a(\'28\')}}}}1s=(D(9[\'1s\']))?9[\'1s\']:B[\'1s\'];3(G!=""&&G!=1N){4 o=B[\'17\']+"2J"+Q;o=o.1o();1e=(D(9[\'1e\']))?9[\'1e\']:B[\'1e\'];1g=(D(9[\'1g\']))?9[\'1g\']:B[\'1g\'];x=(D(9[\'x\']))?9[\'x\']:B[\'x\'];K=(D(9[\'K\']))?9[\'K\']:B[\'K\'];w=(D(9[\'w\']))?9[\'w\']:B[\'w\'];4 z="<";z+=1e;z+=" I=\\""+o+"\\" ";3(1g!=""){z+="3N=\\""+1g+"\\" "}z+="Z=\\"2M:0; 3P:3Q(2M=0);";3(x){z+=" 1h:M;"}z+="\\">";3(K!="M"){3(K=="3S"||K=="2P"){z+=\'<2Q />\'}}z+=G;3(K!="M"){3(K=="3T"||K=="2P"){z+=\'<2Q />\'}}z+="</";z+=1e;z+=">";3(w=="3V"||w=="3W"){8.2T(w,z)}3($(o)){1c 1K.2e(o,{2h:0.0,1M:0})}3(w=="M"&&x&&$(o)){$(o).Z.1h=\'M\'}}3(1s){3(8.u){Y=8.u.1v()}3((8.t=="W"&&(Y=="2O"||Y=="2L"))||8.t=="2n"){3(1i.14){8.1H=7(){P(8,l,d)}}m{8.1t(\'1H\',7(){P(8,l,d)})}}3(8.t=="1U"){3(1i.14){8.3Z=7(){P(8,l,d)};8.1H=7(){P(8,l,d)}}m{8.1t(\'1H\',7(){P(8,l,d)})}}3(8.t=="W"&&Y=="2K"){3(1i.14){8.1I=7(){P(8,l,d)}}m{8.1t(\'1I\',7(){P(8,l,d)})}}}}7 P(g,k,40){4 o;4 1X=d;4 9=1k("({})");3(($(g))||(q.n[k].V[g])){g=($(g))?$(g):q.n[k].V[g]}e=g.A;8=(g.I)?g.I:g.C;3(e){3(e.19("{")>-1&&e.19("}")>-1){9=2d(e);e=e.1L(9,"");9=1k("("+9+")")}e.1o();e=e.1T(" ");4 X=p;4 2R=p;1p=(D(9[\'2f\']))?9[\'2f\']:B[\'2f\'];1r=(D(9[\'2g\']))?9[\'2g\']:B[\'2g\'];x=(D(9[\'x\']))?9[\'x\']:B[\'x\'];17=(D(9[\'17\']))?9[\'17\']:B[\'17\'];w=(D(9[\'w\']))?9[\'w\']:B[\'w\'];y(c=0;c<e.f;c++){o=17+\'2J\'+8;o=o.1o();y(J 27 13){3(e[c]==13[J][\'A\']&&g.O!=""){4 2l=13[J][\'33\'];3(!2l.1D(g.O)){X=d}}}3(e[c]==1d[\'36\'][\'A\']){2R=d;Y=g.u.1v();3((g.t=="W"&&(Y=="2O"||Y=="2L"))||g.t=="2n"){3(g.O==""){X=d}}3(g.t=="1U"){3(g.O==""){X=d}}3(g.t=="W"&&Y=="2K"){3(g.3k==p){X=d}}}3(e[c]==1d[\'3n\'][\'A\']){3(g.3q==0&&g.t=="1U"){X=d}}}3(X){3(w=="M"){3($(o)){24(o,1p,1r,x)}}m{24(o,1p,1r,x)}1X=p}m{3(w=="M"){3($(o)){2b(o,x)}}m{2b(o,x)}}}h 1X}7 1F(){3(23){4 n=2w();4 2x;4 R;4 j;4 1l;3(n.f>=1){y(4 i=0;i<n.f;i++){2x=2y(n[i]);l=n[i].C;3(l){R=1Z(l,"C")}m{R=1Z(n[i].I,"I")}y(j=0;j<R.f;j++){1l=p;3(R[j].I){1O(R[j].I,l);1l=d}3(R[j].C&&1l==p){1O(R[j].C,l);1l=d}}}}23=p}}7 24(15,1p,1r,18){3((N.1a=="1z"&&N.1Q<5.5)){3(18){$(15).Z.1h=\'\'}$(15).Z.2S=\'3J\'}m{3(2U.2V(15)>.3K){1c 1K.3L(15,{1M:1.0,3O:1p,3R:1r})}m{3(18){$(15).Z.1h=\'\'}1c 1K.2e(15,{2h:1.0,1M:.5})}}}7 2b(1f,18){3((N.1a=="1z"&&N.1Q<5.5)){$(1f).Z.2S=\'3X\';3(18){$(1f).Z.1h=\'M\'}}m{3(2U.2V(1f)>.25){1c 1K.2e(1f,{2h:0.0,1M:.5});3(18){$(1f).Z.1h=\'M\'}}}}7 2N(2A){4 8;4 29=d;y(4 1J=0;1J<L.f;1J++){4 X=p;4 U=L[1J].1T(",");2E=U[0];k=U[1];3y=U[2];3(k==2A){2I=P(2E,k,p);3(!2I){29=p}}}h 29}7 1q(16,H,u){4 1W=2N(16);3((H!="W"||(H=="W"&&u!="1u"))&&1W&&(q.n[16]||$(16))){3(q.n[16]){q.n[16].1u()}m{$(16).1u()}h p}h 1W}3(q.14){q.14("3g",1F,p)}3((N.1a=="1z"&&N.1Q<5.5)){}m{}3(/3M/i.1D(3Y.41)){4 2v=34(7(){3(/3v|3F/.1D(q.42)){35(2v);1F()}},10)}1i.3u=1F;',62,251,'|||if|var||this|function|the_field|these_options||||true|classes|length|field_reference|return|||form_ref|form_name|else|forms|field_name|false|document|||tagName|type||errorLocation|startGone|for|html|className|js_options|name|isset|prototype|df|validation_message|tag|id|items|useBR|jsValidator|none|BrowserDetect|value|blurAction|fieldref|fields|el|buttons|els|elements|INPUT|bad_field|field_type|style||Array|sHTML|custom_validators|addEventListener|fieldToFlag|thisForm|errorIDPrefix|gone|indexOf|browser|elm|new|js_validators|errorTag|fieldToHide|errorClass|display|window|form_attach|eval|done|createContextualFragment|parentNode|trim|hColor|submitAction|eColor|useBlur|attachEvent|submit|toLowerCase|attrs|case|break|Explorer|vals|defaultMessage|array_pos|test|current|loadAction|str|onblur|onclick|jsV|Effect|replace|duration|null|attachValidation|push|version|HTMLElement|String|split|SELECT|insertBefore|process|the_result|formref|getFields|last|getElementsByClassName|parent_ref|notloaded|throwFlag||inArray|in|alt|proceed|getAttribute|hideFlag|returnElements|extractOptions|Opacity|highlightColor|endColor|to|pop|arguments|all|thisRegExp|getElementsByTagName|TEXTAREA|_emptyTags|outerHTML|createRange|sWhere|setStartBefore|collapse|selectNodeContents|_timer|findForms|attachIt|attachSubmit|ownerDocument|theForm|onsubmit|submitClass|getParentForm|field_ref|first_pos|last_pos|the_options|checkField|_|checkbox|password|opacity|validateFields|text|both|br|isRequired|visibility|insertAdjacentHTML|Element|getOpacity|testClass|remove|splice|isEmpty|typeof|undefined|RegExp|regExp|setInterval|clearInterval|required|IMG|BR|META|PARAM|HR|Opera|Netscape|__defineGetter__|attributes|DOMContentLoaded|innerHTML|__defineSetter__|replaceChild|checked|switch|beforebegin|notfirst|afterbegin|beforeend|selectedIndex|appendChild|afterend|setStartAfter|onload|loaded|firstChild|nextSibling|class_ref|form|Form|getElements|while|FORM|input|complete|substring|doBlur|toString|visible|75|Highlight|WebKit|class|startcolor|filter|alpha|endcolor|before|after|LINK|afterEnd|beforeBegin|hidden|navigator|onchange|isBlur|userAgent|readyState'.split('|'),0,{}))