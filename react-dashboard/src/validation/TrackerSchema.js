import * as yup from 'yup';

export const TrackerSchema = yup.object({
    Sprint: yup
    .string()
    .required("*Field is required"),
    SprintWeek: yup.string().required("*Field is required"),
    TicketType: yup.string().required("*Field is required"),
    ParentTicket: yup.string().required("*Field is required"),
    TicketNo: yup.string().required("*Field is required"),
    EffortHours: yup.string().required("*Field is required"),
    Status: yup.string().required("*Field is required"),
    Comments: yup.string().required("*Field is required")
});