import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
        <div class="example-config">
            <input type="checkbox" kendoCheckBox id="disabled" [(ngModel)]="isDisabled" />
            <label class="k-checkbox-label" for="disabled">Disabled</label>
        </div>
        <kendo-label class="k-form" text="Name">
            <kendo-textbox [readonly]="true" style="background-color:rgba(0,0,0,0.1)" [style.width.px]="300" [disabled]="isDisabled" placeholder="markus.mustermann@mail.com">
            <ng-template kendoTextBoxSuffixTemplate>
          <button kendoButton onclick="alert('tada')" icon="edit"></button>
        </ng-template>
        </kendo-textbox>
        </kendo-label> 
    `,
})
export class AppComponent {
  public isDisabled = false;
}
