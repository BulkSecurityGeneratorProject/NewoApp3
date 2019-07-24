/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { NewoApp3TestModule } from '../../../test.module';
import { TipoEspacioDeleteDialogComponent } from 'app/entities/tipo-espacio/tipo-espacio-delete-dialog.component';
import { TipoEspacioService } from 'app/entities/tipo-espacio/tipo-espacio.service';

describe('Component Tests', () => {
  describe('TipoEspacio Management Delete Component', () => {
    let comp: TipoEspacioDeleteDialogComponent;
    let fixture: ComponentFixture<TipoEspacioDeleteDialogComponent>;
    let service: TipoEspacioService;
    let mockEventManager: any;
    let mockActiveModal: any;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [NewoApp3TestModule],
        declarations: [TipoEspacioDeleteDialogComponent]
      })
        .overrideTemplate(TipoEspacioDeleteDialogComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(TipoEspacioDeleteDialogComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(TipoEspacioService);
      mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
      mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
    });

    describe('confirmDelete', () => {
      it('Should call delete service on confirmDelete', inject(
        [],
        fakeAsync(() => {
          // GIVEN
          spyOn(service, 'delete').and.returnValue(of({}));

          // WHEN
          comp.confirmDelete(123);
          tick();

          // THEN
          expect(service.delete).toHaveBeenCalledWith(123);
          expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
          expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
        })
      ));
    });
  });
});
