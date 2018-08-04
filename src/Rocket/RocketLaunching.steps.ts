import { loadFeature, defineFeature } from 'jest-cucumber';

import { Rocket } from './Rocket';

const feature = loadFeature('./src/Rocket/RocketLaunching.feature');

defineFeature(feature, test => {
  test('Launching a SpaceX rocket', ({ given, when, then }) => {
    let rocket: Rocket;

    given('I am Elon Musk attempting to launch a rocket into space', () => {
      rocket = new Rocket();
    });

    when('I launch the rocket', () => {
      rocket.launch();
    });

    then('the rocket should end up in space', () => {
      expect(rocket.isInSpace).toBe(true);
    });

    then('the booster(s) should land back on the launch pad', () => {
      expect(rocket.boostersLanded).toBe(true);
    });

    then('nobody should doubt me ever again', () => {
      expect('people').not.toBe('');
    });
  });
});
