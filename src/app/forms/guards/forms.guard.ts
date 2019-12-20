import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TemplateFormsComponent } from '../template-forms/template-forms.component';

@Injectable({
  providedIn: 'root'
})
export class FormsGuard implements CanDeactivate<TemplateFormsComponent> {
  canDeactivate(component: TemplateFormsComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(currentRoute.paramMap.get('id'))
    return component.isSubmitted;
  }

}
