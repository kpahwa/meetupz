import * as fetch from './fetchMeetupAction';
import * as add from './addMeetupAction';
import * as remove from './deleteMeetupAction';
import * as edit from './editMeetupAction';

export default {
  ...fetch,
  ...add,
  ...remove,
  ...edit
}