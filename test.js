import { remote } from "webdriverio";

const capabilities = {
  platformName: "Android",
  "appium:automationName": "UiAutomator2",
  "appium:deviceName": "emulator-5554",
  "appium:appPackage": "com.android.settings",
  "appium:appActivity": ".Settings",
};

const wdOpts = {
  hostname: "127.0.0.1",
  port: 4723,
  logLevel: "info",
  capabilities,
};

async function runTest() {
  const driver = await remote(wdOpts);
  try {
    // const batteryItem = await driver.$('//*[@text="Battery"]');
    // await batteryItem.click();
    const soundSettingsItem = await driver.$('//*[@text="Sound"]');
    await soundSettingsItem.click();
    const vibrateItem = await driver.$(
      '//*[@resource-id="android:id/switch_widget"]'
    );
    await vibrateItem.click();
    const dontDisturbItem = await driver.$('//*[@text="Do Not Disturb"]');
    await dontDisturbItem.click();
    const soundVibrationItem = await driver.$('//*[@text="Sound & vibration"]');
    await soundVibrationItem.click();
    const alarmItem = await driver.$(
      '(//*[@resource-id="android:id/switch_widget"])[1]'
    );
    await alarmItem.click();
    const mediaItem = await driver.$(
      '(//*[@resource-id="android:id/switch_widget"])[2]'
    );
    await mediaItem.click();
    const touchSoundItem = await driver.$(
      '(//*[@resource-id="android:id/switch_widget"])[3]'
    );
    await touchSoundItem.click();
  } finally {
    await driver.pause(1000);
    await driver.deleteSession();
  }
}

runTest().catch(console.error);
