//= require rails_admin_advanced_json_editor/lib/jsoneditor



$(function() {

  // editor = new JSONEditor( $('#advanced-json-editor') );

  var editor = new JSONEditor(document.getElementById('advanced-json-editor'),{
    theme: 'bootstrap3',
    schema: JSON.parse( $('#advanced-json-editor input').val() )
  });

  // Hook up the submit button to log to the console
  document.getElementById('submit').addEventListener('click',function() {
    // Get the value from the editor
    console.log(editor.getValue());
  });

});

