import { NgModule } from "@angular/core";
import {
  MatToolbarModule,
  MatCardModule,
  MatButtonModule,
  MatDialogModule,
  MatInputModule
} from "@angular/material";
@NgModule({
  imports: [
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule
  ],
  exports: [
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class MatModule {}
