let gamesPlayed=[
    {
        game:"arg.bra",
        result:"2.1"
    },{
        game:"bra.arg",
        result:"0.3"
    },
    {
        game:"bra.esp",
        result:"1.1"
    },{
        game:"esp.bra",
        result:"1.4"
    },
    {
        game:"esp.arg",
        result:"4.1"
    }, 
    {
        game:"arg.esp",
        result:"1.1"
    }, 
    {
        game:"hol.bra",
        result:"1.3"
    }, 
    {
        game:"bra.hol",
        result:"2.2"
    }, 
    {
        game:"arg.hol",
        result:"0.0"
    }, {
        game:"hol.arg",
        result:"2.1"
    }, {
        game:"hol.esp",
        result:"2.2"
    }, {
        game:"esp.hol",
        result:"3.1"
    }
];
const map1 = new Map();


for(let obj of gamesPlayed){
    map1.set(obj.game, obj.result.split('.'));
}
debugger;