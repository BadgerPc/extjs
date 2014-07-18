/**
 * Created by root on 7/14/14.
 */
Ext.define('search.store.FileSystem', {
    extend: 'Ext.data.Store',
    requires: ['search.model.FileDescription'],

    model: 'search.model.FileDescription',
    autoLoad: true,

    proxy : {
        type: 'ajax',
        url: 'services/files',
        params : {
            fileName: 'fileName',
            baseLocation : null
        },

        reader : {
            type : 'json',
            root: 'array'
        }
    }
});