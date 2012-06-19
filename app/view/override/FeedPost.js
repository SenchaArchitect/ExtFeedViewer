Ext.define('MyApp.view.override.FeedPost', {
    requires: 'MyApp.view.FeedPost'
}, function() {
    Ext.override(MyApp.view.FeedPost, {
        initComponent: function() {
            Ext.apply(this, {
                dockedItems: [this.createToolbar()],
                tpl: Ext.create('Ext.XTemplate',
                    '<div class="post-data">',
                        '<span class="post-date">{pubDate:this.formatDate}</span>',
                        '<h3 class="post-title">{title}</h3>',
                        '<h4 class="post-author">by {author:this.defaultValue}</h4>',
                    '</div>',
                    '<div class="post-body">{content:this.getBody}</div>',
                    {
                        getBody: function(value, all){
                            return Ext.util.Format.stripScripts(value);
                        },

                        defaultValue: function(v){
                            return v ? v : 'Unknown';
                        },

                        formatDate: function(value){
                            if (!value) {
                                return '';
                            }
                            return Ext.Date.format(value, 'M j, Y, g:i a');
                        }
                    }
                 )
            });
            
            this.callOverridden();
        }
    });
});