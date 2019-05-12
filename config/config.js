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
      position: "top_center",
      config: {
        maximumEntries: 3,
        calendars: [
          {
            symbol: ' flag-checkered',
            url: 'http://localhost:8080/MMM-Formula1/schedule.ics',
          }
        ]
      }
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
      position: 'top_center',
      header: 'F1 Standings',
      config: {
        calendar: true,
        maxRows: 3,
        // Optional configuration options - see https://github.com/ianperrin/MMM-Formula1#configuration-options
      }
    },
    {
  module: "MMM-NowPlayingOnSpotify",
  position: "bottom_left",
      config: {
        clientID: "4bdc6a2a1ad54468a54d7bd7349abd55",
        clientSecret: "11b26753a1624aad9365102702935185",
        accessToken: "BQDN-2yuMnXtv4QA5NhPX3mIsAcBOP0KtYWKuYVojSlB2hl12dmeWJd3fPJETv1kjd2pwO43PhtuF6RcTxkN5G9CnjpZPW80wSsnsgcZ2UC7FsKettxzhEJ-dGJPnfSMJaS2GLuwLBbylzhMwjEsFAXT-KexWE6q0JRNLGOrnkRCYjpBQh18",
        refreshToken: "AQANbVgrgT38AhYP6sZfXpQDv6ikFgMZY5wfkYtwWpvaTIRujrR1qcaNy31-6jPyZeX1niabrMyEjc1pICV1C9ETpAB8_doSKN6EaPIZofNz9hc85LPoRwYdm2uSyManxIVIZA"
      }
    },
    {
      module: 'MMM-Screencast',
      position: 'middle_center', // This position is for a hidden <div /> and not the screencast window
      config: {
        position: 'center',
        height: 600,
        width: 1000,
      }
    },
    {
      module: 'MMM-TelegramBot',
      config: {
        telegramAPIKey: '687290318:AAF9X75A3r_Ma0scckVHMotCG3AjMQtq688',
        allowedUser: ['ryn2624'],
        adminChatId: 616920578,
      }
    },
    {
      module: 'MMM-Glance',
      config: {
        defaultGlancingTime: 10000,
        alias: {
          "f1": ["calendar", 'MMM-Formula1'],
        }
      }
    },
    {
      module: 'phone-notification-mirror',
      position: 'bottom_right',
      header: 'Phone Notifications',
      config: {
        accessToken: 'o.tfoEFXXATQW9bbM5ZAskKLUt6jE3oDHu',
        numberOfNotifications: 5,
        displayNotificationIcon: true,
        displayMessage: true,
        displayCount: false,
        alert: false,
        fade: true,
        maxCharacters: 50
      }
    },
  ]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
