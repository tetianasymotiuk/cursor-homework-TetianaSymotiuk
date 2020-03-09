const keys =  document.getElementById('keys');

keys.addEventListener('click',(event)=>{
    playMusic(event.target.id.toUpperCase())
})

document.addEventListener('keydown',event=>{
    playMusic(event.key.toUpperCase())
})
const playMusic = (id) =>{
  document.getElementById(`${id}-sound`).play();
  setTimeout(()=>{
    document.getElementById(`${id}-sound`).pause();
  },1000)
}