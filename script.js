"use strict";

function rate_refresh() {
    let percent = document.getElementById("rate").value;
    document.getElementById("percentage").innerHTML = percent + "%";
    return 0;
}

function compute() {
    let amount = document.getElementById("principal").value;
    let percent = document.getElementById("rate").value;
    let years_n = document.getElementById("years").value;
    if (!(amount > 0)) {
        alert("Amount have to be a positive number!");
        document.getElementById("principal").focus();
    }
    let currentTime = new Date();
    let cur_year = currentTime.getFullYear();
    let end_year = cur_year + Number(years_n);
    let res = (amount * percent / 100) * years_n;
    document.getElementById("result").innerHTML = "If you deposit <span class=&quot;output&quot;>" + amount + "</span><br>" +
        "at an interest rate of <span class=&quot;output&quot;>" + percent + "</span>%<br>" +
        "You will receive an amount of <span class=&quot;output&quot;>" + res + "</span><br>" +
        "in the year <span class=&quot;output&quot;>" + end_year + " </span><br>";
    return 0;
}