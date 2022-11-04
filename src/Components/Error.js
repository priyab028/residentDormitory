import React from 'react';

function Error({value}) {
	return value ? <div data-testid="errorMsg" className="alert error mt-20 slide-up-fade-in">{value}</div> : null
}

export default Error;
