/**
 * Basic simple plugin for inserting the Berklee Stan Getz Library Evergreen catalog TCN/Database ID(BIB) number into CKEditor editing area.
 */

// Register the plugin with the editor.
CKEDITOR.plugins.add( 'bibinsert',
{
	// The plugin initialization logic goes inside this method.
	init: function( editor )
	{
		// Define an editor command that inserts an abbreviation. 
		editor.addCommand( 'bibinsertDialog',new CKEDITOR.dialogCommand( 'bibinsertDialog' ) );
		// Create a toolbar button that executes the plugin command. 
		editor.ui.addButton( 'bibinsert',
		{
			// Toolbar button tooltip.
			label: 'Insert Bib Items',
			// Reference to the plugin command name.
			command: 'bibinsertDialog',
			// Button's icon file path.
			icon: this.path + 'images/icon.png'
		} );
		// Add a dialog window definition containing all UI elements and listeners.
		CKEDITOR.dialog.add( 'bibinsertDialog', function ( editor )
		{
			return {
				// Basic properties of the dialog window: title, minimum size.
				title : 'Insert Bib Item Number',
				minWidth : 400,
				minHeight : 200,
				// Dialog window contents.
				contents :
				[
					{
						// Definition of the Advanced Settings dialog window tab with its id, label and contents.
						id : 'tab2',
						label : 'Multiple Bib numbers',
						elements :
						[
							{
								// Yet another text input field for the abbreviation ID.
								// No validation added since this field is optional.
								type : 'textarea',
								id : 'bibinsertgroup',
								label : 'Type in comma(,) saperated multiple bibnumbers'
							}
						]
					}
					/*
					,{
						id : 'tab1',
						label : 'Single Bib number',
						elements :
						[
							{
								type : 'text',
								id : 'bibinsert',
								label : 'Type the bibnumber',
								//validate : CKEDITOR.dialog.validate.notEmpty( "The field cannot be empty" )
							},
							{
								type : 'checkbox',
								id : 'floatcheck',
								'default' : 'checked',
								label : 'Uncheck this if you want only one item in a row'
								//validate : CKEDITOR.dialog.validate.notEmpty( "The field cannot be empty" )
							}	 
						]
					}*/
				],
				// This method is invoked once a user closes the dialog window, accepting the changes.
				onOk : function()
				{
					// A dialog window object.
					var dialog = this;
					//var bcmbibvalue = dialog.getValueOf( 'tab1', 'bibinsert' );
					var bcmbibgroup = dialog.getValueOf( 'tab2', 'bibinsertgroup' );
					var bcmbibgroupwrapper = editor.document.createElement( 'div' );
						bcmbibgroupwrapper.setAttribute( 'class', 'clearfix' );

					/*if(bcmbibvalue){
						var bcmbib = editor.document.createElement( 'bcmbibnumber' );
						bcmbib.setText( bcmbibvalue );
						
						var floatval = dialog.getValueOf( 'tab1', 'floatcheck' );
						console.log(floatval);
						//if(floatval == 'false'){
						//	bcmbibgroupwrapper.append( bcmbib );
						//	editor.insertElement( bcmbibgroupwrapper );
						//}
						//else{
							editor.insertElement( bcmbib );	
						//}
					}*/

					if ( bcmbibgroup ){
						var bs = bcmbibgroup.replace(/\s/g, "").split(',');
						bcmbibgroup = '';
						for(var i in bs){
							bcmbib = editor.document.createElement( 'div' );
							bcmbib.setAttribute( 'class', 'bibnumber' );
							bcmbib.setAttribute( 'style', 'width:164px; height:200px; background-color:#ccc; padding:4px; margin:8px; float:left;' );
							bcmbib.setText( bs[i] );
							bcmbibgroupwrapper.append( bcmbib );
						}
						
						var divclearfloat = editor.document.createElement( 'div' );
						divclearfloat.setAttribute( 'style', 'clear:both' );
						bcmbibgroupwrapper.append( divclearfloat );
						editor.insertElement( bcmbibgroupwrapper );
					}
				}
			};
		} );
	}
} );