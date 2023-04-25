$(window).on("load", async function () {
    $(".loader").fadeOut(1000);
    delay(1000).then(() => $(".content").fadeIn(1000));
  });
  
  function delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  
  var typed = new Typed(".auto-type", {
    strings: [
      "Datenschutzerklärung", 
    ],
    typeSpeed: 100,
    backSpeed: 75,
    startDelay: 1000,
    loop: true,
  });
  
  document.getElementById("btn").onclick = function () {
    location.href = "https://nouhi.dev/davinci-invite";
  };
  