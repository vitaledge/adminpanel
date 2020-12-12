import {
  NbActionsModule,
  NbButtonModule,
 
  NbCheckboxModule,
  NbDatepickerModule, 
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from '@nebular/theme';
import {MatTableModule} from '@angular/material/table';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner"
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { TransactionComponent } from './transaction.component';
 
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
 
import { RouterModule } from '@angular/router';


@NgModule({ 
  declarations: [TransactionComponent],
  imports: [
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    NbActionsModule,
    NbButtonModule,
    NbCheckboxModule,
    NbDatepickerModule, 
    NbRadioModule,
    NbSelectModule,
    NbUserModule,
    CommonModule,
    NbCardModule,
    NbIconModule,
    NbInputModule,
    NbTreeGridModule,
    Ng2SmartTableModule,
    ThemeModule,
    RouterModule
  ]
})
export class TransactionModule { }

