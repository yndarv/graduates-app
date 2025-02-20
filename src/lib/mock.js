import { fakerRU as faker } from '@faker-js/faker';

let id = 1;

export function mockStudent() {
	const faculties = ['ЭФ', 'ФЭИС', 'МФ', 'АСФ', 'ФИСЕ'];
	const formEducationOptions = ['бюджет', 'платно'];
	const stepEducationOptions = ['первая ступень', 'вторая ступень'];

	return {
		id: id++,
		fullName: faker.person.fullName(),
		address: `${faker.location.streetAddress()}, ${faker.location.city()}`,
		telNumber: faker.phone.number(),
		speciality: faker.person.jobTitle(),
		code: faker.number.int({ min: 100, max: 1000 }),
		faculty: faker.helpers.arrayElement(faculties),
		formEducation: faker.helpers.arrayElement(formEducationOptions),
		stepEducation: faker.helpers.arrayElement(stepEducationOptions),
		yearOfGraduation: faker.date.past({ years: 10 }).getFullYear()
	};
}

export function mockDistribution({ fullName }) {
	return {
		fullName,
		profiling: faker.person.jobArea(),
		nameCompany: faker.company.name(),
		nameCompanyObl: faker.location.state(),
		nameCompanyGorod: faker.location.city(),
		nameCompanyRajon: faker.location.county(),
		basedNameCompany: faker.company.buzzAdjective(),
		otherOrganization: faker.company.buzzVerb(),
		writedRequestofDistribution: faker.company.buzzNoun(),
		targetAgreement: faker.company.buzzAdjective(),
		olympiad: faker.company.buzzNoun(),
		confirmationArrivalEnterprise: faker.datatype.boolean(),
		jobTitle: faker.person.jobTitle(),
		working: faker.datatype.boolean(),
		servesArmy: faker.datatype.boolean(),
		onMaternityLeave: faker.datatype.boolean(),
		worked: faker.datatype.boolean(),
		dateLetter: faker.date.past({ years: 10 }).getUTCDate(),
		reDistributed: faker.datatype.boolean(),
		notes: faker.lorem.sentence(),
		periodCompulsoryService: faker.datatype.number({ min: 1, max: 10 }),
		selfCare: faker.datatype.boolean(),
		consolidation: faker.datatype.boolean()
	};
}

export function mockRedistribution({ fullName }) {
	return {
		fullName,
		nameCompany: faker.company.name(),
		nameCompanyObl: faker.location.state(),
		nameCompanyGorod: faker.location.city(),
		nameCompanyRajon: faker.location.county(),
		basedNameCompany: faker.company.buzzAdjective(),
		otherOrganization: faker.company.buzzVerb(),
		writedRequestofDistribution: faker.company.buzzNoun(),
		targetAgreement: faker.company.buzzAdj
	};
}
