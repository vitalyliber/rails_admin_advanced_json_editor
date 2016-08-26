//= require rails_admin_advanced_json_editor/lib/jsoneditor



$(function() {

  // editor = new JSONEditor( $('#advanced-json-editor') );

  var editor = new JSONEditor(document.getElementById('advanced-json-editor'),{
    schema: {
      type: "object",
      title: "Car",
      properties: {
        make: {
          type: "string",
          enum: [
            "Toyota",
            "BMW",
            "Honda",
            "Ford",
            "Chevy",
            "VW"
          ]
        },
        model: {
          type: "string"
        },
        year: {
          type: "integer",
          enum: [
            1995,1996,1997,1998,1999,
            2000,2001,2002,2003,2004,
            2005,2006,2007,2008,2009,
            2010,2011,2012,2013,2014
          ],
          default: 2008
        }
      }
    }
  });

  // Hook up the submit button to log to the console
  document.getElementById('submit').addEventListener('click',function() {
    // Get the value from the editor
    console.log(editor.getValue());
  });

});

