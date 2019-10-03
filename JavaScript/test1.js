function isValidName(name) {
    var flag = false;
    if (typeof(name) === "string" && name != "" && name.length > 3) {
        flag = true;
    }
    return flag;
}
console.log(isValidName("Frank") === true);
console.log(isValidName(false) === false);
console.log(isValidName(null) === false);
console.log(isValidName(undefined) === false);
console.log(isValidName("") === false);

console.log(isValidName("X") === false);