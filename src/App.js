
import logo from './img/send_FILL0_wght400_GRAD0_opsz48.svg';
import './App.css';
import $ from 'jquery'
function App() {
  // $('#myInput').keypress((e) => {
  //   var keycode = (e.keyCode ? e.keyCode : e.which);
  //   if (keycode === 13) {
  //     var input = $('#myInput');
  //     let inNow = input.val()
  //     if(inNow !== ''){
  //       $("<p class='myMsg'></p>").appendTo(".main .messageBox").text(inNow);
  //     }
  //     input.val("");
  //     e.preventDefault();
  //   }
  // })

  const onEnter = ()=>{
    console.log('Yes')
  }




  return (
    <div className="main">
      <div className="messageBox">
      </div>
      <div className="input">
        <input id='myInput' onKeyPress={onEnter()} type="text" placeholder="Write Something..." autoComplete="off" />
        <img src={logo} alt=">" />
      </div>


    </div>
  );
}
export default App;
