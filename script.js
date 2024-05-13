//document.getElementById("count-el").innerText = 5

//initial counter set to 0
//listen for clicks on the button
//increment the count variable when the button is clicked
//change the count-el in the HTML to reflect the new count

let count = 0
let count_el = document.getElementById("count-el") 

function increment(){
    count+=1
    count_el.innerText = count
}


let pre = document.getElementById("previos-entries")


pre.textContent = "Previous entries "

function save(){
    if(count==0){
        pre.textContent 
    }else{
        pre.textContent += "  " + count +  "-"

    }
    count = 0
    count_el.innerText = count
}

function remove(){
    pre.textContent = "Previous entries "
}








// user = "ali"
// let welc = document.getElementById("welcome-el")

// welc.innerText = "Hello: " + user


