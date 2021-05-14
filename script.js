var temp_n=0,temp_s='',username=getCookie('username');
window.onload=function(){
	setCookie('visited','true',3650);
	if(username!="")alert('欢迎 '+username+' 再次访问');
	else{
		if(getCookie('yuck')=='true');
		else{
			username=prompt('留个名字好吗，以便将后称呼您:');
			if(username==''||username==null)setCookie('yuck','true',3650);
			else{
				setCookie('username',username,3650);
				setCookie('named','true',3650);
			}
		}
	}
	if(getCookie('named')=='true'){
		document.getElementById('welcome').innerHTML='Hi,'+username;
	}
}
function changeTitle(string){
	document.title=string;
}
function backToHome(){
	window.location.href='/';
}
function modifyStance(id){
	document.getElementById(id).innerHTML='按什么按';
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