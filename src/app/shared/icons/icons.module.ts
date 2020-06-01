import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatherModule } from 'angular-feather';
import { Camera, Heart, Github, PlusCircle, Layers, FileText, BarChart2, Users, Home, ShoppingCart, File } from 'angular-feather/icons';

const icons = {
  Camera,
  Heart,
  Github,
  PlusCircle,
  Layers,
  FileText,
  BarChart2,
  Users,
  ShoppingCart,
  Home,
  File
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeatherModule.pick(icons)
  ],
  exports: [FeatherModule]
})
export class IconsModule { }
