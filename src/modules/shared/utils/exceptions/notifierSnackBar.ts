import { Notify, QNotifyCreateOptions } from 'quasar';

export default function notifierSnackBar(
  title: string,
  theme: string,
  description?: string
) {
  const snackBarOptions: QNotifyCreateOptions = {
    color: theme,
    message: title,
    position: 'top',
    timeout: 3000,
    caption: description ? description : '',
  };
  Notify.create(snackBarOptions);
}
