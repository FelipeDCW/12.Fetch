const postdata = document.querySelector(`#post-data`) 

/* const btnPost = document.querySelector(`button`) 
btnPost.addEventListener(`click`,()=>{
    getPosts()
})
 */
const getPosts = async ()=>{
    try {
        response = await fetch('https://jsonplaceholder.typicode.com/posts')
        if(!response.ok){
            throw new Error(`Error escrito por el usuario ${response.status}`)
        }    
        renderizaPost(await response.json())
        
        
    } catch (error) {
        console.log(error.message);
        console.log(error);
    }
    
}

const renderizaPost = (post)=>{
    cadena = '<ul></ul>'
    console.log(post);
    post.forEach(indice => {
        return cadena = cadena  + `<li> ${indice.body} </li>`
    });
    postdata.innerHTML = cadena
}
