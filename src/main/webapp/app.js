/**
 * Created by root on 7/14/14.
 */
Ext.application({
    name: 'search',
    appFolder: 'app',

    /* this will search for a file 'search/view/Viewport.js'
    where search is the name of this application */
    autoCreateViewport: true,

    /* For this example I have one Controller */
    controllers: ['HomeController']
});
