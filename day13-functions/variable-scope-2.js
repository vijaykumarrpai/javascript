var n1 = 100;

function func1() {
    console.log(n1);
    var n2 = 200;
    function func2() {
        console.log(n1);
        console.log(n2);
        var n3 = 300;
    }
    func2();
    // console.log(n3);
}
func1();
//console.log(n2);