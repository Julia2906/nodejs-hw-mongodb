import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import { getAllContacts, getContactsById } from './services/contacts';

const PORT = Number(process.env.PORT);

export const setupServer = () => {
  const app = express();

  
  app.use(cors());

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

 // app.use(express.json());

 app.get('/contacts', async (req, res) => {
    const contacts = await getAllContacts();
res.status(200).json({
  status: 200,
  message: "Successfully found contacts!",
  data: contacts,
})

 }); 

 app.get('/contact/:contactId', async (req,res) => {
    const {contactId} = req.params;
const contact = await getContactsById(contactId);

if(!contact) {
    res.status(404).json({
        message: 'Contact not found'
    });
    return;
}

res.status(200).json({
	status: 200,
	message: "Successfully found contact with id {contactId}!",
	data: contact
 })
 })

  app.use((req, res) => {
    res.status(404).json({
      message: 'Route not found',
    });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
