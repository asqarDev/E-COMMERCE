import {combineReducers} from 'redux';
import { langRedusers } from './LangRedusers';
export const rootReduser=combineReducers({
    changeLang: langRedusers
})