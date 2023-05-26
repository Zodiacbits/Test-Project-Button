const fetch = require('node-fetch');
const apiKey = 'X5ljC1hZskOfbf4XmosctiGu5lirqr53Z1ohVmxEN1yhoPY8zFX80If3pvbvwjPmhYyB1h5cSwyMbPc1spR5vO658xVdAe1S7TBD7ffqEIiFOmaU4ZWaCwlaFQMEDjYD';
const eventID = poapEventId;

fetch('https://api.poap.tech/events/id/${eventId}', {
  headers: {
    'X-API-KEY': X5ljC1hZskOfbf4XmosctiGu5lirqr53Z1ohVmxEN1yhoPY8zFX80If3pvbvwjPmhYyB1h5cSwyMbPc1spR5vO658xVdAe1S7TBD7ffqEIiFOmaU4ZWaCwlaFQMEDjYD
  }
})
,then(response => response.json())
,then(data => {
  console.log(data);
})
,catch(Error => {
  console.error(error);
});

function then(arg0: (response: any) => any) {
    throw new Error("Function not implemented.");
}
