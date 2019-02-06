import { Given, Then, Before } from 'cucumber';
import { AppPage } from '../app.po';
import { expect } from 'chai';

let app: AppPage;

Before(() => {
  app = new AppPage();
});

Given('I am on the angular.io site', () => app.navigateTo());

Then('I should see the title {string}', (string) =>
  app.getTitleText().then((title) => expect(title).to.equal(string)),
);
