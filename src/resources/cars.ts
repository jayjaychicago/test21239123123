// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Cars extends APIResource {
  /**
   * Add a new car
   */
  create(body: CarCreateParams, options?: RequestOptions): APIPromise<Car> {
    return this._client.post('/cars', { body, ...options });
  }

  /**
   * Get car details
   */
  retrieve(carID: number, options?: RequestOptions): APIPromise<Car> {
    return this._client.get(path`/cars/${carID}`, options);
  }

  /**
   * Update car details
   */
  update(carID: number, body: CarUpdateParams, options?: RequestOptions): APIPromise<Car> {
    return this._client.put(path`/cars/${carID}`, { body, ...options });
  }

  /**
   * List all cars
   */
  list(options?: RequestOptions): APIPromise<CarListResponse> {
    return this._client.get('/cars', options);
  }

  /**
   * Delete a car
   */
  delete(carID: number, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/cars/${carID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface Car {
  id?: number;

  color?: string;

  make?: string;

  model?: string;

  year?: number;
}

export type CarListResponse = Array<Car>;

export interface CarCreateParams {
  make: string;

  model: string;

  year: number;

  color?: string;
}

export interface CarUpdateParams {
  make: string;

  model: string;

  year: number;

  color?: string;
}

export declare namespace Cars {
  export {
    type Car as Car,
    type CarListResponse as CarListResponse,
    type CarCreateParams as CarCreateParams,
    type CarUpdateParams as CarUpdateParams,
  };
}
