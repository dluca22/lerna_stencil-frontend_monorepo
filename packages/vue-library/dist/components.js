import { defineContainer } from '@stencil/vue-output-target/runtime';
export const AnotherOne = defineContainer('another-one', undefined);
export const ButtonEvent = defineContainer('button-event', undefined, [
    'initialCount',
    'countIncreased'
], [
    'countIncreased'
]);
export const CustomHello = defineContainer('custom-hello', undefined, [
    'first',
    'middle',
    'last'
]);
export const HardcodedValues = defineContainer('hardcoded-values', undefined);
export const MyComponent = defineContainer('my-component', undefined, [
    'first',
    'middle',
    'last'
]);
export const StatusBadge = defineContainer('status-badge', undefined, [
    'message',
    'status',
    'persistent',
    'autoRemove',
    'ttl'
]);
export const TemplateCard = defineContainer('template-card', undefined, [
    'first',
    'last',
    'job',
    'descriptionText',
    'accomplishments',
    'age',
    'addComplementaryActions'
]);
export const XIcon = defineContainer('x-icon', undefined);
//# sourceMappingURL=components.js.map