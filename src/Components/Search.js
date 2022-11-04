import React, { useState } from 'react';
import { STUDENTS } from '../studentsList';

// `joiningDate` && `validityDate` format "yyyy-mm-dd"
function checkValidity(joiningDate, validityDate) {
	const now = new Date();
	const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	const [year, month, day] = joiningDate.split('-');
	const [yyyy, mm, dd] = validityDate.split('-');
	const maxValid = new Date(yyyy, mm - 1, dd);
	const selected = new Date(year, month - 1, day);
	return (maxValid >= selected) && (maxValid >= today);
}



function Search({onSubmit}) {
	const [name, setName] = useState();
	const [date, setDate] = useState();

	const resetValues = () => {
		setDate('');
		setName('')
	}

	const validateValues = ( student) => {
		if (!student) return {error : `Sorry, ${name} is not a verified student!`}
		const isValid = checkValidity(date, student.validityDate);
		return { error: isValid ? null : {error: `Sorry, ${name}'s validity has Expired!`} }

	}

	const handleClick = () => {
		const studentInfo = STUDENTS.find(item => name.toUpperCase() === item.name.toUpperCase());
		const validate = validateValues( studentInfo);
		const submitParameters = validate.error || { data: studentInfo };
		onSubmit(submitParameters);
		resetValues()
	}


	return (
		<div className="my-50 layout-row align-items-end justify-content-end">
			<label htmlFor="studentName">Student Name:
				<div>
					<input value={name} id="studentName" data-testid="studentName" type="text" className="mr-30 mt-10" onChange={(e) => setName(e.target.value)}/>
				</div>
			</label>
			<label htmlFor="joiningDate">Joining Date:
				<div>
					<input value={date} id="joiningDate" data-testid="joiningDate" type="date" className="mr-30 mt-10" onChange={(e) => setDate(e.target.value)}/>
				</div>
			</label>
			<button type="button" data-testid="addBtn" className="small mb-0" onClick={handleClick}>Add</button>
		</div>
	);
}

export default Search;
