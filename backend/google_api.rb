module GoogleApiHelper

  #https://www.rubydoc.info/github/google/google-api-ruby-client/Google/Apis/CalendarV3/CalendarService

  def get_calendar_id(name)
    {
        stora: "4vih9vmul1m7ovnp1844kmt8b0@group.calendar.google.com",
        lilla: "pj2p29fucemcvv93501kp7lmhs@group.calendar.google.com"
    }[name.downcase.to_sym]
  end

  def fetch_calender_events(uid)
    execute do |service|
      service.list_events(uid)
    end
  end

  def fetch_calendars
    execute do |service|
      service.list_calendar_lists
    end
  end

  def create_event(params)
    execute do |service|
      event_config = {
          summary: params["title"],
          description: params["description"],
          start: {
              date_time: params["start-datetime"] + ":00",
              time_zone: 'Europe/Stockholm',
          },
          end: {
              date_time: params["end-datetime"] + ":00",
              time_zone: 'Europe/Stockholm',
          },
          attendees: [],
          reminders: {
              use_default: false,
              overrides: [
                  {reminder_method: 'email', minutes: 24 * 60},
                  {reminder_method: 'popup', minutes: 10},
              ],
          },
          extended_properties: {
              private: {
                  user_id: "gej"
              }
          }
      }

      unless params["attendees"].nil? || params["attendees"].empty? || params["attendees"] == ""
        if !params["attendees"].start_with?("{")
          params["attendees"].split(",").each do |attendee|
            event_config[:attendees] << {email: attendee.strip}
          end
        else
          ::JSON.parse(params["attendees"]).each do |attendee|
            event_config[:attendees] << {email: attendee.to_s}
          end
        end
      end

      case params["room"].downcase
      when "stora"

        event_config[:location] = 'Coronet: Stora Konferensrummet'
      when "lilla"
        event_config[:location] = 'Coronet: Lilla Konferensrummet'
      end

      service.insert_event(get_calendar_id(params["room"]), Google::Apis::CalendarV3::Event.new(event_config), send_notifications: true)
    end
  end

  def delete_event(params)
    execute do |service|
      service.delete_event(get_calendar_id(params["calendar_name"]), params["event_id"])
    end
  end

  private def execute
    begin
      authorization = Google::Auth.get_application_default(['https://www.googleapis.com/auth/calendar'])
      auth_client = authorization.dup
      auth_client.sub = "coronet-booking-account@booking-system-217611.iam.gserviceaccount.com"
      service = Google::Apis::CalendarV3::CalendarService.new
      service.authorization = auth_client
      resp = yield(service)
      resp_parsed = resp.to_h
      if resp_parsed[:error] != nil
        {status: false, error_msg: "Error with API request!", error: resp_parsed[:error]}.to_json
      else
        {status: true, response: resp_parsed}.to_json
      end
    rescue => e
      puts e.backtrace
      {status: false, error_msg: e.message}.to_json
    end
  end
end