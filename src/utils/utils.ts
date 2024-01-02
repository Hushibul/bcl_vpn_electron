export const createNotifications = (body: string) => {
  new Notification('Cyber Shield', { body: body });
};
