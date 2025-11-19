/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import { defineContainer, type StencilVueComponent } from '@stencil/vue-output-target/runtime';

import type { JSX } from 'stencil-library';

import { defineCustomElement as defineAnotherOne } from 'stencil-library/components/another-one.js';
import { defineCustomElement as defineButtonEvent } from 'stencil-library/components/button-event.js';
import { defineCustomElement as defineCustomHello } from 'stencil-library/components/custom-hello.js';
import { defineCustomElement as defineHardcodedValues } from 'stencil-library/components/hardcoded-values.js';
import { defineCustomElement as defineMyComponent } from 'stencil-library/components/my-component.js';
import { defineCustomElement as defineStatusBadge } from 'stencil-library/components/status-badge.js';
import { defineCustomElement as defineTemplateCard } from 'stencil-library/components/template-card.js';
import { defineCustomElement as defineXIcon } from 'stencil-library/components/x-icon.js';


export const AnotherOne: StencilVueComponent<JSX.AnotherOne> = /*@__PURE__*/ defineContainer<JSX.AnotherOne>('another-one', defineAnotherOne);


export const ButtonEvent: StencilVueComponent<JSX.ButtonEvent> = /*@__PURE__*/ defineContainer<JSX.ButtonEvent>('button-event', defineButtonEvent, [
  'initialCount',
  'countIncreased'
], [
  'countIncreased'
]);


export const CustomHello: StencilVueComponent<JSX.CustomHello> = /*@__PURE__*/ defineContainer<JSX.CustomHello>('custom-hello', defineCustomHello, [
  'first',
  'middle',
  'last'
]);


export const HardcodedValues: StencilVueComponent<JSX.HardcodedValues> = /*@__PURE__*/ defineContainer<JSX.HardcodedValues>('hardcoded-values', defineHardcodedValues);


export const MyComponent: StencilVueComponent<JSX.MyComponent> = /*@__PURE__*/ defineContainer<JSX.MyComponent>('my-component', defineMyComponent, [
  'first',
  'middle',
  'last'
]);


export const StatusBadge: StencilVueComponent<JSX.StatusBadge> = /*@__PURE__*/ defineContainer<JSX.StatusBadge>('status-badge', defineStatusBadge, [
  'message',
  'status',
  'persistent',
  'autoRemove',
  'ttl'
]);


export const TemplateCard: StencilVueComponent<JSX.TemplateCard> = /*@__PURE__*/ defineContainer<JSX.TemplateCard>('template-card', defineTemplateCard, [
  'first',
  'last',
  'job',
  'descriptionText',
  'accomplishments',
  'age',
  'addComplementaryActions'
]);


export const XIcon: StencilVueComponent<JSX.XIcon> = /*@__PURE__*/ defineContainer<JSX.XIcon>('x-icon', defineXIcon);

