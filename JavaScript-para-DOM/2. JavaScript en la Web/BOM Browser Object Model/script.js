const historyBack = () => historyBack();
const historyFoward = () => historyFoward();

docuemnt.getElementById("screenh").innerHTML = screen.height + "px";
document.getElementById("screenw").innerHTML = screen.width + "px";
document.getElementById("screenc").innerHTML = screen.colorDepth + "bit";

document.getElementById("URL").innerHTML = location.href;
document.getElementById("back").addEventListener("click", historyBack);
document.getElementById("foward").addEventListener("click", historyFoward);

document.getElementaryById("cookie").innerHTML = navigator.cookieEnabled
  ? "Si"
  : "No";

//document.getElementById("app").innerHTML = navigator.appName;
//document.getElementById("so").innerHTML = navigator.platform;
