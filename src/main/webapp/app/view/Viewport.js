/**
 * Created by root on 7/14/14.
 */
Ext.define('search.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires: [
        /* below are views of this application */
        'search.view.WestPane',
        'search.view.CenterPane'
    ],

    layout: 'border',

    items: [{
        /* dock in West */
        region: 'west',
        /* This is custom panel */
        xtype: 'west',
        width: 50
    },{
        /* dock in center */
        region: 'center',
        /* this is custom panel */
        xtype: 'center'
    }]
});