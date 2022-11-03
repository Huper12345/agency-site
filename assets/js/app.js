



	
 $(document).ready(function(){
	$('#control_play').click(function () {
		
        $(this).toggleClass('active');
		});  


		$("[data-slider]").slick({
			dots: true,
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			adaptiveHeight: true,
			prevArrow: null,
            nextArrow: null
		  });

		  $("#slick-slide-control00").on("click", function(event) {

			event.preventDefault();
		
		
		$("#slick-slide-control00").toggleClass("slide_show");
		
		 });
		
		
		 $("#slick-slide-control01").on("click", function(event) {
		
		$("#slick-slide-control01").toggleClass("slide_show");
		
		 });
		

		// checkScroll

		 let header = $("#header");
	
		 let introH = $("#intro").innerHeight();
		 
		 let scrollOffset = $(window).scrollTop();
		 
		 
		 checkScroll(scrollOffset);
		 
		 
		 $(window).on("scroll", function() {
		 
		 scrollOffset = $(this).scrollTop();    
		 
		 checkScroll(scrollOffset);
		 
		  });
		 
		 function checkScroll(scrollOffset) {
		 
		 
			 scrollOffset = $(this).scrollTop();
		 
			 if( scrollOffset >= introH ) {
			 header.addClass("fixed");
			 } 
			 else {
			 header.removeClass("fixed");
			 }
		 
		 }


		 // Nav toggle


$("#nav-toggle").on("click", function(event) {

    event.preventDefault();


$(this).toggleClass("active");
$("#nav").toggleClass("active");


 });


 $("#nav1").on("click", function(event) {

$("#nav").removeClass("active");
$("#nav-toggle").removeClass("active");

 });

 $("#nav2").on("click", function(event) {

    $("#nav").removeClass("active");
    $("#nav-toggle").removeClass("active");
    
     });

     $("#nav3").on("click", function(event) {

        $("#nav").removeClass("active");
        $("#nav-toggle").removeClass("active");
        
         });


         $("#nav4").on("click", function(event) {

            $("#nav").removeClass("active");
            $("#nav-toggle").removeClass("active");
            
             });


             $("#nav5").on("click", function(event) {

                $("#nav").removeClass("active");
                $("#nav-toggle").removeClass("active");
                
                
                 });


				 $("#nav6").on("click", function(event) {

					$("#nav").removeClass("active");
					$("#nav-toggle").removeClass("active");
					
					
					 });

					 $("#nav7").on("click", function(event) {

						$("#nav").removeClass("active");
						$("#nav-toggle").removeClass("active");
						
						
						 });



// Nav active
            
$("#nav1").on("click", function(event) {
	event.preventDefault();
	
$("#nav1").toggleClass("active");
$("#nav2").removeClass("active");
$("#nav3").removeClass("active");
$("#nav4").removeClass("active");
$("#nav5").removeClass("active");
$("#nav6").removeClass("active");
$("#nav7").removeClass("active");
	
	});


	$("#nav2").on("click", function(event) {
		event.preventDefault();
		
	$("#nav2").toggleClass("active");
	$("#nav1").removeClass("active");
	$("#nav3").removeClass("active");
	$("#nav4").removeClass("active");
	$("#nav5").removeClass("active");
	$("#nav6").removeClass("active");
	$("#nav7").removeClass("active");
		
		});


		$("#nav3").on("click", function(event) {
			event.preventDefault();
			
		$("#nav3").toggleClass("active");
		$("#nav2").removeClass("active");
		$("#nav1").removeClass("active");
		$("#nav4").removeClass("active");
		$("#nav5").removeClass("active");
		$("#nav6").removeClass("active");
	    $("#nav7").removeClass("active");
			
			});


			$("#nav4").on("click", function(event) {
				event.preventDefault();
				
			$("#nav4").toggleClass("active");
			$("#nav2").removeClass("active");
			$("#nav1").removeClass("active");
			$("#nav3").removeClass("active");
			$("#nav5").removeClass("active");
			$("#nav6").removeClass("active");
	        $("#nav7").removeClass("active");
				
				});


				$("#nav5").on("click", function(event) {
					event.preventDefault();
					
				$("#nav5").toggleClass("active");
				$("#nav2").removeClass("active");
				$("#nav1").removeClass("active");
				$("#nav3").removeClass("active");
				$("#nav4").removeClass("active");
				$("#nav6").removeClass("active");
	            $("#nav7").removeClass("active");
					
					});
					
					$("#nav6").on("click", function(event) {
						event.preventDefault();
						
					$("#nav6").toggleClass("active");
					$("#nav2").removeClass("active");
					$("#nav1").removeClass("active");
					$("#nav3").removeClass("active");
					$("#nav4").removeClass("active");
					$("#nav7").removeClass("active");
					$("#nav5").removeClass("active");
						
						});
						$("#nav7").on("click", function(event) {
							event.preventDefault();
							
						$("#nav7").toggleClass("active");
						$("#nav2").removeClass("active");
						$("#nav1").removeClass("active");
						$("#nav3").removeClass("active");
						$("#nav4").removeClass("active");
						$("#nav6").removeClass("active");
							
							});          


    // Smooth scroll

	$("[data-scroll]").on("click", function(event) {

		event.preventDefault();
		
		
		var $this = (this),
			blockid = $(this).data('scroll'),
			blockoffset = $(blockid).offset().top;
		
		   $("html, body").animate({
		   scrollTop: blockoffset
	
		
		
		}, 500);
	
	});
	});

