(function() {
    
    var legacySdk = require("ko/windows").getMain().ko;
    var buttonContext = [{
        select: "#toolsToolbarGroup",
        where: "append"
    }];
    
    this.load = function() {
        button = require("ko/button").register({
            id: "%AddonId%-button",
            label: require("ko/locale").get("helloWorld"),
            command: () => legacySdk.windowManager.openDialog("chrome://%AddonId%/content/xul/index.xul"),
            classList: "icon-question4",
            toolbar: true,
            context: buttonContext
        });
    };
    
    this.unload = function() {
        require("ko/button").unregister("%AddonId%-button");
    };
    
}).apply(module.exports);