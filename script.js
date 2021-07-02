"use strict";

function rate_refresh() {
    alert("11111");
    percent = document.getElementById("rate").value;
    alert("222222");
    document.getElementById("percentage").innerText = string(percent);
    percent = 7;

    return percent;
}

function compute() {
    alert("compute");
    amount = document.getElementById("principal").value;
    percent = document.getElementById("rate").value;
    years_n = document.getElementById("years").value;
    res = (amount * percent / 100) * years_n;
    document.getElementById("result").innerText = string(res);
    return res;
}