# Provide credentials over here
$creds = (New-Object System.Management.Automation.PSCredential "<<UserName>>",(ConvertTo-SecureString "<<Password>>" -AsPlainText -Force))
 
# Provide URL of the Site over here
# If you do not wish to pass credentials hard coded then you can use: -Credentials (Get-Credential). This will prompt to enter credentials
Connect-PnPOnline -Url testhttp://MyServer/sites/MySiteCollection -Credentials $creds
 
# Paramenters
 
$title = "PowerShellSubSite2"
$SiteUrl = "PowerShellSubSite2"
$Description = "Sub Site Created using powershell"
$Locale = 1033
 
# "STS#0" is the code for 'Team Site' template
$Template = "STS#0"
 
# "BreakInheritance" is a Switch Parameter.
# A "Switch Parameter" does not take a value. If it is written in code, it turns on the "action" otherwise taken as false.
# Here we have written "-BreakInheritance", this will break permission inheritance from parent site
 
New-PnPWeb -Title $title -Url $SiteUrl -Description $Description -Locale $Locale -Template $Template -BreakInheritance