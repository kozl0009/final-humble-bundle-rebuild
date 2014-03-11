//function loadJSON(){
   var data_file = "json/games.json";
   var http_request = new XMLHttpRequest();
   try{
      // Opera 8.0+, Firefox, Chrome, Safari
      http_request = new XMLHttpRequest();
   }catch (e){
      // Internet Explorer Browsers
      try{
         http_request = new ActiveXObject("Msxml2.XMLHTTP");
      }catch (e) {
         try{
            http_request = new ActiveXObject("Microsoft.XMLHTTP");
         }catch (e){
            // Something went wrong
            alert("Your browser may not support AJAX, or refresh cause something went wrong");
            return false;
         }
      }
   }
   http_request.onreadystatechange  = function(){

      // readyState == 4 means the request was successful
      if (http_request.readyState == 4  ){
        // Javascript function JSON.parse to parse JSON data
        var jsonObj = JSON.parse(http_request.responseText);

        // My Entire JSON Object from data.json
        console.log(jsonObj);

        // Acessing a Specific Key of the object
        console.log('testing title key: ' + jsonObj[0].title);

        for (var key in jsonObj) {

            // Only return keys if there's anything there.
           if (jsonObj.hasOwnProperty(key)) {
              console.log('loop all id: ' + jsonObj[key].id);
              console.log('loop all title: ' + jsonObj[key].title);
			  console.log('loop all os: ' + jsonObj[key].os);
              console.log('loop all price: ' + jsonObj[key].price);
			  console.log('loop all salePrice: ' + jsonObj[key].salePrice);
              console.log('loop all thumbImageUrl: ' + jsonObj[key].thumbImageUrl);
			  console.log('loop all mediumImageUrl: ' + jsonObj[key].mediumImageUrl);
              console.log('loop all largeImageUrl: ' + jsonObj[key].largeImageUrl);
			  console.log('loop all videoUrl: ' + jsonObj[key].videoUrl);
              console.log('loop all description: ' + jsonObj[key].description);
			  console.log('loop all developer: ' + jsonObj[key].developer);
              console.log('loop all developerLink: ' + jsonObj[key].developerLink);
			  console.log('loop all publisher: ' + jsonObj[key].publisher);
              console.log('loop all publisherLink: ' + jsonObj[key].publisherLink);
			  console.log('loop all parentalAdvisory: ' + jsonObj[key].parentalAdvisory);
              console.log('loop all moreinfo: ' + jsonObj[key].moreinfo);
			  console.log('loop all category: ' + jsonObj[key].category);

			  
			  if(jsonObj[key].category == "list"){
				  // the element to append Info to
				  var gamesList = document.getElementById('list-of-games');
				  var eachGameLine = document.createElement('div');
				  eachGameLine.setAttribute('class', 'eachGameLine');
				  eachGameLine.innerHTML = "<div class='game-line'><div class='game-line thumb'><img src='images/games/thumb/" + jsonObj[key].thumbImageUrl + "' border='0' title='' alt='' /></div><div class='game-line info game' id='" + jsonObj[key].id + "'><div class='game-line title' id='" + jsonObj[key].id + "'>" + jsonObj[key].title + "</div><div class='game-line platform'><ul><li class='steam'></li><li class='drm'></li><li class='windows'></li></ul></div><div class='buttons' id='" + jsonObj[key].id + "'><div class='game-line price' id='cart-" + jsonObj[key].id + "'>" + jsonObj[key].price + "</div><div class='game-line addToCart' id='game-cart-" + jsonObj[key].id + "'>Add to Cart</div></div><div class='game-line game-descr' id='game-" + jsonObj[key].id + "'><div class='youtube-video'><iframe width='100%' height='360' src='" + jsonObj[key].videoUrl + "' frameborder='0' allowfullscreen></iframe></div><div class='selected-game-info'><div class='description'>" + jsonObj[key].description + "</div><div class='detailes'><div class='section'><h2>Developer:</h2><a href='" + jsonObj[key].developerLink + "'>" + jsonObj[key].developer + "</a></div><div class='section'><h2>More Information:</h2><a href='#'>System Requirements</a></div></div></div></div></div></div> <!-- //Game 1 -->";
				  gamesList.appendChild(eachGameLine);
			  }
			  
			  
			  
			  
			  // the element to append everything to.
              //var feedWrapper = document.getElementById('article-feed');

              // Article Heading and Link - Title is text, url is href
              //var articleHeading = document.createElement('h1');
              //var articleLink = document.createElement('a');
              //articleLink.setAttribute('href', jsonObj[key].url);
              //articleLink.innerHTML = jsonObj[key].title;
              //articleHeading.appendChild(articleLink);

              // Article Image
             // var articleImage = document.createElement('img');
              //articleImage.setAttribute('src',jsonObj[key].imageUrl)

              // Appending html elements and values to my div article-feed
              //feedWrapper.appendChild(articleImage);
              //feedWrapper.appendChild(articleHeading);
              
           }

        } // End json loop

      }

   }
   http_request.open("GET", data_file, true);
   http_request.send();
//}

//auto load loadJSON();