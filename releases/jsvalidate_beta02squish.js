// JavaScript Document

/* JSValidate preferences */
var errorTag = "span"; // which tag do you want to use for error container. it must be one that opens and closes (div,span,p,b)
var errorClass = "jsvalidation"; // this is the css class name given to the tag above
var errorLocation = "afterEnd"; // only accepts beforeBegin or afterEnd (either before or after the input element)
//note: if you choose "none" for the above attribute, you must create the error yourself and give the element an ID consisting of the option below + the name of the field to validate.
var errorIDPrefix = "jsvalidator"; // prefix of the id of the element above that will attach to the name or id of the form element. don't use spaces or special characters.
var useBR = "none"; // accepts before, after, both or none; This will add a new line (<br />) before and/or after the above element.
var useBlur = true; // this will attach an onBlur validator to each form element.
var submitClass = 'submit_action'; // apply this class inside any form to let this element submit the form.


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

eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('1F.E.1O=8(){a=6.1Z(/^\\s+/,\'\');f a.1Z(/\\s+$/,\'\')};P.E.1P=8(I){4 i;q(i=0;i<6.d;i++){3(6[i]===I){f 9}}f m};P.E.2J=8(s){q(i=0;i<6.d;i++){3(s==6[i])6.2K(i,1)}};1F.E.2N=8(){3((6.I.d==0)||(6.I==1p)){f 9}f m};3(!P.E.20){P.E.20=8(){4 1G;3(6.d){1G=6[6.d-1];6.d-=1}f 1G||1p}}3(!P.E.1U){P.E.1U=8(){q(4 i=0;i<21.d;++i){6[6.d]=21[i]}f 6.d}}8 2o(t,A,X){4 23=Y 2O("(^|\\\\s)"+t+"(\\\\s|$)");4 A=A||"*";4 X=X||n;4 J=(A=="*"&&X.2x)?X.2x:X.2j(A);4 1S=[];4 1m;4 d=J.d;q(4 i=0;i<d;i++){1m=J[i];3(23.1f(1m.t)){1S.1U(1m)}}f 1S}4 27={"2R":9,"2S":9,"Z":9,"2T":9,"2U":9,"3v":9,"2V":9};3(B.T!="18"&&B.T!="2W"&&B.T!="2X"){1D.E.2Y("2l",8(){4 1o=6.2Z;4 1l="<"+6.w;q(4 i=0;i<1o.d;i++)1l+=" "+1o[i].y+"=\\""+1o[i].I+"\\"";3(27[6.w])f 1l+">";f 1l+">"+6.31+"</"+6.w+">"});1D.E.32("2l",8(S){4 r=6.29.2a();r.2c(6);4 D=r.13(S);6.16.34(D,6)});1D.E.1v=8(2b,S){4 D;4 r=6.29.2a();38(1F(2b).1x()){1j"39":r.2c(6);D=r.13(S);6.16.1I(D,6);1k;1j"3a":r.2d(6);r.28(9);D=r.13(S);6.1I(D,6.3b);1k;1j"3c":r.2d(6);r.28(m);D=r.13(S);6.3d(D);1k;1j"3e":r.3f(6);D=r.13(S);6.16.1I(D,6.3h);1k}}}4 G=Y P();4 1M=9;8 2e(){4 h=n.2j(\'3i\');f h}8 1H(1K,p){4 K;3(p=="y"){K=n.h[1K].J}3(p=="u"){K=3j.3k(1K)}f K}8 2p(L){3m(L.16!=1p&&L.w!="3n")L=L.16;f(L.y)?L.y:L.u}8 2h(g){4 12;4 1N;3(n.h[g.y]){12=n.h[g.y];g=g.y}l{12=$(g.u);g=g.u}3(17.V){12.1W=8(){f 14(g,\'3o\',\'15\')}}l{12.1d(\'1W\',8(){f 14(g,\'Z\',\'15\')})}4 M=2o(3p);q(b=0;b<M.d;b++){1N=2p(M[b]);3(1N==g){A=M[b].w;3(M[b].p){p=M[b].p.1x()}l{p=""}3(17.V){M[b].2r=8(){f 14(g,A,p)}}l{M[b].1d(\'2r\',8(){f 14(g,A,p)})}}}}8 1J(H,k){4 x="";4 7;3(n.h[k].J[H]){7=n.h[k].J[H]}l{7=$(H)}o=7.t;3(o){o=o.1A(" ");q(c=0;c<o.d;c++){q(C 1B W){3(o[c]==W[C][\'t\']){3(x==""){x=W[C][\'1s\']}l{x+=\' \'+W[C][\'1s\']}3(!G.1P(H+","+k+","+7.t)){1q=G.d;G[1q]=H+","+k+","+7.t}}}q(C 1B R){3(o[c]==R[C][\'t\']){3(x==""){x=R[C][\'1s\']}l{x+=\' \'+R[C][\'1s\']}3(!G.1P(H+","+k+","+7.t)){1q=G.d;G[1q]=H+","+k+","+7.t}}}3(7.1Q(\'1R\')){3(7.1Q(\'1R\')!=""){x=7.1Q(\'1R\')}}}}3(x!=""&&x!=1p){4 z=1X+"1Y"+H;z=z.1O();4 v=\'<\'+1t+\' u="\'+z+\'" 2w="\'+2y+\'" 1T="2u:0; 3x:3y(2u=0);">\'+x+\'</\'+1t+\'>\';3(F!="2A"){3(F=="2C"||F=="1u"){v=\'<1g />\'+v}3(F=="2D"||F=="1u"){v=v+\'<1g />\'}}3(1a=="3z"||1a=="3A"){3((B.T=="18"&&B.1h<5.5)){v=\'<\'+1t+\' u="\'+z+\'" 2w="\'+2y+\'">\'+x+\'</\'+1t+\'>\';3(F!="2A"){3(F=="2C"||F=="1u"){v=\'<1g />\'+v}3(F=="2D"||F=="1u"){v=v+\'<1g />\'}}7.1v(1a,v)}l{7.1v(1a,v);Y 1i.1w(z,{1y:0.0,1c:0})}}}3(2F){3(7.p){1C=7.p.1x()}3((7.w=="Z"&&(1C=="2E"||1C=="26"))||7.w=="2s"){3(17.V){7.1b=8(){Q(7,k,9)}}l{7.1d(\'1b\',8(){Q(7,k,9)})}}3(7.w=="1E"){3(17.V){7.2G=8(){Q(7,k,9)};7.1b=8(){Q(7,k,9)}}l{7.1d(\'1b\',8(){Q(7,k,9)})}}}}8 Q(e,g,2I){4 z;4 1V="9";3(($(e))||(n.h[g].J[e])){e=($(e))?$(e):n.h[g].J[e]}o=e.t;7=(e.u)?e.u:e.y;3(o){o=o.1A(" ");4 O=m;4 24=m;q(c=0;c<o.d;c++){z=1X+\'1Y\'+7;z=z.1O();q(C 1B R){3(o[c]==R[C][\'t\']&&e.I!=""){4 22=R[C][\'2P\'];3(!22.1f(e.I)){O=9}}}3(o[c]==W[\'2Q\'][\'t\']){24=9;3((e.w=="Z"&&(e.p=="2E"||e.p=="26"))||e.w=="2s"){3(e.I==""){O=9}}3(e.w=="1E"){3(e.I==""){O=9}}}3(o[c]==W[\'33\'][\'t\']){3(e.35==0&&e.w=="1E"){O=9}}}3(O){2m(z);1V="m"}l{2t(z)}}f 1V}8 1e(){3(1M){4 h=2e();4 2g;4 N;4 j;4 11;3(h.d>=1){q(4 i=0;i<h.d;i++){2g=2h(h[i]);k=h[i].y;3(k){N=1H(k,"y")}l{N=1H(h[i].u,"u")}q(j=0;j<N.d;j++){11=m;3(N[j].u){1J(N[j].u,k);11=9}3(N[j].y&&11==m){1J(N[j].y,k);11=9}}}}1M=m}}8 2m(19){3((B.T=="18"&&B.1h<5.5)){$(19).1T.2v=\'3q\'}l{3(2z.2B(19)>.3r){Y 1i.3s(19,{1c:1.0,3t:"#3w"})}l{Y 1i.1w(19,{1y:1.0,1c:.5})}}}8 2t(1r){3((B.T=="18"&&B.1h<5.5)){$(1r).1T.2v=\'3B\'}l{3(2z.2B(1r)>.25){Y 1i.1w(1r,{1y:0.0,1c:.5})}}}8 2q(2f){4 7;4 1L=9;q(4 1n=0;1n<G.d;1n++){4 O=m;4 K=G[1n].1A(",");2i=K[0];g=K[1];36=K[2];3(g==2f){2k=Q(2i,g,m);3(2k=="m"){1L=m}}}f 1L}8 14(U,A,p){4 1z=2q(U);3((A!="Z"||(A=="Z"&&p!="15"))&&1z&&(n.h[U]||$(U))){3(n.h[U]){n.h[U].15()}l{$(U).15()}f m}f 1z}3(n.V){n.V("2L",1e,m)}3((B.T=="18"&&B.1h<5.5)){}l{}3(/3l/i.1f(3u.3C)){4 2n=2H(8(){3(/37|3g/.1f(n.3D)){2M(2n);1e()}},10)}17.30=1e;',62,226,'|||if|var||this|the_field|function|true||||length|field_reference|return|form_ref|forms|||form_name|else|false|document|classes|type|for|||className|id|html|tagName|validation_message|name|field_name|tag|BrowserDetect|items|df|prototype|useBR|jsValidator|fieldref|value|elements|els|el|buttons|fields|bad_field|Array|blurAction|custom_validators|sHTML|browser|thisForm|addEventListener|js_validators|elm|new|INPUT||done|form_attach|createContextualFragment|submitAction|submit|parentNode|window|Explorer|fieldToFlag|errorLocation|onblur|duration|attachEvent|loadAction|test|br|version|Effect|case|break|str|current|jsV|attrs|null|array_pos|fieldToHide|defaultMessage|errorTag|both|insertAdjacentHTML|Opacity|toLowerCase|to|process|split|in|field_type|HTMLElement|SELECT|String|last|getFields|insertBefore|attachValidation|formref|proceed|notloaded|parent_ref|trim|inArray|getAttribute|alt|returnElements|style|push|the_result|onsubmit|errorIDPrefix|_|replace|pop|arguments|thisRegExp|testClass|isRequired||password|_emptyTags|collapse|ownerDocument|createRange|sWhere|setStartBefore|selectNodeContents|findForms|theForm|attachIt|attachSubmit|field_ref|getElementsByTagName|checkField|outerHTML|throwFlag|_timer|getElementsByClassName|getParentForm|validateFields|onclick|TEXTAREA|hideFlag|opacity|visibility|class|all|errorClass|Element|none|getOpacity|before|after|text|useBlur|onchange|setInterval|isBlur|remove|splice|DOMContentLoaded|clearInterval|isEmpty|RegExp|regExp|required|IMG|BR|META|LINK|HR|Opera|Netscape|__defineGetter__|attributes|onload|innerHTML|__defineSetter__|notfirst|replaceChild|selectedIndex|class_ref|loaded|switch|beforebegin|afterbegin|firstChild|beforeend|appendChild|afterend|setStartAfter|complete|nextSibling|form|Form|getElements|WebKit|while|FORM|input|submitClass|visible|75|Highlight|endColor|navigator|PARAM|FFCC99|filter|alpha|afterEnd|beforeBegin|hidden|userAgent|readyState'.split('|'),0,{}))