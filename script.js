"use strict";

function rate_refresh() {
    let percent = document.getElementById("rate").value;
    document.getElementById("percentage").innerHTML = percent + "%";
    return percent;
}

function compute() {
    let amount = document.getElementById("principal").value;
    let percent = document.getElementById("rate").value;
    let years_n = document.getElementById("years").value;
    let res = (amount * percent / 100) * years_n;
    alert(res);
    document.getElementById("result").innerHTML = "Interest : " + res;
    return res;
}