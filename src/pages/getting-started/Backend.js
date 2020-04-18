import React from 'react';
import { mdx } from 'mdx.macro';

export const Backend = mdx`
# Node TS Backend

Git Clone or Fork our [In Touch's Backend](https://github.com/scorpionknifes/In-Touch-Backend)

## Installation

In Touch backend requires [Twilio credentials](/getting-started/twilio) and [Firebase credentials](/getting-started/firebase).

#### Install dependencies

Install project dependencies using [yarn](https://classic.yarnpkg.com/en/docs/install/)
<code>cd In-Touch-Backend <br/> yarn install</code>
<br/><br/>

#### Setup .env

Rename [.env-example](https://github.com/scorpionknifes/In-Touch-Backend/blob/master/.env-example) to .env and setup variables
<code>
## .env<br/>
# general<br/>
PORT=3000<br/>
# twilio<br/>
TWILIO_SID=AC0000000000000000000000<br/>
TWILIO_SECRET=0000000000000000000000<br/>
TWILIO_PHONE=+640000000<br/>
# firebase<br/>
GOOGLE_APPLICATION_CREDENTIALS="/file/location/in-touch-firebase-adminsdk.json"<br/>
</code>
<br/>

| Variables                              | Value         |
| -------------------------------------- | ------------- |
| PORT                                   | REST API Port |
| TWILIO_SID                             | [Twilio SID](twilio)      |
| TWILIO_SECRET                          | [Twilio Secret](twilio)     |
| TWILIO_PHONE                           | [Purchased phone number](twilio) |
| GOOGLE_APPLICATION_CREDENTIALS &emsp;&emsp; | [JSON file from service account](firebase) |
<br/>

#### Run Backend

In Touch Backend is setup with Nodemon with hot reload

<code>yarn start</code><br/><br/>

Build project into JS

<code>yarn build</code><br/><br/>

#### Twilio Web Hook

To get In Touch to handle incoming calls, set the end point of your Twilio phone number to point to the backend API.

For example my backend is routed to https://intouch.tk/. 
***Please ensure your API is accessible publicly.***
Set the default Web hook into http://YOUR_IP:3000/ivr/welcome. /ivr/welcome is the default handler for incoming calls in this project

![](../../images/twiliowebhook.png)

You can also use Ngrok shown by twilio. [Allow Twilio to talk to your application](https://www.twilio.com/docs/voice/quickstart/node#allow-twilio-to-talk-to-your-application)

`