$ErrorActionPreference = "Stop"
$path = "c:\Users\dasde\Downloads\projects\PORTFOLIO\prd.docx"
$tempBase = Join-Path $env:TEMP "docx_extract_$(Get-Random)"
$tempZip = "$tempBase.zip"
$tempDir = "${tempBase}_dir"

Copy-Item -Path $path -Destination $tempZip

Expand-Archive -Path $tempZip -DestinationPath $tempDir -Force
$xmlPath = Join-Path $tempDir "word\document.xml"
if (Test-Path $xmlPath) {
    [xml]$xml = Get-Content $xmlPath
    $ns = @{w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"}
    $paragraphs = Select-Xml -Xml $xml -XPath "//w:p" -Namespace $ns
    if ($paragraphs) {
        foreach ($p in $paragraphs) {
            $texts = Select-Xml -Xml $p.Node -XPath ".//w:t" -Namespace $ns
            if ($texts) {
                $line = ($texts | ForEach-Object { $_.Node.InnerText }) -join ""
                Write-Output $line
            }
        }
    }
} else {
    Write-Output "document.xml not found."
}
Remove-Item -Path $tempZip -Force
Remove-Item -Path $tempDir -Recurse -Force
