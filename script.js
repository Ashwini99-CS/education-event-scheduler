const form = document.querySelector('form');
const eventName = document.querySelector('#event-name');
const eventDescription = document.querySelector('#event-description');
const eventTime = document.querySelector('#event-time');
const eventDate = document.querySelector('#event-date');
const eventLocation = document.querySelector('#event-location');
const eventList = document.querySelector('#event-list');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const newEvent = document.createElement('div');
  newEvent.innerHTML = `
    <h2>${eventName.value}</h2>
    <p><strong>Description:</strong> ${eventDescription.value}</p>
    <p><strong>Time:</strong> ${eventTime.value}</p>
    <p><strong>Date:</strong> ${eventDate.value}</p>
    <p><strong>Location:</strong> ${eventLocation.value}</p>
	<p>---------------------------------</p>
  `;
  eventList.appendChild(newEvent);

  eventName.value = '';
  eventDescription.value = '';
  eventTime.value = '';
  eventDate.value = '';
  eventLocation.value = '';
 
  });
  function myFunction() {
	alert("Event added Sucessfully");
  }
  function myfunction() {
	alert("signed in  Sucessfully");
  }
