/*!
 * This file is a part of Mibew Messenger.
 *
 * Copyright 2005-2016 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Mibew=Mibew||{};!function(t){if(!t.Widget){t.Objects=t.Objects||{},t.Widget=function(e){this.requestedScripts={},this.handlers=[],this.handlersDependencies={},this.requestURL=e.requestURL,this.requestTimeout=e.requestTimeout,this.visitorCookieName=e.visitorCookieName,this.inviteStyle=e.inviteStyle,this.locale=e.locale,this.dataToSend={},t.Utils.loadStyleSheet(e.inviteStyle)},t.Widget.prototype.makeRequest=function(){var e=t.Utils.readCookie(this.visitorCookieName);this.dataToSend.entry=escape(document.referrer),this.dataToSend.locale=this.locale,this.dataToSend.rnd=Math.random(),e!==!1?this.dataToSend.user_id=e:this.dataToSend.user_id&&delete this.dataToSend.user_id,t.Utils.loadScript(this.requestURL+"?"+this.getQuery(),"mibew-response-script"),this.dataToSend={}},t.Widget.prototype.getQuery=function(){var t=[];for(var e in this.dataToSend)this.dataToSend.hasOwnProperty(e)&&t.push(e+"="+this.dataToSend[e]);return t.join("&")},t.Widget.prototype.sendToServer=function(t){for(var e in t)if(t.hasOwnProperty(e)){var i=t[e];("string"==typeof i||"number"==typeof i)&&("string"==typeof i&&(i=encodeURIComponent(i)),this.dataToSend[e]=i)}},t.Widget.prototype.onResponse=function(e){var i=e.load,n=e.handlers,o=e.data,a=e.dependencies,r=this;for(var s in i)i.hasOwnProperty(s)&&(s in this.requestedScripts||(this.requestedScripts[s]={},this.requestedScripts[s].url=i[s],this.requestedScripts[s].status="loading",this.loadScript(s)));for(var d in a)a.hasOwnProperty(d)&&(d in this.handlersDependencies||(this.handlersDependencies[d]=a[d]));for(var c=0;c<n.length;c++){var h=n[c];this.canRunHandler(h)?t.APIFunctions[h](o):h in this.handlers||(this.handlers[h]=function(){t.APIFunctions[h](o)})}this.cleanUpAfterRequest(),window.setTimeout(function(){r.makeRequest()},this.requestTimeout)},t.Widget.prototype.cleanUpAfterRequest=function(){document.getElementsByTagName("head")[0].removeChild(document.getElementById("mibew-response-script"))},t.Widget.prototype.loadScript=function(e){var i=this,n=t.Utils.loadScript(this.requestedScripts[e].url,e);n.onload=function(){i.scriptReady(e)},n.onreadystatechange=function(){("complete"==this.readyState||"loaded"==this.readyState)&&i.scriptReady(e)}},t.Widget.prototype.scriptReady=function(t){this.requestedScripts[t].status="ready";for(var e in this.handlers)this.handlers.hasOwnProperty(e)&&this.canRunHandler(e)&&(this.handlers[e](),delete this.handlers[e])},t.Widget.prototype.canRunHandler=function(t){for(var e=this.handlersDependencies[t],i=0;i<e.length;i++)if("ready"!=this.requestedScripts[e[i]].status)return!1;return!0},t.Widget.init=function(e){t.Objects.widget=new t.Widget(e),t.Objects.widget.makeRequest()},t.Invitation={},t.Invitation.create=function(t){var e=t.operatorName,i=t.avatarUrl,n=t.threadUrl,o=t.acceptCaption,a='<div id="mibew-invitation-popup" style="display: none;">';a+='<div id="mibew-invitation-close"><a href="javascript:void(0);" onclick="Mibew.Invitation.reject();">&times;</a></div>',i&&(a+='<div id="mibew-invitation-avatar-wrapper"><img id="mibew-invitation-avatar" src="'+i+'" title="'+e+'" alt="'+e+'" onclick="Mibew.Invitation.accept();" /></div>'),e&&(a+='<h1 onclick="Mibew.Invitation.accept();">'+e+"</h1>"),n&&(a+='<iframe id="mibew-invitation-frame" src="'+n+'" onload="Mibew.Invitation.show();" frameBorder="0"></iframe>'),o&&(a+='<div id="mibew-invitation-accept" onclick="Mibew.Invitation.accept();">'+o+"</div>"),a+='<div style="clear: both;"></div></div>';var r=document.getElementById("mibew-invitation");r&&(r.innerHTML=a)},t.Invitation.show=function(){var e=document.getElementById("mibew-invitation-popup");e&&(t.Invitation.trigger("show"),e.style.display="block")},t.Invitation.hide=function(){var e=document.getElementById("mibew-invitation-popup");e&&(t.Invitation.trigger("hide"),e.parentNode.removeChild(e))},t.Invitation.accept=function(){document.getElementById("mibew-agent-button")&&(t.Invitation.trigger("accept"),document.getElementById("mibew-agent-button").onclick(),t.Invitation.hide())},t.Invitation.reject=function(){t.Invitation.trigger("reject"),t.Objects.widget.sendToServer({invitation_rejected:1}),t.Invitation.hide()};var e={};t.Invitation.on=function(t,i){"string"==typeof t&&"function"==typeof i&&(e.hasOwnProperty(t)||(e[t]=[]),e[t].push(i))},t.Invitation.trigger=function(t,i){if("undefined"==typeof i&&(i={}),e.hasOwnProperty(t))for(var n=e[t],o=0,a=n.length;a>o;o++)n[o](i)},t.APIFunctions={},t.APIFunctions.updateUserId=function(e){t.Utils.createCookie(t.Objects.widget.visitorCookieName,e.user.id)},t.APIFunctions.invitationCreate=function(e){t.Invitation.create(e.invitation)},t.APIFunctions.invitationClose=function(){t.Invitation.hide()}}}(Mibew);