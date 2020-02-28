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
      title: 'Quintin',
      rightTitle: 'Donnelly',
      root: false,
      parent: 1
    },
    {
      id: 4,
      title: 'William',
      rightTitle: 'Gentry',
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
      title: 'Wezley',
      rightTitle: 'Singleton',
      root: false,
      parent: 2
    },
    {
      id: 6,
      title: 'Quintin',
      rightTitle: 'Donnelly',
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
      group: 3
    }
  ]
};

export default data;