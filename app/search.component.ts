import { Component } from 'angular2/core';
import { FORM_DIRECTIVES } from 'angular2/common';

@Component({
   directives: [FORM_DIRECTIVES],
   template:    `
                <div class="fluid-container">
                    <div class="row">
                        <div class="col-md-10 col-md-offset-1">
                            <h2>Search Entities</h2>
                            <form #search="ngForm" (ngSubmit)="onSubmit(search.value)" class="form-horizontal">
                                <div class="form-group">
                                    <label for="customer" class="col-md-2 control-label"> Customer:</label>
                                    <div class="col-md-4">
                                        <input type="text" class="form-control" id="customer" ngControl="customer">
                                    </div>
                                    <label for="location" class="col-md-2 control-label">Location:</label>
                                    <div class="col-md-4">
                                        <input type="text" class="form-control" id="location" ngControl="location">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="project" class="col-md-2 control-label">Project:</label>
                                    <div class="col-md-4">
                                        <input type="text" class="form-control" id="description" ngControl="project">
                                    </div>
                                    <label for="date" class="col-md-2 control-label">Date Added:</label>
                                    <div class="col-md-4">
                                        <input type="date" class="form-control" id="date" ngControl="date">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="product" class="col-md-2 control-label">Product:</label>
                                    <div class="col-md-4">
                                        <input type="text" class="form-control" id="product" ngControl="product">
                                    </div>
                                    <label for="serial" class="col-md-2 control-label">Serial #:</label>
                                    <div class="col-md-4">
                                        <input type="text" class="form-control" id="serial" ngControl="serial">
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
                            <h2>Search List</h2>
                        </div>
                    </div>
                </div>
                ` 
})

export class Search  {
    onSubmit(form)  {
        console.log(form);
    }
 }