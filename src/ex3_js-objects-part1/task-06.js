function deepClone(obj) {
    const clone = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if(typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
                clone[key] = deepClone(obj[key]);
                continue;
            }
            if(Array.isArray(obj[key])) {
                clone[key] = [];
                for (let elem of obj[key]) {
                    if(typeof elem === 'object') {
                        clone[key].push(deepClone(elem));
                        continue; }
                    clone[key].push(elem);
                }
                continue;
            }
            clone[key] = obj[key];
        }
    }
        return clone;
}
module.exports = deepClone