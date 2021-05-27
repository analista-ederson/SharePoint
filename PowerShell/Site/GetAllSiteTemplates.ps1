# Provide credentials over here
$creds = (New-Object System.Management.Automation.PSCredential "<<UserName>>",(ConvertTo-SecureString "<<Password>>" -AsPlainText -Force))
 
# Provide URL of the Site over here
# If you do not wish to pass credentials hard coded then you can use: -Credentials (Get-Credential). This will prompt to enter credentials
Connect-PnPOnline -Url http://MyServer/sites/MySiteCollection -Credentials $creds
 
$targetWeb = Get-PnPWeb
$clientContext = Get-PnPContext
 
# Here there are two parameters. (1) LCID(Locale ID) - 1033
# Note: Not all LCID codes will work on your web server. The appropriate language files must be installed for currency/date formatting to work properly. LCID 1033 = English - United States
# (2) doIncludeCrossLanguage = false( = 0),true( = 1) - Specifies whether to include language-neutral site templates.
 
$oWebtTemplateCollection = $targetWeb.GetAvailableWebTemplates(1033,0)
 
$clientContext.Load($oWebtTemplateCollection)
$clientContext.ExecuteQuery()
 
foreach($oWebtTemplate in $oWebtTemplateCollection)
    {
        Write-Host "Template Name: " $oWebtTemplate.Name " | Template Title: " $oWebtTemplate.Title
    }
 
Disconnect-PnPOnline