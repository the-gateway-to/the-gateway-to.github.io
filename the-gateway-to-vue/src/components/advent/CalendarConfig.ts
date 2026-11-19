export interface ICalendarConfig {
  title: string;
  startDate: string;
  background: string[];
  imageRoot: string;
  day: {
    [key: number]: {
      passcode: string,
      images: string[],
    }
  };
}

export const config: ICalendarConfig = {
  title: `Adam's Advent Calendar 2026`,
  startDate: '2026-12-01',
  background: [
    '../../assets/images/background.png'
  ],
  imageRoot: '/src/assets/pdf/lego-40809/',
  day: {
    1: {
      passcode: 'seasons-greetings',
      images: [
        '3.png',
        '4.png',
        '5.png',
        '6.png',
        '7.png',
        '8.png'
      ]
    },
    2: {
      passcode: 'holly-berry',
      images: [
        '9.png',
        '10.png',
        '11.png',
        '12.png',
        '13.png'
      ]
    },
    3: {
      passcode: 'snowman',
      images: [
        '14.png',
        '15.png',
        '16.png',
        '17.png',
        '18.png'
      ]
    },
    4: {
      passcode: 'gingerbread',
      images: [
        '19.1.png',
        '19.2.png',
        '21.png',
        '22.png',
        '23.png',
        '24.png'
      ]
    },
    5: {
      passcode: 'bauble',
      images: [
        '25.png',
        '26.png',
        '27.png',
        '28.png',
        '29.1.png',
        '29.2.png'
      ]
    },
    6: {
      passcode: 'mince-pie',
      images: [
        '31.png',
        '33.1.png',
        '33.2.png',
        '35.png',
        '36.png'
      ]
    },
    7: {
      passcode: 'snowflake',
      images: [
        '37.1.png',
        '37.2.png',
        '39.png',
        '40.png',
        '41.png'
      ]
    },
    8: {
      passcode: 'candy-cane',
      images: [
        '42.png',
        '43.png',
        '44.png',
        '45.png',
        '46.png'
      ]
    },
    9: {
      passcode: 'bobble-hat',
      images: [
        '48.png',
        '49.png',
        '50.png',
        '51.png',
        '52.png'
      ]
    },
    10: {
      passcode: 'hot-chocolate',
      images: [
        '53.1.png',
        '53.2.png',
        '55.png',
        '56.png',
        '57.png',
        '58.png'
      ]
    },
    11: {
      passcode: 'jingle-bells',
      images: [
        '59.png',
        '60.png',
        '61.1.png',
        '61.2.png',
        '63.png',
        '64.png'
      ]
    },
    12: {
      passcode: 'christmas-tree',
      images: [
        '65.png',
        '66.png',
        '67.png',
        '68.png',
        '69.png'
      ]
    },
    13: {
      passcode: 'ice-skates',
      images: [
        '70.png',
        '71.png',
        '72.png',
        '73.png',
        '74.png'
      ]
    },
    14: {
      passcode: 'cracker',
      images: [
        '75.png',
        '76.png',
        '77.png',
        '79.png',
        '80.png'
      ]
    },
    15: {
      passcode: 'carrol-singer',
      images: [
        '81.png',
        '82.png',
        '83.png',
        '84.png',
        '85.png',
        '86.png'
      ]
    },
    16: {
      passcode: 'christmas-cake',
      images: [
        '87.1.png',
        '87.2.png',
        '89.png',
        '90.png',
        '91.png',
        '92.png'
      ]
    },
    17: {
      passcode: 'frostbite',
      images: [
        '93.png',
        '94.1.png',
        '94.2.png',
        '96.png',
        '97.png',
        '98.png'
      ]
    },
    18: {
      passcode: 'tinsel',
      images: [
        '99.png',
        '100.png',
        '101.png',
        '102.png',
        '103.png',
        '104.png'
      ]
    },
    19: {
      passcode: 'jingle-bells',
      images: [
        '106.png',
        '107.png',
        '108.png',
        '109.png',
        '110.png',
        '111.png'
      ]
    },
    20: {
      passcode: 'mistletoe',
      images: [
        '112.png',
        '113.1.png',
        '113.2.png',
        '115.png',
        '116.png',
        '117.png'
      ]
    },
    21: {
      passcode: 'snowball',
      images: [
        '118.png',
        '119.png',
        '120.png',
        '121.png',
        '122.png'
      ]
    },
    22: {
      passcode: 'turkey',
      images: [
        '123.png',
        '124.png',
        '126.1.png',
        '126.2.png',
        '128.png'
      ]
    },
    23: {
      passcode: 'rudolph',
      images: [
        '129.png',
        '130.png',
        '131.png',
        '132.png',
        '133.png'
      ]
    },
    24: {
      passcode: 'ho-ho-ho',
      images: [
        '134.png',
        '135.png',
        '136.png',
        '137.1.png',
        '137.2.png',
        '139.png',
        '140.png',
        '141.png'
      ]
    }
  }
};