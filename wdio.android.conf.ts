import { shared } from './wdio.shared.conf.js';

// PLACEHOLDER: replace the capabilities with the ones from your existing, working Android config.
export const config = {
  ...shared,
  capabilities: [
    {
      platformName: 'Android',
      'appium:automationName': 'UiAutomator2',
      'appium:deviceName': process.env.ANDROID_DEVICE ?? 'Android',
      'appium:app': process.env.ANDROID_APP_PATH, // path to your .apk
      'appium:autoGrantPermissions': true,
    },
  ],
};
