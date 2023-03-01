export interface Contact {
    name: string;
    tel: string;
    email: string;
}

export interface ResponseContact {
    subject_matter: string;
    comment: string;
    contact: Contact;
}