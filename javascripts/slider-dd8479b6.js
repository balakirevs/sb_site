var accordionExpanded=!1;$(function(){$("#accordion").accordion({autoHeight:!1,collapsible:!0,active:!1,change:function(){var a=$("#accordion").accordion("option","active");accordionExpanded=a===!1?!1:!0,accordionExpanded===!1&&($("#logo").animate({marginTop:10}),$("#text").animate({marginTop:200}))}}),$(".ui-accordion-header a").click(function(){accordionExpanded||($("#logo").animate({marginTop:0}),$("#text").animate({marginTop:0}),accordionExpanded=!0)})});