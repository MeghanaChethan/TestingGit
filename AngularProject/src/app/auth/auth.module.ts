import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatDialogModule, MatFormFieldModule, MatInputModule, MatMenuModule, MatPaginatorModule, MatSelectModule, MatSlideToggleModule, MatSortModule, MatTableModule } from '@angular/material';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { FooterModule } from '../footer/footer.module';

const Auth = [
  { path: '', component: AuthComponent, pathMatch: "full" },
];

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(Auth),
    FormsModule, ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    MatDialogModule,
    MatSelectModule,
    NgxMatSelectSearchModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    FooterModule,
    MatSortModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatDialogModule

  ]
})
export class AuthModule { }
