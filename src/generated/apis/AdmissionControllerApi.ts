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

import { Observable } from 'rxjs';
import { BaseAPI, HttpHeaders, HttpQuery, throwIfNullOrUndefined, encodeURI, COLLECTION_FORMATS, OperationOpts, RawAjaxResponse } from '../runtime';
import {
    AdmissionDTO,
    AdmittedPatientDTO,
} from '../models';

export interface DeleteAdmissionTypeUsingDELETERequest {
    id: number;
}

export interface DischargePatientUsingPOSTRequest {
    patientCode: number;
    currentAdmissionDTO: AdmissionDTO;
}

export interface GetAdmissionsUsingGETRequest {
    patientCode: number;
}

export interface GetAdmissionsUsingGET1Request {
    admissionrange: Array<string>;
    page?: number;
    size?: number;
}

export interface GetAdmittedPatientsUsingGETRequest {
    admissionrange?: Array<string>;
    dischargerange?: Array<string>;
    searchterms?: string;
}

export interface GetCurrentAdmissionUsingGETRequest {
    patientCode: number;
}

export interface GetDischargesUsingGETRequest {
    dischargerange: Array<string>;
    page?: number;
    size?: number;
}

export interface GetNextYProgUsingGETRequest {
    wardcode: string;
}

export interface GetUsedWardBedUsingGETRequest {
    wardid: string;
}

export interface NewAdmissionsUsingPOSTRequest {
    newAdmissionDTO: AdmissionDTO;
}

export interface UpdateAdmissionsUsingPUTRequest {
    updateAdmissionDTO: AdmissionDTO;
}

/**
 * no description
 */
export class AdmissionControllerApi extends BaseAPI {

