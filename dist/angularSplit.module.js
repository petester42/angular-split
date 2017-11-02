import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplitComponent } from './split.component';
import { SplitAreaDirective } from './splitArea.directive';
import { SplitGutterDirective } from './splitGutter.directive';
var AngularSplitModule = (function () {
    function AngularSplitModule() {
    }
    AngularSplitModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        SplitComponent,
                        SplitAreaDirective,
                        SplitGutterDirective
                    ],
                    exports: [
                        SplitComponent,
                        SplitAreaDirective,
                        SplitGutterDirective
                    ]
                },] },
    ];
    /** @nocollapse */
    AngularSplitModule.ctorParameters = function () { return []; };
    return AngularSplitModule;
}());
export { AngularSplitModule };
//# sourceMappingURL=angularSplit.module.js.map