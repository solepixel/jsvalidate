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
	digits: {
		className: "select-notfirst",
		defaultMessage: "Select something other than the first item."
	}
};

/* begin uneditable code ---- please don't touch */

String.prototype.trim = function() {
	a = this.replace(/^\s+/, '');
	return a.replace(/\s+$/, '');
};

Array.prototype.inArray = function (value){
    var i;
    for (i=0; i < this.length; i++) {
        // Matches identical (===), not just similar (==).
        if (this[i] === value) {
            return true;
        }
    }
    return false;
};

Array.prototype.remove=function(s){
	for(i=0;i<this.length;i++){
		if(s==this[i]) this.splice(i, 1);
	}
};

String.prototype.isEmpty = function() {
   if ((this.value.length == 0) || (this.value==null)) {
      return true;
   }
   return false;
};



var _emptyTags = {
   "IMG":   true,
   "BR":    true,
   "INPUT": true,
   "META":  true,
   "LINK":  true,
   "PARAM": true,
   "HR":    true
};


if(BrowserDetect.browser != "Explorer" && BrowserDetect.browser != "Opera" && BrowserDetect.browser != "Netscape"){
	HTMLElement.prototype.__defineGetter__("outerHTML", function () {
		var attrs = this.attributes;
		var str = "<" + this.tagName;
		for (var i = 0; i < attrs.length; i++)
			str += " " + attrs[i].name + "=\"" + attrs[i].value + "\"";
		
		if (_emptyTags[this.tagName])
			return str + ">";
		
		return str + ">" + this.innerHTML + "</" + this.tagName + ">";
	});
	
	HTMLElement.prototype.__defineSetter__("outerHTML", function (sHTML) {
		var r = this.ownerDocument.createRange();
		r.setStartBefore(this);
		var df = r.createContextualFragment(sHTML);
		this.parentNode.replaceChild(df, this);
	});
	
	
	HTMLElement.prototype.insertAdjacentHTML = function (sWhere, sHTML) {
	var df;   // : DocumentFragment
	var r = this.ownerDocument.createRange();
	
	switch (String(sWhere).toLowerCase()) {  // convert to string and unify case
	  case "beforebegin":
		 r.setStartBefore(this);
		 df = r.createContextualFragment(sHTML);
		 this.parentNode.insertBefore(df, this);
		 break;
		 
	  case "afterbegin":
		 r.selectNodeContents(this);
		 r.collapse(true);
		 df = r.createContextualFragment(sHTML);
		 this.insertBefore(df, this.firstChild);
		 break;
		 
	  case "beforeend":
		 r.selectNodeContents(this);
		 r.collapse(false);
		 df = r.createContextualFragment(sHTML);
		 this.appendChild(df);
		 break;
		 
	  case "afterend":
		 r.setStartAfter(this);
		 df = r.createContextualFragment(sHTML);
		 this.parentNode.insertBefore(df, this.nextSibling);
		 break;
	}   
	};
}


var jsValidator = new Array();
var notloaded = true;


function findForms(){
	var forms = document.getElementsByTagName('form');
	return forms;
}

function getFields(formref,type){
	var els;
	if(type == "name"){
		els = document.forms[formref].elements;
	}
	if(type == "id"){
		els = Form.getElements(formref);
	}
	return els;	
}

function attachSubmit(form_ref){
	var form_attach;
	if(document.forms[form_ref.name]){
		form_attach = document.forms[form_ref.name];
		form_ref = form_ref.name;
	} else {
		form_attach = $(form_ref.id);
		form_ref = form_ref.id;
	}
	if(window.addEventListener){ // Mozilla, Netscape, Firefox
		form_attach.onsubmit = function(){ return submitAction(form_ref); };
	} else { // IE
		form_attach.attachEvent('onsubmit', function(){ return submitAction(form_ref); });
	}
}


function attachValidation(fieldref,form_name){
	var validation_message = "";
	var the_field;
	//the_field = getByIdOrName(fieldref,form_name);
	if(document.forms[form_name].elements[fieldref]){
		the_field = document.forms[form_name].elements[fieldref];
	} else {
		the_field = $(fieldref);
	}
	if(the_field.className){
		for(items in js_validators){
			if(the_field.className.indexOf(js_validators[items]['className']) != -1){
				if(validation_message == ""){
					validation_message = js_validators[items]['defaultMessage'];
				} else {
					validation_message += ' ' + js_validators[items]['defaultMessage'];
				}
				if(!jsValidator.inArray(fieldref + "," + form_name + "," + the_field.className)){
					array_pos = jsValidator.length;
					jsValidator[array_pos] = fieldref + "," + form_name + "," + the_field.className;
				}
			}
		}
		
		for(items in custom_validators){
			if(the_field.className.indexOf(custom_validators[items]['className']) != -1){
				if(validation_message == ""){
					validation_message = custom_validators[items]['defaultMessage'];
				} else {
					validation_message += ' ' + custom_validators[items]['defaultMessage'];
				}
				if(!jsValidator.inArray(fieldref + "," + form_name + "," + the_field.className)){
					array_pos = jsValidator.length;
					jsValidator[array_pos] = fieldref + "," + form_name + "," + the_field.className;
				}
			}
		}
		
		if(the_field.getAttribute('alt')){
			if(the_field.getAttribute('alt') != ""){
				validation_message = the_field.getAttribute('alt');
			}
		}
	}
	
	if(validation_message != "" && validation_message != null){
		var field_name = errorIDPrefix + "_" + fieldref;
		field_name = field_name.trim();
		var html = '<' + errorTag + ' id="' + field_name + '" class="' + errorClass + '" style="opacity:0; filter:alpha(opacity=0);">' + validation_message + '</' + errorTag + '>';
		if(useBR != "none"){
			if(useBR == "before" || useBR == "both"){
				html = '<br />' + html;
			}
			if(useBR == "after" || useBR == "both"){
				html = html + '<br />';
			}
		}
		if(errorLocation == "afterEnd" || errorLocation == "beforeBegin"){
			if((BrowserDetect.browser == "Explorer" && BrowserDetect.version < 5.5)){
				html = '<' + errorTag + ' id="' + field_name + '" class="' + errorClass + '">' + validation_message + '</' + errorTag + '>';
				if(useBR != "none"){
					if(useBR == "before" || useBR == "both"){
						html = '<br />' + html;
					}
					if(useBR == "after" || useBR == "both"){
						html = html + '<br />';
					}
				}
				the_field.insertAdjacentHTML(errorLocation,html);
			} else {
				the_field.insertAdjacentHTML(errorLocation,html);
				new Effect.Opacity(field_name, {to:0.0, duration: 0 });
			}
		}
	}
}


