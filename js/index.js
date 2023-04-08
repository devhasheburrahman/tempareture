const API_KEY = `a59172ecbc3ddf5d1825ac5b3ded713e
`


const loadTemparete = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => displaytempareture(data))

}
const displaytempareture = data => {
    // const temparete = document.getElementById('temp');
    // // console.log(data.main.temp)
    // temparete.innerText = data.main.temp;
    SetTextById('temp', data.main.temp)
    SetTextById('conditation', data.weather[0].main)

    console.log(data.weather[0].main)


}
const SetTextById = (id, text) => {
    const temparete = document.getElementById(id);
    // console.log(data.main.temp)
    temparete.innerText = text;

}


document.getElementById('search-btn').addEventListener('click', function () {
    const searchField = document.getElementById('search-field');
    const city = searchField.value;

    // set city 
    document.getElementById("city").innerText = city;

    loadTemparete(city);
})


loadTemparete('dhaka');