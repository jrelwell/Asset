import { Component } from 'angular2/core';
import { FORM_DIRECTIVES } from 'angular2/common';

@Component({
   directives: [FORM_DIRECTIVES],
   template:    `
                <div class="fluid-container">
                    <div class="row">
                        <div class="col-md-10 col-md-offset-1">
                            <h2>Add Location</h2>
                            <form #loc="ngForm" (ngSubmit)="onSubmit(loc.value)" class="form-horizontal">
                                <div class="form-group">
                                    <label for="name" class="col-md-2 control-label">Location Name:</label>
                                    <div class="col-md-4">
                                        <input type="text" class="form-control" id="name" ngControl="name">
                                    </div>
                                    <label for="zip" class="col-md-2 control-label">Zip Code:</label>
                                    <div class="col-md-4">
                                        <input type="text" class="form-control" id="zip" ngControl="zip">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="address" class="col-md-2 control-label">Street Address:</label>
                                    <div class="col-md-4">
                                        <input type="text" class="form-control" id="address" ngControl="address">
                                    </div>
                                    <label for="customer" class="col-md-2 control-label">Customer:</label>
                                    <div class="col-md-4">
                                        <input type="text" class="form-control" id="customer" ngControl="customer">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="city" class="col-md-2 control-label">City:</label>
                                    <div class="col-md-4">
                                        <input type="text" class="form-control" id="city" ngControl="city">
                                    </div>
                                    <label for="date" class="col-md-2 control-label">Date Added:</label>
                                    <div class="col-md-4">
                                        <input type="text" class="form-control" id="date" ngControl="date">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="state" class="col-md-2 control-label">State:</label>
                                    <div class="col-md-4">
                                        <input type="text" class="form-control" id="state" ngControl="state">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="col-md-4 col-md-offset-8">
                                        <button type="submit" class="btn btn-block">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="fluid-container">
                    <div class="row">
                        <div class="col-md-10 col-md-offset-1">
                            <h2>Location List</h2>
                        </div>
                    </div>
                </div>
                ` 
})

export class AddLocation  {
    onSubmit(form)  {
        console.log(form);
    }
 }