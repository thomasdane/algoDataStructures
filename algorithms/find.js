const find = (needle, haystack) => {
    return haystack.filter(el => el === needle);
}

console.log(find(1,[1,2]))
console.log(find(1,[2]))
