/* eslint-disable import/no-extraneous-dependencies */
const { withNx } = require('@nrwl/next/plugins/with-nx');
const withPWA = require('next-pwa');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 * */
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },

  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
  },
};

module.exports = withNx(withPWA(nextConfig));
