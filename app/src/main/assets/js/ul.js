var urlsite_ag="http://agahi2020.com";
 
//var urlsite_tk="http://192.168.2.2/takhfif2020";
var urlsite_tk="http://www.takhfif2020.ir";

var urlsite_bz="http://www.bazar2020.ir";
//var urlsite_bz="http://192.168.2.2/bazar";

var urlsite_nz="http://www.razavi-agri-eng.ir";

if(jsi()) 
{
    window.alert=alertt; 
    var viewPortTag=document.createElement('meta');
    viewPortTag.id="viewport";
    viewPortTag.name = "viewport";
    viewPortTag.content = "width=320; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;";
    document.getElementsByTagName('head')[0].appendChild(viewPortTag);
}

function ExeFunc(v)
{
	if(jsi()) 
		JSInterface.ExeFunc(v);
}
 
 
function InitFa()
{
	var list_txtfa=$(".txtfa");
	for(var il=0;il<list_txtfa.length;il++)
	{
		if($(list_txtfa[il]).context.nodeName=="SELECT")
		{ 
			for(var j=0;j<$(list_txtfa[il]).context.length;j++)
				$(list_txtfa[il]).context[j].innerText=parsePersian($(list_txtfa[il]).context[j].innerText); 
			continue;	
		}

		$(list_txtfa[il]).html(parsePersian($(list_txtfa[il]).text()));
		if($(list_txtfa[il]).context.placeholder)$(list_txtfa[il]).context.placeholder=parsePersian($(list_txtfa[il]).context.placeholder);
		if($(list_txtfa[il]).context.defaultValue)$(list_txtfa[il]).context.defaultValue=parsePersian($(list_txtfa[il]).context.defaultValue);
	}
}


window.confirm=function(msg,event){
	var strIn="<div class='confirmBox'><div class='confirmMsg'></div><button class='confirmBtn confirmBtnY'>ﺑﻠﯽ</button><button class='confirmBtn confirmBtnN'>ﺧﯿﺮ</button></div>";
	if($(".confirmMsg").length==0) $(document.body).append(strIn);

	if(ppt)
	  $(".confirmMsg").text(ppt(msg));
	else
	  $(".confirmMsg").text((msg));
	  
	$(".confirmBox").css({"display":"block"});		
	$(".confirmBtn").click(function(){ 
		$(".confirmBox").css({"display":"none"});
		if(event) event(this.className.indexOf("Y")>0);
		$(".confirmBtn").unbind('click');
	});  
    window.scrollTo(0, 0);
}

function GetVer()
{
	try 
    {  
       return JSInterface.GetVerNumber();
    }
    catch(err) 
    { 
       return -1;
    }
	
}
function CheckLoadIframe(ml,func,txt)
{
    var errorload=false;
    var docifr;
    try 
    {  
       var docelm=ml;
       docifr=(docelm.contentWindow.document||docelm.contentDocument);
       errorload=(docifr.title.indexOf("404")>-1)||(docifr.title.indexOf("found")>-1)||(docifr.title.indexOf("Error")>-1)||(docifr.title.indexOf("error")>-1)||   (docifr.title.indexOf("500")>-1);
    }
    catch(err) 
    { 
       errorload=true;
    }

    if(func) func(!errorload,ml);
}


var WinGetVal_onclick=function(v){
    alert("onclick: "+v);
}

function WinGetVal(cmd)
{
    if(cmd=="exit"){
        $(".WinGetVal").css({"display": "none"});
        $(".TxtGetVal").val("");
    }

    if(cmd=="show"){
        $(".TxtGetVal").val("");
        $(".WinGetVal").css({"display": "block"});
        window.scrollTo(0, 0);
    }
    
    if((cmd=="ok")||(cmd=="click")||(cmd=="onclick")){
        WinGetVal_onclick($(".TxtGetVal").val());
        $(".WinGetVal").css({"display": "none"});
        $(".TxtGetVal").val("");
    }
}

function SetBackHref()
{
    SetDV("BackHref",window.location.href);
}

function OpenBrowser(url)
{
	if(jsi())
	   JSInterface.OpenChrome(url);
	else
	   window.open(url, '_blank');
}
 
function LoadingStart()
{ 
   if(jsi())
      JSInterface.UpWin("loading.html");
}
 
function LoadingStop()
{ 
  if(jsi())
     JSInterface.UpWin("");
}

function Email(v)
{ 
  if(jsi())
     JSInterface.Email(v);
   else
     alert(v);
}

function Dial(v)
{ 
  if(jsi())
     JSInterface.Dial(v);
   else
     alert(v);
}

function DialogTell(title,msg,tell)
{ 
  if(jsi())
     JSInterface.DialogTell(title,msg,tell);
   else
     alert(v);
}


function SelectItem(val)
{ 
    if(jsi())
      JSInterface.SelectItem(val);
}


function GoBackHref()
{
    var BackHref=GetDV("BackHref");
    try
    {
		if(BackHref.length>1) 
		{
			BackHref=BackHref.replace("file:///android_asset/","");
			curl(BackHref);
			//alertt("Go To Size:"+BackHref);
		}
		return (BackHref.length>4);
    }
	catch(err){return false;}
}


function onerrorimg(item)
{// onerror="onerrorimg(this);"
    item.src="";
}

function UpWin(v)
{
    if(jsi())
      JSInterface.UpWin(v);
//     else
//       localStorage.setItem(att,val)
//     item.src="";
}

