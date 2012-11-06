/*
 * File: app/view/FeedPost.js
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

Ext.define('MyApp.view.FeedPost', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.feedpost',

    cls: 'preview',
    autoScroll: true,

    initComponent: function() {
        var me = this;

        me.callParent(arguments);
    },

    createToolbar: function() {
        var items = [],
            config = {};

        if (!this.inTab) {
            items.push({
                itemId: 'viewintab',
                text: 'View in new tab',
                iconCls: 'tab-new'
            }, '-');
        } else {
            config.cls = 'x-docked-noborder-top';
        }

        items.push({
            itemId: 'gotopost',
            text: 'Go to post',
            iconCls: 'post-go'
        });

        config.items = items;

        return Ext.create('widget.toolbar', config);
    }

});