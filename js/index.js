$(window).resize(function() {
	if ($(window).width() <= 992){	
		 $("#demo1, #demo2, #demo3, #demo4, #demo5").addClass("collapse");
         $("#visibleClass1, #visibleClass2, #visibleClass3, #visibleClass4, #visibleClass5").attr("data-toggle", "collapse");
         $("#visibleClass1, #visibleClass2, #visibleClass3, #visibleClass4, #visibleClass5").attr("data-parent", "#MainMenu");
         $("#MainMenu .container, #MainMenu .row, #MainMenu .row > div").removeClass();
	} else {
        if ($(window).width() > 992){	
		 $("#demo1, #demo2, #demo3, #demo4, #demo5").removeClass("collapse");
         $("#visibleClass1, #visibleClass2, #visibleClass3, #visibleClass4, #visibleClass5").removeAttr("data-toggle", "collapse");
         $("#visibleClass1, #visibleClass2, #visibleClass3, #visibleClass4, #visibleClass5").removeAttr("data-parent", "#MainMenu");
         $("#MainMenu ul > div").addClass("container");
         $("#MainMenu ul > div > div").addClass("row");   
         $("#MainMenu ul > div > div div:nth-child(1)").addClass("col-lg-2 col-md-2"); 
         $("#MainMenu ul > div > div div:nth-child(2)").addClass("col-lg-3 col-md-3"); 
         $("#MainMenu ul > div > div div:nth-child(3)").addClass("col-lg-2 col-md-2");    
         $("#MainMenu ul > div > div div:nth-child(4)").addClass("col-lg-3 col-md-3"); 
         $("#MainMenu ul > div > div div:nth-child(5)").addClass("col-lg-2 col-md-2");     
	}    
    }
});