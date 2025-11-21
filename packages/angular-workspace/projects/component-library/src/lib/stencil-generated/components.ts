/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Output, NgZone } from '@angular/core';

import { ProxyCmp } from './angular-component-lib/utils';

import { Components } from 'stencil-library/loader';


@ProxyCmp({
})
@Component({
  selector: 'another-one',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: false
})
export class AnotherOne {
  protected el: HTMLAnotherOneElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AnotherOne extends Components.AnotherOne {}


@ProxyCmp({
  inputs: ['initialCount']
})
@Component({
  selector: 'button-event',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['initialCount'],
  outputs: ['countIncreased'],
  standalone: false
})
export class ButtonEvent {
  protected el: HTMLButtonEventElement;
  @Output() countIncreased = new EventEmitter<CustomEvent<number>>();
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface ButtonEvent extends Components.ButtonEvent {

  countIncreased: EventEmitter<CustomEvent<number>>;
}


@ProxyCmp({
  inputs: ['first', 'last', 'middle']
})
@Component({
  selector: 'custom-hello',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['first', 'last', 'middle'],
  standalone: false
})
export class CustomHello {
  protected el: HTMLCustomHelloElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface CustomHello extends Components.CustomHello {}


@ProxyCmp({
})
@Component({
  selector: 'hardcoded-values',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: false
})
export class HardcodedValues {
  protected el: HTMLHardcodedValuesElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface HardcodedValues extends Components.HardcodedValues {}


@ProxyCmp({
  inputs: ['first', 'last', 'middle']
})
@Component({
  selector: 'my-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['first', 'last', 'middle'],
  standalone: false
})
export class MyComponent {
  protected el: HTMLMyComponentElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface MyComponent extends Components.MyComponent {}


@ProxyCmp({
  inputs: ['company', 'country', 'description', 'diameterFeet', 'diameterMeters', 'first_flight', 'heightFeet', 'heightMeters', 'image', 'massKg', 'massLb', 'name', 'payload_weights', 'stages', 'type']
})
@Component({
  selector: 'rocket-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['company', 'country', 'description', 'diameterFeet', 'diameterMeters', 'first_flight', 'heightFeet', 'heightMeters', 'image', 'massKg', 'massLb', 'name', 'payload_weights', 'stages', 'type'],
  standalone: false
})
export class RocketCard {
  protected el: HTMLRocketCardElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RocketCard extends Components.RocketCard {}


@ProxyCmp({
  inputs: ['autoRemove', 'message', 'persistent', 'status', 'ttl']
})
@Component({
  selector: 'status-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['autoRemove', 'message', 'persistent', 'status', 'ttl'],
  standalone: false
})
export class StatusBadge {
  protected el: HTMLStatusBadgeElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface StatusBadge extends Components.StatusBadge {}


@ProxyCmp({
  inputs: ['accomplishments', 'addComplementaryActions', 'age', 'descriptionText', 'first', 'job', 'last']
})
@Component({
  selector: 'template-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['accomplishments', 'addComplementaryActions', 'age', 'descriptionText', 'first', 'job', 'last'],
  standalone: false
})
export class TemplateCard {
  protected el: HTMLTemplateCardElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface TemplateCard extends Components.TemplateCard {}


@ProxyCmp({
  inputs: ['maxLength', 'text']
})
@Component({
  selector: 'text-snippet-expand',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['maxLength', 'text'],
  standalone: false
})
export class TextSnippetExpand {
  protected el: HTMLTextSnippetExpandElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface TextSnippetExpand extends Components.TextSnippetExpand {}


@ProxyCmp({
})
@Component({
  selector: 'x-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
  standalone: false
})
export class XIcon {
  protected el: HTMLXIconElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface XIcon extends Components.XIcon {}


