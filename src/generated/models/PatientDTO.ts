// tslint:disable
/**
 * OH 2.0 Api Documentation
 * OH 2.0 Api Documentation
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * Class representing a patient
 * @export
 * @interface PatientDTO
 */
export interface PatientDTO {
  /**
   * code of the Patient
   * @type {number}
   * @memberof PatientDTO
   */
  code?: number;
  /**
   * First name of the patient
   * @type {string}
   * @memberof PatientDTO
   */
  firstName?: string;
  /**
   * Last name of the patient
   * @type {string}
   * @memberof PatientDTO
   */
  secondName?: string;
  /**
   * Birth date
   * @type {string}
   * @memberof PatientDTO
   */
  birthDate?: string;
  /**
   * Age
   * @type {number}
   * @memberof PatientDTO
   */
  age?: number;
  /**
   * Age type
   * @type {string}
   * @memberof PatientDTO
   */
  agetype?: string;
  /**
   * Sex
   * @type {string}
   * @memberof PatientDTO
   */
  sex?: PatientDTOSexEnum;
  /**
   * Address
   * @type {string}
   * @memberof PatientDTO
   */
  address?: string;
  /**
   * City
   * @type {string}
   * @memberof PatientDTO
   */
  city?: string;
  /**
   * Telephone
   * @type {string}
   * @memberof PatientDTO
   */
  telephone?: string;
  /**
   * Note
   * @type {string}
   * @memberof PatientDTO
   */
  note?: string;
  /**
   * Mother\'s name
   * @type {string}
   * @memberof PatientDTO
   */
  motherName?: string;
  /**
   * Mother\'s status (D=dead, A=alive)
   * @type {string}
   * @memberof PatientDTO
   */
  mother?: PatientDTOMotherEnum;
  /**
   * Father\'s name
   * @type {string}
   * @memberof PatientDTO
   */
  fatherName?: string;
  /**
   * Father\'s status (D=dead, A=alive)
   * @type {string}
   * @memberof PatientDTO
   */
  father?: PatientDTOFatherEnum;
  /**
   * Blood type (0-/+, A-/+ , B-/+, AB-/+)
   * @type {string}
   * @memberof PatientDTO
   */
  bloodType?: string;
  /**
   * hasInsurance (Y=Yes, N=no)
   * @type {string}
   * @memberof PatientDTO
   */
  hasInsurance?: PatientDTOHasInsuranceEnum;
  /**
   * Parent together (Y=Yes, N=no)
   * @type {string}
   * @memberof PatientDTO
   */
  parentTogether?: PatientDTOParentTogetherEnum;
  /**
   * Tax code
   * @type {string}
   * @memberof PatientDTO
   */
  taxCode?: string;
  /**
   * Height
   * @type {number}
   * @memberof PatientDTO
   */
  height?: number;
  /**
   * Weight
   * @type {number}
   * @memberof PatientDTO
   */
  weight?: number;
  /**
   * BlobPhoto
   * @type {string}
   * @memberof PatientDTO
   */
  blobPhoto?: string;
  /**
   * status
   * @type {string}
   * @memberof PatientDTO
   */
  status?: PatientDTOStatusEnum;
  /**
   * @type {string}
   * @memberof PatientDTO
   */
  anamnesis?: string;
  /**
   * @type {string}
   * @memberof PatientDTO
   */
  allergies?: string;
}

/**
 * @export
 * @enum {string}
 */
export enum PatientDTOSexEnum {
  F = "F",
  M = "M",
}
/**
 * @export
 * @enum {string}
 */
export enum PatientDTOMotherEnum {
  D = "D",
  A = "A",
}
/**
 * @export
 * @enum {string}
 */
export enum PatientDTOFatherEnum {
  D = "D",
  A = "A",
}
/**
 * @export
 * @enum {string}
 */
export enum PatientDTOHasInsuranceEnum {
  Y = "Y",
  N = "N",
}
/**
 * @export
 * @enum {string}
 */
export enum PatientDTOParentTogetherEnum {
  Y = "Y",
  N = "N",
}
/**
 * @export
 * @enum {string}
 */
export enum PatientDTOStatusEnum {
  I = "I",
  O = "O",
}
