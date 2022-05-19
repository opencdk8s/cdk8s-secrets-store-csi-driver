import { Testing, Chart } from 'cdk8s';
import * as t from '../src/index';
test('hello', () => {
  const app = Testing.app();
  const chart = new Chart(app, 'test');
  new t.SecretProviderClass(chart, 'test1');
  new t.SecretProviderClassList(chart, 'test');


  expect(Testing.synth(chart)).toMatchSnapshot();
});
