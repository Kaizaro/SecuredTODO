import {IDefaultFC} from '../../types';

export interface IEmptyList extends IDefaultFC {
  message?: string;
  buttonText?: string;
  onButtonPress?: () => void;
}
