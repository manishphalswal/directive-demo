import { CustomDirHostComponent } from './components/custom-dir-host/custom-dir-host.component';
import { AttrDirComponentComponent } from './components/attr-dir-component/attr-dir-component.component';
import { StrDirComponentComponent } from './components/str-dir-component/str-dir-component.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "strDir", component: StrDirComponentComponent},
  {path: "attrDir", component: AttrDirComponentComponent},
  {path: "customDirHost", component: CustomDirHostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
