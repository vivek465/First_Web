
import logo from './img/send_FILL0_wght400_GRAD0_opsz48.svg';
import './App.css';
import $ from 'jquery'
function App() {
  $('#myInput').keypress((e) => {
    debugger
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if (keycode === '13') {
      var input = $('#myInput');
      $("<p class='myMsg'></p>").appendTo(".main .messageBox").text(input.val());
      let inNow = input.val()
      input.val("");
      setTimeout(function () {
        $("<p class='senderMsg'></p>").appendTo(".smain .messageBox").text(inNow);
      }, Math.random() * 2000);
      e.preventDefault();
    }
  })
  // $('#senderInput').keypress((e) => {
  //   var keycode = (e.keyCode ? e.keyCode : e.which);
  //   if (keycode == '13') {
  //     var input = $('#senderInput');
  //     $("<p class='myMsg'></p>").appendTo(".smain .messageBox").text(input.val());
  //     let inNow = input.val()
  //     input.val("");
  //     setTimeout(function () {
  //       $("<p class='senderMsg'></p>").appendTo(".main .messageBox").text(inNow);
  //     }, Math.random() * 3000);
  //     e.preventDefault();
  //   }
  // })




  return (
    <div className="main">
      <div className="messageBox">
      </div>
      <div className="input">
        <input id='myInput' type="text" placeholder="Write Something..." autoComplete="off" />
        <img src={logo} alt=">" />
      </div>

    </div>
  );
}
export default App;
