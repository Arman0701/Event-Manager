import React from 'react'
import { atcb_action } from 'add-to-calendar-button'
import EventTitle from '../EventTitle';


 const EventLocation = () => {
  const [name, setName] = React.useState('Some event')
  return (
      <>
      <EventTitle title2="event " strongtitle="location"/>
    <form onSubmit={e => {
        e.preventDefault()
        atcb_action({
          name,
          startDate: "2022-01-14",
          endDate: "2022-01-18",
          options: ['Apple', 'Google', 'iCal', 'Microsoft365', 'Outlook.com', 'MicrosoftTeams', 'Yahoo'],
          trigger: "click",
          iCalFileName: "Reminder-Event",
          location:"Yerevan,Armenia"
        })
      }}>
        <input value={name} onChange={setName} />
        <input className="atcb_customTrigger" type="submit" value="save"/>
      </form>
      </>
  );
}
export default EventLocation;