    /**
     * deleteAdmissionType
     */
    deleteAdmissionTypeUsingDELETE({ id }: DeleteAdmissionTypeUsingDELETERequest): Observable<boolean>
    deleteAdmissionTypeUsingDELETE({ id }: DeleteAdmissionTypeUsingDELETERequest, opts?: OperationOpts): Observable<RawAjaxResponse<boolean>>
    deleteAdmissionTypeUsingDELETE({ id }: DeleteAdmissionTypeUsingDELETERequest, opts?: OperationOpts): Observable<boolean | RawAjaxResponse<boolean>> {
        throwIfNullOrUndefined(id, 'id', 'deleteAdmissionTypeUsingDELETE');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<boolean>({
            url: '/admissions/{id}'.replace('{id}', encodeURI(id)),
            method: 'DELETE',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * dischargePatient
     */
    dischargePatientUsingPOST({ patientCode, currentAdmissionDTO }: DischargePatientUsingPOSTRequest): Observable<boolean>
    dischargePatientUsingPOST({ patientCode, currentAdmissionDTO }: DischargePatientUsingPOSTRequest, opts?: OperationOpts): Observable<RawAjaxResponse<boolean>>
    dischargePatientUsingPOST({ patientCode, currentAdmissionDTO }: DischargePatientUsingPOSTRequest, opts?: OperationOpts): Observable<boolean | RawAjaxResponse<boolean>> {
        throwIfNullOrUndefined(patientCode, 'patientCode', 'dischargePatientUsingPOST');
        throwIfNullOrUndefined(currentAdmissionDTO, 'currentAdmissionDTO', 'dischargePatientUsingPOST');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        const query: HttpQuery = { // required parameters are used directly since they are already checked by throwIfNullOrUndefined
            'patientCode': patientCode,
        };

        return this.request<boolean>({
            url: '/admissions/discharge',
            method: 'POST',
            headers,
            query,
            body: currentAdmissionDTO,
        }, opts?.responseOpts);
    };

    /**
     * getAdmissions
     */
    getAdmissionsUsingGET({ patientCode }: GetAdmissionsUsingGETRequest): Observable<Array<AdmissionDTO>>
    getAdmissionsUsingGET({ patientCode }: GetAdmissionsUsingGETRequest, opts?: OperationOpts): Observable<RawAjaxResponse<Array<AdmissionDTO>>>
    getAdmissionsUsingGET({ patientCode }: GetAdmissionsUsingGETRequest, opts?: OperationOpts): Observable<Array<AdmissionDTO> | RawAjaxResponse<Array<AdmissionDTO>>> {
        throwIfNullOrUndefined(patientCode, 'patientCode', 'getAdmissionsUsingGET');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<Array<AdmissionDTO>>({
            url: '/admissions/{patientCode}'.replace('{patientCode}', encodeURI(patientCode)),
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * getAdmissions
     */
    getAdmissionsUsingGET1({ admissionrange, page, size }: GetAdmissionsUsingGET1Request): Observable<Array<AdmissionDTO>>
    getAdmissionsUsingGET1({ admissionrange, page, size }: GetAdmissionsUsingGET1Request, opts?: OperationOpts): Observable<RawAjaxResponse<Array<AdmissionDTO>>>
    getAdmissionsUsingGET1({ admissionrange, page, size }: GetAdmissionsUsingGET1Request, opts?: OperationOpts): Observable<Array<AdmissionDTO> | RawAjaxResponse<Array<AdmissionDTO>>> {
        throwIfNullOrUndefined(admissionrange, 'admissionrange', 'getAdmissionsUsingGET1');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        const query: HttpQuery = { // required parameters are used directly since they are already checked by throwIfNullOrUndefined
            'admissionrange': admissionrange.join(COLLECTION_FORMATS['csv']),
        };

        if (page != null) { query['page'] = page; }
        if (size != null) { query['size'] = size; }

        return this.request<Array<AdmissionDTO>>({
            url: '/admissions',
            method: 'GET',
            headers,
            query,
        }, opts?.responseOpts);
    };

    /**
     * getAdmittedPatients
     */
    getAdmittedPatientsUsingGET({ admissionrange, dischargerange, searchterms }: GetAdmittedPatientsUsingGETRequest): Observable<Array<AdmittedPatientDTO>>
    getAdmittedPatientsUsingGET({ admissionrange, dischargerange, searchterms }: GetAdmittedPatientsUsingGETRequest, opts?: OperationOpts): Observable<RawAjaxResponse<Array<AdmittedPatientDTO>>>
    getAdmittedPatientsUsingGET({ admissionrange, dischargerange, searchterms }: GetAdmittedPatientsUsingGETRequest, opts?: OperationOpts): Observable<Array<AdmittedPatientDTO> | RawAjaxResponse<Array<AdmittedPatientDTO>>> {

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        const query: HttpQuery = {};

        if (admissionrange != null) { query['admissionrange'] = admissionrange.join(COLLECTION_FORMATS['csv']); }
        if (dischargerange != null) { query['dischargerange'] = dischargerange.join(COLLECTION_FORMATS['csv']); }
        if (searchterms != null) { query['searchterms'] = searchterms; }

        return this.request<Array<AdmittedPatientDTO>>({
            url: '/admissions/admittedPatients',
            method: 'GET',
            headers,
            query,
        }, opts?.responseOpts);
    };

    /**
     * getCurrentAdmission
     */
    getCurrentAdmissionUsingGET({ patientCode }: GetCurrentAdmissionUsingGETRequest): Observable<AdmissionDTO>
    getCurrentAdmissionUsingGET({ patientCode }: GetCurrentAdmissionUsingGETRequest, opts?: OperationOpts): Observable<RawAjaxResponse<AdmissionDTO>>
    getCurrentAdmissionUsingGET({ patientCode }: GetCurrentAdmissionUsingGETRequest, opts?: OperationOpts): Observable<AdmissionDTO | RawAjaxResponse<AdmissionDTO>> {
        throwIfNullOrUndefined(patientCode, 'patientCode', 'getCurrentAdmissionUsingGET');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        const query: HttpQuery = { // required parameters are used directly since they are already checked by throwIfNullOrUndefined
            'patientCode': patientCode,
        };

        return this.request<AdmissionDTO>({
            url: '/admissions/current',
            method: 'GET',
            headers,
            query,
        }, opts?.responseOpts);
    };

    /**
     * getDischarges
     */
    getDischargesUsingGET({ dischargerange, page, size }: GetDischargesUsingGETRequest): Observable<Array<AdmissionDTO>>
    getDischargesUsingGET({ dischargerange, page, size }: GetDischargesUsingGETRequest, opts?: OperationOpts): Observable<RawAjaxResponse<Array<AdmissionDTO>>>
    getDischargesUsingGET({ dischargerange, page, size }: GetDischargesUsingGETRequest, opts?: OperationOpts): Observable<Array<AdmissionDTO> | RawAjaxResponse<Array<AdmissionDTO>>> {
        throwIfNullOrUndefined(dischargerange, 'dischargerange', 'getDischargesUsingGET');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        const query: HttpQuery = { // required parameters are used directly since they are already checked by throwIfNullOrUndefined
            'dischargerange': dischargerange.join(COLLECTION_FORMATS['csv']),
        };

        if (page != null) { query['page'] = page; }
        if (size != null) { query['size'] = size; }

        return this.request<Array<AdmissionDTO>>({
            url: '/discharges',
            method: 'GET',
            headers,
            query,
        }, opts?.responseOpts);
    };

    /**
     * getNextYProg
     */
    getNextYProgUsingGET({ wardcode }: GetNextYProgUsingGETRequest): Observable<number>
    getNextYProgUsingGET({ wardcode }: GetNextYProgUsingGETRequest, opts?: OperationOpts): Observable<RawAjaxResponse<number>>
    getNextYProgUsingGET({ wardcode }: GetNextYProgUsingGETRequest, opts?: OperationOpts): Observable<number | RawAjaxResponse<number>> {
        throwIfNullOrUndefined(wardcode, 'wardcode', 'getNextYProgUsingGET');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        const query: HttpQuery = { // required parameters are used directly since they are already checked by throwIfNullOrUndefined
            'wardcode': wardcode,
        };

        return this.request<number>({
            url: '/admissions/getNextProgressiveIdInYear',
            method: 'GET',
            headers,
            query,
        }, opts?.responseOpts);
    };

    /**
     * getUsedWardBed
     */
    getUsedWardBedUsingGET({ wardid }: GetUsedWardBedUsingGETRequest): Observable<number>
    getUsedWardBedUsingGET({ wardid }: GetUsedWardBedUsingGETRequest, opts?: OperationOpts): Observable<RawAjaxResponse<number>>
    getUsedWardBedUsingGET({ wardid }: GetUsedWardBedUsingGETRequest, opts?: OperationOpts): Observable<number | RawAjaxResponse<number>> {
        throwIfNullOrUndefined(wardid, 'wardid', 'getUsedWardBedUsingGET');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        const query: HttpQuery = { // required parameters are used directly since they are already checked by throwIfNullOrUndefined
            'wardid': wardid,
        };

        return this.request<number>({
            url: '/admissions/getBedsOccupationInWard',
            method: 'GET',
            headers,
            query,
        }, opts?.responseOpts);
    };

    /**
     * newAdmissions
     */
    newAdmissionsUsingPOST({ newAdmissionDTO }: NewAdmissionsUsingPOSTRequest): Observable<AdmissionDTO>
    newAdmissionsUsingPOST({ newAdmissionDTO }: NewAdmissionsUsingPOSTRequest, opts?: OperationOpts): Observable<RawAjaxResponse<AdmissionDTO>>
    newAdmissionsUsingPOST({ newAdmissionDTO }: NewAdmissionsUsingPOSTRequest, opts?: OperationOpts): Observable<AdmissionDTO | RawAjaxResponse<AdmissionDTO>> {
        throwIfNullOrUndefined(newAdmissionDTO, 'newAdmissionDTO', 'newAdmissionsUsingPOST');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<AdmissionDTO>({
            url: '/admissions',
            method: 'POST',
            headers,
            body: newAdmissionDTO,
        }, opts?.responseOpts);
    };

    /**
     * updateAdmissions
     */
    updateAdmissionsUsingPUT({ updateAdmissionDTO }: UpdateAdmissionsUsingPUTRequest): Observable<AdmissionDTO>
    updateAdmissionsUsingPUT({ updateAdmissionDTO }: UpdateAdmissionsUsingPUTRequest, opts?: OperationOpts): Observable<RawAjaxResponse<AdmissionDTO>>
    updateAdmissionsUsingPUT({ updateAdmissionDTO }: UpdateAdmissionsUsingPUTRequest, opts?: OperationOpts): Observable<AdmissionDTO | RawAjaxResponse<AdmissionDTO>> {
        throwIfNullOrUndefined(updateAdmissionDTO, 'updateAdmissionDTO', 'updateAdmissionsUsingPUT');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<AdmissionDTO>({
            url: '/admissions',
            method: 'PUT',
            headers,
            body: updateAdmissionDTO,
        }, opts?.responseOpts);
    };

}
