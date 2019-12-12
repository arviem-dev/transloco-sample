import { selectIsLoggedIn, AuthService } from '@arviem/acm/feature-auth';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { getTranslocoTestingModule } from '@arviem/shared/util-i18n/test';
import { NavbarComponent } from './navbar.component';
import { IgxListModule, IgxNavbarModule, IgxSelectModule, IgxIconModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslocoService } from '@ngneat/transloco';
import { of } from 'rxjs';

class MockAuthService {
  loggedIn = true;
}

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let translocoService: TranslocoService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent],

      imports: [
        BrowserAnimationsModule,
        FormsModule,
        RouterTestingModule,
        getTranslocoTestingModule(),
        IgxSelectModule,
        IgxIconModule,
        IgxNavbarModule,
        IgxListModule
      ],
      providers: [
        { provide: AuthService, useClass: MockAuthService },
        {
          provide: TranslocoService,
          useValue: {
            config: { reRenderOnLangChange: true },
            setActiveLang: jest.fn(),
            langChanges$: of()
          }
        },
        provideMockStore({
          selectors: [
            {
              selector: selectIsLoggedIn,
              value: true
            }
          ]
        })
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    translocoService = TestBed.get(TranslocoService);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  test('changingLanguage change the active language.', () => {
    const lang = 'es';
    const testEvent = {
      target: {
        attributes: {
          value: {
            value: lang
          }
        }
      }
    };

    component.changingLanguage(testEvent);

    expect(translocoService.setActiveLang).toBeCalledWith(lang);
  });
});
