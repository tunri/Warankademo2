import { District } from "./model.district";
import { Job } from "./model.job";

export default class SearchRecommended {

    private districts: District[];
    private jobs: Job[];

    constructor(districts: District[], jobs: Job[]) {
        this.districts = districts || [];
        this.jobs = jobs || [];
    }

    addDistrict(district: District) {
        this.districts.push(district);
    }

    removeDistrict(district: District) {
        this.districts = this.districts.filter((item: District) => (item.getId() !== district.getId()));
    }

    addJob(job: Job) {
        this.jobs.push(job);
    }

    removeJob(job: Job) {
        this.jobs = this.jobs.filter((item: Job) => (item.getId() !== job.getId()));
    }

    getDistricts(): District[] {
        return this.districts;
    }

    getJobs(): Job[] {
        return this.jobs
    }

}
