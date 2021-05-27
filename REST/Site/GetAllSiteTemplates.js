function GetAllSiteTemplates()
{
       $.ajax
        ({
            // _spPageContextInfo.webAbsoluteUrl - will give absolute URL of the site where you are running the code.
            // You can replace this with other site URL where you want to apply the function
           
            // Here there are two parameters. (1) LCID(Locale ID) - 1033
            // Note: Not all LCID codes will work on your web server. The appropriate language files must be installed for currency/date formatting to work properly. LCID 1033 = English - United States
            // (2) doIncludeCrossLanguage = false - Specifies whether to include language-neutral site templates.
            url:  _spPageContextInfo.webAbsoluteUrl + "/_api/web/GetAvailableWebTemplates(lcid=1033,doincludecrosslanguage=false)",
            type: "GET",
            headers:
            {
                // Accept header: Specifies the format for response data from the server.
                "Accept": "application/json;odata=verbose",
            },
               success: function (data, status, xhr) {
                var dataresults = data.d.results;                
                for (var i = 0; i < dataresults.length; i++)
                {
                     console.log("Site Template Name - " + dataresults[i].Name + " | Site Templates Title - " + dataresults[i].Title);
                }
              },
               error: function (xhr, status, error) {
                   console.log("Failed");
               }
        });
}