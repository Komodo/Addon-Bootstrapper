(function() {
    
    this.load = function() {
        require("%AddonId%/controller").load();
        console.log('%AddonId% has been loaded');
    };
    
    this.unload = function() {
        require("%AddonId%/controller").unload();
        console.log('%AddonId% has been un-loaded');
    };
    
    this.install = function() {};
    
    this.uninstall = function() {};
    
}).apply(module.exports);