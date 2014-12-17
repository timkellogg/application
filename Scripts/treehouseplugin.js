// Treehouse Plugin 
// Credit goes to Riley Hilliard where I got most of the coding before playing around with it
// His source code is here: http://rileyh.com/treehouse-badges-widget/

$(document).ready(function () {

   var e = "timkellogg",
  
  t = "http://teamtreehouse.com/" + e + ".json",
  n = $("#badges"),
  r = [],
  i = 0;
  // Json Parse Treehouse User Badges Info
  $.getJSON(t, function (e) {
    
    // User Json Parse Select Badges Info
    var t = e.badges;
    
    // Construct Each badge's HTML
    $.each(t, function (e, t) {
     r += '<li><a href="' + t.url + '" target="_blank"><img src="' + t.icon_url + '" alt="' + t.name + '" title="' + t.name + '"/></a></li>';
      i++
    });
    
    // Append Badge to #badges
    n.append(r);
    
    // Header Badges count generator
    $("#treehouse-count").append('I have earned ' + i + ' badges at Treehouse:');
   });
});