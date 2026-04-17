$desktopPath = [Environment]::GetFolderPath("Desktop")
$shortcutPath = Join-Path -Path $desktopPath -ChildPath "Portafolio Maly.lnk"

# Crear el objeto WScript.Shell
$WshShell = New-Object -comObject WScript.Shell

# Crear el acceso directo
$Shortcut = $WshShell.CreateShortcut($shortcutPath)
$Shortcut.TargetPath = "c:\Users\mymot\OneDrive\Escritorio\CV MALY\app\launch-portfolio.bat"
$Shortcut.WorkingDirectory = "c:\Users\mymot\OneDrive\Escritorio\CV MALY\app"
$Shortcut.Description = "Lanzador del Portafolio de Maly Gomez"
# Icono de una estrella o un globo, algo generico pero lindo
$Shortcut.IconLocation = "shell32.dll, 3"
$Shortcut.Save()

Write-Host "Acceso directo creado en: $shortcutPath"
