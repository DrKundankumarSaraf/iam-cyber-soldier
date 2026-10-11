$files = @(
    @{
        Course = "Cybersecurity Fundamentals - Basic - 30 Hours"
        Docx = "Cybersecurity_Fundamentals_Basic_Course_Content - 30 hours.docx"
        Slug = "cybersecurity-fundamentals-basic-30-hours"
    },
    @{
        Course = "Certified Ethical Hacking and AI - Professional - 60 Hours"
        Docx = "Certified_Ethical_Hacking_AI_Professional_Course_Content - 60 hours.docx"
        Slug = "certified-ethical-hacking-ai-professional-60-hours"
    },
    @{
        Course = "AI Cybersecurity Professional - 60 Hours"
        Docx = "AI_Cybersecurity_Professional_Course_Content - 60 Hours.docx"
        Slug = "ai-cybersecurity-professional-60-hours"
    },
    @{
        Course = "Microsoft Security Operations and Defender Sentinel Professional - 60 Hours"
        Docx = "Microsoft_Security_Operations_Defender_Sentinel_Professional_Course - 60 Hours.docx"
        Slug = "microsoft-security-operations-defender-sentinel-professional-60-hours"
    },
    @{
        Course = "Advanced Splunk Admin and Developer - 90 Hours"
        Docx = "Advanced_Splunk_Admin_and_Developer_Course_Content - 90 hours.docx"
        Slug = "advanced-splunk-admin-and-developer-90-hours"
    },
    @{
        Course = "Advanced Splunk Enterprise Security - 90 Hours"
        Docx = "Advanced_Splunk_Enterprise_Security_Course_Content - 90 hours.docx"
        Slug = "advanced-splunk-enterprise-security-90-hours"
    },
    @{
        Course = "Advanced Cyber Security and Defense Practitioner - 90 Hours"
        Docx = "Advanced_Cyber_Security_and_Defense_Practioner_Course_Content - 90 hours.docx"
        Slug = "advanced-cyber-security-and-defense-practitioner-90-hours"
    },
    @{
        Course = "Certified Ethical Hacking and AI - Expert - 120 Hours"
        Docx = "Certified_Ethical_Hacking_AI_Expert_Course_Content - 120 hours.docx"
        Slug = "certified-ethical-hacking-ai-expert-120-hours"
    }
)

# Resolve paths relative to the script location
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$frontendDir = Split-Path -Parent $scriptDir
$projectRoot = Split-Path -Parent $frontendDir

$outDir = Join-Path $frontendDir "public\syllabi"
if (-not (Test-Path $outDir)) {
    New-Item -ItemType Directory -Path $outDir -Force | Out-Null
}

$word = New-Object -ComObject Word.Application
$word.Visible = $false
$word.ActivePrinter = "Microsoft Print to PDF"

try {
    foreach ($item in $files) {
        $sourceDocx = Join-Path $projectRoot $item.Docx
        if (-not (Test-Path $sourceDocx)) {
            Write-Error "Source file not found: $($item.Docx)"
            continue
        }

        # 1. Copy original DOCX to public/syllabi as slug and as original name
        $destDocxSlug = Join-Path $outDir "$($item.Slug).docx"
        $destDocxOrig = Join-Path $outDir $item.Docx
        Copy-Item -Path $sourceDocx -Destination $destDocxSlug -Force
        Copy-Item -Path $sourceDocx -Destination $destDocxOrig -Force

        # 2. Convert to PDF using Microsoft Print to PDF
        [string]$destPdf = Join-Path $outDir "$($item.Slug).pdf"
        if (Test-Path $destPdf) { Remove-Item $destPdf -Force }

        Write-Host "Converting '$($item.Course)'..."
        $doc = $word.Documents.Open($sourceDocx, $false, $true)
        $doc.PrintOut([ref]$false, [ref]$false, [ref]0, [ref]$destPdf)
        $doc.Close([ref]0)

        # Wait for spooling to complete
        $waited = 0
        while ((-not (Test-Path $destPdf) -or (Get-Item $destPdf).Length -eq 0) -and $waited -lt 40) {
            Start-Sleep -Milliseconds 500
            $waited += 0.5
        }

        # Also wait a moment if file is still locked by spooler
        Start-Sleep -Seconds 1

        if (Test-Path $destPdf) {
            $len = (Get-Item $destPdf).Length
            Write-Host " -> OK: $($item.Slug).pdf ($len bytes in $waited s)"
        } else {
            Write-Error " -> FAILED: $($destPdf) not created"
        }
    }
} finally {
    $word.Quit()
}

Write-Host "`nAll files in ${outDir}:"
Get-ChildItem $outDir | Select-Object Name, Length | Format-Table -AutoSize
