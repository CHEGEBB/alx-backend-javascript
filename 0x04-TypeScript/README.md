# TypeScript Project

## Curriculum: Short Specializations

### Project: 0x04. TypeScript

---

### Resources

---

### Learning Objectives

By the end of this project, you should be able to explain:

1. Basic types in TypeScript
2. Interfaces, Classes, and functions
3. How to work with the DOM and TypeScript
4. Generic types
5. How to use namespaces
6. How to merge declarations
7. How to use an ambient Namespace to import an external library
8. Basic nominal typing with TypeScript

---

### Requirements

- **Allowed editors**: vi, vim, emacs, Visual Studio Code
- **File ending**: All files should end with a new line
- **Transpiling**: All files will be transpiled on Ubuntu 18.04
- **Testing**: Your TS scripts will be checked with jest (version 24.9.*)
- **README.md**: A README.md file, at the root of the folder of the project, is mandatory
- **File extension**: Use the `.ts` extension when possible
- **Compiler warnings/errors**: The TypeScript compiler should not show any warning or error when compiling your code

---

### Configuration Files

Use the provided configuration files for the following tasks:

- `package.json`
- `.eslintrc.js`
- `tsconfig.json`
- `webpack.config.js`

---

### Tasks

#### 0. Creating an Interface for a Student

- **Directory**: `task_0`
- **Files**: `task_0/js/main.ts`, `task_0/package.json`, `task_0/.eslintrc.js`, `task_0/tsconfig.json`, `task_0/webpack.config.js`
- **Description**:
  - Create an interface named `Student` with `firstName`, `lastName`, `age`, and `location`.
  - Create two students and an array `studentsList`.
  - Render a table using Vanilla JavaScript with rows for each student showing their first name and location.

#### 1. Let's Build a Teacher Interface

- **Directory**: `task_1`
- **Files**: `task_1/js/main.ts`, `task_1/webpack.config.js`, `task_1/tsconfig.json`, `task_1/package.json`
- **Description**:
  - Create a `Teacher` interface with attributes `firstName`, `lastName`, `fullTimeEmployee`, `yearsOfExperience`, and `location`.
  - Allow adding any additional attribute to the `Teacher` object.

#### 2. Extending the Teacher Class

- **Directory**: `task_1`
- **Files**: `task_1/js/main.ts`
- **Description**:
  - Create an interface `Directors` that extends `Teacher`.
  - Add `numberOfReports` attribute to `Directors`.

#### 3. Printing Teachers

- **Directory**: `task_1`
- **Files**: `task_1/js/main.ts`
- **Description**:
  - Create a function `printTeacher` that returns a formatted string.
  - Define an interface for `printTeacherFunction`.

#### 4. Writing a Class

- **Directory**: `task_1`
- **Files**: `task_1/js/main.ts`
- **Description**:
  - Create a class `StudentClass` with methods `workOnHomework` and `displayName`.
  - Define interfaces for the class and its constructor.

#### 5. Advanced Types Part 1

- **Directory**: `task_2`
- **Files**: `task_2/js/main.ts`, `task_2/webpack.config.js`, `task_2/tsconfig.json`, `task_2/package.json`
- **Description**:
  - Create interfaces `DirectorInterface` and `TeacherInterface`.
  - Implement classes `Director` and `Teacher`.
  - Create a function `createEmployee`.

#### 6. Creating Functions Specific to Employees

- **Directory**: `task_2`
- **Files**: `task_2/js/main.ts`
- **Description**:
  - Write a function `isDirector`.
  - Write a function `executeWork`.

#### 7. String Literal Types

- **Directory**: `task_2`
- **Files**: `task_2/js/main.ts`
- **Description**:
  - Create a String literal type `Subjects`.
  - Write a function `teachClass`.

#### 8. Ambient Namespaces

- **Directory**: `task_3`
- **Files**: `task_3/js/main.ts`, `task_3/js/interface.ts`, `task_3/js/crud.d.ts`, `task_3/webpack.config.js`, `task_3/tsconfig.json`, `task_3/package.json`
- **Description**:
  - Create type `RowID` and interface `RowElement`.
  - Write type declarations for `crud.js` functions.
  - Create and manipulate `RowElement` objects.

#### 9. Namespace & Declaration Merging

- **Directory**: `task_4`
- **Files**: `task_4/package.json`, `task_4/tsconfig.json`, `task_4/js/subjects/Cpp.ts`, `task_4/js/subjects/Java.ts`, `task_4/js/subjects/React.ts`, `task_4/js/subjects/Subject.ts`, `task_4/js/subjects/Teacher.ts`
- **Description**:
  - Create a namespace `Subjects` with interfaces and classes for `Teacher`, `Subject`, `Cpp`, `React`, and `Java`.
  - Implement methods for each class.

#### 10. Update Main.ts

- **Directory**: `task_4`
- **Files**: `task_4/js/main.ts`
- **Description**:
  - Export constants for `Cpp`, `Java`, `React` subjects.
  - Export and use a `Teacher` object `cTeacher`.
  - Log and call methods for each subject.

#### 11. Brand Convention & Nominal Typing

- **Directory**: `task_5`
- **Files**: `task_5/js/main.ts`, `task_5/package.json`, `task_5/webpack.config.js`, `task_5/tsconfig.json`
- **Description**:
  - Create interfaces `MajorCredits` and `MinorCredits`.
  - Implement functions `sumMajorCredits` and `sumMinorCredits`.
