var user_agent=navigator.userAgent.toLowerCase();
if (user_agent.search("iphone") > -1) {
    alert('Thanks For Visiting On IPhone')
}else if (user_agent.search("windows") > -1) {
    alert('Thanks For Visiting On Windows')
}else if (user_agent.search("android") > -1){
    alert('Thanks For Visiting On Android')
}else{
    alert('Thanks For Visiting On Other Device')
    alert(user_agent)
}
console.log(user_agent);
