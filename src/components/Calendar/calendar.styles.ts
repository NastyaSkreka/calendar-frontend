import styled from "styled-components";

export const CalendarWrapper = styled.div`
  padding: 20px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
`;

export const Cell = styled.div`
  min-height: 120px;
  border: 1px solid #e2e2e2;
  border-radius: 8px;
  padding: 6px;
  background: white;
`;

export const DayLabel = styled.div`
  font-size: 12px;
  color: #888;
  margin-bottom: 6px;
`;

export const TasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const TaskCardStyled = styled.div`
  padding: 6px 8px;
  border-radius: 6px;
  background: #f3f4f6;
  font-size: 13px;
  cursor: grab;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  border-top: 1px solid #eee;
  padding: 4px;
  font-size: 12px;

  &:focus {
    outline: none;
  }
`;