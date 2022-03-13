import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		font-family: 'Montserrat', sans-serif;
		background-color: #FFFEFC;
  }
`;

const colors = {
	//buttons
	save: '#6881E6',
	cancel: '#000000',
	edit: '#7CBD88',
	delete: '#B12920',
	add: '#374B8F',

	//table
	thead: '#232432',
	theadText: '#C6CFE3',
	tbody: '#A4A4A3',
	text: '#1C1D21',

	//errors
	error: '#B13737',
}

export const Container = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
padding: 1rem;
`;

export const Table = styled.table`
border-collapse: collapse;
width: 100%;
`;

export const Th = styled.th`
border: 1px solid #ffffff;
text-align: left;
padding: 8px;
font-size: 32px;
color: ${colors.theadText};
background-color: ${colors.thead};
`;




export const Td = styled.td`
background-color: ${colors.tbody};
border: 1px solid #ffffff;
text-align: left;
padding: 8px;
font-size: 32px;
`;

export const Form = styled.form`
font-size: 28px;
display: flex;
gap: 5px;
`;

export const Heading = styled.h2`
margin-bottom: 24px;
text-align: center;
font-size: 48px;
line-height: 1.1;
font-weight: 600;
`;

export const EditButton = styled.button`
border-radius: 4px;
	background: none;
	margin-top: 0.5rem;
	white-space: nowrap;
	outline: none;
	width: 100%;
	font-size: 1.4rem;
	padding: 5px 15px;
	border: 2px solid black;
	cursor: pointer;
	position: relative;
	overflow: hidden;

	&:hover {
		color: white;
		transition: background-color 0.4s ease-in;
		background-color: ${({ inverse }) => (inverse ? '#7CBD88' : '#7CBD88')};
	}
`;


export const DeleteButton = styled.button`
border-radius: 4px;
	background: none;
	margin-top: 0.5rem;
	white-space: nowrap;
	outline: none;
	width: 100%;
	font-size: 1.4rem;
	padding: 5px 15px;
	border: 2px solid black;
	cursor: pointer;
	position: relative;
	overflow: hidden;

	&:hover {
		color: white;
		transition: background-color 0.4s ease-in;
		background-color: ${colors.delete};
	}
`;


export const SaveButton = styled.button`
border-radius: 4px;
	background: none;
	margin-top: 0.5rem;
	white-space: nowrap;
	outline: none;
	width: 100%;
	font-size: 1.4rem;
	padding: 5px 15px;
	border: 2px solid black;
	cursor: pointer;
	position: relative;
	overflow: hidden;

	&:hover {
		color: white;
		transition: background-color 0.4s ease-in;
		background-color: ${colors.save};
	}
`;

export const CancelButton = styled.button`
border-radius: 4px;
	background: none;
	margin-top: 0.5rem;
	white-space: nowrap;
	outline: none;
	width: 100%;
	font-size: 1.4rem;
	padding: 5px 15px;
	border: 2px solid black;
	cursor: pointer;
	position: relative;
	overflow: hidden;

	&:hover {
		color: white;
		transition: background-color 0.4s ease-in;
		background-color: ${colors.cancel};
	}
`;

export const Span = styled.span`
color: ${colors.error}
`;


export const Label = styled.label`
display: inline-block;
font-size: 1.5rem;
margin-bottom: 0.7rem;
color: ${colors.text};
`;

export const AddButton = styled.button`
border-radius: 4px;
	background: none;
	margin-top: 0.4rem;
	white-space: nowrap;
	outline: none;
	width: 80%;
	font-size: 1.2rem;
	padding: 5px 15px;
	border: 2px solid black;
	cursor: pointer;
	position: relative;
	overflow: hidden;

	&:hover {
		color: white;
		transition: background-color 0.4s ease-in;
		background-color: ${colors.add};
	}
`;


export const FormInput = styled.input`
	display: block;
	padding-left: 10px;
	outline: none;
	border-radius: 2px;
	height: 50px;
	width: 100%;
	border: none;
	border-bottom: 1px solid #cfcfcf;
	font-size: 1rem;
`;