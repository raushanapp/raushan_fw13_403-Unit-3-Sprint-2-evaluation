async function fetchMeal () {
   
    try{
        let meal = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a');

      let mealData = await meal.json();
       newMeal (mealData)
    //  console.log( "data",mealData)
    }catch(error) {
        console.log("my data error",error)
    }
}
fetchMeal();



function newMeal (arr) {
    console.log("array:",arr)

    let main = document.getElementById('listMeal')

    arr.forEach(function (elem) {
        console.log("element:",elem)

       let dishesDiv = document.createElement("div");

      let  idP =document.createElement("p");

        idP.textContent = elem.idMeal

        let nameP= document.createElement("p");

        nameP.textContent = elem.strMeal

        let image = document.createElement("img");

        image.src = elem.strMealThumb;

        dishesDiv.append(image,nameP,idP);

        main.append(dishesDiv)

    })


}

/*function myMeals (idMeal,) {

    this.id = idMeal
    this.name = strmeal
    this.image = strMealThumb
    this.price = Math.floor(Math.random()*500)
    

}*/


