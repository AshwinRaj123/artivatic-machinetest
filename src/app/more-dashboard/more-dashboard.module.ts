import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentsComponent } from './payments/payments.component';
import { DirectoryComponent } from './directory/directory.component';
import { LibraryComponent } from './library/library.component';
import { HelpComponent } from './help/help.component';

@NgModule({
  declarations: [PaymentsComponent, DirectoryComponent, LibraryComponent, HelpComponent],
  imports: [
    CommonModule
  ]
})
export class MoreDashboardModule { }
