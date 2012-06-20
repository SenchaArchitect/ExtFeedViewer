Ext.define('MyApp.view.override.FeedGrid', {
    requires: 'MyApp.view.FeedGrid'
}, function() {
    Ext.override(MyApp.view.FeedGrid, {
        viewConfig: {
            itemId: 'view',
            plugins: [{
                pluginId: 'preview',
                ptype: 'preview',
                bodyField: 'description',
                expanded: true
            }]
        }
    });
});