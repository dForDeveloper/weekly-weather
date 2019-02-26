export const mockHours = [
  {
    time: 1551132776,
    temperature: 55.55
  }
];

export const expectedHours = [
  {
    id: '',
    data: [{ x: '3:56 PM', y: 56 }]
  }
]

export const expectedWeek = [
  {
    summary: 'Snow (< 1 in.) until afternoon.',
    icon: 'snow',
    precipType: 'snow',
    precipProbability: '51%',
    day: 'Sat',
    low: 19,
    high: 37,
    sunrise: '6:56 AM',
    sunset: '5:17 PM',
    wind: '3 mph WNW',
    humidity: '66%'
  },
  {
    day: 'Sun',
    high: 42,
    humidity: '51%',
    icon: 'partly-cloudy-day',
    low: 23,
    precipProbability: '4%',
    precipType: 'snow',
    summary: 'Partly cloudy until afternoon.',
    sunrise: '6:31 AM',
    sunset: '5:24 PM',
    wind: '5 mph SSE'
  }
];

export const mockWeek = [
  {
    time: 1550905200,
    summary: 'Snow (< 1 in.) until afternoon.',
    icon: 'snow',
    sunriseTime: 1550929376,
    sunsetTime: 1550969177,
    moonPhase: 0.65,
    precipIntensity: 0.0038,
    precipIntensityMax: 0.029,
    precipIntensityMaxTime: 1550948400,
    precipProbability: 0.51,
    precipAccumulation: 0.63,
    precipType: 'snow',
    temperatureHigh: 36.58,
    temperatureHighTime: 1550959200,
    temperatureLow: 18.64,
    temperatureLowTime: 1551016800,
    apparentTemperatureHigh: 31.6,
    apparentTemperatureHighTime: 1550944800,
    apparentTemperatureLow: 10.43,
    apparentTemperatureLowTime: 1551016800,
    dewPoint: 16.25,
    humidity: 0.66,
    pressure: 1015.14,
    windSpeed: 2.78,
    windGust: 25.97,
    windGustTime: 1550962800,
    windBearing: 288,
    cloudCover: 0.59,
    uvIndex: 4,
    uvIndexTime: 1550952000,
    visibility: 7.53,
    ozone: 336.11,
    temperatureMin: 20.92,
    temperatureMinTime: 1550934000,
    temperatureMax: 36.58,
    temperatureMaxTime: 1550959200,
    apparentTemperatureMin: 14.85,
    apparentTemperatureMinTime: 1550937600,
    apparentTemperatureMax: 31.6,
    apparentTemperatureMaxTime: 1550944800
  },
  {
    time: 1550991600,
    summary: 'Partly cloudy until afternoon.',
    icon: 'partly-cloudy-day',
    sunriseTime: 1551015691,
    sunsetTime: 1551055644,
    moonPhase: 0.69,
    precipIntensity: 0.0005,
    precipIntensityMax: 0.0019,
    precipIntensityMaxTime: 1551009600,
    precipProbability: 0.04,
    precipAccumulation: 0.146,
    precipType: 'snow',
    temperatureHigh: 42.32,
    temperatureHighTime: 1551042000,
    temperatureLow: 22.97,
    temperatureLowTime: 1551092400,
    apparentTemperatureHigh: 37.9,
    apparentTemperatureHighTime: 1551045600,
    apparentTemperatureLow: 15.42,
    apparentTemperatureLowTime: 1551092400,
    dewPoint: 13.54,
    humidity: 0.51,
    pressure: 1022.33,
    windSpeed: 4.73,
    windGust: 11.93,
    windGustTime: 1551042000,
    windBearing: 163,
    cloudCover: 0.19,
    uvIndex: 4,
    uvIndexTime: 1551034800,
    visibility: 10,
    ozone: 314.42,
    temperatureMin: 18.64,
    temperatureMinTime: 1551016800,
    temperatureMax: 42.32,
    temperatureMaxTime: 1551042000,
    apparentTemperatureMin: 10.43,
    apparentTemperatureMinTime: 1551016800,
    apparentTemperatureMax: 37.9,
    apparentTemperatureMaxTime: 1551045600
  }
];

export const mockWeather = {
  currently: {
    time: 1550976078,
    summary: 'Partly Cloudy',
    icon: 'partly-cloudy-night',
    nearestStormDistance: 14,
    nearestStormBearing: 309,
    precipIntensity: 0,
    precipProbability: 0,
    temperature: 30.54,
    apparentTemperature: 21.27,
    dewPoint: 8.64,
    humidity: 0.39,
    pressure: 1021.54,
    windSpeed: 11.28,
    windGust: 24.75,
    windBearing: 267,
    cloudCover: 0.45,
    uvIndex: 0,
    visibility: 9.98,
    ozone: 335.67
  },
  daily: { data: mockWeek },
  hourly: {
    data: [
      {
        time: 1550973600,
        temperature: 37
      },
      {
        time: 1550977200,
        temperature: 33
      },
      {
        time: 1550980800,
        temperature: 31
      },
      {
        time: 1550984400,
        temperature: 29
      }
    ]
  }
}

export const expectedWeather = {
  graphData: [
    {
      id: '',
      data: [
        {
          x: '7:00 PM',
          y: 37,
        },
        {
          x: '8:00 PM',
          y: 33,
        },
        {
          x: '9:00 PM',
          y: 31,
        },
        {
          x: '10:00 PM',
          y: 29,
        },
      ]
    },
  ],
  maxTemp: 42,
  minTemp: 19,
  today: {
    day: 'Sat',
    feelsLike: 21,
    high: 37,
    humidity: '66%',
    icon: 'snow',
    low: 19,
    precipProbability: '51%',
    precipType: 'snow',
    summary: 'Partly Cloudy',
    sunrise: '6:56 AM',
    sunset: '5:17 PM',
    temperature: 31,
    wind: '3 mph WNW',
  },
  week:  [
    {
      day: 'Sun',
      high: 42,
      humidity: '51%',
      icon: 'partly-cloudy-day',
      low: 23,
      precipProbability: '4%',
      precipType: 'snow',
      summary: 'Partly cloudy until afternoon.',
      sunrise: '6:31 AM',
      sunset: '5:24 PM',
      wind: '5 mph SSE',
    },
  ],
}