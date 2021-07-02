"use strict";

function compute() {
    amount = document.getElementById("principal").value;
    percent = document.getElementById("percentage").value;
    years_n = document.getElementById("years").value;
    res = (amount * percent / 100) * years_n;
    alert(111);
    document.getElementById("result").innerText = string(res);
}