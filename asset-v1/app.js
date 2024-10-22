/* 0.5.4 2021-04-23 21:06:13 */
var app = new function() {
    this.name = "Razor", 
    this.version = "1",
    this.date = "2024", 
    this.folder = "asset-v1/", 
    this.looptime = 15992,
    this.bpm = 120, 
    this.totalframe = 260, 
    this.nbpolo = 7, 
    this.nbloopbonus = 2, 
    this.bonusloopA = !1, 
    this.bonusendloopA = !1,
    this.recmaxloop = 34, 
    this.recminloop = 4, 
    this.recmintime = Math.round(this.looptime / 1e3) * this.recminloop, 
    this.spritepolo = "polo-sprite.png", 
    this.spritepicto = "game-picto.png", 
    this.colBck = "#dba039", 
    this.col0 = "#919191", 
    this.col1 = "#fdba46", 
    this.col2 = "#fdba46", 
    this.col3 = "#fdba46", 
    this.col4 = "#fdba46", 
    this.animearray = [
    {name: "01_Kick", color: "fdba46", uniqsnd: !0},
    {name: "02_Snare", color: "fdba46", uniqsnd: !0},
    {name: "03_Hit_Hats", color: "fdba46", uniqsnd: !1},
    {name: "04_Cobw", color: "fdba46", uniqsnd: !0},
    {name: "05_Kah", color: "fdba46", uniqsnd: !0},
    {name: "06_Ebass", color: "fdba46", uniqsnd: !1},
    {name: "07_Hert_Not_K", color: "fdba46", uniqsnd: !1},
    {name: "11_Razor", color: "fdba46", uniqsnd: !1},
    {name: "12_Bruss", color: "fdba46", uniqsnd: !1},
    {name: "13_Hert_K", color: "fdba46", uniqsnd: !1}
    ], this.bonusarray = [];
    for (var n = 0, o = this.animearray.length; n < o; n++) {
        var a = this.animearray[n].name;
        this.animearray[n].soundA = a + "_a", 
        this.animearray[n].soundB = this.animearray[n].uniqsnd ? a + "_a" : a + "_b", 
        this.animearray[n].anime = a + "-sprite.png", 
        this.animearray[n].animeData = a + ".json"
    }
};
