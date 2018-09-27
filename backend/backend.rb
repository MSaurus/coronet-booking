class App < Sinatra::Base

  helpers GoogleApiHelper

  get "/" do
    "hej"
  end

  get "/api/calendars" do
    content_type :json
    fetch_calendars
  end

  get "/api/calendars/:room" do
    content_type :json
    fetch_calender_events(get_calendar_id(params["room"].downcase))
  end

  get "/api/calendars/events/new" do
    slim :"new-event"
  end

  get "/api/calendars/:calendar_name/events/:event_id/delete" do
    content_type :json
    delete_event(params)
  end

  post "/api/calendars/events/new" do
    content_type :json
    create_event(params)
  end
end