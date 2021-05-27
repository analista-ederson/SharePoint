var oUsers, clientContext;
function GetAllUsersFromGroup() {
    
    clientContext = new SP.ClientContext();
 
    var oGroup = clientContext.get_web().get_siteGroups().getByName("New Group");
 
    
    oUsers = oGroup.get_users();
 

    clientContext.load(oUsers);
 
    
    clientContext.executeQueryAsync(onsuccess, onfailed);
}
 
function onsuccess() {
 
    
    var oEnumerator = oUsers.getEnumerator();
 
    while (oEnumerator.moveNext()) {
        var oUser = oEnumerator.get_current();
        console.log("User: " + oUser.get_title() + "\n");
    }
}
 
function onfailed(sender, args) {
    console.log('Failed' + args.get_message() + '\n' + args.get_stackTrace());
}