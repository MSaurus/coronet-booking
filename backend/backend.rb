class App < Sinatra::Base

  helpers GoogleApiHelper

  get "/" do
    "HEJ"
  end

  get "/api/calendars" do
    content_type :json
    headers["Access-Control-Allow-Origin"] = "*"
    fetch_calendars.to_json
  end

  get "/api/calendars/:room" do
    content_type :json
    headers["Access-Control-Allow-Origin"] = "*"
    fetch_calender_events(get_calendar_id(params["room"].downcase)).to_json
  end

  get "/api/calendars/events/new" do
    slim :"new-event"
  end

  get "/api/calendars/:calendar_name/events/:event_id/delete" do
    content_type :json
    headers["Access-Control-Allow-Origin"] = "*"
    delete_event(params).to_json
  end

  post "/api/calendars/events/new" do
    content_type :json
    headers["Access-Control-Allow-Origin"] = "*"
    create_event(params).to_json
  end
end