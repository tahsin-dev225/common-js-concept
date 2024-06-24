let b = 2;

function whact(){
    let a = 4;
    return function(){
        a++
        console.log(a)
        console.log(b)
    }
}

const k = whact()
k()

const j = whact()
j()
j()
j()