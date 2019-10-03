function isValidName(name) {
    var flag = false;
    if (typeof(name) === "string" && name != "" && name.length > 3) {
        flag = true;
    }
    return flag;
}
console.log(isValidName("741"));