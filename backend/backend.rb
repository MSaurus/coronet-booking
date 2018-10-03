class App < Sinatra::Base

  set :public_folder, 'dist'

  helpers GoogleApiHelper

  get "/api/calendars" do
    content_type :json
    headers["Access-Control-Allow-Origin"] = "*"
    fetch_calendars
  end

  get "/api/calendars/:room" do
    content_type :json
    headers["Access-Control-Allow-Origin"] = "*"
    fetch_calender_events(get_calendar_id(params["room"].downcase))
  end

  get "/api/calendars/events/new" do
    slim :"new-event"
  end

  get "/api/calendars/:calendar_name/events/:event_id/delete" do
    content_type :json
    headers["Access-Control-Allow-Origin"] = "*"
    delete_event(params)
  end

  post "/api/calendars/events/new" do
    content_type :json
    headers["Access-Control-Allow-Origin"] = "*"
    create_event(params)
  end

  get "*" do
    redirect "/index.html"
  end
end