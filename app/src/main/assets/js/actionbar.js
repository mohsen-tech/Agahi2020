
    if(jsi()) setInterval(function(){CheckUpdate(); BtnChLogin();}, 6000); 
	   
    CheckUpdate();
    function CheckUpdate(){
        LoadGetJson(urlsite_nz+"/wservice/?Action=Init",function(val,dEnd)
        { 
            var verNum=GetVer();

            if(parseInt(val.apkNumber)>verNum)
            {
               $(".IconUpdate").css({"display":"block"});
               urlDownload=val.apkUrl;
            }
            else
            {
               $(".IconUpdate").css({"display":"none"});
               urlDownload="";
            }

        },null,true);
    }
 
    
    function IconUpdate_OnClick(){
        if(urlDownload!=""){
            JSInterface.ConfirmT("بروز رسانی","آیا مایل به بروز رسانی هستید؟",urlDownload,"","OpenChrome");
        }
    }
    
   function BtnChLogin()
   {
      if(!(JSInterface.IsEmptyDV("usrId")|JSInterface.IsEmptyDV("pass")))
      {
          var usr=urlsite_nz+"/wservice/?action=Login&usr="+JSInterface.GetDV("usrId")+"&pwd="+JSInterface.GetDV("pass");  
          LoadGetJson(usr,SubChLogin,null,true);
      }
   }
   
   function SubChLogin(val)
   {  
       if(parseInt(val.result)==-1)
       { 
            JSInterface.SetDV("usrId","");  
            JSInterface.SetDV("pass","");
            JSInterface.SetDV("id",""); 
            JSInterface.SetDV("ut",""); 
            JSInterface.SetDV("ul",""); 
            JSInterface.SetDV("city",""); 
            JSInterface.SetDV("nameuser",""); 
            JSInterface.ExeFunc(1);
       }
   }