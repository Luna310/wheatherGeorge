var app = new Vue({
	el: '#app',
	data: {
		nameCity: "",
		weatherDates: [],
		city: "",
		cityWell: "",
		imgTime: "",
		imgTime2: "",

		horaDia0: "",
		tempMax0: "",
		tempMin0: "",
		humidity0: "",

		horaDia3: "",
		tempMax3: "",
		tempMin3: "",
		humidity3: "",

		horaDia8: "",
		tempMax8: "",
		tempMin8: "",
		humidity8: "",

		horaDia11: "",
		tempMax11: "",
		tempMin11: "",
		humidity11: "",

		//		IfGif: "",
	},
	created: function () {
		//		this.getData();

	},
	methods: {

		getData: function (city) {
			fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + this.city + "&APPID=a9771bebdddcab73497febaeb281cf27", {
				method: "GET",

			}).then(function (response) {
				if (response.ok) {


					return response.json();
				}

			}).then(function (json) {
				//aqui van las llamadas
				app.weatherDates = "";
				app.weatherDates = json;
				app.changeCity;
				app.city;
				app.datesFouHour();

				app.horaDia0;
				app.tempMax0;
				app.tempMin0;
				app.humidity0;

				app.horaDia3;
				app.tempMax3;
				app.tempMin3;
				app.humidity3;

				app.horaDia8;
				app.tempMax8;
				app.tempMin8;
				app.humidity8;

				app.horaDia11;
				app.tempMax11;
				app.tempMin11;
				app.humidity11;
				app.getGif();
				app.imgTime;
				app.imgTime2;

				console.log()


			}).catch(function (error) {
				console.log("Request failed:" + error.message);
			});
		},
		getName: function () {

			var x = document.getElementById("nameCity").placeholder;
			this.city = x;

		},
		//función para rellenar datos
		datesFouHour: function () {

			this.cityWell = "Introduzca una ciudad correcta."
			this.horaDia0 = app.weatherDates.list[0].dt_txt;
			this.tempMax0 = Math.floor(app.weatherDates.list[0].main.temp_max - 273, 15) + "º";
			this.tempMin0 = Math.floor(app.weatherDates.list[0].main.temp_min - 273, 15) + "º";
			this.humidity0 = app.weatherDates.list[0].main.humidity;

			this.horaDia3 = app.weatherDates.list[3].dt_txt;
			this.tempMax3 = Math.floor(app.weatherDates.list[3].main.temp_max - 273, 15) + "º";
			this.tempMin3 = Math.floor(app.weatherDates.list[3].main.temp_min - 273, 15) + "º";
			this.humidity3 = app.weatherDates.list[3].main.humidity;

			this.horaDia8 = app.weatherDates.list[8].dt_txt;
			this.tempMax8 = Math.floor(app.weatherDates.list[8].main.temp_max - 273, 15) + "º";
			this.tempMin8 = Math.floor(app.weatherDates.list[8].main.temp_min - 273, 15) + "º";
			this.humidity8 = app.weatherDates.list[8].main.humidity;

			this.horaDia11 = app.weatherDates.list[11].dt_txt;
			this.tempMax11 = Math.floor(app.weatherDates.list[11].main.temp_max - 273, 15) + "º";
			this.tempMin11 = Math.floor(app.weatherDates.list[11].main.temp_min - 273, 15) + "º";
			this.humidity11 = app.weatherDates.list[11].main.humidity;

			//this.IfGif = app.weatherDates.list[0].weather[3];
		},

		getGif: function () {
			//sentencia con la que limpio los gif.
			document.getElementById("myImg").innerHTML = "";
			document.getElementById("myImg2").innerHTML = "";

			if (this.weatherDates.list[0].weather[0].main == "Clear") {

				var x = document.createElement("IMG");
				x.setAttribute("src", "imgWeather/soleado.gif");
				var y = document.createElement("h3");
				y.innerHTML = "The sun greets you!!";

			} else if (this.weatherDates.list[0].weather[0].main == "Mist") {

				var x = document.createElement("IMG");
				x.setAttribute("src", "imgWeather/niebla.gif");
				var y = document.createElement("h3");
				y.innerHTML = "Beware of fog.";

			} else if (this.weatherDates.list[0].weather[0].main == "Clouds") {

				var x = document.createElement("IMG");
				x.setAttribute("src", "imgWeather/nuboso.gif");
				var y = document.createElement("h3");
				y.innerHTML = "Cloudy day, do not get depressed.";



			} else if (this.weatherDates.list[0].weather[0].main == "Rain") {

				var x = document.createElement("IMG");
				x.setAttribute("src", "imgWeather/lluvia3.gif");
				var y = document.createElement("h3");
				y.innerHTML = "Do not forget the umbrella!!";


			} else {
				var x = document.createElement("IMG");
				x.setAttribute("src", "imgWeather/niebla.gif");
				document.getElementById("myImg").src = "imgWeather\tenor.gif";
				var y = document.createElement("h3");
				y.innerHTML = "Something strange is happening there.";


			}

			document.getElementById("myImg").appendChild(x);
			document.getElementById("myImg").appendChild(y);



			if (this.weatherDates.list[8].weather[0].main == "Clear") {

				var x = document.createElement("IMG");
				x.setAttribute("src", "imgWeather/soleado.gif");
				var y = document.createElement("h3");
				y.innerHTML = "The sun greets you!!";

			} else if (this.weatherDates.list[8].weather[0].main == "Mist") {

				var x = document.createElement("IMG");
				x.setAttribute("src", "imgWeather/niebla.gif");
				var y = document.createElement("h3");
				y.innerHTML = "Beware of fog.";

			} else if (this.weatherDates.list[8].weather[0].main == "Clouds") {

				var x = document.createElement("IMG");
				x.setAttribute("src", "imgWeather/nuboso.gif");
				var y = document.createElement("h3");
				y.innerHTML = "Cloudy day, do not get depressed.";

			} else if (this.weatherDates.list[8].weather[0].main == "Rain") {

				var x = document.createElement("IMG");
				x.setAttribute("src", "imgWeather/lluvia3.gif");
				var y = document.createElement("h3");
				y.innerHTML = "Do not forget the umbrella.";

			} else {
				var x = document.createElement("IMG");
				x.setAttribute("src", "imgWeather/tenor.gif");
				var y = document.createElement("h3");
				y.innerHTML = "Something strange is happening there!!";
			}

			document.getElementById("myImg2").appendChild(x);
			document.getElementById("myImg2").appendChild(y);

		}

	}
});
