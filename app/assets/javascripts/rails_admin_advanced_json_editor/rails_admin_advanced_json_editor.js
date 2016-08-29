//= require rails_admin_advanced_json_editor/lib/jsoneditor



$(function() {

  var editor = new JSONEditor(document.getElementById('advanced-json-editor-form'),{
    theme: 'bootstrap2',
    schema: {
      title: "ZW-Device",
      type: "object",
      properties: {
        name: {"type": "string"}
      }
    }
  });

  editor.setValue( JSON.parse( $('#advanced-json-editor input').val() ) );

  editor.on('change',function() {
    console.log( editor.getValue() );

    $('#advanced-json-editor input').val( JSON.stringify( editor.getValue() ) );
  });

});

