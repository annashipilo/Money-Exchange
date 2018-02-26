module.exports = function makeExchange(currency) {
    var obj = new Object();
    
    if(currency >= 1 && currency <= 10000) {
        var h = Math.floor(currency / 50);
        var q = Math.floor((currency - h*50) / 25);
        var d = Math.floor((currency - h*50 - q*25) / 10);
        var n = Math.floor((currency - h*50 - q*25 - d*10) / 5);
        var p = Math.floor((currency - h*50 - q*25 - d*10 - n*5) / 1);
        
        obj.H = h;
        obj.Q = q;
        obj.D = d;        
        obj.N = n;        
        obj.P = p;      
        
        for (var key in obj){
            if (obj[key] == 0){
                delete obj[key];
            }
        }
    } else if (currency > 10000){
        obj.error = "You are rich, my friend! We don't have so much coins for exchange";
    }
    return obj;
}

