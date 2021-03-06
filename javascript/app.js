//----------------------------------------------------------------------
// (c) Sandesh Bhusal 2015. All Rights Reserved.
// Licensed Under the GNU General Public License.
// T&C of the app can be read here at: https://www.sandeshbhusal.github.io/arang/t&c.txt
// Modifying and redistributing allowed with credits of original Author.    
//-----------------------------------------------------------------------

//Global User settings
var user = {
    name: localStorage.getItem('userName'),
    password: localStorage.getItem('userKey'),
    type: localStorage.getItem('userType'),
    destroy: function(){
        localStorage.setItem('userName') = null;
        localStorage.setItem('userKey') = null;
        localStorage.setItem('userType') = null;
    },
    setup : function(username, password, type){
        if(username && password && type){
            localStorage.setItem('userName') = username;
            localStorage.setItem('userKey') = password;
            localStorage.setItem('userType') = type;
        }
    }
}
var app = {
    initialized : false,
    name : "",
    notifications : "",
    version : ""
}

// App initialization functions
function init(){
    if(!app.initialized){
        app.name = 'Arang';
        app.version = "0.0.0";
        app.notifications = 'Yes';
        app.initialized = true;
    }
}
function check(){
    if(app.initialized){
        alert(1);
    }
    else{
        init();
    }
}