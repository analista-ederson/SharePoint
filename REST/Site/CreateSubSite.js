function CreateSubSite()
{
       // _spPageContextInfo.webAbsoluteUrl - will give absolute URL of the site where you are running the code.
       // You can replace this with other site URL where you want to apply the function
      
       $.ajax 
    ({   
        url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/webinfos/add",
        type: "POST",   
        data: JSON.stringify({
                     'parameters': {
                   "__metadata": { "type": "SP.WebInfoCreationInformation" },
                  
                    // This is relative URL of the url provided in context
                    'Url': 'NewSubSite',  
                       'Description': 'NewSubSite description', 
                       'Title': 'NewSubSite Site', 
                       'Language': 1033, 
                      
                       // "STS#0" is the code for 'Team Site' template
                       'WebTemplate': 'STS#0', 
                      
                       // This will inherit permission from parent site
                       'UseUniquePermissions': true   
                       }           
                  }),
        headers:
        {
            // Accept header: Specifies the format for response data from the server.
            "Accept": "application/json;odata=verbose",
            //Content-Type header: Specifies the format of the data that the client is sending to the server
            "Content-Type": "application/json;odata=verbose",
            // X-RequestDigest header: When you send a POST request, it must include the form digest value in X-RequestDigest header
            "X-RequestDigest": $("#__REQUESTDIGEST").val()
        },   
        success: function(data){   
            console.log("Success");            
        },   
        error: function (xhr, status, error)
        {
              console.log("Failed");
           }  
    });
}