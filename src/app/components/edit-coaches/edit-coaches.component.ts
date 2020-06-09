import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import {
  SectionMeta,
  SectionContent
} from '../../interfaces/section.interface';
import { QueriesService } from '../../services/queries.service';
import { AuthService } from '../../services/auth.service';
import { InfoSectionForUpdate } from '../../interfaces/section.interface';
import { Subscription } from 'rxjs';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-edit-coaches',
  templateUrl: './edit-coaches.component.html',
  styleUrls: ['./edit-coaches.component.scss']
})
export class EditCoachesComponent implements OnInit, OnDestroy {
  @Input() public meta: SectionMeta;
  @Input() public content: SectionContent[];

  private updateSectionSubscribe: Subscription;
  private formValues: InfoSectionForUpdate;
  public form: FormGroup;

  constructor(
    private queriesService: QueriesService,
    private authService: AuthService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      meta: new FormGroup({
        title: new FormControl(this.meta.title),
        description: new FormControl(this.meta.description)
      }),
      content: this.addFormControls()
    });
  }

  ngOnDestroy(): void {
    // this.updateSectionSubscribe.unsubscribe();
  }

  addFormControls(): FormArray {
    const content: FormArray = new FormArray([]);
    this.content.forEach(el => {
      content.push(
        new FormGroup({
          style: new FormControl(el.style),
          name: new FormControl(el.name),
          direction: new FormControl(el.direction),
          workExperience: new FormControl(el.workExperience),
          teachExperience: new FormControl(el.teachExperience),
          url: new FormControl(el.url)
        })
      );
    });
    return content;
  }

  get formData(): FormArray {
    return <FormArray>this.form.get('content');
  }

  submit(id: string): void {
    this.formValues = this.form.value;
    const token = this.authService.token;
    this.updateSectionSubscribe = <Subscription>(
      this.queriesService
        .updateSection('coach', this.formValues, token)
        .subscribe(
          () => {
            this.modalService.close(id);
            window.location.reload();
          },
          error => {
            console.log(error);
          }
        )
    );
  }
}
