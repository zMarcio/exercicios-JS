function rgb(r, g, b){
    r = Math.max(0, Math.min(255, r));
    g = Math.max(0, Math.min(255, g));
    b = Math.max(0, Math.min(255, b));

    // let resultR = r % 16;
    // let resultG = g % 16;
    // let resultB = b % 16;
    let hexR = r.toString(16).padStart(2, '0');
    let hexG = g.toString(16).padStart(2, '0');
    let hexB = b.toString(16).padStart(2, '0');
    
    let results = hexR+hexG+hexB
    // console.log(results)
    return results.toUpperCase();
}
let result;
console.log(result = rgb(255,255,255))