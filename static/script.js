// Lets make the capitalize funtions 
let btn1  = document.querySelector('.btn1')
btn1.addEventListener("click",()=>{    
let maintext = document.getElementById('my-text').value
   let result =  maintext.toUpperCase()
   document.getElementById('my-text').value = result
})
// This is for lowercase funtion 
let lowerbutton = document.querySelector('.btn2')
lowerbutton.addEventListener("click",()=>{
    let maintext = document.getElementById('my-text').value
    let result = maintext.toLowerCase()
     document.getElementById('my-text').value = result
})

//This is for copy function 
let copybutton = document.querySelector('.btn4')
copybutton.addEventListener("click", ()=>{
    let maintext =  document.getElementById('my-text').value
    document.getElementById('my-text').select()
    navigator.clipboard.writeText(maintext)
})
let tarea = document.getElementById('my-text')
tarea.addEventListener("input", ()=>{
    let result = (document.getElementById('my-text').value).length
    let count =  document.getElementById('count-result')
    count.innerHTML = `Total Characters: ${result}`
})
//Making the form to be submitted after user clicks on ai button
btn3.addEventListener("click",()=>{
    form.submit()
})