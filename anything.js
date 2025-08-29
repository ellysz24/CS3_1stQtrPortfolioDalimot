console.log('Hey there Pot')

// tv5 - 5
// abscbn - 2
// gma - 7
// ibc - 13
// ptv - 4

rli = require('readline').createInterface({
    input: process.stdin
})

rli.on('line', get_inputs)
function get_inputs(line){
    if(line !== "END") {
      input.push(line)
}
else {
    rli.close()
}
line != "END" ? input.push(line): rli.close
}
var inputs = []
rli.on('close', get_the_channel)

rli.on('line', get_the_channel)


function get_the_channel(inputs){ 
    for(let i=0; i < inputs; i++)

 
    switch(inputs[i]) {
    case "2":
        console.log("abscbn")
        break;
    case "5":
        console.log("tv5")
        break;
    case "7":
        console.log("gma")
        break;
    case "4":
        console.log("ptv")
        break;
    case "13":
        console.log("ibc")
        break;
    }



}