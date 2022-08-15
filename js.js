let my_name = prompt('isminiz')
let userName = document.querySelector('#myName')

if (my_name) {
    userName.innerHTML = my_name

}
else {
    alert('adinizi giriniz..!!')
    location.reload()
}


function showTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('myClock').innerHTML = h + ":" + m + ":" + s;
    setTimeout(showTime, 1000);

}

function checkTime(i) {
    if (i < 10) { i = "0" + i }; //ön tarafa 0 eklemek için <10
    return i;
}
showTime()