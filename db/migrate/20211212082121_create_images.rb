class CreateImages < ActiveRecord::Migration[6.1]
  def change
    create_table :images do |t|
      t.string :name
      t.string :path
      t.boolean :is_local, default: true

      t.timestamps
    end
  end
end
