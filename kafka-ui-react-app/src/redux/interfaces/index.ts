import React from 'react';
import { ActionType } from 'typesafe-actions';
import { ThunkAction } from 'redux-thunk';

import * as actions from 'redux/actions/actions';

import { TopicsState } from './topic';
import { ClusterState } from './cluster';
import { BrokersState } from './broker';
import { LoaderState } from './loader';
import { ConsumerGroupsState } from './consumerGroup';
import { SchemasState } from './schema';
import { AlertsState } from './alerts';

export * from './topic';
export * from './cluster';
export * from './broker';
export * from './consumerGroup';
export * from './schema';
export * from './loader';
export * from './alerts';

export interface RootState {
  topics: TopicsState;
  clusters: ClusterState;
  brokers: BrokersState;
  consumerGroups: ConsumerGroupsState;
  schemas: SchemasState;
  loader: LoaderState;
  alerts: AlertsState;
}

export interface FailurePayload {
  error: Error;
  title: string;
  subject: string;
  subjectId: string;
  message?: React.ReactNode;
}

export type Action = ActionType<typeof actions>;

export type ThunkResult<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  undefined,
  Action
>;

export type PromiseThunkResult<ReturnType = void> = ThunkResult<
  Promise<ReturnType>
>;
