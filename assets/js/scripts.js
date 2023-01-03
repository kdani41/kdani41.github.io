$(document).ready(function(){
	/*============================================
	Page Preloader
	==============================================*/
	
	$(window).load(function(){
		$('#page-loader').fadeOut(500);
	});	
	
	/*============================================
	Navigation Functions
	==============================================*/
	if ($(window).scrollTop()< 10){
		$('#main-nav').removeClass('scrolled');
	}
	else{
		$('#main-nav').addClass('scrolled');    
	}

	$(window).scroll(function(){
		if ($(window).scrollTop()< 10){
			$('#main-nav').removeClass('scrolled');
		}
		else{
			$('#main-nav').addClass('scrolled');    
		}
	});
	
	$('a.scrollto').click(function(e){
		e.preventDefault();
		var target =$(this).attr('href');
		$('html, body').stop().animate({scrollTop: $(target).offset().top}, 1600, 'easeInOutExpo',
			function(){window.location.hash =target;});
			
		if ($('.navbar-collapse').hasClass('in')){
			$('.navbar-collapse').removeClass('in').addClass('collapse');
		}
	});
	
	/*============================================
	Tabs
	==============================================*/	
	
	$('.toggle-tabs').click(function(e){
		e.preventDefault()
		
		if($(this).is('.active')){return;}
		$(this).tab('show');
		
		$(this).siblings('.toggle-tabs').removeClass('active');
		$(this).addClass('active');
	})
	
	$('.toggle-tabs').on('shown.bs.tab', function (e) {
	  $('.tab-content').addClass('fadeOut');
	  
	  setTimeout(function(){
		$('.tab-content').removeClass('fadeOut');
	  },200)
	})
	
	/*============================================
	Skills
	==============================================*/	

	$('.chart').easyPieChart({
		size:150,
		animate: 2000,
		lineCap:'butt',
		scaleColor: false,
		trackColor: '#f2f2f2',
		barColor: $('.main-color').css('color'),
		lineWidth: 5,
		easing:'easeOutQuad'
	});
	$('.chart-small').easyPieChart({
		size:100,
		animate: 2000,
		lineCap:'butt',
		scaleColor: false,
		trackColor: '#f2f2f2',
		barColor: '#845edd',
		lineWidth: 5,
		easing:'easeOutQuad'
	});
	
	/*============================================
	Testimonials
	==============================================*/
	$('#testimonials-slider').flexslider({
		slideshow: false,
		animationSpeed: 0,
		useCSS: true,
		directionNav: false, 
		controlNav: false, 
		pauseOnAction: false, 
		pauseOnHover: true,
		smoothHeight: false
	});
	
	$('.testimonial-controls .previous').click(function(){
		$('#testimonials-slider').flexslider('previous');
	});
	
	$('.testimonial-controls .next').click(function(){
		$('#testimonials-slider').flexslider('next');
	});
	
	/*============================================
	Resize Functions
	==============================================*/
	var thumbSize = $('.project-item').width();
	
	$(window).resize(function(){
	
		if($('#projects-container').length){
			setTimeout(function(){
				$('#projects-container').masonry('reload');
			},100);
		}
		
	});
	
	/*============================================
	Placeholder Detection
	==============================================*/
	if (!Modernizr.input.placeholder) {
		$('#contact-form').addClass('no-placeholder');
	}
	
	/*============================================
	Tooltips
	==============================================*/
	$("[data-toggle='tooltip']").tooltip({container: 'body'});
	
	/*============================================
	Waypoints Animations
	==============================================*/
	$(window).load(function(){
		
		$('.scrollimation').waypoint(function(){
			$(this).addClass('in');
		},{offset:'95%'});
		
	});
	
	/*============================================
	Refresh scrollSpy function
	==============================================*/
	function scrollSpyRefresh(){
		setTimeout(function(){
			$('body').scrollspy('refresh');
		},1000);
	}
	
	/*============================================
	Refresh waypoints function
	==============================================*/
	function waypointsRefresh(){
		setTimeout(function(){
			$.waypoints('refresh');
		},1000);
	}
});