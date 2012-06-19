/*
 * File: app/view/MyViewport.js
 *
 * This file was generated by Sencha Architect version 2.0.0.
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

Ext.define('MyApp.view.MyViewport', {
    extend: 'Ext.container.Viewport',
    requires: [
        'MyApp.view.FeedPanel',
        'MyApp.view.FeedInfo'
    ],

    padding: 5,
    layout: {
        type: 'border'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'feedpanel',
                    id: 'feedpanel',
                    width: 250,
                    collapsible: true,
                    region: 'west'
                },
                {
                    xtype: 'feedinfo',
                    id: 'feedinfo',
                    margins: '0px 0px 0px 5px',
                    region: 'center'
                }
            ]
        });

        me.callParent(arguments);
    }

});