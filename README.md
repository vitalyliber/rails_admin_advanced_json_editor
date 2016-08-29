# RailsAdminAdvancedJsonEditor

Tool for comfortable editing json in Rails Admin

Thanks for the editor this [repo](https://github.com/jdorn/json-editor) 

Example [here](http://jeremydorn.com/json-editor/)

# How to install gem: 

## _1. put gem to gemfile_

gem 'rails_admin_advanced_json_editor', '0.0.1'

## _2. Add json_editor to your field_

```ruby
config.model 'ProductInfo' do
    edit do
      field :json, :advanced_json_editor
    end
  end
```

## _3. Add json_editor_schema.json to config directory_

Read more about the schema [here](https://github.com/jdorn/json-editor)