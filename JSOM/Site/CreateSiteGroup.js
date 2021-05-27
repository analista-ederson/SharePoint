function CreateSiteGroup() {
  
    clientContext = new SP.ClientContext();
 
    var oGroupCollection = clientContext.get_web().get_siteGroups();
 
    var oGroupCreationInformation = new SP.GroupCreationInformation();
 
    oGroupCreationInformation.set_title("New Group");
    oGroupCreationInformation.set_description("New Group Description");
 
    var oGroup = oGroupCollection.add(oGroupCreationInformation);
 
    
    clientContext.executeQueryAsync(onsuccess, onfailed);
}
 
function onsuccess() {
    console.log('Success');
}
 
function onfailed(sender, args) {
    console.log('Failed' + args.get_message() + '\n' + args.get_stackTrace());
}