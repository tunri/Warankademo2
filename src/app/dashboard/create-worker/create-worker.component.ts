import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CommonsService, DistrictService } from '@app/core/services';
import { JobsService } from '@app/core/services/jobs.service';
import { Job, District } from '@app/core/models';
import RecommendedUser from '@app/core/models/model.recommendedUser';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import RecommendedUserBuilder from '@app/core/models/model.recommendUserBuilder';

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
        // private recommendedService: RecomendadoService,
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
            nombres: [''],
            apellidos: [''],
            telefono: ['', Validators.compose([, Validators.pattern(this.regexStr)])],
            direccion: [''],
            oficio: [''],
            distrito: [''],
            descripcion: [''],
            oficio_id: [''],
            distrito_id: [''],
            usuario_perfil_id: [1],
            foto: ['']
        });
    }

    // RegisterRecommended
    newRecommended(): void {
        this.submitted = true;
        this.errorAuth = false;
        // if (this.form.valid) {
        // this.loader = true;
        const { nombres, apellidos, telefono, distrito, direccion, oficio, descripcion, foto } = this.form.value;



        // USO DE BUILDER
        const userBuilder: RecommendedUserBuilder = new RecommendedUserBuilder()
        const userRecomendado: RecommendedUser = userBuilder.setFirstName(nombres)
            .setLastName(apellidos)
            .setPhone(telefono)
            .setDistrict(distrito)
            .setAddress(direccion)
            .setDescription(descripcion)
            .setPicture(foto)
            .setOffice(oficio)
            .build();



        // console.log(userRecomendado);

        this.save(userRecomendado);

        // this.form.reset();

        this.router.navigateByUrl('/recommended-workers');

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
        return list.filter(item => item && item.getNombre().toLowerCase().indexOf(name.toLowerCase()) > -1);
    }
    onChange(newValue: any | District | Job, list: Array<Job | District>, listFilter: string) {

        let value = undefined;
        let nameProperty = (listFilter === 'filterDistricts') ? 'distrito_id' : 'oficio_id';

        console.log(newValue);

        if (newValue && typeof newValue === 'object') {
            value = newValue.getId();
            newValue = newValue.getNombre()
        }

        if (newValue) {
            this[listFilter] = this.filter(newValue, list);
            //update property
            this.form.get(nameProperty).setValue(value);
        }
    }

    displayFn(item?: any): string | undefined {
        return item ? item.nombre : undefined;
    }
    selectedJob(item: any) {
        this.form.patchValue({
            oficio_id: item.option.value.id
        })
    }
    selectedDistrict(item: any) {
        const _district: District = item.option.value;
        this.form.patchValue({
            distrito_id: _district.getId()
        })
    }

    controlErrorAutoComplete(propId, prop) {
        return (this.form.get(propId).invalid || this.form.get(prop).invalid) && (this.form.get(prop).touched || this.form.get(prop).dirty);
    }

    upload() {
        const files = this.file.nativeElement.files;
        if (files && files.length) {
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
    save(user): void {

        let users: any = JSON.parse(window.localStorage.getItem('users')) || [];
        users.push(user);

        window.localStorage.setItem('users', JSON.stringify(users));

    }
}
