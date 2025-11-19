import { defineContainer } from '@stencil/vue-output-target/runtime';
import { defineCustomElement as defineAnotherOne } from 'stencil-library//dist/components/another-one.js';
import { defineCustomElement as defineButtonEvent } from 'stencil-library//dist/components/button-event.js';
import { defineCustomElement as defineCustomHello } from 'stencil-library//dist/components/custom-hello.js';
import { defineCustomElement as defineHardcodedValues } from 'stencil-library//dist/components/hardcoded-values.js';
import { defineCustomElement as defineMyComponent } from 'stencil-library//dist/components/my-component.js';
import { defineCustomElement as defineStatusBadge } from 'stencil-library//dist/components/status-badge.js';
import { defineCustomElement as defineTemplateCard } from 'stencil-library//dist/components/template-card.js';
import { defineCustomElement as defineXIcon } from 'stencil-library//dist/components/x-icon.js';
export const AnotherOne = defineContainer('another-one', defineAnotherOne);
export const ButtonEvent = defineContainer('button-event', defineButtonEvent, [
    'initialCount',
    'countIncreased'
], [
    'countIncreased'
]);
export const CustomHello = defineContainer('custom-hello', defineCustomHello, [
    'first',
    'middle',
    'last'
]);
export const HardcodedValues = defineContainer('hardcoded-values', defineHardcodedValues);
export const MyComponent = defineContainer('my-component', defineMyComponent, [
    'first',
    'middle',
    'last'
]);
export const StatusBadge = defineContainer('status-badge', defineStatusBadge, [
    'message',
    'status',
    'persistent',
    'autoRemove',
    'ttl'
]);
export const TemplateCard = defineContainer('template-card', defineTemplateCard, [
    'first',
    'last',
    'job',
    'descriptionText',
    'accomplishments',
    'age',
    'addComplementaryActions'
]);
export const XIcon = defineContainer('x-icon', defineXIcon);
//# sourceMappingURL=stencil-generated.js.map