import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CommonsService, DistrictService } from '@app/core/services';
import { JobsService } from '@app/core/services/jobs.service';
import { Job, District } from '@app/core/models';
import { RecommendeService } from '@app/core/services/recommende.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'app-create-worker',
    templateUrl: './create-worker.component.html',
    styleUrls: ['./create-worker.component.scss'],
})
export class CreateWorkerComponent implements OnInit {
    @ViewChild('file') file;

    form: FormGroup;
    submitted: boolean = false;
    loader: boolean = false;
    errorAuth: boolean = false;
    regexStr = '[0-9]{9}';
    loaderImage: boolean = false;
    isUploaded: boolean = false;

    public jobs: Job[] = [];
    filterJobs: Job[] = [];

    public districts: District[] = [];
    filterDistricts: District[] = [];

    errorProperty: string = undefined;

    // uso de Singleton
    private districtService = DistrictService.getInstance();
    private jobService = JobsService.getInstance();

    constructor(
        private fb: FormBuilder,
        private commonService: CommonsService,
        private recommendedService: RecommendeService,
        private router: Router,
        public snackBar: MatSnackBar
    ) {
        this.buildForm();
    }

    ngOnInit() {
        this.getJobs();
        this.getDistricts();
    }

    buildForm() {
        this.form = this.fb.group({
            nombres: ['', Validators.required],
            apellidos: ['', Validators.required],
            telefono: ['', Validators.compose([Validators.required, Validators.pattern(this.regexStr)])],
            direccion: ['', Validators.required],
            oficio: ['', Validators.required],
            distrito: ['', Validators.required],
            descripcion: ['', Validators.required],
            oficio_id: ['', Validators.required],
            distrito_id: ['', Validators.required],
            usuario_perfil_id: [1],
            foto: ['']
        });
    }

    onSubmit(): void {
        this.submitted = true;
        this.errorAuth = false;
        if (this.form.valid) {
            this.loader = true;
            let body = this.form.value;
            delete body.distrito;
            delete body.oficio;
            //body.foto = 'incoming';
            this.recommendedService.create(body).subscribe(success => {
                this.snackBar.open('Recomendado Creado!!', '', {
                    duration: 2000,
                });
                this.router.navigateByUrl('/recommended-workers');
                this.loader = false;
            }, (error) => {
                if (error.status === 400) {
                    this.errorAuth = true;
                } else {
                    alert('Oops!, Ha ocurrido un error, intentelo en otro momento');
                }
                this.loader = false;
            });
        }
    }

    controlInput(input) {
        return this.commonService.validateInput(input, this.submitted);
    }

    getDistricts(): void {
        this.districtService.findAll().subscribe(districts => this.filterDistricts = this.districts = districts);
    }

    getJobs(): void {
        this.jobService.findAll().subscribe(jobs => this.filterJobs = this.jobs = jobs);
    }
    private filter(name: string, list: Array<Job | District>): Array<Job | District> {
        return list.filter(item => item.getNombre().toLowerCase().indexOf(name.toLowerCase()) > -1);
    }
    onChange(newValue: any | Job, list: Array<Job | District>, listFilter: string) {
        let value = undefined;
        let nameProperty = (listFilter === 'filterDistricts') ? 'distrito_id' : 'oficio_id';
        if (typeof newValue === 'object') {
            value = newValue[nameProperty];
            newValue = newValue.nombre
        }
        this[listFilter] = this.filter(newValue, list);
        //update property
        this.form.get(nameProperty).setValue(value);
    }
    displayFn(item?: any): string | undefined {
        return item ? item.nombre : undefined;
    }
    selectedJob(item: any) {
        this.form.patchValue({
            oficio_id: item.option.value.oficio_id
        })
    }
    selectedDistrict(item: any) {
        this.form.patchValue({
            distrito_id: item.option.value.distrito_id
        })
    }

    controlErrorAutoComplete(propId, prop) {
        return (this.form.get(propId).invalid || this.form.get(prop).invalid) && (this.form.get(prop).touched || this.form.get(prop).dirty);
    }

    upload() {
        const files = this.file.nativeElement.files;
        if (files.length) {
            let file = files[0];
            this.isUploaded = true;
            this.loaderImage = true;
            // this.recommendedService.uploadPicture({ upload: file })
            //     .subscribe(fileUpladed => {
            //         this.form.patchValue({ foto: fileUpladed.foto });
            //         this.loaderImage = false;
            //     })
        }
    }
    getSanitizaUrl(property) {
        return `url('${property.value}')`;
    }
}
