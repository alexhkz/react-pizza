import React from 'react';
import classNames from 'classnames';

const Button = (props) => {
	return (
		<div>
			<button className={classNames('button', 
			{
				'button--outline': props.outline,
			},
			{
				'button--filled': props.children,
			},
			)}>{props.children}</button>
		</div>
	);
};

export default Button;