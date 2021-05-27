function DeleteSubSite()
{
       // _spPageContextInfo.webAbsoluteUrl - will give absolute URL of the site where you are running the code.
       // You can replace this with other site URL where you want to apply the function
      
       $.ajax 
    ({   
    // Here "NewSubSite" is subsite to be delete
        url: _spPageContextInfo.webAbsoluteUrl + "/NewSubSite/_api/web",
        type: "POST",           
        headers:
        {
            // Accept header: Specifies the format for response data from the server.
            "Accept": "application/json;odata=verbose",
            //Content-Type header: Specifies the format of the data that the client is sending to the server
            "Content-Type": "application/json;odata=verbose",
            //X-HTTP-Method:  The MERGE method updates only the properties of the entity , while the PUT method replaces the existing entity with a new one that you supply in the body of the POST
            "X-HTTP-Method": "DELETE",
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