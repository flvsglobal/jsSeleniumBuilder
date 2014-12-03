jsSeleniumBuilder
=================

HTML5/CSS3/Javascript tool that takes exported Educator grade builder Excel columns and converts rows into Selenium automation code

REQUIREMENTS:

Firefox, Selenium IDE plugin for Firefox, IPP Admin account, Educator Master Manager access

INSTALLATION:

1) Download source or zip file. If you downloaded the zip file, simply unzip into a folder on your computer. 
You need a modern browser. This has been tested on Chrome, Firefox, and Safari and should work on IE 10 or newer.
Since Firefox is the browser of choice for Selenium IDE, this browser is highly recommended.

1B) If you are savvy with Git you may simply clone this repository onto your computer. Updates are then handled by performing a pull.

2) Choose a folder to keep the unzipped files. The folder structure should be left as-is.

EDUCATOR MASTER MANAGER / BROWSER / EXCEL:

3) Open the index.html file with your browser.

4) Locate the target course in Master Manager and select the Gradebook link on the left navigation area.

5) Select the Grade Builder link that appears under the Gradebook on the left navigation area.


6) Scroll down to the bottom of the Grade Builder page on the right and click 'Export Grade Builder' to download the Excel file.

7) Click the Lessons link on the left navigation area to show the course lessons site.

8) Open the Excel file and add a new column header to the right of 'Honors' and name it 'Minutes' (no quotes please).

9) Locate the pace charts for each module in the first page of each module in the course lessons site.

10) Enter the corresponding minutes into each cell in the Excel sheet under the Minutes header until complete.

11) Select columns A-G, including the header cells for all populated rows and copy.

12) Open the jsSeleniumBuilder page in your browser and paste into the text area.

13) To preview what will be entered into the IPP Admin, simply click the 'Preview!' button.

14) To process the pasted text into Selenium code, click the 'Process!' button.

15) Processed Selenium code will display in a text area. Select all text in this text area and copy.

SELENIUM IDE / FIREFOX:

16) Open Firefox and login to the IPP Admin.

17) Navigate to the Course Modules page and select the Course and Version in the select boxes.

18) Open Selenium IDE and enter the source tab in the editor.

19) Paste the copied code text from the jsSeleniumBuilder page.

20) Run the workflow. You'll see entries occur in 1 second intervals until all entries have been added.
