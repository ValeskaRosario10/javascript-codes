function displayInfo<T>(data:T):T{
    return data
}

console.log(displayInfo<number>(100));
console.log(displayInfo<string>("Gargi"));
console.log(displayInfo<boolean>(true));