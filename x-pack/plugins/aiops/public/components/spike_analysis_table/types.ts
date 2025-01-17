/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import type { SignificantTerm, FieldValuePair } from '@kbn/ml-agg-utils';

export interface GroupTableItem {
  id: string;
  docCount: number;
  pValue: number | null;
  group: FieldValuePair[];
  repeatedValues: FieldValuePair[];
  histogram: SignificantTerm['histogram'];
}
