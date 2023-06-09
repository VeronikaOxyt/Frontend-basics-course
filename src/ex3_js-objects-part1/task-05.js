function objCopy(obj) {
    let clone = Object.assign({}, obj);
    return clone;
}
module.exports = objCopy