/**
 * Created by niuyuanqiang on 16/9/28.
 */
 var temp = '<% try { %><% var hello=_.hello;var div=_.div; %> <div><%= _method.__escapehtml.escaping(_method.__escapehtml.detection(hello)) %></div> <% } catch(e) {_method.__throw("Juicer Render Exception: "+e.message);} %>';

function getreturn(str) {
  return function ($) {
    console.log($==='\n')
    return str;
  }
}

temp = temp
  .replace(/\\/g, getreturn("\\\\"))
  .replace(/[\r\t\n]/g, getreturn(" "))
  .replace(/'(?=[^%]*%>)/g, getreturn("\t"))
  .split("'").join("\\'")
  .split("\t").join("'")
  .replace(/<%=(.+?)%>/g, getreturn("';_out+=$1;_out+='"))
  .split("<%").join("';")
  .split("%>").join("_out+='")+
"';return _out;";