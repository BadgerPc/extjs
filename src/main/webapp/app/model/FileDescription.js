/**
 * Created by root on 7/14/14.
 */
Ext.define('search.model.FileDescription', {
    extend: 'Ext.data.Model',

    fields: [
        {name: 'fileName', type: 'string'},
        {name: 'fileExt', type: 'string'}
    ]
});