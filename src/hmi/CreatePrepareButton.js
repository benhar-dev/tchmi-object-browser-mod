// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../Packages/Beckhoff.TwinCAT.HMI.Framework.12.760.59/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var hmi;
        (function (hmi) {
            function CreatePrepareButton(ObjectBrowser, Button) {

                // here you can setup your button styles
                const PREPARE_BACKGROUND_COLOR = { color: 'rgba(139, 26, 26, 1)' };
                const DEFAULT_BACKGROUND_COLOR = null;

                // Read the two controls in to their own variables
                const objectBrowser = ObjectBrowser.read();
                const button = Button.read();

                // Initialize a global map to hold observers keyed by element ID
                if (!window.myObservers) {
                    window.myObservers = {};
                }

                function setupObserver(divId) {
                    const myDiv = document.getElementById(divId);

                    if (!myDiv) {
                        console.log("Element with ID '" + divId + "' not found.");
                        return;
                    }

                    // Check if there is already an observer for this div and disconnect it
                    if (window.myObservers[divId]) {
                        window.myObservers[divId].disconnect();
                    }

                    // Function to execute when mutations are observed
                    const callback = function (mutationsList, observer) {
                        const hasPrepValues = !!objectBrowser.__treeView.__preparedValues.length;

                        // here we apply styles based on hasClass.
                        // add more here as needed.
                        button.setBackgroundColor(hasPrepValues ? PREPARE_BACKGROUND_COLOR : DEFAULT_BACKGROUND_COLOR);
                    };

                    // Create a new observer instance linked to the callback function
                    window.myObservers[divId] = new MutationObserver(callback);

                    // Start observing the target node and its descendants for configured mutations
                    window.myObservers[divId].observe(myDiv, { attributes: true, childList: true, subtree: true });
                }

                const objectBrowswerId = objectBrowser.getId();
                setupObserver(objectBrowswerId);

            }
            hmi.CreatePrepareButton = CreatePrepareButton;
        })(hmi = Functions.hmi || (Functions.hmi = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('CreatePrepareButton', 'TcHmi.Functions.hmi', TcHmi.Functions.hmi.CreatePrepareButton);
