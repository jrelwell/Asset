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
    var AddLocation;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            AddLocation = (function () {
                function AddLocation() {
                }
                AddLocation.prototype.onSubmit = function (form) {
                    console.log(form);
                };
                AddLocation = __decorate([
                    core_1.Component({
                        directives: [common_1.FORM_DIRECTIVES],
                        template: "\n                <div class=\"fluid-container\">\n                    <div class=\"row\">\n                        <div class=\"col-md-10 col-md-offset-1\">\n                            <h2>Add Location</h2>\n                            <form #loc=\"ngForm\" (ngSubmit)=\"onSubmit(loc.value)\" class=\"form-horizontal\">\n                                <div class=\"form-group\">\n                                    <label for=\"name\" class=\"col-md-2 control-label\">Location Name:</label>\n                                    <div class=\"col-md-4\">\n                                        <input type=\"text\" class=\"form-control\" id=\"name\" ngControl=\"name\">\n                                    </div>\n                                    <label for=\"zip\" class=\"col-md-2 control-label\">Zip Code:</label>\n                                    <div class=\"col-md-4\">\n                                        <input type=\"text\" class=\"form-control\" id=\"zip\" ngControl=\"zip\">\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label for=\"address\" class=\"col-md-2 control-label\">Street Address:</label>\n                                    <div class=\"col-md-4\">\n                                        <input type=\"text\" class=\"form-control\" id=\"address\" ngControl=\"address\">\n                                    </div>\n                                    <label for=\"customer\" class=\"col-md-2 control-label\">Customer:</label>\n                                    <div class=\"col-md-4\">\n                                        <input type=\"text\" class=\"form-control\" id=\"customer\" ngControl=\"customer\">\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label for=\"city\" class=\"col-md-2 control-label\">City:</label>\n                                    <div class=\"col-md-4\">\n                                        <input type=\"text\" class=\"form-control\" id=\"city\" ngControl=\"city\">\n                                    </div>\n                                    <label for=\"date\" class=\"col-md-2 control-label\">Date Added:</label>\n                                    <div class=\"col-md-4\">\n                                        <input type=\"text\" class=\"form-control\" id=\"date\" ngControl=\"date\">\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label for=\"state\" class=\"col-md-2 control-label\">State:</label>\n                                    <div class=\"col-md-4\">\n                                        <input type=\"text\" class=\"form-control\" id=\"state\" ngControl=\"state\">\n                                    </div>\n                                </div>\n                                <div class=\"form-group\">\n                                    <div class=\"col-md-4 col-md-offset-8\">\n                                        <button type=\"submit\" class=\"btn btn-block\">Submit</button>\n                                    </div>\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"fluid-container\">\n                    <div class=\"row\">\n                        <div class=\"col-md-10 col-md-offset-1\">\n                            <h2>Location List</h2>\n                        </div>\n                    </div>\n                </div>\n                "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AddLocation);
                return AddLocation;
            }());
            exports_1("AddLocation", AddLocation);
        }
    }
});
//# sourceMappingURL=location.component.js.map