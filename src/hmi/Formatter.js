// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../Packages/Beckhoff.TwinCAT.HMI.Framework.12.760.59/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var hmi;
        (function (hmi) {
            function Formatter(Input) {

                console.log(Input);

                const num = parseFloat(Input);
                // Check if the input is a number and not NaN
                if (!isNaN(num)) {
                    // Return the number formatted to two decimal places
                    return num.toFixed(2);
                }

                return Input;
            }
            hmi.Formatter = Formatter;
        })(hmi = Functions.hmi || (Functions.hmi = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('Formatter', 'TcHmi.Functions.hmi', TcHmi.Functions.hmi.Formatter);
