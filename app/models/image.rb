class Image < ApplicationRecord
  def path
    # TODO: make files with AWS S3 upload and Cloudfront.private_url get
    "#{Rails.root}/#{read_attribute(:path)}"
  end
end
