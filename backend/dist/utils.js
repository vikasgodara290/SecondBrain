"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.random = random;
function random(len) {
    const content = "qwereuoprekajljhdasgyuweyqiowerimzncvzbmjkfadskieyroweqiusjdafsdkjfhyiewyryodjkfhdsk";
    let hash = "";
    for (let i = 0; i < len; i++) {
        hash += content[Math.floor((Math.random()) * content.length)];
    }
    return hash;
}
