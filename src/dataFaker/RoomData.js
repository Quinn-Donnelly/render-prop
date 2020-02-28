import moment from "moment";
import faker from "faker";

const bg1 = '#abfcca';
const bg2 = '#70efbf';

const data = {
  groups: [
    {
      id: 1,
      title: 'Reston',
      rightTitle: 'Reston',
      root: true,
      parent: null
    },
    {
      id: 3,
      title: 'Room 214',
      rightTitle: 'Room 214',
      root: false,
      parent: 1
    },
    {
      id: 4,
      title: 'Room 222',
      rightTitle: 'Room 222',
      root: false,
      parent: 1
    },
    {
      id: 2,
      title: 'USF',
      rightTitle: 'USF',
      root: true,
      parent: null
    },
    {
      id: 5,
      title: 'NEC 2212',
      rightTitle: 'NEC 2212',
      root: false,
      parent: 2
    },
    {
      id: 6,
      title: 'BUNKER 22124',
      rightTitle: 'BUNKER 22124',
      root: false,
      parent: 2
    },
  ],
  items: [
    {
      id: 1,
      title: 'Infosys Big Data Batch',
      start: moment(),
      end: moment().add(10, 'weeks'),
      group: 6
    }
  ]
};

export default data;