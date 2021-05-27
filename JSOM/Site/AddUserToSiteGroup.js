function AddUserToSiteGroup() {
   
    clientContext = new SP.ClientContext();
 
    var oGroup = clientContext.get_web().get_siteGroups().getByName("New Group");
 
   
    var oUser = clientContext.get_web().ensureUser('Logon Name');
 
  
    var oUserCollection = oGroup.get_users();
 
    
    oUserCollection.addUser(oUser);
 
    
    clientContext.executeQueryAsync(onsuccess, onfailed);
}
 
function onsuccess() {
    console.log('Success');
}
 
function onfailed(sender, args) {
    console.log('Failed' + args.get_message() + '\n' + args.get_stackTrace());
}