

const TopBar = (props) => {
  // const changeColors = () =>{
  //   setInterval(()=>{
  //     let elm = document.getElementById('top_bar');
  //     elm.classList.toggle('changeToRed');
      // if(!elm.classList.contains('changeToRed')){
      //   elm.classList.add('changeToRed');
      //   console.log('added');
      //
      // } else{
      //   elm.classList.remove('changeToRed');
      //   console.log('removed');
      // }
  //   }, 2000)
  // }
  // changeColors();
  return(
    <div id='top_bar'>
      <h1>Thank You Developers.Institute!!!</h1>
      <h3>Thank you Lise</h3>
      <h2>Thank you Zivuch</h2>
      <h3>Thank you Yossi</h3>
    </div>
  )
}

export default TopBar;