function loadAction(){
	if(notloaded){
		var forms = findForms();
		var attachIt;
		var fields;
		var j;
		var done;
		if(forms.length >= 1){
			for(var i=0; i < forms.length; i++){
				attachIt = attachSubmit(forms[i]);
				form_name = forms[i].name;
				if(form_name){
					fields = getFields(form_name,"name");
				} else {
					fields = getFields(forms[i].id,"id");
				}
				for(j=0; j < fields.length; j++){
					done = false;
					if(fields[j].id){
						attachValidation(fields[j].id,form_name);
						done = true;
					}
					if(fields[j].name && done == false){
						attachValidation(fields[j].name,form_name);
						done = true;
					}
				}
			}
		}
		notloaded = false;
	}
}


function throwFlag(fieldToFlag){
	if((BrowserDetect.browser == "Explorer" && BrowserDetect.version < 5.5)){
		$(fieldToFlag).style.visibility = 'visible';
	} else {
		if(Element.getOpacity(fieldToFlag) > .75){
			new Effect.Highlight(fieldToFlag,{duration:1.0, endColor:"#FFCC99" });
		} else {
			new Effect.Opacity(fieldToFlag, {to:1.0, duration: .5 });
		}
	}
}

function hideFlag(fieldToHide){
	if((BrowserDetect.browser == "Explorer" && BrowserDetect.version < 5.5)){
		$(fieldToHide).style.visibility = 'hidden';
	} else {
		if(Element.getOpacity(fieldToHide) > .25){
			new Effect.Opacity(fieldToHide, {to:0.0, duration: .5 });
		}
	}
}


function validateFields(theForm){
	var the_field;
	var proceed = true;
	
	for(var jsV=0; jsV < jsValidator.length; jsV++){
		var bad_field = false;
		
		var els = jsValidator[jsV].split(",");
		
		field_ref = els[0];
		form_ref = els[1];
		class_ref = els[2];
		
		if(form_ref == theForm){
			if($(field_ref)){
				the_field = $(field_ref);
			} else {
				the_field = document.forms[form_ref].elements[field_ref];
			}
			
			var field_name = errorIDPrefix + '_' + field_ref;
			field_name = field_name.trim();
			
			for(items in custom_validators){
				if(class_ref.indexOf(custom_validators[items]['className']) > -1 && the_field.value != ""){
					var thisRegExp = custom_validators[items]['regExp'];
					if(!thisRegExp.test(the_field.value)){
						bad_field = true;
					}
				}
			}
			
			if(class_ref.indexOf("required") > -1){
				//alert(the_field.tagName);
				if((the_field.tagName == "INPUT" && (the_field.type == "text" || the_field.type == "password")) || the_field.tagName == "TEXTAREA"){
					if(the_field.value == ""){
						bad_field = true;
					}
				}
				if(the_field.tagName == "SELECT"){
					if(the_field.value == ""){
						bad_field = true;
					}
				}
			}
			
			if(class_ref.indexOf("select-notfirst") > -1){
				if(the_field.selectedIndex == 0){
					bad_field = true;
				}
			}
			
			
			if(bad_field){
				throwFlag(field_name);
				proceed = false;
			} else {
				hideFlag(field_name);
			}
		}
	}
	
	return proceed;
}

function submitAction(thisForm){
	var process = validateFields(thisForm);
	return process;
}

function submitLinkAction(button,theForm){
	if($(theForm)){
		theForm = document.forms[theForm].name;
	}
	var process = submitAction(theForm);
	if(button.tagName == "A" && process && (document.forms[theForm] || $(theForm))){
		if(document.forms[theForm]){
			document.forms[theForm].submit();
		} else {
			$(theForm).submit();
		}
		return false;
	}
	return process;
}



if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", loadAction, false);
}



/*@cc_on @*/
/*@if (@_win32)
document.write("<script id=__ie_onload defer src=javascript:void(0)><\/script>");
var script = document.getElementById("__ie_onload");
script.onreadystatechange = function() {
    if (this.readyState == "complete") {
        loadAction(); // call the onload handler
    }
};
/*@end @*/


if (/WebKit/i.test(navigator.userAgent)) { // sniff
    var _timer = setInterval(function() {
        if (/loaded|complete/.test(document.readyState)) {
            clearInterval(_timer);
            loadAction(); // call the onload handler
        }
    }, 10);
}



window.onload = loadAction;