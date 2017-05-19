//导航高亮
jQuery(document).ready(function($){ 
var datatype=$("#nav").attr("data-type");
    $(".clearfix>li ").each(function(){
        try{
            var myid=$(this).attr("id");
            if("index"==datatype){
                if(myid=="nvabar-item-index"){
                    $("#nvabar-item-index a:first-child").addClass("on");
                }
            }else if("category"==datatype){
                var infoid=$("#nav").attr("data-infoid");
                if(infoid!=null){
                    var b=infoid.split(' ');
                    for(var i=0;i<b.length;i++){
                        if(myid=="navbar-category-"+b[i]){
                            $("#navbar-category-"+b[i]+" a:first-child").addClass("on");
                        }
                    }
                }
            }else if("article"==datatype){
                var infoid=$("#nav").attr("data-infoid");
                if(infoid!=null){
                    var b=infoid.split(' ');
                    for(var i=0;i<b.length;i++){
                        if(myid=="navbar-category-"+b[i]){
                            $("#navbar-category-"+b[i]+" a:first-child").addClass("on");
                        }
                    }
                }
            }else if("page"==datatype){
                var infoid=$("#nav").attr("data-infoid");
                if(infoid!=null){
                    if(myid=="navbar-page-"+infoid){
                        $("#navbar-page-"+infoid+" a:first-child").addClass("on");
                    }
                }
            }else if("tag"==datatype){
                var infoid=$("#nav").attr("data-infoid");
                if(infoid!=null){
                    if(myid=="navbar-tag-"+infoid){
                        $("#navbar-tag-"+infoid+" a:first-child").addClass("on");
                    }
                }
            }
        }catch(E){}
    });
});

$(document).ready(function() { 
var tags_a = $("#divTags a"); 
tags_a.each(function(){ 
var x = 9; 
var y = 0; 
var rand = parseInt(Math.random() * (x - y + 1) + y); 
$(this).addClass("tags"+rand); 
}); 
}) 



$(function() {
			var pull 		= $('#pull');
				menu 		= $('#nav ul');
				menuHeight	= menu.height();

			$(pull).on('click', function(e) {
				e.preventDefault();
				menu.slideToggle();
			});

			$(window).resize(function(){
        		var w = $(window).width();
        		if(w > 320 && menu.is(':hidden')) {
        			menu.removeAttr('style');
        		}
    		});
		});
		
function  showImg(){
document.getElementById("wxImg").style.display='block';
}
function hideImg(){
document.getElementById("wxImg").style.display='none';
}

