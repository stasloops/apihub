'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Select } from '../../(ui)/Select';
import { filter } from '../../../data';
import { $request } from '../../../logic/request';
import styles from '../../../styles/create.module.scss';

const CreateService = () => {
	const router = useRouter();
	const [value, setValue] = useState({ name: '', username: '' });
	const [category, setCategory] = useState({ name: 'Advertising', id: 0 });

	const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue((prev) => ({ ...prev, name: e.target.value }));
	};
	const changeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue((prev) => ({ ...prev, username: e.target.value }));
	};

	const create = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		try {
			const body = { name: value.name, username: value.username, category: category.id };
			const config = { headers: { 'content-type': 'multipart/form-data' } };
			const res = await $request.post(`/services/`, body, config);

			router.push(`/service/${res.data.service_id}`);
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<div className={styles.create}>
			<div className={styles.create__container}>
				<div className={styles.create__form}>
					<h1 className={styles.create__title}>Create API</h1>
					<div className={styles.create__input_box}>
						<label className={styles.create__label}>API Name</label>
						<input
							placeholder="Name"
							// styles={{
							//   backgroundColor: variant.backgroundThree,
							//   color: variant.color,
							// }}
							className={styles.create__input}
							value={value.name}
							onChange={changeName}
						/>
					</div>
					<div className={styles.create__input_box}>
						<label className={styles.create__label}>Creator API</label>
						<input
							placeholder="Username"
							// styles={{
							//   backgroundColor: variant.backgroundThree,
							//   color: variant.color,
							// }}
							className={styles.create__input}
							value={value.username}
							onChange={changeUserName}
						/>
					</div>
					<label className={styles.create__label}>Category</label>
					<Select setActiveItem={setCategory} activeItem={category} items={filter[0].categories} />
					<button onClick={(e) => create(e)} className={styles.create__button}>
						Create
					</button>
				</div>
			</div>
		</div>
	);
};

export default CreateService;
