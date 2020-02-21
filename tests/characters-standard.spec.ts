// tslint:disable-next-line:import-name
import dedent from 'ts-dedent';
import { SpeechMarkdown } from '../src/SpeechMarkdown';

describe('characters-standard', () => {

  const speech = new SpeechMarkdown();

  const markdown = dedent`
    Countdown: (321)[characters]
    The word is spelled: (park)[chars]
  `;

  test('converts to SSML - Amazon Alexa', () => {

    const options = {
      platform: 'amazon-alexa'
    };
    const ssml = speech.toSSML(markdown, options);

    const expected = dedent`
      <speak>
      Countdown: <say-as interpret-as="characters">321</say-as>
      The word is spelled: <say-as interpret-as="characters">park</say-as>
      </speak>
    `;

    expect(ssml).toBe(expected);
  });

  test('converts to SSML - Google Assistant', () => {

    const options = {
      platform: 'google-assistant'
    };
    const ssml = speech.toSSML(markdown, options);

    const expected = dedent`
      <speak>
      Countdown: <say-as interpret-as="characters">321</say-as>
      The word is spelled: <say-as interpret-as="characters">park</say-as>
      </speak>
    `;

    expect(ssml).toBe(expected);
  });

  test('converts to SSML - Samsung Bixby', () => {

    const options = {
      platform: 'samsung-bixby'
    };
    const ssml = speech.toSSML(markdown, options);

    const expected = dedent`
      <speak>
      Countdown: 321
      The word is spelled: park
      </speak>
    `;

    expect(ssml).toBe(expected);
  });

  test('converts to Plain Text', () => {

    const options = {
    };
    const text = speech.toText(markdown, options);

    const expected = dedent`
      Countdown: 321
      The word is spelled: park
    `;

    expect(text).toBe(expected);
  });

});
