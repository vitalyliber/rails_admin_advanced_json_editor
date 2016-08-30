//= require rails_admin_advanced_json_editor/lib/jsoneditor



$(function() {

  var editor = new JSONEditor(document.getElementById('advanced-json-editor-form'),{
    theme: 'bootstrap2',
    disable_properties: true,
    schema: JSON.parse( $('#schema-json input').val() )
  });

  editor.setValue( JSON.parse( $('#advanced-json-editor input').val() ) );

  editor.on('change',function() {
    console.log( editor.getValue() );

    $('#advanced-json-editor input').val( JSON.stringify( editor.getValue() ) );
  });

  // fix text size
  $('#advanced-json-editor-form div div div textarea').css("font-size", "1.7rem");


});

