ENV['GOOGLE_APPLICATION_CREDENTIALS'] = './credentials/credentials.json'

require 'bundler'
Bundler.require
require 'google/apis/calendar_v3'

require_relative 'google_api'
require_relative 'backend'

run App