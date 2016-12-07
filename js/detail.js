
$(document).ready(function(){
//productDetail
    manualView("#big-pic","#small-list"); 
    colorchange();
    alertWindow();
    slidingBar("#toTop"); 
    slidingBar("#fixedtop"); 
    toTop();
    changePage("#page","pannel-on","#fixedTop","fixed-on");
    changePage("#fixedTop","fixed-on","#page","pannel-on");
})
function manualView(bigId,smallId){
	var $bigPic=$(bigId).children("a"),
	    $smallList=$(smallId),
	    $bar=$smallList.children("li"),
	    $pre=$("#pre-bar"),
	    $next=$("#next-bar"),
	    flag=true;
	function changePic(current){
        $bar.each(function(i,ele){
            $(ele).removeClass("small-on");
        })
        $bar.eq(current).addClass("small-on");
        $bigPic.each(function(i,ele){
        	$(ele).removeClass("show");
        })
        $bigPic.eq(current).addClass("show");
	}
	$bar.each(function(i,ele){
		ele.id=i;
        $(ele).mouseover(function(){
        	changePic(this.id);
        })
	})
	$pre.click(function(){
		if(flag){
			$smallList.animate({"margin-left":"-184px"}, "slow");
			flag=false;
		}else{
			$smallList.animate({"margin-left":"0"}, "slow");
			flag=true;
		}
	})
	$next.click(function(){
		if(!flag){
			$smallList.animate({"margin-left":"0"}, "slow");
			flag=true;
		}else{
			$smallList.animate({"margin-left":"-184px"}, "slow");
			flag=false;
		}
	})
}
function colorchange(){
	var $colorbtn=$("#mini-pic").children("a.youhuo"),
	    $shareBtn=$("#share-btn"),
	    $addCompare=$("#addCompare"),
	    $comparebox=$("#compareBar").find("dd"),
	    flag=true,
	    index=0,
	    $page=$("#pic-group").children("li");
	$colorbtn.each(function(i,ele){
		$(ele).click(function(){
			$colorbtn.each(function(i,ele){
				$(ele).removeClass("gouxuan");
			})
			$colorbtn.eq(i).addClass("gouxuan");
			$page.each(function(i,ele){
                $(ele).removeClass("show");
			})
			$page.eq(i).addClass("show");
			$(".color-selected").text($colorbtn.eq(i).attr("color"));
		})
		manualView("#big-pic"+i,"#small-list"+i); 
	})
	$shareBtn.click(function(){
        $(".share").children("p").eq(1).slideToggle();
	})	    
    $addCompare.click(function(){
		var comparepic=$("#mini-pic").children("a.gouxuan").children("img");
		if(index>=0){
            $comparebox.eq(0).html(comparepic.clone()).fadeIn();
            index=-1;
		}else{
			$comparebox.eq(0).html("").fadeOut();
			index=0;
		}
	})
}
function alertWindow(){
		var $rightNow=$("#right-now");
		$rightNow.click(function(){
            alert("您至少选择两种商品，谢谢！")
		})
	}
function toTop(){
	var $toTop=$("#toTop");
	$toTop.mouseover(function(){
		$toTop.children('img').attr("src","images/icon/ToTop_Hover.gif");
	})
	$toTop.mouseout(function(){
        $toTop.children('img').attr("src","images/icon/ToTop_Normal.gif");
	})
	$toTop.click(function(){
		$toTop.children('img').attr("src","images/icon/ToTop_Press.gif").fadeOut("fast",function(){
			$toTop.children('img').attr("src","images/icon/ToTop_breakChicken.gif").fadeIn("fast");
		});
		$('html,body').animate({scrollTop:"0px"}, 800);
	})
}

function changePage(pageBarId,classOn,pageBarId2,classOn2){ 
	var pageBar=$(pageBarId).children("li"),
	    pageBar2=$(pageBarId2).children("li"),
	    pages=$("#detail-page").children("li");
    pageBar.each(function(i,ele){
        $(ele).click(function(){
        	pageBar.each(function(i,ele){
        		$(ele).removeClass(classOn);
        	});
        	pageBar2.each(function(i,ele){
        		$(ele).removeClass(classOn2);
        	});
        	pages.each(function(i,ele) {
        		$(ele).css("display","none");
        	});
        	pages.eq(i).css("display","block");
        	pageBar.eq(i).addClass(classOn);
        	pageBar2.eq(i).addClass(classOn2);
        	$(window).scrollTop(214);
        	if(i>0){
        		$("#chosen").css("display","block");
        	}else{
        		$("#chosen").css("display","none");
        	}
        })
    })
}
