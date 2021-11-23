const baseUnit = 8;
const unit = 'px';

export const spaces = ignoreUnit => ({
  zero: (!ignoreUnit) ? `0${unit}` : 0,
  auto: 'auto',
  micro: (!ignoreUnit) ? `${baseUnit}${unit}` : baseUnit,
  small: (!ignoreUnit) ? `${2 * baseUnit}${unit}` : (2 * baseUnit),
  base: (!ignoreUnit) ? `${3 * baseUnit}${unit}` : (3 * baseUnit),
  large: (!ignoreUnit) ? `${4 * baseUnit}${unit}` : (4 * baseUnit),
  mega: (!ignoreUnit) ? `${6 * baseUnit}${unit}` : (6 * baseUnit),
  giga: (!ignoreUnit) ? `${8 * baseUnit}${unit}` : (8 * baseUnit),
  tera: (!ignoreUnit) ? `${12 * baseUnit}${unit}` : (12 * baseUnit),
});

function getSpace(name = 'base', ignoreUnit = false) {
  return spaces(ignoreUnit)[name] || spaces(ignoreUnit).base;
}

export default getSpace;