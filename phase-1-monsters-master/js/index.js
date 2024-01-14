function run(){
   let div = document.getElementById('create-monster')
    //let form = document.createElement('form')

    div.innerHTML = 
    <form>
    <input type="text" placeholder='name' id="fname" name="fname" value=""></input>
    <input type="number" placeholder='age' id="fname" name="age" value=""></input>
    <input type="text" placeholder='description' id="desc" name="lname" value=""></input>
    <input id='sub' type="submit" value="Create monster"></input>
    </form>
  div.getElementById('sub').addEventListener('submit', ()=> {
    formData = input.value

    const configureMonst = {
        method:'POST',
        header:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
        
    }
    fetch('http://localhost:3000/monsters', configureMonst)

  })

 
  fetch('http://localhost:3000/monsters/?_limit=50&_page=1')
  .then(response => response.json())
  .then(data => {
    const monsters= document.getElementById('monster-container')
    monsters.innerText = data.monsters
  })


  const next = document.getElementById('forward')
  next.addEventListener("click", ()=> {
    fetch('http://localhost:3000/monsters/?_limit=50&_page=2')
    .then(response => response.json())
    .then(data => {
    const monsters= document.getElementById('monster-container')
    monsters.innerText = data.monsters
  })
})














document.addEventListener('DOMContentLoaded', run)
};
