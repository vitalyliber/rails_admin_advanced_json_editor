# RailsAdminAdvancedJsonEditor

Gem for comfortable editing json in Rails Admin

## How to install gem: 

_put string to gemfile:_

gem 'rails_admin_advanced_json_editor', '0.0.1'

_Add json_editor to your field:_

```ruby
config.model 'ProductInfo' do
    edit do
      field :json, :advanced_json_editor
    end
  end
```

This project rocks and uses MIT-LICENSE.