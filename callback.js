
function greeting(greetingHendler,name){
    greetingHendler(name)
}

function greetingHendler(name){
    console.log('good morning', name)
}

greeting(greetingHendler, 'kolmi')

