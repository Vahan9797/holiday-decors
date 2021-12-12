class CreateSuggestions < ActiveRecord::Migration[6.1]
  def change
    enable_extension :citext
    create_table :suggestions do |t|
      t.string :first_name
      t.string :last_name
      t.citext :email, null: false
      t.string :tel_number
      t.string :message

      t.timestamps
    end
  end
end
