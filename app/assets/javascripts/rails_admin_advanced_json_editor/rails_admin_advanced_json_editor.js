//= require rails_admin_advanced_json_editor/lib/jsoneditor

$(function() {

  var editor = new JSONEditor(document.getElementById('advanced-json-editor-form'),{
    theme: 'bootstrap2',
    disable_properties: true,
    schema: JSON.parse( $('#schema-json input').val() )
  });

  var exists_value = $('#advanced-json-editor input').val()

  if (exists_value != "") {
    exists_value = JSON.parse(exists_value)

    editor.setValue( exists_value );
  }

  editor.on('change',function() {
    console.log( editor.getValue() );

    $('#advanced-json-editor input').val( JSON.stringify( editor.getValue() ) );
  });

  // fix text size
  $('#advanced-json-editor-form div div div textarea').css("font-size", "1.7rem");


});