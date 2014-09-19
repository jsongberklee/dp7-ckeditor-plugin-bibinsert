Berklee BIB item insert plugin for CKeditor(v 3.x) drupal module (v 7.x-1.xx) - 201400905

* OVERVIEW *****************************************************

This is specifically used for inserting Berklee Stan Getz Library Evergreen catalog TCN/Database ID(BIB) number to display items on CKeditor field in Drupal 7 system.

This plugin depend on "bcmlib_bib" module, you must install the module with the proper content type set up for it.

Note, this plugin only works for CKeditor version 3.x


* USAGE ********************************************************

1. go to the field formatter setting of any text field with CKeditor is activated and select "BIB Rendered In Text field" format.

1. From the Ckeditor window, click the plugin button.

2. type in the Bib number you wish to display and click "OK" button. Use comma(,) for multiple item numbers.

3. Save the node, the actual rendering will display on the view page.



* INSTALLATION & SET UP ****************************************

Note: install and enable "bcmlib_bib" module first.

1. Install CKeditor module (v 7.x-1.xx) and follow it's set up to work properly.

2. place the whole folder (rename it to "bibinsert") as "/sites/all/modules/ckeditor/plugins/bibinsert", and empty the Drupal cache.

3. Go to the "Edit the CKEditor profile" admin page (e.g: /admin/config/content/ckeditor/edit/Full)

4. On "EDITOR APPEARANCE" box, drag the plugin icon from "All buttons" section to "Used buttons" section.

5. Check the checkbox "Plugin file: bibinsert" on "Plugins" section and save it.


* CONTACT ******************************************************

JAESUNG SONG (jsong@berklee.edu) : Maintainer
