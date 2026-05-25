function convertTemp(){
    let value = document.getElementById("tempInput").value;
    let type = document.getElementById("type").value;
    let result = document.getElementById("result");

    if(value === ""||isNaN(value)){
        result.innerHTML = "Please enter a valid number.";
        return;
    }

    value = Number(value);

    let c, f, k;

    if (type === "C"){
        c = value;
        f = (c * 9/5) + 32;
        k = c + 273.15;

        result.innerHTML = "F: " + f + "K: " + k;
    }
    else if (type === "F"){
        f = value;
        c = (f - 32) * 5/9;
        k = c + 273.15;

        result.innerHTML = "C: " + c + "K: " + k;
    }
    else if (type === "K"){
        k = value;
        c = k - 273.15;
        f = (c * 9/5) + 32;

        result.innerHTML = "C: " + c + "F: " + f;
    }

}
