require 'googleauth'

ENV['GOOGLE_APPLICATION_CREDENTIALS'] = './test-auth.json'

# Get the environment configured authorization
scopes =  ['https://www.googleapis.com/auth/calendar']
authorization = Google::Auth.get_application_default(scopes)

auth_client = authorization.dup
auth_client.sub = "test-auth@test-auth-217510.iam.gserviceaccount.com"
token = auth_client.fetch_access_token!
p token