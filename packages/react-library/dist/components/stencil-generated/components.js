'use client';
import { createComponent } from '@stencil/react-output-target/runtime';
import React from 'react';
import { AnotherOne as AnotherOneElement, defineCustomElement as defineAnotherOne } from "stencil-library/dist/components/another-one.js";
import { ButtonEvent as ButtonEventElement, defineCustomElement as defineButtonEvent } from "stencil-library/dist/components/button-event.js";
import { CustomHello as CustomHelloElement, defineCustomElement as defineCustomHello } from "stencil-library/dist/components/custom-hello.js";
import { HardcodedValues as HardcodedValuesElement, defineCustomElement as defineHardcodedValues } from "stencil-library/dist/components/hardcoded-values.js";
import { MyComponent as MyComponentElement, defineCustomElement as defineMyComponent } from "stencil-library/dist/components/my-component.js";
import { StatusBadge as StatusBadgeElement, defineCustomElement as defineStatusBadge } from "stencil-library/dist/components/status-badge.js";
import { TemplateCard as TemplateCardElement, defineCustomElement as defineTemplateCard } from "stencil-library/dist/components/template-card.js";
import { XIcon as XIconElement, defineCustomElement as defineXIcon } from "stencil-library/dist/components/x-icon.js";
export const AnotherOne = createComponent({
    tagName: 'another-one',
    elementClass: AnotherOneElement,
    react: React,
    events: {},
    defineCustomElement: defineAnotherOne
});
export const ButtonEvent = createComponent({
    tagName: 'button-event',
    elementClass: ButtonEventElement,
    react: React,
    events: { onCountIncreased: 'countIncreased' },
    defineCustomElement: defineButtonEvent
});
export const CustomHello = createComponent({
    tagName: 'custom-hello',
    elementClass: CustomHelloElement,
    react: React,
    events: {},
    defineCustomElement: defineCustomHello
});
export const HardcodedValues = createComponent({
    tagName: 'hardcoded-values',
    elementClass: HardcodedValuesElement,
    react: React,
    events: {},
    defineCustomElement: defineHardcodedValues
});
export const MyComponent = createComponent({
    tagName: 'my-component',
    elementClass: MyComponentElement,
    react: React,
    events: {},
    defineCustomElement: defineMyComponent
});
export const StatusBadge = createComponent({
    tagName: 'status-badge',
    elementClass: StatusBadgeElement,
    react: React,
    events: {},
    defineCustomElement: defineStatusBadge
});
export const TemplateCard = createComponent({
    tagName: 'template-card',
    elementClass: TemplateCardElement,
    react: React,
    events: {},
    defineCustomElement: defineTemplateCard
});
export const XIcon = createComponent({
    tagName: 'x-icon',
    elementClass: XIconElement,
    react: React,
    events: {},
    defineCustomElement: defineXIcon
});
//# sourceMappingURL=components.js.map