//----------------------------------------------------------------------
// (c) Sandesh Bhusal 2015. All Rights Reserved.
// Licensed Under the GNU General Public License.
// T&C of the app can be read here at: https://www.sandeshbhusal.github.io/arang/t&c.txt
// Modifying and redistributing allowed with credits of original Author.    
//-----------------------------------------------------------------------
var user = {
    name: localStorage.getItem('userName'),
    password: localStorage.getItem('userKey'),
    type: localStorage.getItem('userType')
}
var app = {
    initialized : false,
    name : "",
    version : "",
    notifications : "",
    setup : function(username, password, type){
        if(username && password && type){
            localStorage.setItem('userName') = username;
            localStorage.setItem('password') = password;
            localStorage.setItem('type') = type;
        }
    }
}
function init(){
    if(!app.initialized){
        app.name = 'Arang';
        app.version = "1.0.1";
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