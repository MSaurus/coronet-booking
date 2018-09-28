#require 'google/apis/calendar_v3'
require 'googleauth'
ENV['GOOGLE_APPLICATION_CREDENTIALS'] = './credentials.json'

# Get the environment configured authorization
scopes =  ['https://www.googleapis.com/auth/calendar']
authorization = Google::Auth.get_application_default(scopes)

auth_client = authorization.dup
auth_client.sub = "coronet-booking-account@booking-system-217611.iam.gserviceaccount.com"
token = auth_client.fetch_access_token!
p token

=begin
service = Google::Apis::CalendarV3::CalendarService.new
service.client_options.application_name = APPLICATION_NAME
service.authorization = auth_client

# Fetch the next 10 events for the user
calendar_id = 'primary'
response = service.list_calendar_lists(page_token: token["access_token"])
puts 'Upcoming events:'
puts 'No upcoming events found' if response.items.empty?
response.items.each do |event|
  start = event.start.date || event.start.date_time
  puts "- #{event.summary} (#{start})"
end

page_token = nil

begin
  result = service.list_calendar_lists(page_token: page_token)
  if result.next_page_token != page_token
    page_token = result.next_sync_token
    p page_token
  else
    page_token = nil
  end
end while !page_token.nil?
=end