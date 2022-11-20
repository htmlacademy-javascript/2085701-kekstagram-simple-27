import {simularPhotosList} from './photo-list.js';
import {setUserFormSubmit} from './user-form.js';
import {closeUserModal} from './user-modal.js';
import {getData} from './api.js';
import './scale.js';
import './filter.js';

getData(simularPhotosList);
setUserFormSubmit(closeUserModal);