function GetQueryString()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('#') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('='); 
        vars[hash[0]] = hash[1];
    }

    for(var i = 0; i < hashes.length; i++)
    {
		try { 
			hash = hashes[i].split('='); 
			if(eval("window."+[hash[0]])==undefined) 
			   eval("window."+[hash[0]]+" = "+hash[1]);
		}
		catch(err){}
    }

    return vars;
}
 
function alertj(v)
{
	alert(JSON.stringify(v));
}

function ajax(a,b,c)
{
	LoadGetJson.apply(this, arguments);
}

 var xmlhttpGlobal=new XMLHttpRequest();
function LoadGetJson(a,b,c,d)
{ 
    var url="",FEvent=[],CancelLoading=false,newxhr=false;
 
    if(arguments.length==2)
    {
        url=a;
        FEvent=b;
    }
    
    if(arguments.length==3)
    {
        url=a;
        FEvent=b;
        newxhr=c;
    }
    
    else if(arguments.length==4)
    {
        url=a;;
        FEvent=b;
        if(c!=null) newxhr=c;
        CancelLoading=d;
    }

    var xmlhttp;
    if(newxhr)
    {
    	xmlhttp=xmlhttpGlobal;
    	if(xmlhttp.readyState!= 0)
    		xmlhttp.abort();
    }
    else
    	xmlhttp=new XMLHttpRequest();
    
    if(!CancelLoading) 
         LoadingStart();

    xmlhttp.onreadystatechange=function()
    {
        if(xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            try { 
                FEvent(eval(xmlhttp.responseText),1); 
            }
            catch(err) {
                prompt("Error:"+err+"  "+xmlhttp.responseText);
            }
            LoadingStop();
        }

        if(xmlhttp.readyState==4 && xmlhttp.status==0)
        { 
            LoadingStop();
            if(jsi())
            {
                if(JSInterface.GetUrl().indexOf("tk_error_connetion.html")==-1)
                {
                    JSInterface.ExeFunc(404);  
                    alert("خطا در برقراری ارتباط"); 
                    ChengeUrl("tk_error_connetion.html#Error=404&bref="+encodeURIComponent(JSInterface.GetUrlConnect()));
                }
            } 
            else
            {
                if(document.location.href.indexOf("tk_error_connetion.html")==-1)
                    ChengeUrl("tk_error_connetion.html#Error=404&bref="+encodeURIComponent(document.location.href));
            }
            
        } 
    }
    xmlhttp.open("GET",url,true);
    xmlhttp.send();
}

function ChengeUrl(url){
	ChangeUrl(url);
}

function curl(url){
	ChangeUrl(url);
} 
//JSInterface.OpenChrome
  

function ChangeUrl(url)
{  
    if(jsi())
        JSInterface.NewPage(url);
    else
    {
        if(location.protocol=="file:")
        {
           var iurl= RemoveAttUrl(location.href.substr(location.href.lastIndexOf("/")+1));
           if(RemoveAttUrl(url)==iurl)
           { 
               window.location.replace(".");
               location.reload();
               
               window.location.replace(url);
               location.reload();

           }
           else
               window.location.replace(url);
        }
        else
            window.location.replace(url);
    }


}

function RemoveAttUrl(url)
{
    var ss=url.lastIndexOf("#");
    if(ss>0)
    {
        var nurl=url.substr(0,ss);
        return nurl;
    }
    return url;
}

 
function SetDV(att,val)
{
    if(jsi())
      JSInterface.SetDV(att,val);
    else
      localStorage.setItem(att,val)
}

function GetDV(att)
{
    if(jsi())
       return JSInterface.GetDV(att);
    else 
       return localStorage.getItem(att);
}

function IsEmptyDV(att)
{
    if(jsi())
        return JSInterface.IsEmptyDV(att);
    else
    {
        var attv=GetDV(att);
        if(attv==undefined) return true;
        return (attv.length==0);
    }
}

function gotoback(){
    ChengeUrl(decodeURIComponent(GetQueryString().backref));
} 

function alertt(v){ 
    try {
       if(JSInterface!=undefined) JSInterface.Alert(v);
    }
    catch(err) { 
       alert(v);
    }
}
 
function jsi(){ 
    try {
       if(JSInterface==undefined) return false;
    }
    catch(err) { 
       return false;
    }
    return true;
}
//nezam mohandesi

var _upbox=-1;
function ScrollDown(element,eventfunc)
{
	$(document).ready(function(){
		$(element).scroll(function() {
		  var el=$(element)[0];
		  if(!el)el=element;
// 		  var show_upbox = !($(".upbox")[0].style.display=="none");
// 		  if((el.scrollTop>el.clientHeight)&&(_upbox!=0)){//
// 		    $(".upbox").fadeToggle("slow");
// 		    _upbox=0;
// 		  }
		  
// 		  if((el.scrollTop<2)&&(_upbox!=0)){//
// 		    $(".upbox").fadeToggle("slow");
// 		    _upbox=0;
// 		  }

// 		  if((el.scrollTop<el.clientHeight)&&(_upbox!=1)){
// 		    $(".upbox").fadeToggle("slow");
// 		    _upbox=1;
// 		  }

	      if((el.scrollHeight-el.scrollTop)<=(el.clientHeight+1)){
			if(eventfunc) 
			    eventfunc();
		  }
		  
		});
	});
}

function NavUrl(arr)
{
	var sret="",span="<span class='spanRoute'>></span>";
	for(var i=0;i<(arr.length-1);i++)
		sret+="<span onclick=curl('"+arr[i].url+"')>"+ppt(arr[i].name)+"</span>"+span;
	
	sret+="<span onclick=curl('"+arr[i].url+"')>"+ppt(arr[i].name)+"</span>";
	$(".RouteTop").html(sret);
	return sret;
}
 
 
 