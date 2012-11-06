/*
 * File: app/store/DefaultFeedsStore.js
 *
 * This file was generated by Sencha Architect version 2.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.0.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.store.DefaultFeedsStore', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            autoLoad: true,
            autoSync: true,
            storeId: 'DefaultFeedsStore',
            data: [
                {
                    url: 'http://rss.cnn.com/rss/edition.rss',
                    title: 'CNN Top Stories'
                },
                {
                    url: 'http://sports.espn.go.com/espn/rss/news',
                    title: 'ESPN Top News'
                },
                {
                    url: 'http://news.google.com/news?ned=us&topic=t&output=rss',
                    title: 'Sci/Tech - Google News'
                },
                {
                    url: 'http://rss.news.yahoo.com/rss/software',
                    title: 'Yahoo Software News'
                }
            ],
            fields: [
                {
                    name: 'url'
                },
                {
                    name: 'title'
                }
            ]
        }, cfg)]);
    }
});