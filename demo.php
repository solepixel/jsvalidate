<?php if(isset($_POST['field1'])){ header("Location: /"); } ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>JSValidate Beta Demo</title>
<script type="text/javascript" language="javascript" src="scriptaculous/lib/prototype.js"></script>
<script type="text/javascript" language="javascript" src="scriptaculous/src/scriptaculous.js"></script>
<script type="text/javascript" language="javascript" src="detectBrowser.js"></script>
<script type="text/javascript" language="javascript" src="versions/jsvalidate_beta04.js"></script>

<style type="text/css">
body,td,th {
	font-family: Lucida Sans Unicode, Trebuchet MS, Tahoma, sans-serif;
	font-size: 12px;
}
input { border:1px solid #000000; padding:2px; margin-bottom:3px; font-family:"Lucida Sans Unicode", "Trebuchet MS", Tahoma, sans-serif; font-size:11px; }
.submit_buttons { margin-top:10px; }
/*
.submitLink { border:1px solid #000000; padding-top:2px; float:left; width:90px; height:20px; text-align:center; background:#D4D0C8; text-decoration:none; }
.submitButton { padding:6px; float:left; height:20px; width:90px; }
*/
.jsvalidation { margin-left:10px; font-size:10px; color:#FF0000; font-family:"Lucida Sans Unicode", "Trebuchet MS", Tahoma, sans-serif; }
#notes { color:#666666; padding-top:10px; margin-top:20px; border-top:1px solid #333333; }
.dim, .dim a { color:#CCCCCC; }

.section { font-size:larger; list-style:none; font-weight:bold; padding-top:8px; margin-left:-12px; margin-bottom:5px; }

.good { color:#33CC00; }
.bad { color:#FF0000; }
.debug { color:#FF6600; }
.ugly { color:#CC0000; }
.untested { color:#003399; }
</style>
</head>

<body>
<h1>JSValidate Beta</h1>
<div id="debugger"></div>
<p><a href="jsvalidate.js" target="_blank">source file</a></p>

<p><?php if(isset($_POST['field1']) && !empty($_POST['field1'])){ print_r($_POST); } ?></p>
<table width="100%" cellpadding="0" cellspacing="10" border="0">
	<tr>
		<td align="left" valign="top"><form name="junk" id="stuff" action="<?php echo $_SERVER['REQUEST_URI']; ?>" method="post" onsubmit="return submitAction();">
			<div class="form_elements">
				<div id="jsvalidator_field_one" class="jsvalidation">This is MY error message! ahahah</div>
				Required: <input type="text" class="jsrequired {errorLocation:'none', startGone: true}" name="field1" id="field_one" maxlength="255" /><br />
				Required: <input type="text" class="jsrequired" name="field2" maxlength="255" /><br />
				Alphanumeric: <input type="text" class="jsvalidate_alphanum {useBR: 'none', highlightColor: '#00FF00'}" name="field3" maxlength="25" /><br />
				Letters Only: <input type="text" class="jsvalidate_alpha" name="field4" maxlength="25" /><br />
				Email Address (required): <input type="text" class="jsrequired jsvalidate_email" alt="this is my &lt;strong&gt;custom&lt;/strong&gt; message" name="field5" maxlength="255" /><br />
				US or Canada Zip Code: <input type="text" class="jsvalidate_uscanzip" name="field6" maxlength="10" /><br />
				US Phone: <input type="text" class="jsvalidate_usphone" name="field7" maxlength="15" /><br />
				Credit Card: <input type="text" class="jsvalidate_creditcard" name="field8" maxlength="19" /><br />
				US State (2 letter, uppercase): <input type="text" class="jsvalidate_usstate" name="field9" maxlength="2" /><br />
				SSN: <input type="text" class="jsvalidate_ssn" name="field13" maxlength="11" /><br />
				Required Text area:<br />
				<textarea name="field10" rows="5" cols="60" class="jsrequired"></textarea><br />
				Required Select: <select name="field11" class="jsrequired">
					<option value="">Select one</option>
					<option value="something">one</option>
					<option value="two">two</option>
				</select><br />
				First item is unaccepted: <select name="field12" class="select-notfirst">
					<option value="asdf">Select one</option>
					<option value="something">one</option>
					<option value="two">two</option>
				</select>
			</div>
			<div class="submit_buttons">
				<!--  onclick="return submitLinkAction(this,'junk');" -->
				<input type="button" class="submit_action" value="a button" id="aButton" />
				<a href="#" class="submitLink submit_action">submit link</a> &nbsp;
				<input type="submit" value="submit button" id="submitButton" />
			</div>
		</form></td>
		<td align="left" valign="top"><form name="form2" id="form2" action="<?php echo $_SERVER['REQUEST_URI']; ?>" method="post" onsubmit="return submitAction();">
				<div class="form_elements">
					username: <input type="text" class="jsrequired ajax" name="username" id="username" alt="username is required" maxlength="255" /><br />
					password: <input type="password" class="jsrequired ajax" name="password" maxlength="25" alt="password is required" /><br />
				</div>
				<div class="submit_buttons">
					<!-- onclick="return submitLinkAction(this,'form2');" -->
					<a href="#" class="submitLink submit_action">login link</a> &nbsp;
					<input type="submit" value="login button" id="submitButton2" />
				</div>
			</form>
		</td>
	</tr>
</table>

<div id="notes">
	<h1>Current Version Notes</h1>
	<table width="100%" border="0" cellspacing="10" cellpadding="0">
		<tr>
			<td width="57%" align="left" valign="top"><h2>Browser/OS Report:</h2>
				<h3>You are using <script type="text/javascript" language="javascript">document.write(BrowserDetect.browser + " " + BrowserDetect.version); </script></h3>
				<ul>
					<li class="section">Windows XP</li>
					<li><strong>Firefox 2.0:</strong> <span class="good">No Errors</span></li>
					<li><strong>Firefox 1.5:</strong> <span class="good">No Errors</span></li>
					<li style="list-style:none;">&nbsp;</li>
					<li><strong>Internet Explorer 7:</strong> <span class="good">No Errors</span></li>
					<li><strong>Internet Explorer 6:</strong> <span class="good">No Errors</span></li>
					<li><strong>Internet Explorer 5.55 (<a href="http://tredosoft.com/Multiple_IE" target="_blank">faux</a>):</strong> <span class="good">No Errors</span></li>
					<li><strong>Internet Explorer 5.01 (<a href="http://tredosoft.com/Multiple_IE" target="_blank">faux</a>):</strong> <span class="debug">Currently Debugging</span> <ul class="ugly">
						<li>Continue to get error: "Exception thrown and not caught", possibly related to storing certain Regular Expressions in the format: /[expression]/</li>
					</ul></li>
					<li><strong>Internet Explorer 4.01 (<a href="http://tredosoft.com/Multiple_IE" target="_blank">faux</a>):</strong><ul class="ugly">
						<li>Continue to get error: &quot;Syntax error &quot;, possibly related to storing certain Regular Expressions in the format: /[expression]/</li>
						<li>Throws an error (&quot;Object doesn't support this property or method&quot;) on load at or near conditional compilation code</li>
					    <li>Throws error: &quot;Object Expected&quot; on submit of form. </li>
					</ul></li>
					<li class="dim"><strong>Internet Explorer 3 (<a href="http://tredosoft.com/Multiple_IE" target="_blank">faux</a>):</strong> Not Supported</li>
					<li style="list-style:none;">&nbsp;</li>
					<li><strong>Safari 3 Beta:</strong> <span class="good">No Errors</span></li>
					<li style="list-style:none;">&nbsp;</li>
					<li><strong>Mozilla 1.7:</strong> <span class="good">No Errors</span></li>
					<li><strong>Netscape 8.1 (Displayed like Firefox):</strong> <span class="good">No Errors</span></li>
					<li><strong>Netscape 8.1 (Displayed like IE):</strong> <span class="good">No Errors</span></li>
					<li><strong>Opera 9:</strong> <span class="good">No Errors</span></li>
					<li><strong>K-Meleon 1.1:</strong> <span class="good">No Errors</span></li>
				</ul>
				
				<ul>
					<li class="section">Windows 98/SE/ME</li>
					<li><strong>Firefox 2.0:</strong> <span class="untested">Not Tested</span></li>
					<li><strong>Firefox 1.5:</strong> <span class="untested">Not Tested</span></li>
					<li style="list-style:none;">&nbsp;</li>
					<li><strong>Internet Explorer 7:</strong> <span class="untested">Not Tested</span></li>
					<li><strong>Internet Explorer 6:</strong> <span class="untested">Not Tested</span></li>
					<li><strong>Internet Explorer 5.55:</strong> <span class="untested">Not Tested</span></li>
					<li><strong>Internet Explorer 5.01:</strong> <span class="untested">Not Tested</span></li>
					<li><strong>Internet Explorer 4.01:</strong> <span class="untested">Not Tested</span></li>
					<li class="dim"><strong>Internet Explorer 3:</strong> Not Supported</li>
					<li style="list-style:none;">&nbsp;</li>
					<li><strong>Safari 3 Beta:</strong> <span class="untested">Not Tested</span></li>
					<li style="list-style:none;">&nbsp;</li>
					<li><strong>Mozilla 1.7:</strong> <span class="untested">Not Tested</span></li>
					<li><strong>Netscape 8.1 (Displayed like Firefox):</strong> <span class="untested">Not Tested</span></li>
					<li><strong>Netscape 8.1 (Displayed like IE):</strong> <span class="untested">Not Tested</span></li>
					<li><strong>Opera 9:</strong> <span class="untested">Not Tested</span></li>
					<li><strong>K-Meleon 1.1:</strong> <span class="untested">Not Tested</span></li>
				</ul>
				
				<ul>
					<li class="section">Mac OS X</li>
					<li><strong>Firefox 2.0:</strong> <span class="untested">Not Tested</span></li>
					<li><strong>Firefox 1.5:</strong> <span class="good">No Errors</span></li>
					<li style="list-style:none;">&nbsp;</li>
					<li><strong>Safari 2.0.4:</strong> <span class="bad">Not Working - Need to debug.</span></li>
					<li><strong>Safari 3 Beta:</strong> <span class="untested">Not Tested</span></li>
					<li style="list-style:none;">&nbsp;</li>
					<li><strong>Camino 0.8.2:</strong> <span class="good">No Errors</span></li>
					<li><strong>Camino 0.7:</strong> <span class="untested">Not Tested</span></li>
					<li style="list-style:none;">&nbsp;</li>
					<li><strong>Internet Explorer 5.2:</strong> <span class="bad">Not Working - Need to debug.</span></li>
					<li class="dim"><strong>Internet Explorer &lt; 5.2:</strong> Not Supported</li>
					<li style="list-style:none;">&nbsp;</li>
					<li><strong>Opera 9:</strong> <span class="untested">Not Tested</span></li>
				</ul>			</td>
			<td width="43%" align="left" valign="top"><h2>Current Bugs/Issues:</h2>
				<ul>
					<li class="section">Page Load</li>
					<li>None at this time.</li>
				</ul>
				
				<ul>
					<li class="section">Insert HTML</li>
					<li>None at this time.</li>
				</ul>
				
				<ul>
					<li class="section">Validation</li>
					<li class="bad">Ajax Request runs separate form standard validation. Need to mesh the 2</li>
					<li>Seeking alternate method of storing regular expressions.</li>
					<li>Need to setup a minlength validator.</li>
				</ul>
				<p><a href="http://validator.w3.org/check?uri=referer" target="_blank"><img src="http://www.w3.org/Icons/valid-xhtml10" alt="Valid XHTML 1.0 Transitional" height="31" width="88" border="0" /></a></p>			</td>
		</tr>
	</table>
</div>
</body>
</html>
