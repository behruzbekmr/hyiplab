let hour = document.querySelector(".hour");
let minut = document.querySelector(".minut");
let sekund = document.querySelector(".sekund");
let hour2 = document.querySelector(".hour2");
let minut2 = document.querySelector(".minut2");
let sekund2 = document.querySelector(".sekund2");

function clock() {
  let h = new Date().getHours() < 10 ? "0" + new Date().getHours() : new Date().getHours() ;
  let m =
    new Date().getMinutes() < 10
      ? "0" + new Date().getMinutes()
      : new Date().getMinutes();
  let s =
    new Date().getSeconds() < 10
      ? "0" + new Date().getSeconds()
      : new Date().getSeconds(); ;

  hour.innerHTML = h;
  minut.innerHTML = m;
  sekund.innerHTML = s;
}

setInterval(clock, 50);



function clock2() {
  let h2 =
    new Date().getHours() < 10
      ? "0" + new Date().getHours()
      : new Date().getHours();
  let m2 =
    new Date().getMinutes() < 10
      ? "0" + new Date().getMinutes()
      : new Date().getMinutes();
  let s2 =
    new Date().getSeconds() < 10
      ? "0" + new Date().getSeconds()
      : new Date().getSeconds();

  hour2.innerHTML = h2;
  minut2.innerHTML = m2;
  sekund2.innerHTML = s2;
}
setInterval(clock2, 50);
