var element=document.createElement('div');
element.setAttribute("class","container");
document.body.appendChild(element);
var row1=document.createElement('div');
row1.setAttribute("class","row");
element.appendChild(row1);

fetch("https://restcountries.com/v3.1/all")
    .then(function (data) {
        return data.json()
    })
    .then(function (countries) {
        var cname = document.getElementById("aa")
        countries.forEach(function (country) {

            var div1 = document.createElement('div');
            div1.setAttribute("class", "card");
            row1.appendChild(div1);
            var div2 = document.createElement('div');
            div2.setAttribute("class", "card-header");
            div2.setAttribute("id", "aa");
            div2.innerHTML = country.name.common;
            div1.appendChild(div2);
            var div3 = document.createElement('div');
            div3.setAttribute("class", "card-body");
            div1.appendChild(div3);
            var div4 = document.createElement('div');
            div4.setAttribute("class", "image");
            div4.innerHTML = "<img id='as' src='" + country.flags.png + "'/>";
            div3.appendChild(div4);
            var div5 = document.createElement('div');
            div5.setAttribute("class", "des");
            div5.innerHTML = "Capital : " + country.capital;
            div3.appendChild(div5);
            var div6 = document.createElement('div');
            div6.setAttribute("class", "region");
            div6.innerHTML = "Region : " + country.region;
            div3.appendChild(div6);
            var div7 = document.createElement('div');
            div7.setAttribute("class", "countrycode");
            var code = country.region;
            div7.innerHTML = "countrycode : " + country.cca3;
            div3.appendChild(div7);
            var div8 = document.createElement('div');
            div8.setAttribute("class", "button");
            div8.setAttribute("id", "button");
            div8.innerHTML = `<input type='button' class='btn-primary' value='Weather' onclick='getweather("${code}")'></button>`;
            div3.appendChild(div8);


        })


    })
    .catch(function (err) {
        console.log(err)
    });

function getweather(value) {
   // var main = document.querySelector('#name');
    //var temp = document.querySelector('.temp');
    //var desc = document.querySelector('.desc');
    //var clouds = document.querySelector('.clouds');


    
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + value + '&appid=50a7aa80fa492fa92e874d23ad061374')
            .then(response => response.json())
            .then(data => {
                var tempValue = data['main']['temp'];
                var nameValue = data['name'];
                var descValue = data['weather'][0]['description'];
                alert(`Region name:${nameValue}\n\n\n temperature:${tempValue}\n\n\n description:${descValue}`);

                //main.innerHTML = nameValue;
                //desc.innerHTML = "Desc - " + descValue;
               // temp.innerHTML = "Temp - " + tempValue;

                

            })

            .catch(err => alert("Wrong city name!"));
    
}
