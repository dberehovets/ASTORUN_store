const LocalStorageService = {
  getItem<T = unknown>(key: string): T | null {
    const item = localStorage.getItem(key);

    if (!item) {
      return null;
    }

    return JSON.parse(item);
  },

  setItem(key: string, value: unknown): void {
    localStorage.setItem(key, JSON.stringify(value));
  },
};

export default LocalStorageService;
