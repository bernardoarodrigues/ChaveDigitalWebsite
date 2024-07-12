// Executed in button onClick
function downloadApk() {
  var userAgent = navigator.userAgent.toLowerCase();
  var android = userAgent.indexOf("android") > -1;

  if (!android) {
    alert("Baixe o aplicativo em um dispositivo Android");
  } else {
    download();
  }
}

// Download url
var url = "https://drive.google.com/file/d/12nOo_qsTF6xUzK-zdBhwgeRBqiBPZlmJ/view?usp=sharing";

// Redirects to url
function download() {
  var a = document.createElement("a");
  a.href = url;
  a.click();
}
