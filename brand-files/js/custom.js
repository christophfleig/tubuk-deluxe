$(document).ready(function() {

	var bodyClassList =$('body').attr('class').split(/\s+/);
	var selMenuTargets = $('.ulToSelContainer select option').attr("value");
	$.each(bodyClassList, function(index, item){
		if (item === 'someClass') {
		//do something
		}
	});

function topMenuUlToSel() {
		// UL to SELECT function
		$("<select />").appendTo(".ulToSelContainer");

		$("<option />", {
		   /*"selected": "selected",*/
		   "value"   : "",
		   "text"    : "Go to..."
		}).appendTo(".ulToSelContainer select");

		$(".ulToSelContainer ul.main_nav").each(function(contElem) {

		    $("li > a", this).each(function() {
		         var el = $(this);

		         	$("<option />", {
		             "value"   : el.attr("href"),
		             "text"    : el.text()

		         }).appendTo($("select", $(".ulToSelContainer")[contElem]));

					$(this).children("> ul li").each(function() {
						var el = $(this);
							$("<option />", {
							"value"   : el.children("a").attr("href"),
							"text"    : "--"+el.text()
							}).appendTo($("select", $(".ulToSelContainer")[contElem]));
					});

		        });
		})

		$(".ulToSelContainer select").change(function() {
		  window.location = $(this).find("option:selected").val();
		});   
	}


function currentPageSelect(pageElem) {
	$('.ulToSelContainer select option').each(function() {
		if ($(this).attr("value").substr('1')==pageElem) {
			$(this).attr("selected", "selected");
		}
 	})
}

var bodyClassList = $('body').attr('class').split(" ");


	topMenuUlToSel();
	currentPageSelect(bodyClassList[3].replace("-", "/"));

	// jQuery UI - Accordion

	$(".accordion").accordion({ header: "h3" });
	
	// jQuery UI - Modal Contact Window

		$( "#angebot-anforden" ).dialog({
			autoOpen: false,
			height: 'auto',
			width: 'auto',
			modal: true,
			close: function() {
				allFields.val( "" ).removeClass( "ui-state-error" );
			}
		});

		$( "#contactWindow" ).dialog({
			autoOpen: false,
			height: 'auto',
			width: 'auto',
			modal: true,
			close: function() {
				allFields.val( "" ).removeClass( "ui-state-error" );
			}
		});

		$( "#loginWindow" ).dialog({
			autoOpen: false,
			height: 'auto',
			width: 'auto',
			modal: true,
			buttons: {
				Cancel: function() {
					$("#loginWindow .response").text("").css("color", "#333");
					$("input").val("");
					$( this ).dialog( "close" );
				},
				"Login": function() {
					$("#loginWindow .response").text("invalid login").css("color", "#900");
				}
			},
			close: function() {
				$("#loginWindow .response").text("").css("color", "#333");
				$("input").val("");
			}
		});

		$( ".angebotAnfordern" ).click(function(event) {
				event.preventDefault();
				$( "#angebot-anforden" ).dialog( "open" );
			});

		$( ".contact-form" ).click(function(event) {
				event.preventDefault();
				$( "#contactWindow" ).dialog( "open" );
			});

		$( ".loginAction" ).click(function(event) {
				event.preventDefault();
				$( "#loginWindow" ).dialog( "open" );
			});

	// Job Positions navigation

	function showJobPos(){
	$(".jobPosition").hide();
	$(".jobPositionLink").each(function(item){
			if ($(this).hasClass("active")){
				$("#"+$(this).attr("href").substr(1)).show();
			}
		});
	}

	$(".jobPositionLink").click(function(event) {
		event.preventDefault();
		$(".jobPositionLink").removeClass("active");
		$(this).addClass("active");
		$(".jobPosition").hide();
		showJobPos();
	})

	showJobPos();

	
	// stories navigation

	function showStory(){
		$(".story").addClass("hidden");
		$(".storyLink").each(function(item){
				if ($(this).hasClass("active")){
					$("#"+$(this).attr("href").substr(1)).removeClass("hidden").addClass("visible");
				}
			});
	}

	$(".storyLink").click(function(event) {
		event.preventDefault();
		$(".storyLink").parent(".itemTitle").parent(".secStory").removeClass("active");
		$(".storyLink").removeClass("active");
		$(this).addClass("active");
		$(this).parent(".itemTitle").parent(".secStory").addClass("active");
		$(".story").removeClass("visible").addClass("hidden");
		showStory();
		$('html, body').scrollTop(0);
	})

	showStory();

	// hover fix on mobile

	function removeClass() {
		$("body").removeClass("touch-on");
	}





});
