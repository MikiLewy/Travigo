import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { StyledViewWrapper } from './Calendar.styles';

interface CalendarProps {}

const Calendar: React.FC<CalendarProps> = () => {
  return (
    <StyledViewWrapper>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        eventColor={'#378006'}
        events={[
          { title: 'Trip', date: '2022-03-31' },
          { title: 'Monteverde Forest', date: '2022-04-02' },
        ]}
      />
    </StyledViewWrapper>
  );
};

export default Calendar;
