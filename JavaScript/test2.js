function hoursAttended(attended, length) {
    let flag = false;
    if ((typeof(attended) === "string" || typeof(length) === "number")) {
        if (typeof(attended) === "number") {
            if (attended >= 0 && length >= 0) {
                if (attended <= length) {
                    flag = true;
                }
            }


        }
    }
    return flag;
}
console.log(hoursAttended(6, 10) === true);
console.log(hoursAttended(6, 10) === true);
console.log(hoursAttended(6, 10) === true);
console.log(hoursAttended(6, 10) === true);