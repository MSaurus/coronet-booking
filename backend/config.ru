require 'bundler'
Bundler.require
require 'sinatra/flash'
require 'net/https'
require 'google/apis/calendar_v3'

require_relative 'google_api'
require_relative 'backend'

ENV['GOOGLE_APPLICATION_CREDENTIALS'] = './credentials/credentials.json'

run App