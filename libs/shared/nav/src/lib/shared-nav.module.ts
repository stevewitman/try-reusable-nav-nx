import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedMaterialModule } from '@reusable-nav/shared/material'
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [SidenavComponent],
  imports: [CommonModule, SharedMaterialModule],
  exports: [SidenavComponent],
})
export class SharedNavModule {}
