class Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
  
    constructor(
      firstName: string,
      lastName: string,
      fullTimeEmployee: boolean,
      location: string,
      yearsOfExperience?: number,
      additionalAttributes?: { [key: string]: any }
    ) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.fullTimeEmployee = fullTimeEmployee;
      this.location = location;
      if (yearsOfExperience !== undefined) {
        this.yearsOfExperience = yearsOfExperience;
      }
  
      if (additionalAttributes) {
        for (const key in additionalAttributes) {
          if (additionalAttributes.hasOwnProperty(key)) {
            this[key] = additionalAttributes[key];
          }
        }
      }
    }
  }