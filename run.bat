@echo off
choice /M "Do you want to convert PDF files?"
if %errorlevel% equ 1 (
    echo Proceeding with PDF conversion...
    xcopy pdf\* conver\* /s
    cd conver
    for %%f in (*.pdf) do (
        .\pdf2htmlEX.exe --external-hint-tool=ttfautohint --zoom 1.3 "%%f"
    )
    cd ..
    del conver\*.pdf
    move conver\*.html html\
)
node ./app.js
pause
