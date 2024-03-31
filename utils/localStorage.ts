// eslint-disable-next-line import/prefer-default-export
export class LocalStorage {
  static getItem(key: string) {
    if (typeof window !== 'undefined') {
      return window.localStorage.getItem(key);
    }

    return '';
  }
}
