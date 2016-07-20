moment.locale('jp', {
  months: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
  monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
  weekdays: '日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日'.split('_'),
  weekdaysShort: '日曜_月曜_火曜_水曜_木曜_金曜_土曜'.split('_'),
  weekdaysMin: '日_月_火_水_木_金_土'.split('_'),
  longDateFormat: {
    LT: 'HH時mm分',
    LTS: 'HH時mm分ss秒',
    L: 'YYYY-MM-DD',
    LL: 'YYYY年MMMD日',
    LLL: 'YYYY年MMMD日HH時mm分',
    LLLL: 'YYYY年MMMD日 ddd H:mm:ss',
    l: 'YYYY-MM-DD',
    ll: 'YYYY年MMMD日',
    lll: 'YYYY年MMMD日HH時mm分',
    llll: 'YYYY年MMMD日ddddHH時mm分'
  },
  calendar: {
    sameDay: '[今日] LT',
    nextDay: '[明日] LT',
    lastDay: '[昨日] LT',
    nextWeek: '[来週] LT',
    lastWeek: '[先週] LT',
    sameElse: 'LL'
  },
  ordinalParse: /\d{1,2}º/,
  ordinal : '%dº',
  relativeTime: {
    future: '%s内',
    past: '%s前',
    s: '1 秒',
    m: '1 分',
    mm: '%d 分',
    h: '1 時間',
    hh: '%d 時間',
    d: '1 日',
    dd: '%d 日',
    M: '1 ヶ月',
    MM: '%d ヶ月',
    y: '1 年',
    yy: '%d 年'
  },
  week: {
    dow: 1, // Monday is the first day of the week.
    doy: 4  // The week that contains Jan 4th is the first week of the year.
  }
});
