import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Wrapper } from './Calendar.styles';
import { useWindowWidth } from 'hooks/useWindowWidth';

interface CalendarProps {
  dates: { title: string; date: string }[];
}

const Calendar: React.FC<CalendarProps> = ({ dates }) => {
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
        events={dates}
      />
    </Wrapper>
  );
};

export default Calendar;
