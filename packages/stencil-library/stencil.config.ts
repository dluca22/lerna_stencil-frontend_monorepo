import { Config } from '@stencil/core';

import { angularOutputTarget } from '@stencil/angular-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';
import { reactOutputTarget } from '@stencil/react-output-target';

// export const config: Config = {
//   namespace: 'stencil-library',
//   outputTargets: [
//     {
//       type: 'dist',
//       // esmLoaderPath: '../loader',
//     },
//     vueOutputTarget({
//       componentCorePackage: 'stencil-library',
//       proxiesFile: '../vue-library/lib/components.ts',
//     }),
//     angularOutputTarget({
//       componentCorePackage: 'stencil-library',
//       outputType: 'component',
//       directivesProxyFile: '../angular-workspace/projects/component-library/src/lib/stencil-generated/components.ts',
//       directivesArrayFile: '../angular-workspace/projects/component-library/src/lib/stencil-generated/index.ts',
//       customElementsDir: "dist/components",
//     }),
//     // reactOutputTarget({
//     //   // Relative path to where the React components will be generated
//     //   outDir: '../react-library/lib/components/stencil-generated/',
//     //   customElementsDir: 'dist/components',
//     // }),
//     reactOutputTarget({
//       outDir: '../react/lib/components/stencil-generated/',
//       componentCorePackage: 'example-stencil',  // Required for custom paths
//       includeImportCustomElements: true,  // Enables lazy imports from shorter path (incompatible with includeDefineCustomElements if set)
//       customElementsDir: ''  // Key change: Removes '/dist/components/' prefix from imports
//     })
//     // dist-custom-elements output target is required for the React output target
//     {
//       type: 'dist-custom-elements',
//       customElementsExportBehavior: 'auto-define-custom-elements',
//       externalRuntime: false,
//     },
//     // {
//     //   type: 'docs-readme',
//     // },
//     // {
//     //   type: 'www',
//     //   serviceWorker: null, // disable service workers
//     // },
//   ],
//   testing: {
//     browserHeadless: "shell",
//   },
// };

export const config: Config = {
  namespace: 'stencil-library',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null,
    },
    // angularOutputTarget({
    //   componentCorePackage: 'stencil-library',
    //   outputType: 'component',
    //   directivesProxyFile: '../angular-workspace/projects/component-library/src/lib/stencil-generated/components.ts',
    //   directivesArrayFile: '../angular-workspace/projects/component-library/src/lib/stencil-generated/index.ts',
    //   customElementsDir: '',  // Optional; minimal effect here but adds consistency
    // }),
    angularOutputTarget({
      componentCorePackage: 'stencil-library/loader',
      outputType: 'component',
      directivesProxyFile: '../angular-workspace/projects/component-library/src/lib/stencil-generated/components.ts',
      directivesArrayFile: '../angular-workspace/projects/component-library/src/lib/stencil-generated/index.ts',
      customElementsDir: "dist/components",

    }),
    // vueOutputTarget({
    //   componentCorePackage: 'stencil-library',
    //   proxiesFile: '../vue-library/lib/stencil-generated.ts',
    //   includeImportCustomElements: true,
    //   customElementsDir: '/dist/components'  // Explicitly set to match default output dir and exports
    // }),
     vueOutputTarget({
      componentCorePackage: 'stencil-library',
      proxiesFile: '../vue-library/lib/components.ts',
    }),
    reactOutputTarget({
      outDir: '../react-library/lib/components/stencil-generated/',
      customElementsDir: ''  // Key change: Removes '/dist/components/' prefix from imports
    }),

  ],
  testing: {
    browserHeadless: "shell",
  },
};