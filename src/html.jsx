// Define your sizes
const size = {
  xsm: '319px', // or whatever upper limit you want
  sm: '768px',
  med: '992px',
  lg: '1200px',
  xl: '1440px'
};

// Create device media queries
const device = {
  xsm: `(min-width: ${size.xsm})`,
  sm: `(min-width: ${size.sm})`,
  med: `(min-width: ${size.med})`,
  lg: `(min-width: ${size.lg})`,
  xl: `(min-width: ${size.xl})`
};

export {size, device};
