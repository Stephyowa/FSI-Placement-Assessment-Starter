// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Stephanie Bukassa" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 ;      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
document.getElementById('add-gb').addEventListener('click', function() {
})  




document.getElementById('add-cc').addEventListener('click', function() {
})  





document.getElementById('add-sugar').addEventListener('click', function() {
})  
    // HINT: You can delete this console.log after you no longer need it!
    

    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
    
    const addgb = document.querySelector('#add-gb')

    addgb.addEventListener('click',function(){
        console.log('i was clicked')
     gb=gb +1;
        console.log(gb)
    document.getElementById("qty-gb").textContent = gb 
    document.getElementById("qty-total").textContent = gb + cc + sugar;
    })

    const minusgb = document.querySelector('#minus-gb')

    minusgb.addEventListener('click',function(){
        console.log('i was clicked')
     gb=gb -1;
        console.log(gb)
    document.getElementById("qty-gb").textContent = gb 
    document.getElementById("qty-total").textContent = gb + cc + sugar;
    })


 
    
       


    const addcc = document.querySelector('#add-cc')

    addcc.addEventListener('click',function(){
        console.log('i was clicked')
    cc=cc +1;
      console.log(cc)
   document.getElementById("qty-cc").textContent = cc 
   document.getElementById("qty-total").textContent = gb + cc + sugar;

    })


    const minuscc = document.querySelector('#minus-cc')

    minuscc.addEventListener('click',function(){
        console.log('i was clicked')
    cc=cc -1;
      console.log(cc)
   document.getElementById("qty-cc").textContent = cc 
   document.getElementById("qty-total").textContent = gb + cc + sugar;
    })



    const addsugar = document.querySelector('#add-sugar')

    addsugar.addEventListener('click',function(){
        console.log('i was clicked')
    sugar=sugar +1;
      console.log(sugar)
   document.getElementById("qty-sugar").textContent = sugar
   document.getElementById("qty-total").textContent = gb + cc + sugar;

    })


    const minussugar = document.querySelector('#minus-sugar')

    minussugar.addEventListener('click',function(){
        console.log('i was clicked')
    sugar=sugar -1;
      console.log(sugar)
   document.getElementById("qty-sugar").textContent = sugar
   document.getElementById("qty-total").textContent = gb + cc + sugar;
    })








      

    
        


// TODO: Hook up event listeners for the rest of the buttons