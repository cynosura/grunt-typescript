(function (Foo) {
    function bar() {
        return "foobar!";
    }
    Foo.bar = bar;
})(exports.Foo || (exports.Foo = {}));
var Foo = exports.Foo;
