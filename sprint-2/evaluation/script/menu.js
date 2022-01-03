var url = "https://www.themealdb.com/api/json/v1/1/search.php?f=a";

function getData(url){
    fetch(url)
    .then((res)=>{
        res.json().then((data)=>{
            show(data.meals);
        })
    })
    .catch((err)=>{
        console.log(err);
    })
}

getData(url);


function addCart(){

}

var display = document.getElementById('display');

function show(myData){
    console.log(myData);
    myData.map((ele)=>{
        var img = ele.strMealThumb;
        var name = ele.strMeal;
        var fprice = Math.floor(Math.random() * (500 - 100) + 100);
        price = `Rs ${fprice}.00`
        var button = document.createElement('button');
        button.addEventListener('click', addCart);
        button.innerText = 'Add To Cart';

        var div = document.createElement('div');
        var image = document.createElement('img');
        image.setAttribute('src', img);
        var nam = document.createElement('p')
        nam.innerText = name;
        var pri = document.createElement('p');
        pri.innerText = price;

        div.append(image, nam, pri, button);
        display.append(div);

    })
}

//console.log(Data);
//show();