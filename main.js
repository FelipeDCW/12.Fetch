
const buscarUsuarios = async ()=>{
    console.log(`Inicio1`)
    try {
        response = await fetch('https://jsonplaceholder.typicode.com/users')
        if(!response.ok){
            throw new Error(`Error escrito por el usuario ${response.status}`)
        }    
        const usuarios = await response.json()
        console.log(usuarios);
    } catch (error) {
        console.log(error.message);
        console.log(error);
    }
    console.log(`termino1`)
}

console.log(`Inicio2`)
buscarUsuarios()
console.log(`termino2`)