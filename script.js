window.onload=function(){
	setCookie('visited','true',3650);
	var user=getCookie('username');
	if(user!="")alert('欢迎 '+user+' 再次访问');
	else{
		if(getCookie('yuck')=='true');
		else{
			user=prompt('留个名字好吗，以便将后称呼您:');
			if(user==''||user==null)setCookie('yuck','true',3650);
			else{
				setCookie('username',user,3650);
				setCookie('named','true',3650);
			}
		}
	}
}
function changeTitle(string){
	document.title=string;
}
function backToHome(){
	window.location.href='https://xkh01.tk';
}
function setCookie(name,value,exdays){
	var exp=new Date();
	exp.setTime(exp.getTime()+(exdays*86400000));
	document.cookie=name+'='+value+';expires='+exp.toUTCString();
}
function getCookie(name){
	var name=name+'=',ca=document.cookie.split(';');
	for(var i=0;i<ca.length;i++){
		var c=ca[i].trim();
		if(c.indexOf(name)==0)return c.substring(name.length,c.length);
	}
	return"";
}
function delCookie(name){
	setCookie(name,"",-1);
}