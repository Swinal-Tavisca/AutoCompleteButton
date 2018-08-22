function enterdata(e) 
{ 
    debugger; 
    var names = ["Ragul", "Rajpreet", "Pallvi", "Neha", "Ankita", "Raja", "Shreea", "Smriti", "Shrijeet", "Ayush", "Swapnil", "Nihit", "Bhargavi", "Anushka", "Swinal", "Utkarsh", "Saurabh", "Paarth", "Vishwas", "Mohit", "Gurbaksh", "Ashwarya"]; 
    names=names.sort(); 
    var data = document.getElementById("name").value; 
    var suggestionBox = document.getElementById("drop"); 
    var str = "<ul>"; 
    var flag = 0;   
    names.forEach(element => { 
        if (element.toUpperCase().includes(data.toUpperCase())) { 
            str += "<li id='" + element + "' onclick='dataSelect(this.id)' onkeydown='selectdata(event,this.innerHTML)'>" + element + "</li>"; 
            console.log(str); 
            flag = 1; 
    } 
    }); 
    if (flag == 1) 
        str += "</ul>"; 
    else
    { 
        str = "<li>Data Not Found</li></ul>"; 

    } 
    if (data == "") 
        suggestionBox.innerHTML = ""; 
    else 
        suggestionBox.innerHTML = str; 

} 
function OnBodyClick()
{ 
    debugger; 
    document.getElementById("drop").innerHTML = ""; 

}
function clearText() 
{ 
    document.getElementById("name").value = ""; 
    document.getElementById("drop").innerHTML = ""; 

} 
function dataSelect(data) 
{ 
    debugger; 
    document.getElementById("name").value = data; 
    document.getElementById("drop").innerHTML = ""; 
} 
function selectdata(evt,data) 
{   
    debugger; 
    console.log(data); 

} 

