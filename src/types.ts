import { Dispatch, SetStateAction } from 'react';

export type TStateSetter<T> = Dispatch<SetStateAction<T>>;

