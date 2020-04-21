import React, { FC, ReactNode } from 'react';
import { action, observable } from 'mobx';
import { RootStore } from './RootStore';
import { APIError } from 'api/types';
import { ActionStatus } from 'lib/actionStatus'; 

export class APIStore{
	@observable status: ActionStatus = ActionStatus.Initial;
	@observable error?: APIError;
	rootStore?: RootStore; 

	@action.bound
	onRequest(): void{
		this.status = ActionStatus.Request;
		this.error = undefined; 
	}

	@action.bound
	onSuccess(): void {
		this.status = ActionStatus.Success;
		this.error = undefined; 
	}

	@action.bound 
	onFailure(error?:APIError): void {
		this.status = ActionStatus.Failure; 
		error && (this.error = error);
	}
}