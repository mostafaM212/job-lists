export interface Job {
       applications: any[],
       applied: boolean,
       apply: any[],
       attachments: any[],
       basic_salary_from: number,
       basic_salary_to: number,
       cover: string
       created_at: Date,
       date_closed: Date | null
       date_published: Date | null
       date_rejected: Date | null
       description: Date | null
       duration_start: any
       duration_end: any
       has_job_alert: boolean
       id: string,
       incremental_id: number
       industries: any[],
       job_alert: any,
       job_duration_end: any
       job_duration_start: any
       job_locations: any[]
       jobable_id: string,
       location: string,
       minimum_years_of_experience: number
       number_of_vacancies: number
       page: any,
       preferred_applicant_countries_sources: any[]
       priority: string,
       salary_from: number
       salary_to: number
       saved: boolean
       saved_job: any
       tags: any[]
       skills: any
       title: string
       type: string
       updated_at: Date
       work_space_meta_data: any
}
