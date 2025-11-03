import { createServer, Model, belongsTo } from "miragejs";
import { jobList, jobDetails, jobApplications, assessments } from "./job";

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,

    models: {
        job: Model.extend({
            jobDetail: belongsTo(),
            jobApplication: belongsTo(),
            assessment: belongsTo(),
        }),

        jobDetail: Model.extend({
            job: belongsTo(),
        }),

        jobApplication: Model.extend({
            job: belongsTo(),
        }),

        assessment: Model.extend({
            job: belongsTo(),
        }),
    },

    seeds(server) {
        jobList.forEach((job) => server.create("job", job));
        jobDetails.forEach((detail) => server.create("jobDetail", detail));
        jobApplications.forEach((app) =>
            server.create("jobApplication", app)
        );
        assessments.forEach((asm) => server.create("assessment", asm));
    },

    routes() {
        this.namespace = "api";

        this.get("/jobs", (schema) => schema.jobs.all());
        this.get("/jobs/:jobID", (schema, request) => {
            let jobID = parseInt(request.params.jobID);

            let job = schema.jobs.findBy({ jobID });
            let jobDetail = schema.jobDetails.findBy({ jobID });

            if (!job) {
            return { error: `Job with ID ${jobID} not found` };
            }

            return {
            job: job.attrs,
            jobDetail: jobDetail ? jobDetail.attrs : null,
            };
        });
    },
  });

  return server;
}
