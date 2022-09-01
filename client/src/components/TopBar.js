

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
      <h1>Please give your feedback in the <a href="/feedback">feedback and comments page!</a></h1>
      <h3>The first 10 comments will be displayed in a special color, so hurry!</h3>
    </div>
  )
}

export default TopBar;
