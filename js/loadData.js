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

			  // the element to append Info to
			  var gamesList = document.getElementById('list-of-games');
			  var eachGameLine = document.createElement('div');
			  eachGameLine.setAttribute('class', 'eachGameLine');
			  eachGameLine.innerHTML(jsonObj[key].id + "<br />");
			  gamesList.appendChild(eachGameLine);
			  
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