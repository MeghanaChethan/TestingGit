import { NgModule } from '@angular/core';
// import { FormControl } from '@angular/forms';
import { MatButtonModule, MatButtonToggleModule, MatCardModule, MatDialogModule, MatDividerModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatProgressSpinnerModule, MatSidenavModule, MatTableModule, MatToolbarModule } from '@angular/material';
import {MatBadgeModule} from '@angular/material/badge';
import { CommonModule } from '@angular/common';



const material = [
  MatButtonModule,
  MatButtonToggleModule,
  MatProgressSpinnerModule,
  MatBadgeModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatIconModule,
  MatDividerModule,
  CommonModule,
  MatCardModule,
  MatInputModule,
  MatDialogModule,
  MatTableModule
  
];

@NgModule({
  imports: [material],
  exports:[material]
})
export class MaterialModule { 
  // fontStyleControl = new FormControl();
  // fontStyle?: string;
}
