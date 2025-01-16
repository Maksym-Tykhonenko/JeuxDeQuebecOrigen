import {Activity} from '../data/activities-list';
import {Event} from '../data/events-list';
import {Folder} from '../screens/gallery-screen';
import {Screens} from './screens';

export namespace StackParams {
  export type Tabs = {
    [Screens.HomeStack]: undefined;
    [Screens.ActivitiesStack]: undefined;
    [Screens.Album]: undefined;
    [Screens.Support]: undefined;
    [Screens.Account]: undefined;
  };

  export type ActivitiesStack = {
    [Screens.Events]: undefined;
    [Screens.EventDetail]: {data: Event};
  };

  export type HomeStack = {
    [Screens.Home]: undefined;
    [Screens.Activities]: {data: Activity};
    [Screens.CreateEvent]: undefined;
    [Screens.Rating]: undefined;
    [Screens.Gallery]: undefined;
    [Screens.ImageFolder]: {folder: Folder};
  };
}
