function add_zero(i) {
  // if i < 0 add a 0 else retun the number itself
  return (i < 10) ? "0" + i : i
}

function update_clock() {
  date = new Date()

  // generates 12 hour time and saves it to time variable
  // if hours mod 12 is a 0, replace it with a 12, else leave it
  hours = (date.getHours() % 12 == 0) ? 12 : date.getHours() % 12
  minutes = add_zero(date.getMinutes())

  // generates whether it's AM or PM
  // if hours > 12 it's PM else it's AM
  am_or_pm = (date.getHours() >= 12) ? "pm" : "am"
  document.getElementById("time").innerHTML = hours + ":" + minutes + am_or_pm

  // generates a date string of the following format:
    // Sun-Sat 1-31 Jan-Dec, 
    // comma is needed because of location - will be dealt with later
  // date
  date_string = ""
  day_str = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday"
  }
  date_string += day_str[date.getDay()]
  date_string += ", "

  //month
  month_str = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
  }

  date_string += month_str[date.getMonth()]
  date_string += " "

  //day
  date_string += date.getDate()

  document.getElementById("date").innerHTML = date_string
  setTimeout(update_clock, 1000)
}

update_clock()