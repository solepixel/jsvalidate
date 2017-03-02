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
	endColor: '#FFFFFF', //this is what you generally want to set to the background color behind the form elements.
	ajaxURL: '/dev/jsvalidate/ajaxtest.php' // if not blank, validator will attempt to check value against this URL; if return value is not blank, error container will be populated with return value
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
	},
	ajax: {
		className: "ajax",
		defaultMessage: "This value should change based on ajax request result."
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

// Removes the last element from an array
// and returns that element.
if (!Array.prototype.pop) {
	Array.prototype.pop = function() {
		var last;
		if (this.length) {
			last = this[this.length - 1];
			this.length -= 1;
		}
		return last||null;
	};
}

// Adds one or more elements to the end of an array and returns
// the new length of the array.
if (!Array.prototype.push) {
	Array.prototype.push = function() {
		for (var i = 0; i < arguments.length; ++i) {
			this[this.length] = arguments[i];
		}
		return this.length;
	};
}

function isset(v) {
	return((typeof(v)=='undefined' || v.length==0) ? false : true);
}

function getElementsByClassName(className, tag, elm){
	var testClass = new RegExp("(^|\\s)" + className + "(\\s|$)");
	var tag = tag || "*";
	var elm = elm || document;
	var elements = (tag == "*" && elm.all)? elm.all : elm.getElementsByTagName(tag);
	var returnElements = [];
	var current;
	var length = elements.length;
	for(var i=0; i<length; i++){
		current = elements[i];
		if(testClass.test(current.className)){
			returnElements.push(current);
		}
	}
	return returnElements;
}



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
var ajaxItems = new Array();
var ajax_pos;
var these_options = eval("({})");


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


function getParentForm(el){
  while(el.parentNode != null && el.tagName != "FORM") el = el.parentNode;
  return (el.name) ? el.name : el.id;
}

function attachSubmit(form_ref){
	var form_attach;
	var parent_ref;
	if(document.forms[form_ref.name]){
		form_attach = document.forms[form_ref.name];
		form_ref = form_ref.name;
	} else {
		form_attach = $(form_ref.id);
		form_ref = form_ref.id;
	}
	if(window.addEventListener){ // Mozilla, Netscape, Firefox
		form_attach.onsubmit = function(){ return submitAction(form_ref,'input','submit'); };
	} else { // IE
		form_attach.attachEvent('onsubmit', function(){ return submitAction(form_ref,'INPUT','submit'); });
	}
	
	if(getElementsByClassName(js_options['submitClass']).length > 0){
		var buttons = getElementsByClassName(js_options['submitClass']);
		for(b=0; b < buttons.length; b++){
			parent_ref = getParentForm(buttons[b]);
			if(parent_ref == form_ref){
				tag = buttons[b].tagName;
				if(buttons[b].type){
					type = buttons[b].type.toLowerCase();
				} else {
					type = "";
				}
				if(window.addEventListener){ // Mozilla, Netscape, Firefox
					buttons[b].onclick = function(){ return submitAction(form_ref,tag,type); };
				} else { // IE
					buttons[b].attachEvent('onclick', function(){ return submitAction(form_ref,tag,type); });
				}
			}
		}
	}
}


function extractOptions(vals){
	var first_pos = vals.indexOf("{");
	var last_pos = vals.indexOf("}") + 1;
	var the_options = vals.substring(first_pos,last_pos);
	return the_options;
}

function attachValidation(fieldref,form_name){	
	var validation_message = "";
	var the_field;
	var doBlur = false;
	var these_options = eval("({})");
	
	if(document.forms[form_name].elements[fieldref]){
		the_field = document.forms[form_name].elements[fieldref];
	} else {
		the_field = $(fieldref);
	}
	classes = the_field.className;

	if(classes){
		if(classes.indexOf("{") > -1 && classes.indexOf("}") > -1){
			these_options = extractOptions(classes).toString();
			classes = classes.replace(these_options,"");
			these_options = eval("(" + these_options + ")");
		}
		classes.trim();
		classes = classes.split(" ");
		
		for(c=0; c < classes.length; c++){
			for(items in js_validators){
				if(classes[c] == js_validators[items]['className']){
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
				if(classes[c] == custom_validators[items]['className']){
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
	}
	
	useBlur = (isset(these_options['useBlur'])) ? these_options['useBlur'] : js_options['useBlur'];
	
	if(validation_message != "" && validation_message != null){
		var field_name = js_options['errorIDPrefix'] + "_" + fieldref;
		field_name = field_name.trim();
		
		errorTag = (isset(these_options['errorTag'])) ? these_options['errorTag'] : js_options['errorTag'];
		errorClass = (isset(these_options['errorClass'])) ? these_options['errorClass'] : js_options['errorClass'];
		startGone = (isset(these_options['startGone'])) ? these_options['startGone'] : js_options['startGone'];
		useBR = (isset(these_options['useBR'])) ? these_options['useBR'] : js_options['useBR'];
		errorLocation = (isset(these_options['errorLocation'])) ? these_options['errorLocation'] : js_options['errorLocation'];
		
		var html = "<";
		
		html += errorTag;
		html += " id=\"" + field_name + "\" ";
		if(errorClass != ""){
			html += "class=\"" + errorClass + "\" ";
		}
		html += "style=\"opacity:0; filter:alpha(opacity=0);";
		if(startGone){
			html +=	" display:none;";
		}
		html += "\">";
		if(useBR != "none"){
			if(useBR == "before" || useBR == "both"){
				html += '<br />';
			}
		}
		html += validation_message;
		if(useBR != "none"){
			if(useBR == "after" || useBR == "both"){
				html += '<br />';
			}
		}
		
		html += "</";
		html += errorTag;
		html += ">";
		//if(js_options['errorLocation'] == "afterEnd" || js_options['errorLocation'] == "beforeBegin"){
		if(errorLocation == "afterEnd" || errorLocation == "beforeBegin"){
			/*if((BrowserDetect.browser == "Explorer" && BrowserDetect.version < 5.5)){
				//html = "<" + js_options['errorTag'] + " id=\"" + field_name + "\" class=\"" + js_options['errorClass'] + "\">" + validation_message + "</" + js_options['errorTag'] + ">";
				html = "<" + errorTag + " id=\"" + field_name + "\" class=\"" + errorClass + "\">" + validation_message + "</" + errorTag + ">";
			}*/
			the_field.insertAdjacentHTML(errorLocation,html);
		}
		if($(field_name)){
			new Effect.Opacity(field_name, {to:0.0, duration: 0 });
		}
		if(errorLocation == "none" && startGone && $(field_name)){
			$(field_name).style.display = 'none';
		}
	}
	
	if(useBlur){
		//setup onBlur feature;
		if(the_field.type){
			field_type = the_field.type.toLowerCase();
		}
		if((the_field.tagName == "INPUT" && (field_type == "text" || field_type == "password")) || the_field.tagName == "TEXTAREA"){
			if(window.addEventListener){ // Mozilla, Netscape, Firefox
				the_field.onblur = function(){ blurAction(the_field,form_name,true); };
			} else { // IE
				the_field.attachEvent('onblur', function(){ blurAction(the_field,form_name,true); });
			}
		}
		if(the_field.tagName == "SELECT"){
			if(window.addEventListener){ // Mozilla, Netscape, Firefox
				the_field.onchange = function(){ blurAction(the_field,form_name,true); };
				the_field.onblur = function(){ blurAction(the_field,form_name,true); };
			} else { // IE
				the_field.attachEvent('onblur', function(){ blurAction(the_field,form_name,true); });
			}
		}
		if(the_field.tagName == "INPUT" && field_type == "checkbox"){
			if(window.addEventListener){ // Mozilla, Netscape, Firefox
				the_field.onclick = function(){ blurAction(the_field,form_name,true); };
			} else { // IE
				the_field.attachEvent('onclick', function(){ blurAction(the_field,form_name,true); });
			}
		}
	}
}

function blurAction(field_reference,form_ref,isBlur){	
	var field_name;
	var the_result = true;
	var these_options = eval("({})");
	
	if(($(field_reference)) || (document.forms[form_ref].elements[field_reference])){
		field_reference = ($(field_reference)) ? $(field_reference) : document.forms[form_ref].elements[field_reference];
	}
	classes = field_reference.className;
	the_field = (field_reference.id) ? field_reference.id : field_reference.name;	;
	if(classes){
		if(classes.indexOf("{") > -1 && classes.indexOf("}") > -1){
			these_options = extractOptions(classes);
			classes = classes.replace(these_options,"");
			these_options = eval("(" + these_options + ")");
		}
		classes.trim();
		classes = classes.split(" ");
		var bad_field = false;
		var isRequired = false;
		
		hColor = (isset(these_options['highlightColor'])) ? these_options['highlightColor'] : js_options['highlightColor'];
		eColor = (isset(these_options['endColor'])) ? these_options['endColor'] : js_options['endColor'];
		startGone = (isset(these_options['startGone'])) ? these_options['startGone'] : js_options['startGone'];
		errorIDPrefix = (isset(these_options['errorIDPrefix'])) ? these_options['errorIDPrefix'] : js_options['errorIDPrefix'];
		ajaxURL = (isset(these_options['ajaxURl'])) ? these_options['ajaxURl'] : js_options['ajaxURl'];
		errorLocation = (isset(these_options['errorLocation'])) ? these_options['errorLocation'] : js_options['errorLocation'];
		
		for(c=0; c < classes.length; c++){
			field_name = errorIDPrefix + '_' + the_field;
			field_name = field_name.trim();
			
			for(items in custom_validators){
				if(classes[c] == custom_validators[items]['className'] && field_reference.value != ""){
					var thisRegExp = custom_validators[items]['regExp'];
					if(!thisRegExp.test(field_reference.value)){
						bad_field = true;
					}
				}
			}
			
			if(classes[c] == js_validators['required']['className']){
				isRequired = true;
				field_type = field_reference.type.toLowerCase();
				if((field_reference.tagName == "INPUT" && (field_type == "text" || field_type == "password")) || field_reference.tagName == "TEXTAREA"){
					if(field_reference.value == ""){
						bad_field = true;
					}
				}
				if(field_reference.tagName == "SELECT"){
					if(field_reference.value == ""){
						bad_field = true;
					}
				}
				if(field_reference.tagName == "INPUT" && field_type == "checkbox"){
					if(field_reference.checked == false){
						bad_field = true;
					}
				}
			}
			
			if(classes[c] == js_validators['notfirst']['className']){
				if(field_reference.selectedIndex == 0 && field_reference.tagName == "SELECT"){
					bad_field = true;
				}
			}
			
			if(classes[c] == js_validators['ajax']['className']){
				if(isRequired && field_reference.value == ""){
					//don't worry about sending data
				} else {
					if(ajaxURL){
						bad_field = false;
						ajaxArea = field_name;
						if(!ajaxItems.inArray(ajaxArea)){
							ajax_pos = ajaxItems.length;
							ajaxItems[ajax_pos] = ajaxArea;
						}
						poststr = the_field + "=" + encodeURIComponent(field_reference.value);
						new Ajax.Request(ajaxURL, { parameters: poststr, onSuccess: function(t){
								response = t.responseText.trim()
								if(response != ""){
									$(ajaxArea).innerHTML = response;
									throwFlag(ajaxArea,hColor,eColor,startGone);
								} else {
									if(field_reference.value != ""){
										hideFlag(ajaxArea,startGone);
									}
									ajaxItems.remove(ajaxArea);
								}
							}
						});
					}
				}
			}
		}
		
		
		if(bad_field){
			if(errorLocation == "none"){
				if($(field_name)){
					throwFlag(field_name, hColor, eColor,startGone);	
				}
			} else {
				throwFlag(field_name, hColor, eColor,startGone);
			}
			the_result = false;
		} else {
			if(errorLocation == "none"){
				if($(field_name)){
					hideFlag(field_name,startGone);
				}
			} else {
				hideFlag(field_name,startGone);
			}
		}
	}
	
	return the_result;
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


function throwFlag(fieldToFlag, hColor, eColor, gone){
	if((BrowserDetect.browser == "Explorer" && BrowserDetect.version < 5.5)){
		if(gone){
			$(fieldToFlag).style.display = '';
		}
		$(fieldToFlag).style.visibility = 'visible';
	} else {
		if(Element.getOpacity(fieldToFlag) > .75){
			new Effect.Highlight(fieldToFlag,{duration:1.0, startcolor:hColor, endcolor:eColor });
		} else {
			if(gone){
				$(fieldToFlag).style.display = '';
			}
			new Effect.Opacity(fieldToFlag, {to:1.0, duration: .5 });
		}
	}
}

function hideFlag(fieldToHide, gone){
	if((BrowserDetect.browser == "Explorer" && BrowserDetect.version < 5.5)){
		$(fieldToHide).style.visibility = 'hidden';
		if(gone){
			$(fieldToHide).style.display = 'none';
		}
	} else {
		if(Element.getOpacity(fieldToHide) > .25){
			new Effect.Opacity(fieldToHide, {to:0.0, duration: .5 });
			if(gone){
				$(fieldToHide).style.display = 'none';
			}
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
			checkField = blurAction(field_ref,form_ref,false);
			if(!checkField){
				proceed = false;
			}
		}
	}
	
	return proceed;
}

function submitAction(thisForm,tag,type){
	var process = validateFields(thisForm);
	if(ajaxItems.length > 0){
		return false;
	}
	if((tag != "INPUT" || (tag == "INPUT" && type != "submit")) && process && (document.forms[thisForm] || $(thisForm))){
		if(document.forms[thisForm]){
			document.forms[thisForm].submit();
		} else {
			$(thisForm).submit();
		}
		return false;
	}
	return process;
}


if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", loadAction, false);
}



if((BrowserDetect.browser == "Explorer" && BrowserDetect.version < 5.5)){ } else {
	
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

}

if (/WebKit/i.test(navigator.userAgent)) { // sniff
    var _timer = setInterval(function() {
        if (/loaded|complete/.test(document.readyState)) {
            clearInterval(_timer);
            loadAction(); // call the onload handler
        }
    }, 10);
}



window.onload = loadAction;