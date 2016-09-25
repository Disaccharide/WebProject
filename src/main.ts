function draw(n:Number){
    for (var j :number= 1; j <=n; j++) {
        var str :string= "";
        for (var i:number = 1; i <= n - j; i++) {
            str += " ";
        }
        for (var k :number= 1; k <= 2 * j - 1; k++) {
            str += "*";
        }
        console.log(str);
    }
}

window.onload = () => {
    draw(5);
};