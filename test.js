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
    const batteryItem = await driver.$('//*[@text="Battery"]');
    await batteryItem.click();
  } finally {
    await driver.pause(1000);
    await driver.deleteSession();
  }
}

runTest().catch(console.error);
