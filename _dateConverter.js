"use strict";

module.exports = {
  convertDate: (date) => new Date(Date.now() + date * 1000*60*60*24)
}
