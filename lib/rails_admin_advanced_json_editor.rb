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

          register_instance_option :render do
            bindings[:view].render partial: "rails_admin/main/form_advanced_json_editor", locals: {field: self, form: bindings[:form]}
          end
        end
      end
    end
  end
end