import { Component } from 'angular2/core';
import { FORM_DIRECTIVES } from 'angular2/common';

@Component({
   directives: [FORM_DIRECTIVES],
   template:    `
                <div class="fluid-container">
                    <div class="row">
                        <div class="col-md-10 col-md-offset-1">
                            <h2>Add Products</h2>
                            <form #prod="ngForm" (ngSubmit)="onSubmit(prod.value)" class="form-horizontal">
                                <div class="form-group">
                                    <label for="name" class="col-md-2 control-label">Product Name:</label>
                                    <div class="col-md-4">
                                        <input type="text" class="form-control" id="name" ngControl="name">
                                    </div>
                                    <label for="customer" class="col-md-2 control-label">Customer:</label>
                                    <div class="col-md-4">
                                        <input type="text" class="form-control" id="customer" ngControl="customer">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="model" class="col-md-2 control-label">Model #:</label>
                                    <div class="col-md-4">
                                        <input type="text" class="form-control" id="model" ngControl="model">
                                    </div>
                                    <label for="category" class="col-md-2 control-label">Category:</label>
                                    <div class="col-md-4">
                                        <input type="text" class="form-control" id="category" ngControl="category">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="brand" class="col-md-2 control-label">Brand:</label>
                                    <div class="col-md-4">
                                        <input type="text" class="form-control" id="brand" ngControl="brand">
                                    </div>
                                    <label for="date" class="col-md-2 control-label">Date Added:</label>
                                    <div class="col-md-4">
                                        <input type="text" class="form-control" id="date" ngControl="date">
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
                            <h2>Product List</h2>
                        </div>
                    </div>
                </div>
                ` 
})

export class AddProducts  {
    onSubmit(form)  {
        console.log(form);
    }
 }