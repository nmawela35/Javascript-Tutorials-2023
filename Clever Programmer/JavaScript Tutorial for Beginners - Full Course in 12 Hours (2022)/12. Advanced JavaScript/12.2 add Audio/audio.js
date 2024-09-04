
document.addEventListener('keydown', function(e){
   
    if (e.key == 'P'){
        console.log('You pressed p')
        document.getElementById('punch').play()
    } 
    else {
        console.log("Not P")
    }
})