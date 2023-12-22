console.log("nut 02");

var url = "https://api.edamam.com/api/recipes/v2?type=public&q=Chicken&app_id=7446fad3&app_key=c948828625f59288cf410564484402b1";

fetch(url)
//.then(response => response.json())
.then(function(response){
    return response.json();
})
//.then(data => console.log(data))
.then(function (data){
    console.log(data);
    getLabels(data);
    
})


function getLabels(thedata){
    console.log(typeof(thedata.hits));
   
   // console.log(thedata.hits[0].recipe.label);
    // for (var i = 0; i < 10; i++){
    //     console.log(thedata.hits[i].recipe.label)
    // }

    for (const key in thedata.hits){
        console.log(thedata.hits[key].recipe.label);
    }
}