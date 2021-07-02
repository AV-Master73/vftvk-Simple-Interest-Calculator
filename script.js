"use strict";

function rate_refresh() {
    alert("rate_refresh");
    percent = document.getElementById("rate").value;
    document.getElementById("percentage").innerText = string(percent);
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