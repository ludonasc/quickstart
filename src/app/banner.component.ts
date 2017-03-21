import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'banner',
    template: `<h1>Hello {{name}}</h1>`,
})
export class BannerComponent  { name = 'Angular'; }