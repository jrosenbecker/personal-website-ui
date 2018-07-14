import { Component } from '@angular/core';
import * as externalLinksConstants from '../../constants/externalLinks';


@Component({
    selector: 'app-contact',
    templateUrl: 'contact.component.html',
    styleUrls: ['contact.component.css']
})
export class ContactComponent {
    private externalLinks = externalLinksConstants;
}
