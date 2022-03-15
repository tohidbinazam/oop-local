export default class Alert {
  static alert(alert, mas) {
    return `<p class="alert alert-${alert} d-flex justify-content-between">${mas}<button class="btn-close" data-bs-dismiss="alert"></button></p>`;
  }
}
