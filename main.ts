import express from 'express';
import cors from 'cors';
import { Event } from './events'; // Import the Event interface

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let events  = []; // storage for events

//add a new event
app.post('/events', (req, res) => {
  const newEvent = req.body;
  events.push(newEvent);
  res.status(201).json(newEvent);
});

//update event bty id
app.put('/events/:id', (req, res) => {
  const eventId = req.params.id;
  const updatedEvent = req.body;
  const index = events.findIndex(e => e.id === eventId);

  if (index !== -1) {
    events[index] = { ...events[index], ...updatedEvent };
    res.json(events[index]);
  } else {
    res.status(404).send('Event not found');
  }
});

//delete event 
app.delete('/events/:id', (req, res) => {
  const eventId = req.params.id;
  const index = events.findIndex(e => e.id === eventId);

  if (index !== -1) {
    events.splice(index, 1);
    res.sendStatus(204);
  } else {
    res.status(404).send('Event not found');
  }
});

//fetch event by id 
app.get('/events/:id', (req, res) => {
  const eventId = req.params.id;
  const event = events.find(e => e.id === eventId);

  if (event) {
    res.json(event);
  } else {
    res.status(404).send('Event not found');
  }
});

//list of events

// app.get('/events', (req, res) => {
//   const { organizer, eventName } = req.query;
//   let filteredEvents = events;

//   if (organizer) {
//     filteredEvents = filteredEvents.filter(e => e.organizer.includes(organizer));
//   }

//   if (eventName) {
//     filteredEvents = filteredEvents.filter(e => e.eventName.includes(eventName));
//   }

//   res.json(filteredEvents);
// });

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});