function Random() {

    let number = Math.random() * 100;

    return <h2 style = {{'background-color' : '#123456'}}>This is random Number: {Math.round(number)} </h2>

}

export default Random;