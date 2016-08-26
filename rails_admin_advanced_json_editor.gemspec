$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "rails_admin_advanced_json_editor/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "rails_admin_advanced_json_editor"
  s.version     = RailsAdminAdvancedJsonEditor::VERSION
  s.authors     = ["Vitaly Liber"]
  s.email       = ["liber@sibext.com"]
  s.homepage    = "TODO"
  s.summary     = "TODO: Summary of RailsAdminAdvancedJsonEditor."
  s.description = "TODO: Description of RailsAdminAdvancedJsonEditor."
  s.license     = "MIT"

  s.files = Dir["{app,config,db,lib}/**/*", "MIT-LICENSE", "Rakefile", "README.rdoc"]

  s.add_dependency "rails", "~> 4.2.6"
end
