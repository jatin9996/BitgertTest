/*
Author       : Dreamguys
Template Name: Ventura - Bootstrap Admin Template
Version      : 1.0
*/

(function ($) {
	"use strict";
	$(document).ready(function () {
		$('[data-toggle="collapse-1"]').click(function () {
			$(this).toggleClass("active");
			if ($(this).hasClass("active")) {
				$(this).text("Hide");
			} else {
				$(this).text("Datails");
			}
		});

		// document ready  
	});
  
// select-popup-model-start

    // $('#myModal4').modal();

    // function show(){
    //   $('#myModal4').modal('show');
    // }
    // $(".select2-input").click(function (e) {
    //   e.preventDefault();
    //   $(this).parent().find('.select2-list').toggle('active');
    // });
    // $(".select2-search").on("keyup", function (e) {
    //   e.preventDefault();
    //   var value = $(this).val().toLowerCase();
    //   $(this).parent().parent().parent().find('.select2-item').filter(function () {
    //     $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    //   });
    // });
    // $(".select2-item").click(function (e) {
    //   e.preventDefault();
    //   // document.getElementById("myModal4").style.display = "none";
    //   // $("#myModal4").removeclassName("show");
    //   $('#myModal4').modal('hide');
    //   $('.select2-input').html($(this).html());
    //   $('.select2-value').html($(this).data('value'));
    //   $('.select2-list').toggle('active');
     
    //   $('.select2-search').val('Value');
    //   $('.select2-item').show();
    // });

    
 


})(jQuery);

