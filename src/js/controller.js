(function() {
    
    // We're using the legacy SDK to open the dialog
    var legacySdk = require("ko/windows").getMain().ko;
    
    // Where we want our button to appear
    var buttonContext = [{
        select: "#toolsToolbarGroup",
        where: "append"
    }];
    
    // Load up our addon
    this.load = function() {
        
        // Register a button that opens our Hello World dialog
        button = require("ko/button").register({
            id: "%AddonId%-button",
            label: require("ko/locale").get("helloWorld"),
            command: () => legacySdk.windowManager.openDialog("chrome://%AddonId%/content/xul/index.xul"),
            classList: "icon-question4",
            toolbar: true,          // this is a toolbar button
            context: buttonContext  // tell the SDK where the button should be placed
        });
    };
    
    // Unload the addon
    this.unload = function() {
        require("ko/button").unregister("%AddonId%-button");
    };
    
}).apply(module.exports);