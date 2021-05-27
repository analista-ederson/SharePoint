function GetListItemById() {
    
    var Itemid = 1;
 
    $.ajax
        ({
            
            url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getByTitle('List Name')/items(" + Itemid + ")?$select=Id,Description,New_x0020_Column",
            method: "GET",
            headers:
               {
                  
                   "Accept": "application/json;odata=verbose"
               },
            success: function (data, status, xhr) {
                var dataresults = data.d;
                console.log("ID- " + dataresults.Id + " | " + dataresults.Description + " | " + dataresults.New_x0020_Column);
            },
            error: function (xhr, status, error) {
                console.log("Failed");
            }
        });
}