import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { async, ComponentFixture, ComponentFixtureAutoDetect, fakeAsync, TestBed, tick } from '@angular/core/testing';




describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[NoopAnimationsModule, ReactiveFormsModule, FormsModule],
      providers:[{provide: ComponentFixtureAutoDetect, useValue: true
      }]
    })
    .compileComponents();
  }));



  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Click al Login', fakeAsync(() => {
    spyOn(component, 'onLogin');
    let val = fixture.debugElement.nativeElement.querySelector('button');
    val.click();
    tick();
    expect(component.onLogin).toHaveBeenCalled();
  }));

  it('Login', () => {
    component.user.nombre = 'admin';
    component.user.password = 'admin';
    component.onLogin();
    expect(component.texto).toEqual('Bienvenido');
  });
});
