class Suggestion < ApplicationRecord
  VALID_EMAIL_PATTERN = /^(.+)@(.+)$/
  VALID_TEL_NUMBER_PATTERN = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, format: { with: VALID_EMAIL_PATTERN, multiline: true }, on: %i[create update], uniqueness: { case_sensitive: false }
  validates :tel_number, format: { with: VALID_EMAIL_PATTERN, multiline: true }, on: %i[create update]
  validates :message, presence: true, length: { maximum: 500 }
end
