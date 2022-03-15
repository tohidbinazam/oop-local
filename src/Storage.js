export default class Storage {
  static get(key) {
    return JSON.parse(localStorage.getItem(key)) ?? [];
  }
  static set(key, data) {
    const get_data = this.get(key);
    get_data.push(data);
    localStorage.setItem(key, JSON.stringify(get_data));
  }
}
