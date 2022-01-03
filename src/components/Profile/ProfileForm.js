import React from 'react';
import classes from './ProfileForm.module.css';
import RadioButton from './RadioButton';

function ProfileForm(props) {
	return (
		<table className={classes.table}>
			<tr>
				<td>
					<label for='name' className={classes.label}>
						FirstName:
					</label>
					<input
						type='text'
						placeholder='Atharva'
						className={classes.input}
					></input>
				</td>
				<td>
					<label for='name' className={classes.label}>
						LastName:
					</label>
					<input
						type='text'
						placeholder='Agrawal'
						className={classes.input}
					></input>
				</td>
			</tr>
			<tr>
				<td>
					<label for='name' className={classes.label}>
						Designation:
					</label>
					<select className={classes.input} id='designation' name='designation'>
						<option value='co-founder'>Co-Founder</option>
						<option value='technical lead'>Technical Lead</option>
						<option value='project manager'>Project Manager</option>
						<option value='trainee'>Trainee</option>
					</select>
				</td>
				<td>
					<label for='name' className={classes.label}>
						Website:
					</label>
					<input
						type='text'
						placeholder='Name'
						className={classes.input}
					></input>
				</td>
			</tr>
			<tr>
				<td>
					<label for='gender' className={classes.label}>
						Gender:
					</label>
					<RadioButton />
				</td>
				<td>
					<label for='name' className={classes.label}>
						Birthday:
					</label>
					<input
						type='text'
						placeholder='MM/DD/YYYY'
						className={classes.input}
					></input>
				</td>
			</tr>
			<tr>
				<td>
					<label for='name' className={classes.label}>
						City:
					</label>
					<input
						type='text'
						placeholder='City'
						className={classes.input}
					></input>
				</td>
				<td>
					<label for='name' className={classes.label}>
						State:
					</label>
					<input
						type='text'
						placeholder='State'
						className={classes.postal}
					></input>
					<label for='name' className={classes.label}>
						Zip:
					</label>
					<input
						type='text'
						placeholder='Zip'
						className={classes.postal}
					></input>
				</td>
			</tr>
			<tr>
				<td>
					<button>Save</button>
					<button>Reset all</button>
				</td>
			</tr>
		</table>
	);
}

export default ProfileForm;
