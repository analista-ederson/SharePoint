function CreateSiteGroup() {
    $.ajax
        ({
            
 
            url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/sitegroups",
            type: "POST",
            data: "{'__metadata':{'type': 'SP.Group'},'Title': 'New Site Group','Description': 'New Site Group Description'}",
            headers:
               {
                   
                   "Accept": "application/json;odata=verbose",
                   
                   "Content-Type": "application/json;odata=verbose",
                 
                   "X-RequestDigest": $("#__REQUESTDIGEST").val()
               },
            success: function (data, status, xhr) {
                console.log("Success");
            },
            error: function (xhr, status, error) {
                console.log("Failed");
            }
        });
}