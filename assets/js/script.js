console.log("nut 02");

var recipeSelect = document.getElementById("ChooseRecipe");
var showIngredientList = document.getElementById("showIngredientList");
var searchBtn = document.getElementById("searchBtn");
var showIt = document.getElementById("showIt");
var errorRecipe = document.getElementById("err-recipe");
var recipeImage = document.getElementById("recipeImage");
var showInstructiontionList = document.getElementById("showInstructionList");

var theIngredients;
var theInstructions;

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
    getIngredients(data);
    getInstructions(data);
    

    
    
    
})


function getLabels(thedata){
   // console.log(typeof(thedata.hits));
   
   // console.log(thedata.hits[0].recipe.label);
    // for (var i = 0; i < 10; i++){
    //     console.log(thedata.hits[i].recipe.label)
    // }
     var theList = [];

    for (const key in thedata.hits){
       // console.log(thedata.hits[key].recipe.label);
        theList.push(thedata.hits[key].recipe.label);
    }
    console.log(theList);

    var optionSelection;

        
        for (var i =0; i < theList.length; i++){
           // console.log(theList[i]);
            optionSelection += "<option>"+ theList[i] + "</option>";
            
        }

        recipeSelect.innerHTML = optionSelection;


}

// get ingredients

function getIngredients(thedata){
    console.log(thedata.hits[0].recipe.ingredientLines)
    console.log(typeof(thedata.hits[0].recipe.ingredientLines))

}
function getInstructions(thedata){
    console.log(thedata.hits[0].recipe.instructionLines)

}