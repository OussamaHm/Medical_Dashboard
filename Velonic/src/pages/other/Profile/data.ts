// images
import img1 from '@/assets/images/small/small-1.jpg'
import img2 from '@/assets/images/small/small-2.jpg'
import img3 from '@/assets/images/small/small-3.jpg'
import img4 from '@/assets/images/small/small-4.jpg'

interface ProfileActivity {
	time: string
	name: string
	title: string
	subName?: string
	image?: string[]
}
const name = String(localStorage.getItem('currentUserName'));
export const profileActivity: ProfileActivity[] = [
	{
		time: '',
		name: name,
		title: 'The patient underwent a comprehensive health check, revealing normal blood pressure, cholesterol levels, and a healthy heart rate.',
	},
	{
		time: '',
		name: name,
		title: 'The medical examination indicates elevated blood sugar levels and mild dehydration.',
	},
	{
		time: '',
		name: name,
		title: 'Routine checkup reveals normal vitals, but a slightly low vitamin D level.',
	},
	{
		time: '',
		name: name,
		title: 'The patient reported respiratory symptoms, and the examination confirmed a mild respiratory infection.',
	},
	{
		time: '',
		name: name,
		title: 'Prescribed antibiotics, rest, and increased fluid intake. Follow-up scheduled in ten days to monitor recovery progress.',
	},
	{
		time: '',
		name: name,
		title: 'Advised vitamin D supplements, exposure to sunlight, and dietary changes. A follow-up appointment is recommended in one month',

	},
]
