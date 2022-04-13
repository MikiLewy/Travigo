import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Wrapper } from './Calendar.styles';
import { useWindowWidth } from 'hooks/useWindowWidth';

interface CalendarProps {}

const Calendar: React.FC<CalendarProps> = () => {
  const width = useWindowWidth();
  return (
    <Wrapper>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        themeSystem=""
        eventColor={'#07253F'}
        contentHeight={width > 791 ? 'auto' : 300}
        handleWindowResize={true}
        events={[
          { title: 'Trip', date: '2022-03-31' },
          { title: 'Monteverde Forest', date: '2022-04-02' },
        ]}
      />
    </Wrapper>
  );
};

export default Calendar;
