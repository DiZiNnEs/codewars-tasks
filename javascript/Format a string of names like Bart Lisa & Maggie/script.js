function list(names){
    if (!names.length) {
        return "";
    } else if (names.length === 1) {
        return names[0].name;
    }

    let result = [];
    for (let i = 0; i < names.length; i++) {
        if (names[i] === names[names.length - 1]) {
            result.push(`& ${names[i].name}`);
        } else if (names[i] === names[names.length - 2]) {
            result.push(`${names[i].name}`);
        }
        else {
            result.push(`${names[i].name},`);
        }
    }

    return result.join(' ');
}
