/**
 * Created by root on 7/14/14.
 */
Ext.define('search.view.WestPane', {
    extend: 'Ext.panel.Panel',
    xtype: 'west',
    animCollapse: true,
    split: true,
    collapsible: true,

    items: [{
        /* a group of button which will appear as menu */
        xtype: 'buttongroup',
        columns: 1,
        scale: 'large',
        grow: true,

        items: [{
            name: 'searchButton',
            cls: 'searchFileButton',
            tooltip: 'Search Files',
            width: 40,
            height: 40
        }, {
            name: 'profileButton',
            cls: 'profileButton',
            tooltip: 'Profile Settings',
            width: 40,
            height: 40
        }]
    }]
});