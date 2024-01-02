/* eslint-disable @typescript-eslint/ban-ts-comment */
// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('windowManipulation', {
  closeApp: () => ipcRenderer.send('close-app'),
  maximizeRestore: () => ipcRenderer.send('maximize-restore-app'),
  minimizeApp: () => ipcRenderer.send('minimize-app'),
  maxRestoreState: async () => await ipcRenderer.invoke('max-restore-state'),
});
