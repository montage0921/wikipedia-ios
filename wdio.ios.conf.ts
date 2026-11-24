import { shared } from './wdio.shared.conf.js';

// Env vars come from .github/workflows/ios-simulator-tests.yml (APP_PATH, UDID, DEVICE_NAME, PLATFORM_VERSION, ...).
const usePrebuiltWda = !!process.env.USE_PREBUILT_WDA;

export const config = {
  ...shared,
  capabilities: [
    {
      platformName: 'iOS',
      'appium:automationName': 'XCUITest',
      'appium:deviceName': process.env.DEVICE_NAME ?? 'iPhone 17',
      'appium:platformVersion': process.env.PLATFORM_VERSION ?? '26.5',
      'appium:udid': process.env.UDID,            // set in CI; omit locally to let Appium pick by name/version
      'appium:app': process.env.APP_PATH,          // path to the built Wikipedia.app
      'appium:wdaLaunchTimeout': 240_000,
      'appium:wdaConnectionTimeout': 240_000,
      'appium:wdaStartupRetries': 2,
      'appium:newCommandTimeout': 300,
      'appium:autoAcceptAlerts': true,
      'appium:printPageSourceOnFindFailure': true,
      ...(usePrebuiltWda
        ? { 'appium:usePrebuiltWDA': true, 'appium:derivedDataPath': process.env.WDA_DERIVED_DATA }
        : {}),
    },
  ],
};
