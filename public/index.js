console.log("Js is added");
let people = [];
var nameInput = "";
var addressInput = "";

function html(){
    var newPeople = people.filter(function(p){
        if(nameInput === ""){
            return p.address.startsWith(addressInput);
        }
        if(addressInput === ""){
            return p.name.startsWith(nameInput);
        }
        return p.name.startsWith(nameInput) && p.address.startsWith(addressInput)
    })
    var html = "";
    for(var i = 0; i < newPeople.length; i++){
        html += `<tr>
        <td>${newPeople[i].name}</td>
        <td>${newPeople[i].address}</td>
      </tr>`
    }
    $("table").html(html);
}

const url = "http://localhost:3000/api";

async function getPeople(url){
    let x = await fetch(url);
    let y = await x.json();
    people = y;
}

getPeople(url);


$(".name").on("input", function(e){
    nameInput = e.target.value;
    html();
})
$(".address").on("input", function(e){
    addressInput = e.target.value;
    html();
})
