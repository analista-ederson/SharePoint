function CreateSubSite() {
 
    var clientContext = new SP.ClientContext();
    var oWebCreationInformation = new SP.WebCreationInformation();
 
    // This is relative URL of the url provided in context
    oWebCreationInformation.set_url("NewSubSite2");
 
    oWebCreationInformation.set_title("NewSubSite Site");
    oWebCreationInformation.set_description("NewSubSite description");
 
    // This will inherit permission from parent site
    oWebCreationInformation.set_useSamePermissionsAsParentSite(true);
 
    // "STS#0" is the code for 'Team Site' template
    oWebCreationInformation.set_webTemplate("STS#0");
    oWebCreationInformation.set_language(1033);
 
    this.oWeb = clientContext.get_web().get_webs().add(oWebCreationInformation);
    clientContext.executeQueryAsync(Function.createDelegate(this, this.CreateSubSiteonsuccess), Function.createDelegate(this, this.CreateSubSiteonfailed));
}
 
function CreateSubSiteonsuccess() {
    var results = this.oWeb.get_title() + 'Criado com Sucesso';
    console.log(results);
}
 
function CreateSubSiteonfailed(sender, args) {
    console.write('Falha na Criação' + args.get_message() + '\n' + args.get_stackTrace());
}