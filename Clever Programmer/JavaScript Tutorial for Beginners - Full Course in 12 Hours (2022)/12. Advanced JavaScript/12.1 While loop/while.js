
// let num = 0;

// while (num < 5){
//     console.log("looping", num);
//     num++;
// }


// let finished = true;

// while (finished == true){
//     console.log('looping', `${finished}`)
//     finished = false;
//     console.log('looping', `${finished}`)
// }


document.addEventListener('keydown', (f) =>{
    console.log(f.key)
})

document.addEventListener('keydown', function(e){
    if (e.key == 'q'){
        console.log(e.key)
        document.getElementById('punch').play()
    } 
    else {
        console.log("Not Q")
    }
})

