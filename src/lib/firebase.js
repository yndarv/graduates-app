import { initializeApp } from 'firebase/app';
import {
	addDoc,
	getDoc,
	getDocs,
	updateDoc,
	startAfter,
	query,
	orderBy,
	limit,
	deleteDoc,
	collection,
	doc,
	getFirestore
} from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyBJ78c7mkOfQAz0J69ROhFKCxHas3hmrq8',
	authDomain: 'graduates-demo.firebaseapp.com',
	projectId: 'graduates-demo',
	storageBucket: 'graduates-demo.firebasestorage.app',
	messagingSenderId: '732621178485',
	appId: '1:732621178485:web:2f9044efa1e45b19465a3c'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export async function createStudent(studentData) {
	try {
		const docRef = await addDoc(collection(db, 'students'), studentData);
		console.log('Document written with ID: ', docRef.id);
		return docRef.id;
	} catch (error) {
		console.error('Error adding document: ', error);
	}
}

export async function readStudent(studentId) {
	try {
		const docRef = doc(db, 'students', studentId);
		const docSnap = await getDoc(docRef);

		if (docSnap.exists()) {
			console.log('Document data:', docSnap.data());
			return docSnap.data();
		} else {
			console.log('No such document!');
			return null;
		}
	} catch (e) {
		console.error('Error getting document:', e);
	}
}

export async function readAllStudents() {
	try {
		const querySnapshot = await getDocs(collection(db, 'students'));
		const students = [];
		querySnapshot.forEach((doc) => {
			students.push({ id: doc.id, ...doc.data() });
		});
		return students;
	} catch (e) {
		console.error('Error getting documents: ', e);
	}
}

export async function updateStudent(studentId, updatedData) {
	try {
		const docRef = doc(db, 'students', studentId);
		await updateDoc(docRef, updatedData);
		console.log('Document successfully updated!');
	} catch (e) {
		console.error('Error updating document: ', e);
	}
}

export async function deleteStudent(studentId) {
	try {
		console.log('Deleting student with ID:', studentId);
		const docRef = doc(db, 'students', studentId);
		await deleteDoc(docRef);
		console.log('Document successfully deleted!');
	} catch (e) {
		console.error('Error deleting document: ', e);
	}
}

export async function readStudentsPage(pageNumber = 1, pageSize = 5) {
	try {
		const studentsCollection = collection(db, 'students');
		const firstQuery = query(studentsCollection, orderBy('FullName'), limit(pageSize));
		const firstSnapshot = await getDocs(firstQuery);

		// Calculate the number of documents to skip
		const skips = (pageNumber - 1) * pageSize;

		if (skips >= firstSnapshot.size) {
			// If the skips are greater than or equal to the number of documents in the first snapshot,
			// we need to get the last document of the previous page to start after it.
			const lastDoc = firstSnapshot.docs[firstSnapshot.size - 1];
			const nextQuery = query(
				studentsCollection,
				orderBy('FullName'),
				startAfter(lastDoc),
				limit(pageSize)
			);
			const nextSnapshot = await getDocs(nextQuery);

			const students = [];
			nextSnapshot.forEach((doc) => {
				students.push({ id: doc.id, ...doc.data() });
			});
			return students;
		} else {
			// If the skips are less than the number of documents in the first snapshot,
			// we can just slice the first snapshot.
			const students = [];
			firstSnapshot.forEach((doc, index) => {
				if (index >= skips) {
					students.push({ id: doc.id, ...doc.data() });
				}
			});
			return students;
		}
	} catch (e) {
		console.error('Error getting documents: ', e);
	}
}
