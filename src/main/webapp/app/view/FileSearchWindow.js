/**
 * Created by root on 7/14/14.
 */
Ext.define('search.view.FileSearchWindow', {
    extend: 'Ext.window.Window',
    requires: [
        'search.store.FileSystem'
    ],

    closable: true,
    header: false,
    modal : true,


    items: [{
        //autocomplete combo box which will list the files in your home directory
        xtype: 'combo',
        name: 'searchFiles',
        hideTrigger: true,
        typeAhead: true,
        minChars: 1,
        grow: true,
        emptyText: 'search files',

        store : Ext.create('search.store.FileSystem'),
        displayField: 'fileName',
        valueField : 'fileName',

        listeners: {
            /* on change filter the values from store */
            change: function() {
                console.log('changed value');
                var store = this.store;
                store.clearFilter();
                store.filter({
                    property: 'fileName',
                    anyMatch: true,
                    value   : this.getValue()
                });
            },

            /* once user selects an option from combo this method is fired*/
            select: function() {
                console.log('selected [' + this.getValue() + ']');
            }

        }
    }]
});