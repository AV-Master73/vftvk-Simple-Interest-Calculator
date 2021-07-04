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
    let currentTime = new Date();
    let cur_year = currentTime.getFullYear();
    let end_year = cur_year + Number(years_n);
    let res = (amount * percent / 100) * years_n;
    document.getElementById("result").innerHTML = "If you deposit " + amount + "<br>" +
        "at an interest rate of " + percent + "%<br>" +
        "You will receive an amount of " + res + "<br>" +
        "in the year " + end_year + "<br>";
    return res;
}