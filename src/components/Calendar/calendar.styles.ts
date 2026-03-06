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


export const AddTaskWrapper = styled.div`
  display: flex;
  gap: 6px;
  margin: 6px 0 8px 0;
`;

export const TaskInput = styled.input`
  flex: 1;
  border: 1px solid #e2e2e2;
  border-radius: 6px;
  padding: 6px 8px;
  font-size: 13px;
  outline: none;
  transition: all 0.15s ease;

  &:focus {
    border-color: #4f46e5;
    box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.15);
  }

  &::placeholder {
    color: #aaa;
  }
`;

export const AddButton = styled.button`
  border: none;
  background: #4f46e5;
  color: white;
  border-radius: 6px;
  width: 26px;
  height: 26px;
  cursor: pointer;
  font-size: 16px;
  line-height: 1;

  transition: all 0.15s;

  &:hover {
    background: #4338ca;
  }
`;

export const TaskCard = styled.div`
  background: white;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  padding: 6px 8px;
  font-size: 13px;
  margin-bottom: 6px;
  cursor: grab;

  display: flex;
  align-items: center;

  transition: all 0.15s ease;

  &:hover {
    border-color: #d4d4d4;
    box-shadow: 0 2px 6px rgba(0,0,0,0.06);
  }

  &:active {
    cursor: grabbing;
  }
`;

export const EditInput = styled.input`
  width: 100%;
  border: 1px solid #4f46e5;
  border-radius: 6px;
  padding: 6px 8px;
  font-size: 13px;
  outline: none;
`;