import { fakerRU as faker } from '@faker-js/faker';

let id = 1;

export function mockStudent() {
	const faculties = ['ЭФ', 'ФЭИС', 'МФ', 'АСФ', 'ФИСЕ'];
	const formEducationOptions = ['бюджет', 'платно'];
	const stepEducationOptions = ['первая ступень', 'вторая ступень'];

	return {
		id: id++,
		fullName: faker.person.fullName(),
		address: faker.location.streetAddress(),
		phoneNumber: faker.phone.number(),
		speciality: faker.person.jobTitle(),
		specialityCode: faker.number.int({ min: 100, max: 1000 }),
		faculty: faker.helpers.arrayElement(faculties),
		formEducation: faker.helpers.arrayElement(formEducationOptions),
		stepEducation: faker.helpers.arrayElement(stepEducationOptions),
		yearOfGraduation: faker.date.past({ years: 10 }).getFullYear()
	};
}
