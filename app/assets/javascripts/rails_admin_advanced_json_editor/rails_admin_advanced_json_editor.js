//= require rails_admin_json_editor/lib/jsoneditor

var element = document.getElementById('editor_holder');

options = {
  theme: 'bootstrap3'
};

var editor = new JSONEditor(element, options);