function AddUserToSiteGroup() {
 
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
                AddUserToGroupUsingGroupIdandUserLoginName(data.d.results[0].Id);
            },
            error: function (xhr, status, error) {
                console.log("Failed");
            }
        });
}
 
function AddUserToGroupUsingGroupIdandUserLoginName(GroupId) {
 
    $.ajax
        ({
            // _spPageContextInfo.webAbsoluteUrl - will give absolute URL of the site where you are running the code.
            // You can replace this with other site URL where you want to apply the function
 
            //url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/sitegroups/GetById(" + GroupId + ")/users/getbyemail('<<UserEmail>>')",
            url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/sitegroups/GetById(" + GroupId + ")/users",
            type: "POST",
            data: JSON.stringify({
                '__metadata': {
                // Type that you are modifying.
                'type': 'SP.User'
            },
                'LoginName': '<<User Login Name>>'
            }),
            headers:
               {
                   // Accept header: Specifies the format for response data from the server.
                   "Accept": "application/json;odata=verbose",
                   //Content-Type header: Specifies the format of the data that the client is sending to the server
                   "Content-Type": "application/json;odata=verbose",
                   // IF-MATCH header: Provides a way to verify that the object being changed has not been changed since it was last retrieved.
                   // "IF-MATCH":"*", will overwrite any modification in the object, since it was last retrieved.
                   //"IF-MATCH": "*",
                   //X-HTTP-Method:  The MERGE method updates only the properties of the entity , while the PUT method replaces the existing entity with a new one that you supply in the body of the POST
                   //  "X-HTTP-Method": "PATCH",
                   // X-RequestDigest header: When you send a POST request, it must include the form digest value in X-RequestDigest header
                   "X-RequestDigest": $("#__REQUESTDIGEST").val()
               },
            success: function (data, status, xhr) {
                console.log('Success');
            },
            error: function (xhr, status, error) {
                console.log("Failed");
            }
        });
}