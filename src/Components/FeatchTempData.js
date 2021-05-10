import React from "react";

class FeatchTempData extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            city: "Indore",
            country:"India",
            ApiKey:"7d522c0a8e7523599a797fd256d1cbaa",
            temp:0,
            Icon:"",
            Des:""
        }
    }

    // getWeather = () => {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //       .then(response => response.json())
    //       .then(json => console.log(json))
    // }


    //temp, icon

    getWeather = async (e) => {
        e.preventDefault()
        var city = document.getElementById("city").value;
        var Url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.state.ApiKey}`
        var data = await fetch(Url)
        var response = await data.json()
        if(response.cod === "404"){
            console.log("Enter Correct City")
        }else {
                 var Temp = Math.round(response.main.temp - 273.15)
                var Icon = response.weather[0].icon
                var Des = response.weather[0].description
                this.setState({
                    temp:Temp,
                    Icon:`http://openweathermap.org/img/wn/${Icon}@2x.png`,
                    Des:Des
                })
            console.log(response)
            var h3=document.getElementById('h3')
            h3.innerHTML=`Temp Is: ${this.state.temp}°C`

        }

    }

    render() {
        return (
            <div>
                
                <form style={{paddingTop:"40px"}}>
                 <b style={{color:'green'}}>My Demo Weather App </b><br/><br/>
                    <input id = "city" type="text" placeholder="Enter City" style={{width:"300px", borderRadius:"12px", height:"22px", borderColor:"darkblue"}}/><br/><br/>
                     <button style={{width:"150px", borderRadius:"12px"}} onClick={this.getWeather}>Search..</button>
                </form>
                <div>
                    <p>
                    <h3 id="h3"></h3>
                    <b>{this.state.Des}</b><br/>
                    </p>
                    <img src={this.state.Icon} />
                
                </div>

            </div>
        );
    }

}

export default FeatchTempData