System.register(['angular2/core', 'angular2/common'], function(exports_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1;
    var Defective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            Defective = (function () {
                function Defective() {
                }
                Defective.prototype.onSubmit = function (form) {
                    console.log(form);
                };
                Defective = __decorate([
                    core_1.Component({
                        directives: [common_1.FORM_DIRECTIVES],
                        template: "\n                <div class=\"fluid-container\">\n                    <div class=\"row\">\n                        <div class=\"col-md-10 col-md-offset-1\">\n                            <h2>Add Defective Item</h2>\n                            <form #rma=\"ngForm\" (ngSubmit)=\"onSubmit(rma.value)\" class=\"form-horizontal\">\n                                <div class=\"form-group\">\n                                    <label for=\"name\" class=\"col-md-2 control-label\"> Product Name:</label>\n                                    <div class=\"col-md-4\">\n                                        <input type=\"text\" class=\"form-control\" id=\"name\" ngControl=\"name\">\n                                    </div>\n                                    <label for=\"customer\" class=\"col-md-2 control-label\">Customer:</label>\n                                    <div class=\"col-md-4\">\n                                        <input type=\"text\" class=\"form-control\" id=\"customer\" ngControl=\"customer\">\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label for=\"model\" class=\"col-md-2 control-label\">Model #:</label>\n                                    <div class=\"col-md-4\">\n                                        <input type=\"text\" class=\"form-control\" id=\"model\" ngControl=\"model\">\n                                    </div>\n                                    <label for=\"category\" class=\"col-md-2 control-label\">Category:</label>\n                                    <div class=\"col-md-4\">\n                                        <input type=\"text\" class=\"form-control\" id=\"category\" ngControl=\"category\">\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label for=\"brand\" class=\"col-md-2 control-label\">Brand:</label>\n                                    <div class=\"col-md-4\">\n                                        <input type=\"text\" class=\"form-control\" id=\"brand\" ngControl=\"brand\">\n                                    </div>\n                                    <label for=\"date\" class=\"col-md-2 control-label\">Date Added:</label>\n                                    <div class=\"col-md-4\">\n                                        <input type=\"date\" class=\"form-control\" id=\"date\" ngControl=\"date\">\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label for=\"warranty\" class=\"col-md-2 control-label\">Warranty Date:</label>\n                                    <div class=\"col-md-4\">\n                                        <input type=\"date\" class=\"form-control\" id=\"warranty\" ngControl=\"warranty\">\n                                    </div>\n                                    <label for=\"serial\" class=\"col-md-2 control-label\">Serial #:</label>\n                                    <div class=\"col-md-4\">\n                                        <input type=\"text\" class=\"form-control\" id=\"serial\" ngControl=\"serial\">\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label for=\"reason\" class=\"col-md-2 control-label\">Reason:</label>\n                                    <div class=\"col-md-4\">\n                                        <textarea class=\"form-control\" id=\"reason\" ngControl=\"reason\"></textarea>\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <div class=\"col-md-4 col-md-offset-8\">\n                                        <button type=\"submit\" class=\"btn btn-block\">Submit</button>\n                                    </div>\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"fluid-container\">\n                    <div class=\"row\">\n                        <div class=\"col-md-10 col-md-offset-1\">\n                            <h2>RMA List</h2>\n                        </div>\n                    </div>\n                </div>\n                "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Defective);
                return Defective;
            }());
            exports_1("Defective", Defective);
        }
    }
});
//# sourceMappingURL=rma.component.js.map