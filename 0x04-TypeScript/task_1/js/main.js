var Teacher = /** @class */ (function () {
    function Teacher(firstName, lastName, fullTimeEmployee, location, yearsOfExperience, additionalAttributes) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullTimeEmployee = fullTimeEmployee;
        this.location = location;
        if (yearsOfExperience !== undefined) {
            this.yearsOfExperience = yearsOfExperience;
        }
        if (additionalAttributes) {
            for (var key in additionalAttributes) {
                if (additionalAttributes.hasOwnProperty(key)) {
                    this[key] = additionalAttributes[key];
                }
            }
        }
    }
    return Teacher;
}());
