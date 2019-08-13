// let projects = [];

// function renderButtons() {

//       for (var i = 0; i < projects.length; i++) {
//         var a = $("<button>");
//         a.addClass("project");
//         a.attr("data-name", projects[i]);
//         a.text(projects[i]);
//         $("#gif").append(a);
//         }
// }

// function searchGiphy() {
//     $("#gif").empty();
//     // var fruit = $(this).attr("data-name");
//     var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=hDcyYQDAb4wguGxBI8nGwH1wyhq0SA1g&q=water96763&limit=5&lang=en";
    
//       $.ajax({
//           url: queryURL,
//           method: "GET"
//       }).then(function(response) {
//           let results = response.data;
          
//             for (var i= 0; i <results.length; i++) {
//               var projectDiv = $("<div>");
//               var image = $("<img>");
//               image.attr({
//                 "src": results[i].images.fixed_height_small_still.url,
//                 "data-animate": results[i].images.fixed_height_small.url,
//                 "data-still": results[i].images.fixed_height_small_still.url,
//                 "data-state": "still",
//                 "class": "gif"
//               });
//               projectDiv.append(image);
//             //   var rating = results[i].rating;
//             //   var p = $("<p>").text("Rating: " + results[i].rating);
//             //   fruitDiv.append(p);
              
//               $("#gif").prepend(projectDiv);
//             }
//           });
          
//           $(document).on("click", ".gif", function() {
//         var state = $(this).attr("data-state");
//         if (state === "still") {
//           $(this).attr("src", $(this).attr("data-animate"));
//           $(this).attr("data-state", "animate");
//         } else {
//           $(this).attr("src", $(this).attr("data-still"));
//           $(this).attr("data-state", "still");
//         }
//       }); 
// }

$("#enter").on("click", function(event) {
  event.preventDefault();
  searchGiphy();
//   projects.push(fruit);
  renderButtons();
  console.log("jello")
});

$(".crystal").on("click", function(event) {
    window.open(https://water96763.github.io/unit-4-game/);
}

renderButtons();