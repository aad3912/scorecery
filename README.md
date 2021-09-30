# Scorecery 
Follow your favourite football teams and leagues in one centralised place!

## Features
- [x] User authentication using data hosted on MongoDB Atlas
- [x] Secure transmission of data using JWT tokens
- [x] Custom page for favourite leagues
- [x] Support for adding and removing favourite leagues
- [x] Responsive components with multi-platform support

## Todo
- [ ] Custom pages for cups, players and teams
- [ ] Support for uploading user icons and hosting them on Amazon SW3
- [ ] Cache data in database so less calls to API required
- [ ] Handle limited number of External API calls

`Notes`
- Website may take a while to load initially due to Heroku putting apps to sleep after a 30-minute inactive period
- External API only provides limited number of calls per day. If limit is exceeded, website may be stuck in loading state. Please try again on a different day in case this occurs
