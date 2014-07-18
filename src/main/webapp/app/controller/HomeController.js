/**
 * Created by root on 7/14/14.
 */
Ext.define('search.controller.HomeController', {
    extend: 'Ext.app.Controller',
    requires: [
        'search.store.FileSystem',
        'search.model.FileDescription'
    ],

    /* our views which are handled by this controller */
    views: ['WestPane', 'FileSearchWindow'],

    /* Stores and model for the views */
    models: ['FileDescription'],
    stores: ['FileSystem'],

    init: function() {
        console.log('Initializing controller');
        this.control({
            /* component query for Search button in west panel */
            'button[name=searchButton]' : {
                click: this.showSearchWindow
            },

            /* component query for profile button in west panel */
            'button[name=profileButton]' : {
                click: this.showMyProfile
            },
            scope: this
        });
    },

    /* Luanch the window to search files */
    showSearchWindow: function() {
        console.log('window launching');
        var fileSearchWindow = Ext.create('search.view.FileSearchWindow');
        fileSearchWindow.show();
    },

    /* handle profile button click */
    showMyProfile: function() {
        console.log('launching my profile');
    }
});