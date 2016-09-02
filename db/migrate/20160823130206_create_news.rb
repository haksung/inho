class CreateNews < ActiveRecord::Migration
  def change
    create_table :news do |t|
      t.string :title,              null: false, default: ""
      t.string :content,            null: false, default: ""
      t.string :img_src,            null: false, default: ""

      t.timestamps null: false
    end
  end
end
