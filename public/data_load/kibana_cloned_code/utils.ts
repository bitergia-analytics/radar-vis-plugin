/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * Bitergia requires contributions made to this file be 
 * licensed under the Apache-2.0 license or a compatible
 * open source license.
 *
 * Any modifications Copyright Bitergia.
 */

/*
 * Licensed to David Moreno under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. David Moreno licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


import { IFieldFormat } from '../../../../../src/plugins/data/common';

/**
 * Clone of: '../../../../../src/plugins/data/public/search/expressions/utils/serialize_agg_config.ts'
 * Component: serializeAggConfig
 */
export function serializeAggConfig(aggConfig) {
  return {
    type: aggConfig.type.name,
    indexPatternId: aggConfig.getIndexPattern().id,
    aggConfigParams: aggConfig.serialize().params,
  };
};

/**
 * Clone of: '../../../../../src/plugins/data/common/field_formats/utils.ts'
 * Component: FormatFactory
*/
export type FormatFactory = (mapping?) => IFieldFormat;
