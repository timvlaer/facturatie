import {
  TestComponentBuilder,
  describe,
  expect,
  injectAsync,
  it,
} from 'angular2/testing';
import {Component, View} from 'angular2/angular2';
import {DOM} from 'angular2/src/core/dom/dom_adapter';
import {HomeCmp} from './home';

export function main() {
  describe('Home component', () => {
    it('should work',
      injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        return tcb.overrideTemplate(TestComponent, '<div><home></home></div>')
          .createAsync(TestComponent)
          .then((rootTC) => {
            let homeDomEl = rootTC.debugElement.componentViewChildren[0].nativeElement;
            expect(DOM.querySelectorAll(homeDomEl, 'h2')[0].textContent).toEqual('Home!');
          });
      }));
  });
}

@Component({selector: 'test-cmp'})
@View({directives: [HomeCmp]})
class TestComponent {}
