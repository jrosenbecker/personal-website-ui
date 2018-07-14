import { Component } from '@angular/core';
import * as externalLinksConstants from '../constants/externalLinks';

@Component({
    selector: 'app-footer',
    templateUrl: 'footer.component.html',
    styleUrls: ['footer.component.css']
})
export class FooterComponent {
    externalLinks = externalLinksConstants;
}
