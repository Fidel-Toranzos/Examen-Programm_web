import { FormGroup } from '@angular/forms';

export function MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchigControl = formGroup.controls[matchingControlName]

        if(matchigControl.errors && !matchigControl.errors.mustMatch) {
            return;
        }

        if(control.value != matchigControl.value) {
            matchigControl.setErrors({mustmuch: true});
        }
        else{
            matchigControl.setErrors(null);
        }
    }
}