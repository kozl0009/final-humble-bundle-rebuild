jQuery(document).ready(function($){
	var slide=false;
	var descrSelected=0;
	var iLoop=0;
	$( '#list-of-games' ).on('click', '.game-line', function(e) {
		if(iLoop==2){
			if(descrSelected!=this.id){
				$( "#game-"+descrSelected ).slideUp( "fast", function() {
					//$( "#game-"+descrSelected ).css('display', 'none');
				});	
			}
			$( "#game-"+this.id ).slideDown( "fast", function() {
				//$( "#game-"+this.id ).css('display', 'block');
			});
			iLoop=0;
			descrSelected=this.id;
		}else{
			iLoop=iLoop+1;
		}
		
	});
	
	
	//$( storyActions ).hide();
	var priceDiv = "#list-of-games";

	// With the element initially hidden, we can show it slowly:
	$( priceDiv ).on('mouseenter', '.game-line', function() {
		$(this).on('mouseenter', '.price', function() {
			$("#game-"+this.id).css('display','block');
			$("#"+this.id).css('display','none'); 
			$("#game-"+this.id).css('white-space','nowrap');
			$("#"+this.id).css('white-space','nowrap');
		});
	});
	
	$( priceDiv ).on('mouseleave', '.game-line', function() {
		$(this).on('mouseleave', '.addToCart', function() {
		    var cartId = this.id;
		    var parts = cartId.split('-');
			$("#game-"+parts[1]+parts[2]).css('display','none');
			$("#"+parts[1]+parts[2]).css('display','block'); 
			$("#game-"+parts[1]+parts[2]).css('white-space','nowrap');
			$("#"+parts[1]+parts[2]).css('white-space','nowrap');
			alert("here");
		});
	});
	
/* fancybox trigger */

$('#featured-game-6-descr').click(function() {
    $.fancybox({
		'content' : $("#inline1").css("display","block")           
	});
});

	
	/*
	Add to cart fly effect with jQuery. - May 05, 2013
	(c) 2013 @ElmahdiMahmoud - fikra-masri.by
	license: http://www.opensource.org/licenses/mit-license.php
*/   

var inShoppingCart = 0;

	$('#list-of-games').on('click', '.addToCart', function () {
        var cart = $('.shopping-cart');
        var imgtodrag = $(this).parents('.game-line').find("img").eq(0);
        if (imgtodrag) {
            var imgclone = imgtodrag.clone()
                .offset({
                top: imgtodrag.offset().top,
                left: imgtodrag.offset().left
            })
                .css({
                'opacity': '0.5',
                    'position': 'absolute',
                    'height': '150px',
                    'width': '150px',
                    'z-index': '100'
            })
                .appendTo($('body'))
                .animate({
                'top': cart.offset().top + 10,
                    'left': cart.offset().left + 10,
                    'width': 75,
                    'height': 75
            }, 1000, 'easeInOutExpo');
            
            setTimeout(function () {
                cart.effect("shake", {
                    times: 2
                }, 200);
            }, 1500);

            imgclone.animate({
                'width': 0,
                    'height': 0
            }, function () {
                $(this).detach()
            });
			inShoppingCart++;
			$(".shopping-cart").html('<h2>Cart (' + inShoppingCart + ' items)');
        }
    });
	
	$('.game-line .price').on('click', function () {
        var cart = $('.shopping-cart');
        var imgtodrag = $(this).parents('.game-line').find("img").eq(0);
        if (imgtodrag) {
            var imgclone = imgtodrag.clone()
                .offset({
                top: imgtodrag.offset().top,
                left: imgtodrag.offset().left
            })
                .css({
                'opacity': '0.5',
                    'position': 'absolute',
                    'height': '150px',
                    'width': '150px',
                    'z-index': '100'
            })
                .appendTo($('body'))
                .animate({
                'top': cart.offset().top + 10,
                    'left': cart.offset().left + 10,
                    'width': 75,
                    'height': 75
            }, 1000, 'easeInOutExpo');
            
            setTimeout(function () {
                cart.effect("shake", {
                    times: 2
                }, 200);
            }, 1500);

            imgclone.animate({
                'width': 0,
                    'height': 0
            }, function () {
                $(this).detach()
            });
			inShoppingCart++;
			$(".shopping-cart").html('<h2>Cart (' + inShoppingCart + ' items)');
        }
    });
});

