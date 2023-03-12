import { NgModule } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CreateComponent } from './create/create.component';
import { SharedModule } from '@shared';
import { DynamicFormQuestionComponent } from './create/dynamic-form-question.component';
import { DynamicFormComponent } from './create/dynamic-form.component';
import { QuestionService } from './create/question.service';

const routes: Routes = [{ path: 'create', component: CreateComponent }];

@NgModule({
  declarations: [
    CreateComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [FormBuilder, QuestionService],
})
export class CollectionModule {}
