function DeleteSiteGroup() {
 
    $.ajax
        ({
            // _spPageContextInfo.webAbsoluteUrl - will give absolute URL of the site where you are running the code.
            // You can replace this with other site URL where you want to apply the function
 
            // Enter group Name over here
            url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/sitegroups/?$filter=Title eq 'New Site Group'&$top=1",
            type: "GET",
            async: false,
            headers:
               {
                   // Accept header: Specifies the format for response data from the server.
                   "Accept": "application/json;odata=verbose"
               },
            success: function (data, status, xhr) {
                DeleteSiteGroupByGroupId(data.d.results[0].Id);
            },
            error: function (xhr, status, error) {
                console.log("Failed");
            }
        });
}
 
 
function DeleteSiteGroupByGroupId(GroupId) {
 
    $.ajax
        ({
            // _spPageContextInfo.webAbsoluteUrl - will give absolute URL of the site where you are running the code.
            // You can replace this with other site URL where you want to apply the function
 
            url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/sitegroups/removebyid(" + GroupId + ")",
            type: "POST",
            headers:
               {
                   // X-RequestDigest header: When you send a POST request, it must include the form digest value in X-RequestDigest header
                   "X-RequestDigest": $("#__REQUESTDIGEST").val()
               },
            success: function (data, status, xhr) {
                console.log('deleted');
            },
            error: function (xhr, status, error) {
                console.log("Failed");
            }
        });
}