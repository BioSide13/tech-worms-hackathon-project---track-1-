let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

const day = document.querySelector(".calendar-dates");
const currdate = document.querySelector(".calendar-current-date");
const prenexIcons = document.querySelectorAll(".calendar-navigation span");

// Array of month names
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];

// Function to generate the calendar
const manipulate = () => {
	// Get the first day of the month
	let dayone = new Date(year, month, 1).getDay();

	// Get the last date of the month
	let lastdate = new Date(year, month + 1, 0).getDate();

	// Get the day of the last date of the month
	let dayend = new Date(year, month, lastdate).getDay();

	// Get the last date of the previous month
	let monthlastdate = new Date(year, month, 0).getDate();

	// Variable to store the generated calendar HTML
	let lit = "";

	// Loop to add the last dates of the previous month
	for (let i = dayone; i > 0; i--) {
		lit += `<button id="btn" class="inactive">${monthlastdate - i + 1}</button>`;
	}

	// Loop to add the dates of the current month
	for (let i = 1; i <= lastdate; i++) {
		// Check if the current date is today
		let isToday =
			i === date.getDate() &&
			month === new Date().getMonth() &&
			year === new Date().getFullYear()
				? "active"
				: "";
		lit += `<button id="btn" class="${isToday}">${i}</butto>`;
	}

	// Loop to add the first dates of the next month
	for (let i = dayend; i < 6; i++) {
		lit += `<button id="btn" class="inactive">${i - dayend + 1}</button>`;
	}

	// Update the text of the current date element with the formatted current month and year
	currdate.innerText = `${months[month]}`;
	console.log(currdate.innerText);
	currdate.style.color = "#99BB7F";
	

	// Update the HTML of the dates element with the generated calendar
	day.innerHTML = lit;
};

manipulate();

// Attach a click event listener to each icon
prenexIcons.forEach(icon => {
	// When an icon is clicked
	icon.addEventListener("click", () => {
		// Check if the icon is "calendar-prev" or "calendar-next"
		month = icon.id === "calendar-prev" ? month - 1 : month + 1;

		// Check if the month is out of range
		if (month < 0 || month > 11) {
			// Set the date to the first day of the month with the new year
			date = new Date(year, month, new Date().getDate());
			// Set the year to the new year
			year = date.getFullYear();
			
			// Set the month to the new month
			month = date.getMonth();
		} else {
			// Set the date to the current date
			date = new Date();
		}

		// Call the manipulate function to update the calendar display
		manipulate();
	});
});

// for appointment
// Function to handle button click and show appointment container
function showAppointment() {
	const appointment = document.querySelector('.appointment-container');

	appointment.style.display = 'block';
}
function closeAppointment() {
	const appointment = document.querySelector('.appointment-container');

	appointment.style.display = 'none';
}

const button = document.querySelector('#btn');
      document.addEventListener('DOMContentLoaded', function() {
    // Assuming the section has an ID or you can add one. If not, choose another static parent element.
    const section = document.querySelector('.calendar-dates');

    section.addEventListener('click', function(event) {
        // Check if the clicked element is an image
        if (event.target.tagName === 'BUTTON') {
            // Perform your desired action here
            console.log('Button clicked', );
		}else{
				
		}
    });
});



// Hide appointment container if clicked outside
document.addEventListener('click', function(event) {
	const appointment = document.querySelector('.appointment-container');
	const target = event.target;

	// Check if the clicked element is not inside the appointment container
	if(event.target.tagName === 'BUTTON')  {
		showAppointment();
	}else if (!appointment.contains(target)){
		closeAppointment();
	}
});
 
const appointmentDate = document.getElementById('date')	;
const appointmentTime = document.getElementById('time')	;
const reservationLink = document.getElementById('reservationLink')	;







