import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
    imports: [MatButtonModule, MatInputModule, MatTableModule, MatExpansionModule],
    exports: [MatButtonModule, MatInputModule, MatTableModule, MatExpansionModule]
})
export class MaterialModule { }