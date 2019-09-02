import { NgModule } from "@angular/core";
import {
  MatToolbarModule,
  MatCardModule,
  MatButtonModule,
  MatDialogModule
} from "@angular/material";
@NgModule({
  imports: [MatToolbarModule, MatCardModule, MatButtonModule, MatDialogModule],
  exports: [MatToolbarModule, MatCardModule, MatButtonModule, MatDialogModule]
})
export class MatModule {}
