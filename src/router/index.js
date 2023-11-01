import ViewNotes from '@/views/ViewNotes.vue';
import ViewStats from '@/views/ViewStats.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'Notes',
			component: ViewNotes
		},
		{
			path: '/stats',
			name: 'Stats',
			component: ViewStats
		}
	]
});

export default router;
