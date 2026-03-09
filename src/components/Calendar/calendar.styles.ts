import styled from 'styled-components'

export const CalendarWrapper = styled.div`
	padding: 20px;
`

export const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(7, 1fr);
	gap: 8px;
`

export const Cell = styled.div`
	min-height: 120px;
	border: 1px solid #e2e2e2;
	border-radius: 8px;
	padding: 6px;
	background: white;
`

export const DayLabel = styled.div`
	font-size: 12px;
	color: #888;
	margin-bottom: 6px;
`

export const TasksContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
`

export const TaskCardStyled = styled.div`
	padding: 6px 8px;
	border-radius: 6px;
	background: #f3f4f6;
	font-size: 13px;
	cursor: grab;
`

export const Input = styled.input`
	width: 100%;
	border: none;
	border-top: 1px solid #eee;
	padding: 4px;
	font-size: 12px;

	&:focus {
		outline: none;
	}
`

export const AddTaskWrapper = styled.div`
	display: flex;
	gap: 6px;
	margin: 6px 0 8px 0;
`

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
`

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
`

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
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
	}

	&:active {
		cursor: grabbing;
		opacity: 0.7;
	}
`

export const EditInput = styled.input`
	width: 100%;
	border: 1px solid #4f46e5;
	border-radius: 6px;
	padding: 6px 8px;
	font-size: 13px;
	outline: none;
`

export const CalendarHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 16px 24px;
	background: #ffffff;
	border-bottom: 1px solid #eaeaea;
	border-radius: 12px 12px 0 0;
`

export const DateInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2px;

	h2 {
		margin: 0;
		font-size: 28px;
		font-weight: 800;
		color: #121212;
		letter-spacing: -1px;
		text-transform: capitalize;
		font-family:
			-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		line-height: 32px;
	}

	span {
		font-size: 15px;
		font-weight: 600;
		color: #8e8e93;
		display: flex;
		align-items: center;

		&::before {
			content: '';
			display: inline-block;
			width: 6px;
			height: 2px;
			background: #007aff;
			border-radius: 2px;
			margin-right: 8px;
		}
	}
`

export const SearchWrapper = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	width: 300px;

	svg {
		position: absolute;
		left: 12px;
		color: #999;
		width: 18px;
		height: 18px;
	}
`

export const StyledInput = styled.input`
	width: 100%;
	padding: 10px 12px 10px 40px;
	font-size: 14px;
	background: #f5f5f7;
	border: 1px solid transparent;
	border-radius: 8px;
	outline: none;
	transition: all 0.2s ease-in-out;

	&:focus {
		background: #ffffff;
		border-color: #007aff;
		box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.1);
	}

	&::placeholder {
		color: #999;
	}
`

export const HolidayLabel = styled.div`
  font-size: 11px;
  font-weight: 700;
  color: #d32f2f;
  background: #ffebee;
  padding: 2px 6px;
  border-radius: 4px;
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  pointer-events: none; 
  user-select: none;
`;

export const NavButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  border: 1px solid #e2e2e7;
  background: white;
  color: #1c1c1e;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 18px;

  &:hover {
    background: #f2f2f7;
    border-color: #d1d1d6;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
    background: #e5e5ea;
  }
`;

export const DateNavigation = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;