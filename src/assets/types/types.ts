export type Devices = {
  icon: {
    id: string
  },
  line: {
    name: string,
    id: string
  },
  product: {
    abbrev: string,
    name: string,
  },
  shortnames: string[]
};

export type DevicesLines = {
  line: string;
  shown: boolean;
}