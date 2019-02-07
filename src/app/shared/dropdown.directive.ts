import { HostListener, HostBinding, Directive } from '@angular/core';

@Directive({
    selector: '[appDropDown]',
    exportAs: 'appDropDown'
})
export class DropDownDirective {
    @HostBinding('class.show') isOpen = false;
    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }
}
