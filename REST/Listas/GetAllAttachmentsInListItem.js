function GetListItemAttachments() {
   
    var Itemid = 1;
 
    $.ajax
    ({
      
 
        url: _spPageContextInfo.webAbsoluteUrl + "/_api/web/lists/getByTitle('List Name')/items(" + Itemid + ")/AttachmentFiles",
        method: "GET",
        headers:
           {
             
               "Accept": "application/json;odata=verbose"
           },
        success: function (data, status, xhr) {
            var dataresults = data.d.results;
            for (var i = 0; i < dataresults.length; i++) {
                alert(dataresults[i]["FileName"]);
            }
        },
        error: function (xhr, status, error) {
            console.log("Failed");
        }
    });
}