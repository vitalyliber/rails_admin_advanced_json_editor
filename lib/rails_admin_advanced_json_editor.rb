require "rails_admin_advanced_json_editor/engine"

module RailsAdminAdvancedJsonEditor
end

require 'rails_admin/config/fields'
require 'rails_admin/config/fields/base'

module RailsAdmin
  module Config
    module Fields
      module Types
        class AdvancedJsonEditor < RailsAdmin::Config::Fields::Base
          RailsAdmin::Config::Fields::Types::register(self)
        end
      end
    end
  end
end

RailsAdmin::Config::Fields.register_factory do |parent, properties, fields|
  if properties[:name] == :advanced_json_editor
    fields << RailsAdmin::Config::Fields::Types::AdvancedJsonEditor.new(parent, properties[:name], properties)
    true
  else
    false
  end
end


