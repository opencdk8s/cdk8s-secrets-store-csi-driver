const { cdk8s } = require('projen');
const project = new cdk8s.ConstructLibraryCdk8s({
  author: 'Hunter-Thompson',
  authorAddress: 'aatman@auroville.org.in',
  cdk8sVersion: '1.4.10',
  defaultReleaseBranch: 'main',
  name: 'cdk8s-secrets-store-csi-driver',
  repositoryUrl: 'https://github.com/aatman/cdk8s-secrets-store-csi-driver.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();