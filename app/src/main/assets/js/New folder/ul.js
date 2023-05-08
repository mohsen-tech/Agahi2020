var urlsite_ag="http://agahi2020.com";
var urlsite_tk="http://192.168.2.2/agahi2020";

function GetQueryString()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('#') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('='); 
        vars[hash[0]] = hash[1];
    }
    return vars;
}

function LoadGetJson(url,FEvent)
{ 
    var xmlhttp=new XMLHttpRequest(); 
    xmlhttp.onreadystatechange=function()
    {
        if(xmlhttp.readyState==4 && xmlhttp.status==200)
        {
           FEvent(eval(xmlhttp.responseText),1);
        }
    }
    xmlhttp.open("GET",url,true);
    xmlhttp.send();
}

