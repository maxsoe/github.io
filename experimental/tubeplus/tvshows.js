    var items = document.getElementsByClassName("list_item");
    var length = items.length;

    <!-- Work on each item -->
    for (var i = 0; i < length; i++) {
    	var current_item = items[i];

    	<!-- Set background color -->
    	<!-- current_item.style.background = "yellow"; -->
		<!-- console.log(current_item); -->

		<!-- Get the title of the show -->
		var title_elements = current_item.getElementsByTagName("b");
		var show_title = title_elements[0].innerHTML;
		/* console.log("Show title: "+show_title); */

		<!-- Split the season and episode name -->
		var season_n_episode_name = title_elements[1].innerHTML;
		var split_string = season_n_episode_name.split(":");
		var season_n_episode_number = split_string[0];
		var episode_name = split_string[1];
		<!-- console.log(season_n_episode_number); -->
		<!-- console.log(episode_name); -->

		<!-- Split season and episode number -->
		var split_season_n_episode_number = season_n_episode_number.split("E");
		var season_number = split_season_n_episode_number[0]; <!-- Contains "S" in front -->
		var episode_number = split_season_n_episode_number[1]; <!-- Does not contain "E" in front -->
		<!-- console.log(season_number); -->
<!-- 		console.log(episode_number); -->

		<!-- Combine season and episode number back together -->
		if (episode_number.length>2) {
			<!-- console.log("Current length is bigger than 2"); -->
			<!-- Need to get last two characters -->
			episode_number = episode_number.substr(1,2); <!-- Assuming there are three characters -->
			var toconcat = "E";
			episode_number = toconcat.concat(episode_number);
			<!-- console.log("New episode number is " +episode_number); -->
			season_n_episode_number = season_number.concat(episode_number);
			<!-- console.log("Episode: " +season_n_episode_number); -->

		} else if (episode_number.length<2) {
			<!-- console.log("only one number"); -->
			<!-- Need to append a zero in front of the number -->
			var toconcat = "E0";
			episode_number = toconcat.concat(episode_number);
			<!-- console.log("New episode number is " +episode_number); -->
			season_n_episode_number = season_number.concat(episode_number);
			<!-- console.log("Episode: " +season_n_episode_number); -->
		} else {
			<!-- use the number as it is -->
			var toconcat = "E";
			episode_number = toconcat.concat(episode_number);
			season_n_episode_number = season_number.concat(episode_number);
			<!-- console.log("Episode: " +season_n_episode_number); -->
		}
		
		var sunnyShow = "It’s Always Sunny in Philadelphia";

		<!-- Change the date holder -->
		if (
			show_title == "Archer" ||
			show_title == "Arrow" ||
			show_title == "Ash vs Evil Dead" ||
			show_title == "Avengers Assemble" ||
			show_title == "Beware the Batman" ||
			show_title == "The Big Bang Theory" ||
			show_title == "Brooklyn Nine-Nine" ||
			show_title == "Californication" ||
			show_title == "Community" ||
			show_title == "Cougar Town" ||
			show_title == "Daredevil" ||
			show_title == "Family Guy" ||
			show_title == "From Dusk Till Dawn: The Series" ||
			show_title == "Game of Thrones" ||
			show_title == "Guardians of the Galaxy" ||
			show_title == "Gotham" ||
			show_title == "Heroes Reborn" ||
			show_title == sunnyShow ||
			show_title == "Jessica Jones" ||
			show_title == "Legends of Tomorrow" ||
			show_title == "Louie" ||
			show_title == "Modern Family" ||
			show_title == "New Girl" ||
			show_title == "Orange Is the New Black" ||
			show_title == "Powers" ||
			show_title == "Raising Hope" ||
			show_title == "Rick and Morty" ||
			show_title == "South Park" ||
			show_title == "Star Wars Rebels" ||
			show_title == "Supergirl" ||
			show_title == "Teenage Mutant Ninja Turtles" ||
			show_title == "The Flash" ||
			show_title == "The Legend of Korra" ||
			show_title == "The Simpsons" ||
			show_title == "The Walking Dead" ||
			show_title == "True Blood" ||
			show_title == "Ultimate Spider-Man" ||
			show_title == "Under the Dome"
			)
			 {
			var mydate = current_item.getElementsByClassName("frelease");
			mydate[0].style.background = "white";
			current_item.style.background = "yellow";
			<!-- mydate[0].innerHTML = show_title +" - " +season_n_episode_number; -->

			var search_string = show_title + " - " +season_n_episode_number +" 720p";
			<!-- console.log("Search for "+search_string); -->


			<!-- Torrentzproxy string -->
			mydate[0].innerHTML = " <a target=_blank href=\"https://torrentz.eu/search?f= " +search_string +"\">Get torrent</a>";
			<!-- console.log(mydate[0].innerHTML); -->
		}


    }
