

export function random(len : number){
    const content = "qwereuoprekajljhdasgyuweyqiowerimzncvzbmjkfadskieyroweqiusjdafsdkjfhyiewyryodjkfhdsk";
    let hash="";
    for(let i=0; i< len; i++){
        hash += content[Math.floor((Math.random())*content.length)];
    }
    return hash;
}