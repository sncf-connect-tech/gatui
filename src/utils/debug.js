/*
 * Debug utils
 */

import { theme } from '@/config/Application.conf';

const isDebug = theme.debug;
const debug = (string) => {
  if (isDebug) {
    // eslint-disable-next-line
    return console.log(string);
  }
  return null;
};

export const debugLog = debug;
export const blbl = '12';
