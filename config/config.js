/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
  address: "localhost", // Address to listen on, can be:
  // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
  // - another specific IPv4/6 to listen on a specific interface
  // - "", "0.0.0.0", "::" to listen on any interface
  // Default, when address config is left out, is "localhost"
  port: 8080,
  ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
  // or add a specific IPv4 of 192.168.1.5 :
  // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
  // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
  // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

  language: "en",
  timeFormat: 24,
  units: "metric",

  modules: [
    {
      module: "alert",
    },
    {
      module: "updatenotification",
      position: "top_bar"
    },
    {
      module: "clock",
      position: "top_left",
      config: {
        timeFormat: 12,
        clockBold: true,
        displayType: "digital"
      }
    },
    {
      module: "calendar",
      header: "Formula 1 Schedule",
      position: "top_left",
      config: {
        calendars: [
          {
            symbol: ' flag-checkered',
            url: 'http://localhost:8080/MMM-Formula1/schedule.ics',
          }
        ]
      }
    },
    {
      module: "compliments",
      position: "lower_third"
    },
    {
      module: "currentweather",
      position: "top_right",
      config: {
        location: "Gurgaon",
        locationID: "1270642",  //ID from http://bulk.openweathermap.org/sample/; unzip the gz file and find your city
        appid: "62875a20c33f422148f0d5cb33404d85"
      }
    },
    {
      module: "weatherforecast",
      position: "top_right",
      header: "Weather Forecast",
      config: {
        location: "Gurgaon",
        locationID: "1270642",  //ID from https://openweathermap.org/city
        appid: "62875a20c33f422148f0d5cb33404d85",
        maxNumberOfDays: 2,
        showRainAmount: true
      }
    },
    {
      module: "newsfeed",
      position: "bottom_bar",
      config: {
        feeds: [
          {
            title: "NDTV",
            url: "http://feeds.feedburner.com/NDTV-LatestNews"
          },
          {
            title: "TechCrunch",
            url: "http://feeds.feedburner.com/TechCrunch"
          }
        ],
        showSourceTitle: true,
        showPublishDate: true
      }
    },
    {
      module: 'MMM-Formula1',
      position: 'bottom_right',
      header: 'F1 Standings',
      config: {
        calendar: true,
        maxRows: 10,
        // Optional configuration options - see https://github.com/ianperrin/MMM-Formula1#configuration-options
      }
    },
    {
      module: "MMM-NowPlayingOnSpotify",
      position: "bottom_left",

      config: {
        clientID: "4bdc6a2a1ad54468a54d7bd7349abd55",
        clientSecret: "11b26753a1624aad9365102702935185",
        accessToken: "BQBwwgZrqOem2D63ynjtBeRxQR4l1EYFoP-T5hrpfA1QFpwy6GB0m-ft39bJNwWsyJpavVjVAi_YV_MIsgXaPlrXPl6QqNv3C-pjWk-U-5m7YS1zRS5aYDWIHdUkUGx4pG6gy8oYTTYtK0mPRDWZiWuc1x6OdcYC7ZJjrui0ESaV55EvpZJw",
        refreshToken: "AQBMh0zoXs0LpGhDWKWF9NxwdsA3xwnaJS-7KuwD9PCJHSpalyi0MFuUdt5qHIr38jhB9-UwHXecKV_8XyAu7B8-VtmOGQ0rG4BP2HBhJCZy6hfgEZ7vepTnmiB-D9gOtpRAUA"
      }
    
  ]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
