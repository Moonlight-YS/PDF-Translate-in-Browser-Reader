# PDF Translate in Browser Reader

PDF Translate in Browser Reader is an open-source project designed for translating and reading PDF documents. This tool simplifies the process of converting PDFs to HTML format and enables you to use built-in translation features in popular browsers.

## Prerequisites

- **Node.js**: Ensure that Node.js is installed on your system to run the JavaScript code required for this project.
- **Adobe Acrobat**: We recommend using Adobe Acrobat to export PDF files to HTML. The "convertID" method has been deprecated and no longer supports API calls, so we recommend converting your PDFs manually. After exporting using Adobe Acrobat, follow the steps below.

## Getting Started

1. Clone or download this repository to your local machine.

2. Place the HTML files you exported from Adobe Acrobat in the "html" folder.

3. Double-click the provided BAT file to open the web page.

4. You can use Edge or Chrome, which come with built-in translation features, but it's advisable to use translation plugins for a smoother reading experience.

## Local PDF Conversion

Alternatively, if your PDF documents have chaotic formatting after using Adobe Acrobat, you can use the local PDF conversion feature included in this program.

1. Place your PDF files in the "pdf" folder.

2. Double-click the provided BAT file for local conversion.

Please note:

- File names should not contain spaces or Chinese characters.
- Single-page PDFs with navigation are not recommended due to browser performance issues. If your document has navigation, consider splitting it into multiple pages for better results.

## Recommended Translation Plugins

For an enhanced reading experience, we recommend using the following browser translation plugins:

- **Immersive Translation**: This plugin provides bilingual display for full-text translation.

- **Word Selection Translation**: This plugin is especially useful when using the PDF reader built into the web page after conversion. It offers a better translation experience with bilingual display.

- **DeepL Translation**: If your network conditions allow, you can use the DeepL Translation plugin for word selection translation, which often provides high-quality translations.

## Disclaimer

The PDF conversion part of this program utilizes the open-source project [pdf2htmlEX](https://github.com/coolwanglu/pdf2htmlEX), and this program complies with the GPLv3 open-source license.

Feel free to contribute to this project!